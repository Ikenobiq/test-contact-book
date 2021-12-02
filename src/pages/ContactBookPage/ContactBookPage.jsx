import ContactList from "../../client/ContactList/ContactList";
import Form from "../../client/AddContactForm/AddContactForm";
import {useDispatch, useSelector} from "react-redux";
import {addContact} from "../../redux/actions";

const ContactBookPage = () => {
    const contacts = useSelector((store) => store.items);
    const dispatch = useDispatch();

    const addContacts = (firstName, lastName, number) => {
        const newContact = contacts.find((contact) => {
            return contact.lastName === lastName || contact.number === number;
        });
        if (newContact) {
            alert(`${lastName} is already in contacts`);
            return;
        }
        const action = addContact({firstName, lastName, number});
        dispatch(action);
    };

    return (
        <>
            <Form resetFormOnSubmit onSubmit={addContacts} buttonText={"Add contact"} firstName={""} lastName={""}
                  number={""}/>
            <ContactList/>
        </>
    );
};
export default ContactBookPage;
