# :pushpin: Higher Self
> Higher Self는 명상 관련 수업을 제공하는 앱을 소개하는 사이트입니다. 
>https://higherself.netlify.app/

</br>

## 1. 프로젝트 소개
  - 본 프로젝트는 평소 명상에 관심이 있는 제가 명상 관련 앱이 있다고 가정하고, 그 앱을 소개하는 사이트를 구현한 것입니다. 
  
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
🔍 "react-horizontal-scrolling-menu" 라이브러리 사용 중 문제 발생

- 문제 상황
"react-horizontal-scrolling-menu" 라이브러리를 사용하여 스크롤 메뉴를 구현하려고 했으나, 제대로 작동하지 않았습니다.

- 해결 방법
구글링을 통해 찾아낸 해결 방법은 "react-horizontal-scrolling-menu" 라이브러리의 기본 스타일 시트를 import하는 것이었습니다:

```
import "react-horizontal-scrolling-menu/dist/styles.css";
```

그런데 이렇게 하니, 기본 설정으로 못생긴 스크롤바가 페이지에 나타났습니다. 이는 원치 않는 결과였기 때문에 이 문제를 해결하기 위해 커스텀 CSS를 추가하여 기본 스크롤바를 숨겼습니다:

```
.react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar {
  display: none;
}
.react-horizontal-scrolling-menu--scroll-container {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
```
코드 추가 후 페이지에 못생긴 기본 스타일의 스크롤바가 더 이상 나타나지 않았고, 사용자 경험이 향상되었습니다.


해결방법: 구글링을 통해 알아낸 해결 방법은 "react-horizontal-scrolling-menu" 라이브러리의 스타일 시트를 다음과 같이 추가하는 것이었습니다.
```
import "react-horizontal-scrolling-menu/dist/styles.css";
```
하지만 이 방법을 사용하면 기본 설정으로 못생긴 스크롤바가 표시되었습니다. 이 문제를 해결하기 위해 다음과 같이 커스텀 CSS를 추가했습니다.
```
.react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar {
  display: none;
}
.react-horizontal-scrolling-menu--scroll-container {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
```
이 코드를 추가 후 페이지에 못생긴 스크롤바가 더 이상 나타나지 않았습니다.
 
🔍 Search.jsx 컴포넌트안에 input과 button 배치 문제

- 문제 상황
처음에는 Search.jsx 컴포넌트에서 검색 입력란(input)과 버튼을 옆으로 배치하기 위해 CSS의 display: absolute 속성을 사용하였습니다. 그러나 이렇게 하니, 화면에서 가운데가 아닌 오른쪽으로 치우친 위치에 요소들이 표시되는 문제가 발생하였습니다.

- 원인 분석
display: absolute는 요소를 일반적인 문서 흐름에서 벗어나게 하고, 가장 가까운 위치 지정된 조상(기본값은 body)에 대해 상대적으로 배치합니다. 따라서, 화면 크기나 다른 요소의 위치 변화에 따라 예상하지 못한 결과를 초래할 수 있습니다.

- 해결 방법
input에 display: relative를 설정하고, 버튼을 display: absolute로 설정하여 레이아웃을 조정하는 대신, flex를 사용하여 가운데에 정렬되도록 변경했습니다. 아래는 수정된 코드입니다:

```
<Box display="flex">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "1100px", xs: "500px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
```

위의 수정된 코드에서, <Box> 컴포넌트의 display 속성을 flex로 설정하여 자식 요소들(여기서는 <TextField>와 <Button>)이 가로 방향으로 배치되고, 자동으로 중앙 정렬되도록 하였습니다. 
이 변경 후, 화면에서 요소들이 치우쳐 보이는 문제가 해결되었습니다.

🔍 검색창에서 운동 검색 시 undefined가 결과로 나옴

- 문제 상황
검색창에서 운동을 검색할 때 'undefined'라는 결과가 나타나는 문제가 발생했습니다.

- 원인 분석
이 문제의 원인을 파악하기 위해, 우리는 먼저 데이터를 가져오는 fetchData 함수에서 데이터가 제대로 전달되고 있는지 디버깅을 진행하였습니다. 그 결과, 검색 기능을 수행하는 코드 부분에서 문제가 있음을 확인하였습니다.
기존 코드에서 다음과 같은 부분에서 문제가 발생하였습니다:

