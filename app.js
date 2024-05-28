const display = document.getElementsByClassName('display')[0];
const numbers = document.getElementsByClassName('numbers')[0];
const operators = document.getElementsByClassName('operators')[0];
let input;
const number = [];
const operator =[];
for(let i of numbers.children){
    number.push(i);
}
for( let i of operators.children){
    operator.push(i);
}

function check(){
    if(display.innerText.length == 20){
        return;
    }
    display.innerText += input;
}
function Handler(arr, num){
    arr.addEventListener('click', ()=>{ 
        input  = num;
        check();
        
    })
}
Handler(operator[0], '*');                  Handler(number[0], 7);Handler(number[1], 8);Handler(number[2], 9);
Handler(operator[1], "/");                  Handler(number[3], 4);Handler(number[4], 5);Handler(number[5], 6);
Handler(operator[2], "-");                  Handler(number[6], 1);Handler(number[7], 2);Handler(number[8], 3);
Handler(operator[3], "+");                  Handler(number[9], 0);Handler(number[10], '.');
number[11].addEventListener('click', ()=>{
    display.innerText = display.innerText.slice(0, -1);
    //del button
})
operator[4].addEventListener('click',()=>{
    display.innerText = eval(display.innerText)
})
