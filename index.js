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


