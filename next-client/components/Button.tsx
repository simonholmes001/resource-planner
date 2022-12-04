import React from "react";

interface classStyles {
  type?: any;
  classStyles?: string;
  btnName?: string;
  handleClick?: any;
}

const Button = ({ type, classStyles, btnName, handleClick }: classStyles) => {
  return (
    <button
      type={type}
      className={
        btnName === "Delete" ? (
        `bg-red-800 text-sm minlg:text-lg py-2 px-6 minlg:px-8 font-poppins font-semibold text-white ${classStyles}`) : 
      ( `nft-gradient text-sm minlg:text-lg py-2 px-6 minlg:px-8 font-poppins font-semibold text-white ${classStyles}`)
      }
      onClick={handleClick}
    >
      {btnName}
    </button>
  );
};

export default Button;
