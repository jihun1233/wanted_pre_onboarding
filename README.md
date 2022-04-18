# wanted_pre_onboarding

원티드 프리온보딩 프론트엔드

## 구현상황

css 툴로 styled-components를 사용하였습니다.
아이콘을 일부 사용하기 위해 fontawesome 툴을 사용했습니다.

### Toggle

토글 구현을 위해 type이 checkbox인 input을 기반으로 컴포넌트를 제작했습니다. checkbox의 value를 toggle state로 관리하였습니다. onToggle함수를 만들어 input의 onChange에 넘겨주어 클릭시 toggle 값이 바뀌도록 했습니다.
input의 :before 속성을 :checked 여부에 따라 left값을 바꿔줌으로써 체크시 좌 우 움직임을 나타냈습니다.

그리고 TextBox를 만들어 absolute position으로 checkbox와 겹치게 하여 좌 우에 나타낼 문자열을 표시했습니다.

checkbox를 사용하고, 체크여부에 따라 위치를 변경시켜주도록 하는 것이 잘 진행되어 크게 어렵지 않았습니다.

### Tab

탭은 ul과 li 태그를 styled로 만든 Ul, Li를 사용해 만들었습니다.
탭에 들어갈 자료들을 listItem으로 만들었고 Ul 내부에서 이들을 map을 활용해 각각 Li태그로 만들었습니다.
선택여부는 select state를 사용하여 관리하고 Li에 onClick으로 select값을 자신의 index로 바꾸도록 했습니다. 이 Li에 isSelected라는 값으로 넘겨주어 styled-componets에서 props로 사용하여 isSelected값이 true인지 false인지에 따라 색을 다르게 나타내 선택상태를 나타냈습니다.
또한 SlideBox를 만들어 탭이 선택될 때 해당 탭 위치로 아래 수평선이 이동하도록 만들었습니다. SlideBox는 내부에 before를 사용해 더 작은 가로선을 나타냈고 props로 selected를 가져 이 selected의 인덱스만큼 translateX를 사용해 움직이게 만들었습니다.

### Slider

type이 range인 input을 사용하여 구현했습니다. input의 값은 slideValue state와 onChange 함수를 만들어 관리했습니다. 외곽선을 없애고 색을 변경하기 위해 appearance: none;으로 기본설정을 없앤 후 :before속성을 사용해 채워진 부분의 색상을 표현했습니다. position을 absolute로 바꾸고 width를 value 값으로 두어 value만큼 늘어나도록 했습니다. %값이라 0~100까지의 값을 담기 때문에 이렇게 할 수 있었고 다른 값이었다면 추가적인 계산이 필요했을 것 같습니다. slider-thumb로 조절버튼 부분을 나타냈습니다.

아래 버튼은 point 배열에 분기마다 값을 두어 이 point별로 button을 생성하도록 만들었습니다. 이 버튼을 클릭 시 point에 해당하는 값으로 slideValue를 설정하도록 했습니다.
그리고 동일한 point 배열을 사용해 Marker도 나타내어 슬라이더 위에 겹치도록 해 구간을 나타냈습니다. 이 Marker는 해당 point보다 value가 높은지를 비교한 값인 passed를 props로 넘겨주어 지점을 지나간 경우에는 색을 바꿔줬습니다.

input에 state를 사용해 값을 관리하는것은 간단했지만 이후 버튼, 마커등을 사용해 구간을 나타내는 부분이 조금 어려웠습니다.

### Input

우선 email이 유효한지 확인하는것과 비밀번호의 표시 여부를 결정하는것을 목표로 input을 두개 만들어 사용했습니다. 두가지 입력값은 inputValue라는 하나의 state로 관리하고 이 안에 email, password를 두고 input 태그 내에 name속성에 email, password를 주어 onChange에서 각 name에 해당하는 key의 value를 변경해주었습니다.
email의 유효성은 정규식을 사용해 해당 정규식과 일치하는지 match함수를 사용해 판별했습니다. 그리고 판별 결과를 boolean 값으로 isEmailValid라는 state에 저장했습니다. 이 값이 true면 우측 아이콘을 초록, 아니면 일반 회색으로 표시했습니다. 그리고 onFocus, onBlur도 만들어 focus, blur시에 isEmailValid값에 따라 validMessage를 변경하여 이를 표시하도록 했습니다.
그리고 password는 isPasswordVisible이라는 state를 두고 아이콘을 클릭시 토글하도록 함수를 만들어 이 값이 true면 type을 text로, false면 password로 하여 표시여부를 결정했습니다.

### Dropdown

dropdown은 ul을 사용해 List라는 컴포넌트로 만들고, 안의 내용은 li를 사용한 Item으로 만들었습니다. 표시여부는 isListVisible을 state로 만들어 List에 props로 전달해 이 값이 true면 display를 block, false면 none으로 지정하여 보이지않게 처리했습니다.
리스트에 들어갈 내용은 items라는 배열을 바탕으로 검색한결과를 searchedItems로 담아 searchedItems의 내용을 Item으로 출력했습니다.
리스트의 첫번째 Item은 검색어를 입력할 input을 두고 inputValue로 값을 관리했습니다. 이 값이 변할 때마다 useEffect를 사용해 items중 filter를 사용해 inputValue를 포함하고 있는 내용만 searchedItems로 담아 출력하도록 만들었습니다. 그리고 Item을 클릭하면 해당 내용이 selected에 담기도록 하고 그 selected의 값을 버튼에 출력하게 했습니다.

item 배열을 그대로 두고 useEffect를 사용해 매번 searchedItems에 필터링한 값을 넣고 새롭게 렌더링해주는 부분이 잘 이루어진것 같습니다.
