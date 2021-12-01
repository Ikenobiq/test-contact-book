import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeContact } from "../../redux/actions";

import Button from "../../shared/components/Button/Button";

const ContactList = () => {
  const contacts = useSelector((store) => store.items);

  const dispatch = useDispatch();
  const remove = () => {
    dispatch(removeContact(contacts.id));
  };
  return (
    <div>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Link to="/contact/:contactID">
              {contact.firstName}, {contact.lastName}, {contact.number}
            </Link>
            <Button text="Delete" variant="primary" onClick={remove} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ContactList;
