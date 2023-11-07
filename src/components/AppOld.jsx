import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import Form from './Form';

const App = () => {
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
      <Contacts />
      <ToastContainer />
    </>
  );
};

export default App;
