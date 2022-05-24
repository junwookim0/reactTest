import { useState ,useMemo, useCallback, useEffect } from "react"

const MemoHook = () => {
    const [inputnum, setInputnum] = useState(0);
    const [number, setNumber] = useState([1,5]);
    const [date, setDate] = useState(new Date());
    
    const onChange = useCallback((e)=> {setInputnum(e.target.value);}, [])

    const addNum = useCallback(() => {
        setNumber([...number, parseInt(inputnum)]);
        setInputnum(0);
    }, [inputnum, number]);

    const allSum = (list) =>{
        return list.reduce((a,b) => a+b);
    }
    const sum = useMemo(() => allSum(number), [number]);

    const tick = () => {
        setDate(new Date());
    }

    useEffect(() => {
        console.log("마운트가 되었습니다")
        setInterval(() => tick(), 1000);
    },[])
    return(
        <div>
            <h1>{ date.toLocaleTimeString() }</h1>
            <input type="number" onChange={onChange} value={inputnum}/>
            <button onClick={addNum}>추가</button>
            <h3> 모든수의 평균 { sum/number.length }</h3>
            <ul>
                {number.map((n,i) => (
                    <li
                    key={i}
                    >{n}</li>
                ))
                }
            </ul>
        </div>
    )
}

export default MemoHook;