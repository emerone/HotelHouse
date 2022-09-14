// animation 
const header = document.querySelector('.super-container');
const logoTitle = document.querySelector('.logo-title');
const footer = document.querySelector('footer');

logoTitle.addEventListener("click", function(){
    header.classList.add("menu")
    footer.classList.add("menu")
});


//baner in news


const btnBanner = document.querySelectorAll('.btn-banner');
const banner = document.querySelector('.container-news');

let i = 0;
btnBanner[1].addEventListener("click", function(){
    console.log(i)
    if(i == 0){
        banner.classList.replace('a', 'b');
        i++;
        console.log(i);
    } else if(i == 1){
        banner.classList.replace('b', 'c');
        i++;
        console.log(i);
    } else if(i == 2){
        banner.classList.replace('c', 'd');
        i++;
        console.log(i);
    } else if(i == 3){
        banner.classList.replace('d', 'a');
        i = 0;
        console.log(i);
    }
});


btnBanner[0].addEventListener("click", function(){
    if(i == 0){
        banner.classList.replace('a', 'd');
        i = 3;
        console.log(i)
    } else if(i == 3){
        banner.classList.replace('d', 'c');
        i = 2;
        console.log(i)
    } else if(i == 2){
        banner.classList.replace('c', 'b');
        i = 1;
        console.log(i)
    } else if(i == 1){
        banner.classList.replace('b', 'a');
        i = 0;
        console.log(i)
    } 
});


// modals function

const modal = document.querySelector('.first-dialog');
const modals = document.querySelectorAll('dialog');
const btnsModalClose = document.querySelectorAll('.modal-btn-close');
const btnsModalOpen = document.querySelectorAll('.modal-btn-open');

console.log(modal)
modal.showModal();



for(let p=0;p<btnsModalClose.length;p++){
    
    btnsModalClose[p].addEventListener('click', () => {
            modals[p].classList.replace('up', 'up-decrease');
            
            modals[p].addEventListener('animationend', () => {
                modals[p].close();
                 modals[p].classList.replace('up-decrease' ,'up');
        }, {once:true});
        
    });

    // close modals when clicking outside

    modals[p].addEventListener('click', (e) => {
        console.log(e.target.nodeName);

        if(e.target.nodeName == 'DIALOG'){
            modals[p].classList.replace('up', 'up-decrease');
            
            modals[p].addEventListener('animationend', () => {
                modals[p].close();
                 modals[p].classList.replace('up-decrease' ,'up');
        }, {once:true});
        }
    })
}


console.log(btnsModalOpen[0]);
console.log(modals[0]);


for(let q=0;q<btnsModalOpen.length;q++){

    btnsModalOpen[q].addEventListener('click', () => {
        modals[q].showModal();
        console.log(q)
    });
}



//Close all the modal at the same time even not needed just to lines of code


//mobile menu

const sections = document.querySelectorAll('.super-section');
const btnBurger = document.querySelector('.hamburger-lines');
const leftMenu = document.querySelector('header');

btnBurger.addEventListener('click', () => {
    btnBurger.classList.toggle('menu');
    header.classList.toggle('left-menu');
});

for(let i=0;i<sections.length;i++) {
    sections[i].addEventListener('click', () =>{
    header.classList.remove('left-menu');
    });
}

//animation pages

const home = document.querySelector('.home');
const bedroom = document.querySelectorAll('.bedroom');
const restaurant = document.querySelectorAll ('.restaurant');
const spa = document.querySelectorAll('.spa');
const hotel = document.querySelectorAll('.hotel');
const opinions = document.querySelector('.opinions');
const news = document.querySelectorAll('.news');


home.addEventListener('click', () => {

    for(let i = 0 ; i<sections.length; i++){
        sections[i].classList.add('animation-end');
        
        sections[i].addEventListener('animationend', () => {
            
            for(i = 0 ; i<sections.length; i++){
                sections[i].classList.remove('animation-end');
            }
            header.setAttribute('class', 'super-container a menu');

        }, {once:true});
    }

});

for(let b = 0; b<bedroom.length;b++){

    
    bedroom[b].addEventListener('click', () => {
        
        for(let i = 0 ; i<sections.length; i++){
            sections[i].classList.add('animation-end');
            
            sections[i].addEventListener('animationend', () => {
                
                for(i = 0 ; i<sections.length; i++){
                    sections[i].classList.remove('animation-end');
                }
                header.setAttribute('class', 'super-container b menu');

            }, {once:true});
        }
        
    });
}

for(let b = 0; b<bedroom.length;b++){

    
    restaurant[b].addEventListener('click', () => {
        
        for(let i = 0 ; i<sections.length; i++){
            sections[i].classList.add('animation-end');
            
            sections[i].addEventListener('animationend', () => {
                
                for(i = 0 ; i<sections.length; i++){
                    sections[i].classList.remove('animation-end');
                }
                header.setAttribute('class', 'super-container c menu');

            }, {once:true});
        }
        
    });
}   

for(let b = 0; b<bedroom.length;b++){

    
    spa[b].addEventListener('click', () => {
        
        for(let i = 0 ; i<sections.length; i++){
            sections[i].classList.add('animation-end');
            
            sections[i].addEventListener('animationend', () => {
                
                for(i = 0 ; i<sections.length; i++){
                    sections[i].classList.remove('animation-end');
                }
                header.setAttribute('class', 'super-container d menu');

            }, {once:true});
        }
        
    });
}   

for(let b = 0; b<bedroom.length;b++){

    
    hotel[b].addEventListener('click', () => {
        
        for(let i = 0 ; i<sections.length; i++){
            sections[i].classList.add('animation-end');
            
            sections[i].addEventListener('animationend', () => {
                
                for(i = 0 ; i<sections.length; i++){
                    sections[i].classList.remove('animation-end');
                }
                header.setAttribute('class', 'super-container e menu');

            }, {once:true});
        }
        
    });
}   

opinions.addEventListener('click', () => {

    for(let i = 0 ; i<sections.length; i++){
        sections[i].classList.add('animation-end');
        
        sections[i].addEventListener('animationend', () => {
            
            for(i = 0 ; i<sections.length; i++){
                sections[i].classList.remove('animation-end');
            }
            header.setAttribute('class', 'super-container f menu');

        }, {once:true});
    }

});

for(let b = 0; b<bedroom.length;b++){

    
    news[b].addEventListener('click', () => {
        
        for(let i = 0 ; i<sections.length; i++){
            sections[i].classList.add('animation-end');
            
            sections[i].addEventListener('animationend', () => {
                
                for(i = 0 ; i<sections.length; i++){
                    sections[i].classList.remove('animation-end');
                }
                header.setAttribute('class', 'super-container g menu');
                
            }, {once:true});
        }
        
    });
} 