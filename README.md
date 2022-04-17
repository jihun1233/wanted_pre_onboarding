# wanted_pre_onboarding

원티드 프리온보딩 프론트엔드

## 구현상황

css 툴로 styled-components를 사용하였습니다.
아이콘을 일부 사용하기 위해 fontawesome 툴을 사용했습니다.

### Toggle

토글 구현을 위해 type이 checkbox인 input을 기반으로 컴포넌트를 제작했습니다. checkbox의 value와 onChange를 state로 관리하였습니다.
input의 :before 속성을 :checked 여부에 따라 left값을 바꿔줌으로써 체크시 좌 우 움직임을 나타냈습니다.

그리고 TextBox를 만들어 absolute position으로 checkbox와 겹치게 하여 좌 우에 나타낼 문자열을 표시했습니다.

### Tab

탭은 ul과 li 태그를 styled로 만든 Ul, Li를 사용해 만들었습니다.
탭에 들어갈 자료들을 listItem으로 만들었고 Ul 내부에서 이들을 map을 활용해 각각 Li태그로 만들었습니다.
선택여부는 select state를 사용하여 관리하고 Li에 onClick으로 select값을 자신의 index로 바꾸도록 했습니다. 이 Li에 isSelected라는 값으로 넘겨주어 styled-componets에서 props로 사용하여 isSelected값이 true인지 false인지에 따라 색을 다르게 나타내 선택상태를 나타냈습니다.
또한 SlideBox를 만들어 탭이 선택될 때 해당 탭 위치로 아래 수평선이 이동하도록 만들었습니다. SlideBox는 내부에 before를 사용해 가로선을 나타냈고 props로 selected를 가져 이 selected의 인덱스만큼 translateX를 사용해 움직이게 만들었습니다.

### Slider

슬라이더는 난이도가 가장 어려웠던 것 같습니다.
type이 range인 input을 사용하여 구현했습니다. input의 값은 slideValue state와 onChange 함수를 만들어 관리했습니다. 외곽선을 없애고 색을 변경하기 위해 appearance: none;으로 기본설정을 없앤 후 :before속성을 사용해 채워진 부분의 색상을 표현했습니다. position을 absolute로 바꾸고 width를 value 값으로 두어 value만큼 늘어나도록 했습니다. %값이라 0~100까지의 값을 담기 때문에 이렇게 할 수 있었고 다른 값이었다면 추가적인 계산이 필요했을 것 같습니다. slider-thumb로 조절버튼 부분을 나타냈습니다.

아래 버튼은 point 배열에 분기마다 값을 두어 이 point별로 button을 생성하도록 만들었습니다. 이 버튼을 클릭 시 point에 해당하는 값으로 slideValue를 설정하도록 했습니다.
그리고 동일한 point 배열을 사용해 Marker도 나타내어 슬라이더 위에 겹치도록 해 구간을 나타냈습니다. 이 Marker는 passed라는 속성을 props로 넘겨주어 지점을 지나간 경우에는 색을 바꿔줬습니다.

### Input

인풋

### Dropdown

드롭다운
