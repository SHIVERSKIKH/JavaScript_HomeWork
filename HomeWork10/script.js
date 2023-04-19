// Задание 2
// 1. Создать файл index.html.
// 2. Подключить data.js.
// 3. Сформировать контент из данных (картинка загловок и параграф).
// 4. Добавить данный контент в вёрстку.
// 5. * Добавить стили при необходимости (по желанию).

import { dataInfo } from "./data.js";

const content = document.querySelector('.content');
const data = JSON.parse(dataInfo);
console.log(data);

content.style.display = 'flex';
content.style.gap = '30px';
content.style.textAlign = 'center';
content.style.justifyContent = 'center';


data.forEach(({ id, name, age, breed, url}) => {
    const div = document.createElement('div');
    div.classList.add('card');
    const img = document.createElement('img');
    img.classList.add('card-img-top');
    img.alt = 'image';
    img.width = 350;
    img.height = 300;
    img.src = url;

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent = name;
    title.style.color = 'brown';

    const subtitle = document.createElement('h6');
    subtitle.classList.add('card-subtitle', 'mb-2', 'text-muted');
    subtitle.textContent = age;

    const cardBreed = document.createElement('p');
    cardBreed.classList.add('card-breed');
    cardBreed.textContent = breed;

    const idPara = document.createElement('p');
    idPara.classList.add('card-content');
    idPara.textContent = `ID ${id}`;

    cardBody.appendChild(title);
    cardBody.appendChild(subtitle);
    cardBody.appendChild(idPara);
    cardBody.appendChild(cardBreed);

    div.appendChild(img);
    div.appendChild(cardBody);

    content.appendChild(div);
});