// Определяем массив
let arr = ['идет заец полесу видит медведи в пещере ебуца он им и кричит пидарасы пидарасы а ани за ним бежит заяц бежит видит балото прыгнул туда и уши падагнул и зубы высунул тут прибежале медведи видят ево и спрашивают бабёр а ты заяца не видел а он им я с пидарасами не разгавариваю медведи такие какже так ужэ и бабры знаю',
'Читаю статус: "Если у стаса болит голова, попробуйте приложить ему ко лбу новые итальянские валенки.. " Убил коммент: "А прикладывать с размаху.. или как?',
 '2Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
 '3Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
 'когда стас захватил мир он такой говорит всем людям света - я стася справедливйы а в полте кто то крикнул стас лоох и в итоге убили диму иванова',
];

// Получаем случайный ключ массива

document.querySelector('#submit').onclick = function() {

 let rand = Math.floor(Math.random() * arr.length);


document.querySelector('.sum').innerHTML = arr[rand];
}
