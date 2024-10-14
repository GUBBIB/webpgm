window.onload = function() {

    var context = document.getElementById("canvas").getContext("2d");

    // 얼굴
    context.beginPath();
    context.arc(150, 100, 70, 0, Math.PI * 2);
    context.lineWidth = 10;
    context.lineCap = 'round';
    context.strokeStyle = 'rgba(178, 147, 255, 0.5)';
    context.stroke();

    // 왼쪽 눈
    context.beginPath();
    context.arc(120, 90, 10, -(Math.PI), 0);
    context.lineWidth = 5;
    context.lineCap = 'round';
    context.strokeStyle = 'rgba(178, 147, 255, 0.5)';
    context.stroke();

    // 오른쪽 눈 
    context.beginPath();
    context.arc(180, 90, 10, -(Math.PI), 0);
    context.lineWidth = 5;
    context.lineCap = 'round';
    context.strokeStyle = 'rgba(178, 147, 255, 0.5)';
    context.stroke();

    // 입술 윗 선
    context.beginPath();
    context.moveTo(130, 120);
    context.lineTo(170, 120);
    context.lineWidth = 3;
    context.lineCap = 'round';
    context.strokeStyle = 'rgba(178, 147, 255, 0.5)';
    context.stroke();

    // 입술 아래 곡선
    context.beginPath();
    context.arc(150, 120, 20, 0, -(Math.PI));
    context.lineWidth = 3;
    context.lineCap = 'round';
    context.strokeStyle = 'rgba(178, 147, 255, 0.5)';
    context.stroke();

    // 글자
    context.font = "bold 24px MENU_FONT";
    context.fillText("Hola~ 안녕하세요~ ", 280, 100);
    context.stroke();
	
}