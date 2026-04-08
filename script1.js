function digit_gatekeeping() {
    // 1. Take inputs
    let L = parseInt(prompt("Enter L (Start Range):"));
    let R = parseInt(prompt("Enter R (End Range):"));
    let K = parseInt(prompt("Enter K (Divisor):"));
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    let count = 0;
    for (let x = L; x <= R; x++) {
        if (x % K === 0) {
            let strX = x.toString();
            if (!strX.includes('0')) {
                let digitSum = 0;
                for (let char of strX) {
                    digitSum += parseInt(char);
                }

                if (isPrime(digitSum)) {
                    count++;
                }
            }
        }
    }
    alert("Total matching integers: " + count);
}