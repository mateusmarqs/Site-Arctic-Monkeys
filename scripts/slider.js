function menu() {
    const menu = document.getElementById('menu');
    if (menu.style.height == '0px' || menu.style.height == '') {
        menu.style.height = '236px'
    } else {
        menu.style.height = '0px'
    }
}
