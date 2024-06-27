import { EditJob } from "./EditJob";
import { JobPreview } from "./JodPreview";

export const Hero = () => {
  return (
    <>
      <div className=" border-b-2 p-4 ">
        <div className="flex space-x-6 text-md  text-title-text-color ml-16">
          <div className="text-custom-red font-semibold  flex justify-center border-custom-red cursor-pointer ">
            Job preview
          </div>
          <div className="flex justify-center cursor-pointer">Applicants</div>
          <div className="flex justify-center cursor-pointer">Match</div>
          <div className="flex justify-center cursor-pointer">Messages</div>
        </div>
      </div>
      <div className="grid grid-cols-4">
        <div className=" col-span-3">
          <div className="">
            <JobPreview />
          </div>
        </div>
        <EditJob></EditJob>
      </div>
    </>
  );
};
