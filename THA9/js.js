var res="<tr>";
for(let i=0;i<10;i++)
{
    res+='<td><i class="fas fa-user fa-3x"></i></td>';
}
res += "</tr>";
var t = res;
for(let i=0; i<9; i++)
{
    res+=t;
}

var x = document.querySelector('table');
x.innerHTML=res;

var cells=document.querySelectorAll('td');
cells.forEach(cell => {
    cell.addEventListener('click', () =>{
        var av = document.querySelector("#avail").textContent;
        var book = parseInt(document.querySelector("#book").textContent);
        if(cell.style.color=="green" || cell.style.color=="")
        {
            av--;
            book++;
            document.querySelector("#book").textContent=book;
            document.querySelector("#avail").textContent=av;
            cell.style.color="red";
            cell.style.border="5px solid red";
            // cell.childNodes[0].style.color = "red";
            // console.log(cell.childNodes[0].style.color);
        }
        else
        {
            av++;
            book--;
            document.querySelector("#book").textContent=book;
            document.querySelector("#avail").textContent=av;
            cell.style.border="5px solid green";
            cell.style.color = "green";
        }
    });
});