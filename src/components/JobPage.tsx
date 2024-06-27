import { EditPanel } from "./EditPanel";
import { JobPreview } from "./JobPreview";
import { TitleBar } from "./TitleBar";

export const JobPage = () => {
  return (
    <>
      <TitleBar />
      <div className="grid grid-cols-4">
        <div className=" col-span-3">
          <div>
            <JobPreview />
          </div>
        </div>
        <EditPanel />
      </div>
    </>
  );
};
