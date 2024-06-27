export const AboutTheJob = () => {
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
    <>
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
    </>
  );
};
