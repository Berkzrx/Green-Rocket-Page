const topButton = document.querySelector('.top__button');
    
const scrollCheck = setInterval(()=>{
    const pageScroll = window.pageYOffset;

    if(pageScroll >= 300){
        topButton.style.bottom = '2em';
    }else{
        topButton.style.bottom = '-5em';
    }
},500);