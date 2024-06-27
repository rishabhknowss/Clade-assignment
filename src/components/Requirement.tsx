import figma from "../assets/figma-logo.png";
import illustrator from "../assets/illustrator-logo.png";
import adobexd from "../assets/adobexd-logo.png";

export const Requirement = () => {
  return (
    <div className="border-b mb-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-4 lg:mx-16 my-6 text-xs text-title-text-color font-bold">
        <div>
          <div className="grid grid-cols-1">
            <div>Skills Required</div>
            <div className="text-job-text-color mt-2 text-xs border rounded-md w-fit p-1 flex items-center">
              <img src={figma} className="h-3 w-3 mr-1"></img>
              <div>Figma</div>
            </div>
            <div className="text-job-text-color mt-2 text-xs border rounded-md w-fit p-1 flex items-center">
              <img src={illustrator} className="h-3 w-3 mr-1"></img>
              <div>Adobe Illustrator</div>
            </div>
            <div className="text-job-text-color mt-2 text-xs border rounded-md w-fit p-1 flex items-center">
              <img src={adobexd} className="h-3 w-3 mr-1"></img>
              <div>Adobe XD</div>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1">
            <div>Preferred Language</div>
            <div className="font-bold text-job-text-color text-sm">English</div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1">
            <div>Type</div>
            <div className="font-bold text-job-text-color text-sm">Full Time</div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1">
            <div>Experience</div>
            <div className="font-bold text-job-text-color text-sm">7+ years</div>
          </div>
        </div>
      </div>
    </div>
  );
};
