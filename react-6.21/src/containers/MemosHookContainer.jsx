import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Memos from "../components/Memos";
import { changeInput, insert, remove, changeArea} from "../modules/memos";

const MemosHookContainer = () => {
  const { input, memos ,area} = useSelector((state) => ({
    input: state.memos.input,
    area: state.memos.area,
    memos: state.memos.memos,
  }));

  const dispatch = useDispatch();
  const onChangeInput = useCallback((input) => dispatch(changeInput(input)), [dispatch]);
  const onChangeArea = useCallback((area) => dispatch(changeArea(area)), [dispatch]);
  const onInsert = useCallback((text,title) => dispatch(insert(text,title)), [dispatch]);
  const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);

  return <Memos input={input} memos={memos} area={area}
  onChangeInput={onChangeInput} onChangeArea={onChangeArea}
  onInsert={onInsert} onRemove={onRemove} />;
};
export default MemosHookContainer;
