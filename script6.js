function score(){
    let a = parseFloat(prompt("Enter the correct answer:"));
    let b = parseInt(prompt("Enter the partially correct answer:"));
    let c = parseInt(prompt("Enter the wrong answer:"));

    let score = 3 * a + b - 2 * c;
    if(score < 0){
        score = 0;
    }
    if(a+b+c > 50){
        score -= 10;
    }
    if(score >= 60){
        alert("PASS! " + score);
    }
    else{
        alert("FAIL! " + score);
    }
}