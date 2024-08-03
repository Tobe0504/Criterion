import React, { useEffect, useState } from "react";
import CaerreDropdown from "../../Components/CareerDropdown/CaerreDropdown";
import classes from "./CareerOpenings.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Button from "../../Components/Button/Button";
import CareerOpeningForm from "../CareerOpeningForm/CareerOpeningForm";

const CareerOpenings = () => {
  // States
  const [displayCareerOpeningForm, setDisplayCareerOpeningForm] =
    useState(false);

  const careers = [
    {
      title: "HR/Admin",
      duration: "FullTime",
      content: (
        <div className={classes.content}>
          <div className={classes.description}>
            <h4>{"Job Description".toUpperCase()}</h4>
            <p>
              An organized and efficient HR/Admin Coordinator to support our
              team. This role is essential in ensuring smooth HR operations and
              administrative processes.
            </p>
          </div>

          <div className={classes.keyResponsibilitiesAndQualifications}>
            <div>
              <h4>{"Key responsibilities".toUpperCase()}</h4>
              <ul>
                <li>Assist in recruitment and onboarding</li>

                <li>Manage employee records and queries.</li>
                <li>Administer benefits programs.</li>
                <li>Handle office management tasks.</li>
                <li>Ensure compliance with labor laws and policies.</li>
              </ul>
            </div>
            <div>
              <h4>{"Qualifications".toUpperCase()}</h4>

              <ul>
                <li>Proven experience in HR and administrative roles.</li>
                <li>Excellent organizational and multitasking abilities.</li>
                <li>Strong interpersonal and communication skills.</li>
                <li>Familiarity with HR software.</li>
                <li>Knowledge of labor laws and HR best practices.</li>
              </ul>
            </div>
          </div>

          <div className={classes.footer}>
            <p>
              Interested candidates should submit their resume and cover letter
              below. <br />
              Join us in shaping the future of sustainable living at Criterion
              Homes.
            </p>
            <Button
              type="black"
              onClick={() => {
                setDisplayCareerOpeningForm(true);
              }}
            >
              <span>Apply here</span>
              <svg
                width="17"
                height="15"
                viewBox="0 0 17 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.50174 0.719482L8.21975 1.99035L13.1245 6.71055H0.638672V8.49466H13.1185L8.21975 13.2091L9.50174 14.48L16.6387 7.59986L9.50174 0.719482Z" />
              </svg>
            </Button>
          </div>
        </div>
      ),
    },

    {
      title: "Project Manager",
      duration: "FullTime",
      content: (
        <div className={classes.content}>
          <div className={classes.description}>
            <h4>{"Job Description".toUpperCase()}</h4>
            <p>
              An experienced and driven Project Manager to oversee our real
              estate development projects from inception to completion.
            </p>
          </div>

          <div className={classes.keyResponsibilitiesAndQualifications}>
            <div>
              <h4>{"Key responsibilities".toUpperCase()}</h4>

              <ul>
                <li>Develop project plans and budgets.</li>

                <li>Lead and coordinate project teams.</li>
                <li>Monitor project progress and manage risks.</li>
                <li>Ensure quality standards and compliance.</li>
                <li>Communicate with clients and stakeholders.</li>
              </ul>
            </div>
            <div>
              <h4>{"Qualifications".toUpperCase()}</h4>

              <ul>
                <li>
                  Proven experience as a Project Manager in real estate or
                  construction.
                </li>
                <li>Strong leadership and team management skills.</li>
                <li>Excellent organizational and problem-solving abilities.</li>
                <li>Proficiency in project management software..</li>
                <li>
                  Strong understanding of construction processes and
                  regulations.
                </li>
              </ul>
            </div>
          </div>

          <div className={classes.footer}>
            <p>
              Interested candidates should submit their resume and cover letter
              below. <br />
              Join us in shaping the future of sustainable living at Criterion
              Homes.
            </p>
            <Button
              type="black"
              onClick={() => {
                setDisplayCareerOpeningForm(true);
              }}
            >
              <span>Apply here</span>
              <svg
                width="17"
                height="15"
                viewBox="0 0 17 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.50174 0.719482L8.21975 1.99035L13.1245 6.71055H0.638672V8.49466H13.1185L8.21975 13.2091L9.50174 14.48L16.6387 7.59986L9.50174 0.719482Z" />
              </svg>
            </Button>
          </div>
        </div>
      ),
    },
    {
      title: "Brand Designer",
      duration: "FullTime",
      content: (
        <div className={classes.content}>
          <div className={classes.description}>
            <h4>{"Job Description".toUpperCase()}</h4>
            <p>
              A talented and creative designer to create designs that are
              consistent with our brand guidelines and enhance our visual
              presence.
            </p>
          </div>

          <div className={classes.keyResponsibilitiesAndQualifications}>
            <div>
              <h4>{"Key responsibilities".toUpperCase()}</h4>

              <ul>
                <li>Adhere to brand guidelines..</li>
                <li>Develop compelling graphics and marketing materials.</li>
                <li>Collaborate with sales teams.</li>
                <li>Stay updated on industry trends.</li>
                <li>Present design concepts to stakeholders.</li>
              </ul>
            </div>
            <div>
              <h4>{"Qualifications".toUpperCase()}</h4>

              <ul>
                <li>
                  Proven experience as a Brand Designer or Graphic Designer.
                </li>
                <li>Strong portfolio showcasing creative design skills.</li>
                <li>
                  Proficiency in design software (Figma, Adobe Creative Suite,
                  etc.).
                </li>
                <li>Excellent communication and presentation skills.</li>
                <li>Ability to work independently and collaboratively.</li>
              </ul>
            </div>
          </div>

          <div className={classes.footer}>
            <p>
              Interested candidates should submit their resume and cover letter
              below. <br />
              Join us in shaping the future of sustainable living at Criterion
              Homes.
            </p>
            <Button
              type="black"
              onClick={() => {
                setDisplayCareerOpeningForm(true);
              }}
            >
              <span>Apply here</span>
              <svg
                width="17"
                height="15"
                viewBox="0 0 17 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.50174 0.719482L8.21975 1.99035L13.1245 6.71055H0.638672V8.49466H13.1185L8.21975 13.2091L9.50174 14.48L16.6387 7.59986L9.50174 0.719482Z" />
              </svg>
            </Button>
          </div>
        </div>
      ),
    },
  ];

  // Effects
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className={classes.container}>
      {!displayCareerOpeningForm ? (
        <>
          <div className={classes.header} data-aos="fade-up">
            <h2>{"openings".toUpperCase()}</h2>
            <p>
              Ready to join us? Apply below to be a part of of our extraordinary
              team.
            </p>
          </div>

          <div>
            {careers.map((data, i) => {
              return (
                <div key={i} data-aos="fade-up">
                  <CaerreDropdown
                    title={data.title}
                    role={data.duration}
                    content={data.content}
                  />
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div data-aos="fade-up">
          <CareerOpeningForm
            onClick={() => {
              setDisplayCareerOpeningForm(false);
            }}
          />
        </div>
      )}
    </section>
  );
};

export default CareerOpenings;
