// opening date - > 2028
const olympicDate = new Date("2028-07-14T00:00:00").getTime();

// for update the time in every sec
const timer = setInterval(() => {
    const now = Date.now();
    //difference 
    const distance = olympicDate - now;

    // convert milliseconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // result 

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;


    // when countdown stops 
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("message").innerHTML="🎉Olympics Started !";
    }
}, 1000);
