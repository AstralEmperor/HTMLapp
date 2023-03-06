var navToggle = document.getElementsByClassName('nav__link-button');

for(i = 0; i < navToggle.length; i++){
    navToggle[i].addEventListener('click',function(){
       var nav__second = this.nextElementSibling;

       if(nav__second.style.display === "flex"){

        nav__second.style.display = "none";
        this.innerHTML = 'expand_more';
        this.setAttribute('aria-expanded','false');
       }else{
           nav__second.style.display = "flex";
           this.innerHTML = 'expand_less';
           this.setAttribute('aria-expended','true');
       }
  });
}