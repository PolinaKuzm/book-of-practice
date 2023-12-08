
// Практика JavaScript

// Игра угадай ячейку на JavaScript
// Давайте теперь реализуем игру угадай ячейку. В этой игре будет дана таблица 10 на 10.
// Компьютер случайным образом запоминает 10 ячеек из этой таблицы.
// Игроку нужно кликать на клетки пока он не найдет все загаданные компьютером клетки.
// №1 Реализуйте описанную игру.
// let size = 10;
// function createTable(size) {
//     let digit = 1;
// 	let table = document.createElement('table');
// 	for (let i = 0; i<size; i++) {
//         let tr = document.createElement("tr")
// 		for (let j = 0; j < size; j++) {
//             let td = document.createElement("td")
//                 td.textContent = digit;
//                 ++digit
//                 tr.appendChild(td)   
// 		}
//         table.appendChild(tr)
// 	}
// 	return table;
// }
// let div = document.querySelector('#elem1');
// let table1 = createTable(size);
// div.appendChild(table1);
// let tds = document.querySelectorAll("td")
// function func(num, min, max){
//     let rez =[]
//     while(rez.length != num){
//         let rand = Math.floor(Math.random()*(max-min +1 ))+ min;
//         if(rez.indexOf(rand) == -1){
//             rez.push(rand)
//         }
//     }
//     console.log(rez)
//     let end = 0;
//     for(let td of tds){
//         td.addEventListener("click", function(){
//             if(end !=10){
//                 if(rez.includes(Number(td.textContent))){
//                 td.style.background = "green"
//                 ++end
//             }
//             else{
//                 td.style.background = "red"
//             }
//             }
//             else{
//                 alert("Вы отгадали все ячейки")
//             }
            
//         })

//     }
// }
// func(10, 1, 100)
// №2 Модифицируйте предыдущую задачу, добавив таймер обратного отсчета.
// Если игрок не успеет угадать числа за отведенное время - он проиграл.
// let size = 10;
// function createTable(size) {
//     let digit = 1;
// 	let table = document.createElement('table');
// 	for (let i = 0; i<size; i++) {
//         let tr = document.createElement("tr")
// 		for (let j = 0; j < size; j++) {
//             let td = document.createElement("td")
//                 td.textContent = digit;
//                 ++digit
//                 tr.appendChild(td)   
// 		}
//         table.appendChild(tr)
// 	}
// 	return table;
// }
// let div = document.querySelector('#elem1');
// let table1 = createTable(size);
// div.appendChild(table1);
// let tds = document.querySelectorAll("td")
// function func(num, min, max){
//     let rez =[]
//     while(rez.length != num){
//         let rand = Math.floor(Math.random()*(max-min +1 ))+ min;
//         if(rez.indexOf(rand) == -1){
//             rez.push(rand)
//         }
//     }
//     console.log(rez)
//     let end = 0;
//     for(let td of tds){
//         td.addEventListener("click", function(){
//             if(end !=10){
//                 if(rez.includes(Number(td.textContent))){
//                 td.style.background = "green"
//                 ++end
//             }
//             else{
//                 td.style.background = "red"
//             }
//             }
//             else{
//                 alert("Вы отгадали все ячейки")
//             }
//         })
//     }
// }
// func(10, 0, 100)
// let btn = document.createElement("button")
// btn.textContent = "start"
// let hhh = 10;
// let table = document.querySelector("table")
// let right = 0;
// table.classList.add("none")
// btn.addEventListener("click", function func2(){
//     table.classList.toggle("none");
//     let p = document.createElement("p")
//     let timer = setInterval(function(){
//         p.textContent = hhh--
//         div.prepend(p)
//         if(hhh < -1){
//             clearInterval(timer)
//             for(let td of tds){
//                 if(td.style.background == "green"){
//                     right++
//                 }
//             }            
//             alert(`Время вышло. Вы отгадали ${right} из 10 ячеек`)
//             table.classList.toggle("none")
//             p.textContent = ""
//         }
//     }, 1000)
//     btn.removeEventListener("click", func2)
// })
// div.appendChild(btn)

// Экранная клавиатура на JavaScript
// Давайте реализуем экранную клавиатуру. На ней должны быть кнопочки со всеми буквами и цифрами клавиатуры компьютера.
// Кликая мышкой по этим кнопочкам мы сможем вводить данные, например, при неработающей клавиатуре.
// №1 Реализуйте описанную клавиатуру.
// Пусть эта клавиатура будет привязана к какому-нибудь инпуту, то есть кликая по ней, мы будем вводить данные в этот инпут.
// let keyboard=document.querySelector(".keyboard");
// let inputField=document.querySelector("#input");
// let arr=[...'1234567890qwertyuiopasdfghjklzxcvbnm'];
// for (let i=0; i<arr.length; i++){
//     let span = document.createElement("span");
//     span.classList.add("buttonSimvol");
//     span.textContent=arr[i];
//     keyboard.appendChild(span)
//     span.addEventListener("click", function(){
//       inputField.value+=span.textContent
//     });
// };
// №2 Сделайте на вашей клавиатуре кнопку Caps Lock, которая будет делать так, чтобы все буквы переводились в верхний регистр.
// let keyboard=document.querySelector(".keyboard");
// let inputField=document.querySelector("#input")
// let arr=[...'1234567890qwertyuiopasdfghjklzxcvbnm'];
// let CapsLock = document.querySelector("#btnCapsLock");
// for (let i=0; i<arr.length; i++){
//     let span = document.createElement("span");
//     span.classList.add("buttonSimvol");
//     span.textContent=arr[i];
//     keyboard.appendChild(span)
//     span.addEventListener("click", function(){
//       inputField.value+=span.textContent
//     })
// }
// let toLower=true;
// let spans=document.querySelectorAll(".buttonSimvol");
// CapsLock.addEventListener("click", function(){
//     for(let span of spans){
//         if(toLower==true){
//             span.textContent=span.textContent.toUpperCase();
//         }else{
//             span.textContent=span.textContent.toLowerCase();
//         }
//     }
//     toLower=!toLower;
// })

// Линейный календарь на JavaScript
// №1 Выведите в виде списка ul все числа текущего месяца. Средствами CSS поставьте пункты списка в ряд.
// let numbersList = document.querySelector("#MonthNumbers");
// let currentMonth = new Date().getMonth();
// let daysInMonth = new Date(new Date().getFullYear(), currentMonth + 1, 0).getDate();
// for (let i = 1; i <= daysInMonth; i++) {
//   let listItem = document.createElement("li");
//   listItem.textContent = i;
//   numbersList.appendChild(listItem);
// }
// №2 Сделайте так, чтобы текущий день в календаре был выделен каким-нибудь цветом.
// let currentDate = new Date().getDate();
// let numbersList = document.querySelector("#MonthNumbers");
// let currentMonth = new Date().getMonth();
// let daysInMonth = new Date(new Date().getFullYear(), currentMonth + 1, 0).getDate();
// for (let i = 1; i <= daysInMonth; i++) {
// let listItem = document.createElement("li");
// listItem.textContent = i;
// if(i === currentDate) {
// listItem.style.backgroundColor = "green";
// }
// numbersList.appendChild(listItem);
// }
// №3 Сделайте так, чтобы над списком было написано название текущего месяца по-русски и номер года.
// let currentDate = new Date().getDate();
// let numbersList = document.querySelector("#MonthNumbers");
// let currentMonth = new Date().getMonth();
// let monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
// let currentYear = new Date().getFullYear();
// let currentMonthName = monthNames[currentMonth];
// let title = document.createElement("h2");
// title.textContent = currentMonthName + " " + currentYear;
// numbersList.before(title);
// let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
// for (let i = 1; i <= daysInMonth; i++) {
// let listItem = document.createElement("li");
// listItem.textContent = i;
// if(i === currentDate) {
// listItem.style.backgroundColor = "green";
// }
// numbersList.appendChild(listItem);
// }
// №4 Сделайте так, чтобы над календарем появились ссылки вперед и назад, позволяющие менять месяц.
// Месяц и год, выводимые над календарем, должны соответствовать отображаемому месяцу.
// let currentDate = new Date().getDate();
// let numbersList = document.querySelector("#MonthNumbers");
// let currentMonth = new Date().getMonth();
// let monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
// let currentYear = new Date().getFullYear();
// let currentMonthName = monthNames[currentMonth];
// let title = document.createElement("h2");
// title.textContent = currentMonthName + " " + currentYear;
// numbersList.before(title);
// let prevLink = document.createElement("a");
// prevLink.textContent = "предыдущий месяц";
// prevLink.href = "#";
// prevLink.addEventListener("click", function(event) {
//     event.preventDefault();
//     currentMonth--;
//     if (currentMonth < 0) {
//         currentMonth = 11;
//         currentYear--;
//     }
//     updateCalendar();
// });
// title.before(prevLink);
// let nextLink = document.createElement("a");
// nextLink.textContent = "следующий месяц";
// nextLink.href = "#";
// nextLink.addEventListener("click", function(event) {
//     event.preventDefault();
//     currentMonth++;
//     if (currentMonth > 11) {
//         currentMonth = 0;
//         currentYear++;
//     }
//     updateCalendar();
// });
// title.after(nextLink);
// function updateCalendar() {
//     title.textContent = monthNames[currentMonth] + " " + currentYear;
//     numbersList.innerHTML = "";
// let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
//     for (let i = 1; i <= daysInMonth; i++) {
//         let listItem = document.createElement("li");
//         listItem.textContent = i;
//         if (i === currentDate) {
//             listItem.style.backgroundColor = "green";
//         }
//         numbersList.appendChild(listItem);
//     }
// }
// updateCalendar();

