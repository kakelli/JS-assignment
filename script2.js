function roll_seed(){
    let N = parseInt(prompt("Enter a number"));
    let seed = parseInt(prompt("Enter a seed"));
    for(let i = 0; i < 3; i++){
        if(N % 2 == 0){
            N = N / 2+seed;
        }
        else{
            N = N * 3 -seed;
        }
    }

    if(N >= 100 && N<=999 && Math.floor(N/10)%10 == seed){
        alert("YES, " + N);
    }
    else{
        alert("NO, " + N);
    }
    
}