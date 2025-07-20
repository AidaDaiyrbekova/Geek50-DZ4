const phoneInput = document.querySelector("#phone_input")
const phoneButton = document.querySelector("#phone_button")
const phoneResult = document.querySelector("#phone_result")

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if(regExp.test(phoneInput.value)){
        phoneResult.innerHTML = "OK"
        phoneResult.style.color = "green"
    }else {
        phoneResult.innerHTML = "ERROR"
        phoneResult.style.color = "red"
    }
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
const showTabContent = (i=0) => {
    tabContentBlock[i].style.display = 'block'
    tabs[i].classList.add('tab_content_item_active')
}

 hideTabContent()
showTabContent()

tabParent.onclick = (event) => {
    if(event.target.classList.contains('tab_content_item')) {
        tabs.forEach((tab,index) => {
            if(event.target === tab){
                hideTabContent()
                showTabContent(index)
            }
        })
    }
}
const autoSlider = (i = 0) => {
    setInterval(() => {
        i++
        if(i > tabs.length -1){
            i=0
        }
        hideTabContent()
        showTabContent(i)
    }, 3000)

}
autoSlider()


// CONVERTER
const somInput = document.querySelector('#som')
const usdInput = document.querySelector('#usd')

const converter = (element) => {
    element.oninput = () => {
        const xhr = new XMLHttpRequest()
    xhr.open('GET', '../data/converter.json')
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.send()

        xhr.onload = () => {
            const data = JSON.parse((xhr.response))
            if(element.id === 'som'){
                usdInput.value = (element.value / data.usd).toFixed(2)
            }

            if(element.id === 'usd'){
                somInput.value = (element.value * data.usd).toFixed(2)
            }
            if(element.value === ''){
                somInput.value = ''
                usdInput.value = ''
            }
        }
    }
}
converter(somInput)
converter(usdInput)

// ПРИНЦИПЫ
// DRY - don't repeat yourself
// KISS - keep it simple, stupid
// SOLID -
// BEM -
// FSD.MVC.MVP.MVVM