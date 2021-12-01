import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./AddContactForm.module.scss";
import { addContact } from "../../redux/actions";
import Button from "../../shared/components/Button/Button";

const Form = () => {
  const contacts = useSelector((store) => store.items);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const addContacts = (firstName, lastName, number) => {
    const newContact = contacts.find((contact) => {
      return contact.lastName === lastName || contact.number === number;
    });
    if (newContact) {
      alert(`${lastName} is already in contacts`);
      return;
    }
    const action = addContact({ firstName, lastName, number });
    dispatch(action);
  };
  const handlechangeFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handlechangeLastName = (e) => {
    setLastName(e.target.value);
  };
  const handlechangeNumber = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContacts(firstName, lastName, number);
    setFirstName("");
    setLastName("");
    setNumber("");
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.name}>First name</h3>
      <input
        onChange={handlechangeFirstName}
        value={firstName}
        className={styles.inputName}
        type="text"
        name="firstName"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
      <h3 className={styles.name}>Last name</h3>
      <input
        onChange={handlechangeLastName}
        value={lastName}
        className={styles.inputName}
        type="text"
        name="lastName"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
      <h3 className={styles.name}>Number</h3>
      <input
        onChange={handlechangeNumber}
        value={number}
        type="tel"
        className={styles.inputNumber}
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
      />
      <Button text="Add contact" variant="secondary" type="submit" />
    </form>
  );
};
export default Form;
