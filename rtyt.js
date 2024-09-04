
/////// INTERPOLATSIYA //////
// let age = 22
// let name = 'Ali'
// let surname = 'alimov'
// console.log(`foydalanuvchi ismi${name} yoshi ${age} va surname ${surname}`);
// console.log('foydalanuvchi ismi' , name  ,' yoshi' , age , 'va familyasi' , surname);

// let user = (prompt("sizning ismingiz nima"))
// if (user == 'Laziz') {
//     console.log('sizning ismingiz Laziz');
// }
// else{
//     console.log('siz Laziz emassiz');
// }
// let age = 12
// if (age <=12) {
//     console.log('siz 12 yoshdan kattasiz sizga munkin');
// }
// else{
//     console.log('siz 12 dan kichkinasiz sizga munkin emas');
// }

// for(i = 1; i<=100 ;i++){
//     console.log(`${i} salom`) ;

// }

// i =4 +1
// console.log('salom');


// console.log('salom hammaga');
// console.log('salom Laziz');
// console.log('salom islom');

// function salom() {
// console.log('salom hammaga');
// console.log('salom Laziz');
// console.log('salom islom');
// }

// salom()

// salom()


// function userInfo(nameUser,age,surname) {
//     console.log('nameUser');
//     console.log(age);
//     console.log(surname);
// }
// userInfo()

// userInfo('#',11,'Tsikl')
// userInfo('#',10,'Shartli operatorlar    ')


// let startNum = 1;

// while (startNum <= 20) {
//     console.log(startNum);
//     startNum++;
// }

// function meva() {
//     setTimeout(() => {
//         console.log(1);
//     }, 1000);
// }

// function sekund() {
//     console.log(2);
// }

// meva()
// sekund()

// function edu(subject, callback) {
//     console.log(`I wanna teach ${subject}`);
//     callback();
// }

// edu("javascript", function () {
//     console.log("that's great");
// });

// const theif = {
//     jacket: "black",
//     height: 1.7,
//     colors: {
//         hair: "gray",
//         style: "curley",
//     },
// };

// console.log(theif.height);

// delete theif.jacket;

// console.log(theif);


let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}

var swiper = new Swiper(".swiper-container", {
  spaceBetween: 20,
  grabcursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});


var swiper = new Swiper(".teachers-slider", {
  spaceBetween: 20,
  grabcursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".reviwes-slider", {
  spaceBetween: 20,
  grabcursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});