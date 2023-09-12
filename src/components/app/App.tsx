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
export type Contact = {
  id: string;
  name: string;
  number: string;
};
export type HandleSubmitProps = {
  contactCreate: (contact: Form) => void;
};
export type ContactDeleteProp = (id: string) => void;

class App extends Component<object, State> {
  state: State = {
    contacts: [],
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

  contactFiltered = (): Contact[] => {
    return this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
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

            <ContactList contacts={this.contactFiltered()} contactDelete={this.contactDelete} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
