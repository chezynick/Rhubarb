import { EvalSourceMapDevToolPlugin } from "webpack";

function contactDeets () {
    let contactPage = document.getElementById('content');
    contactPage.innerHTML = '';
    contactPage.classList.add('contactPage');
    const map = document.createElement('img');
    const contacts = document.createElement('div');
    const deets = document.createElement('div')
    const phone = document.createElement('div')
    const email = document.createElement('div')
    map.classList.add('map');
    contacts.classList.add('contactBox')
    map.setAttribute('src','https://api2.ordnancesurvey.co.uk/mapping_api/v1/service/zxy/EPSG%3A3857/Outdoor%203857/12/2025/1325.png?key=n7AcuJE53SEuomCSn1dGpgNz1ZxGwU3C');
    deets.innerText = 'To book a table please \n contact us directly';
    phone.innerText = 'Phone Number: 01457 8866666';
    email.innerText = 'Email : blahblahblah@Rhubarb.com'
    //append details to contacts
    contacts.appendChild(deets)
    contacts.appendChild(phone);
    contacts.appendChild(email);
    //append both boxes to contact page
    contactPage.appendChild(map);
    contactPage.appendChild(contacts);
}
export default contactDeets;