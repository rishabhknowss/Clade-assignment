import logo from "../assets/image.png";
export const Navbar = () => {
  return (
    <div className="flex justify-between border-b py-4 px-6">
      <div className="flex items-center">
        <div className="bg-logo-bg w-fit px-5 py-2 text-custom-red font-semibold flex items-center justify-center cursor-pointer">
          Logo
        </div>
      </div>

      <div className="flex items-center space-x-4 rounded-full border p-2 cursor-pointer">
        <div className="text-white bg-custom-red px-3 border-red-300 border-2 rounded-full flex items-center justify-center p-2">
          <div className="h-6 mr-1">
            <svg
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 19.5V5.5C7 4.57003 7 4.10504 7.10222 3.72354C7.37962 2.68827 8.18827 1.87962 9.22354 1.60222C9.60504 1.5 10.07 1.5 11 1.5C11.93 1.5 12.395 1.5 12.7765 1.60222C13.8117 1.87962 14.6204 2.68827 14.8978 3.72354C15 4.10504 15 4.57003 15 5.5V19.5M4.2 19.5H17.8C18.9201 19.5 19.4802 19.5 19.908 19.282C20.2843 19.0903 20.5903 18.7843 20.782 18.408C21 17.9802 21 17.4201 21 16.3V8.7C21 7.57989 21 7.01984 20.782 6.59202C20.5903 6.21569 20.2843 5.90973 19.908 5.71799C19.4802 5.5 18.9201 5.5 17.8 5.5H4.2C3.07989 5.5 2.51984 5.5 2.09202 5.71799C1.71569 5.90973 1.40973 6.21569 1.21799 6.59202C1 7.01984 1 7.57989 1 8.7V16.3C1 17.4201 1 17.9802 1.21799 18.408C1.40973 18.7843 1.71569 19.0903 2.09202 19.282C2.51984 19.5 3.0799 19.5 4.2 19.5Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-col justify-center font-bold">Jobs</div>
        </div>
        <div className=" px-4 rounded-full flex items-center justify-center p-2  cursor-pointer ">
          <div className="h-6 mr-1">
          
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 8.3C3 6.61984 3 5.77976 3.32698 5.13803C3.6146 4.57354 4.07354 4.1146 4.63803 3.82698C5.27976 3.5 6.11984 3.5 7.8 3.5H16.2C17.8802 3.5 18.7202 3.5 19.362 3.82698C19.9265 4.1146 20.3854 4.57354 20.673 5.13803C21 5.77976 21 6.61984 21 8.3V13.7C21 15.3802 21 16.2202 20.673 16.862C20.3854 17.4265 19.9265 17.8854 19.362 18.173C18.7202 18.5 17.8802 18.5 16.2 18.5H9.68375C9.0597 18.5 8.74767 18.5 8.44921 18.5613C8.18443 18.6156 7.9282 18.7055 7.68749 18.8285C7.41617 18.9671 7.17252 19.162 6.68521 19.5518L4.29976 21.4602C3.88367 21.7931 3.67563 21.9595 3.50054 21.9597C3.34827 21.9599 3.20422 21.8906 3.10923 21.7716C3 21.6348 3 21.3684 3 20.8355V8.3Z"
                stroke="#B0B0B0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <svg
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                
              </svg>
              <circle cx="3" cy="3" r="3" fill="#DC4A2D" />
             
            </svg>
          </div>
          <div className="text-nav-text-color font-bold">Messages</div>
        </div>
        <div className=" px-4 rounded-full flex items-center justify-center p-2  cursor-pointer">
          <div className="h-6 mr-1">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5295 8.85186C12.9571 9.25995 12.2566 9.5 11.5 9.5C9.567 9.5 8 7.933 8 6C8 4.067 9.567 2.5 11.5 2.5C12.753 2.5 13.8522 3.15842 14.4705 4.14814M6 20.5872H8.61029C8.95063 20.5872 9.28888 20.6277 9.61881 20.7086L12.3769 21.3789C12.9753 21.5247 13.5988 21.5388 14.2035 21.4214L17.253 20.8281C18.0585 20.6712 18.7996 20.2854 19.3803 19.7205L21.5379 17.6217C22.154 17.0234 22.154 16.0524 21.5379 15.4531C20.9832 14.9134 20.1047 14.8527 19.4771 15.3103L16.9626 17.1449C16.6025 17.4081 16.1643 17.5498 15.7137 17.5498H13.2855L14.8311 17.5498C15.7022 17.5498 16.4079 16.8633 16.4079 16.0159V15.7091C16.4079 15.0055 15.9156 14.392 15.2141 14.2219L12.8286 13.6417C12.4404 13.5476 12.0428 13.5 11.6431 13.5C10.6783 13.5 8.93189 14.2988 8.93189 14.2988L6 15.5249M20 7C20 8.933 18.433 10.5 16.5 10.5C14.567 10.5 13 8.933 13 7C13 5.067 14.567 3.5 16.5 3.5C18.433 3.5 20 5.067 20 7ZM2 15.1L2 20.9C2 21.4601 2 21.7401 2.10899 21.954C2.20487 22.1422 2.35785 22.2951 2.54601 22.391C2.75992 22.5 3.03995 22.5 3.6 22.5H4.4C4.96005 22.5 5.24008 22.5 5.45399 22.391C5.64215 22.2951 5.79513 22.1422 5.89101 21.954C6 21.7401 6 21.4601 6 20.9V15.1C6 14.5399 6 14.2599 5.89101 14.046C5.79513 13.8578 5.64215 13.7049 5.45399 13.609C5.24008 13.5 4.96005 13.5 4.4 13.5L3.6 13.5C3.03995 13.5 2.75992 13.5 2.54601 13.609C2.35785 13.7049 2.20487 13.8578 2.10899 14.046C2 14.2599 2 14.5399 2 15.1Z"
                stroke="#B0B0B0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="text-nav-text-color font-bold">Payments</div>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <div className=" cursor-pointer">
            <svg
              width="28"
              height="28"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <svg
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3" cy="3" r="3" fill="#DC4A2D" />
              </svg>
              <path
                d="M18.6666 28H13.3333M23.9999 10.6667C23.9999 8.54496 23.1571 6.51012 21.6568 5.00983C20.1565 3.50954 18.1217 2.66669 15.9999 2.66669C13.8782 2.66669 11.8434 3.50954 10.3431 5.00983C8.8428 6.51012 7.99994 8.54496 7.99994 10.6667C7.99994 14.7869 6.96057 17.608 5.7995 19.4739C4.82011 21.0479 4.33042 21.8348 4.34838 22.0544C4.36826 22.2975 4.41976 22.3902 4.61564 22.5355C4.79256 22.6667 5.59006 22.6667 7.18508 22.6667H24.8148C26.4098 22.6667 27.2073 22.6667 27.3842 22.5355C27.5801 22.3902 27.6316 22.2975 27.6515 22.0544C27.6695 21.8348 27.1798 21.0479 26.2004 19.4739C25.0393 17.608 23.9999 14.7869 23.9999 10.6667Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <img src={logo} className="h-8 w-8 rounded-full  cursor-pointer "></img>
        <div className=" cursor-pointer">
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1.5L6 6.5L11 1.5"
              stroke="black"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
