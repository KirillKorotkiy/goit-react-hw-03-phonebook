import React from 'react';
import { Container, ContainerTitle } from 'components/App.styled';
import ContactsForm from './form/ContactsForm';
import { nanoid } from 'nanoid'
import Filter from './filter/Filter';
import ContactsList from './contacts-list/ContactsList';


class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount(){
    const contacts = JSON.parse( localStorage.getItem('contacts'))
   if(contacts){
    this.setState({contacts})
   }
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.contacts !== prevState.contacts){
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  onSubmitHandler = ({name, number}) => {
    const {contacts} = this.state;
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    }

   if(contacts.find(contact=> contact.name === newContact.name)){
    alert(`${newContact.name} is already exist`)
   }else{
    this.setState(({contacts}) => ({
      contacts: [newContact, ...contacts]
    }))
   }
  }

  changeFilter = (event) =>{
      this.setState({filter: event.currentTarget.value})
  }

  getVissibleContacts = () =>{
    const normalaizedFilter = this.state.filter.toLowerCase()
    const filterContacts = this.state.contacts.filter(contact =>contact.name.toLowerCase().includes(normalaizedFilter) )
    return filterContacts
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  }

  render() {
    const { contacts, filter } = this.state;
    const vissibleContacts = this.getVissibleContacts()
    return (
      <Container>
        <ContainerTitle>Phonebook</ContainerTitle>
          <ContactsForm  onSubmit = {this.onSubmitHandler} />
        <Filter
        value = {filter}
        onChange={this.changeFilter}
        />
        <ContactsList
          contacts={vissibleContacts}
          name={contacts.name}
          number={contacts.number}
          onDeleteContact ={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App