// Поиск тегов на JavaScript
// Сейчас мы сделаем сайт, который будет помогать определить значение HTML тега.
// Пусть в этом скрипте будет инпут, в который пользователь будет вводить имя тега.
// После этого по нажатию на Enter под инпутом пусть выдается описание этого тега.
// №1 Продумайте, как удобнее всего хранить имена тегов и их описания в соответствии с поставленной задачей.
// №2 Реализуйте описанный сайт.
// let input = document.querySelector("#vvodNameTag");
// let result = document.querySelector(".result")
// let tegs={
//     p: "абзац",
//     span: "спан",
//     h2: "Заголовок 2-го уровня",
//     h1: "Заголовок 1-го уровня",
//     a: "Гиперссылка",
//     div: "Блочный элемент",
//     img: "Изображение",
//     input: "Поле ввода",
// }
// input.addEventListener("keypress", function(event){
//     if(event.key==="Enter"){
//         let tagN = input.value;
//         if(tegs[tagN]){
//             result.textContent = tegs[tagN]
//         }else{
//             result.textContent = "тег не найден"
//         }
//     }
// })

// Поиск исторических события на JavaScript
// Пусть мы хотим написать сайт, показывающий таблицу исторических событий за определенный год.
// Пусть год будет вводится в инпут. По нажатию Enter давайте выведем таблицу событий, случившихся в этот год.
// Пусть в качестве информации о событии мы хотим видеть дату, название и описание события.
// №1 Продумайте, как удобнее всего хранить исторические события.
// №2 Реализуйте описанный сайт.
// let input = document.querySelector("#input");
// let table = document.getElementById('table');
// let year1812 = [
//  {
//   date: '12.06.1812',
//   sob: 'Отечественная война',
//   opis: 'Отечественная война 1812 года – это война между Французской и Российской империями, которая проходила на территории России. '
//  },
// ]
//  let year1877=[
//     {
//   date: '12.04.1877',
//   sob: 'Русско-турецкая война',
//   opis: 'Русско-турецкая война 1877-1878 года – военный конфликт между Османской империей и Российской империей.'
//  }
// ];
// let year1904=[
//   {
// date: '27.01.1904',
// sob: 'Русско-японская война',
// opis: 'Русско-японская война (1904-1905) — война между Россией и Японией, которая велась за контроль над Маньчжурией, Кореей и портами Порт-Артур и Дальний.'
// }
// ];
// let year1914=[
//   {
// date: '28.07.1914',
// sob: 'Первая мировая война',
// opis: 'Первая мировая война - война между двумя крупными коалициями: государствами Антанты (Россия, Великобритания, Франция) и центральными державами (Германия, Австро-Венгрия, Турция).'
// }
// ];
// input.addEventListener("keypress", function func(event){
//     if(event.key==="Enter"){
//         table.innerHTML = "";
//         if(input.value=="1812"){
//             for (let history of year1812) {
//                 let tr = document.createElement('tr');
//                 let td1 = document.createElement('td');
//                 td1.textContent = history.date;
//                 tr.appendChild(td1);
//                 let td2 = document.createElement('td');
//                 td2.textContent = history.sob;
//                 tr.appendChild(td2);
//                 let td3 = document.createElement('td');
//                 td3.textContent = history.opis;
//                 tr.appendChild(td3);         
//                 table.appendChild(tr);
//             }
//         }else if(input.value=="1877"){
//             for (let history of year1877) {
//                 let tr = document.createElement('tr');
//                 let td1 = document.createElement('td');
//                 td1.textContent = history.date;
//                 tr.appendChild(td1);
//                 let td2 = document.createElement('td');
//                 td2.textContent = history.sob;
//                 tr.appendChild(td2);
//                 let td3 = document.createElement('td');
//                 td3.textContent = history.opis;
//                 tr.appendChild(td3);
//                 table.appendChild(tr);
//             }
//         }else if(input.value=="1904"){
//             for (let history of year1904) {
//                 let tr = document.createElement('tr');
//                 let td1 = document.createElement('td');
//                 td1.textContent = history.date;
//                 tr.appendChild(td1);
//                 table.appendChild(tr);
//                 let td2 = document.createElement('td');
//                 td2.textContent = history.sob;
//                 tr.appendChild(td2);
//                 let td3 = document.createElement('td');
//                 td3.textContent = history.opis;
//                 tr.appendChild(td3);
//                 table.appendChild(tr);
//             }
//           }else if(input.value=="1914"){
//             for (let history of year1914) {
//                 let tr = document.createElement('tr');
//                 let td1 = document.createElement('td');
//                 td1.textContent = history.date;
//                 tr.appendChild(td1);
//                 table.appendChild(tr);
//                 let td2 = document.createElement('td');
//                 td2.textContent = history.sob;
//                 tr.appendChild(td2);
//                 let td3 = document.createElement('td');
//                 td3.textContent = history.opis;
//                 tr.appendChild(td3);
//                 table.appendChild(tr);
//             }
//                   }else{
//             let tr = document.createElement('tr');
//             tr.textContent="событие не найдено";
//             table.appendChild(tr);
//         }
//     }
// });

// Гороскоп на JavaScript
// Сейчас мы реализуем сайт-гороскоп. Этот сайт будет выдавать гороскопы на сегодня.
// Пусть пользователь по заходу на сайт видит инпут, в который нужно вбить дату своего рождения.
// Пусть по нажатию Enter наш сайт выдаст пользователю гороскоп на текущий день за его знак Зодиака.
// Пусть также у нас будут радиокнопки: сегодня, завтра, послезавтра.
// Сделаем так, чтобы в зависимости от выбора выводился гороскоп на соответствующий день.
// Очевидно, что по умолчанию будет выбрано сегодня, но пользователь при желании может изменить свой выбор.
// №1 Продумайте, как вы будете хранить гороскопы в соответствии с поставленной задачей.
// №2 Реализуйте показ гороскопа за текущий день.
// №3 А теперь реализуйте работу радиокнопок, позволяющих выбрать день, за который нужно показать гороскоп.
// let input=document.querySelector(".input");
// let res=document.querySelector("#result");
// let horoscop ={
//     "сегодня":{
//         "овен": "Ближайшие часы должны стать золотым обрамлением вашим выдающимся качествам.",
//         "телец": "Сегодня над вами могут глупо и очень обидно подшутить.",
//         "близнецы": "Сегодняшний день предназначен для отдыха.",
//         "рак": "Сегодня у вас могут появиться проблемы с выражением мыслей и чувств в словесной форме.",
//         "лев": "Сегодня мысли ваши могут оказаться несколько сумбурны, чувства - растрепаны, настроение - переменчиво.",
//         "дева": "Сегодня вы можете получить новые возможности для развития в карьере.",
//         "весы": "Сегодня вы можете найти новые способы достижения своих целей.",
//         "скорпион": "Сегодня у вас может возникнуть желание улучшить свою физическую форму.",
//         "стрелец": "Сегодня вы можете ощущать необходимость контролировать свои эмоции.",
//         "козерог": "Сегодня вы можете испытывать желание расширить свой кругозор.",
//         "водолей": "Вам предстоит заниматься несколькими делами сразу, решать не только свои, но и чужие проблемы.",
//         "рыбы": "Сегодня отличный день для разговора с человеком, поддержкой которого вы давно хотели заручиться.",
//     },
//     "завтра":{
//         "овен": "Вы ощутите необходимость сосредоточиться на себе и своих потребностях.",
//         "телец": "Вам может понадобиться более гибкий подход к решению проблем.",
//         "близнецы": "Вам будет полезно сосредоточиться на отношениях с близкими людьми.",
//         "рак": "Вы можете испытывать чувство неуверенности или тревоги.",
//         "лев": "Вы можете обнаружить новые возможности для улучшения своего финансового положения.",
//         "дева": "Вам может понадобиться больше времени для отдыха и восстановления сил.",
//         "весы": "Обстоятельства сложатся удачно, вы сможете добиться того, к чему давно стремились.",
//         "скорпион": "Будет шанс восстановить романтические отношения, о разрыве которых вы сожалели.",
//         "стрелец": "В личной жизни вероятны перемены к лучшему.",
//         "козерог": "Завтра наступит благоприятный период для работы и учебы.",
//         "водолей": "Вряд ли что-то помешает вам осуществить планы, достичь важной целию.",
//         "рыбы": "Вас ждет непростой, но очень плодотворный день. ",
//     },
//     "послезавтра":{
//         "овен": "Вероятны встречи с давними знакомыми.",
//         "телец": "Будет возможность обсудить важные вопросы с людьми, чье мнение для вас исключительно важно.",
//         "близнецы": "В начале дня ладить с окружающими будет труднее, чем обычно.",
//         "рак": "Именно благодаря умению замечать мелочи вы раньше других узнаете нечто важное, получите информацию, которая позволит достичь давно поставленной цели.",
//         "лев": "Не все будет складываться именно так, как хотелось бы, но непреодолимых преград на пути не возникнет, так что сохраняйте оптимизм и продолжайте двигаться вперед.",
//         "дева": "Любые решения, связанные с деньгами, стоит обдумать дважды.",
//         "весы": "Влияние позитивных тенденций будет преобладать и в личных отношениях. ",
//         "скорпион": "Удастся поладить и с теми, кто прежде не понимал вас и делал критические замечания по любому поводу.",
//         "стрелец": "День будет не самым простым. Могут появиться новые дела и задачи, требующие немедленного решения.",
//         "козерог": "Вероятны новые знакомства, вдохновляющие встречи.",
//         "водолей": "У вас многое будет получаться хорошо, смелые начинания окажутся удачными.",
//         "рыбы": "Вероятны денежные поступления.",
//         }
// };
// input.addEventListener("keypress", function(event){
//     if(event.code==="Enter"){
//         let checkedRadio = document.querySelector('[name="day"]:checked');
//         let date = new Date();
//         if(checkedRadio.value=="сегодня"){
//             let dd= addZero(date.getMonth()+1)+"."+addZero(date.getDate());
//             alert(`сегодня ${dd} для ${znakZodiac(input.value)} прогноз: ${horoscop["сегодня"][znakZodiac(input.value)]}`)
//         }else if(checkedRadio.value=="завтра"){
            
