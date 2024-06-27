import { AboutTheJob } from "./AboutTheJob";
import { CompanyDescription } from "./CompanyDescription";
import { JobTitle } from "./JobTitle";
import { Requirement } from "./Requirement";

export const JobPreview = () => {
  return (
    <div className="p-4">
      <JobTitle />
      <Requirement />
      <AboutTheJob />
      <CompanyDescription />
    </div>
  );
};
