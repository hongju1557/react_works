//상단 메뉴가 있는 컴포넌트
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className='header'>
          <Link to="/">Home</Link>
          <Link to="/Signup">회원가입</Link>
          <Link to="/SignIn">로그인</Link>
          <Link to="/Board">게시판</Link>
        </div>
    )
}

export default Header