import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useCallback} from "react";
import Checkbox from "../../shared/components/Checkbox";


const ContactList = ({selectedContactIds, onSelect}) => {
    const contacts = useSelector((store) => store.items);

    const handleChangeChecked = useCallback((checked, checkboxIndex, contactId) => {
        if (checked)
            onSelect(prev => [...prev, contactId])
        else
            onSelect(prev => prev.filter(id => id !== contactId))
    }, [onSelect])

    return (
        <div>
            <ul>
                {contacts.map((contact, index) => {
                    const contactId = contact.id;
                    return (
                        <li key={contact.id}>
                            <Link to={`/contact/${contactId}`}>
                                {contact.firstName}, {contact.lastName}, {contact.number}
                            </Link>
                            <Checkbox
                                checked={selectedContactIds.some(id => id === contactId)}
                                onChange={e => handleChangeChecked(e.target.checked, index, contactId)}/>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
export default ContactList;
