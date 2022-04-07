/***************************/
// NAV SMOOTH SCCROLLING ANIMATION
/***************************/
// 1)select all links

const allLinks = document.querySelectorAll("a:link");

// 2)select each link and prevent default
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/***************************/
// STICKY NAVIGATION
/***************************/

// make navigation sticky as soon as the hero section moves out of the view port

// 1)make a variable for section hero

const sectionHeroEl = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    //root is where this element should appear or not. It means viewport
    root: null,
    //it means we will observe hero section inside the viewport
    threshold: 0,
    //we will have an event as soon as 0% of the hero section is inside of the viewport
    rootMargin: "-80px",
    //because the height of the nav is 8rem... and it blocks the next section so we put -80px so the sticky bar can appear before the next section.
  }
);
observer.observe(sectionHeroEl);

// 2)

/***************************/
/* TESTOMINAL SECTIONS*/
/***************************/

// local testimonials

const testimonials = [
  {
    id: 1,
    name: "Gaelle",
    img: "https://i.postimg.cc/qMyJzWmH/testimonial-2.jpg",
    text: "hello",
  },

  {
    id: 2,
    name: "David",
    img: "https://i.postimg.cc/XJjG84z5/testimonial-3.jpg",
    text: "I like youuuuuuuuuuu",
  },
  {
    id: 3,
    name: "hello",
    img: "https://i.postimg.cc/YChCt8vJ/avatar-e278114ff56fefeca5b1d16823f204f4.jpg",
    text: "love youuu",
  },
];

// select items
const img = document.getElementById("person-img");
console.log(img);
const text = document.getElementById("info");
const name = document.getElementById("author");

const leftBtn = document.querySelector(".btn--left");
const rightBtn = document.querySelector(".btn--right");

//set starting item

let currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

//show person based on item

function showPerson() {
  const item = testimonials[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  info.textContent = item.text;
}

//show next person

rightBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > testimonials.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

//show previous person

leftBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = testimonials.length - 1;
  }
  showPerson(currentItem);
});

/***************************/
/* COURSES SECTIONS*/
/***************************/

function flipFunction() {
  let myElement = document.getElementById("theCard");
  myElement.classList.toggle("flipper");
}

/***************************/
/* FAQ SECTIONS*/
/***************************/

const questions = document.querySelectorAll(".item");

questions.forEach(function (question) {
  const btn = question.querySelector(".open-icon");
  const closeBtn = question.querySelector(".close-icon");

  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== questions) {
        item.classList.remove("open");
      }
    });
  });

  btn.addEventListener("click", function () {
    question.classList.toggle("open");
  });

  closeBtn.addEventListener("click", function () {
    question.classList.remove("open");
  });
});

/***************************/
/* FOOTER SECTION*/
/***************************/

const year1 = document.querySelector(".year");
const currentYear = new Date().getFullYear();
year1.textContent = currentYear;

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
