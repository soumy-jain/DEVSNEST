import {useState} from 'react';
import { saveAs } from 'file-saver'
export default function Meme({meme, setMeme}) {

    const [info, setInfo] = useState({
        memeId: meme.id,
        username: "devsnesttha22",
        password: "devsnesttha22",
        boxes: []
    });

    function sendInfo() {
        let url= `https://api.imgflip.com/caption_image?template_id=${info.memeId}&username=${info.username}&password=${info.password}`;
        info.boxes.map((box, index) => {
            url+= `&boxes[${index}][text]=${box.text}`;
        });
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            if(data.data!==undefined) // if(data.success==true) also works as 'hinted' in video
                setMeme({...meme, url: data.data.url})
            else
                alert('All fields cannot be left empty')
        })
    }

    return (
        <div className='meme'>
            <img src={meme.url} alt="" />
            <div>
                {
                    [...Array(meme.box_count)].map((_, index) => {
                       return <input type='text' placeholder={`Meme Caption ${index + 1}`} onChange={
                           (e) => {
                               const newBoxes = info.boxes;
                               newBoxes[index] = {text : e.target.value};
                               setInfo({...info, boxes: newBoxes});
                           }
                       }/>
                    })
                }
            </div>
            <div>
                <button onClick={ sendInfo }>Generate Meme</button>
                <button onClick={() => {
                    setMeme(null);
                }}>Back to Templates</button>
                <button onClick={
                    () => {
                        saveAs(meme.url, 'image.jpg');
                    }
                }>Download</button>
            </div>
        </div>
    );
};