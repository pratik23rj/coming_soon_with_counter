// End Date
const endDate = new Date("Jan 13, 2022 12:00:00").getTime();

// Update count
let x = setInterval(function () {

    // Get current date
    let current = new Date().getTime();

    // To find distance between current date and end date
    let distance = endDate - current;

    // Calculation for days,hours
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display remaining time
    document.getElementById("time").innerHTML = days + " Days " + hours + " Hours " +
        minutes + " Minutes " + seconds + " Seconds ";

    // If time exceeds display message
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "EXPIRED";
    }
}, 1000);