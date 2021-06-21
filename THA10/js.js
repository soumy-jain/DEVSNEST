function getRandomInt(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var blocks=document.querySelectorAll('.block');
var scsc=document.querySelector('#sc');
var move=document.querySelector('#mv');

var object={"1":"url(img/Ace.png)", "2":"url(img/Jack.png)", "3":"url(img/Joker.jpg)", "4":"url(img/King.png)", "5":"url(img/PC10.jpg)", "6":"url(img/Queen.png)"};
var used=[];
var k=1;
for(i in object)
{
    while(1)
    {
        let rand_a=getRandomInt(0,11);
        let rand_b=getRandomInt(0,11);
        if(rand_a!=rand_b && used.find(e=> e==rand_a)==undefined && used.find(e=> e==rand_b)==undefined)
        {
            used.push(rand_a);
            used.push(rand_b);
            let a=blocks[rand_a];
            let b=blocks[rand_b];
            // 0->first class test, 1->first class, 2->second class text and so on...
            a.childNodes[3].style.backgroundImage = object[i];
            b.childNodes[3].style.backgroundImage = object[i];
            a.id=parseInt(k);
            k++;
            b.id=parseInt(k);
            k++;
            break;
        }
    }
}
var prev, curr, i=0, clicked=0, score=0, moves=0;
blocks.forEach(block => {
    block.addEventListener('click',() => {
        if(clicked)
            return ;
        if(block==curr)
            return;
        block.classList.toggle('is-flipped');
        prev=curr;
        curr=block;
        moves++;
        if(moves%2==0)
        {
            clicked=1;
            setTimeout(() => {
                if(curr.childNodes[3].style.backgroundImage==prev.childNodes[3].style.backgroundImage)
                {
                    curr.style.visibility="hidden";
                    prev.style.visibility="hidden";
                    score++;
                    scsc.textContent=score;
                    if(score==6)
                    {
                        alert("Hurray, You won! Why not play again to improve your moves?");
                        return ;
                    }
                }
                else
                {
                    curr.classList.toggle('is-flipped');
                    prev.classList.toggle('is-flipped');
                }
                clicked=0;
            },1500);
        }
        mv.textContent=moves;
    });
});