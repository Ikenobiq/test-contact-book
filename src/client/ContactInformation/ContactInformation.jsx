import { useDispatch, useSelector } from "react-redux";
import Form from "../AddContactForm/AddContactForm";
import { changeContact } from "../../redux/actions";
import Button from "../../shared/components/Button";
import { useCallback, useState } from "react";
import DialogWindow from "../DialogWindow/DialogWindow";
import styles from "../AddContactForm/AddContactForm.module.scss";

const ContactInformation = ({ id }) => {
  const contact = useSelector((store) => store.items).filter(
    (contact) => contact.id === id,
  )[0];

  const { firstName, lastName, number, ...rest } = contact;
  const [customFields, setCustomFields] = useState(
    rest.customFields ? rest.customFields : [],
  );

  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleSaveButtonClick = (firstName, lastName, number) =>
    dispatch(
      changeContact({
        id,
        firstName,
        lastName,
        number,
        customFields: customFields,
      }),
    );

  const handleAddNewCustomField = (title, value) => {
    const newFields = [...customFields, { title: title, value: value }];
    setCustomFields(newFields);
    dispatch(
      changeContact({
        id,
        firstName,
        lastName,
        number,
        customFields: newFields,
      }),
    );
    setOpen(false);
  };

  const handleCustomFieldChange = useCallback(
    (e, customFieldIndex) => {
      const newField = {
        ...customFields[customFieldIndex],
        value: e.target.value,
      };

      const newFields = [...customFields];
      newFields[customFieldIndex] = newField;

      setCustomFields(newFields);
    },
    [customFields],
  );

  return (
    <>
      <Form
        buttonText={"Save"}
        firstName={firstName}
        lastName={lastName}
        number={number}
        onSubmit={handleSaveButtonClick}
      />
      <Button
        text={"Add new field"}
        type={"submit"}
        onClick={() => setOpen(true)}
      />
      {customFields.map((field, index) => (
        <>
          <h3 className={styles.name}>{field.title}</h3>
          <input
            onChange={(e) => handleCustomFieldChange(e, index)}
            value={field.value}
            className={styles.inputName}
            type="text"
            placeholder={field.title}
          />
        </>
      ))}
      <DialogWindow
        open={open}
        onCancel={() => setOpen(false)}
        onSubmit={handleAddNewCustomField}
      />
    </>
  );
};

export default ContactInformation;
