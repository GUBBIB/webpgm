let imgarr = document.getElementsByTagName("img");

for(let i=0; i<imgarr.length; i++){
    let obj = imgarr[i];
    obj.style.zIndex = i;
    obj.style.left = "10px";
    obj.style.top = "20px;"

    obj.onclick = a;
}

function a(){
    for(let i=0; i<imgarr.length; i++){
        let obj = imgarr[i];
        obj.style.zIndex++;
        obj.style.zIndex %= imgarr.length;
    }
}