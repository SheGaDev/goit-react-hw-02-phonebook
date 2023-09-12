import { Component, ChangeEvent } from 'react';
import ContactForm from '../contact-form/ContactForm';
import Filter from '../filter/Filter';
import ContactList from '../contact-list/ContactList';
import { nanoid } from 'nanoid';

type State = {
  contacts: Array<Contact>;
  filter: string;
};
export type Form = {
  name: string;
  number: string;
};
type Contact = {
  id: string;
  name: string;
  number: string;
};
export type HandleSubmitProps = {
  contactCreate: (contact: Form) => void;
};
export type StateProp = {
  state: State;
  contactDelete: (id: string) => void;
};
class App extends Component<object, State> {
  state: State = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  contactCreate = (contact: Form) => {
    if (
      this.state.contacts.some((cont) => cont.name.toLowerCase() === contact.name.toLowerCase())
    ) {
      alert(`${contact.name} is arleady in contacts.`);
      return;
    }
    this.setState((prev: Pick<State, keyof State>): Pick<State, keyof State> | null => {
      return { contacts: [{ ...contact, id: nanoid() }, ...prev.contacts] } as State;
    });
  };

  contactDelete = (id: string) => {
    this.setState((prev: Pick<State, keyof State>): Pick<State, keyof State> | null => {
      return { contacts: prev.contacts.filter((contact) => contact.id !== id) } as State;
    });
  };

  filterChange = (event: ChangeEvent) => {
    const { value }: { value: string } = event.target as HTMLInputElement;
    this.setState({ filter: value });
  };

  render() {
    return (
      <>
        <div className='m-4 flex flex-col gap-4'>
          <h1>
            <b>Phonebook</b>
          </h1>
          <ContactForm contactCreate={this.contactCreate} />
        </div>
        <div className='m-4 flex flex-col gap-4'>
          <h2>
            <b>Contacts</b>
          </h2>
          <div className='flex flex-col'>
            <Filter filter={this.filterChange} />

            <ContactList state={this.state} contactDelete={this.contactDelete} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
