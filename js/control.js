
// onclick event (which is applied on the icon) :

let fa=document.querySelector(".fa-cog") ;   
let sb=document.querySelector(".settings-box") ; 

fa.addEventListener("click",()=> {             /* addeventlistener() is used to add an event to an element (addeventListener() is a method btw) */
    fa.classList.toggle("fa-spin") ;   /* we can replace 'fa' by 'this' ('this' t3oud 3la el recieved element) */
    sb.classList.toggle("open") ;      /* classList is a property which allows u to powerfully modify the class of html element so u can replace toggle add and remove classes*/
}) ;

/*Rq : 
    . 'toggle()' is a method , which replace the class of an html element (it removes it if its present and adds it if its not present). 
    . toggle means replace : تبديل 
    . also we can use 'add()' in order to add classes (moush kif toggle() ely tbaddel el class dhrba whda)
    . we can use 'remove()' in order to remove classes .
    . additionally we can use replace() (techbah lel toggle()).
*/



//  To make the background change automatically (after20sec) :

let container=document.querySelector(".container") ;
let T=["img1.jpg","img2.jpg","img3.jpg","img4.jpg"] ;   /*we put all pics in an array */

let backgroundVerif=true ;
let backgroundInterv ;

function randomImg() {
    if (backgroundVerif) {
        let i=0 ;
        backgroundInterv=setInterval(()=> {                  /* setInterval() is a method that execute the instructions every n0000ms */ 
            container.style.backgroundImage='url("images/'+T[i]+'")' ;
            i++ ;
            if (i==T.length)
                i=0 ;
        },10000) ;
    }
}

randomImg() ;



/* Rq : Method generally is a function which is a property of an object*/
/* Rq : les fcts prédéfinis sont des methodes */

//switch colors  : 

let TC=document.querySelectorAll(".colors-list li")  ;      /* TC is a nodelist (like an array) fehe les 'li' te3na lkol*/


TC.forEach(j => {                                           /* 'forEach' is like 'for' loop w manajmoush nparcourou el TC bl 'for' kounch n7awlouh el array b Array.from()*/
    //Clicking on every li element :                        /* j : is just a variable*/
    j.addEventListener("click",(e)=> {
        document.documentElement.style.setProperty("--main-color",e.target.dataset.color) ;
        localStorage.setItem("color_option",e.target.dataset.color) ;       /*to set the color in the localStorage*/
        document.querySelector(".colors-list .active1").classList.remove("active1") ; 
        e.target.classList.add("active1") ;                      /*e.target : represent the selected li (e: represent event )*/
}) ;
}) ;


backEl=document.querySelectorAll(".random-backgrounds span") ;  /* we put all spans in nodelist*/

backEl.forEach(span=> {     
    span.addEventListener("click",(e)=>{
        //Clicking on every span
        handleActive(e) ;       
        
        if (e.target.dataset.background=="yes") { 
            backgroundVerif=true ;
            randomImg() ;
        }
        else {
            backgroundVerif=false ;
            clearInterval(backgroundInterv) ;   /*  setInterval() mete7bes ken k taamlelha clearInterval()*/
                                                /* clearInterval() is a function used to stop and clear the setInterval() method */
        }
    }) ;
}) ; 


stopButton=document.querySelector(".box2 .random-options .stop") ;

    stopButton.addEventListener("click",()=>{
        stopButton.classList.toggle("active") ;
        if (stopButton.classList.contains("active")) {
            backgroundVerif=false ;
            clearInterval(backgroundInterv) ;
        }
    }) ;



ourSkills=document.querySelector(".skills") ;

window.addEventListener("scroll",()=>{           /*we can use "this" in this case it refers to window*/     

    //skills offset top :
    let skillsOffset=ourSkills.offsetTop ;      /*offsetTop a property which returns the distance of current element and a nodparent  */
    
    //skills outer height :
    let skillsOuter=ourSkills.offsetHeight ;    /*offsetHeight is a property returns the height(bl border padding b kol chy) to the entered element(Ourskills)*/

    //window height :
    let windowHeight=this.innerHeight ;       /*innerHeight is a property returns the height of our window (applied only on window object)*/

    //window scroll top :

    let windowScrolltop=this.pageYOffset ;      /*this refers to the received element(function) pageYOffset is a property applied only on window returns the height of the document that's currently scrolled */
    

    if (windowScrolltop>(skillsOffset+skillsOuter-windowHeight)) {
        let chargeProgress=document.querySelectorAll(".skill-box span") ;
            
        chargeProgress.forEach(span=>{                              /*target property is used only with events exemple : event.target or e.target (e:is an event) */
                span.style.width=span.dataset.progress ;                           
        }) ;
    }
}) ;

ourGallery=document.querySelectorAll(".container-holder .gallery .gallery-pics img") ;    /*a nodelist holds our images */

