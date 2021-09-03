document.addEventListener('DOMContentLoaded', () => {
    const menu = new MmenuLight(document.querySelector('#hamburger-menu'));

    const navigator = menu.navigation({
        title: '',
    });
    const drawer = menu.offcanvas();

    document.querySelector("a[href='#hamburger-menu']").addEventListener('click', (evnt) => {
        evnt.preventDefault();
        drawer.open();
    });
});
