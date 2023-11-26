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

window.addEventListener('load', function () {
    document.body.classList.add('loaded');
});