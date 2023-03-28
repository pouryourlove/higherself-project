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



### 5. 문제 해결
- 
- 

## 6. 회고 / 느낀점  
