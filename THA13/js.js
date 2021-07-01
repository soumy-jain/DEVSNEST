var img = document.querySelector('#img');
var but = document.querySelector('button');
var h2 = document.querySelector('#author');
var title = document.querySelector('#title');

but.addEventListener('click', () => {
    xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://meme-api.herokuapp.com/gimme');
    xhr.onload = function() {
        if(this.status == 200)
        {
            response = JSON.parse(xhr.responseText).preview;
            h2.innerText = `Author: ${JSON.parse(xhr.responseText).author}`;
            title.innerText = JSON.parse(xhr.responseText).title;
            if(response.length>=4)
                document.querySelector('#img').src = response[3];
            else
                document.querySelector('#img').src = response[response.length-1];
        }
    };
    xhr.send();
});