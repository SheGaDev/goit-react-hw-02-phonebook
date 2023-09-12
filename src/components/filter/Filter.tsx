import { ChangeEvent } from 'react';

type FilterProp = (text: ChangeEvent) => void;

const Filter = ({ filter }: { filter: FilterProp }) => {
  return (
    <>
      <label className='mb-[24px] flex w-[360px] flex-col'>
        Find contacts by name:
        <input type='text' onChange={filter} />
      </label>
    </>
  );
};

export default Filter;
