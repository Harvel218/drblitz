import data from '../../data/footer.json';

const stringData = JSON.stringify(data);
const parsedData = JSON.parse(stringData);

const place = document.querySelector('.js-place');
const phone = document.querySelector('.js-phone');
const email = document.querySelector('.js-mail');

const changeContent = () => {
    place.innerHTML = parsedData[0].address;
    phone.innerHTML = parsedData[0].contactNumber;
    email.innerHTML = parsedData[0].email;
};

const changeAttributes = () => {
    phone.href = 'tel:' + parsedData[0].contactNumber;
    email.href = 'mailto:' + parsedData[0].email;
};

const turnOnMethods = () => {
    if (data && place && phone && email) {
        changeContent();
        changeAttributes();
    }
};

turnOnMethods();
