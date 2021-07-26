export default function Templates ({templates, setMeme}) {
    return (
        <div className='templates'>
            {templates.map( (temp) => (
                <div key={temp.id} className='papa' onClick= {() =>
                {
                    setMeme(temp)
                }}>
                    <div style={{backgroundImage: `url(${temp.url})`}} className='img'></div>
                </div>
            ))}
        </div>
    )
};