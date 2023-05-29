function selector(selector) {
    return document.querySelector(selector)
}





// const carCardContainer = document.querySelectorAll(".car-card-container").innerHTML; Bütün eyni klasda olanları seçəcək
// Yuxardakı sətirdə sonda .innerHTML düzgün deyil. Kod işlməyəcək
const carCardContainer = selector(".car-card-container"); /* İlk tapdığı klası seçəcək */

const carCards = [
    {
        img: "https://www.carlogos.org/car-logos/mclaren-logo.png",
        name: "McLaren",
        year: 1963
    },
    {
        img: "https://www.carlogos.org/car-logos/ferrari-logo.png",
        name: "Ferrari",
        year: 1947
    },
    {
        img: "https://www.carlogos.org/car-logos/bentley-logo.png",
        name: "Bentley",
        year: 1919
    },
    {
        img: "https://www.carlogos.org/car-logos/maserati-logo.png",
        name: "Maserati",
        year: 1914
    },
    {
        img: "https://www.carlogos.org/car-logos/corvette-logo.png",
        name: "Chevrolet Corvette",
        year: 1953
    },
    {
        img: "https://www.carlogos.org/car-logos/dodge-logo.png",
        name: "DODGE",
        year: 1900
    },
    {
        img: "https://www.carlogos.org/car-logos/ford-mustang-logo.png",
        name: "Ford Mustang",
        year: 1964
    },
    {
        img: "https://www.carlogos.org/car-logos/lexus-logo.png",
        name: "Lexus",
        year: 1983
    },
    {
        img: "https://www.carlogos.org/car-logos/rolls-royce-logo.png",
        name: "Rolls Royce",
        year: 1906
    },
    {
        img: "https://www.carlogos.org/car-logos/peugeot-logo.png",
        name: "Peugeot",
        year: 1896
    }
]

carCards.map(function (info) {
    const { img, name, year } = info;

    carCardContainer.innerHTML += `
    <div class="car-card col-12 col-sm-6 col-md-4 col-lg-3 ">
    <div class="car-card-inside">
                <div class="card-img-div text-center card-img-top">
                    <img class="car-img" src="${img}" alt="">
                </div>
                <div class="card-content">
                    <h3 class="card-title">${name}</h3>
                    <p class="card-text">${year}</p>
                </div>
                </div>
            </div>
    
    
    `
})

const monthList = ["Yanvar", "Fvral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"]

const fullDate = new Date()

const month = monthList[fullDate.getMonth()]

const date = [fullDate.getFullYear(), month , fullDate.getDate()]

selector(".date").innerHTML = date.join("-")



const span = document.createElement('span');

const body = document.body;

body.append(span);

span.innerHTML = 'Mehdi'

span.style.cssText = `
font-size: 1.3rem;
font-weight: 500;
color: #f0f0f0;
font-family: "Open Sans", sans-serif;
position: absolute;
top: -100px;
left: 50%;
transform: translateX(-50%);
padding: 17px 90px;
border: 0;
border-radius: 20px;
transition: top .6s;
`

window.addEventListener('offline', ()=>{
    span.innerHTML = "You are Offline"
    span.style.cssText += `
    background-color: #ee0000; 
    box-shadow: 0 0 25px 3px #ee0000; 
    top: 50px;
    `;

    setTimeout(()=> span.style.cssText += `top: -100px`, 5000)
})

window.addEventListener('online', ()=>{
    span.innerHTML = "You are Online"
    span.style.cssText += `
    background-color: #33ff8c; 
    box-shadow: 0 0 25px 3px #33ff8c; 
    top: 50px;
    `;

    setTimeout(()=> span.style.cssText += `top: -100px`, 5000)
})


const btn = document.createElement('button');

body.insertAdjacentElement('afterbegin', btn);

btn.innerHTML = 'BG Color';

btn.style.cssText = `
position: absolute;
top: 0px;
left: 5px;
z-index: 9999;
padding: 10px 30px;
border: none;
background-color: #001149;
color: #fff;
font-size: 1rem;
font-weight: 300;
cursor: pointer;
`

btn.addEventListener('click', ()=>{
    const c1 = Math.floor(Math.random() * 256);
    const c2 = Math.floor(Math.random() * 256);
    const c3 = Math.floor(Math.random() * 256);
    const c4 = Math.floor(Math.random() * 256);
    const c5 = Math.floor(Math.random() * 256);
    const c6 = Math.floor(Math.random() * 256);
    const deg = Math.floor(Math.random() * 361);
    body.style.cssText = `background-image: linear-gradient( ${deg}deg, rgb(${c1}, ${c2}, ${c3}),rgb(${c4}, ${c5}, ${c6}));`;
    console.log(c1,c2,c3,c4,c5,c6,deg);
});



window.addEventListener('scroll', () => {
    const text = document.querySelector('.text')

    const html = document.documentElement || document.body
    const cHeight = html.clientHeight
    const fullHeight = html.scrollHeight
    const sHeight = html.scrollTop

    const height = fullHeight - cHeight;
    let textWidht = sHeight / height * 100;


    text.style.width = `${textWidht}%`
  })


