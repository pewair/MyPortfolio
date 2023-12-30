function generateQRCode(value, element) {
    var qrcode = new QRCode(element, {
        text: value,
        width: 50,
        height: 50,
    });
}

var visitCount = localStorage.getItem("visitCount");

if (visitCount === null) {
    visitCount = 1;
} else {
    visitCount++;
}

localStorage.setItem("visitCount", visitCount);

var elements = document.getElementsByClassName("qrcode");

Array.from(elements).forEach(function(element) {
    generateQRCode(String(visitCount).padStart(6, '0'), element);
});



    var dateTimeDiv = document.querySelector('.dateTime');

    var currentDate = new Date();

    var formattedTime = ("0" + currentDate.getHours()).slice(-2) + ":" + 
                        ("0" + currentDate.getMinutes()).slice(-2);

    var formattedDate = ("0" + currentDate.getDate()).slice(-2) + "." + 
                        ("0" + (currentDate.getMonth() + 1)).slice(-2) + "." + 
                        currentDate.getFullYear().toString().slice(-2);

    dateTimeDiv.innerHTML = formattedTime + "<br>" + formattedDate;



    function changePhoto() {
        var photoDiv = document.getElementById('photo');
        var imageUrls = [
            'img1.jfif',
            'img2.jfif',
            'img3.jfif',
            'img4.jfif',
            'img5.jfif',
            'img6.jfif',
        ];
    
        var randomIndex = Math.floor(Math.random() * imageUrls.length);
    
        photoDiv.style.backgroundImage = 'url(' + imageUrls[randomIndex] + ')';
    }



    const quotes = [
        {
            quote: "“The minute I heard my first love story, I started looking for you.”",
            author: "Jalaluddin Rumi",
            book: "THE ILLUSTRATED"
        },
        {
            quote: "The quote 2.",
            author: "Author 2",
            book: "Book 2"
        },
    ];

    function changeQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];

        document.querySelector('.quote').textContent = randomQuote.quote;
        document.querySelector('.name').textContent = randomQuote.author;
        document.querySelector('.book').textContent = randomQuote.book;
    }

    changeQuote();