//             let dd= addZero(date.getMonth()+1)+"."+addZero(date.getDate()+1);
//             alert(`завтра ${dd} для ${znakZodiac(input.value)} прогноз: ${horoscop["завтра"][znakZodiac(input.value)]}`)
//         }else{
           
//             let dd= addZero(date.getMonth()+1)+"."+addZero(date.getDate()+2);
//             alert(`послезавтра ${dd} для ${znakZodiac(input.value)} прогноз: ${horoscop["послезавтра"][znakZodiac(input.value)]}`)
//         }
        
//     }
// })
// function addZero(day){
//     if(day<9){
//         return "0" + day;
//     }else{
//         return ""+day;
//     }
// }
// function znakZodiac(date){
//     if(date>='03.21' && date<="04.20"){
//         return "овен";
//     }else if(date>='04.21' && date<="05.21"){
//         return "телец";
//     }else if(date>='05.22' && date<="06.21"){
//         return "близнецы";
//     }else if(date>='06.22' && date<="07.22"){
//         return "рак";
//     }else if(date>='07.23' && date<="08.21"){
//         return "лев";
//     }else if(date>='08.22' && date<="09.23"){
//         return "дева";
//     }else if(date>='09.24' && date<="10.23"){
//         return "весы";
//     }else if(date>='10.24' && date<="11.22"){
//         return "скорпион";
//     }else if(date>='11.23' && date<="12.22"){
//         return "стрелец";
//     }else if(date>='12.23' && date<="12.31" ||
//              date>='01.01' && date<="01.20" ){
//         return "козерог";
//     }else if(date>='01.21' && date<="02.19"){
//         return "водолей";
//     }else if(date>='02.20' && date<="03.20"){
//         return "рыбы";
//     }else{
//         alert("неверно введена дата")
//     }
// }

// Сайт предсказаний на JavaScript
// Сейчас мы сделаем сайт, который будет выдавать предсказания.
// Пусть на этом сайте будет кнопка, по нажатию на которую будет запускаться таймер, который будет каждые 0.1 секунд выводить в в какой-нибудь див случайное
//  число от 1 до некоторого максимального.
// Под дивом пусть будет другая кнопка, по нажатию на которую пользователь нашего сайта может остановить таймер и зафиксировать некоторое число в диве.
// Это число будет номером предсказания.
// После этого покажите пользователю предсказание с этим номером, а все лишние кнопки уберите с экрана, чтобы пользователь не мог получить еще одно
// предсказание.
// То есть на один заход на сайт - одно предсказание.
// №1 Продумайте, как удобнее хранить предсказания.
// №2 Реализуйте описанный сайт.
// №3 Сделайте так, чтобы предсказания были двух видов: хорошие и плохие. Сделайте так, чтобы плохие красились в красный цвет, а хорошие - в зеленый.
// let timer;
// let maxNumber = 8;
// let buttonStart=document.querySelector("#start");
// let buttonStop=document.querySelector("#stop");
// let result = document.getElementById('text')
// let arrpreds = [
// "Всё пойдёт не так, как задумывалось",
// "Давняя мечта сбудется",
// "Всё пойдёт не так, как задумывалось",
// "Давняя мечта сбудется",
// "Всё пойдёт не так, как задумывалось",
// "Давняя мечта сбудется",
// "Всё пойдёт не так, как задумывалось",
// "Давняя мечта сбудется",
// ]
// let predictionNumber = document.getElementById('timer');
// buttonStart.addEventListener("click", function(){
//     timer = setInterval(function(){
//         let randomNum = Math.floor(Math.random() * maxNumber) + 1;
//         predictionNumber.textContent = randomNum;
//     }, 100);
//     document.getElementById('start').classList.remove('active');
//     document.getElementById('stop').classList.add('active');

// })

// buttonStop.addEventListener("click", function(){
//             clearInterval(timer);
//             if(arrpreds[Number(predictionNumber.textContent)]=="Всё пойдёт не так, как задумывалось"){
//                 result.classList.add("red")
//                 result.textContent = "Ваше предсказание: " + arrpreds[Number(predictionNumber.textContent)];
            
//             }else{
//                 result.classList.add("green")
//                 result.textContent = "Ваше предсказание: " + arrpreds[Number(predictionNumber.textContent)];
//             }
//             document.getElementById('start').style.display = 'none';
//             document.getElementById('stop').style.display = 'none';
// })

// Автодополнение на JavaScript
// Сейчас мы реализуем автодополнение.
// Под этим термином понимается выпадающая подсказка при вводе текста в инпут.
// Давайте посмотрим на примере.
// Ниже я сделал инпут, в который можно ввести название страны.
// При этом, если ввести какие-то буквы, то под инпутом появится список стран, которые начинаются на введенную строку.
// При желании можно, чтобы не вводить целиком имя страны, кликнуть мышкой на любую страну и она появится в инпуте.
// Для этого, в общем-то, автодополнение и нужно.
// В примере для простоты я сделал только три страны: Belarus, Belgium и Bulgaria.
// №1 Скопируйте себе приведенный HTML и CSS коды. Реализуйте автодополнение согласно описанному алгоритму.
// let arr = ['Belarus', 'Belgium', 'Bulgaria'];
// let input = document.querySelector("#elem");
// let ul = document.querySelector("#list");
// input.addEventListener("input", function(){
//   ul.innerHTML = "";
//   let filtered = arr.filter(country => country.startsWith(input.value));
//    for(let elem of filtered){
//     let li = document.createElement('li');
//     li.textContent = elem;
//     li.addEventListener("click", function(){
//       input.value = elem;
//     });
//     ul.appendChild(li);
//   }
// });

// Спойлер на JavaScript
// Сейчас мы научимся делать спойлеры.
// Под спойлерами я понимаю блоки, которые можно развернуть, либо свернуть с помощью специальной ссылки.
// В следующем примере кода абзац с классом spoiler является спойлером, а ссылка с классом toggle должна по клику показывать или скрывать этот спойлер.
// №1 Скопируйте себе приведенный HTML и CSS коды. Реализуйте описанную работу спойлеров.
// let toggles = document.querySelectorAll('.toggle');
// for (let toggle of toggles){  
//     toggle.addEventListener('click', function(event){
//         event.preventDefault();
//         let spoiler= toggle.parentElement.nextElementSibling;
//         spoiler.classList.toggle('active');
//     });
// }

// Вкладки на JavaScript
// Сейчас мы реализуем вкладки. 
// №1 Скопируйте себе приведенный HTML и CSS коды. Реализуйте вкладки согласно описанному алгоритму.
// let menu = document.querySelectorAll('.menu a');
// let tabs = document.querySelectorAll('.tabs .tab');
// menu.forEach((tab, index) => {
//     tab.addEventListener('click', function(event) {
//         event.preventDefault();
//         menu.forEach(tab => tab.classList.remove('active'));
//         tabs.forEach(text => text.classList.remove('active'));
//         this.classList.add('active');
//         tabs[index].classList.add('active');
//       });
// }) 


// Аккордеон на JavaScript
// Давайте теперь реализуем аккордеон.
// Он похож на вкладки, перевернутые на бок. 
// При этом в аккордеоне можно закрыть текущую вкладку, если нажать на активную ссылку.
// №1 Скопируйте себе приведенный HTML и CSS коды. Реализуйте аккордеон согласно описанному алгоритму.
// let links = document.querySelectorAll('.link a');
// links.forEach(function(link) {
//   link.addEventListener('click', function() {
//     let tab = this.closest('.tab');
//     let isActive = tab.classList.contains('active');
//     if (isActive) {
//       tab.classList.remove('active');
//     } else {
//       let activeTab = document.querySelector('.tab.active');
//       if (activeTab) {
//         activeTab.classList.remove('active');
//       }
//       tab.classList.add('active');
//     }
//   });
// });

