function abrir() {
    var capa1 = document.getElementById('capa1')
    var capa2 = document.getElementById('capa2')
    var abrir = document.getElementById('abrir')

    
    
    abrir.style.boxShadow = '5px 5px 10px 0px rgba(0, 0, 0, 0.768)'

    // Remove a classe de animação caso já esteja aplicada
    abrir.classList.remove('animate__animated', 'animate__hinge');

    // Força o reflow (recalcula o layout) para que a animação seja reaplicada
    void abrir.offsetWidth;

    // Adiciona novamente as classes da animação
    abrir.classList.add('animate__animated', 'animate__hinge');

    abrir.addEventListener('animationend', abrircapa, { once: true });
}

function abrircapa() {
    var capa1 = document.getElementById('capa1')
    var capa2 = document.getElementById('capa2')
    var abrir = document.getElementById('abrir')
    var papel = document.querySelector('.papel')


    capa1.style.transition = 'margin-left 1s'
    capa1.style.marginLeft = '-45vw'
    
    capa1.style.position = 'fixed'
    capa2.style.transition = 'margin-right 1s'
    capa2.style.marginRight = '-45vw'
    
    capa2.style.position = 'fixed'
    

    papel.style.display = 'block'
    // Remove a classe de animação caso já esteja aplicada
    setTimeout(() => { papel.classList.remove('animate__animated', 'animate__slideInUp');

    // Força o reflow (recalcula o layout) para que a animação seja reaplicada
    void papel.offsetWidth;

    // Adiciona novamente as classes da animação
    papel.classList.add('animate__animated', 'animate__slideInUp');
    papel.style.marginTop = '-98vh' }, 800); 
    
}