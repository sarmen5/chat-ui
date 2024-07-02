import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import React from 'react'

const EmojiPicker = ({onEmojiSelect}) => {
    const handleEmojiSelect = (emoji) => {
        onEmojiSelect(emoji.native)
    };

    return <Picker data={data} onEmojiSelect={handleEmojiSelect}/>
}

export default EmojiPicker
