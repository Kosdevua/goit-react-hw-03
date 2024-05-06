import s from "./Contact.module.css";

const Contact = ({ users }) => {
  return (
    <>
      {users.map((contact) => (
        <li className={s.contact_wrapper} key={contact.id}>
          <div className={s.contact_data}>
            <p>{contact.name}</p>
            <p>{contact.number}</p>
          </div>
          <button className={s.contact_btn}>Delete</button>
        </li>
      ))}
    </>
  );
};

export default Contact;
