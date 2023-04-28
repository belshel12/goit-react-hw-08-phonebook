import PropTypes from 'prop-types';
import { NameContainer, ContactName, Number } from './ContactList.styled';

const ContactListItem = ({ name, number }) => {
  return (
    <NameContainer>
      <ContactName>{name}:</ContactName>
      <Number>{number}</Number>
    </NameContainer>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export { ContactListItem };
