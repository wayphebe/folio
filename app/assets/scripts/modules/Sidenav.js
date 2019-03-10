var sidenav = document.getElementById('vocosidenav')

function Sidenav(){
    var posy = window.pageYOffset;

    if(posy > 1500){ 
        sidenav.children[0].style.opacity = 1;
    } else {
        sidenav.children[[0].style.opacity = 0.2;
    }
}

window.addEventListener('scroll', Sidenav);

