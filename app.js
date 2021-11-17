const navSlide = () => {
    const dropDown = document.querySelector('.dropdown');
    const nav = document.querySelector('.links');
    const navLinks = document.querySelectorAll('.links li');
    //toggle nav
    dropDown.addEventListener('click', mobileMenu); 
    navLinks.forEach(n=>n.addEventListener('click',closeMenu));

    function mobileMenu()
    {
        dropDown.classList.toggle('active');
        nav.classList.toggle('active');
        //animate links
    };

    function closeMenu(){
        dropDown.classList.remove("active");
        nav.classList.remove("active");
    }
}


const textSlide = () =>{
    const text = document.querySelector('.anitext');
    const strText = text.textContent;
    const splitText = strText.split("");
    text.textContent="";
    for(let i=0;i<splitText.length;i++){
        text.innerHTML+="<span>"+splitText[i]+"</span>";
    }
    let char=0;
    let timer = setInterval(onTick,50);
    function onTick(){
        const span = text.querySelectorAll('span')[char];
        span.classList.add('fade');
        char++;
        if(char===splitText.length){
            complete();
            return;
        }
    }
    function complete(){
        clearInterval(timer);
        timer = null;
    }
}
const textSlide2 = () =>{
    const text = document.querySelector('.anitext2');
    const strText = text.textContent;
    const splitText = strText.split("");
    text.textContent="";
    for(let i=0;i<splitText.length;i++){
        text.innerHTML+="<span>"+splitText[i]+"</span>";
    }
    let char=0;
    let timer = setInterval(onTick,50);
    function onTick(){
        const span = text.querySelectorAll('span')[char];
        span.classList.add('fade');
        char++;
        if(char===splitText.length){
            complete();
            return;
        }
    }
    function complete(){
        clearInterval(timer);
        timer = null;
    }
}
textSlide();
textSlide2();
navSlide();

