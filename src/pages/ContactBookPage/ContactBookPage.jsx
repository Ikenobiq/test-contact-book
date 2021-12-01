import ContactList from "../../client/ContactList/ContactList";
import Form from "../../client/AddContactForm/AddContactForm";
import Navigation from "../../client/Navigation";
const ContactBookPage = () => {
  return (
    <div>
      <Navigation />
      <Form />
      <ContactList />
    </div>
  );
};
export default ContactBookPage;
