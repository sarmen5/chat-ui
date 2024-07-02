import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import {useState} from "react";

const Chat = (props) => {
    const { data } = props
    const [messages, setMessages] = useState(data.messages)

    const onSubmitMessage = (message) => {
        setMessages((prevMessages) => [...prevMessages, {
            id: Math.random().toString(),
            user_name: 'Armen',
            user_id: '1',
            role: 'Engineering',
            message: message,
            created_at: (new Date()).toString(),
        }])
    }

    return (
        <div className="border-x border-gray-200 text-gray-800 h-screen max-w-2xl mx-auto flex flex-col">
            <ChatHeader members={data.members} />
            <ChatBody messages={messages} members={data.members} />
            <ChatFooter onSubmit={onSubmitMessage} />
        </div>
    )
}

export default Chat
