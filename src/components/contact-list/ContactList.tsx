import type { Contact, ContactDeleteProp } from '../app/App';

const ContactList = ({
  contacts,
  contactDelete,
}: {
  contacts: Contact[];
  contactDelete: ContactDeleteProp;
}) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className='flex gap-8'>
            <span className='pb-3'>
              {name}: {number}
            </span>
            <button
              className='m-1 bg-[#696969] px-1 text-white hover:bg-black'
              type='button'
              onClick={() => contactDelete(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