// Игра в города на JavaScript
// Существует игра в города.
// Ее правила: в города играют двое и более человек, в которой каждый участник в свою очередь называет реально существующий город любой страны,
// название которого начинается на ту букву, которой оканчивается название предыдущего участника.
// Давайте реализуем эту игру.
// Пусть играют два человека за одним компьютером. Ходят по очереди. Города вводятся в один инпут и отправляются по нажатию клавиши Enter.
// Браузер должен запоминать города, которые уже были, и не принимать такие города.
// Давайте сразу сделаем простую верстку нашего проекта. У нас будет инпут для ввода городов и див для вывода сообщений со стороны браузера.
// №1 Распишите текстом подзадачи, которые нужно решить для реализации данного проекта.
// Реализация игры в города на JavaScript
// Давайте обсудим, как мы будем реализовывать наш проект.
// Я бы начал с того, что сделал бы массив, в который будут записываться города, которые вводят наши игроки: let cities = [];
// Пусть у нас начало игры и ходит первый игрок. Он вбивает город и нажимает Enter. Очевидно, что этот город мы сразу можем внести в наш массив с городами.
// Теперь будет ходить второй игрок. Так как наш массив уже не пуст, то этот второй ход будет описываться тем же алгоритмом, что и все последующие ходы.
// Что это за алгоритм? Во-первых, нужно проверить то, что первая буква введенного города совпадает с последней буковой предыдущего города.
// Во-вторых, нужно проверить то, что такого города еще не было в этой игре.
// Если оба этих условия выполняются, то введенный город записывается в наш массив и ход переходит к следующему игроку.
// Если же какое-то условие не выполняется, то нужно вывести сообщение об этом.
// №1 Реализуйте игру в соответствии с описанным алгоритмом.
// let field   = document.querySelector('#field');
// let message = document.querySelector('#message');
// let cities = [];
// field.addEventListener("keypress", function(event){
//     if(event.key === "Enter"){
//         let city = field.value.toLowerCase();
//         if(cities.includes(city)){
//             console.log("Такой город уже был!");
//             console.log(city)
//         } else {
//             if(cities.length === 0){
//                 cities.push(city);
//                 console.log(city)
//             } else {
//                let arr1 = cities[cities.length-1].split('')
//                     if(arr1[arr1.length-1]!=city.split('')[0]){
//                     console.log("Город не подходит!")
//                 }else{
//                     cities.push(city);
//                 }
//                     console.log(city)
//                 } 
//         }
//         field.value = "";
//     }
// })

// Игра в города против робота на JavaScript
// Давайте теперь модифицируем нашу игру так, чтобы игра велась против робота, то есть программы, а не другого человека.
// Пусть у нашего робота будет массив всех разрешенных городов: let allCities = [];
// Когда человек будет вбивать в инпут свой город, робот должен будет проверять наличие этого города в своем массиве.
// В таком случае в каждом ходе игрока возможны следующие проблемные ситуации:
// игрок ввел город, который уже был;
// игрок ввел город не на ту букву, на которую заканчивается предыдущий город;
// игрок ввел город, которого нет в списке робота.
// В свой ход робот должен брать один из разрешенных городов так, чтобы этого города еще не было в игре.
// При этом выбранный город должен начинаться с буквы, на которую закончился предыдущий город.
// №1 Реализуйте игру человека против робота.
// let field = document.querySelector('#field');
// let message = document.querySelector('#message');
// let cities = [];
// let allCities = ["абакан", "норильск", "коломна","ангарск","киров","вологда"];
// function robotTurn() {
//     let lastCity = cities[cities.length - 1];
//     let lastLetter = lastCity[lastCity.length - 1];
//     let possibleCities = allCities.filter(city => city.startsWith(lastLetter) && !cities.includes(city));
//     if (possibleCities.length === 0) {
//         console.log("Робот не может продолжить игру, вы выиграли!");
//         return;
//     }
//     let randomCity = possibleCities[Math.floor(Math.random() * possibleCities.length)];
//     cities.push(randomCity);
//     console.log("Робот: " + randomCity);
// }
// field.addEventListener("keypress", function(event) {
//     if (event.key === "Enter") {
//         let city = field.value.toLowerCase();
//                 if (cities.includes(city)) {
//                     console.log("Такой город уже был!");
//         } else if (cities.length === 0 || city.startsWith(cities[cities.length - 1][cities[cities.length - 1].length - 1])) {
//             cities.push(city);
//             console.log("Вы: " + city);
//             robotTurn();
//         } else {
//             console.log("Город не подходит!");
//         }
//                 field.value = "";
//     }
// });


// Чеклист на JavaScript
// В данном уроке мы реализуем чеклист.
// Чеклистом называется программа, которая позволяет сделать список планируемых дел, а затем по мере выполнения этим дел отмечать эти дела сделанными.
// Давайте сделаем так, чтобы дела можно было добавлять, удалять, редактировать и отмечать сделанными.
// №1 Допишите недостающую часть кода для решения описанной задачи.
// №2 Модифицируйте предыдущую задачу так, чтобы после нажатия клавиши Enter происходила очистка текста инпута.
// let input = document.querySelector('#input');
// let list = document.querySelector('#list');
// input.addEventListener('keypress', function(event) {
// 	if (event.key == 'Enter') {
// 		let li = document.createElement('li');
// 		let task = document.createElement('span');
// 		task.classList.add('task');
// 		task.textContent = this.value;
// 		task.addEventListener('dblclick', function() {
// 			let text = this.textContent;
// 			this.textContent = '';
			
// 			let edit = document.createElement('input');
// 			edit.value = text;
// 			this.appendChild(edit);
			
// 			let self = this;
// 			edit.addEventListener('keypress', function(event) {
// 				if (event.key == 'Enter') {
// 					self.textContent = this.value;
// 				}
// 			});
// 		});
// 		li.appendChild(task);
		
// 		let remove = document.createElement('span');
// 		remove.textContent = 'удалить';
// 		remove.classList.add('remove');
// 		remove.addEventListener('click', function() {
// 			this.parentElement.remove();
// 		});
// 		li.appendChild(remove);
		
// 		let mark = document.createElement('span');
// 		mark.textContent = 'сделано';
// 		mark.classList.add('mark');
// 		mark.addEventListener('click', function() {
// 			this.parentElement.classList.add('done');
// 		});
// 		li.appendChild(mark);
		
// 		list.appendChild(li);
		
// 		this.value = '';
// 	}
// });

// Калькулятор продуктов на JavaScript
// В данном разделе мы реализуем калькулятор продуктов.
// Он будет представлять собой таблицу, в которую пользователь нашего сайта будет вносить свои покупки.
// Пусть покупки вносятся с помощью формы.
// Кроме того, для каждого продукта предусмотрим ссылку на удаление.
// Сделаем также возможность редактирования названия, цены и количества продукта.
// Пусть такое редактирование будет происходить по двойному клику по ячейке таблицы.
// Пусть под таблицей выводится суммарная стоимость продуктов.
// Сделаем так, чтобы эта сумма пересчитывалась при удалении и при редактировании продуктов.
// №1 Скопируйте себе представленные мною заготовки кода.
// №1 Реализуйте описанную мною функцию createCell.
// №2 Скопируйте мой код для добавления новой покупки.
// Потестируйте добавление новой покупки в таблицу.
// №3 Модифицируйте функцию createCell так, чтобы она возвращала через return созданную ячейку таблицы.
// №1 Реализуйте описанную мною функцию recountTotal.
// №1 Напишите недостающий код для удаления ряда таблицы.
// №2 Добавьте вызов функции recountTotal в нужное место так, чтобы удаление покупки обновляло общую сумму.
// №1 Реализуйте описанное мною редактирование ячеек.
// №1 Допишите недостающую часть кода так, чтобы при изменении ячейки с ценой или ячейки с количеством изменялась стоимость покупки в колонке cost, а также выполнялся перерасчет общей суммы.
// let namee   = document.querySelector('#name');
// let price  = document.querySelector('#price');
// let amount = document.querySelector('#amount');
// let add    = document.querySelector('#add');
// let table  = document.querySelector('#table');
// let total  = document.querySelector('#total');
// function createCell(tr, value, name) {
//     let td = document.createElement('td');
//     td.textContent = value;
//     td.classList.add(name);
//     tr.appendChild(td);
//     return td;
// }
// function recountTotal() {
// 	let costs = table.querySelectorAll('.cost');
//     let tot=0;
// 	if (costs) {
//         for(let cost of costs){
//             tot += Number(cost.textContent);
//         }
// 	}
//     total.textContent=tot
// }
// function allowEdit(td) {
// 	td.addEventListener('click', function func() {
//         console.log(td)
// 		let input = document.createElement('input');
// 		input.value = td.textContent;
// 		td.textContent = '';
// 		td.appendChild(input);
//         input.addEventListener('keypress', function(event) {
//             if (event.key == 'Enter') {
//                 td.textContent = this.value;
//                  if (td.classList.contains('price') || td.classList.contains('amount')) {
//                     let pr=document.querySelector(".price");
//                     let am = document.querySelector(".amount");
//                     let c=document.querySelector(".cost")
//                     c.textContent= Number(pr.textContent)+Number(am.textContent);
//                     recountTotal();
// 				}
//                 td.addEventListener('click', func);
//             }
// 		});
// 				td.removeEventListener('click', func);
// 	});
// }
// add.addEventListener('click', function() {
// 	let tr = document.createElement('tr');
// 	allowEdit(createCell(tr, namee.value, 'name'));
//     allowEdit(createCell(tr, price.value, 'price'));
//     allowEdit(createCell(tr, amount.value, 'amount'));
//     createCell(tr, price.value * amount.value, 'cost');
//     createCell(tr, 'удалить', 'remove').addEventListener('click', function() {
//         this.parentElement.remove();
//         recountTotal();
//     });  
// 	table.appendChild(tr);
// 	recountTotal();
// });

