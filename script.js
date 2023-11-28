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
