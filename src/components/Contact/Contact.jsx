import css from "./Contact.module.css";
import { BiSolidPhone } from "react-icons/bi";
import { BiSolidUser } from "react-icons/bi";

export default function Contact({ deleteContact, id, name, number }) {
  return (
    <div className={css.contactCard}>
      <ul className={css.contactList}>
        <li className={css.contactItem}><BiSolidUser /><span>{name}</span></li>
        <li className={css.contactItem}><BiSolidPhone /><span>{number}</span></li>
      </ul>
      <button onClick={(event) => deleteContact(id)}>Delete</button>
    </div>
  );
}
