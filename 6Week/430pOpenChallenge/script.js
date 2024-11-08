
let select = 0;
let img = new Image();
img.src = "img/donkey.png";


function set(){
    let table = document.getElementById("table");

    for(let i=0; i<10; i++){
        let row = document.createElement("tr");

        for(let j=0; j<10; j++){
            let col = document.createElement("td");
            col.innerHTML = "<img scr=''>";
            row.appendChild(col);
        }
        table.appendChild(row);
    }

    for(let i=0; i<100; i++){
        document.images[i].onclick = moveImg;
    }

    moveImg();
}

function moveImg(){
    document.images[select].src = "";

    select = Math.floor(Math.random()*100);

    document.images[select].src = img.src;
}