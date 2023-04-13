import PropTypes from 'prop-types';
import { NameContainer, ContactName } from './ContactList.styled';

const ContactListItem = ({ name, number }) => {
  return (
    <NameContainer>
      <ContactName>{name}:</ContactName>
      <span>{number}</span>
    </NameContainer>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export { ContactListItem };
