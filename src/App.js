import CounterButton from "./CounterButton";

export default function App() {
  return (
    <div>
      <h1>
        Click Counter 😁
      </h1>
      <CounterButton step={1} />
      <CounterButton step={5} />
      <CounterButton step={10} />
    </div>
  );
}

