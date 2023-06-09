import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  font-size: 20px;
  line-height: 1.17;
  letter-spacing: 0.03em;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const NameContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const ContactName = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.17;
  margin: 0;
`;

export const Number = styled.span`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.17;
  margin: 0;
`;

export const DeleteBtn = styled.button`
  min-width: 116px;
  min-height: 44px;
  padding: 8px 24px;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.17;

  border: 0 solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  outline: none;

  background-color: #4e4b42;
  color: #fff;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    scale 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #ffa726;
    color: #4e4b42;
    scale: 1.05;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;
