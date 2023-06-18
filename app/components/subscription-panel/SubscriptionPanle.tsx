import Image from "next/image";

export const SubscriptionPanel = ({
  title,
  description,
  image,
}: TSubscriptionPanel) => (
  <div className="bg-gray-300 w-full h-auto dark:bg-gray-600 flex flex-col space-y-6 items-center p-6 rounded overflow-hidden">
    <span className="text-gray-700 dark:text-gray-300 text-sm text-center">
      {title}
    </span>
    <div className="flex justify-between w-full">
      <img
        src={image}
        alt="title"
        // width={64}
        // height={64}
        className="bg-gray-400 w-16 h-16 rounded-full"
      />
      <div className="bg-gray-400 w-16 h-16 rounded-full"></div>
    </div>
    <span className="text-gray-700 dark:text-gray-300 text-center md:text-sm sm:text-xs">
      {description}
    </span>
    <button className="border border-blue-500 text-blue-500  py-1 px-4 rounded-2xl">
      Follow
    </button>
  </div>
);

export type TSubscriptionPanel = {
  title: string;
  description: string;
  image: string;
};
