function bookNow(){

let name=document.getElementById("name").value;
let mobile=document.getElementById("mobile").value;
let date=document.getElementById("date").value;
let service=document.getElementById("service").value;

let msg=
"Hello PAYAL'S Nail Art%0A%0A"+
"Client Name: "+name+"%0A"+
"Mobile: "+mobile+"%0A"+
"Service: "+service+"%0A"+
"Date: "+date;

window.open("https://wa.me/919851393449?text="+msg,"_blank");

}

function toggleTheme(){

document.body.classList.toggle("dark");

document.querySelector(".theme-icon").innerHTML=
document.body.classList.contains("dark") ? "☀️" : "🌙";

}

function goTo(id){

document.getElementById(id).scrollIntoView({
behavior:"smooth"
});

document.activeElement.blur();

}

const images=document.querySelectorAll(".gallery-grid img");

let currentImage=0;

images.forEach((img,index)=>{

img.onclick=function(){

currentImage=index;
popupImg.src=this.src;
popup.style.display="flex";

};

});

function nextImage(e){

e.stopPropagation();

currentImage=(currentImage+1)%images.length;

popupImg.src=images[currentImage].src;

}

function prevImage(e){

e.stopPropagation();

currentImage=(currentImage-1+images.length)%images.length;

popupImg.src=images[currentImage].src;

}

function closePopup(){

popup.style.display="none";

}

const slides=document.querySelectorAll(".slide");

let currentSlide=0;

function showSlide(i){

slides.forEach(s=>s.classList.remove("active"));

slides[i].classList.add("active");

}

setInterval(()=>{

currentSlide=(currentSlide+1)%slides.length;

showSlide(currentSlide);

},3000);
/* Loading Screen */

window.addEventListener("load", function(){

    setTimeout(function(){

        document.getElementById("loader").classList.add("loader-hide");

        setTimeout(function(){
            document.getElementById("loader").style.display="none";
        },600);

    },2000);

});
/* Scroll Animation */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(".animate").forEach(section=>{
    observer.observe(section);
});