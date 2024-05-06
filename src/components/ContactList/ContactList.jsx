import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ users }) => {
  const contacts = Object.values(users);
  return (
    <ul className={s.contacts_list}>
      <Contact users={contacts} />
    </ul>
  );
};

export default ContactList;
