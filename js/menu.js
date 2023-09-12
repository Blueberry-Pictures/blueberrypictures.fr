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
        }, index * 300); //Délai
    });
}

function hideMenuItems() {
    menuItems.forEach((item) => {
        item.classList.remove('menuShow');
    });
}