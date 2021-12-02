import { useState } from "react";
import styles from "./AddContactForm.module.scss";
import Button from "../../shared/components/Button/Button";

const Form = ({ onSubmit, resetFormOnSubmit, buttonText, ...rest }) => {
  const [firstName, setFirstName] = useState(rest.firstName);
  const [lastName, setLastName] = useState(rest.lastName);
  const [number, setNumber] = useState(rest.number);

  const handleChangeFirstName = (e) => setFirstName(e.target.value);
  const handleChangeLastName = (e) => setLastName(e.target.value);
  const handleChangeNumber = (e) => setNumber(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(firstName, lastName, number);
    if (resetFormOnSubmit) {
      setFirstName("");
      setLastName("");
      setNumber("");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.name}>First name</h3>
      <input
        onChange={handleChangeFirstName}
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
        onChange={handleChangeLastName}
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
        onChange={handleChangeNumber}
        value={number}
        type="tel"
        className={styles.inputNumber}
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
      />
      <Button text={buttonText} variant="secondary" type="submit" />
    </form>
  );
};
export default Form;
