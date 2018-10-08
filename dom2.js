var  i=1;
var ul=document.createElement("ul")
function addList(){
var li=document.createElement("li")
li.setAttribute("id",`item${i}`)
li.innerText="item"+i
ul.appendChild(li)
document.body.appendChild(ul)
i++
}
function repalaceItem(){
    var position=prompt("Enter a item")
    var item3=document.querySelector(`#item${position}`)
    item3.innerText=prompt("Enter your item name:")
}
function removeItem(){
    var position=prompt("Enter a item")
    var item=document.querySelector(`#item${position}`)
    // item.outerHTML=""

    // document.ul.removeChild(ul)
    ul.removeChild(item)
}
function removeAll(){
    var ul=document.querySelector("ul")
    // ul.outerHTML=""      or
    document.body.removeChild(ul)
}