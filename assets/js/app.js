//scroll down to the story section
const storyPage= document.querySelector('.storyPage');

// const scrollForm = document.querySelector('.btn.scroll');
function scrollToStory() {
    window.scrollTo({ top: 730,behavior: 'auto' });
  };
  storyPage.addEventListener('click', ()=>{
    scrollToStory();
})


//scroll down to the story section
const story= document.querySelector('.story');

function scrollToViewStory() {
    window.scrollTo({ top: 710,behavior: 'smooth' });
  };
  story.addEventListener('click', ()=>{
    scrollToViewStory();
})


//scroll down to the about section
const aboutPage= document.querySelector('.aboutPage');

function scrollToAbout() {
    window.scrollTo({ top: 1460, behavior: 'auto' });
  };
  aboutPage.addEventListener('click', ()=>{
    scrollToAbout();
})
