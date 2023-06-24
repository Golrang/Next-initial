const ProfilePanelDetail = () => {
    return (
            <div className="flex flex-col space-y-4 justify-center items-center pb-4">
                <span className="font-bold">Zahra Sherinpour</span>
                <span className="text-gray-600">Front end developer at Golrang System</span>
            </div>
    )
}

const ProfilePanelIntractionRow = () => {
    return (
        <div className="flex justify-between items-center">
                <span className="text-gray-600 font-bold">Who's viwed your profile</span>
                <span className="text-blue-400 font-bold">76</span>
            </div>
    )
}

const ProfilePanelIntraction = () => {
    return (
        <div className="flex flex-col space-y-6 justify-center border-b border-t p-5">
            <ProfilePanelIntractionRow />
            <ProfilePanelIntractionRow />
        </div>
    )
}

const ProfilePanelMyItems = () => {
    return (
        <div className="flex flex-col item-center">
            my items
        </div>
    )
}

export const ProfilePanel = () => {
    return (
        <div className="rounded flex flex-col w-full h-auto border p-4">
            <ProfilePanelDetail />
            <ProfilePanelIntraction />
            <ProfilePanelMyItems />
        </div>
    )
}