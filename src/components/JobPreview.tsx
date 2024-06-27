import { AboutTheJob } from "./AboutTheJob";
import { CompanyDescription } from "./CompanyDescription";
import { JobTitle } from "./JobTitle";
import { Requirement } from "./Requirement";

export const JobPreview = () => {
  return (
    <div>
      <JobTitle />
      <Requirement />
      <AboutTheJob />
      <CompanyDescription />
    </div>
  );
};
