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

const childBlock = document.querySelector(".child_block")
const parentBlock = document.querySelector(".parent_block")


let step = 0;

const moveRedBlock = () => {
    step++;
    childBlock.style.left = `${step}px`

    if (step < parentBlock.offsetWidth - childBlock.offsetWidth) {
        requestAnimationFrame(moveRedBlock)
    }
};

requestAnimationFrame(moveRedBlock)

