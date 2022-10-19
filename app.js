let lab3Button = document.getElementById('lab3Button')
let theme = document.getElementById('theme')
let task1 = document.getElementById('task1')
let fixedTable = document.getElementById('fixedTable')
let flexTable = document.getElementById('flexTable')
let fixedBlock = document.getElementById('fixedBlock')
let flexBlock = document.getElementById('flexBlock')
let pageScreen = document.getElementById('pageScreen')
let htmlCode = document.getElementById('htmlCode')
let cssCode = document.getElementById('cssCode')
let conclusions = document.getElementById('conclusions')
lab3Button.onclick = () => {
    lab3Button.style.textDecoration = 'underline'
    theme.onclick = () =>{
        content.textContent = 'https://github.com/dremafedka/lab3-flexbox https://github.com/dremafedka/lab3-grid https://github.com/dremafedka/lab3-table'
    }
    task1.onclick = () =>{
        content.textContent = `<!DOCTYPE html><html lang=en><link href=https://fonts.googleapis.com rel=preconnect><link href=https://fonts.gstatic.com rel=preconnect crossorigin><link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto&display=swap"rel=stylesheet><link href=https://fonts.googleapis.com rel=preconnect><link href=https://fonts.gstatic.com rel=preconnect crossorigin><link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@700&family=Roboto&display=swap"rel=stylesheet><meta charset=UTF-8><meta content="IE=edge"http-equiv=X-UA-Compatible><meta content="width=device-width,initial-scale=1"name=viewport><title>Document</title><link href=styles.css rel=stylesheet><div class=app-wrapper><div class=avatar><img alt=""class=myPhoto src=fedor.jpg></div><div class=description><h2><strong>My name is Fedir Gorbenko<br>and i am a professional business coach</strong></h2><p>In my business course, you will learn how to open a business correctly, as well as correctly describe the software structure of a business plan. As the former owner of the "Beauty Studio" business studio, I assure you that soon you will be a millionaire.<p>We will also discuss the main problems in business. How to build a relationship between you and employees or what color of Mercedes to choose. The course contains 30 video lessons and 15 motivational quotes.<p>Hurry up to buy the course for the promotion, and become a participant in the drawing of two Xiaomi in honor of the anniversary of our company.</div><div class=other><div class=header>Our Students</div><div class=trump><img alt=""class=dImage1 src=business1.jpeg>Donald Trump</div><div class=kirill><img alt=""class=dImage2 src=business2.jpg>Sosnovsky Kirill</div><div class=deckboy><img alt=""class=dImage3 src=business3.jpg>Salum Omar</div></div><div class=links><div class=help>Help</div><div class=connect>Connect us</div><div class=partners>Our partners</div><div class=license>License agreement</div><div class=faq>FAQ</div></div></div>`
    }
    fixedTable.onclick = () =>{
        content.textContent =  `<table border=1><tr><td>Block 1<td>Block 2<tr><td>Block 3<td>Block 4</table>`
    }
    flexTable.onclick = () =>{
        content.textContent = `<table border=1><tr><td><h2>Logo</h2><td colspan=2>Header<tr><td><p>Menu<ul><li>Category 1<li>Categoty 2<li>Category 3<li>Category 4<ul><li>Sub category 1<li>Sub category 2</ul></ul><td><h2>Title Article</h2><img alt=""class=image src=web1.png><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, sed corrupti consectetur alias dolor voluptas repudiandae soluta laborum laudantium quos nisi non quod cum magni cumque asperiores. Esse, excepturi necessitatibus!<td><h3>Advertise</h3><table border=1><tr><td>Block 1<td>Block 2<tr><td>Block 3<td>Block 4</table><tr><td colspan=3>Footer</table>`
    }
    fixedBlock.onclick = () =>{
        content.textContent = `.app-wrapper{margin:0 auto;display:grid;width:1200px;grid-template-areas:'a d' 'o o' 'l l';grid-template-rows:1fr 1fr;grid-template-columns:1fr 1fr}`
    }
    flexBlock.onclick = () =>{
        content.textContent = `.other{display:grid;grid-area:o;grid-template-areas:'h h h' 'i1 i2 i3';grid-template-columns:1fr 1fr 1fr}`
    }
    pageScreen.onclick = () =>{
        content.textContent = 'https://postimg.cc/8jJXD0qM   https://postimg.cc/9RGqmgdm  https://postimg.cc/75TD86Jg' 
    }
    htmlCode.onclick = () =>{
        content.textContent = `<!DOCTYPE html><html lang="en"><head><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto&display=swap" rel="stylesheet"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@700&family=Roboto&display=swap" rel="stylesheet"><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title><link rel="stylesheet" href="styles.css"></head><body><div class="continer"><div class="item1">Центр навчання IT</div><div class="item2"><div class="subitem1">Курси інженерної графіки <br>Курси програмування <br>Курси бухгалтерів <br>Курси сис. адмінування <br>Курси дизайну <br>Курси графіки <br>Курси дизайну</div><div class="subitem2">Нова форма навчання <br>Вибір зручного для вас часу <br>Навчання за індивідуальною програмою <br>Безкоштовна установка ПО <br>Викладач налаштує потрібну програму</div><div class="subitem3">Розклад занять <br>Понеділок: початок о 8.00 <br>Вівторок: початок о 8.00 <br>Середа: початок о 8.00 <br>Четвер: початок о 8.00 <br>П'ятниця: початок о 8.00 <br>Субота-Неділя вихідні</div></div><div class="item3"><div><img class="image" src="web1.png"></div><div class="text">Ми шукаємо всіх тих, кому цікавий світ програмування. Хочете займатися розробкою ПО і побудовою сайтів? А може, ви вже це робите і хочете нових знань? Не біда, якщо ніколи і не пробували себе в подібному - команда ІТ готова надати свої послуги людям будь-якого рівня знань. Не важливо, професійний ви розробник чи звичайний початківець, ми з радістю вам допоможемо.</div></div><div class="links"><div class="link">Help</div><div class="link">Connect us</div><div class="link">Our partners</div><div class="link">License agreement</div><div class="link">FAQ</div></div></div></body></html>`
    }
    cssCode.onclick = () =>{
        content.textContent = `.container{display:flex;flex-direction:column}.item1{padding:40px;font-size:25px;font-family:Oswald;text-align:center}.item2{font-size:15px;font-family:Oswald;display:flex;flex-direction:row}.item3{padding-top:100px;font-size:15px;font-family:Oswald;display:flex;flex-direction:row}.subitem1{text-align:center;height:150px;width:33%;font-family:Oswald;background-color:#fff9dc}.subitem2{text-align:center;height:150px;width:33%;font-family:Oswald;background-color:#e5ffe7}.subitem3{text-align:center;height:150px;width:33%;font-family:Oswald;background-color:#ffe5e5}.image{width:300px;height:200px}.text{text-align:center;width:100%}.links{display:flex;flex-direction:row;padding-top:50px;width:100%}.link{font-size:large;font-family:Oswald;width:100%;text-align:center}`
    }
    conclusions.onclick = () =>{
        content.textContent = 'Я отримав практичні навички роботи верстки сторінок засобами CSS, верстки на основі плаваючих елементів, з’ясував переваги та недоліки типів макетів веб-сторінок. придбав практичні навички роботи верстки сторінок засобами CSS та FLEXBOX'
    }
}

