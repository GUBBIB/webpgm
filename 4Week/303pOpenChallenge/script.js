let n = prompt("정수를 입력하세요");
n = parseInt(n);

if(!isNaN(n)){
    for(i=1; i<=n; i++){
        for(j=1; j<=i; j++){
            document.write("*");
        }
        document.write("<br>");
    }    
} else {
    document.write("입력 오류 입니다.");
}
