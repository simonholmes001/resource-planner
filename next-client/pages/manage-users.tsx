import React, { useState, useMemo, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useTheme } from "next-themes";

import Image from "next/image";

import { Button, Input } from "../components";

const manageUsers = () => {
  const [isCreateUserDisplayed, setIsCreateUserDisplayed] = useState(false);
  const [isEditUserDisplayed, setIsEditUserDisplayed] = useState(false);
  const [isDeleteUserDisplayed, setIsDeleteUserDisplayed] = useState(false);

  const { theme } = useTheme();

  const [fileUrl, setFileUrl] = useState(null);

  const [formInput, setFormInput] = useState({
    name_1: "",
    name_2: "",
    description: "",
  });

  const formSubmissionHandler = async (event: {
    preventDefault: () => void;
  }) => {
    event.preventDefault();

    const dataToSubmit = {
      name: formInput.name_1,
      imageUrl: formInput.name_2,
    };

    console.log(`NAME: ${formInput.name_1}`);
    console.log(`NAME: ${formInput.name_2}`);
    console.log(`DATA: ${JSON.stringify(dataToSubmit)}`);

    const response = await fetch("./api/create-user", {
      method: "POST",
      body: JSON.stringify(dataToSubmit),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(`DATA: ${JSON.stringify(data)}`);
  };

  const onDrop = useCallback(() => {
    // upload image to ipfs
  }, []);
  
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    maxSize: 5000000,
  });
  
  const fileStyle = useMemo(
    () =>
      `dark:bg-nft-black-1 bg-white border dark:border-white border-nft-gray-2 flex flex-col items-center p-5 rounded-sm border-dashed
        ${isDragActive && "border-file-active"}
        ${isDragAccept && "border-file-accept"}
        ${isDragReject && "border-file-reject"}`,
    [isDragActive, isDragAccept, isDragReject]
  );


  return (
    <div className="flex flex-col justify-center sm:px-4 p-12">
      <div className="flex justify-center dark:text-white text-nft-black-2 mt-10 font-semibold text-3xl">
        <h1 className="font-poppins">What do you want to do?</h1>
      </div>

      <div className="flex justify-center sm:px-4 p-12">
        <div className="mt-7 w-full flex justify-center">
          <Button
            type="button"
            btnName="Create User"
            classStyles="rounded-xl"
            handleClick={() => {
              setIsCreateUserDisplayed((current) => !current);
            }}
          />
        </div>
        <div className="mt-7 w-full flex justify-center">
          <Button
            type="button"
            btnName="Edit User"
            classStyles="rounded-xl"
            handleClick={() => {
              setIsEditUserDisplayed((current) => !current);
            }}
          />
        </div>

        <div className="mt-7 w-full flex justify-center">
          <Button
            type="button"
            btnName="Delete User"
            classStyles="rounded-xl"
            handleClick={() => {
              setIsDeleteUserDisplayed((current) => !current);
            }}
          />
        </div>
      </div>
      {isCreateUserDisplayed ? (
        <>
          <form
            action="/api/create-user"
            onSubmit={formSubmissionHandler}
            method="post"
          >
            <div className="grid justify-center w-full p-4">
              <Input
                inputType="input"
                id="name"
                title="Name"
                placeholder="User Name"
                handleClick={(e: { target: { value: any } }) => {
                  setFormInput({ ...formInput, name_1: e.target.value });
                }}
              />
              <Input
                inputType="input"
                id="imageUrl"
                title="Image URL"
                placeholder="Image URL"
                handleClick={(e: { target: { value: any } }) => {
                  setFormInput({ ...formInput, name_2: e.target.value });
                }}
              />
            </div>

            {/* Upload file section */}

            <div className="mt-16">
              <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">
                Upload file
              </p>
              <div className="mt-4">
                <div {...getRootProps()} className={fileStyle}>
                  <input {...getInputProps()} />
                  <div className="flexCenter flex-col text-center">
                    <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">
                      JPG, PNG, GIF, SVG, WEBM, max 100MB
                    </p>
                    <div className="my-12 w-full flex justify-center">
                      <Image
                        src={""}
                        alt="file upload"
                        width={100}
                        height={100}
                        objectFit="contain"
                        className={theme === "light" && "filter invert"}
                      />
                    </div>
                    <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-sm">
                      Drag and drop your file
                    </p>
                    <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-sm mt-2">
                      Or browse media on your device
                    </p>
                  </div>
                </div>
                {fileUrl && (
                  <aside>
                    <div>
                      <img src={fileUrl} alt="asset_file" />
                    </div>
                  </aside>
                )}
              </div>
            </div>

            <div className="mt-7 w-full flex justify-end">
              <Button
                type="submit"
                btnName="Create"
                classStyles="rounded-xl"
                handleClick={() => {}}
              />
            </div>
          </form>
        </>
      ) : isEditUserDisplayed ? (
        <>
          <form
            action="/api/create-user"
            onSubmit={formSubmissionHandler}
            method="post"
          >
            <div className="grid justify-center w-full p-4">
              <Input
                inputType="input"
                id="name"
                title="Name"
                placeholder="User Name"
                handleClick={(e: { target: { value: any } }) => {
                  setFormInput({ ...formInput, name_1: e.target.value });
                }}
              />
              <Input
                inputType="input"
                id="imageUrl"
                title="Image URL"
                placeholder="Image URL"
                handleClick={(e: { target: { value: any } }) => {
                  setFormInput({ ...formInput, name_2: e.target.value });
                }}
              />
            </div>
            <div className="mt-7 w-full flex justify-end">
              <Button
                type="submit"
                btnName="Edit"
                classStyles="rounded-xl"
                handleClick={() => {}}
              />
            </div>
          </form>
        </>
      ) : isDeleteUserDisplayed ? (
        <>
          <form
            action="/api/create-user"
            onSubmit={formSubmissionHandler}
            method="post"
          >
            <div className="grid justify-center w-full p-4">
              <Input
                inputType="input"
                id="name"
                title="Name"
                placeholder="User Name"
                handleClick={(e: { target: { value: any } }) => {
                  setFormInput({ ...formInput, name_1: e.target.value });
                }}
              />
              <Input
                inputType="input"
                id="imageUrl"
                title="Image URL"
                placeholder="Image URL"
                handleClick={(e: { target: { value: any } }) => {
                  setFormInput({ ...formInput, name_2: e.target.value });
                }}
              />
            </div>
            <div className="mt-7 w-full flex justify-end">
              <Button
                type="submit"
                btnName="Delete"
                classStyles="rounded-xl"
                handleClick={() => {}}
              />
            </div>
          </form>
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default manageUsers;
