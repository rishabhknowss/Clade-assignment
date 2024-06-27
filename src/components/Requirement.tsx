import figma from "../assets/figma-logo.png";
import illustrator from "../assets/illustrator-logo.png";
import adobexd from "../assets/adobexd-logo.png";
export const Requirement = () => {
  return (
    <>
      <div className=" border-b">
        <div className="grid grid-cols-4 mx-16 my-6 text-xs text-title-text-color font-bold">
          <div>
            <div className="grid grid-cols-1">
              <div>Skills Required</div>
              <div className=" text-job-text-color mt-2 text-xs border rounded-md w-fit p-1 flex">
                <div className="flex flex-col justify-center">
                  <img src={figma} className="h-3 w-3 mr-1"></img>
                </div>
                <div>Figma</div>
              </div>
              <div className=" text-job-text-color mt-2 text-xs border rounded-md w-fit p-1 flex">
                <div className="flex flex-col justify-center">
                  <img src={illustrator} className="h-3 w-3 mr-1 "></img>
                </div>
                <div>Adobe Illustrator</div>
              </div>
              <div className=" text-job-text-color mt-2 text-xs border rounded-md w-fit p-1 flex">
                <div className="flex flex-col justify-center">
                  <img src={adobexd} className="h-3 w-3 mr-1 "></img>
                </div>
                <div>Adobe XD </div>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1">
              <div>Preferred Language</div>
              <div className="font-bold text-job-text-color text-sm">
                English
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1">
              <div>Type</div>
              <div className="font-bold text-job-text-color  text-sm">
                Full Time
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1">
              <div>Year of Experience</div>
              <div className="font-bold text-job-text-color text-sm">
                3+ Years of Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
