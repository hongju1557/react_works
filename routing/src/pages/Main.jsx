//첫 페이지를 보여주는 컴포넌트
import mainPhoto from "../assets/hero.png"

const Main = () => {
    return(
        <div>
            <h2>환영합니다. 메인 페이지입니다.</h2>
            <div>
               <img src={mainPhoto} alt="" /> 
            </div>
        </div>
    )
}

export default Main