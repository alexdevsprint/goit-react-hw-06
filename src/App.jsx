import { useState, useEffect } from "react";
import css from "./App.module.css";

import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

export default function App() {
  const [inputValue, setInputValue] = useState("");

  const defaultContactsArr = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("key-contacts");

    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }

    return defaultContactsArr;
  });

  useEffect(() => {
    window.localStorage.setItem("key-contacts", JSON.stringify(contacts));
  }, [contacts]);

  function updateInputValue(value) {
    setInputValue(value);
  }

  function addContact(newContact) {
    setContacts([...contacts, newContact]);
  }

  function deleteContact(id) {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  }

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox inputValue={inputValue} updateInputValue={updateInputValue} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
}
