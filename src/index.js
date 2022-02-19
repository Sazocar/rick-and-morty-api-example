/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/


const baseUrl = 'https://rickandmortyapi.com/api/character';
const appNode = document.querySelector('#my-app');

window.fetch(`${baseUrl}`)
    .then(response => response.json())
    .then(jsonResponse => {
        const allItems = [];
        for (let i = 0; i < 20; i++) {

            const image = document.createElement('img');
            image.src = jsonResponse.results[i].image;
            image.className =
            "h-40 w-40 md:h-40 md:w-40 rounded-full mx-auto md:mx-0 md:mr-6";

            const name = document.createElement('h2');
            name.textContent = jsonResponse.results[i].name;
            name.className = 'font-mono text-xl font-light text-white';

            const status = document.createElement('p');
            status.textContent = jsonResponse.results[i].status;
            status.className = 'font-light text-base text-yellow-400';

            const nameAndStatus = document.createElement("div");
            nameAndStatus.className = "text-center md:text-left self-center";
            nameAndStatus.appendChild(name);
            nameAndStatus.appendChild(status);

            const card = document.createElement("div");
            card.className = "md:flex bg-gray-600 rounded-lg p-6 hover:bg-gray-400";
            card.appendChild(image);
            card.appendChild(nameAndStatus);

            allItems.push(card);
        }

        appNode.append(...allItems);
        appNode.className = 'mt-10 grid grid-cols-1 md:grid-cols-3 gap-4';
    });
