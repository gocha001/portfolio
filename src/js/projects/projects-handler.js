import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/navigation';

import book_mob_1x from '../../img/projects/book-mob.jpg';
import book_mob_2x from '../../img/projects/book-mob-2x.jpg';
import book_tab_1x from '../../img/projects/book-tab.jpg';
import book_tab_2x from '../../img/projects/book-tab-2x.jpg';
import book_main from '../../img/projects/book-tab.jpg';

import pet_mob_1x from '../../img/projects/pet-mob.jpg';
import pet_mob_2x from '../../img/projects/pet-mob-2x.jpg';
import pet_tab_1x from '../../img/projects/pet-tab.jpg';
import pet_tab_2x from '../../img/projects/pet-tab-2x.jpg';
import pet_main from '../../img/projects/pet-tab.jpg';

import vocab_mob_1x from '../../img/projects/vocab-mob.jpg';
import vocab_mob_2x from '../../img/projects/vocab-mob-2x.jpg';
import vocab_tab_1x from '../../img/projects/vocab-tab.jpg';
import vocab_tab_2x from '../../img/projects/vocab-tab-2x.jpg';
import vocab_main from '../../img/projects/vocab-tab.jpg';

const projectImages = [
  {
    mob_1x: book_mob_1x,
    mob_2x: book_mob_2x,
    tab_1x: book_tab_1x,
    tab_2x: book_tab_2x,
    main: book_main,
    description: 'ReadJourney',
  },
  {
    mob_1x: pet_mob_1x,
    mob_2x: pet_mob_2x,
    tab_1x: pet_tab_1x,
    tab_2x: pet_tab_2x,
    main: pet_main,
    description: 'PetLove',
  },
  {
    mob_1x: vocab_mob_1x,
    mob_2x: vocab_mob_2x,
    tab_1x: vocab_tab_1x,
    tab_2x: vocab_tab_2x,
    main: vocab_main,
    description: 'VocabBuilder',
  },
];

new Swiper('.projects-swiper-container', {
  direction: 'horizontal',
  navigation: {
    nextEl: '.projects-btn-next',
    prevEl: '.projects-btn-prev',
  },
  slidesPerView: 1,
  spaceBetween: 34,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

const projectsList = document.querySelector('.projects-list');

function createProjectsSlideMarkup(
  mob_1x,
  mob_2x,
  tab_1x,
  tab_2x,
  main,
  description
) {
  const markup = `
      <li class="projects-item swiper-slide">
        <div class="project-info-container">
            <ul class="project-lang-list">
              <li class="projects-lang-item">
                <span class="projects-lang-item-text">#react</span>
              </li>
            <li class="projects-lang-item">
              <span class="projects-lang-item-text">#js</span>
            </li>
            <li class="projects-lang-item">
              <span class="projects-lang-item-text">#node js</span>
            </li>
            <li class="projects-lang-item">
              <span class="projects-lang-item-text">#git</span>
            </li>
          </ul>
          <div class="project-description-wrapper">
            <p class="project-description">
              Programming Across<br />Borders: Ideas,<br />Technologies, Innovations
            </p>
           <a href="https://github.com/aandrea-alex/alex-template-portfolio" class="project-link js-project-link" target="_blank">See project</a>
          </div>
        </div>
        <div class="projects-img-wrapper">
            <picture>
              <source
                srcset="
                ${tab_1x} 1x,
                ${tab_2x} 2x"
                media="(min-width: 768px)"
              />
              <source
                srcset="
                ${mob_1x} 1x,
                ${mob_2x} 2x"
                media="(max-width: 767px)"
              />
              <img
                class="projects-img"
                src="${main}"
                alt="${description}"
                width="614"
                height="385"
              />
            </picture>
        </div>
      </li>
    `;

  projectsList.insertAdjacentHTML('beforeend', markup);
}
projectImages.map(({ mob_1x, mob_2x, tab_1x, tab_2x, main, description }) => {
  createProjectsSlideMarkup(mob_1x, mob_2x, tab_1x, tab_2x, main, description);
});