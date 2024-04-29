// button masuk
document.querySelector("#show-login").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .close-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
});



// button daftar
document.querySelector("#show-regis").addEventListener("click", function(){
    document.querySelector(".popup2").classList.add("active");
});

document.querySelector(".popup2 .close-btn2").addEventListener("click",function(){
    document.querySelector(".popup2").classList.remove("active");
});


// masuk
document.getElementById("login").addEventListener("click", function(){
    window.location.href = "../HTML/aftr_login.html";
});


// Beranda navbar
const berandaLink = document.querySelector('a[href="#beranda"]');

berandaLink.addEventListener('click', function(event){
    event.preventDefault();

    const targetElement = document.querySelector('.halaman1');

    targetElement.scrollIntoView({behavior: 'smooth'});
});

// Profile navbar
const profileLink = document.querySelector('a[href="#profile"]');

profileLink.addEventListener('click', function(event) {
    event.preventDefault();

    const targetElement = document.querySelector('.content-profile');

    targetElement.scrollIntoView({ behavior: 'smooth' });
});

// Informasi navbar
const informasiLink = document.querySelector('a[href="#informasi"]');

informasiLink.addEventListener('click', function(event){
    event.preventDefault();

    const targetElement = document.querySelector('.informasi');

    targetElement.scrollIntoView({behavior: 'smooth'});
});

// kontak navbar
const kontakLink = document.querySelector('a[href="#kontak"]');

kontakLink.addEventListener('click', function(event){
    event.preventDefault();

    const targetElement = document.querySelector('.foother');

    targetElement.scrollIntoView({behavior: 'smooth'});
});