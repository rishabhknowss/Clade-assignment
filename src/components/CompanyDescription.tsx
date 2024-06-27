import logo from "../assets/image.png";

export const CompanyDescription = () => {
  return (
    <>
      <div className="">
        <div className="mt-8 mx-4 md:mx-8 lg:mx-16">
          <div className="flex">
            <img src={logo} className="h-8 w-8 rounded-md" alt="Company Logo" />
            <div className="flex flex-col justify-center mx-3 text-lg">
              Atlassian
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 my-6 text-xs text-title-text-color font-medium">
            <div className="grid grid-cols-1">
              <div>
                <div>Company Size</div>
                <div className="my-2 text-sm text-black">1k-2k Employees</div>
              </div>
              <div>
                <div>Sector</div>
                <div className="my-2 text-sm text-black">
                  Information Technology, Infrastructure
                </div>
              </div>
              <div>
                <div>Founded In</div>
                <div className="my-2 text-sm text-black">2019</div>
              </div>
            </div>
            <div className="grid grid-cols-1">
              <div>
                <div>Type</div>
                <div className="my-2 text-sm text-black">Private</div>
              </div>
              <div>
                <div>Funding</div>
                <div className="my-2 text-sm text-black">Bootstrapped</div>
              </div>
              <div>
                <div>Founded By</div>
                <div className="my-2 text-sm text-black">
                  Scott Farquhar, Mike Cannon-Brookes
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
