import { IonButton, IonCol, IonRow } from "@ionic/react";

interface FormButtonProps {
  readonly handleSubmit: () => void;
  readonly handleNext: () => void;
  readonly activeNext: boolean;
  readonly onCancel: () => void;
}

function FormSubmitButtons({
  handleSubmit,
  handleNext,
  activeNext,
  onCancel,
}: FormButtonProps) {
  return (
    <IonRow
      style={{
        height: "62px",
        position: "fixed",
        bottom: "0",
        left: "0",
        width: "100%",
        zIndex: "999",
        backgroundColor: "white"
      }}
      size-lg="4"
      color={"teal"}
      className="border bg-white border-gray-200 flex justify-end items-center"
    >
      <IonCol sizeXl="1" sizeMd="2">
        <IonButton fill="clear" color={"dark"} onClick={onCancel}>
          Cancel
        </IonButton>
      </IonCol>

      <IonCol sizeXl="1" sizeMd="2">
        <IonButton
          disabled={!activeNext}
          strong={activeNext ?? true}
          color={"success"}
          fill="outline"
          onClick={handleNext}
          className="bg-white rounded-lg"
        >
          Next
        </IonButton>
      </IonCol>

      <IonCol sizeXl="1" sizeMd="2">
        <IonButton onClick={handleSubmit} color={"teal"}>
          Save
        </IonButton>
      </IonCol>
    </IonRow>
  );
}

export default FormSubmitButtons;
