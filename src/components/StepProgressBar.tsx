import React from "react";
import { Link } from "react-router-dom";
import {
  ADD_CONSULTATION,
  ADD_NEXT_STEPS,
  ADD_PATIENT_PROFILE,
  ADD_PATIENT_VITALS,
} from "../constants/routes";

interface StepProgressProps {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  totalSteps: number;
}

const StepProgressBar: React.FC<StepProgressProps> = ({
  activeStep,
  setActiveStep,
}) => {
  const steps = ["Patient Profile", "Vital Info", "Consultation", "Next Steps"];
  const routes = [
    ADD_PATIENT_PROFILE,
    ADD_PATIENT_VITALS,
    ADD_CONSULTATION,
    ADD_NEXT_STEPS,
  ];

  const handleClick = (index: number) => {
    setActiveStep(index);
  };

  return (
    <div
      style={{
        height: "5rem",
        width: "100%",
        backgroundColor: "white",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "0.5rem",
        border: "0px solid #008080",
        marginTop: "0.5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "5rem",
          justifyContent: "space-between",
          border: "0px solid #008080",
        }}
      >
        {steps.map((step, index) => (
          <React.Fragment key={step}>
            <Link
              to={routes[index]}
              style={{
                textDecoration: "none",
                display: "flex",
                justifyContent: "space-between",
                border: "0px solid #008080",
              }}
            >
              <div
                onClick={() => handleClick(index)}
                style={{
                  width: "9rem",
                  height: "5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  justifyContent: "center",
                  textAlign: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  padding: "0.5rem",
                  border: "0px solid #008080",
                  color: index === activeStep ? "#008080" : "#9CA3AF",
                  fontWeight: index === activeStep ? "bold" : "normal",
                }}
              >
                <p
                  style={{
                    width: "14%",
                    backgroundColor:
                      index === activeStep ? "#008080" : "#9CA3AF",
                    color: "white",
                    fontSize: "0.75rem",
                    border: "0px solid #008080",
                    borderRadius: "50%",
                    padding:'2px',
                    fontWeight: index === activeStep ? "bold" : "normal",
                  }}
                >
                  {index + 1}
                </p>
                <div style={{ fontSize: "0.75rem" }}>{step}</div>
              </div>
            </Link>
            {index !== steps.length - 1 && (
              <div
                style={{
                  height: "100%",
                  width: "2.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <hr
                  style={{
                    width: "100%",
                    borderStyle: "dotted",
                    borderColor: "#008080",
                  }}
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default StepProgressBar;
