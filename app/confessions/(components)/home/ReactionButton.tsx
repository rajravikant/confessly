import { SmilePlus } from 'lucide-react';
import React, { useState } from 'react';
import { AnimatePresence,motion } from 'motion/react';
interface ReactionButtonProps {
    onReact?: () => void;
}

const ReactionButton: React.FC<ReactionButtonProps> = () => {

    const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
    const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);
    return (
        <div className="relative">
            <button
                onClick={()=>setIsEmojiPickerOpen(!isEmojiPickerOpen)}
                className="reaction-button p-1.5 bg-white/10 rounded-full hover:bg-white/20 cursor-pointer "
            >
                <span>{selectedEmoji || <SmilePlus size={20} className='text-white' />}</span>
            </button>
            <AnimatePresence>
                {isEmojiPickerOpen && (
                    <motion.div
                        initial={{ opacity: 0  }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0  }}
                        transition={{ duration: 0.2 }}
                        className="absolute -bottom-[3rem] left-0 z-10"
                    >
                        <EmojiPicker setSelectedEmoji={setSelectedEmoji} setIsOpen={setIsEmojiPickerOpen} />
                    </motion.div>
                )}
            </AnimatePresence>
            {/* {isEmojiPickerOpen && (
                <div className="absolute -bottom-[3rem] left-0 z-10">
                    <EmojiPicker setSelectedEmoji={setSelectedEmoji} setIsOpen={setIsEmojiPickerOpen} />
                </div>
            )} */}
        </div>
       
    );
};

export default ReactionButton;

const EmojiPicker = ({ setSelectedEmoji, setIsOpen }: { setSelectedEmoji: (emoji: string) => void, setIsOpen: (isOpen: boolean) => void }) => {
    
    return (
        <div className="emoji-picker flex  gap-2 p-2 bg-gray-800 rounded-lg shadow-lg">
            {emojis.map((emoji) => (
                <span
                    key={emoji}
                    className="emoji-item  cursor-pointer hover:scale-125 transition-transform duration-200"
                    onClick={() => {
                        setSelectedEmoji(emoji);
                        
                        setIsOpen(false);
                        // onReact(); // Call the onReact function if needed
                    }}
                >
                    {emoji}
                </span>
            ))}
        </div>
    );
}

const emojis = ['😊', '😂', '❤️', '👾' , '😎'];


{/* <button
onClick={()=>setIsEmojiPickerOpen(!isEmojiPickerOpen)}
className="reaction-button p-1.5 bg-white/10 rounded-full hover:bg-white/20 "
>
<span><SmilePlus size={20} className='text-white' /></span>
</button> */}