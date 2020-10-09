function displayMenu  () {
    const menuPage = document.getElementById('content')
    menuPage.innerHTML='';
//create new elements to make up menu page
    const newMenu = document.createElement('ul');
    newMenu.classList.add('menuPage')
    const starters = document.createElement('p');
    const mains = document.createElement('p');
    const desserts = document.createElement('p');
    const drinks = document.createElement('p');
//add text to courses
    starters.innerText = 'Poached egg on thickly \n sliced Sourdough drizzled \n with olive oil.\n __________';
    mains.innerText = 'Carrot suprise! \n morroccan stew with carrots, Aubergine \n and chickpeas.\n __________';
    desserts.innerText = 'Rhubarb Bakerys famous Chocolate fondants \n with a scoop of local ice cream\n __________';
    drinks.innerText = 'A selection of the finest homebrew \n once again made here on the \n premisies'
//append items to newmenu
    newMenu.appendChild(starters)
    newMenu.appendChild(mains)
    newMenu.appendChild(desserts)
    newMenu.appendChild(drinks);
//append menu to page
    menuPage.appendChild(newMenu);
}
export default displayMenu;