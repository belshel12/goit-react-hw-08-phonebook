import { useDispatch } from 'react-redux';
import { FilterContainer, Label, FilterInput } from './Filter.styled';
import { addFilterValue } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = ({ target: { value } }) =>
    dispatch(addFilterValue(value));

  return (
    <FilterContainer>
      <Label>
        Find contacts by name
        <FilterInput name="filter" onChange={handleFilterChange} />
      </Label>
    </FilterContainer>
  );
};

export default Filter;
