window.addEventListener('scroll' , () => {

    let y = window.pageYOffset;
    let header =   document.getElementsByTagName("header")[0];

    if(y > 100){ 
        header.classList.add("fixed")
    }else{
        header.classList.remove("fixed")
    }
})