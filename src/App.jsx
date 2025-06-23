import useWebSocket from "./useWebSocket";

function App() {
  const { message } = useWebSocket();

  console.log(message);

  return <div>Hello World</div>;
}

export default App;
