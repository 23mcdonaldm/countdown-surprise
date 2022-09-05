const countdown = () => {
    const countDate = new Date('November 23, 2022 00:00:00').getTime();
    const now = new Date().getTime();
    const countdownDiff = countDate - now;

    console.log(countDate);
    console.log(now);
    console.log(countdownDiff);


    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    /*if(countdownDiff >= 86400) {*/

    let dayAmount = Math.floor(countdownDiff / day);   
    let hourAmount = Math.floor((countdownDiff % day) / hour);   
    let minuteAmount = Math.floor((countdownDiff % hour) / minute);   
    let secondAmount = Math.floor((countdownDiff % minute) / second);
    
    let dayText = document.getElementById("day");
    dayText.innerText=dayAmount;
    let hourText = document.getElementById("hour");
    hourText.innerText=hourAmount;
    let minuteText = document.getElementById("minute");
    minuteText.innerText=minuteAmount;
    let secondText = document.getElementById("second");
    secondText.innerText=secondAmount;
    

    let flumeText = document.getElementById("flumeTime");
    flumeText.innerText= Math.floor(countdownDiff / (139 * second));
    let topgunText = document.getElementById("topgunTime");
    topgunText.innerText= Math.floor(countdownDiff / (137 * minute));
    let santamonicaText = document.getElementById("santamonicaTime");
    santamonicaText.innerText= Math.floor(countdownDiff / (30 * minute));
    let mollyText = document.getElementById("mollyTime");
    mollyText.innerText= Math.floor(countdownDiff / (20 * minute));
    let houseText = document.getElementById("houseTime");
    houseText.innerText= Math.floor(countdownDiff / (15 * minute));
    let clarkText = document.getElementById("movieTime");
    clarkText.innerText= Math.floor(countdownDiff / (290 * minute));
    /*
    document.querySelector(".day").innerText = dayAmount;
    document.querySelector(".hour").innerText = hourAmount;
    document.querySelector(".minute").innerText = minuteAmount;
    document.querySelector(".second").innerText = secondAmount;
    */
};

setInterval(countdown, 1000);



