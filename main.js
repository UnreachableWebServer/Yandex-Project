const themeSwitchers = document.querySelectorAll('.change-theme');

themeSwitchers.forEach(switcher => {
    switcher.addEventListener('click', function() {
        applyTheme(this.dataset.theme)
        localStorage.setItem('theme', this.dataset.theme)
    })
})

function applyTheme(themeName) {
    let themeUrl = `css/theme-${themeName}.css`
    document.querySelector('[title="theme"]').setAttribute('href', themeUrl)
}

let activeTheme = localStorage.getItem('theme')

if (activeTheme == null) {
    applyTheme('light')
} else {
    applyTheme(activeTheme)
}

function errorMusic(){
    var musicError = new Audio('sounds/error_sound.mp3');
    musicError.play();
}

function clickMusic() {
    var musicClick = new Audio('sounds/button_click.mp3');
    musicClick.play();
}


window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    setTimeout(function() {
        loader.classList.add("loader-hidden");
        loader.addEventListener("transitionend", () => {
            document.body.removeChild(loader);
        })
    }, 1500);
});
