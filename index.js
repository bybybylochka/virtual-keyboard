const layout = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '|'],
    ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
    ['ShiftLeft', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'ShiftRight'],
    ['CtrlLeft', 'Win', 'AltLeft', 'Space', 'AltRight', 'CtrlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight']
];

let textField=document.createElement("textarea");
textField.classList.add("text-field");
document.body.appendChild(textField);

let keyboardContainer=document.createElement("div");
keyboardContainer.classList.add("keyboard");
document.body.appendChild(keyboardContainer);

let capsLock=false;

let shiftPressed=false;

layout.forEach(row => {
    const rowContainer = document.createElement('div');
    rowContainer.classList.add('row');
    row.forEach(key => {
        const keyContainer = document.createElement('div');
        keyContainer.classList.add('key');
        keyContainer.textContent = key;
        if(/^[a-zA-Z]+$/.test(key)&&key.length===1){
            keyContainer.setAttribute("data-code", "Key"+key.toUpperCase());
        }
        else if(Number.isInteger(+key)){
            keyContainer.setAttribute("data-code", "Digit"+key);
        }
        else if(key==='`'){
            keyContainer.setAttribute("data-code", "Backquote");
        }
        else if(key==='-'){
            keyContainer.setAttribute("data-code", 'Minus');
        }
        else if(key==='='){
            keyContainer.setAttribute("data-code", 'Equal');
        }
        else if(key==='['){
            keyContainer.setAttribute("data-code", 'BracketLeft');
        }
        else if(key===']'){
            keyContainer.setAttribute("data-code", 'BracketRight');
        }
        else if(key==='|'){
            keyContainer.setAttribute("data-code", 'BacksLash');
        }
        else if(key===';'){
            keyContainer.setAttribute("data-code", 'Semicolon');
        }
        else if(key==="'"){
            keyContainer.setAttribute("data-code", 'Quote');
        }
        else if(key===','){
            keyContainer.setAttribute("data-code", 'Comma');
        }
        else if(key==='.'){
            keyContainer.setAttribute("data-code", 'Period');
        }
        else if(key==='/'){
            keyContainer.setAttribute("data-code", 'Slash');
        }
        else{
            keyContainer.setAttribute("data-code", key);
        }
        rowContainer.appendChild(keyContainer);
    });
    keyboardContainer.appendChild(rowContainer);
});
function virtualKeyPress(event) {
    const button = event.target; // получаем нажатую кнопку
    let buttonValue = button.textContent; // получаем значение кнопки (текст внутри)
    button.classList.add('active');
    setTimeout(() => {
        button.classList.remove('active');
    }, 200);

    const textField = document.querySelector('.text-field');
    if(button.textContent==="Backspace"){
        textField.value=textField.value.slice(0, -1);
    }
    else if(button.textContent==="Tab"){
        const start = textField.selectionStart;
        const end = textField.selectionEnd;

        textField.value =textField.value.substring(0, start) + '\t' + textField.value.substring(end);

        textField.selectionStart = textField.selectionEnd = start + 1;
    }
    else if(button.textContent==="CapsLock"){
        capsLock = !capsLock;
    }
    else if(button.textContent==="Enter"){
        const start = textField.selectionStart;
        const end = textField.selectionEnd;

        textField.value =textField.value.substring(0, start) + '\n' + textField.value.substring(end);

        textField.selectionStart = textField.selectionEnd = start + 1;
    }
    else if(button.textContent==="Space"){
        const start = textField.selectionStart;
        const end = textField.selectionEnd;

        textField.value =textField.value.substring(0, start) + ' ' + textField.value.substring(end);

        textField.selectionStart = textField.selectionEnd = start + 1;
    }
    else if(button.textContent==="ArrowLeft"||button.textContent==="ArrowRight"|| button.textContent==="ArrowUp"||button.textContent==="ArrowDown"){

        arrowPress(button.textContent);
        event.preventDefault();
    }
    else {
        const currentValue=textField.value;
        const currentPosition = textField.selectionStart;
        if(capsLock===true){
            buttonValue=buttonValue.toUpperCase();
            console.log(buttonValue);
        }
        let newValue = currentValue.substring(0, currentPosition) + buttonValue + currentValue.substring(currentPosition);
        textField.value = newValue;
        textField.selectionStart = currentPosition +1;
        textField.selectionEnd = currentPosition+1;
        event.preventDefault();
    }
}


function arrowPress(button){
    if (button === 'ArrowLeft') {
        textField.focus();
        const currentPosition = textField.selectionStart;
        console.log(currentPosition);
        textField.setSelectionRange(currentPosition - 1, currentPosition - 1);
    }
    if(button === 'ArrowRight'){
        textField.focus();
        const currentPosition = textField.selectionStart;
        console.log(currentPosition);
        textField.setSelectionRange(currentPosition + 1, currentPosition + 1);
    }
    if(button === 'ArrowUp'){

    }
    if(button === 'ArrowDown'){

    }
}

function realKeyPress(event){
        let button = event.key;
        const textField = document.querySelector('.text-field');
        const virtualButton = document.querySelector(`.key[data-code="${event.code}"]`);
        if(virtualButton){
            virtualButton.classList.add('active');
            setTimeout(() => {
                virtualButton.classList.remove('active');
            }, 200);
        }
        // textField.value += button;
    if(button==="Backspace"){
        textField.value=textField.value.slice(0, -1);
    }
    else if(button==="Tab"){
        const start = textField.selectionStart;
        const end = textField.selectionEnd;

        textField.value =textField.value.substring(0, start) + '\t' + textField.value.substring(end);

        textField.selectionStart = textField.selectionEnd = start + 1;
    }
    else if(button==="CapsLock"){
        capsLock = !capsLock;
    }
    else if(button==="Enter"){
        const start = textField.selectionStart;
        const end = textField.selectionEnd;

        textField.value =textField.value.substring(0, start) + '\n' + textField.value.substring(end);

        textField.selectionStart = textField.selectionEnd = start + 1;
    }
    else if(button==="Space"){
        const start = textField.selectionStart;
        const end = textField.selectionEnd;

        textField.value =textField.value.substring(0, start) + ' ' + textField.value.substring(end);

        textField.selectionStart = textField.selectionEnd = start + 1;
    }
    else if(button==="ArrowLeft"||button==="ArrowRight"|| button==="ArrowUp"||button==="ArrowDown"){

        arrowPress(button);
        event.preventDefault();
    }
    else if(button==="ShiftLeft"||button==="ShiftRight"){
            shiftPressed = true;
    }
    else {
        const currentValue=textField.value;
        const currentPosition = textField.selectionStart;
        if(capsLock===true){
            button=button.toUpperCase();
            console.log(buttonValue);
        }
        let newValue = currentValue.substring(0, currentPosition) + button + currentValue.substring(currentPosition);
        textField.value = newValue;
        textField.selectionStart = currentPosition +1;
        textField.selectionEnd = currentPosition+1;
        event.preventDefault();
    }
}