// Тест с вопросами и ответами в HTML коде на JavaScript
// В этом и в нескольких следующих уроках мы с вами займемся созданием тестов с вопросами и ответами. 
// Начнем с самых простых вариантов и будем постепенно усложнять.
// Пусть для начала мы хотим сделать набор вопросов, на каждый из которых возможен только один ответ.
// Пусть ответы вбиваются пользователем в инпуты под самими вопросами.
// №1 Сделайте так, чтобы ввод ответа в инпут завершался нажатием клавиши Enter.
// Пусть в этом случае инпут сразу проверяет ответ на правильность.
// №2 Модифицируйте ваш код так, чтобы проверка ответов выполнялась по нажатию на кнопку.
// let proverka = document.querySelector('#proverka');
// let inputs= document.querySelectorAll("#test input");
// proverka.addEventListener("click", function(){
//     for(let input of inputs){
//         if (input.value === input.dataset.right) {
//             input.classList.remove('wrong');
//             input.classList.add('right');
//         }else {
//             input.classList.remove('right');
//             input.classList.add('wrong');
//         }
//     }
// })

// Тест с ответами в массиве на JavaScript
// №1 Сделайте так, чтобы по нажатию на кнопку выполнилась проверка правильности ответов.
// let answers = [
// 	'ответ 1',
// 	'ответ 2',
// 	'ответ 3',
// ];
// let proverka= document.querySelector('#button');
// let inputs= document.querySelectorAll("#test input");
// proverka.addEventListener("click", function(){
//     inputs.forEach((input, index)=>{
//         if (input.value === answers[index]) {
//             input.classList.remove('wrong');
//             input.classList.add('right');
//         }else {
//             input.classList.remove('right');
//             input.classList.add('wrong');
//         }
//     })
// })

// Пусть перед нами стоит прежняя задача: по нажатию на кнопку выполнить проверку правильности.
// Очевидно, что наша задача усложнилась: теперь по заходу на страницу нам необходимо перебрать массив вопросов и сформировать HTML код каждого вопроса - родительский див, абзац с текстом и инпут для ответа.
// №1 Реализуйте поставленную задачу.
// let answers = [
// 	'ответ 1',
// 	'ответ 2',
// 	'ответ 3',
// ];
// let questions = [
// 	'вопрос 1?',
// 	'вопрос 2?',
// 	'вопрос 3?'
// ];
// let proverka = document.querySelector('#button');
// let div = document.querySelector("#test");
// for (let question of questions){
//     let divquestions=document.createElement("div");
//     let p = document.createElement("p");
//     let input = document.createElement("input")
//     p.textContent=question;
//     divquestions.appendChild(p)
//     divquestions.appendChild(input);
//     div.appendChild(divquestions)
// }
// let inputs = document.querySelectorAll("#test input");
// proverka.addEventListener("click", function(){
//     inputs.forEach((input, index)=>{
//         if (input.value === answers[index]) {
//             input.classList.remove('wrong');
//             input.classList.add('right');
//         }else {
//             input.classList.remove('right');
//             input.classList.add('wrong');
//         }
//     })
// })

// Тест с вопросами и ответами в объекте на JavaScript
// В предыдущем уроке наши вопросы и ответы хранились в разных переменных. Такое разделение зачастую может быть не очень удобным.
// Давайте поработаем с другими вариантами хранения.
// №1 Пусть вопросы и ответы хранятся в таком объекте:
// let questions = {
// 	'Вопрос 1?': 'ответ 1',
// 	'Вопрос 2?': 'ответ 2',
// 	'Вопрос 3?': 'ответ 3',
// }
// Решите задачу создания теста для такого варианта хранения данных
// let questions = {
// 	'Вопрос 1?': 'ответ 1',
// 	'Вопрос 2?': 'ответ 2',
// 	'Вопрос 3?': 'ответ 3',
// };
// let proverka = document.querySelector('#button');
// let div = document.querySelector("#test");
// for (let question in questions){
//     let divquestions=document.createElement("div");
//     let p = document.createElement("p");
//     let input = document.createElement("input")
//     p.textContent=question;
//     divquestions.appendChild(p)
//     divquestions.appendChild(input);
//     div.appendChild(divquestions)
// }
// let inputs = document.querySelectorAll("#test input");
// proverka.addEventListener("click", function(){
//     inputs.forEach((input, index)=>{
//         if (input.value === questions[input.previousElementSibling.textContent]) {
//             input.classList.remove('wrong');
//             input.classList.add('right');
//         }else {
//             input.classList.remove('right');
//             input.classList.add('wrong');
//         }
//     })
// })
// №2 Пусть вопросы и ответы хранятся в таком объекте:
// let questions = [
// 	{
// 		text:  'вопрос 1?',
// 		right: 'ответ 1',
// 	},
// 	{
// 		text:  'вопрос 2?',
// 		right: 'ответ 2',
// 	},
// 	{
// 		text:  'вопрос 3?',
// 		right: 'ответ 3',
// 	},
// ];
// Решите задачу создания теста для такого варианта хранения данных.
// let questions = [
// 	{
// 		text:  'вопрос 1?',
// 		right: 'ответ 1',
// 	},
// 	{
// 		text:  'вопрос 2?',
// 		right: 'ответ 2',
// 	},
// 	{
// 		text:  'вопрос 3?',
// 		right: 'ответ 3',
// 	},
// ];
// let proverka = document.querySelector('#button');
// let div = document.querySelector("#test");
// for (let question of questions){
//     let divquestion =document.createElement("div");
//     let p = document.createElement("p");
//     let input = document.createElement("input")
//     p.textContent=question.text;
//     divquestion.appendChild(p)
//     divquestion.appendChild(input);
//     div.appendChild(divquestion)
// }
// let inputs = document.querySelectorAll("#test input");
// proverka.addEventListener("click", function(){
//     inputs.forEach((input, index)=>{
//         if (input.value === questions[index].right) {
//             input.classList.remove('wrong');
//             input.classList.add('right');
//         }else {
//             input.classList.remove('right');
//             input.classList.add('wrong');
//         }
//     })
// })

// Тест с вариантами ответов в HTML коде на JavaScript
// В предыдущих уроках ответы на вопросы теста должны были вбиваться в инпуты.
// В жизни, однако, часто бывают также тексты, в которых можно выбрать один вариант ответа из предложенных.
// Давайте научимся создавать такие тесты.
// Давайте опять начнем с простого варианта, когда вопросы и ответы хранятся в HTML коде, а затем будем постепенно усложнять.
// №1 Сделайте так, чтобы при выборе одного из ответов вопроса этот ответ сразу проверялся на правильность.
// let radioButtons = document.querySelectorAll('input[type=radio]');
// for(let radioButton of radioButtons){
// 	radioButton.addEventListener("click", function func(){
// 		let question = this.closest('div');
// 		let isrightAnswer =question.querySelector('input[data-right]');
// 		if (this === isrightAnswer) {
// 			question.style.color = 'green';
// 		} else {
// 			question.style.color = 'red';
// 		}
//         radioButton.removeEventListener('click', func);
// 	})
// }
// №2 Модифицируйте ваш код так, чтобы проверка ответов выполнялась по нажатию на кнопку.
// let proverka = document.querySelector('#button');
// proverka.addEventListener('click', function() {
// let radioButtons = document.querySelectorAll('input[type=radio]');
// 	for(let radioButton of radioButtons){
// 		let question = radioButton.closest('div');
// 	    let isrightAnswer = question.querySelector('input[data-right]');
// 		if (radioButton.checked) {
// 		    if (radioButton === isrightAnswer) {
// 		        question.style.color = 'green';
// 		    } else {
// 		        question.style.color = 'red';
// 		}
// 	  }
// 	}
// });

// Тест с вариантами ответов в массиве на JavaScript
// Пусть теперь у нас есть массив, в котором написаны номера правильных ответов для каждого вопроса:
// let answers = [0, 1, 2];
// То есть в первом элементе этого массива лежит номер правильного ответа первого вопроса,
// во втором элементе - для второго вопроса и так далее.
// №1 Модифицируйте код предыдущего урока с учетом описанного.
// let proverka = document.querySelector('#button');
// let answers = [0, 1, 2];
// proverka.addEventListener('click', function() {
// let radioButtons = document.querySelectorAll('input[type=radio]');
// for (let radioButton of radioButtons) {
// let question = radioButton.closest('div');
// let isRightAnswer = question.querySelector('input[data-right]');
// if (radioButton.checked) {
//   if (radioButton === isRightAnswer) {
//     question.style.color = 'green';
//   } else {
//     question.style.color = 'red';
//   }
// }
// }
// });

