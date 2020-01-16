console.log('DOM');

const curr = document.querySelector('.js-curr');
const button = document.createElement('button');
curr.parentElement.appendChild(button).innerText = 'usun z koszyka';

const parent = curr.parentElement;
const children = parent.children;
const list = Array.from(children);
list.forEach(item => {
    item.classList.add('siblings');
});

parent.firstElementChild.setAttribute('title', 'nextElementSibling');

const p = document.createElement('p');

curr.previousElementSibling.append(p);
p.innerText = 'hello world';

const structure = `
        <article class="articles__item article">
            <h1 class="article__title">JS - Elementy DOM</h1 class="article__btn">
            <p class="article__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quo quibusdam, nemo neque consequuntur pariatur totam? Facere quaerat molestias hic.</p class="article__btn">
            <button class="article__btn js-curr">Kupuję!</button>
        </article>
`;

parent.insertAdjacentHTML('afterBegin', structure);