function fare_calculator(){
    let base = parseFloat(prompt("Enter the base fare:"));
    let distance = parseFloat(prompt("Enter the distance traveled (in km):"));
    let minutesLate = parseInt(prompt("Enter the number of minutes late:"));
    let seed = parseInt(prompt("Enter a random seed:"));

    let fare = base + 7 *distance;
    if(minutesLate > 15){
        fare += 20;
    }
    if(distance > 10){
        fare += Math.floor(0.01 * fare);
    }
    if(seed % 2 === 0){
        fare = fare + seed;
    }
    else{
        fare = fare - seed;
    }

    fare = Math.ceil(fare / 5) * 5;
    alert("The total fare is: " + fare);
}