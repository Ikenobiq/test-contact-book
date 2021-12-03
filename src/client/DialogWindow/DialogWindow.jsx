import Button from "../../shared/components/Button";
import {useState} from "react";
import styles from "../AddContactForm/AddContactForm.module.scss";

const DialogWindow = ({open, onCancel, onSubmit}) => {
    const [fieldTitle, setFieldTitle] = useState("");
    const [fieldValue, setFieldValue] = useState("");

    const clearFields = () => {
        setFieldTitle("")
        setFieldValue("")
    }

    return (
        open && (
            <div style={{width: "500px", height: "500px", backgroundColor: "grey"}}>
                <h3 className={styles.name}>Create new field</h3>
                <input
                    onChange={(e) => setFieldTitle(e.target.value)}
                    value={fieldTitle}
                    className={styles.inputName}
                    type="text"
                    placeholder={"Field title"}
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
                    onClick={() => {
                        onCancel()
                        clearFields()
                    }}
                />
                <Button
                    text={"Add new field"}
                    type={"submit"}
                    variant={"secondary"}
                    onClick={() => {
                        onSubmit(fieldTitle, fieldValue);
                        clearFields()
                    }}
                />
            </div>
        )
    );
};
export default DialogWindow;
