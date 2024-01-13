import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import {
  selectVisibleContacts,
  selectContactsCount,
  selectIsLoading,
  selectError,
} from '../redux/selectors';

import css from './ContactList.module.css';

export const ContactList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);
  const count = useSelector(selectContactsCount);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <ul className={css.contactList}>
      {!count && !isLoading && !error ? (
        <p className={css.emptyMessage}>
          The Phonebook is empty. Add your first contact.
        </p>
      ) : (
        filteredContacts.map(contact =>
          contact.phone ? (
            <ContactItem key={contact.id} contact={contact} />
          ) : null
        )
      )}
    </ul>
  );
};