ourGallery.forEach(img=>{
    img.addEventListener("click",(e)=>{
        let overlay=document.createElement("div") ;         // creating a new element (div) 
        overlay.className="popup-overlay" ;                 // se a class to our overlay 
        document.body.appendChild(overlay) ;                // adding the overlay to the body
        
        let popupBox=document.createElement("div") ;        // adding a new element (div)
        popupBox.className="popup-box" ;                    // setting a class to our div
        
        
        if (img.alt!==null) {
            let HeadingImg=document.createElement("h3") ;         //Creating HeadingImg
            let ImgText=document.createTextNode(img.alt) ;        //Creating HeadingText
            HeadingImg.appendChild(ImgText) ;                     //Adding ImgText to ImgHeading
            popupBox.appendChild(HeadingImg) ;
        }
        
        let popupImg=document.createElement("img") ;        // creating a new image to show up
        popupImg.src=img.src ;                              // affecting the source to our image
        popupBox.appendChild(popupImg) ;                    //adding the img to the popupBox
        document.body.appendChild(popupBox) ;               //adding the popupBox bel img te3o bdenyto lel body

        let closeButton=document.createElement("span");     //Creating a close span (aka X ly mn fog ayy taswyra)
        
        let closeButtonText=document.createTextNode("X") ;  //creating the text node
        
        closeButton.appendChild(closeButtonText) ;          //Creating the close button
        
        closeButton.className="close-button" ;              
    
        popupBox.appendChild(closeButton) ;                 //Adding close-button to popupbox
        
    });
});

//closeButton(in Js) and close-button(in HTML) is a dynamic element thus we can't use addEventlistener method directly on closeButton element .

    document.addEventListener("click",(e)=>{        //the addEventListener() method is applied on all document object 
        if (e.target.classList=="close-button") {
            document.querySelector(".popup-box").remove() ;
            document.querySelector(".popup-overlay").remove() ;
        }
    }) ;

/*

gallerypics=document.querySelector(".gallery-pics") ;
galleryimg=document.querySelectorAll(".gallery-pics img") ;

galleryimg.forEach(img=>{
img.addEventListener("focus",()=> {
    let newoverlay=documment.createElement("div") ;
    newoverlay.className="new-overlay" ;                 
    galleryimg.appendChild(newoverlay) ;

}) ;
}) ;  

*/

let bullet=document.querySelectorAll(".bullets-container .bullet") ;

bullet.forEach(bullet=>{
    bullet.addEventListener("click",(e)=>{
        somewhere(e.target) ;
    }) ;
}) ;


let links=document.querySelectorAll(".header-container .links li a") ;

links.forEach(link=>{
    link.addEventListener("click",(e)=>{
        e.preventDefault() ;                  /* very imp (mnghyrha metemchych el fct somewhere()) */
        somewhere(e.target) ;
    }) ;
}) ;

function somewhere(ch) {
    document.querySelector(ch.dataset.section).scrollIntoView({
        behavior:"smooth"       /*we can use also behavior:auto*/
    }) ;
}

function handleActive (e) {
    e.target.parentElement.querySelector(".active").classList.remove("active") ;    /*we used parentElement() bch menne7ouch el active class taa el elements ly 9bablna*/
    e.target.classList.add("active") ;          /*e.target.classlist : represent el class taa sayed ely aamlna alyh tap */
}

let showhide=document.querySelectorAll(".box3 .other-options span") ;

showhide.forEach(span=>{
    span.addEventListener("click",(e)=>{
        handleActive(e) ;
        showOrhideBullets(e) ;
    });

});


bulletsContainer=document.querySelector(".bullets-container") ;

function showOrhideBullets(e) {
    if (e.target.dataset.display=="hide") {
        bulletsContainer.style.visibility="hidden" ;
        localStorage.setItem("bullets_option","hidden") ;
    }
        else {
        bulletsContainer.style.visibility="visible" ;
        localStorage.setItem("bullets_option","visible") ;
    }
}


reset_option=document.querySelector(".settings-box .reset-option") ;
reset_option.addEventListener("click",()=>{
    localStorage.clear() ;
    window.location.reload() ;
}) ;




function animation() {
    gsap.from("a",{duration:1, opacity:0, delay:2 , stagger:.5 }) ;
    gsap.from(".logo",{duration:1, opacity:0, delay:1}) ;
    gsap.from(".bullets-container",{duration:1, delay:5.5, x:"130%"}) ;
}

/*GSAP 3.0 library*/
animation() ;


/*end gsap*/


let togglebtn=document.querySelector(".header-container .menu") ;
let Ourlinks=document.querySelector(".links-container .links") ;

togglebtn.addEventListener("click",(e)=>{

    e.stopPropagation() ;                       //to stop the propagation of the spans inside the button
    togglebtn.classList.toggle("active-menu") ; 
    Ourlinks.classList.toggle("open-menu") ;
}) ;

/*RQ (tkhos el handleactive() w el toggle): k ybda feme element melouwel
chyekho active w baaed k toross 3al elemnt ly baado tbaddel el active lyh
tetstaaml handleActive() (bch tfasskh lely 9ablk w tzid lely baadek)
w k ybda element wahed w kol mara tzido wela tna7ylo el active class
lezm tstaaml el toggle property */


//Stop propagation
/*Click anywhere outside the menu and the toggle*/

document.addEventListener("click",(e)=>{
    if (e.target!=togglebtn && e.target!=Ourlinks) {
        if (Ourlinks.classList.contains("open-menu")) {
            togglebtn.classList.toggle("active-menu") ;
            Ourlinks.classList.toggle("open-menu") ;
        }
    }
});


//stop prpagation on Ourlinks(el ul)
Ourlinks.addEventListener("click",(e)=>{
    e.stopPropagation() ;
}) ;