// Тест с вопросами и вариантами ответов в объекте на JavaScript
// Пусть теперь вопросы, варианты ответов и номера правильных ответов хранятся в одном объекте.
// Теперь по заходу на страницу вам придется перебрать циклом наш объект и сформировать HTML код вопросов.
// №1 Реализуйте поставленную задачу.
// let questions = [
//     {
//     text: 'вопрос 1?',
//     right: 0,
//     variants: [
//     'вариант 1',
//     'вариант 2',
//     'вариант 3'
//     ]
//     },
//     {
//     text: 'вопрос 2?',
//     right: 1,
//     variants: [
//     'вариант 1',
//     'вариант 2',
//     'вариант 3'
//     ]
//     },
//     {
//     text: 'вопрос 3?',
//     right: 2,
//     variants: [
//     'вариант 1',
//     'вариант 2',
//     'вариант 3'
//     ]
//     },
//     ];
//     let answers = [0, 1, 2];
//     let proverka = document.querySelector('#button');
//     let div_test = document.querySelector("#test");
//         for (let question of questions) {
//     let div = document.createElement("div");
//     let p = document.createElement("p");
//     p.textContent = question.text;
//     div.appendChild(p);
//     for (let i = 0; i < question.variants.length; i++) {
//         let label = document.createElement("label");
//         let input = document.createElement("input");
//         input.type = "radio";
//         input.value = i;
//         input.name = question.text;
//         label.appendChild(input);
//         label.innerHTML += question.variants[i];
//         div.appendChild(label);
//     }
//     div_test.appendChild(div);
//     }
//     proverka.addEventListener("click", function() {
//     let radioButtons = document.querySelectorAll('input[type=radio]');
//     for (let radioButton of radioButtons) {
//     let question = radioButton.closest('div');
//     let rightAnswer = questions.find(q => q.text == question.querySelector("p").textContent).right;
//     if (radioButton.checked) {
//     if (parseInt(radioButton.value) === rightAnswer) {
//     question.style.color = 'green';
//     } else {
//     question.style.color = 'red';
//     }
//     }
//     }
//     })


// Игра крестики-нолики на JavaScript
// №1 Скопируйте себе приведенные HTML, CSS и JavaScript коды.
// Запись в ячейку в игре крестики-нолики на JavaScript
// Давайте для начала сделаем так, чтобы по нажатию на любую ячейку таблицы в этой ячейке просто появлялся крестик.
// Сделаем для этого функцию start, параметром принимающую массив ячеек таблицы
// №1 Реализуйте описанную задачу.
// Чередование крестика и нолика
// Давайте теперь сделаем чередования крестиков и ноликов.
// Для этого я предлагаю ввести счетчик ходов.
// Имея такой счетчик, мы легко можем реализовать чередование крестика и нолика:
// очевидно, что крестик будет появляться на четные значения счетчика, а нолик - на нечетные.
// №1 Реализуйте описанное чередование крестика и нолика.
// Разбор чередование крестика и нолика
// Как вы видите, в этом массиве крестик имеет ключ 0, а нолик - ключ 1. То же самое можно сказать и про i % 2 - для крестика остаток будет 0, а для нолика - 1.
// №1 Самостоятельно, не подсматривая в мой код, внесите описанную правку.
// №2 Сейчас на любую ячейку можно делать неограниченное количество кликов, меняя, например, крестик на нолик.
// Исправьте это.
// Проверка победы в игре крестики-нолики на JavaScript
// Теперь пришла пора написать код, который будет определять победу и выводить имя победителя.
// Давайте сделаем функцию isVictory, которая параметром будет принимать массив ячеек и возвращать true, если на поле есть победа, и false, если нет.
// Как же нам узнать имя победителя?
// Очевидно, что его имя хранится в каждой из победивших ячеек. 
// Поясню: если у нас есть победа, то это значит что некоторые 3 ячейки по горизонтали, вертикали или диагонали содержат одинаковое значение: либо крестик, либо нолик.
// Очевидно, что значение любой из эти ячеек и есть имя победителя.
// Но можно пойти и другим, менее очевидным путем: так как мы определяем наличие победы каждый ход, то логично, что победителем будет игрок, совершивший последний ход.
// Имя этого игрока содержится в тексте кликнутой ячейки
// Реализация isVictory
// Как же нам технически определить наличие победы на поле?
// Если хорошо все обдумать, то можно прийти к выводу, что на поле ограниченное количество троек ячеек.
// То есть для проверки победы можно просто проверить все эти тройки.
// Нужно проверять на то, что тройки имеют одинаковые не пустые значения (то есть там либо крестик, либо нолик).
// Сделаем двухмерный массив, в каждом подмассиве которого будут номера ячеек одной из троек
// №1 Самостоятельно, не подсматривая в мой код, реализуйте описанное.
// Проверьте, как функционирует игровой процесс.
// №2 Попробуйте реализовать проверку ничьей.
// В следующем уроке будет разбор этого места.
// Разбор проверки ничьей в игре крестики-нолики на JavaScript
// Давайте теперь рассмотрим ничью.
// Очевидно, что ничья наступает, если все ячейки заполнены и нет победителя. 
// let cells = document.querySelectorAll('#field td');
// let gamers = ['X', 'O'];
// start(cells);
// function isVictory(cells) {
// 	let combs = [
// 		[0, 1, 2],
// 		[3, 4, 5],
// 		[6, 7, 8],
// 		[0, 3, 6],
// 		[1, 4, 7],
// 		[2, 5, 8],
// 		[0, 4, 8],
// 		[2, 4, 6],
// 	];
// 	for (let comb of combs) {
// 		if (
// 			cells[comb[0]].textContent == cells[comb[1]].textContent &&
// 			cells[comb[1]].textContent == cells[comb[2]].textContent &&
// 			cells[comb[0]].textContent != ''
// 		) {
// 			return true;
// 		}
// 	}
// 		return false;
// }
// function start(cells) {
// 	let i = 0;
// 	for(let cell of cells){
// 		cell.addEventListener('click', function func() {
// 			this.textContent = ['X', 'O'][i % 2];	
// 			cell.removeEventListener("click", func);
// 			if (isVictory(cells)) {
// 				alert(this.textContent+" "+"выиграл");
// 			}else if (i == 8) {
// 				alert('ничья');
// 			}
// 			i++;
// 		})
        
// 	}
// }


// Игра смена цветов на JavaScript
// В данном разделе вы с моей помощью реализуете игру.
// Игра будет представлять собой таблицу, ячейки которой окрашены в разные случайные цвета.
// Пусть есть определенный набор цветов, например, красный, зеленый, синий.
// Пусть каждый клик на ячейку меняет ее цвет по кругу.
// Цель игры - за наименьшее количество кликов сделать таблицу одного - любого - цвета.
// Давайте приступим к реализации. Для начала сделаем игровое поле в виде таблицы <table>
// Обсудим теперь, как подойти к реализации нашей игры.
// Как вы видите, эта задача уже достаточно большая, чтобы так сходу решить ее.
// Поэтому ее следует разбить на некоторые этапы - подзадачи, выполняя которые мы постепенно решим нашу основную задачу.
// Для начала самым логичным этапом будет написать скрипт, создающий ячейки таблицы. 
// №1 Скопируйте себе приведенный HTML и CSS коды.
// Напишите код, который создаст таблицу заданного размера.
// Окраска ячеек в разные цвета
// Следующим логичным этапом будет разрисовать наши ячейки в случайные цвета.
// По условию задачи у нас некоторый ограниченный набор цветов, пусть три: красный, зеленый, синий.
// Если подумать, то эти цвета удобно сделать CSS классами.
// Эти классы мы будем давать ячейкам нашей таблицы
// Имея такой массив, мы можем решить нашу задачу: в момент создания ячейки будем присваивать ей CSS, случайным образом выбирая его из нашего массива.
// Для этого лучше сделать некую вспомогательную функцию, которая параметром будет принимать массив и возвращать его случайный элемент.
// №1 Реализуйте описанную функцию. Потестируйте ее работу.
// №2 С помощью созданной вами функции сделайте так, чтобы ячейки при создании таблицы окрашивались в случайные цвета.
// Смена цвета ячеек
// Следующим логичным этапом будет сделать так, чтобы по клику на ячейку эта ячейка меняла свой цвет.
// По описанию игры цвета должны меняться по порядку. 
// То есть технически в нашем случае в том порядке, в котором они написаны в нашем массиве цветов:
// let colors = ['red', 'green', 
// 	'blue']; 
// Это значит, что по клику на ячейку мы должны прочитать ее цвет, найти этот цвет в массиве цветов, затем получить следующий цвет из массива 
// и установить его цветом нашей ячейки.
// Удобно в таком случае иметь функцию, которая параметром будет принимать массив и элемент этого массива и возвращать следующий элемент. Понятно, что все должно ходить по кругу: если мы передаем в функцию последний элемент массива, то она своим результатом должна вернуть первый.
// №1 Реализуйте описанную функцию. Потестируйте ее работу.
// №2 С помощью созданной вами функции сделайте так,
// чтобы каждая ячейка при клике на нее меняла свой цвет на следующий.
// Победа в игре смена цветов на JavaScript
// В предыдущих уроках мы в общем-то реализовали весь игровой процесс.
// Осталось сделать так, чтобы игра определяла момент победы.
// Обдумав вопрос, можно прийти в выводу, что момент победы - это когда все ячейки имеют одинаковый цвет. То есть технически - одинаковый класс.
// Это значит, что в момент клика по любой ячейке нужно взять класс любой ячейки (подойдет та, по которой мы кликнули) и посмотреть,
// все ли остальные ячейки имеют этот класс.
// Если да - то все, победа. Если нет - продолжаем играть.
// №1 Реализуйте поставленную задачу.
// Вывод количества ходов в игре смена цветов на JavaScript
// В общем наша игра реализована. Но давайте улучшим ее.
// Сделаем так, чтобы над таблицей отображалось то, сколько кликов сделал игрок к настоящему моменту.
// №1 Реализуйте поставленную задачу.
// let rows=3;
// let cols=3;
// let colors = ['red', 'green', 'blue'];
// let table =document.querySelector("#field");
// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// function nextColor(currentCol, arrColor) {
// 	let currentI = arrColor.indexOf(currentCol);
// 	let nextI;
//     if (currentI === arrColor.length - 1) {
// 	  nextI=0;
// 	} else {
// 		nextI=currentI+1;
// 	}
// 	return arrColor[nextI];
// }
// function win(arr) {
// 	let first = arr[0];
//     return arr.every(color => color === first);
// }
// for(let i=0; i<rows; i++){
// 	let tr=document.createElement("tr");
// 	for(let j=0; j<cols; j++){
// 		let td=document.createElement("td");
// 		td.classList.add(colors[getRandomInt(0, 2)]);
// 		tr.appendChild(td)
// 	}
// 	table.appendChild(tr)
// }
// let tds = document.querySelectorAll("#field td");
// let count=0
// for (let td of tds){
// 	td.addEventListener("click", function(){
// 		count+=1
// 		let currentColor = td.className;
//         let nextColorr = nextColor(currentColor, colors);
//         td.className = nextColorr;
// 		let tds = document.querySelectorAll("#field td");
// 	    let colorss = Array.from(tds).map(elem => elem.className);
// 		if(win(colorss)){
// 			alert(`вы победили за ${count} кликов`)
// 			count=0
// 		}
// 	})
// }


