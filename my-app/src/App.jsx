import './App.css'
import heroImg from './assets/hero.png'
import Exmaple01 from './components/Example01'
import Example02 from './components/Example02'
import Example03 from './components/Example03'
import Dog from './components/Dog'
import Dog2 from './components/Dog2'

//jsx에서는 className 속성 사용
//태그를 병렬로 사용할 수 없음 div 태그로 감싼다
//

function MyButton(){
  return(
    <button>목록보기</button>
  )
}
function App() {
const season = "가을"
  return (
    <div className='app'>
      <h2>리액트 시작하기</h2>
      <h3 className = "welcome">홈페이지 방문을 환영합니다</h3>
    <section>
      {/* props */}
      <Dog
      breed="진돗개"
      age={12}
      />

      <Dog2 
      breed="치와와"
      age={13}
      ></Dog2>
      {/* <p>현재 계절은 {season}입니다.</p> 
      <img src={heroImg} alt="메인이미지" />
      <MyButton></MyButton> */}
      {/* <Exmaple01></Exmaple01>
      <Example02></Example02> */}
      {/* <Example03></Example03> */}

      </section>
    </div>
  )
}

export default App
