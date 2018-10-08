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
        display.value = null;
    }
     
     document.querySelectorAll('.sqrt')
     .forEach (el => el.addEventListener ('click', sqrt))
     
  function sqrt(e) {
  const display = document.querySelector('.display')
  display.value = Math.sqrt(eval(display.value))
}

// document.querySelector('.pow')
// .forEach( el => el.addEventListener ('click', pow))

// function pow(e) {
//     const display = document.querySelector('.display')
//     display.value = Math.pow(eval(display.value, 2))
// }