// Календарь на JavaScript
// В данном разделе мы реализуем календарь. Для простоты просто сделаем так, чтобы календарь выводился за текущий месяц.
// Но с прицелом на то, что его можно будет доработать так, чтобы можно было менять месяц и год.
// №1 Скопируйте себе представленные мною заготовки кода.
// Обсуждение реализации календаря на JavaScript
// Наш календарь представляет собой таблицу с числами от 1 до последнего дня месяца.
// Проблема в том, что числа в таблице в первом ряду должны идти не с первой ячейки.
// Это в общем очевидно.
// Не очевидно с какой именно ячейки нужно начинать. Давайте обдумаем.
// Пусть неделя начинается с понедельника, и он нулевой день.
// В этом случае номер дня недели первого числа месяца соответствует количеству пустых ячеек перед ним.
// Например, четверг будет иметь номер 3 и перед ним будет 3 пустых ячейки.
// Аналогичная проблема нас будет ждать в конце таблицы. Там тоже нужно оставлять пустые ячейки после последнего числа месяца.
// В этом случае количество пустых ячеек будет равно шестерке, от которой нужно отнять номер дня недели последнего дня месяца.
// Подумаем теперь, как мы будем формировать нашу таблицу.
// Очевидно, что удобнее всего иметь двухмерный массив, в каждом подмассиве которого будет по 7 элементов (= количеству дней в недели).
// При этом в первом и последнем подмассивах часть элементов должны быть пустыми.
// Алгоритм действий
// Сделаем функцию, которая будет делать массив чисел от 1 до последнего дня месяца.
// Затем сделаем функцию, которая добавит в начало массива необходимое количество пустых элементов.
// Аналогичная функция должна добавлять пустые элементы в конец массива.
// После этого у нас получится одномерный массив с количеством элементов, кратным 7.
// Преобразуем этот массив в двухмерный по 7 элементов в подмассиве.
// Затем возьмем этот двухмерный массив, переберем циклами и сформируем нашу таблицу.
// Этот алгоритм действий мы поэтапно будем выполнять в следующих уроках.
// Заполнение массива числами в календаре на JavaScript
// Начнем с того, что сделаем функцию, которая параметром будет принимать целое число и создавать массив чисел от 1 до этого числа:
// function range(count) {
// }
// Также нам понадобится функция, которая будет возвращать номер последнего дня месяца:
// function getLastDay(year, month) {
// }
// №1 Реализуйте указанные функции и выведите в консоль массив от 1 до последнего дня месяца.
// Дни недели первого и последнего дней месяца
// Давайте теперь сделаем функцию, которая будет получать номер дня недели первого дня месяца:
// function getFirstWeekDay(year, month) {
// }
// И аналогичную функцию для последнего дня месяца:
// function getLastWeekDay(year, month) {
// }
// №1 Реализуйте указанные функции и проверьте их работу.
// Нормализация массива в календаре на JavaScript
// В предыдущих уроках вы должны были сделать массив чисел от 1 до последнего дня месяца:
// let arr = range(getLastDay(year, month));
// Также у вас есть номер дня недели для первого дня месяца и для последнего:
// let firstWeekDay = getFirstWeekDay(year, month);
// let lastWeekDay  = getLastWeekDay(year, month);
// Давайте теперь дополним наш массив пустыми строками справа и слева. Пусть для этого у нас будет функция normalize, первым параметром принимающая массив, вторым - сколько пустых строк добавить слева, а третьим - сколько пустых строк справа:
// function normalize(arr, left, right) {
// Напоминаю, что слева мы должны добавить firstWeekDay пустых элементов, а справа - 6 минус lastWeekDay элементов. То есть мы будем пользоваться нашей функцией normalize вот так:
// let res = normalize(arr, firstWeekDay, 6 - lastWeekDay);
// console.log(res);
// №1 Реализуйте описанную функцию normalize и проверьте ее работу.
// Разбиение массива на двухмерный в календаре на JavaScript
// В предыдущем уроке мы сделали массив, заполненный справа и слева пустыми строками. Давайте теперь разобьем этот массив в двухмерный. Сделаем для этого следующую функцию chunk:
// function chunk(arr, n) {
// 	// n - количество элементов в подмассиве
// }
// Можно воспользоваться нашей функцией следующим образом:
// let res = chunk(normalize(arr, firstWeekDay, 6 - lastWeekDay), 7));
// console.log(res);
// №1 Реализуйте описанную функцию chunk и проверьте ее работу.
// Создание таблицы в календаре на JavaScript
// Давайте теперь сделаем функцию createTable, первым параметром принимающую ссылку на родительский элемент чисел календаря (в нашем случае это будет tbody), а вторым - двухмерный массив:
// function createTable(parent, arr) {
// }
// Воспользуемся функцией следующем образом:
// let arr = range(getLastDay(year, month));
// let firstWeekDay = getFirstWeekDay(year, month);
// let lastWeekDay  = getLastWeekDay(year, month);
// let nums = chunk(normalize(arr, firstWeekDay, 6 - lastWeekDay), 7);
// createTable(body, nums)
// №1 Реализуйте описанную функцию createTable.
// №2 Соберите весь код вместе и выведите на экран календарь за текущий месяц.
// Функция для формирования календаря на JavaScript
// Обернем код формирования календаря в функцию:
// function draw(body, year, month) {
// 	let arr = range(getLastDay(year, month));
// 	let firstWeekDay = getFirstWeekDay(year, month);
// 	let lastWeekDay  = getLastWeekDay(year, month);
// 	let nums = chunk(normalize(arr, firstWeekDay, 6 - lastWeekDay), 7);
// 	createTable(body, nums)
// }
// В этом случае мы сможем нарисовать календарь следующим образом:
// let date  = new Date();
// let year  = date.getFullYear();
// let month = date.getMonth();
// draw(body, year, month)
// №1 Сделайте описанное.
// let calendar = document.querySelector('#calendar');
// let body = calendar.querySelector('.body');
// let prev = calendar.querySelector('.prev');
// let next = calendar.querySelector('.next');
// let date  = new Date();
// let year  = date.getFullYear();
// let month = date.getMonth();
// draw(body, year, month);
// function draw(body, year, month) {
// 	let arr = range(getLastDay(year, month));
// 	let firstWeekDay = getFirstWeekDay(year, month);
// 	let lastWeekDay  = getLastWeekDay(year, month);
// 	let nums = chunk(normalize(arr, firstWeekDay, 6 - lastWeekDay), 7);
// 	createTable(body, nums)
// }
// function createTable(parent, arr) {
// 	parent.textContent = '';
// 	let cells = [];
//     for (let sub of arr) {
// 		let tr = document.createElement('tr');
// 			for (let num of sub) {
// 			let td = document.createElement('td');
// 			td.textContent = num;
// 			tr.appendChild(td);
// 			cells.push(td);
// 		}
// 		parent.appendChild(tr);
// 	}
// 	return cells;
// }
// function normalize(arr, left, right) {
// 	for (let i = 0; i < left; i++) {
// 		arr.unshift('');
// 	}
// 	for (var i = 0; i < right; i++) {
// 		arr.push('');
// 	}
// 	return arr;
// }
// function getFirstWeekDay(year, month) {
// 	let date = new Date(year, month, 1);
// 	let num  = date.getDay();
// 	if (num == 0) {
// 		return 6;
// 	} else {
// 		return num - 1;
// 	}
// }
// function getLastWeekDay(year, month) {
// 	let date = new Date(year, month + 1, 0);
// 	let num  = date.getDay();
// 	if (num == 0) {
// 		return 6;
// 	} else {
// 		return num - 1;
// 	}
// }
// function getLastDay(year, month) {
// 	let date = new Date(year, month + 1, 0);
// 	return date.getDate();
// }
// function range(count) {
// 	let arr = [];
// 	for (let i = 1; i <= count; i++) {
// 		arr.push(i);
// 	}
// 	return arr;
// }
// function chunk(arr, n) {
// 	let result = [];
// 	let count = Math.ceil(arr.length / n);
// 	for (let i = 0; i < count; i++) {
// 		let elems = arr.splice(0, n);
// 		result.push(elems);
// 	}
// 	return result;
// }


