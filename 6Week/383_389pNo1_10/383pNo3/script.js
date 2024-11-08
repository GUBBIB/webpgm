function a(){

    let objarr = document.getElementsByTagName("span");

    for(let i=0; i<objarr.length; i++){
        let obj = objarr[i];
        let style = window.getComputedStyle(obj);
        let visi = style.getPropertyValue("visibility");

        if(visi == "hidden"){
            obj.style.visibility = "visible";
        } else {
            obj.style.visibility = "hidden";
        }
    }
}