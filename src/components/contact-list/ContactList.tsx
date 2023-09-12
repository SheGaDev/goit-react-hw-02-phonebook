import { Component } from 'react';
import type { StateProp } from '../app/App';

class ContactList extends Component<StateProp> {
  render() {
    const {
      state: { contacts, filter = '' },
    } = this.props;
    return (
      <ul>
        {contacts
          .filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
          .map(({ id, name, number }) => {
            return (
              <li key={id} className='flex gap-8'>
                <span className='pb-3'>
                  {name}: {number}
                </span>
                <button
                  className='m-1 bg-[#696969] px-1 text-white hover:bg-black'
                  type='button'
                  onClick={() => this.props.contactDelete(id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
    );
  }
}

// const ContactList = () => {
//   return <span>list</span>;
// };

export default ContactList;
