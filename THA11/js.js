var quess=[ 
    {"h": "Which company designed JavaScript?", "op1":"Microsoft", "op2":"Macrosoft", "op3":"Netscape", "op4":"Google" , "ans":"op3"}, 
    {"h": "Which college produces the best coders of the world?", "op1":"MITS", "op2":"IIT Perpur", "op3":"IIT GZB", "op4":"Whatsapp University" , "ans":"op3"},
    {"h": "Who designed C++?", "op1":"Bill Gates", "op2":"Donald Trump", "op3":"Bjarne Stroustrup", "op4":"Jar Syrup" , "ans":"op3"}, 
    {"h": "Are Java and JavaScript same?", "op1":"Yes", "op2":"No", "op3":"Maybe", "op4":"I believe in equality" , "ans":"op2"},
    {"h": "Which is the best coding community of 2021?", "op1":"Anonymous", "op2":"8bit Coders", "op3":"Stack Underflow", "op4":"HackerTank" , "ans":"op2"}
];

var q=document.querySelector(".ques");
var b1=document.querySelector("#op1");
var b2=document.querySelector("#op2");
var b3=document.querySelector("#op3");
var b4=document.querySelector("#op4");

var i=0, score=0;
function putq()
{
    q.innerText=quess[i].h;
    b1.innerText=quess[i].op1;
    b2.innerText=quess[i].op2;
    b3.innerText=quess[i].op3;
    b4.innerText=quess[i].op4;
}

document.querySelector("#play-again").addEventListener('click', () => {
    window.location.reload();
});
var selbutt=document.querySelectorAll(".butt");
var e=document.querySelector(".enter");
e.addEventListener('click', () =>{
    e.style.display="none";
    document.querySelector(".inquiz").style.display="block";
    putq();
    selbutt.forEach(but =>{
        but.addEventListener('click', () =>{
            if(i>=5)
                return ;
            if(but.id==quess[i].ans)
            {
                score++;
            }
            i++;
            setTimeout(() => {
                document.querySelector(".inquiz").classList.remove("animate__animated");
                document.querySelector(".inquiz").classList.remove("animate__flipOutX");
                if(i>=5)
                {
                    document.querySelector(".inquiz").style.display="none";
                    document.querySelector(".result").style.display="block";
                    document.querySelector("#res").innerText=`YOU SCORED ${score}/${quess.length}`;
                    return ;
                }
            putq();
            },800);
            document.querySelector(".inquiz").classList.add("animate__animated");
            document.querySelector(".inquiz").classList.add("animate__flipOutX");
        });
    });
});

// e.addEventListener('click', ()=>{
//     e.style.display="none";
//     document.querySelector(".inquiz").style.display="block";
// });

// putq();
// selbutt.forEach(but =>{
//     but.addEventListener('click', () =>{
//         if(i>=5)
//             return ;
//         if(but.id==quess[i].ans)
//         {
//             score++;
//         }
//         i++;
//         setTimeout(() => {
//             document.querySelector(".inquiz").classList.remove("animate__animated");
//             document.querySelector(".inquiz").classList.remove("animate__flipOutX");
//             if(i>=5)
//             {
//                 document.querySelector(".inquiz").style.display="none";
//                 document.querySelector(".result").style.display="block";
//                 document.querySelector("#res").innerText=`YOU SCORED ${score}/${quess.length}`;
//                 return ;
//             }
//         putq();
//         },800);
//         document.querySelector(".inquiz").classList.add("animate__animated");
//         document.querySelector(".inquiz").classList.add("animate__flipOutX");
//     });
// });