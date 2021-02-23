//Створити HTML сторінку. На сторінці є рядок для введення тексту, абзац та кнопка.
// Написати JavaScript-код. При введенні тексту в абзаці має відображатись код останньої
// натиснутої клавіші.

let input1 = document.getElementById('input1');
let result1 = document.getElementById('result1');
input1.addEventListener('keyup', ev => {
    result1.textContent = ev.keyCode;
    ev.preventDefault();
})

//Створити HTML сторінку. На формі розташовано текстове поле та п’ять перемикачів (Radio).
// Написати JavaScript-код.
// При виборі перемикача його текст має з’явитись в текстовому полі.

let allRadio=document.getElementsByClassName('inputRadio');
let result2=document.getElementById('result2');
for(let el of allRadio){
    el.onchange=(ev)=>{
        result2.value=ev.target.value
        ev.preventDefault();
    }
}

