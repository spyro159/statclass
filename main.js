// Определяем массив
let arr = ['идет заец полесу видит медведи в пещере ебуца он им и кричит пидарасы пидарасы а ани за ним бежит заяц бежит видит балото прыгнул туда и уши падагнул и зубы высунул тут прибежале медведи видят ево и спрашивают бабёр а ты заяца не видел а он им я с пидарасами не разгавариваю медведи такие какже так ужэ и бабры знаю',
'Читаю статус: "Если у стаса болит голова, попробуйте приложить ему ко лбу новые итальянские валенки.. " Убил коммент: "А прикладывать с размаху.. или как?',
 'когда стас голоден он в первую очерель кушает какашки',
 'я люблю только 3 вещи в жизни как идет вада как огонь идет и как стас пытается быть злым',
 'когда стас захватил мир он такой говорит всем людям света - я стася справедливйы а в полте кто то крикнул стас лоох и в итоге убили диму иванова',
];

// Получаем случайный ключ массива

document.querySelector('#submit').onclick = function() {

 let rand = Math.floor(Math.random() * arr.length);


document.querySelector('.sum').innerHTML = arr[rand];
}
