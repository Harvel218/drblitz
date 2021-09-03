const fileInputListeners = (array) => {
    array.forEach((form) => {
        const fileInput = form.querySelector('.js-file-input');
        const valueModal = form.querySelector('.js-file-value .value');

        fileInput.addEventListener('change', () => {
            valueModal.innerHTML = 'ZAŁĄCZONO:' + ' ' + fileInput.value.replace(/C:\\fakepath\\/i, '');
        });
    });
};

const turnOnListeners = () => {
    const contactForms = document.querySelectorAll('.js-contact');

    if (contactForms.length != 0) {
        fileInputListeners(contactForms);
    }
};

turnOnListeners();
