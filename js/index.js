document.querySelectorAll('.digits, .subtract, .add, .multiply, .divide')
    .forEach( el => el.addEventListener('click', digitOperClick));
    
    function digitOperClick(e) {
        const target = e.target;
        const display = document.querySelector('.display');
        display.value += target.innerText;
    }
    
    document.querySelector('.equal')
    .addEventListener('click', equal);
    
    function equal() {
        const display = document.querySelector('.display');
        display.value = eval(display.value)
    }
    
     document.querySelector('.clear')
    .addEventListener('click', clear);
    
    function clear() {
        const display = document.querySelector('.display');
        display.value -= eval(display.value)
    }
     
//      document.querySelector('.Math.sqrt')
//      addEventListener('click', math.sqrt);
     
//   function math.sqrt() {
//   const display = document.querySelector('.display');
//   display.value = Math.sqrt(display.value)
// }

