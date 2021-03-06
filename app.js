
    const btn = document.querySelector('button');
    const time = document.querySelector('span');
    const check = document.querySelector('input');

    const sound = new Audio('MLG_HORNS.mp3');

    let nofity = false;
    let btnAction = 1;
    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    let timeInterval = null;

    btn.addEventListener('click', () => {
      if(btnAction){
        btn.innerHTML = 'Stop';
        btnAction = 0;
        timeInterval = setInterval(updateTime, 1000);
      }else{
        btn.innerHTML = 'Restart';
        btnAction = 1;
        stopTime();
      }
    });

    check.addEventListener('click', () => {
      nofity = check.checked;
      
    });

    function updateTime(){
      if(seconds === 59){
        minutes++;
        seconds = 0;
      }else{
        seconds++;
      }

      if(minutes === 59){
        hours++;
        minutes = 0;
      }else if((minutes === 30 || minutes === 59) && seconds === 0 && nofity){
        playSound();
      }

      let m = addLeadingZero(minutes);
      let h = addLeadingZero(hours);
      let s = addLeadingZero(seconds);
      
      time.innerHTML = `${h}:${m}:${s}`;
    }

    function stopTime(){
      if(timeInterval !== null){
        clearInterval(timeInterval);
      }
    }

    function addLeadingZero(value){
      return String(value).length === 1 ? '0'+value : value;
    }

    function playSound(){
      try{
        sound.play();
      }catch(e){
        console.error('Unable to play sound >> ',e);
      }      
    }