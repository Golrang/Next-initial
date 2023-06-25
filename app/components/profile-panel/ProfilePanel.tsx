const ProfilePanelImage = () => {
  return (
    <div className="">
      <div className="relative mb-4 h-36 overflow-hidden rounded-lg">
        <img src="https://source.unsplash.com/random" alt="Background image" className="absolute inset-0 w-full h-full object-cover object-center" />
      </div>

      <div className="relative -mt-24">
        <img src="https://source.unsplash.com/user/erondu/200x200" alt="Profile picture" className="mx-auto border-4 border-white rounded-full w-32 h-32 object-cover object-center" />
      </div>
    </div>
  );
};

const ProfilePanelDetail = ({ name, position }: TProfilePanelDetail) => {
  return (
    <div className="flex flex-col space-y-4 justify-center items-center pb-4 mt-8">
      <span className="text-xl font-bold text-gray-800">{name}</span>
      <span className="text-sm text-gray-600">{position}</span>
    </div>
  );
};

const ProfilePanelInteractionRow = () => {
  return (
    <div className="flex justify-between items-center">
      <span className="text-sm text-gray-400">Who's viewed your profile</span>
      <span className="text-sm text-blue-400">76</span>
    </div>
  );
};

const ProfilePanelInteraction = ({}: TProfilePanelInteraction) => {
  return (
    <div className="flex flex-col space-y-6 justify-center border-b border-t p-5">
      <ProfilePanelInteractionRow />
      <ProfilePanelInteractionRow />
    </div>
  );
};

const ProfilePanelMyItems = ({}: TProfilePanelMyItems) => {
  return (
    <div className="inline-flex items-center p-4">
      <span className="flex-none mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="DimGray" className="bi bi-bookmark-fill" viewBox="0 0 16 16"  data-test-icon="bookmark-fill-small" data-supported-dps="16x16">
          <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
        </svg>
      </span>
      <span className="text-sm text-gray-400">My items</span>
    </div>
  );
};

export const ProfilePanel = ({ name, position, number_of_visit, number_of_impression: number_of_impression, my_items }: TProfilePanel) => {
  return (
    <div className="rounded flex flex-col w-full h-auto border bg-white shadow">
      <ProfilePanelImage />
      <ProfilePanelDetail name={name} position={position} />
      <ProfilePanelInteraction number_of_visit={number_of_visit} number_of_impression={number_of_impression} />
      <ProfilePanelMyItems my_items={my_items} />
    </div>
  );
};

type TProfilePanel = {
  name: string;
  position: string;
  number_of_visit: number;
  number_of_impression: number;
  my_items: string;
};

type TProfilePanelDetail = Pick<TProfilePanel, "name" | "position">;
type TProfilePanelInteraction = Pick<TProfilePanel, "number_of_visit" | "number_of_impression">;
type TProfilePanelMyItems = Pick<TProfilePanel, "my_items">;
