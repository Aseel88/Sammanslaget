//scroll down to the story section
const storyPage= document.querySelector('.storyPage');

function scrollToStory() {
    window.scrollTo({ top: 927,behavior: 'auto' });
  };
  storyPage.addEventListener('click', ()=>{
    scrollToStory();
})


//scroll down to the story section
const story= document.querySelector('.story');

function scrollToViewStory() {
    window.scrollTo({ top: 926,behavior: 'smooth' });
  };
  story.addEventListener('click', ()=>{
    scrollToViewStory();
})


//scroll down to the about section
const aboutPage= document.querySelector('.aboutPage');

function scrollToAbout() {
    window.scrollTo({ top: 1900, behavior: 'auto' });
  };
  aboutPage.addEventListener('click', ()=>{
    scrollToAbout();
})
