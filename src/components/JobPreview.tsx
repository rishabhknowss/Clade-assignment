import { AboutTheJob } from "./AboutTheJob";
import { CompanyDesc } from "./CompanyDescription";
import { Jobtitle } from "./JobTitle";
import { Requirement } from "./Requirement";
export const JobPreview = () => {
  return (
    <>
      <Jobtitle />
      <Requirement />
      <AboutTheJob />
      <CompanyDesc />
    </>
  );
};
