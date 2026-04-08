function mirror_corr(){
    let N = parseInt(prompt("Enter a number"));
    let K = parseInt(prompt("Enter a second number"));

    let result = -1;

    for(let x = 0; x <= 100000; x++){
        let sum = N + x;
        if(sum % K ==0){
            let str = sum.toString();
            let reversed = str.split("").reverse().join("");
            if(str == reversed){
                result = x;
                 break;
            }
        }
    }
    alert(result)
}