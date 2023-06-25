const ProfilePanelDetail = ({name, position} : TProfilePanelDetail) => {
    return (
            <div className="flex flex-col space-y-4 justify-center items-center pb-4">
                <span className="font-bold">{name}</span>
                <span className="text-gray-600">{position}</span>
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

const ProfilePanelIntraction = ({} : TProfilePanelIntraction) => {
    return (
        <div className="flex flex-col space-y-6 justify-center border-b border-t p-5">
            <ProfilePanelIntractionRow />
            <ProfilePanelIntractionRow />
        </div>
    )
}

const ProfilePanelMyItems = ({} :TProfilePanelMyItems) => {
    return (
        <div className="flex flex-col item-center">
            my items
        </div>
    )
}

export const ProfilePanel = ({name, position, number_of_visit, number_of_immprestion, my_items}: TProfilePanel) => {
    return (
        <div className="rounded flex flex-col w-full h-auto border p-4">
            <ProfilePanelDetail name={name} position={position}/>
            <ProfilePanelIntraction number_of_visit={number_of_visit} number_of_immprestion={number_of_immprestion} />
            <ProfilePanelMyItems my_items={my_items}/>
        </div>
    )
}

type TProfilePanel ={
    name: string,
    position : string,
    number_of_visit : number,
    number_of_immprestion : number,
    my_items : string
}

type TProfilePanelDetail = Pick<TProfilePanel, "name" | "position">
type TProfilePanelIntraction = Pick<TProfilePanel, "number_of_visit" | "number_of_immprestion">
type TProfilePanelMyItems = Pick<TProfilePanel, "my_items">

  