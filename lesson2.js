var ru = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л',
  'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ',
  'Ы', 'Ь', 'Э', 'Ю', 'Я']

let shift = +prompt("Выберите сдвиг");
let msg = prompt("Сообщение для зашифровки");
console.log(msg);
let total = 'Результат :'
let lang = 'ENG' /*prompt("Enter the lang Eng/RU")
if (lang == 'RU') {
  for (let i of msg) {
    let place = ru.indexOf(i);
    console.log(i, 'place=', place);
    let new_place = place + shift;
    console.log(new_place);
    if (i in ru) {
      total += ru[new_place]
    } else {
      total += 1;
    }
  }
} else */if (lang == 'ENG') {
  for (let i of msg) {
    let place = eng.indexOf(i);
    console.log(i, 'place=', place);
    let new_place = place + shift;
    console.log(new_place);
    if (eng.includes(i)) {
      total += eng[new_place]
    } else {
      total += 1
    }
  }
}
alert(total)


