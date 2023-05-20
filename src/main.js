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






