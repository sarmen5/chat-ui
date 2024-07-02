import KebabHorizontal from "../../icons/KebabHorizontal";

const ChatHeader = (props) => {
    const { members } = props;

    return (
        <div className="relative flex justify-center items-center h-16 border-b border-gray-200">
            <div className="absolute left-3 flex">
                {members.map((item) => (
                    <div key={item.id} className="h-6 w-6 shrink-0 shadow-inner border border-white outline-1 outline-white rounded-full overflow-hidden -mr-1.5">
                        <img src={item.src} alt={item.name} className="object-cover" />
                    </div>
                ))}
            </div>

            <div className="text-center">
                <p className="font-semibold text-sm mb-1">Team Unicorns</p>
                <p className="text-gray-500 text-xs">last seen 45 minutes ago</p>
            </div>

            <button className="absolute right-3 p-3">
                <KebabHorizontal />
            </button>
        </div>
    )
}

export default ChatHeader
