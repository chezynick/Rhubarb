//renders the original page
const container = document.getElementById('container');
//create header bar and append titles and menu bar
const header = document.createElement('header');
const rhubarb = document.createElement('h1');
const bakery = document.createElement('h5');
const menuBar = document.createElement('div');
const home = document.createElement('div');
const menu = document.createElement('div');
const contact = document.createElement('div');
const divide = document.createElement('div');
const divide2 = document.createElement('div');
//set ID's and add innertext
menuBar.setAttribute('id','menuBar');
home.setAttribute('id','home')
menu.setAttribute('id','menu');
contact.setAttribute('id','contact')
rhubarb.innerText='Rhubarb';
bakery.innerText='Bakery';
home.innerText='home';
menu.innerText='menu';
contact.innerText='contact';
divide.innerText='|';
divide2.innerText='|';
//append all of the headers to the page
menuBar.appendChild(home);
menuBar.appendChild(divide);
menuBar.appendChild(menu);
menuBar.appendChild(divide2);
menuBar.appendChild(contact);
header.appendChild(rhubarb)
header.appendChild(bakery);
header.appendChild(menuBar)
container.appendChild(header);
//create main part of page
const content = document.createElement('div');
const choco = document.createElement('img');
const foot = document.createElement('footer')
foot.setAttribute('id','footer')
content.setAttribute('id','content')
choco.setAttribute('id','choco')
choco.setAttribute('src','https://du7ybees82p4m.cloudfront.net/5954ced2cc41d8.37796671.jpg?width=1200&height=630')
foot.innerText = 'info goes here'
//append to container
content.appendChild(choco);
container.appendChild(content);
container.appendChild(foot);
//add event listeners for the 3 tabs
//home tab reloads the page
const homeButton = (() => {
    let pressed = document.getElementById('home');
    pressed.addEventListener('click', homePage)
    function homePage (){
        location.reload();
    }
})();
//menu tab
const menuButton = (() => {
    let pressed = document.getElementById('menu');
    pressed.addEventListener('click', displayMenu );

})();
    import displayMenu from './menu.js'
//contact tab
const contactButton = (() => {
    let pressed = document.getElementById('contact');
    pressed.addEventListener('click', contactDeets )

})();
    import contactDeets from './contact.js'

