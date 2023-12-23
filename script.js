function getRandomValue() {
    return Math.random() * 100 - 50 + 'vw'; 
}

function updateRandomValues() {
    document.documentElement.style.setProperty('--randomX1', getRandomValue());
    document.documentElement.style.setProperty('--randomY1', getRandomValue());
    document.documentElement.style.setProperty('--randomX2', getRandomValue());
    document.documentElement.style.setProperty('--randomY2', getRandomValue());
    document.documentElement.style.setProperty('--randomX3', getRandomValue());
    document.documentElement.style.setProperty('--randomY3', getRandomValue());
    document.documentElement.style.setProperty('--randomX4', getRandomValue());
    document.documentElement.style.setProperty('--randomY4', getRandomValue());
    document.documentElement.style.setProperty('--randomX5', getRandomValue());
    document.documentElement.style.setProperty('--randomY5', getRandomValue());
    document.documentElement.style.setProperty('--randomX6', getRandomValue());
    document.documentElement.style.setProperty('--randomY6', getRandomValue());
    document.documentElement.style.setProperty('--randomX7', getRandomValue());
    document.documentElement.style.setProperty('--randomY7', getRandomValue());
    document.documentElement.style.setProperty('--randomX8', getRandomValue());
    document.documentElement.style.setProperty('--randomY8', getRandomValue());
    document.documentElement.style.setProperty('--randomX9', getRandomValue());
    document.documentElement.style.setProperty('--randomY9', getRandomValue());
}

setInterval(updateRandomValues, 30000);

updateRandomValues();

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


document.addEventListener('DOMContentLoaded', function () {
    const customCursor = document.createElement('div');
    customCursor.className = 'custom-cursor';
  
    const dot = document.createElement('div');
    dot.className = 'dot';
  
    customCursor.appendChild(dot);
    document.body.appendChild(customCursor);
  
    document.addEventListener('mousemove', function (e) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
  
      customCursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });
  });
  

  function toggleDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}


    var scroll = new SmoothScroll('a[data-scroll]', {
        speed: 800,
        offset: 50
    });

    function scrollToSection(event, sectionId) {
        event.preventDefault();
        var targetSection = document.querySelector(sectionId);
        if (targetSection) {
            scroll.animateScroll(targetSection);
        }
    }
