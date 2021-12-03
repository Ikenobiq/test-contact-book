import styles from "../AddContactForm/AddContactForm.module.scss";
import Checkbox from "../../shared/components/Checkbox";

function CustomField({field, onFieldChange, checked, onCheckboxChange}) {
    return (
        <>
            <h3 className={styles.name}>{field.title}</h3>
            <input
                onChange={(e) => onFieldChange(e)}
                value={field.value}
                className={styles.inputName}
                type="text"
                placeholder={field.title}
            />
            <Checkbox checked={checked} onChange={onCheckboxChange}/>
        </>
    )
}

export default CustomField