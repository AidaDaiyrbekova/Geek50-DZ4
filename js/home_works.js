// email
// const gmailInput = document.querySelector("#gmail_input")
// const gmailButton = document.querySelector("#gmail_button")
// const gmailResult = document.querySelector("#gmail_result")
//
// const regExp = /^(?=[a-zA-Z0-9]{5,})[a-zA-Z0-9]*[a-zA-Z][a-zA-Z0-9]*@[^\s@]+\.[a-z]{2,3}$/
//
// gmailButton.onclick = () => {
//     if(regExp.test(gmailInput.value)){
//         gmailResult.innerHTML = "OK"
//         gmailResult.style.color = "green"
//     }else {
//         gmailResult.innerHTML = "ERROR"
//         gmailResult.style.color = "red"
//     }
// }

//move block
const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelectorAll('.child_block');

childBlock.forEach((shuriken) => {
    setInterval(() => {
        const parentWidth = parentBlock.clientWidth;
        const parentHeight = parentBlock.clientHeight;

        const maxX = parentWidth - shuriken.offsetWidth;
        const maxY = parentHeight - shuriken.offsetHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        shuriken.style.transition = 'top 0.6s ease, left 0.6s ease';
        shuriken.style.left = `${randomX}px`;
        shuriken.style.top = `${randomY}px`;
    }, 500 + Math.random() * 1000); // случайная скорость от 500 до 1500 мс
});




//counter
 const startBtn = document.querySelector("#start")
const stopBtn = document.querySelector("#stop")
const resetBtn  = document.querySelector("#reset")
const countText  = document.querySelector("#seconds")

let count = 0
let interval =0

function incCounter (){
        count+=20
        countText.textContent = count
    if (count >= 720) {
        clearInterval(interval);
        interval = 0;
    }
}

startBtn.onclick = () => {
    function startCounter (){
        if (interval !== 0) return
        interval = setInterval(incCounter,100)

    }
     startCounter()
}

stopBtn.onclick = () => {
    function stopCounter() {
        clearInterval(interval)
        interval = 0
    }
    stopCounter()
}

resetBtn.onclick = () => {
        clearInterval(interval)
        count = 0
        countText.textContent = count
}

// Characters

const characters = document.querySelector(".characters-list")

   const xhr = new XMLHttpRequest()// 1 создание запроса
    // console.log(xhr)
    xhr.open('GET', '../data/persons.json') // 2 указание метода и пути
    xhr.setRequestHeader('Content-type', 'application/json') //3 указание
    xhr.send() //4 отправка

   xhr.onload = () => {
    const data = JSON.parse(xhr.response)

       data.forEach((item) => {
           const characterСard = document.createElement("div")
           characterСard.setAttribute('class', 'character-card ')
           characterСard.innerHTML = `
    <div class="character-photo" >
        <img src="${item.photo}" alt="${item.name}">
    </div>
     <h3>${item.name}</h3>
     <span style="color: white">age:${item.age}</span>
     `

           characters.append(characterСard)
       })
   }

// Задача 2 (данные созданные самим)
const request = new XMLHttpRequest()
request.open('GET', '../data/any.json')
request.setRequestHeader('Content-type', 'application/json')
request.send()

request.onload = () => {
     const information = JSON.parse(request.response)
    console.log(information)
}