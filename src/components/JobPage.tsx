import { EditPanel } from "./EditPanel";
import { JobPreview } from "./JobPreview";
import { TitleBar } from "./TitleBar";

export const JobPage = () => {
  return (
    <>
      <TitleBar />
      <div className="grid grid-cols-1 lg:grid-cols-4  ">
        <div className="col-span-1 lg:col-span-3">
          <JobPreview />
        </div>
        <EditPanel />
      </div>
    </>
  );
};
