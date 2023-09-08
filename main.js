const quotes = [

        '<p>Not having a defined goal to accomplish is already a defined goal to die in obscurity. - Martins Ejiofor</p>',
        '<p>I am not here to be perfect, I am here to be real. - Lady Gaga</p>',
        '<p>I am not interested in money. I just want to be wonderful. - Marilyn Monroe</p>',
        '<p>The only thing that feels better than winning is winning when nobody thought you could. - Hank Aaron</p>',
        '<p>Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill</p>',
        '<p>If you can dream it, you can do it. - Walt Disney</p>',
        '<p>If you want something done, ask a busy person to do it. - Laura Ingalls Wilder</p>',
        '<p>If your actions inspire others to dream more, learn more, do more and become more, you are a leader. - John Quincy Adams</p>',
        '<p>The best way to find out if you can trust somebody is to trust them. - Ernest Hemingway</p>',
        '<p>The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt</p>',
        '<p>We may encounter many defeats but we must not be defeated. - Maya Angelou</p>'
];

    //select the items
    const quotesForm =document.querySelector('.quotes-form');
    const inputQuotes = document.getElementById('input-quotes');
    const outputQuotes = document.querySelector('.quotes-output');
    const outputClear = document.querySelector('.clear-button');

    quotesForm.addEventListener('submit', function(e){
        e.preventDefault();

        const value = inputQuotes.value;
        const numbers = Math.round(Math.random() * quotes.length);
        
        if(isNaN(value) || value <= 0 || value > 11){
            outputQuotes.innerHTML = `<p>${quotes[numbers]}</p>`
        }
        else{
            let myText = quotes.slice(0, value);
            myText = myText.join(" ");
               
          
              outputQuotes.innerHTML = myText;
        }        
    })

    outputClear.addEventListener('click', function(){
        outputQuotes.innerHTML = myText.join('');
    })
    




// const quotes = [
//     '<p>Not having a defined goal to accomplish is already a defined goal to die in obscurity. - Martins Ejiofor</p>',
//     '<p>I am not here to be perfect, I am here to be real. - Lady Gaga</p>',
//     '<p>I am not interested in money. I just want to be wonderful. - Marilyn Monroe</p>',
//     '<p>The only thing that feels better than winning is winning when nobody thought you could. - Hank Aaron</p>',
//     '<p>Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill</p>',
//     '<p>If you can dream it, you can do it. - Walt Disney</p>',
//     '<p>If you want something done, ask a busy person to do it. - Laura Ingalls Wilder</p>',
//     '<p>If your actions inspire others to dream more, learn more, do more and become more, you are a leader. - John Quincy Adams</p>',
//     '<p>The best way to find out if you can trust somebody is to trust them. - Ernest Hemingway</p>',
//     '<p>The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt</p>',
//     '<p>We may encounter many defeats but we must not be defeated. - Maya Angelou</p>'
// ];

// // Select the items
// const quotesForm = document.querySelector('.quotes-form');
// const inputQuotes = document.getElementById('input-quotes');
// const outputQuotes = document.querySelector('.quotes-output');
// const outputClear = document.querySelector('.clear-button');

// quotesForm.addEventListener('submit', function(e) {
//     e.preventDefault();

//     const value = inputQuotes.value;
//     const numbers = Math.floor(Math.random() * quotes.length);
        
//     if (isNaN(value) || value <= 0 || value > 11) {
//         outputQuotes.innerHTML = quotes[numbers];
//     } else {
//         let myText = quotes.slice(0, value);
//         myText = myText.join(' ');
//         outputQuotes.innerHTML = myText;
//     }        
// });

// outputClear.addEventListener('click', function() {
//     outputQuotes.innerHTML = "";
// });