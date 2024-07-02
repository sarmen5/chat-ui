import useAuth from "../../hooks/useAuth";
import ReadReceipt from "../../icons/ReadReceipt";
import useFormattedMessage from "../../hooks/useFormattedMessage";

const Message = (props) => {
    const { message, currentUser, members } = props

    const isUserMessage = currentUser.id === message.user_id;
    const date = new Date(message.created_at)

    const formattedMessage = useFormattedMessage(
        message.message,
        isUserMessage,
        members
    );

    return (
        <div className="flex w-full mt-4 gap-3">
            {!isUserMessage && (
                <div className="w-8 h-8 shrink-0">
                    <img src={message.src} alt={message.user_name} className="rounded-full object-cover" />
                </div>
            )}
            <div key={message.id} className={`max-w-[50%] text-sm flex gap-2 items-end rounded-md py-1 px-2 ${
                isUserMessage ? 'ml-auto bg-blue-500 text-white' : 'bg-gray-200'
            }`}>
                <div className="pb-4">
                    {!isUserMessage && (
                        <p className="mb-1">
                            <span className="font-semibold mr-2.5">{message.user_name}</span>
                            <span className="text-xs text-gray-500">{message.role}</span>
                        </p>
                    )}
                    {formattedMessage}
                </div>

                <div className={`flex items-center gap-1 text-right shrink-0 text-xs ${isUserMessage ? 'text-white' : 'text-gray-500'}`}>{date.toLocaleTimeString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true
                })} {isUserMessage && <ReadReceipt />}</div>
            </div>
        </div>
    )
}

const ChatBody = (props) => {
    const { messages, members } = props;
    const { user: currentUser } = useAuth();

    return (
        <div className="flex flex-col items-baseline p-4 grow overflow-y-auto">
            <p className="text-gray-500 text-xs mx-auto mb-5">8/20/2020</p>
            {messages.map((item) => <Message key={item.id} message={item} members={members} currentUser={currentUser} />)}
        </div>
    )
}

export default ChatBody
