const quoteURL = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
const quoteDiv = document.getElementById('quote');
const authorDiv = document.getElementById('author');

window.onload = function(){
    generateQuote();
}

async function generateQuote(){
    const response = await fetch(quoteURL);
    const data = await response.json();

    const randomNumber = Math.floor(Math.random() * data['quotes'].length)
    const randomQuote = data['quotes'][randomNumber]['quote'];
    const quoteAuthor = data['quotes'][randomNumber]['author'];
    
    quoteDiv.innerHTML = `<i class="fa fa-quote-left" aria-hidden="true"></i> ${randomQuote} <i class="fa fa-quote-right" aria-hidden="true"></i>`;
    authorDiv.innerHTML = quoteAuthor;

    document.getElementById('tweet').href = `https://twitter.com/intent/tweet?hashtags=quote&text="${randomQuote}" - ${quoteAuthor}`;
}



