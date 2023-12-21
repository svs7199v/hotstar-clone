let movies = [
  {
    name: "falcon and the winter soldier",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
    image: "images/slider 2.PNG",
  },
  {
    name: "loki",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
    image: "images/slider 1.PNG",
  },
  {
    name: "wanda vision",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
    image: "images/slider 3.PNG",
  },
  {
    name: "raya and the last dragon",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
    image: "images/slider 4.PNG",
  },
  {
    name: "luca",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
    image: "images/slider 5.PNG",
  },
];

// carousel: Selects the HTML element with the class "carousel."
// sliders: An array to store references to created slider elements.
// slideIndex: A variable to keep track of the current index for creating slides.
const carousel = document.querySelector(".carousel");
let sliders = [];
let slideIndex = 0;

// A function that creates a slide and appends it to the carousel.
const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }
  //creation
  // <div class="slider">
  //     <div class="carousel-content">
  //         <h1 class="movie-title">LOKI</h1>
  //         <p class="movie-des">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam alias corrupti reiciendis ducimus itaque placeat dolore. Aut dolor, ea dicta, veritatis quibusdam, provident eaque maiores tempore dignissimos impedit distinctio officiis ipsa rerum expedita enim!</p>
  //     </div>
  //     <img src="/images/slider 1.png" alt="" class="slider-img">

  // </div>

  // Element creation
  let slide = document.createElement("div");
  let imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  // Appending text content
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));

  // Appending elements to create the slide structure
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);

  // Appending the slide to the carousel
  carousel.appendChild(slide);
  // Setting image source and updating slideIndex
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  // Adding classes to created elements
  slide.className = "slider";
  content.className = "carousel-content";
  h1.className = "movie-title";
  p.className = "movie-des";
  imgElement.className = "slider-img";

  // Adding the slide to the sliders array
  sliders.push(slide);

  // Adjusting the margin to create a sliding effect
  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

const videocard = [...document.querySelectorAll(".video-card")];

videocard.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    item.children[1].pause;
  });
});

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtn = [...document.querySelectorAll(".pre-btn")];
let nextBtn = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nextBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });
  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
