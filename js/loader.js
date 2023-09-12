function onLoad() {
    try {
        menuOnLoad();
    } catch (error) {
        console.log("[menu.js] : non-chargé\n"+error)
    }
}