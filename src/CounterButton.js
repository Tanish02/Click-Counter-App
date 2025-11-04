import { useState } from "react";

export default function CounterButton({ step }) {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + step);
    }

   return (
       <div style={{ margin: "10px" }}>
        <button onClick={handleClick}>
               + {step} ▶️ {count}
       </button>
           <button onClick={() => setCount(0)} style={{ marginLeft: "5px" }}>
               Reset
           </button>
       </div>
    );
}


