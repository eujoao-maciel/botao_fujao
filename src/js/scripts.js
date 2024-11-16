const getOut = () => {
    const btnNao = document.getElementById('nao')

    const widthWindow = window.innerWidth
    const heightWindow = window.innerHeight

    const maxX = widthWindow - btnNao.offsetWidth
    const maxY = heightWindow - btnNao.offsetHeight

    let randomX = Math.floor(Math.random() * maxX )
    let randomY = Math.floor(Math.random() * maxY )

    btnNao.style.left = randomX + "px"
    btnNao.style.top = randomY + "px"
}

document.getElementById('nao').addEventListener('click', getOut)