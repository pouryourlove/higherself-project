# :pushpin: Higher Self
> Higher Self는 명상 관련 수업을 제공하는 앱을 소개하는 사이트입니다. 
>https://higherself.netlify.app/

</br>

## 1. 프로젝트 소개
  - 본 프로젝트는 평소 명상에 관심이 있어서 명상 관련 앱이 있다고 가정하고, 그 앱을 소개하는 사이트를 구현한 것입니다. 
  
## 2. 제작 기간 & 참여 인원
- 기간 : 2022년 2월 5일 ~ 2022년 4월 10일 수정: 2023년 1월 21일 ~ 2023년 1월 27일
- 인원 : 개인 프로젝트

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
- 이메일링 리스트 구독 기능을 위한 모달 창을 구현했습니다. 사용자가 "Subscribe" 버튼을 클릭하면 모달 창이 나타나고, "Close" 버튼을 클릭하면 모달 창이 닫힙니다.

### 4.2. 반응형 디자인으로 모바일 버전 메뉴 구현
<img src="https://user-images.githubusercontent.com/90593162/228281628-fc6c9c57-4427-4754-8708-4d84340ffdae.gif">
<details>
<summary>코드 보기</summary>
<div markdown="1">

``` 
  const btnNavEl = document.querySelector(".btn-mobile-nav");
  const headerEl = document.querySelector(".header");

  btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
  

```
</div>
</details>
- 반응형 디자인을 적용하여 모바일 버전에서는 햄버거 메뉴 아이콘을 통해 네비게이션 메뉴가 펼쳐지도록 구현했습니다. 화면 크기가 작아질 때, 네비게이션 메뉴가 자동으로 축소되어 사용자 친화적인 UI를 제공합니다.

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
- Hero 섹션에 텍스트 타이핑 애니메이션을 적용하여 동적인 효과를 주었습니다. 사용자들에게 명상과 자기발견을 강조하는 메시지를 더욱 인상적으로 전달합니다.

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
- Courses 섹션에서는 카드에 마우스를 호버 효과를 넣었고 마지막 카드는 클릭하면  뒤집히는 플립 기능을 구현했습니다. 

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
- 앱에 대한 고객 피드백을 슬라이드 형식으로 보여주는 Carousel 기능을 추가했습니다. 좌우 화살표 버튼을 통해 다음이나 그 전의 슬라이드를 볼 수 있습니다.
  
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
- FAQ 섹션에는 아코디언 기능을 추가하여 질문을 클릭하면 해당 답변이 펼쳐지도록 구현했습니다.  시각적으로 질문과 답변을 잘 보여주는 기능입니다
### 4.7. Smooth scrolling 기능 구현

<img src="https://user-images.githubusercontent.com/90593162/228462806-0afe6a51-401b-4945-b4fe-5875a2dd1e7a.gif">

<details>
<summary>코드 보기</summary>
<div markdown="1">
    
``` 
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

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });

      //Close mbile navigation
      if (link.classList.contains("main-nav-link"))
        headerEl.classList.toggle("nav-open");
    }
  });
});
```
</div>
</details>  
- 사이트 내의 링크로 부드럽게 스크롤링하는 스무스 스크롤 기능을 추가했습니다. 사용자들이 사이트를 편리하게 탐색할 수 있도록 하였습니다.
  

### 5. 문제 해결
🔍모달창이 히어로 섹션 부분 사진 위에 나와야 하는데 아래로 나오는 에러가 발생.
<img src="https://velog.velcdn.com/images/pouryourlove/post/ca8322f6-219f-45ea-8e7c-49672ad425ec/image.png" width="400px">
- 모달창의 z-index 값을 조정해주자 에러가 해결됨

🔍Hero 섹션에 타이핑 텍스트 애니메이션 코드 작성 시 에러 발생

- 하나의 요소만 선택하는 querySelector가 아니라 getElementsByClassName을 이용해 요소 선택한 것이 이유. querySelector로 변경하여 에러 해결.
- 관련 블로그 포스팅: <https://velog.io/@pouryourlove/getElementsByClassName-querySelector>
  
🔍새로 만든 Git branch 내에서 수정을 하고 커밋 후 푸쉬 시도할 때 에러 발생

- 원격 저장소에 해당 브랜치가 없었기 때문으로, 새로운 브랜치를 원격 저장소에 푸쉬하여 해결함 (git push origin 브랜치이름)
- 관련 블로그 포스팅: <https://velog.io/@pouryourlove/git-branch>

🔍Courses 섹션에서 box-shadow 적용시 카드 하나가 아닌 전체 컨테이너에 그림자가 적용되는 에러 발생

- grid 설정을 해줌으로 해결함
- 관련 블로그 포스팅: <https://velog.io/@pouryourlove/gridbox-shadow에-관한-실수>


## 6. 회고 / 느낀점
이 프로젝트는 처음으로 강의에서 배웠던 것들을 토대로 직접 구현해본 작업입니다. 명상은 개인적으로 관심 있어하는 분야이기에 더 재미있게 만들 수 있었고, 새로운 기능들을 추가하고 수정해 보면서 직접 배운 것을 적용해보는 시간을 가졌습니다. 수정기간에는 Git Merge에 대한 연습을 위해 새로운 브랜치를 생성하고 병합하는 과정을 진행했습니다. 이 프로젝트를 통해 머리속에서만 있던 지식이 실제 실습을 통해 현실화되는 뿌듯함을 느꼈습니다. 이 프로젝트는 첫 공식 개인 프로젝트로서 그 의미를 찾아볼 수 있다고 생각합니다. 


