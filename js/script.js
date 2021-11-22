//task #1
const numOrStr = prompt('input number or string');

if (numOrStr === null || numOrStr.trim() === '' || isNaN(+numOrStr)){
    console.log('Please try again');
} else {
    console.log('OK!');
}

//task #2
const numOrStr = prompt('input number or string');

switch (true) {
  case numOrStr === null:
    console.log('вы отменили');
    break;
  case numOrStr.trim() === '':
    console.log('Empty String');
    break;
  case isNaN(+numOrStr):
    console.log('number is Ba_NaN');
    break;
  default:
    console.log('OK!');
}