import { Link, useLocation } from "react-router-dom";
import contacts from "../../json/contacts.json";
const ContactList = () => {
  const location = useLocation();
  return (
    <div>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Link
              to={{
                parhName: `/contact/${contact.id}`,
                state: {
                  from: location,
                },
              }}>
              {contact.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ContactList;
