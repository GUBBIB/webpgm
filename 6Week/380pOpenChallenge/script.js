let cnt = 0;
let arr = [0, 0, 0];
let arrChk = [true, true, true];

function numChange(e){
    let n = Math.floor(Math.random()*3);
    let obj = e.target;

    if(obj.id == "one" && arrChk[0]){
        obj.innerHTML = n;
        arr[0] = n;
        arrChk[0] = false;
        cnt++;
    } else if(obj.id == "two" && arrChk[1]){
        obj.innerHTML = n;
        arr[1] = n;
        arrChk[1] = false;
        cnt++;
    } else if(obj.id == "three" && arrChk[2]){
        obj.innerHTML = n;
        arr[2] = n;
        arrChk[2] = false;
        cnt++;
    }

    if(cnt == 3){
        show();
    }
}

function show(){
    let result = document.getElementById("msg");
    if(arr[0] == arr[1] && arr[1] == arr[2]){
        result.innerHTML = "Success(click here to do again)";
    } else {
        result.innerHTML = "fail(click here to do again)";
    }
}

function reset(){
    arr = [0, 0, 0];
    arrChk = [true, true, true];

    document.getElementById("one").innerHTML = 0;
    document.getElementById("two").innerHTML = 0;
    document.getElementById("three").innerHTML = 0;
    document.getElementById("msg").innerHTML = "";

    cnt = 0;
}