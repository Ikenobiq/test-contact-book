import { useDispatch, useSelector } from "react-redux";
import Form from "../AddContactForm/AddContactForm";
import { changeContact } from "../../redux/actions";
import Button from "../../shared/components/Button";
import { useCallback, useState } from "react";
import DialogWindow from "../DialogWindow/DialogWindow";
import DeleteButton from "../../pages/DeleteButton";
import CustomFieldList from "./CustomFieldList";

const containsField = (fields, field) =>
  fields.some(
    (item) => item.title === field.title && item.value === field.value,
  );

const ContactInformation = ({ id }) => {
  const contact = useSelector((store) => store.items).find(
    (contact) => contact.id === id,
  );
  console.log(contact);
  const { firstName, lastName, number, customFields } = contact;

  const [selectedCustomFields, setSelectedCustomFields] = useState([]);
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

  const handleDeleteButtonClick = () => {
    if (!window.confirm("Do you want to delete selected fields?")) return;

    dispatch(
      changeContact({
        id,
        firstName,
        lastName,
        number,
        customFields: customFields.filter(
          (customField) => !containsField(selectedCustomFields, customField),
        ),
      }),
    );
    setSelectedCustomFields([]);
  };

  const handleAddNewCustomField = (title, value) => {
    const newField = { title: title, value: value };
    dispatch(
      changeContact({
        id,
        firstName,
        lastName,
        number,
        customFields: [...customFields, newField],
      }),
    );

    setOpen(false);
  };

  const handleFieldChange = useCallback(
    (value, customFieldIndex) => {
      const newFields = [...customFields];
      newFields[customFieldIndex] = {
        ...customFields[customFieldIndex],
        value: value,
      };

      dispatch(
        changeContact({
          id,
          firstName,
          lastName,
          number,
          customFields: newFields,
        }),
      );
    },
    [customFields, dispatch, firstName, id, lastName, number],
  );

  const handleCheckboxChange = (field, checked) => {
    if (checked) setSelectedCustomFields((prev) => [...prev, field]);
    else
      setSelectedCustomFields((prev) =>
        prev.filter(
          (prevField) =>
            prevField.title !== field.title && prevField.value !== field.value,
        ),
      );
  };
  console.log(selectedCustomFields);

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
      <CustomFieldList
        onFieldChange={handleFieldChange}
        onCheckboxChange={handleCheckboxChange}
        customFields={selectedCustomFields}
        checked={(field) => containsField(selectedCustomFields, field)}
      />
      <DeleteButton
        disabled={selectedCustomFields.length === 0}
        onClick={handleDeleteButtonClick}
      />
      <DialogWindow
        open={open}
        onCancel={() => setOpen(false)}
        onSubmit={handleAddNewCustomField}
      />
    </>
  );
};

export default ContactInformation;
