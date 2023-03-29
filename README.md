# :pushpin: Higher Self
>명상 관련 수업앱을 소개하는 사이트  
>https://higherself.netlify.app/

</br>

## 1. 프로젝트 소개
  - 평소 명상에 관심이 있어서 명상 관련된 앱이 있다고 가정하고 그 앱을 소개하는 사이트를 만들어 보았습니다. 
  
## 2. 제작 기간 & 참여 인원
- 2022년 2월 5일 ~ 2022년 4월 10일 수정: 2023년 1월 21일 ~ 2023년 1월 27일
- 개인 프로젝트

</br>

## 3. 사용 기술

  -  HTML
  -  CSS
  -  Javascript
  -  Git

</br>

## 4. 주요 기능

### 4.1. 이메일링 리스트 모달 창 구현
<img src="https://user-images.githubusercontent.com/90593162/228273346-be1e577f-6f4b-42ba-abee-a70725377415.gif">

<details>
<summary>코드 보기</summary>
<div markdown="1">

``` 
     <div id="myModal" class="modal">
        <div class="modal-content">
          <section class="email-section grid" id="subscribe">
            <div class="email-box">
              <button class="modal-close-btn" id="close">X</button>
              <h1>Subscribe Now</h1>
              <span>Get notified about the next update</span>

              <form action="#">
                <input type="text" name="name" placeholder="Name" />
                <input
                  type="email"
                  name="email-address"
                  placeholder="Email Address"
                />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </section>
        </div>
      </div>

      <div id="overlay" class="overlay"></div>

```
</div>
</details>

### 4.2. 반응형 디자인으로 모바일 버전 메뉴 구현
<img src="https://user-images.githubusercontent.com/90593162/228281628-fc6c9c57-4427-4754-8708-4d84340ffdae.gif">
<details>
<summary>코드 보기</summary>
<div markdown="1">

``` 
   코드넣기  

```
</div>
</details>

### 4.3. Hero 섹션에 타이핑 텍스트 애니메이션 추가
<img src="https://user-images.githubusercontent.com/90593162/228287268-be919905-beb5-46f7-92e4-a57804976196.gif">

<details>
<summary>코드 보기</summary>
<div markdown="1">

``` 
   const heroTyping = "Meditate for self-discovery and potential.";
   const element = document.querySelector(".heading-primary");

  //The current index of the text being displayed
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

```
</div>
</details>

### 4.4. Courses 섹션에 카드 플립 기능 구현
<img src="https://user-images.githubusercontent.com/90593162/228441762-801d7f51-566f-42f1-9a29-be7a41bf7083.gif">

<details>
<summary>코드 보기</summary>
<div markdown="1">

``` 
  function flipFunction() {
    let myElement = document.getElementById("theCard");
    myElement.classList.toggle("flipper");
  }  

```
</div>
</details>

### 4.5. Carousel 기능 구현
<img src="https://user-images.githubusercontent.com/90593162/228446103-65e3531b-f709-4e57-bc9c-489d164b7066.gif">

<details>
<summary>코드 보기</summary>
<div markdown="1">

``` 
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

```
</div>
</details>
  
### 4.6. Accordion 기능 구현
<img src="https://user-images.githubusercontent.com/90593162/228459135-8ad50166-e040-47df-a555-9e5159d9094d.gif">

<details>
<summary>코드 보기</summary>
<div markdown="1">

``` 
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

```
</div>
</details>  
  

### 5. 문제 해결
- 
- 

## 6. 회고 / 느낀점  
