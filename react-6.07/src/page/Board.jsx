import { useParams } from "react-router-dom";

const Board = () => {
    const { id } = useParams();
    return (
        <div>
        <h3>{id}페이지입니다</h3>
        </div>
    );
};
export default Board;
