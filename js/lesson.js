// const phoneInput = document.querySelector("#phone_input")
// const phoneButton = document.querySelector("#phone_button")
// const phoneResult = document.querySelector("#phone_result")
//
// const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/
//
// phoneButton.onclick = () => {
//     if (regExp.test(phoneInput.value)) {
//         phoneResult.innerHTML = "OK"
//         phoneResult.style.color = "green"
//     } else {
//         phoneResult.innerHTML = "ERROR"
//         phoneResult.style.color = "red"
//     }
// }

let currentEpisode = 1;

function updateEpisode() {
    const iframe = document.getElementById('episodePlayer');
    const numberSpan = document.getElementById('episodeNumber');
    const link = document.getElementById('episodeLink');

    const episodeId = episodeIDs[currentEpisode - 1];
    iframe.src = `https://jut.su/video/embed/${episodeId}`;
    numberSpan.textContent = currentEpisode;
    link.href = `https://jut.su/naruuto/${currentEpisode}-series.html`;
}

function nextEpisode() {
    if (currentEpisode < episodeIDs.length) {
        currentEpisode++;
        updateEpisode();
    }
}

function prevEpisode() {
    if (currentEpisode > 1) {
        currentEpisode--;
        updateEpisode();
    }
}


const track = document.getElementById('sliderTrack');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const slides = document.querySelectorAll('.slide_card');
let index = 0;
let slideInterval;

const hideSlide = () => {
    slides.forEach((slide) => {
        slide.style.opacity = 0;
        slide.classList.remove('active_slide');
    });
};

const showSlide = (i = 0) => {
    if (slides[i]) {
        slides[i].style.opacity = 1;
        slides[i].classList.add('active_slide');
    }
};

function updateSliderPosition() {
    if (slides.length === 0) {
        return;
    }
    const slideWidth = slides[0].offsetWidth;
    track.style.transform = `translateX(-${index * slideWidth}px)`;

    hideSlide();
    showSlide(index);
}

function startAutoSlide() {
    stopAutoSlide();
    slideInterval = setInterval(() => {
        index = (index + 1) % slides.length;
        updateSliderPosition();
    }, 4000);
}

function stopAutoSlide() {
    clearInterval(slideInterval);
}

next.onclick = () => {
    index = (index + 1) % slides.length;
    updateSliderPosition();
    stopAutoSlide();
    startAutoSlide();
};

prev.onclick = () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSliderPosition();
    stopAutoSlide();
    startAutoSlide();
};

document.addEventListener('DOMContentLoaded', () => {
    updateSliderPosition();
    startAutoSlide();
});

const sliderWrapper = document.querySelector('.slider-wrapper');
if (sliderWrapper) {
    sliderWrapper.addEventListener('mouseenter', stopAutoSlide);
    sliderWrapper.addEventListener('mouseleave', startAutoSlide);
}

//TAB SLIDER

const tabContentBlock = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabParent = document.querySelector('.tab_content_items')

const hideTabContent = () => {
    tabContentBlock.forEach((item) => {
        item.style.display = 'none'
    })
    tabs.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}
const showTabContent = (i = 0) => {
    tabContentBlock[i].style.display = 'block'
    tabs[i].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent()

tabParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((tab, index) => {
            if (event.target === tab) {
                hideTabContent()
                showTabContent(index)
            }
        })
    }
}
const autoSlider = (i = 0) => {
    setInterval(() => {
        i++
        if (i > tabs.length - 1) {
            i = 0
        }
        hideTabContent()
        showTabContent(i)
    }, 3000)

}
autoSlider()


// CONVERTER
const somInput = document.querySelector('#som')
const usdInput = document.querySelector('#usd')
const eurInput = document.querySelector('#eur')

const converter = async (element) => {
    const res = await fetch('../data/converter.json')
    const data = await res.json()

    element.oninput = () => {
            if (element.id === 'som') {
                usdInput.value = (element.value / data.usd).toFixed(2)
                eurInput.value = (element.value / data.euro).toFixed(2)
            }

            if (element.id === 'usd') {
                somInput.value = (element.value * data.usd).toFixed(2)
                eurInput.value = (element.value * data.toEur).toFixed(2)
            }

            if (element.id === 'eur') {
                somInput.value = (element.value * data.euro).toFixed(2)
                usdInput.value = (element.value * data.toUsd).toFixed(2)
            }

            if (element.value === '') {
                somInput.value = ''
                usdInput.value = ''
                eurInput.value = ''
            }
        }

}
converter(somInput)
converter(usdInput)
converter(eurInput)

// ПРИНЦИПЫ
// DRY - don't repeat yourself
// KISS - keep it simple, stupid
// SOLID -
// BEM -
// FSD.MVC.MVP.MVVM

//card_switcher
const cardBlock = document.querySelector('.card')
const btnNext = document.querySelector('#btn-next')
const btnPrev = document.querySelector('#btn-prev')


let numId = 1

const sending = async () => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${numId}`)
        const data = await res.json()
        const {title, id, completed} = data
        cardBlock.style.borderColor = completed ? 'green' : 'red'
        cardBlock.innerHTML = `
                <p>${title}</p>
                <span>${id}</span>
           `

    } catch (e){
        console.log(e)
    }
}

btnNext.onclick = () => {
    numId >= 200 ? numId = 1 : numId++
    sending()
}

btnPrev.onclick = () => {
    numId <= 1 ? numId = 200 : numId--
    sending()
}
sending()
// 2 задача

 fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        data.forEach(item => {
            // console.log(item)
        })
    })

// WEATHER
//e417df62e04d3b1b111abeab19cea714
const API = 'http://api.openweathermap.org/data/2.5/weather'
const API_KEY = 'e417df62e04d3b1b111abeab19cea714'


const searchInput = document.querySelector('.cityName')
const searchButton = document.querySelector('#search')
const city = document.querySelector('.city')
const temp = document.querySelector('.temp')

const searchWeather = async () => {
    if (searchInput.value === '') {
        city.innerHTML = 'Введите название города'

    } else {
        try {
            const response = await fetch(`${API}?q=${searchInput.value}&appid=${API_KEY}&units=metric&lang=ru`)
            const data = await response.json()
            city.innerHTML = data.name || 'Город не найден'
            temp.innerHTML = data.main?.temp ? Math.round(data.main?.temp) + '&deg;C' : ''
            searchInput.value = ''
        } catch (e) {
            console.log(e)
        }
    }
}
searchButton.onclick = () => searchWeather()
window.onkeydown = (event) => {
    if (event.code === 'Enter') {
        searchWeather()
    }
}
// option chaining - опциональня цепочка
// ?.