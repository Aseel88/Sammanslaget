//scroll down to the story section
const storyPage= document.querySelector('.storyPage');

// const scrollForm = document.querySelector('.btn.scroll');
function scrollToStory() {
    window.scrollTo({ top: 670,behavior: 'auto' });
  };
  storyPage.addEventListener('click', ()=>{
    scrollToStory();
})

//scroll down to the about section
const aboutPage= document.querySelector('.aboutPage');

function scrollToAbout() {
    window.scrollTo({ top: 1400, behavior: 'auto' });
  };
  aboutPage.addEventListener('click', ()=>{
    scrollToAbout();
})

// ,behavior: 'smooth'
// const aboutPage= document.querySelector('.aboutPage');
// aboutPage.addEventListener('click', ()=>{

// document.getElementById("aboutUs").scrollIntoView();
// })