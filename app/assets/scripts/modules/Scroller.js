var about = document.getElementById('about');



function Scroll(){
    var posy = window.pageYOffset;

    if(posy > 800){ 
        about.classList.add('show-about');
    } else{
        about.classList.remove('show-about')
    }
}




window.addEventListener('scroll', Scroll);
