Digit Gatekeeping:
    We use a Linear Scan with Early Exit to process the range [L, R].
    a. Check x % K === 0 first. This is the fastest check and eliminates the most numbers immediately.
    b. Convert valid numbers to strings and use .includes('0') to reject any containing the digit zero
    c. Sum the individual characters of the string.
    d.  Validate the sum using a helper function that checks for factors up to $\sqrt{n}$.

    Time Complexity: O(NlogR)
    Space Complexity: O(logR)

Roll Seed:
    The Roll-Seed Lock algorithm is a fixed-iteration simulation that transforms an initial value $N$ over three steps and validates the final result based on range and digit matching.
    a. Iterative Transformation: We perform exactly 3 loops. In each loop, we apply a parity-based rule:
        -> If Even: $current = (current / 2) + seed$
        -> If Odd: $current = (current \times 3) - seed$
    b. We verify if the final number falls within the three-digit range $[100, 999]$.
    c. By converting the number to a string, we access the character at index 1 (the tens place).
    d. If the number is in range and the middle digit matches the original seed, the lock opens ("YES").

    Time Complexity: O(1)
    Space Complexity: O{1}

Mirro Corridor:
    The Mirror Corridor algorithm finds the smallest non-negative integer $X$ that, when added to $N$, results in a number that is both a multiple of $K$ and a palindrome.
    a. We start at $X = 0$ and increment by 1. This ensures that the first valid number we hit is the smallest possible $X$.
    b. For each step, we calculate $Sum = N + X$.
    c. We check Sum % K === 0. If this fails, we move to the next $X$ immediately.
    d. We convert the Sum to a string.
        -> We reverse the string (using split('').reverse().join('')).
        -> If the original string matches the reversed string, the condition is met.
    e.  If the loop reaches $100,000$ without finding a match, the function returns -1.

    Time Complexity: O(LlogN)
    Space Complexity: O(logN)

Fare Calculator:
    The Fare Calculator is a rule-based simulation that computes the final cost of a ride by applying penalties, surcharges, and a unique "seed-based" adjustment before rounding the total.
    a. The calculation starts with $Base + 7 \times Distance$.
    b.  A flat penalty of $+20$ is added if minutesLate exceeds 15.
    c. If the distance is greater than 10 km, we calculate $10\%$ of the current fare and add only the integer portion (Math.floor) to the total.
    d. This introduces a conditional logic step based on the seed value:
        -> The seed value is subtracted from the fare.
        -> The seed value is added to the fare.
    e. To ensure the result is "user-friendly," we round the final number up to the nearest multiple of 5 using: Math.ceil(fare / 5) * 5.

    Time Complexity: O(1)
    Space Complexity: O(1)

Skip Number: 
    The Skipping Numbers algorithm calculates the smallest integer $m$ required to reach a target sum $N$, while systematically excluding numbers that are multiples of a specific divisor.
    a. The "skip" rule is determined by the input seed. The program identifies multiples of $(seed + 2)$ to exclude from the total
    b.  We start with a sum of 0 and an index $m = 0$.
    c. Inside a while loop, we increment $m$ and check the condition: if (m % divisor !== 0).
        -> If the condition is met, the value of $m$ is added to the currentSum
        -> If it is a multiple of the divisor, the number is "skipped," and the sum remains unchanged.
    d. The loop continues as long as currentSum < N.
    e. To match the specific requirement where $N=100, seed=3$ results in $15$, the logic ensures that even if $m$ is a skipped number, it is still counted toward the final "steps taken" to reach the sum.

    Time Complexity: O(m)
    Space Complexity: O(1)

Score Judge:
    The Contest Score Judge algorithm computes a final score for a student's submission based on the quantity of correct, partially correct, and wrong answers, applying a safety floor to ensure the score never drops below zero.
    a. We calculate the initial score using three variables:
        -> a (Correct): Worth +3 points each.
        -> b (Partially Correct): Worth +1 point each.
        -> c (Wrong): Worth -2 points each.
        ->  $score = 3a + b - 2c$.
    b. We apply a rule to prevent "negative" mastery. If the resulting calculation is less than 0, we immediately set the score to 0. This is often implemented as Math.max(0, score).
    c. The final adjusted score is then displayed to the user.

    Time Complexity: O(1)
    Space Complexity: O(1)