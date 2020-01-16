console.log('DOM');
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];
const nav = document.querySelector('nav');
const ul = document.createElement('ul');
/*const makeMenu = () => {
    const html = (`
    <li><a href="/">start</a></li>
    <li><a href="/gallery">galeria</a></li>
    <li><a href="/contact">kontakt</a></li>
    `);
    nav.append(ul);
    ul.innerHTML = html;
};
makeMenu();*/
const menu = () => {
    nav.append(ul);
    menuItems.forEach(e => {
        const html = (`
            <li><a href=${e.url}>${e.text}</a></li>
    `);
        ul.insertAdjacentHTML('beforeend', html);
    })
};
menu();