let addBut=document.getElementById('add');
let box=document.querySelector('#box');
let count=0;
addBut.addEventListener('click',()=>{
    let text= box.value;
    box.value="";
    let items=document.querySelector('#items');
    let p=document.createElement('div');
    p.id=`Element${count}`;
    count++;
    p.innerHTML=`<p>${text}</p>  <button id=del${count}>Delete</button>`;
    items.appendChild(p);
})

