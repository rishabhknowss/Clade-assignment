import logo from "../assets/image.png";
export const Company = () => {
  return (
    <>
      <div className="border border-r-2">
        <div className="mt-8 mx-16">
          <div className="flex">
            <img src={logo} className="h-8 w-8 rounded-md"></img>
            <div className="flex flex-col justify-center mx-3 text-lg ">
              Atlassian
            </div>
          </div>
          <div className="grid grid-cols-2 gap-0 my-6 text-xs text-title-text-color font-medium">
            <div className="grid grid-cols-1">
              <div>
                <div>Company Size</div>
                <div className="my-2 text-sm text-black">1k-2k Exployees</div>
              </div>
              <div>
                {" "}
                <div>Sector</div>
                <div className="my-2 text-sm text-black">
                  Information Technology,Infrastructure
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
                {" "}
                <div>Sector</div>
                <div className="my-2 text-sm text-black">Bootstrapped</div>
              </div>
              <div>
                <div>Founded By</div>
                <div className="my-2 text-sm text-black">
                  Scott Farquhar,Mike Cannon-Brookes
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};
