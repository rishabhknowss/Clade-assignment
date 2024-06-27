import { Open } from "./Badge-open";

export const JobTitle = () => {
  return (
    <div className="border-b mb-4">
      <div className="mt-8 lg:mx-16 mx-4">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="font-job text-3xl text-job-text-color">Senior Product Designer</div>
          <div className="flex items-center mt-2 lg:mt-0 lg:ml-4">
            <div className="h-1 w-1 rounded-full bg-title-text-color mx-2 font-extralight"></div>
            <div className="text-xs text-title-text-color font-semibold">posted 2 days ago</div>
            <Open />
          </div>
        </div>
        <div className="flex flex-wrap space-x-3 my-6 text-title-text-color font-medium">
          <div className="flex space-x-2 items-center">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 13.5C13.6569 13.5 15 12.1569 15 10.5C15 8.84315 13.6569 7.5 12 7.5C10.3431 7.5 9 8.84315 9 10.5C9 12.1569 10.3431 13.5 12 13.5Z"
                stroke="#5D5D5D"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 22.5C16 18.5 20 14.9183 20 10.5C20 6.08172 16.4183 2.5 12 2.5C7.58172 2.5 4 6.08172 4 10.5C4 14.9183 8 18.5 12 22.5Z"
                stroke="#5D5D5D"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className="font-semibold">Delaware, USA</div>
          </div>
          <div className="flex items-center space-x-2">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 5.5C13 6.60457 10.5376 7.5 7.5 7.5C4.46243 7.5 2 6.60457 2 5.5M13 5.5C13 4.39543 10.5376 3.5 7.5 3.5C4.46243 3.5 2 4.39543 2 5.5M13 5.5V7M2 5.5V17.5C2 18.6046 4.46243 19.5 7.5 19.5M7.5 11.5C7.33145 11.5 7.16468 11.4972 7 11.4918C4.19675 11.4 2 10.5433 2 9.5M7.5 15.5C4.46243 15.5 2 14.6046 2 13.5M22 12C22 13.1046 19.5376 14 16.5 14C13.4624 14 11 13.1046 11 12M22 12C22 10.8954 19.5376 10 16.5 10C13.4624 10 11 10.8954 11 12M22 12V19.5C22 20.6046 19.5376 21.5 16.5 21.5C13.4624 21.5 11 20.6046 11 19.5V12M22 15.75C22 16.8546 19.5376 17.75 16.5 17.75C13.4624 17.75 11 16.8546 11 15.75"
                stroke="#5D5D5D"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className="font-semibold">$300k-$400k</div>
          </div>
        </div>
      </div>
    </div>
  );
};
