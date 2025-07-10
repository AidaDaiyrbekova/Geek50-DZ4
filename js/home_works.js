// email
const gmailInput = document.querySelector("#gmail_input")
const gmailButton = document.querySelector("#gmail_button")
const gmailResult = document.querySelector("#gmail_result")

const regExp = /^(?=[a-zA-Z0-9]{5,})[a-zA-Z0-9]*[a-zA-Z][a-zA-Z0-9]*@[^\s@]+\.[a-z]{2,3}$/

gmailButton.onclick = () => {
    if(regExp.test(gmailInput.value)){
        gmailResult.innerHTML = "OK"
        gmailResult.style.color = "green"
    }else {
        gmailResult.innerHTML = "ERROR"
        gmailResult.style.color = "red"
    }
}

//move block
const childBlock = document.querySelector(".child_block")
const parentBlock = document.querySelector(".parent_block")


let stepX = 0;
let stepY = 0;


const offsetWidth = parentBlock.clientWidth - childBlock.clientWidth
const offsetHeight = parentBlock.clientHeight - childBlock.clientHeight

let stepX2 = offsetWidth
let stepY2 = offsetHeight
const moveRedBlock = () => {

    if (stepX < offsetWidth) {
        stepX += 4;
        childBlock.style.left = `${stepX}px`;
    } else if (stepY < offsetHeight) {
        stepY += 4;
        childBlock.style.top = `${stepY}px`;
    } else if (stepX2 > 0) {
        stepX2 -= 4;
        childBlock.style.left = `${stepX2}px`;
    } else if (stepY2 > 0) {
        stepY2 -= 4;
        childBlock.style.top = `${stepY2}px`;
    }

    requestAnimationFrame(moveRedBlock);
};

requestAnimationFrame(moveRedBlock);

//counter
 const startBtn = document.querySelector("#start")
const stopBtn = document.querySelector("#stop")
const resetBtn  = document.querySelector("#reset")
const countText  = document.querySelector("#seconds")

let count = 0
let interval =0

function incCounter (){
        count++
        countText.textContent = count
}

startBtn.onclick = () => {
    function startCounter (){
        if (interval !== 0) return
        interval = setInterval(incCounter,300)

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
    function resetCounter() {
        count = 0
        countText.textContent = count

    }
    resetCounter()
}

