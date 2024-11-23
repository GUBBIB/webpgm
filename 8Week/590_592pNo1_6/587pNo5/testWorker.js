onmessage = function (e) {
    let score = e.data;
    let grade = "F";

    score = parseInt(score);

    switch(Math.floor(score/10)){
        case 10: case 9:
            grade = "A";
            break;

        case 8:
            grade = "B";
            break;

        case 7:
            grade = "C";
            break;

        case 6:
            grade = "D";
            break;
    }

    this.postMessage(grade);
}