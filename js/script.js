const homePageMenu = document.getElementById('homePage');
const aboutMeMenu = document.getElementById('aboutMe');
const aboutWorkMenu = document.getElementById('aboutWork');
const contactMenu = document.getElementById('contact'); 

const homePage = document.querySelector(".homePage")
const aboutMe = document.querySelector(".aboutMe")
const aboutWork = document.querySelector(".aboutWork")
const contact = document.querySelector(".contact")

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