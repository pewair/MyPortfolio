function updateLocalTime() {
    const localTime = new Date();
    
    const gmtOffset = localTime.getTimezoneOffset();
    
    const gmtOffsetHours = Math.floor(Math.abs(gmtOffset) / 60);
    const gmtOffsetMinutes = Math.abs(gmtOffset) % 60;
    
    const gmtSign = gmtOffset >= 0 ? '+' : '+';
    
    const gmtString = `<br>GMT (${gmtSign}${gmtOffsetHours}:${gmtOffsetMinutes})`;
    
    const hours = localTime.getHours().toString().padStart(2, '0');
    const minutes = localTime.getMinutes().toString().padStart(2, '0');
    
    const localTimeString = `MY LOCAL TIME ${hours}:${minutes}${gmtString}`;
    
    document.getElementById('local-time').innerHTML = localTimeString;
}

updateLocalTime();

setInterval(updateLocalTime, 60000);

const fonts = [
    'Kirang Haerang',
    'Indie Flower',
    'Rye',
    'Amatic SC',
    'Bangers',
    'Fredericka the Great'
  ];
  const letters = document.querySelectorAll('.letter');
  let count=0;
  
  const rollIntro = () => {
    letters.forEach(letter => {
      
      let randomFontIndex = Math.floor(Math.random() * fonts.length);
      let randomFont = fonts[randomFontIndex];
      letter.style.fontFamily=randomFont;
    });
  }
  let introAnimation = setInterval(function() {
    rollIntro();
    if(count>15)
      clearInterval(introAnimation);
    count++;
  },350);

  var delayInMilliseconds = 6000;

setTimeout(function() {
  window.location.href = "index.html#main";
}, delayInMilliseconds);


document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      var main = document.getElementById('main');

      window.scrollTo({
        top: section2.offsetTop,
        behavior: 'smooth'
      });
    }, 6000); 
  });