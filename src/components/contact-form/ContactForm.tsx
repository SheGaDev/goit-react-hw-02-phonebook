import { Component, ChangeEvent, FormEvent } from 'react';
import type { HandleSubmitProps, Form } from '../app/App';

class ContactForm extends Component<HandleSubmitProps> {
  state: Form = {
    name: '',
    number: '',
  };

  handleInput = (e: ChangeEvent) => {
    const { name, value }: { name: string; value: string } = e.target as HTMLInputElement;
    this.setState({ [name as keyof Form]: value } as Form);
  };

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    this.props.contactCreate(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='flex w-[360px] flex-col gap-3'>
        <label className='flex flex-col'>
          Name:
          <input
            type='text'
            name='name'
            onChange={this.handleInput}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
          />
        </label>
        <label className='flex flex-col'>
          Number:
          <input
            type='tel'
            name='number'
            onChange={this.handleInput}
            pattern='\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}'
            title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
            required
            value={this.state.number}
          />
        </label>
        <button className='bg-[#696969] py-2 text-white hover:bg-black'>Add contact</button>
      </form>
    );
  }
}

// const ContactForm1 = ({
//   addContact,
// }: {
//   addContact: MouseEvent<HTMLButtonElement, MouseEvent>;
// }) => {
//   return (
//     <form className='flex w-[360px] flex-col gap-3'>
//       <label className='flex flex-col'>
//         Name:
//         <input
//           type='text'
//           name='name'
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />
//       </label>
//       <label className='flex flex-col'>
//         Number:
//         <input
//           type='tel'
//           name='number'
//           pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
//           title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
//           required
//         />
//       </label>
//       <button className='bg-[#696969] py-2 text-white hover:bg-black' onClick={addContact}>
//         Add contact
//       </button>
//     </form>
//   );
// };

export default ContactForm;
