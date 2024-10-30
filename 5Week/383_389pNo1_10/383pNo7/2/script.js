let n = 90;

function a(obj){
    obj.style.transform = "rotate(" + n + "deg)";
    n += 90;
    n %= 360;
}