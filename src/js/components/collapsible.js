const listenCollapses = (array, togglerClass, toggleTargetClass = false) => {
    array.forEach((collapsible) => {
        const collapseBtn = collapsible.querySelector(togglerClass);
        const toggle = () => {
            if (toggleTargetClass) {
                collapsible.querySelector(toggleTargetClass).classList.toggle('active');
            } else {
                collapsible.classList.toggle('active');
            }
        };
        collapseBtn.addEventListener('click', () => {
            toggle();
        });
    });
};

const turnOnListeners = () => {
    const collapsibleContainers = document.querySelectorAll('.js-collapsible');

    if (collapsibleContainers.length != 0) {
        listenCollapses(collapsibleContainers, '.js-collapse');
        listenCollapses(collapsibleContainers, '.js-apply', '.js-contact');
    }
};

turnOnListeners();
