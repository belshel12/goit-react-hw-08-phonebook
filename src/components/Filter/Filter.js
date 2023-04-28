import { useDispatch } from 'react-redux';
import { FilterContainer, Label, FilterInput } from './Filter.styled';
import { addFilterValue } from 'redux/Contacts/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = ({ target: { value } }) =>
    dispatch(addFilterValue(value));

  return (
    <FilterContainer>
      <Label>
        <FilterInput
          name="filter"
          onChange={handleFilterChange}
          placeholder=" Find contacts by name"
        />
      </Label>
    </FilterContainer>
  );
};

export default Filter;
