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
          <div className="mx-4 md:mx-8 lg:mx-16 my-6">
            <div className="text-xs text-title-text-color font-semibold">
              About the job
            </div>
            <div className="text-sm my-2">
              <ol>
                {jobDescription.map((jd) => (
                  <li key={jd.key} className="my-1">
                    {jd.key}. {jd.description}
                  </li>
                ))}
              </ol>
              <div>Benefits:</div>
              {["Health Insurance", "Provident Fund"].map((benefit, index) => (
                <div key={index} className="flex mx-2">
                  <div className="flex flex-col justify-center mr-2">
                    <div className="h-1 w-1 rounded-full bg-black font-extralight"></div>
                  </div>
                  <div className="my-1">{benefit}</div>
                </div>
              ))}
              <div>Schedule:</div>
              <div className="flex mx-2">
                <div className="flex flex-col justify-center mr-2">
                  <div className="h-1 w-1 rounded-full bg-black font-extralight"></div>
                </div>
                <div className="my-1">Day shift</div>
              </div>
              <div>Supplemental pay types:</div>
              {["Performance bonus", "Yearly bonus"].map((payType, index) => (
                <div key={index} className="flex mx-2">
                  <div className="flex flex-col justify-center mr-2">
                    <div className="h-1 w-1 rounded-full bg-black font-extralight"></div>
                  </div>
                  <div className="my-1">{payType}</div>
                </div>
              ))}
              <div>Work Location: In person</div>
            </div>
          </div>
        </div>
      </>
    );
  };
  