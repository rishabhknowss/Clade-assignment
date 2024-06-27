import figma from "../assets/figma-logo.png";
import illustrator from "../assets/illustrator-logo.png";
import adobexd from "../assets/adobexd-logo.png";
import { Company } from "./Company";
export const JobPreview = () => {
  const jobDescription = [
    { description: "Handle the UI/UX research design", key: 1 },
    {
      description:
        "Work on researching on latest web applications designs & trends",
      key: 2,
    },
    { description: "Work on conceptualizing and visualizing", key: 3 },
    {
      description:
        "Work on creating graphics content and other graphic related works",
      key: 4,
    },
  ];
  return (
    <div className="grid grid-cols-1">
      <div className="border-b">
        <div className="mt-8 mx-16">
          <div className="flex">
            <div className="flex flex-col justify-center font-bold text-3xl text-job-text-color">
              Senior Product Designer
            </div>
            <div className="  flex flex-col justify-center">
              <div className=" h-1 w-1 rounded-full bg-title-text-color mx-2 font-extralight "></div>
            </div>
            <div className="flex flex-col justify-center text-xs text-title-text-color ">
              posted 2 days ago
            </div>
            <div className="flex flex-col justify-center">
              <div className="mx-2 flex border rounded-full bg-green-100 text-green-700 border-green-200 p-1 h-4 w-fit">
                <div className="  flex flex-col justify-center">
                  <div className=" h-1 w-1 rounded-full bg-green-700 mx-1 font-extralight"></div>
                </div>
                <div className="flex flex-col justify-center text-xs mr-1">
                  Open
                </div>
              </div>
            </div>
          </div>
          <div className="flex space-x-3 my-6 text-title-text-color font-medium">
            <div className="flex space-x-2">
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
              <div>Delaware,USA</div>
            </div>

            <div className="flex flex-col justify-center">
              <div className=" h-1 w-1 rounded-full bg-title-text-color font-extralight "></div>
            </div>
            <div className="flex space-x-2">
              <div className="flex">
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
              </div>
              <div>$300k-$400k</div>
            </div>
          </div>

          <div></div>
        </div>
        <div></div>
      </div>
      <div className=" border-b">
        <div className="flex space-x-16 mx-16 my-6 text-xs text-title-text-color font-medium">
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
          <div className="grid grid-cols-1">
            <div>Preferred Language</div>
            <div className="font-bold text-job-text-color text-sm">English</div>
          </div>
          <div className="grid grid-cols-1">
            <div>Type</div>
            <div className="font-bold text-job-text-color  text-sm">
              Full Time
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div>Year of Experience</div>
            <div className="font-bold text-job-text-color text-sm">
              3+ Years of Experience
            </div>
          </div>
        </div>
      </div>
      <div className="border-b">
        <div className="mx-16 my-6">
          <div className="text-xs text-title-text-color font-semibold">
            About the job
          </div>
          <div className="text-sm my-2">
            <ol>
              {jobDescription.map((jd) => {
                return (
                  <li key={jd.key} className="my-1">
                    {jd.key}. {jd.description}
                  </li>
                );
              })}
            </ol>
            <div>Benifits:</div>
            <div className="flex mx-2">
              <div className="flex flex-col justify-center mr-2">
                <div className=" h-1 w-1 rounded-full bg-black font-extralight "></div>
              </div>
              <div className="my-1">Health Insurance</div>
            </div>
            <div className="flex mx-2">
              <div className="flex flex-col justify-center mr-2">
                <div className=" h-1 w-1 rounded-full bg-black font-extralight "></div>
              </div>
              <div className="my-1">Provident Fund</div>
            </div>
            <div>Schedule:</div>
            <div className="flex mx-2">
              <div className="flex flex-col justify-center mr-2">
                <div className=" h-1 w-1 rounded-full bg-black font-extralight "></div>
              </div>
              <div className="my-1">Day shift</div>
            </div>
            <div>Supplemental pay types:</div>
            <div className="flex mx-2">
              <div className="flex flex-col justify-center mr-2">
                <div className=" h-1 w-1 rounded-full bg-black font-extralight "></div>
              </div>
              <div className="my-1">Performance bonus</div>
            </div>
            <div className="flex mx-2">
              <div className="flex flex-col justify-center mr-2">
                <div className=" h-1 w-1 rounded-full bg-black font-extralight "></div>
              </div>
              <div className="my-1">Yearly bonus</div>
            </div>
            <div>Work Location: In preson</div>
          </div>
        </div>
      </div>
      <div>
        <Company></Company>
      </div>
    </div>
  );
};
