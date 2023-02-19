function toggleMode() { 
    const html = document.documentElement
    const img = document.querySelector("#profile img")

    html.classList.toggle('light')

    if (html.classList.contains('light')) {
        img.setAttribute('src', './assets/avatar-light.png')
        img.setAttribute('alt', 'Patrick olhando para a câmera utilizando um óculos refletindo o calor')
    } else { 
        img.setAttribute('src', './assets/avatar.png')
        img.setAttribute('alt', 'Patrick olhando para câmera de frente o espelho sem óculos')
    }
}