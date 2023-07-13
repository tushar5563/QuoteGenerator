//variables 

let btn =document.querySelector('#new-quotes');
let quote=document.querySelector('.quote');
let person=document.querySelector('.person');

const quotes=[{
    quote:`"Believe you can and you're halfway there"`,
    person:`Theodore Roosevelt`
},{
    quote:`“I love you without knowing how, or when, or from where. ...`,
    person:`Eleanor Roosevelt`
},{
    quote:`"Success is not final, failure is not fatal: It is the courage to continue that counts."`,
    person:`Winston Churchill`
},{
    quote:` "Don't watch the clock; do what it does. Keep going."`,
    person:`Sam Levenson`
},
{
    quote:` "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle."`,
    person:`Christian D. Larson`
},
{
    quote:`"The only limit to our realization of tomorrow will be our doubts of today." `,
    person:`Franklin D. Roosevelt
    `
},
{
    quote:`"The harder you work for something, the greater you'll feel when you achieve it."`,
    person:`Unknown`
},
{
    quote:` "Your time is limited, don't waste it living someone else's life."`,
    person:`Steve Jobs`
},
{
    quote:`"The only person you should try to be better than is the person you were yesterday." `,
    person:`Tushar`
},
{
    quote:`"The future depends on what you do today."`,
    person:`Mahatma Gandhi`
},{
    quote:`"You are never too old to set another goal or to dream a new dream."`,
    person:`C.S. Lewis
    `
},
{
    quote:`"The difference between a stumbling block and a stepping stone is how you use them."`,
    person:`Unknown
    `
},
{
    quote:`Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful."`,
    person:`Albert Schweitzer
    `
},
{
    quote:` "The only way to predict the future is to create it."`,
    person:`Peter Drucker`
},{
    
}

];


btn.addEventListener('click',function() {
    let random=Math.floor(Math.random()* quotes.length);
    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
     
})