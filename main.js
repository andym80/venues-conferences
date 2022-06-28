const ToggleBar = document.querySelector('.toggle-button');
const body = document.querySelector('body');
const sideBar = document.querySelector('.sidebar');
const cancel = document.querySelector('.cancel');
const moreBtn = document.querySelector('.see-more');
const anchorLink = document.querySelectorAll('.anchor-link');
const displaySpeaker = document.querySelector('.speaker-info');
const width = window.innerWidth;
let showMore = false;

const featured = [
  {
    title: 'Giulio Cipirelli',
    subtitle: 'The Speaker',
    text: 'Mr. John Doe, an AI speacialist with more than 4 years experience will speak about Robotics challenges and opportunities',
    image: {
      src: 'https://summit.cckorea.org/images/base/speaker_01.png',
      alt: 'president',
    },
  },
  {
    title: 'Zahir Asad',
    subtitle: 'chairman',
    text: 'Mr. John Doe, an AI speacialist with more than 4 years experience will speak about Robotics challenges and opportunities',
    image: {
      src: 'https://summit.cckorea.org/images/base/speaker_02.png',
      alt: 'president',
    },
  },
  {
    title: 'Nathalie Koan',
    subtitle: 'The Speaker',
    text: 'Mr. John Doe, an AI speacialist with more than 4 years experience will speak about Robotics challenges and opportunities',
    image: {
      src: 'https://summit.cckorea.org/images/base/speaker_03.png',
      alt: 'president',
    },
  },
  {
    title: 'Chiara Bowell',
    subtitle: 'The Speaker',
    text: 'Mr. John Doe, an AI speacialist with more than 4 years experience will speak about Robotics challenges and opportunities',
    image: {
      src: 'https://summit.cckorea.org/images/base/speaker_04.png',
      alt: 'president',
    },
  },
  {
    title: 'Luca Debonis',
    subtitle: 'The Speaker',
    text: 'Mr. John Doe, an AI speacialist with more than 4 years experience will speak about Robotics challenges and opportunities',
    image: {
      src: 'https://summit.cckorea.org/images/base/speaker_05.png',
      alt: 'president',
    },
  },
  {
    title: 'Richard Ruben',
    subtitle: 'The Speaker',
    text: 'Mr. John Doe, an AI speacialist with more than 4 years experience will speak about Robotics challenges and opportunities',
    image: {
      src: 'https://summit.cckorea.org/images/base/speaker_06.png',
      alt: 'president',
    },
  },
];

function displayspeakers(featured) {
  let endIndex = width < 767 ? 3 : undefined;
  if (showMore) {
    moreBtn.innerHTML = 'Show Less';
    endIndex = undefined;
  } else {
    moreBtn.innerHTML = 'Show More';
  }
  const me = featured.slice(0, endIndex);
  let display = '';
  me.map((speaker) => {
    const {
      title, subtitle, text, image,
    } = speaker;
    display += `
     <div class="col-12 col-md-6 d-flex justify-content-center align-items-center present-profile p-4">
      <div class='speaker-img-cont'>
      <img src='${image.src}' alt='${image.alt}' class='img-speaker'>
      </div>
       <div class='d-flex flex-column text-speaker'>
       <h4>${title}</h4>
       <h5>${subtitle}</h5>
       <p>${text}</p>
       </div>
     </div>
     `;
    return 0;
  });
  displaySpeaker.innerHTML = display;
}

function openSideBar() {
  sideBar.classList.add('show-side-bar');
  body.classList.add('noscroll');
}

function closeSideBar() {
  sideBar.classList.remove('show-side-bar');
  body.classList.remove('noscroll');
}

function moreShow() {
  showMore = !showMore;
  displayspeakers(featured);
}

anchorLink.forEach((anchor) => {
  anchor.addEventListener('click', closeSideBar);
});

ToggleBar.addEventListener('click', openSideBar);
cancel.addEventListener('click', closeSideBar);
document.addEventListener('DOMContentLoaded', displayspeakers(featured));
moreBtn.addEventListener('click', moreShow);
