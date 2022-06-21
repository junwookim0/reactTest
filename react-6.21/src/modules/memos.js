const CHANGE_INPUT = "memos/CHANGE_INPUT"; 
const INSERT = "memos/INSERT"; 
const REMOVE = "memos/REMOVE"; 
const CHANGE_P = "memos/CHANGE_P";


export const changeInput = (input) => ({
  type: CHANGE_INPUT,
  input,
});
export const changeArea = (area) => ({
  type: CHANGE_P,
  area,
});
let id = 3; 
export const insert = (text , title) => ({
  type: INSERT,
  memo: {
    id: id++, 
    text,
    title
  },
});

export const remove = (id) => ({
  type: REMOVE,
  id,
});


const initalState = {
  input: "",
  memos: [
    {
      id: 1,
      title: "첫번째 제목입니다",
      text: "첫번째 메모입니다",
    },
    {
      id: 2,
      title: "두번째 제목입니다",
      text: "두번째 메모입니다",
    },
  ],
};


function memos(state = initalState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input,
      };
      case CHANGE_P:
      return {
        ...state,
        area: action.area,
      };
    case INSERT:
      return {
        ...state,
        memos: state.memos.concat(action.memo),
      };
    case REMOVE:
      return {
        ...state,
        memos: state.memos.filter((memo) => memo.id !== action.id),
      };
    default:
      return state;
  }
}
export default memos;
