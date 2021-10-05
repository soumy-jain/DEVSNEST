import "./App.css";
import Post from "./Post";
import { useEffect, useState } from "react";
import { db, auth } from "./firebase";
import { Button, Input, Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ImageUpload from './ImageUpload';
import InstagramEmbed from 'react-instagram-embed';
import { ExploreOutlined, FavoriteBorder, Home, HomeOutlined, Send, SendOutlined } from "@material-ui/icons";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [signInopen, setSignInOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSignInOpen = () => {
    setSignInOpen(true);
  };

  const handleSignInClose = () => {
    setSignInOpen(false);
  };
  useEffect(() => {
    db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, [user, username]);
  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: username,
        });
      })
      .catch((error) => alert(error.message));
  };
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));

      setSignInOpen(false);
  };
  return (
    <div className="app">

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className="login_modal"
      >
        <div style={modalStyle} className={classes.paper}>
          <form className="app_signUp">
            <center>
              <img
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt=""
              />
            </center>
            <Input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={signUp} type="submit">
              Submit
            </Button>
          </form>
        </div>
      </Modal>



      <Modal
        open={signInopen}
        onClose={handleSignInClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className="login_modal"
      >
        <div style={modalStyle} className={classes.paper}>
          <form className="app_signUp">
            <center>
              <img
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt=""
              />
            </center>
            <Input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={signIn} type="submit">
              Submit
            </Button>
          </form>
        </div>
      </Modal>
      <div className="app_header">
        <img
          className="app_headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
        <div className="app_header_right">

        {user ? (
         <>
           <HomeOutlined/>
          <SendOutlined/>
          <ExploreOutlined/>
          <FavoriteBorder/>
        <Button onClick={() => auth.signOut()}>Sign Out</Button>
         </>
      ) : (
        <div className="login_container">
          <Button onClick={() => setSignInOpen(true)}>Sign In</Button>
          <Button onClick={() => setOpen(true)}>Sign Up</Button>
        </div>
      )}
        </div>
      </div>
      <div className="app_posts">
      {posts.map((post) => (
        <Post
          key={post.id}
          postId={post.id}
          user={user}
          imageURL={post.data.imageURL}
          caption={post.data.caption}
          username={post.data.username}
        />
      ))}
      </div>
       {
        user?.displayName ? (<ImageUpload username={user.displayName}/>):(<h3 className="nulluser_message">Sorry you need to sign in to start commenting and posting</h3>)
      }
    </div>
  );
}

export default App;
