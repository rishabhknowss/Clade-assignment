import { useState } from "react";

const menuItem = ["Job preview", "Applicants", "Match", "Messages"];
export const TitleBar = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="border-b">
      <div className="mx-4 md:mx-16 flex items-center gap-4 md:gap-16 overflow-auto pr-2">
        {menuItem.map((item, index) => {
          return (
            <button
              key={index}
              className={`text-md py-3 px-1 whitespace-nowrap ${
                index === active
                  ? "text-custom-red font-extrabold border-b-2 border-custom-red"
                  : "text-gray-500 font-semibold"
              }`}
              onClick={() => setActive(index)}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};
