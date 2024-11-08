function a(obj){
    let i = prompt("라면을 끓이는 순서를 입력하라.");
    if(i == null || i == ""){
        return;
    }
    
    let li = document.createElement("li")
    li.innerHTML = i;
    obj.appendChild(li);
}