import ContactList from "../../client/ContactList/ContactList";
import Form from "../../client/AddContactForm/AddContactForm";
import { useDispatch, useSelector } from "react-redux";
import { addContact, removeContact } from "../../redux/actions";
import { useState } from "react";
import DeleteButton from "../DeleteButton";

const ContactBookPage = () => {
  const contacts = useSelector((store) => store.items);
  const dispatch = useDispatch();

  const [selectedContactIds, setSelectedContactIds] = useState([]);

  const handleAddContacts = (firstName, lastName, number) => {
    const newContact = contacts.find(
      (contact) =>
        contact.lastName === lastName &&
        contact.number === number &&
        contact.firstName === firstName,
    );
    if (newContact) {
      alert(`${lastName} is already in contacts`);
      return;
    }
    const action = addContact({ firstName, lastName, number });
    dispatch(action);
  };

  function handleDeleteContacts() {
    if (!window.confirm("Do you want to delete selected contacts?")) return;

    selectedContactIds.forEach((id) => dispatch(removeContact(id)));
    setSelectedContactIds([]);
  }

  return (
    <>
      <Form
        resetFormOnSubmit
        onSubmit={handleAddContacts}
        buttonText={"Add contact"}
        firstName={""}
        lastName={""}
        number={""}
      />
      <ContactList
        selectedContactIds={selectedContactIds}
        onSelect={setSelectedContactIds}
      />
      <DeleteButton
        disabled={selectedContactIds.length === 0}
        onClick={handleDeleteContacts}
      />
    </>
  );
};
export default ContactBookPage;
