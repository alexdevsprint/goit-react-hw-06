import css from "./ContactList.module.css";

import Contact from "../Contact/Contact";

export default function ContactList({ contacts, deleteContact }) {
  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact deleteContact={deleteContact} id={contact.id} name={contact.name} number={contact.number} />
        </li>
      ))}
    </ul>
  );
}
