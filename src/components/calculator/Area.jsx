import { useEffect, useState } from "react";

export default function Area() {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log("Area component mounted...");
        return () => {
            console.log("Area component unmounted...");
        }
    },[]);
    
    useEffect(() => {
        console.log("Area component updated when count changes...")
    },[count]);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <>
            <button onClick={handleClick}> count: {count}</button>
        </>
    );
}
