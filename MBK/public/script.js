const slider = document.querySelector('.image-slider')
const arrow_left = document.querySelector('.arrow-left')
const arrow_right = document.querySelector('.arrow-right')
const slider_caption = document.querySelector('.caption h1')
const slider_description = document.querySelector('.caption p')
const images = ['bruno.jpg', 'clarice.jpg', 'philippe.jpg', 'lucas.jpg']
const slider_captions = ['Bruno', 'Clarice', 'Philippe', 'Lucas']
const slider_descriptions = [
    "We are the champions, my friends",
    "And we'll keep on fighting till the end",
    "No time for losers",
    "'Cause we are the champions of the World"
]

let id = 0

function Slide(id) {
    // Changes the image and the caption of the slider 
    slider.style.backgroundImage = `url(../static/${images[id]})`
    slider.classList.add('image-fade')
    // Take the class off so we can use it again
    setTimeout(() => {
        slider.classList.remove('image-fade')
    }, 550)
    slider_caption.innerText = slider_captions[id]
    slider_description.innerText = slider_descriptions[id]
}

arrow_left.addEventListener('click', () => {
    id--
    if (id < 0) {
        // Changes to the last image
        id = images.length - 1;
    }
    Slide(id)
})

arrow_right.addEventListener('click', () => {
    id++
    if (id > images.length - 1) {
        // Changes to first image
        id = 0
    }
    Slide(id)
})

const faqs = document.querySelectorAll('.faq')
console.log(faqs)
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active')
    })
})

function Menu(e) {
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close", list.classList.add('top-[80px]'), list.classList.add('opacity-100')) : (e.name = "menu", list.classList.remove('top-[80px]'), list.classList.remove('opacity-100'))
}