import PaperAirplane from "../../icons/PaperAirplane";
import {useRef, useState} from "react";
import { useClickAway } from "react-use";
import EmojiPicker from "../EmojiPicker";
import Smile from "../../icons/Smile";

const ChatFooter = (props) => {
    const { onSubmit } = props;
    const [newMessage, setNewMessage] = useState('')
    const [showEmojiPicker, setShowEmojiPicker] = useState(false)
    const emojiPickerRef = useRef(null)
    useClickAway(emojiPickerRef, () => {
        setShowEmojiPicker(false);
    });
    const handleEmojiSelect = (emoji) => {
        setNewMessage((prevMessage) => prevMessage + emoji);
    };

    return (
        <div className="border-t border-gray-200 flex px-3">
            <button className="relative p-4" onClick={() => setShowEmojiPicker(true)}>
                {showEmojiPicker && (
                    <div ref={emojiPickerRef} className="absolute left-0 bottom-12">
                        <EmojiPicker onEmojiSelect={handleEmojiSelect} />
                    </div>
                )}
                <Smile />
            </button>
            <input
                className="grow text-sm"
                type="text"
                placeholder="Start typing..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
            />
            <button onClick={() => setNewMessage((prevMessage) => prevMessage + '@')}>@</button>
            <button
                className={`p-4 disabled:text-gray-400 text-blue-500`}
                disabled={!newMessage.length}
                onClick={() => {
                    onSubmit(newMessage)
                    setNewMessage('')
                }}
            ><PaperAirplane /></button>
        </div>
    )
}

export default ChatFooter
