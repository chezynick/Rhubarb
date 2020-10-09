function contactDeets () {
    let contactPage = document.getElementById('content');
    contactPage.innerHTML = '';
    contactPage.classList.add('contactPage');
    const map = document.createElement('img');
    const contacts = document.createElement('div');
    map.classList.add('map');
    contacts.classList.add('contactBox')
    map.setAttribute('src','https://api2.ordnancesurvey.co.uk/mapping_api/v1/service/zxy/EPSG%3A3857/Outdoor%203857/12/2025/1325.png?key=n7AcuJE53SEuomCSn1dGpgNz1ZxGwU3C');
    contacts.innerText = 'the numbers \n go here!';
    contactPage.appendChild(map);
    contactPage.appendChild(contacts);
}
export default contactDeets;