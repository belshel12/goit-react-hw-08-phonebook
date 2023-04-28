import styled from '@emotion/styled';

export const FilterContainer = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  padding: 8px;
  margin: 0 0 12px 0;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  self-align: center;
  padding: 8px;

  font-weight: 500;
  font-size: 18px;
  line-height: 1.17;
  letter-spacing: 0.03em;
`;

export const FilterInput = styled.input`
  padding: 12px;
  margin: 4px 0 0 0;
  background-color: #fff;

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  outline: none;
  ::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: #4e4b42;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }

  &:focus {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;
