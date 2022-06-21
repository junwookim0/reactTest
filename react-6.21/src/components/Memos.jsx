
const MemoItem = ({ memo, onRemove }) => {

  return (
    <div>
      <span> 제목 : {memo.title}</span>
      <button
        onClick={() => {
          onRemove(memo.id);
        }}
      >
        X
      </button>
      <p> 내용 : {memo.text}</p>
    </div>
  );
};


const Memos = ({
  input, 
  area,
  memos, 
  onChangeInput, 
  onChangeArea,
  onInsert,
  onRemove,
}) => {
  const onChange = (e) => {
    onChangeInput(e.target.value);
  };
  const onChangeA = (e) => {
    onChangeArea(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(input,area);
    onChangeInput("");
    onChangeArea("");
    
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={area} onChange={onChangeA} placeholder="제목을 작성해주세요"/>
        <br></br>
        <textarea type="text" value={input} onChange={onChange} placeholder="메모"></textarea>
        <button type="submit">등록</button>
      </form>
      {memos.map((memo) => (
        <MemoItem memo={memo} key={memo.id} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default Memos;
