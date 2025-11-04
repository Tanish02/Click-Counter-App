import { useState } from "react";

export default function CounterButton({ step }) {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + step);
    }

   return (
        <button onClick={handleClick}>
           + {step} ➡️ {count}
       </button>
    );
}
