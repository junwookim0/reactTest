import { Outlet, Link } from "react-router-dom";

const Boardlist = () => {
    
    const numlist = [1, 2, 3, 4, 5];
    return (
        <div>
        <h1>Board</h1>
        <p>파라미터 및 중첩 라우터를 사용하여 아래 Board의 내용이 보입니다</p>
        <div>
            {numlist.map((num,index) => (
                <Link to={`/boardlist/${num}`}> {num} </Link>
            ))}
        </div>    
        <Outlet />
        </div>
    );
};
export default Boardlist;
