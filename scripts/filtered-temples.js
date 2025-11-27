const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

document.getElementById('lastmodified').textContent = `Last Modification: ${document.lastModified}`;

const header = document.querySelector('header');
const nav = document.querySelector('nav');

if (header && nav) {
    header.addEventListener('click', (event) => {
        if (window.innerWidth < 600) {
            nav.classList.toggle('open');
            header.classList.toggle('menu-open');
        }
    });
}

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Jordan River Utah",
        location: "South Jordan, Utah, United States",
        dedicated: "1981, November, 16",
        area: 148236,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/jordan-river-utah/400x250/02-Jordan-River-Temple-2022-778848-web.jpg"
    },
    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x250/accra-ghana-temple-detail-249021-34.jpg"
    },
    {
        templeName: "Sapporo Japan",
        location: "Sapporo, Japan",
        dedicated: "2016, August, 21",
        area: 48480,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sapporo-japan/400x250/sapporo-japan-temple-exterior-1887340.jpg"
    }
];

const createTempleCards = (filteredTemples) => {
    const mainElement = document.querySelector('main');
    
    const h1Element = mainElement.querySelector('h1');
    while (mainElement.lastChild !== h1Element) {
        mainElement.removeChild(mainElement.lastChild);
    }

    filteredTemples.forEach(temple => {
        const figure = document.createElement('figure');
        figure.classList.add('temple-card');

        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = `Temple of ${temple.templeName}`;
        img.loading = 'lazy';
        img.width = 400; 
        img.height = 250; 
        
        const figcaption = document.createElement('figcaption');
        
        const nameP = document.createElement('p');
        nameP.textContent = temple.templeName;
        nameP.classList.add('name');

        const locationP = document.createElement('p');
        locationP.textContent = `Location: ${temple.location}`;

        const dedicatedP = document.createElement('p');
        dedicatedP.textContent = `Dedicated: ${temple.dedicated}`;
        
        const areaP = document.createElement('p');
        areaP.textContent = `Size: ${temple.area.toLocaleString()} sq ft`; 

        figcaption.appendChild(nameP);
        figcaption.appendChild(locationP);
        figcaption.appendChild(dedicatedP);
        figcaption.appendChild(areaP);

        figure.appendChild(img);
        figure.appendChild(figcaption);

        mainElement.appendChild(figure);
    });
}

const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const filter = link.textContent;
        const mainTitle = document.querySelector('main h1');
        
        let filteredTemples = [];
        let newTitle = "Temple Image Gallery"; 

        switch (filter) {
            case 'Old':
                filteredTemples = temples.filter(temple => {
                    const dedicatedYear = parseInt(temple.dedicated.split(',')[0]);
                    return dedicatedYear < 1900;
                });
                newTitle = "Old Temples";
                break;
            case 'New':
                filteredTemples = temples.filter(temple => {
                    const dedicatedYear = parseInt(temple.dedicated.split(',')[0]);
                    return dedicatedYear > 2000;
                });
                newTitle = "New Temples";
                break;
            case 'Large':
                filteredTemples = temples.filter(temple => temple.area > 90000);
                newTitle = "Large Temples";
                break;
            case 'Small':
                filteredTemples = temples.filter(temple => temple.area < 10000);
                newTitle = "Small Temples";
                break;
            case 'Home':
                filteredTemples = temples;
                newTitle = "All Temples";
                break;
            default:
                filteredTemples = temples;
                newTitle = "Temple Image Gallery";
                break;
        }
        
        mainTitle.textContent = newTitle;
        createTempleCards(filteredTemples);

        if (window.innerWidth < 600) {
            nav.classList.remove('open');
            header.classList.remove('menu-open');
        }
    });
});

createTempleCards(temples);