```
const searchedExercises = exercisesData.filter((exercise) => {
  // Exercise data filtering code
});
```

위의 코드 부분은 exercisesData 배열의 각 요소(운동 정보)에 대해 특정 조건에 맞는 요소들만 선택하여 새로운 배열(searchedExercises)를 만듭니다. 여기서 조건은 운동 정보의 특정 필드(name, target, equipment, bodyPart)에 검색어가 포함되어 있는지를 확인하는 것입니다.
그런데 이 때, 해당 필드들이 문자열인지 확인하지 않고 바로 toLowerCase() 메서드를 호출하여 소문자로 변환하려고 했습니다. 만약 해당 필드값이 문자열이 아니라면(undefined나 null 등), 이 메서드 호출은 에러를 발생시킵니다.
이 코드 부분에서 exercisesData 데이터가 제대로 가져와졌지만, filter 함수를 통해 검색어를 포함한 결과를 출력할 때 문제가 발생했습니다. 원인은 exercise.name, exercise.target, exercise.equipment, exercise.bodyPart 등의 필드들이 문자열인지 확인하지 않고 바로 toLowerCase() 메서드를 호출하여 발생한 문제였습니다. 

- 해결 방법
각 필드값이 문자열인 경우에만 toLowerCase() 메서드를 호출하도록 코드를 수정하여 이 문제를 해결하였습니다:

```
      const searchedExercises = exercisesData.filter((exercise) => {
        // Ensure exercise.name is a string before calling toLowerCase()
        const exerciseName =
          typeof exercise.name === "string" ? exercise.name.toLowerCase() : "";
        const target =
          typeof exercise.target === "string"
            ? exercise.target.toLowerCase()
            : "";
        const equipment =
          typeof exercise.equipment === "string"
            ? exercise.equipment.toLowerCase()
            : "";
        const bodyPart =
          typeof exercise.bodyPart === "string"
            ? exercise.bodyPart.toLowerCase()
            : "";

        return (
          exerciseName.includes(search) ||
          target.includes(search) ||
          equipment.includes(search) ||
          bodyPart.includes(search)
        );
      });
```
위의 수정된 코드에서, 우리는 각 필드값이 문자열인지 확인하고, 문자열인 경우에만 toLowerCase() 메서드를 호출하여 소문자로 변환합니다. 그렇지 않은 경우(즉, 필드값이 undefined나 null 등일 경우), 빈 문자열("")을 사용합니다. 이렇게 수정한 후, 검색 기능은 정상적으로 작동하였고 'undefined' 문제는 더 이상 발생하지 않았습니다.


🔍 "Uncaught TypeError: exercises.slice is not a function" 에러 해결

- 문제 상황
'Exercises' 컴포넌트에서 특정 범위의 운동을 선택하여 출력하려고 할 때 다음과 같은 코드를 사용하였습니다:

```
const currentExercises = exercises.slice(
  indexOfFirstExercise,
  indexOfLastExercise
);
```

하지만 이 코드를 실행할 때마다 "Uncaught TypeError: exercises.slice is not a function"이라는 에러가 발생하였습니다.

- 원인 분석
JavaScript에서 slice 메소드는 배열에 대해서만 사용할 수 있습니다. 따라서 exercises 가 배열이 아닌 경우 위와 같은 에러 메시지가 나타납니다.
제 코드의 경우 exercises는 객체(object)였기 때문에 slice 함수를 호출할 수 없었습니다.구글링을 해보고 디버깅을 해 원인을 찾게 되었습니다.

- 해결 방법
받아온 데이터(exercises)가 객체이기 때문에, 데이터를 배열로 변환하여야 합니다. JavaScript에서 제공하는 Object.values() 메소드를 사용하여 객체의 모든 속성 값을 포함하는 배열을 생성할 수 있습니다:

```
const exercisesArray = Object.values(exercises);

const currentExercises = exercisesArray.slice(
  indexOfFirstExercise,
  indexOfLastExercise
);
```





## 6. 회고 / 느낀점


