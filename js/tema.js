function guardarStilos() {
    //check if body has dark class

  const body = document.body;
    if(body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    }else {
        localStorage.setItem('theme', 'light');
    } 

}

// onload
window.onload = function() {
    //check if theme is set in localstorage
    const currentTheme = localStorage.getItem('theme');
    if(currentTheme) {
        document.body.classList.add(currentTheme);
    }
}

//capturar onclick del boton guardarStilos
document.getElementById('guardarStilos').addEventListener('click', guardarStilos);
