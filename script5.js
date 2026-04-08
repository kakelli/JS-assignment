function skip_num(){
    let N = parseInt(prompt("Enter N:"));
    let seed = parseInt(prompt("Enter seed:"));

    let currentSum = 0;
    let m = 0;

    while (currentSum < N) {
        m++;
  
        if (m % (seed + 2) !== 0) {
            currentSum += m;
        }
    }

}

