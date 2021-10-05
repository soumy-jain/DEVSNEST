import { Button } from '@material-ui/core';
import React, {useState} from 'react'
import {db, storage} from './firebase'
import firebase from 'firebase'
import './ImageUpload.css'
function ImageUpload({username}) {
    const [caption, setCaption] = useState('');
     const [progress, setProgress] = useState(0);
     const [image, setImage] = useState(null);

     const handleChange = (e) =>{
         if(e.target.files[0]){
             setImage(e.target.files[0])
         }
     };

     const handleUpload = () =>{
        if(image){
            const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred/snapshot.totalBytes)*100
                );
                setProgress(progress);
            },
            (error)=>{
                alert(error.message);
            },
            () =>{
                storage.ref("images").child(image.name).getDownloadURL()
                .then(url => {
                    db.collection('posts').add({
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        caption: caption,
                        imageURL: url,
                        username: username
                    });
                    setProgress(0);
                    setCaption("");
                    setImage(null);
                })
            }
        )
        }
     }
    return (
        <div className="imageupload">
            <progress value={progress} max="100" className="imageupload_progress"/>
            <input type="text" placeholder="Enter Caption..." value={caption} onChange={(e)=> setCaption(e.target.value)} className="imageUpload_caption"/>
            <input type="file" onChange={handleChange}/>
            <Button onClick={handleUpload}>
                Upload
            </Button>
        </div>
    )
}

export default ImageUpload
