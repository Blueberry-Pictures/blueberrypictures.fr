function menuOnLoad() {
    console.log("[menu.js] : chargé");

    menuWrap = document.getElementById('menuWrap');
    menuItems = document.querySelectorAll('.menuHide');
    
    menuWrap.addEventListener('mouseover', showMenuItems);
    menuWrap.addEventListener('mouseout', hideMenuItems);
}

function showMenuItems() {
    menuItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('menuShow');
        }, index * 50); //Délai
    });
}

function hideMenuItems() {
    const menuItems = document.querySelectorAll('.menuHide');
    const totalItems = menuItems.length;

    menuItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.remove('menuShow');
        }, (totalItems - index - 1) * 50); //Délai
    });
}