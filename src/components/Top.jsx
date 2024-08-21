import React from 'react';

const Top = () => {
  return (
    <div className='container-full bg-zinc-700 h-30 p-5 flex justify-between pt-10 pl-36 pr-36'>
      <div className='container mx-auto p-4'>
        <h1 className='text-3xl font-bold whitespace-nowrap text-sm text-white md:font-bold '>
          THE SMS CENTERAL
        </h1>
        <p className='text-3xl font-bold whitespace-nowrap text-red-400 text-sm text-red-400 font-semibold'>
          Nepal#1 Bulk SMS Service Provider
        </p>
      </div>

      <div>
        <style>
          {`
            .custom-button {
              background-color: gray;
              color: white;
              padding: 10px 20px;
              border: none;
              border-radius: 10px;
              cursor: pointer;
              font-size: 12px;
              font-weight: bold;
              position: relative;
              overflow: hidden;
              transition: transform 0.5s ease, background-color 0.5s ease;
            }

            .custom-button::before {
              content: '';
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              height: 3px;
              background-color: green;
              transition: bottom 0.5s ease;
            }

            .custom-button:hover {
              transform: translateY(-5px);
              background-color: darkgray;
              transition-delay: 0.3s;
            }

            .custom-button:hover::before {
              bottom: -5px;
              transition-delay: 0.3s;
            }

            .pl-40 {
              padding-left: 40px;
            }

            .p-10 {
              padding: 10px;
            }
          `}
        </style>

        <button className="w-44 custom-button md: w-full pl-40 p-10 ">
          SMS CLIENT LOGIN
        </button>
      </div>
    </div>
  );
};

export default Top;
