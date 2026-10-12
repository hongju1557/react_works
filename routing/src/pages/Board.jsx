import { Link } from 'react-router-dom'

//보드 컴포넌트
const Board = () => {



    return(
        <div>
            <h2>게시판</h2>
            <p>
                <Link to="/board/1">1번 글</Link>
            </p>
            <p>
                <Link to="/board/2">2번 글</Link>
            </p>
        </div>


    )
}

export default Board
