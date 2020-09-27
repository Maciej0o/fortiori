const homePageMenu = document.getElementById('homePage');
const aboutMeMenu = document.getElementById('aboutMe');
const aboutWorkMenu = document.getElementById('aboutWork');
const contactMenu = document.getElementById('contact'); 

const homePage = document.querySelector(".homePage")
const aboutMe = document.querySelector(".aboutMe")
const aboutWork = document.querySelector(".aboutWork")
const contact = document.querySelector(".contact")

const box1 = document.getElementById('box1');
const box1U = document.getElementById('box1U');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');
const box4 = document.getElementById('box4');
const box5 = document.getElementById('box5');
const box6 = document.getElementById('box6');

const btnContact1 = document.getElementById('btn-contact1');
const btnContact2 = document.getElementById('btn-contact2');
const btnContact3 = document.getElementById('btn-contact3');
const btnContact4 = document.getElementById('btn-contact4');
const btnContact5 = document.getElementById('btn-contact5');
const btnContact6 = document.getElementById('btn-contact6');

homePageMenu.addEventListener('click', function(){
 let link = document.querySelector(".active");
 let page = document.querySelector(".activePage")
 link.classList.remove('active');
 page.classList.remove('activePage');
 homePageMenu.classList.add('active');
 homePage.classList.add('activePage');
});

aboutMeMenu.addEventListener('click', function(){
  let link = document.querySelector(".active");
  let page = document.querySelector(".activePage")
  link.classList.remove('active');
  page.classList.remove('activePage');
  aboutMeMenu.classList.add('active');
  aboutMe.classList.add('activePage');

 });

 aboutWorkMenu.addEventListener('click', function(){
  let link = document.querySelector(".active");
  let page = document.querySelector(".activePage")
  link.classList.remove('active');
  page.classList.remove('activePage');
  aboutWorkMenu.classList.add('active');
  aboutWork.classList.add('activePage');

 });

 contactMenu.addEventListener('click', function(){
  let link = document.querySelector(".active");
  let page = document.querySelector(".activePage")
  link.classList.remove('active');
  page.classList.remove('activePage');
  contactMenu.classList.add('active');
  contact.classList.add('activePage');
 });

 function closeModal() {
  document.getElementById('overlay').classList.remove('show')
};

document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault()
    closeModal()
  })
});

btnContact1.addEventListener('click',function(){
  let link = document.querySelector(".active");
  let page = document.querySelector(".activePage")
  link.classList.remove('active');
  page.classList.remove('activePage');
  contactMenu.classList.add('active');
  contact.classList.add('activePage');
 } )
btnContact2.addEventListener('click',function(){
  let link = document.querySelector(".active");
  let page = document.querySelector(".activePage")
  link.classList.remove('active');
  page.classList.remove('activePage');
  contactMenu.classList.add('active');
  contact.classList.add('activePage');
 } )
btnContact3.addEventListener('click',function(){
  let link = document.querySelector(".active");
  let page = document.querySelector(".activePage")
  link.classList.remove('active');
  page.classList.remove('activePage');
  contactMenu.classList.add('active');
  contact.classList.add('activePage');
 } )
btnContact4.addEventListener('click',function(){
  let link = document.querySelector(".active");
  let page = document.querySelector(".activePage")
  link.classList.remove('active');
  page.classList.remove('activePage');
  contactMenu.classList.add('active');
  contact.classList.add('activePage');
 } )
btnContact5.addEventListener('click',function(){
  let link = document.querySelector(".active");
  let page = document.querySelector(".activePage")
  link.classList.remove('active');
  page.classList.remove('activePage');
  contactMenu.classList.add('active');
  contact.classList.add('activePage');
 } )
btnContact6.addEventListener('click',function(){
  let link = document.querySelector(".active");
  let page = document.querySelector(".activePage")
  link.classList.remove('active');
  page.classList.remove('activePage');
  contactMenu.classList.add('active');
  contact.classList.add('activePage');
 } )

document.querySelector('#overlay').addEventListener('click', function(e) {
  if(e.target === this) {
    closeModal()
  }
});

document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    closeModal()
  }
});
//homePage//
box1.addEventListener('click',
function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.remove('show')
  })
  document.querySelector('#overlay').classList.add('show')
  document.querySelector('#modalBox1').classList.add('show')
}
);
box2.addEventListener('click',
function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.remove('show')
  })
  document.querySelector('#overlay').classList.add('show')
  document.querySelector('#modalBox2').classList.add('show')
}
);

box3.addEventListener('click',
function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.remove('show')
  })
  document.querySelector('#overlay').classList.add('show')
  document.querySelector('#modalBox3').classList.add('show')
}
);

box4.addEventListener('click',
function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.remove('show')
  })
  document.querySelector('#overlay').classList.add('show')
  document.querySelector('#modalBox4').classList.add('show')
}
);

box5.addEventListener('click',
function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.remove('show')
  })
  document.querySelector('#overlay').classList.add('show')
  document.querySelector('#modalBox5').classList.add('show')
}
);


box6.addEventListener('click',
function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.remove('show')
  })
  document.querySelector('#overlay').classList.add('show')
  document.querySelector('#modalBox6').classList.add('show')
}
);

//aboutWork//
box1U.addEventListener('click',
function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.remove('show')
  })
  document.querySelector('#overlay').classList.add('show')
  document.querySelector('#modalBox1').classList.add('show')
}
);
box2U.addEventListener('click',
function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.remove('show')
  })
  document.querySelector('#overlay').classList.add('show')
  document.querySelector('#modalBox2').classList.add('show')
}
);

box3U.addEventListener('click',
function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.remove('show')
  })
  document.querySelector('#overlay').classList.add('show')
  document.querySelector('#modalBox3').classList.add('show')
}
);

box4U.addEventListener('click',
function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.remove('show')
  })
  document.querySelector('#overlay').classList.add('show')
  document.querySelector('#modalBox4').classList.add('show')
}
);

box5U.addEventListener('click',
function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.remove('show')
  })
  document.querySelector('#overlay').classList.add('show')
  document.querySelector('#modalBox5').classList.add('show')
}
);


box6U.addEventListener('click',
function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.remove('show')
  })
  document.querySelector('#overlay').classList.add('show')
  document.querySelector('#modalBox6').classList.add('show')
}
);