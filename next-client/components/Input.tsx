import React from "react";

interface inputStyles {
  id?: string;
  inputType?: string;
  title?: string;
  placeholder?: string;
  handleClick: any;
}

const Input = ({ id, inputType, title, placeholder, handleClick }: inputStyles) => {
  return (
    <div className="flex justify-center items-end">
      <div className=" p-2 mr-2 w-3/5">
        <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">
          {title}
        </p>
      </div>
      {inputType === "number" ? (
        <div
          className="dark:bg-nft-black-1 bg-white border dark:border-nft-black-1 border-nft-gray-2 
        rounded-lg w-full outline-none font-poppins dark:text-white text-nft-gray-2 text-base mt-4 px-4 py-3 flexBetween flex-row"
        >
          <input
            type="number"
            className="flex w-full dark:bg-nft-black-1 bg-white outline-none"
            placeholder={placeholder}
            onChange={handleClick}
          />
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">
            ADA
          </p>
        </div>
      ) : inputType === "textarea" ? (
        <textarea
          rows={10}
          className="dark:bg-nft-black-1 bg-white border dark:border-nft-black-1 border-nft-gray-2 
        rounded-lg w-full outline-none font-poppins dark:text-white text-nft-gray-2 text-base mt-4 px-4 py-3"
          placeholder={placeholder}
          onChange={handleClick}
        />
      ) : (
        <input
          className="dark:bg-nft-black-1 bg-white border dark:border-nft-black-1 border-nft-gray-2 
        rounded-lg w-full outline-none font-poppins dark:text-white text-nft-gray-2 text-base mt-4 px-4 py-3"
          type="text"
          id={id}
          placeholder={placeholder}
          onChange={handleClick}
        />
      )}
    </div>
  );
};

export default Input;
