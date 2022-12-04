import React, { useState } from "react";

import { Button, Input } from "../components";

const manageProjects = () => {
  const [isCreateProjectDisplayed, setIsCreateProjectDisplayed] =
    useState(false);
  const [isEditProjectDisplayed, setIsEditProjectDisplayed] = useState(false);
  const [isDeleteProjectDisplayed, setIsDeleteProjectDisplayed] =
    useState(false);

  const [formInput, setFormInput] = useState({
    name_1: "",
    name_2: "",
    name_3: "",
    name_4: "",
    name_5: "",
    name_6: "",
    name_7: "",
    description: "",
  });

  const formSubmissionHandler = async (event: {
    preventDefault: () => void;
  }) => {
    event.preventDefault();

    const dataToSubmit = {
      title: formInput.name_1,
      scope: formInput.name_2,
      startingMonth: formInput.name_3,
      startingYear: formInput.name_4,
      endingMonth: formInput.name_5,
      endingYear: formInput.name_6,
      phase: formInput.name_7,
      description: formInput.description,
    };

    console.log(`NAME: ${formInput.name_1}`);
    console.log(`NAME: ${formInput.name_2}`);
    console.log(`DATA: ${JSON.stringify(dataToSubmit)}`);

    const response = await fetch("./api/create-projects", {
      method: "POST",
      body: JSON.stringify(dataToSubmit),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(`DATA: ${JSON.stringify(data)}`);
  };

  return (
    <div className="flex flex-col justify-center sm:px-4 p-12">
      <div className="flex justify-center dark:text-white text-nft-black-2 mt-10 font-semibold text-3xl">
        <h1 className="font-poppins">What do you want to do?</h1>
      </div>

      <div className="flex justify-center sm:px-4 p-12">
        <div className="mt-7 w-full flex justify-center">
          <Button
            type="button"
            btnName="Create Project"
            classStyles="rounded-xl"
            handleClick={() => {
              setIsCreateProjectDisplayed((current) => !current);
            }}
          />
        </div>
        <div className="mt-7 w-full flex justify-center">
          <Button
            type="button"
            btnName="Edit Project"
            classStyles="rounded-xl"
            handleClick={() => {
              setIsEditProjectDisplayed((current) => !current);
            }}
          />
        </div>

        <div className="mt-7 w-full flex justify-center">
          <Button
            type="button"
            btnName="Delete Project"
            classStyles="rounded-xl"
            handleClick={() => {
              setIsDeleteProjectDisplayed((current) => !current);
            }}
          />
        </div>
      </div>
      {isCreateProjectDisplayed ? (
        <>
          <form
            action="/api/create-user"
            onSubmit={formSubmissionHandler}
            method="post"
          >
            <div className="grid justify-center w-full p-4">
              <Input
                inputType="input"
                id="title"
                title="Title"
                placeholder="Project Title"
                handleClick={(e: { target: { value: any } }) => {
                  setFormInput({ ...formInput, name_1: e.target.value });
                }}
              />
              <Input
                inputType="input"
                id="scope"
                title="Scope"
                placeholder="Scope (BG, plant, world-wide...)"
                handleClick={(e: { target: { value: any } }) => {
                  setFormInput({ ...formInput, name_2: e.target.value });
                }}
              />
              <Input
                inputType="input"
                id="startingMonth"
                title="Starting Month"
                placeholder="Starting month"
                handleClick={(e: { target: { value: any } }) => {
                  setFormInput({ ...formInput, name_3: e.target.value });
                }}
              />
              <Input
                inputType="input"
                id="startingYear"
                title="Starting Year"
                placeholder="Starting year"
                handleClick={(e: { target: { value: any } }) => {
                  setFormInput({ ...formInput, name_4: e.target.value });
                }}
              />
              <Input
                inputType="input"
                id="endingMonth"
                title="Ending Month"
                placeholder="Ending month"
                handleClick={(e: { target: { value: any } }) => {
                  setFormInput({ ...formInput, name_5: e.target.value });
                }}
              />
              <Input
                inputType="input"
                id="endingYear"
                title="Ending Year"
                placeholder="Ending year"
                handleClick={(e: { target: { value: any } }) => {
                  setFormInput({ ...formInput, name_6: e.target.value });
                }}
              />
              <Input
                inputType="input"
                id="phase"
                title="Phase"
                placeholder="Phase (Ideation, POC, MVP, Industrialisation, Other)"
                handleClick={(e: { target: { value: any } }) => {
                  setFormInput({ ...formInput, name_7: e.target.value });
                }}
              />
              <Input
                inputType="textarea"
                title="Description"
                placeholder="Description"
                handleClick={(e: { target: { value: any } }) => {
                  setFormInput({ ...formInput, description: e.target.value });
                }}
              />
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
      ) : isEditProjectDisplayed ? (
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
      ) : isDeleteProjectDisplayed ? (
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

export default manageProjects;
