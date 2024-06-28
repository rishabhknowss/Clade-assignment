import { EditPanel } from "../components/EditPanel";
import { JobPreview } from "../components/JobPreview";
import { TitleBar } from "../components/TitleBar";

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
