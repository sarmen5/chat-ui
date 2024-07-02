import Chat from "./components/Chat";
import useChat from "./hooks/useChat";

function App() {
  const chatData = useChat();

  return (
    <Chat data={chatData} />
  )
}

export default App
