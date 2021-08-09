const pwE1 = document.getElementById("pw")
const copyE1 = document.getElementById("copy")
const lenE1 = document.getElementById("len")
const upperE1 = document.getElementById("upper")
const lowerE1 = document.getElementById("lower")
const numberE1 = document.getElementById("number")
const symbolE1 = document.getElementById("symbol")
const generateE1 = document.getElementById("generate")

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+=';

function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUppercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumbercase() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbolcase() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}
// alert(getSymbolcase());

function generatePassword() {
    const len = lenE1.value;

    let password = '';

    for(let i = 0; i < len; i++){
        const x = generateX();
        password += x;
    }

    pwE1.innerText = password;
}
// alert(generatePassword());

function generateX() {
    const xs = [];
    if(upperE1.checked) {
        xs.push(getUppercase());
    }

    if(lowerE1.checked) {
        xs.push(getLowercase());
    }

    if(numberE1.checked) {
        xs.push(getNumbercase());
    }

    if(symbolE1.checked) {
        xs.push(getSymbolcase());
    }

    if(xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
}


generateE1.addEventListener('click', generatePassword);

copyE1.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = pwE1.innerText;
  
    if (!password) {return;}
  
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard');
  });
  