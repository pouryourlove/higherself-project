/***************************/
// NAV SMOOTH SCCROLLING ANIMATION
/***************************/
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");

    // Check if href is an internal anchor link (starts with '#')
    if (href && href.startsWith("#")) {
      e.preventDefault(); // Prevent default only for internal anchor links

      // Scroll to the section
      const sectionEl = document.querySelector(href);
      if (sectionEl) {
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }

      // Close mobile navigation if necessary
      if (link.classList.contains("main-nav-link")) {
        headerEl.classList.toggle("nav-open");
      }
    } else if (href === "#") {
      e.preventDefault(); // Prevent default for href="#"

      // Scroll back to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    // No preventDefault() for links to cart.html
  });
});

// 1)select all links

// const allLinks = document.querySelectorAll("a:link");

// // 2)select each link and prevent default
// allLinks.forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const href = link.getAttribute("href");

//     // scroll back to top
//     if (href === "#")
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });

//     // Scroll to other links
//     if (href !== "#" && href.startsWith("#")) {
//       const sectionEl = document.querySelector(href);
//       sectionEl.scrollIntoView({ behavior: "smooth" });

//       //Close mbile navigation
//       if (link.classList.contains("main-nav-link"))
//         headerEl.classList.toggle("nav-open");
//     }
//   });
// });

/***************************/
// STICKY NAVIGATION
/***************************/

// make navigation sticky as soon as the hero section moves out of the view port

// 1)make a variable for section hero

const sectionHeroEl = document.querySelector(".section-hero");
const sectionCartEl = document.querySelector(".cart-section");

let sectionEl;
if (document.title === "HigherSelf") {
  sectionEl = sectionHeroEl;
} else if (document.title === "Cart") {
  sectionEl = sectionCartEl;
}

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
observer.observe(sectionEl);

/***************************/
// MODAL
/***************************/

const modal = document.getElementById("myModal");
const overlay = document.getElementById("overlay");
const subscribe = document.getElementById("subscribe");
const closeBtn = document.getElementById("close");
const form = document.getElementById("subscribe-form");
const username = document.getElementById("name");
const email = document.getElementById("email");
const errorMsg = document.getElementById("error-message");

subscribe.addEventListener("click", function () {
  clearErrorMessages();
  modal.style.display = "block";
  overlay.style.display = "block";
  username.focus();
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
  overlay.style.display = "none";
});

function clearErrorMessages() {
  const errorMsg = document.getElementById("error-message");
  errorMsg.innerHTML = "";
}

modal.style.transform = "translate(-50%, -50%)";
//Show modal and overlay

/***************************/
/*SUBSCRIBE FORM VALIDATION*/
/***************************/
document.addEventListener("DOMContentLoaded", function () {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let valid = true;
    errorMsg.textContent = "";

    if (username.value.trim() === "") {
      valid = false;
      errorMsg.innerHTML += '<div class="error">Please write your name</div>';
    }

    if (!validEmail(email.value)) {
      valid = false;
      errorMsg.innerHTML += '<div class="error">Invalid email address</div>';
    }
  });
  function validEmail(email) {
    const regularExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regularExpression.test(String(email).toLowerCase());
  }
});

/***************************/
// HERO TYPING TEXT ANIMATION
/***************************/
const heroTyping = "Meditate for self-discovery and potential.";
const element = document.querySelector(".heading-primary");

//The current index of the text being displayed
if(document.title === "HigherSelf"){
  let index = 0;
  const interval = setInterval(() => {
    //update the heroTyping
    element.textContent = heroTyping.slice(0, index);
    index++;
    //if all the text has been displayed, clear the interval
    if (index > heroTyping.length) {
      clearInterval(interval);
    }
  }, 100);
  
}

/***************************/
/* TESTOMINAL SECTIONS*/
/***************************/

// local testimonials

const testimonials = [
  {
    id: 1,
    name: "Mellisa",
    img: "https://i.postimg.cc/qMyJzWmH/testimonial-2.jpg",
    text: "HigherSelf is great! It offers a wide variety of guided meditations that cater to different emotions and needs. The audio-guided meditations are led by professional and soothing voices. The progress tracking feature helps me stay consistent with my practice. Overall, it has been a great tool for improving my mental well-being.",
  },

  {
    id: 2,
    name: "David",
    img: "https://i.postimg.cc/XJjG84z5/testimonial-3.jpg",
    text: "HigherSelf offers a wide range of guided meditations that cater to different emotions and needs. The audio-guided meditations are led by professional and soothing voices. The progress tracking feature is also great for keeping me motivated and consistent. I highly recommend this app to anyone looking to improve their mental well-being.",
  },
  {
    id: 3,
    name: "John",
    img: "https://i.postimg.cc/YChCt8vJ/avatar-e278114ff56fefeca5b1d16823f204f4.jpg",
    text: "I was skeptical about higherSelf but this one exceeded my expectations.I would highly recommend this app to anyone looking to integrate meditation into their daily routine.",
  },
];

// select items
const img = document.getElementById("person-img");
const text = document.getElementById("info");
const name = document.getElementById("author");

const leftBtn = document.querySelector(".btn--left");
const rightBtn = document.querySelector(".btn--right");

//set starting item
if(document.title === "HigherSelf"){
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
  
}


/***************************/
/* COURSES SECTIONS*/
/***************************/

function flipFunction() {
  let myElement = document.getElementById("theCard");
  myElement.classList.toggle("flipper");
}

/***************************/
/* PAYMENT*/
/***************************/
let carts = document.querySelectorAll(".buy");

let products = [
  {
    name: "mediation with juyeon",
    tag: "meditation-ju",
    price: 20,
    inCart: 0,
  },
  {
    name: "meditation with zzong",
    tag: "meditation-zzong",
    price: 15,
    inCart: 0,
  },
];

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(products[i]); //specific the clicked item
    totalCost(products[i]);
  });
}

//to make the cartnumbers stay even when the page is refreshed.
function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");

  if (productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers;
  }
}

//using localstorage to remember the cart numbers
function cartNumbers(product) {
  //to check the exisited cartNumbers
  let productNumbers = localStorage.getItem("cartNumbers");
  //string to number
  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".cart span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
  }
  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  //to check if it's already in localstorage or not
  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product,
      };
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product,
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
  let cartCost = localStorage.getItem("totalCost");

  if (cartCost != null) {
    cartCost = parseInt(cartCost); // string to number
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}

function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let cartContainer = document.querySelector(".products");

  if (cartItems && cartContainer) {
    cartContainer.innerHTML = '';

    Object.values(cartItems).forEach(item => {
      // Calculate total price
      const totalPrice = item.price * item.inCart;
      
      cartContainer.innerHTML += `
        <div class="product">
          <img src="../img/courses/${item.tag}.jpg" alt="${item.name}">
          <span>${item.name}</span>
          <div class="price">$${item.price}</div>
          <div class="quantity">${item.inCart}</div>
          <div class="total">$${totalPrice}</div>
        </div>
      `;
    });
  }
}

onLoadCartNumbers();
displayCart();

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

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// MOBILE NAVIGATION
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
