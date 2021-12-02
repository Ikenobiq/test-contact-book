import ContactInformation from "../../client/ContactInformation/ContactInformation";
import Navigation from "../../client/Navigation";
import {useParams} from "react-router";

const ContactInfoPage = () => {
    let params = useParams();
    return (
        <div>
            <Navigation/>
            <ContactInformation id={params.contactID}/>
        </div>
    );
};
export default ContactInfoPage;
