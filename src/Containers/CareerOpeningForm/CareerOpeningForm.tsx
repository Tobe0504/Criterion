import React, { useContext, useEffect, useState } from "react";
import Button from "../../Components/Button/Button";
import Dropdown from "../../Components/Dropdown/Dropdown";
import Input from "../../Components/Input/Input";
import { AppContext } from "../../Context/AppContext";
import { inputChangeHandler } from "../../HelperFunctions/inputChangeHandler";
import { carrerOpeningFormType } from "../../Utilities/types";
import classes from "./CareerOpeningForm.module.css";

type CareerOpeningFormType = {
  onClick: () => void;
};

const CareerOpeningForm = ({ onClick }: CareerOpeningFormType) => {
  // States
  const [position, setPosition] = useState("");

  // Context
  const { submitApplication, requestState } = useContext(AppContext);

  // Utils
  const [formDetails, setFormDetails] = useState<carrerOpeningFormType>({
    full_name: "",
    position: "",
    email_address: "",
    cover_letter: null,
    resume: null,
  });
  const [formData, setFormData] = useState(new FormData());

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormDetails((prevState: any) => {
          return { ...prevState, [event.target.name]: file };
        });
      };
      reader.readAsDataURL(file);
    }
  };

  //   Effects
  useEffect(() => {
    if (position) {
      setFormDetails((prevState: any) => {
        return { ...prevState, position };
      });
    }

    // eslint-disable-next-line
  }, [position]);

  useEffect(() => {
    const formDetailsFormData = new FormData();

    formDetailsFormData.append("full_name", formDetails.full_name);
    formDetailsFormData.append("position", formDetails.position);
    formDetailsFormData.append("email_address", formDetails.email_address);
    formDetailsFormData.append(
      "cover_letter",
      formDetails.cover_letter as File
    );
    formDetailsFormData.append("resume", formDetails.resume as File);

    setFormData(formDetailsFormData);

    // eslint-disable-next-line
  }, [formDetails]);

  useEffect(() => {
    if (requestState?.data) {
      onClick();
      setFormDetails({
        full_name: "",
        position: "",
        email_address: "",
        cover_letter: null,
        resume: null,
      });
    }

    // eslint-disable-next-line
  }, [requestState?.data]);

  return (
    <section className={classes.container}>
      <Input
        placeholder="FULL NAME"
        style={{ color: "#F4F4F4" }}
        color="#f4f4f4"
        name="full_name"
        value={formDetails.full_name}
        onChange={(e) => inputChangeHandler(e, setFormDetails)}
      />
      <Dropdown
        options={["HR/Admin", "Project Manager", "Brand Designer", "Sales"]}
        title="POSITION"
        color="#F4F4F4"
        selected={position}
        setSelected={setPosition}
      />
      <Input
        placeholder="EMAIL ADDRESS"
        type="email"
        style={{ color: "#F4F4F4" }}
        color="#f4f4f4"
        name="email_address"
        value={formDetails.email_address}
        onChange={(e) => inputChangeHandler(e, setFormDetails)}
      />
      <div className={classes.uploads}>
        <div>
          <label htmlFor="uploadCoverLeffer">
            {formDetails.cover_letter
              ? "COVER LETTER UPLOADED!"
              : "UPLOAD COVER LETTER"}
          </label>
          <input
            type="file"
            id="uploadCoverLeffer"
            name="cover_letter"
            onChange={handleInputChange}
            accept=".doc,.pdf,.docx"
          />
        </div>
        <div>
          <label htmlFor="uploadResume">
            {formDetails.resume ? "RESUME UPLOADED!" : "UPLOAD RESUME"}
          </label>
          <input
            type="file"
            id="uploadResume"
            name="resume"
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className={classes.buttonSection}>
        <Button
          onClick={() => {
            submitApplication(formData);
          }}
          disabled={
            !formDetails.email_address ||
            !formDetails?.cover_letter ||
            !formDetails.full_name ||
            !formDetails?.position ||
            !formDetails?.resume
          }
          loading={requestState.isLoading}
        >
          <span>{"SUBMIT"}</span>
          <svg
            width="17"
            height="15"
            viewBox="0 0 17 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.36307 0.619629L8.08108 1.8905L12.9858 6.6107H0.5V8.39481H12.9798L8.08108 13.1092L9.36307 14.3801L16.5 7.5L9.36307 0.619629Z"
              fill="#F4F4F4"
            />
          </svg>
        </Button>
      </div>
    </section>
  );
};

export default CareerOpeningForm;
