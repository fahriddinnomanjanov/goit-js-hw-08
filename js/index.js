import galleryItems from "./gallery-items.js";
const gallery = galleryItems
  .map(item => {
    const { preview, original, description } = item;
    return tamplate(preview, original, description);
  })
  .join("");

function tamplate(preview, original, description) {
  return `
    <li class="gallery__item">
      <a
        class="gallery__link"
        href="${original}"
      >
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
    `;
}

const list = document.querySelector(".js-gallery");
list.insertAdjacentHTML("beforeend", gallery);

const modal = document.querySelector('.js-lightbox')
const boxImg = document.querySelector('.lightbox__image')

list.addEventListener('click' , clickImg);

function clickImg (e) {
    e.preventDefault()
    // console.log(e.target);
    // console.log(e.currentTarget);
    if(e.target === e.currentTarget) { 
        return 
    }
    console.log(e.target.dataset.source);

    modal.classList.add("is-open");
    
    boxImg.setAttribute("src", e.target.dataset.source);


}

modal.addEventListener('click' , clickModal);
function clickModal(e) {
    if(e.target.nodeName === 'BUTTON'){
        modal.classList.remove("is-open");
        list.removeEventListener('click' , clickModal);
    }
}

window.addEventListener('keydown' , clickEsc);
function clickEsc(e) {
    if(e.code === 'Escape'){
        modal.classList.remove("is-open");
        list.removeEventListener('click' , clickEsc);
    }
}