// Вывод месяца и года в календаре на JavaScript
// В предыдущих уроках мы с вам сделали тот календарь, который был образцом в первом уроке. Давайте теперь улучшим его.
// Для начала давайте сделаем так, чтобы над календарем показывался текущий месяц и год.
// №1 Реализуйте описанный вывод текущего месяца и дня.
// let calendar = document.querySelector('#calendar');
// let body = calendar.querySelector('.body');
// let prev = calendar.querySelector('.prev');
// let next = calendar.querySelector('.next');
// let tekdat = document.querySelector(".info");
// let arrMonths=['Январь' , 'Февраль' , 'Март' , 'Апрель' , 'Май' , 'Июнь' , 'Июль' , 'Август' , 'Сентябрь' , 'Октябрь' , 'Ноябрь' , 'Декабрь'];
// let date  = new Date();
// let now = date.getDate();
// let year  = date.getFullYear();
// let month = date.getMonth();
// tekdat.textContent=`${arrMonths[month]} ${year}`;
// draw(body, year, month);
// function draw(body, year, month) {
// 	let arr = range(getLastDay(year, month));
// 	let firstWeekDay = getFirstWeekDay(year, 
// 		month); 
// 	let lastWeekDay  = getLastWeekDay(year, 
// 		month); 
// 	let nums = chunk(normalize(arr, firstWeekDay, 
// 		6 - lastWeekDay), 7); 
// 	createTable(body, nums)
// }
// function createTable(parent, arr) {
// 	parent.textContent = '';
// 	let cells = [];
// 	for (let sub of arr) {
// 		let tr = document.createElement('tr');
		
// 		for (let num of sub) {
// 			let td = document.createElement('td');
// 			td.textContent = num;
// 			tr.appendChild(td);
// 			cells.push(td);
// 		}
// 		parent.appendChild(tr);
// 	}
// 	return cells;
// }
// function normalize(arr, left, right) {
// 	for (let i = 0; i < left; i++) {
// 		arr.unshift('');
// 	}
// 	for (var i = 0; i < right; i++) {
// 		arr.push('');
// 	}
// 	return arr;
// }
// function getFirstWeekDay(year, month) {
// 	let date = new Date(year, month, 1);
// 	let num  = date.getDay();
	
// 	if (num == 0) {
// 		return 6;
// 	} else {
// 		return num - 1;
// 	}
// }
// function getLastWeekDay(year, month) {
// 	let date = new Date(year, month + 1, 0);
// 	let num  = date.getDay();
	
// 	if (num == 0) {
// 		return 6;
// 	} else {
// 		return num - 1;
// 	}
// }
// function getLastDay(year, month) {
// 	let date = new Date(year, month + 1, 0);
// 	return date.getDate();
// }
// function range(count) {
// 	let arr = [];
// 	for (let i = 1; i <= count; i++) {
// 		arr.push(i);
// 	}
// 	return arr;
// }
// function chunk(arr, n) {
// 	let result = [];
// 	let count = Math.ceil(arr.length / n);
// 	for (let i = 0; i < count; i++) {
// 		let elems = arr.splice(0, n);
// 		result.push(elems);
// 	}
// 	return result;
// }

// Стрелки для смены месяца в календаре на JavaScript
// Давайте теперь под календарем сделаем стрелки для смены месяца.
// Получим ссылки на стрелки в переменные:
// let prev = calendar.querySelector('.prev');
// let next = calendar.querySelector('.next');
// Обсуждение
// Давайте теперь обсудим, как решать задачу. На самом деле код нашего календаря написан хорошо расширяемым: у нас есть функция draw, которая рисует календарь за заданный месяц. Таким образом при нажатии на стрелку мы можем перерисовать календарь с другим номером месяца (и возможно года).
// Вот пример того, что мы можем сделать по клику на стрелку следующего месяца:
// next.addEventListener('click', function() {
// 	draw(body, getNextYear(year, month), getNextMonth(month));
// });
// Как вы видите, здесь используются функции getNextYear и getNextMonth.
// Давайте обсудим, что они должны делать.
// Как следует из названия функция getNextYear получает следующий год. 
// Здесь имеется ввиду то, что, если сейчас декабрь, то при переключении на следующий месяц год должен увеличится на 1.
// Если же сейчас не декабрь, то функция просто должна вернуть текущий год.
// Функция getNextMonth должна получать следующий месяц. Она для всех месяцев, кроме декабря, будет к номеру месяцу добавлять единицу.
// Ну а для декабря следующим месяцем будет январь с номером 0.
// Аналогичные операции следует проделать при нажатии на кнопку предыдущего месяца:
// prev.addEventListener('click', function() {
// 	draw(body, getPrevYear(year, month), getPrevMonth(month));
// });
// №1 Реализуйте работу кнопок смены месяца.
// №2 Сделайте так, чтобы информация над календарем соответствовала отображаемому месяцу и году.
let calendar = document.querySelector('#calendar');
let body = calendar.querySelector('.body');
let tekdat = document.querySelector(".info");
let prev = calendar.querySelector('.prev');
let next = calendar.querySelector('.next');
let arrMonths=['Январь' , 'Февраль' , 'Март' , 'Апрель' , 'Май' , 'Июнь' , 'Июль' , 'Август' , 'Сентябрь' , 'Октябрь' , 'Ноябрь' , 'Декабрь'];
let date  = new Date();
let now = date.getDate();
let year  = date.getFullYear();
let month = date.getMonth();
tekdat.textContent=`${arrMonths[month]} ${year}`;
draw(body, year, month);
function draw(body, year, month) {
	let arr = range(getLastDay(year, month));
	let firstWeekDay = getFirstWeekDay(year, 
		month); 
	let lastWeekDay  = getLastWeekDay(year, 
		month); 
	let nums = chunk(normalize(arr, firstWeekDay, 
		6 - lastWeekDay), 7); 
	createTable(body, nums)
}
function createTable(parent, arr) {
	parent.textContent = '';
	let cells = [];
	for (let sub of arr) {
		let tr = document.createElement('tr');
		for (let num of sub) {
			let td = document.createElement('td');
			td.textContent = num;
			tr.appendChild(td);
			cells.push(td);
		}
		parent.appendChild(tr);
	}
	return cells;
}
function normalize(arr, left, right) {
	for (let i = 0; i < left; i++) {
		arr.unshift('');
	}
	for (var i = 0; i < right; i++) {
		arr.push('');
	}
	return arr;
}
function getFirstWeekDay(year, month) {
	let date = new Date(year, month, 1);
	let num  = date.getDay();
	if (num == 0) {
		return 6;
	} else {
		return num - 1;
	}
}
function getLastWeekDay(year, month) {
	let date = new Date(year, month + 1, 0);
	let num  = date.getDay();
	
	if (num == 0) {
		return 6;
	} else {
		return num - 1;
	}
}
function getLastDay(year, month) {
	let date = new Date(year, month + 1, 0);
	return date.getDate();
}
function range(count) {
	let arr = [];
	for (let i = 1; i <= count; i++) {
		arr.push(i);
	}
	return arr;
}
function chunk(arr, n) {
	let result = [];
	let count = Math.ceil(arr.length / n);
	
	for (let i = 0; i < count; i++) {
		let elems = arr.splice(0, n);
		result.push(elems);
	}
	return result;
}
function getNextMonth(month) {
    if (month < 11) {
        return month + 1;
    } else {
        return 0;
    }
}
function getPrevMonth(month) {
    if (month == 0) {
        return 11;
    } else {
        return month-1;
    }
}
function getNextYear(year, month) {
    if (month === 11) {
        return year + 1;
    } else {
        return year;
    }
}
function getPrevYear(year, month) {
    if (month === 0) {
        return year - 1;
    } else {
        return year;
    }
}
next.addEventListener('click', function func(event) {
	event.preventDefault();
	if(month==11){
	    month=0;
		year+=1
	}else{
		month+=1
	}
    draw(body, year, month);
    tekdat.textContent =`${arrMonths[month]} ${year}`;
	next.addEventListener("click", func);
});
prev.addEventListener('click', function func(event) {
	event.preventDefault();
	if(month==0){
		month=11;
		year-=1
	}else{
		month-=1
	}
    draw(body, year, month);
    tekdat.textContent = `${arrMonths[month]} ${year}`;
	prev.addEventListener("click", func);
});