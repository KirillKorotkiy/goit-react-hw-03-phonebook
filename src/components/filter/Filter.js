import React from 'react';
import { FilterLebel, FileterInput } from './Filter.styled';

const Filter = ({value, onChange}) => {
  return (
    <FilterLebel>
      Find contac by name
      <FileterInput type="text" value={value} onChange={onChange} />
    </FilterLebel>
  );
};

export default Filter