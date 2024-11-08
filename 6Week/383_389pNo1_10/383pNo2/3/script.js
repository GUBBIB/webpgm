function a(){
    let i = document.getElementById("mySpan");
    i.style.border = "2px dotted violet"
}

function b(){
    let i = document.getElementsByTagName("p");
    alert("<p> 태그의 개수는 " + i.length);
}