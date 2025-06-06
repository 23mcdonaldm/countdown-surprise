let currentTargetIndex = 0;

    
    const targetDates = [
      new Date('May 19, 2025 12:00:00'),
        new Date('November 22, 2024 8:00:15'),
        new Date('December 15, 2024 12:00:00'),
        new Date('March 14, 2025 00:00:00'),
        new Date('May 21, 2025 00:00:00')
    ];
    
    
    const arrowLeft = document.querySelector(".arrow-left");
    const arrowRight = document.querySelector(".arrow-right");

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    function updateCountdown() {
        const now = new Date().getTime();
        const countDate = targetDates[currentTargetIndex].getTime();
        const countdownDiff = countDate - now;
        console.log(currentTargetIndex);
        
        let dayAmount;
        let hourAmount;
        let minuteAmount;
        let secondAmount;
        if(countdownDiff > 0) {
          dayAmount = Math.floor(countdownDiff / day);   
          hourAmount = Math.floor((countdownDiff % day) / hour);   
          minuteAmount = Math.floor((countdownDiff % hour) / minute);   
          secondAmount = Math.floor((countdownDiff % minute) / second);
        } else {
          dayAmount = 0;
          hourAmount = 0;
          minuteAmount = 0;
          secondAmount = 0;
        }
        
    
        let dayText = document.getElementById("day");
        dayText.innerText=dayAmount;
        let hourText = document.getElementById("hour");
        hourText.innerText=hourAmount;
        let minuteText = document.getElementById("minute");
        minuteText.innerText=minuteAmount;
        let secondText = document.getElementById("second");
        secondText.innerText=secondAmount;

        let holiday = document.getElementById("break");
        if(currentTargetIndex == 0) {holiday.innerText = "Summer";}
        if(currentTargetIndex == 1) {holiday.innerText = "Thanksgiving";}
        if(currentTargetIndex == 2) {holiday.innerText = "Christmas";}
        if(currentTargetIndex == 3) {holiday.innerText = "Spring";}
        if(currentTargetIndex == 4) {holiday.innerText = "Summer";}
        /*memories*/
        let europeText = document.getElementById("europeTime");
        europeText.innerText= Math.floor(countdownDiff / (14 * day));
        let canadaText = document.getElementById("canadaTime");
        canadaText.innerText= Math.floor(countdownDiff / (12 * day));
        let santamonicaText = document.getElementById("santamonicaTime");
        santamonicaText.innerText= Math.floor(countdownDiff / (30 * minute));
        let veniceText = document.getElementById("veniceTime");
        veniceText.innerText= Math.floor(countdownDiff / (20 * minute));
        let bbText = document.getElementById("bbTime");
        bbText.innerText= Math.floor(countdownDiff / (48 * minute));
        let movieText = document.getElementById("movieTime");
        movieText.innerText= Math.floor(countdownDiff / (114 * minute));
    }
    /*const countDate = new Date('November 22, 2023 00:00:00').getTime();*/
    /*const now = new Date().getTime();*/
    /*const countdownDiff = countDate - now;*/

    /*console.log(countDate);
    console.log(now);
    console.log(countdownDiff);*/

    function updateTargetDate(offset) {
        currentTargetIndex = (currentTargetIndex + offset + targetDates.length) % targetDates.length;
      }
      
     /*function updateTargetDate(offset, number) {
        let i = number + offset;
        if(i > targetDates.length - 1) {currentTargetIndex = 0}
        if(i<0) {currentTargetIndex = targetDates.length - 1}
        else {
            currentTargetIndex = i;
        }
     }
     */
      
      arrowLeft.addEventListener("click", () => {
        updateTargetDate(-1);
        
      });
      
      arrowRight.addEventListener("click", () => {
        updateTargetDate(1);
        
      });
    
      const ily = document.querySelector(".text");
      ily.addEventListener("click", () => {
        window.location.href = "why.html";
      });

    /*if(countdownDiff >= 86400) {*/
    /*
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
    */
    /*
    let europeText = document.getElementById("europeTime");
    europeText.innerText= Math.floor(countdownDiff / (14 * day));
    let canadaText = document.getElementById("canadaTime");
    canadaText.innerText= Math.floor(countdownDiff / (12 * day));
    let santamonicaText = document.getElementById("santamonicaTime");
    santamonicaText.innerText= Math.floor(countdownDiff / (30 * minute));
    let veniceText = document.getElementById("veniceTime");
    veniceText.innerText= Math.floor(countdownDiff / (20 * minute));
    let bbText = document.getElementById("bbTime");
    bbText.innerText= Math.floor(countdownDiff / (48 * minute));
    let movieText = document.getElementById("movieTime");
    movieText.innerText= Math.floor(countdownDiff / (114 * minute));
    */
    
    /*
    document.querySelector(".day").innerText = dayAmount;
    document.querySelector(".hour").innerText = hourAmount;
    document.querySelector(".minute").innerText = minuteAmount;
    document.querySelector(".second").innerText = secondAmount;
    */
updateCountdown();
setInterval(updateCountdown, 1000);
