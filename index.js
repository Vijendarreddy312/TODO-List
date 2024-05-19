let text = document.getElementById("text");
let items = document.getElementById("items");

function add(){
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(text.value));
    items.appendChild(li);
    let  btn = document.createElement('button');
    btn.innerHTML="\u00d7";
    li.appendChild(btn);
    text.value="";
}
items.addEventListener('click',function(e){
    if(e.target.tagName=="BUTTON"){
        e.target.parentElement.remove();
    }
})
