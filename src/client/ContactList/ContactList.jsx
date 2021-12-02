import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeContact } from "../../redux/actions";

import Button from "../../shared/components/Button/Button";

const ContactList = () => {
  const contacts = useSelector((store) => store.items);
  const dispatch = useDispatch();
  const remove = (id) => dispatch(removeContact(id));
  return (
    <div>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Link to={`/contact/${contact.id}`}>
              {contact.firstName}, {contact.lastName}, {contact.number}
            </Link>
            <Button
              text="Delete"
              variant="primary"
              onClick={() => {
                remove(contact.id);
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ContactList;
