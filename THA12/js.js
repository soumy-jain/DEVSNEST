var taskq = document.querySelector('#task');
var submitq = document.querySelector('#submit');
var listq = document.querySelector('#list');
showList();
submitq.addEventListener('click', () =>{
    let s = taskq.value;
    if(s.length>0)
    {
        let arr = JSON.parse(localStorage.getItem("tasks"));
        if(arr==null)
            arr=[]
        arr.push(s);
        localStorage.setItem("tasks", JSON.stringify(arr));
    }
    taskq.value="";
    showList();
});
function showList()
{
    let arr = JSON.parse(localStorage.getItem("tasks"));
    if(arr!=null)
    {
        listq.innerHTML = "";
        arr.forEach(e => {
            listq.innerHTML += `<li>${e} <i class="fas fa-times-circle"></i><br></li>`
        });
    }
    removeItem();
}

function removeItem()
{
    var buttons = document.querySelectorAll('i');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            let arr = JSON.parse(localStorage.getItem('tasks'));
            if(arr!=null)
            {
                let s=button.parentNode.innerText;
                s=s.slice(0,s.lastIndexOf(" ")); // s.pop() also works
                let p =-1;
                arr.forEach(e => {
                    p++;
                    if(e==s)
                    {
                        arr.splice(p, 1);
                        localStorage.setItem("tasks", JSON.stringify(arr));
                        e="";
                    }
                });
            }
            showList();
        });
    });
}