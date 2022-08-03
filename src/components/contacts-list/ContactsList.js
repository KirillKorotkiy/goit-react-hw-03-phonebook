// import { number } from 'prop-types';
import React from 'react';
import { ContactListLi, ContactTitle } from './ContactsList.styled';

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <ul>
        <ContactTitle>Contacts</ContactTitle>
        {contacts.map(({ id, name, number }) => (
          <ContactListLi key={id}>
            <span>
              {name}: {number}
            </span>
            <button
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </ContactListLi>
        ))}
      </ul>
    </>
  );
};

export default ContactsList;
