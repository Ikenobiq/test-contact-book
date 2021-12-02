import Button from "../../shared/components/Button";
import { useState } from "react";
import styles from "../AddContactForm/AddContactForm.module.scss";
const DialogWindow = ({ open, onCancel, onSubmit }) => {
  const [fieldTitle, setFieldTitle] = useState("");
  const [fieldValue, setFieldValue] = useState("");

  return (
    open && (
      <div style={{ width: "500px", height: "500px", backgroundColor: "grey" }}>
        <h3 className={styles.name}>Create new field</h3>
        <input
          onChange={(e) => setFieldTitle(e.target.value)}
          value={fieldTitle}
          className={styles.inputName}
          type="text"
          placeholder={"Field name"}
        />
        <input
          onChange={(e) => setFieldValue(e.target.value)}
          value={fieldValue}
          className={styles.inputName}
          type="text"
          placeholder={"Field value"}
        />
        <Button
          text={"Cancel"}
          type={"button"}
          variant={"secondary"}
          onClick={onCancel}
        />
        <Button
          text={"Add new field"}
          type={"submit"}
          variant={"secondary"}
          onClick={() => onSubmit(fieldTitle, fieldValue)}
        />
      </div>
    )
  );
};
export default DialogWindow;
