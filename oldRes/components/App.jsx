import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { selectError, selectIsLoading } from 'redux/selectors';
import { SpinnerDotted } from 'spinners-react';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import Form from './Form';

const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1
        style={{
          marginTop: '25px',
          textAlign: 'center',
          color: 'rgb(145, 122, 122)',
        }}
      >
        Phonebook
      </h1>
      <Form />
      <Filter />
      {isLoading && !error && <SpinnerDotted color="#36d7b7" />}
      <Contacts />
      <ToastContainer />
    </>
  );
};

export default App;
