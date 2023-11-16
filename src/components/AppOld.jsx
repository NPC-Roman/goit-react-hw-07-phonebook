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

/*
  "@redux-devtools/extension": "^3.2.3",
    "@reduxjs/toolkit": "^1.9.0",
    "@testing-library/jest-dom": "^5.16.3",
    "@testing-library/react": "^12.1.4",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.2.0",
    "react": "^18.1.0",
    "react-dom": "^18.1.0",
    "react-icons": "^4.6.0",
    "react-redux": "^8.0.5",
    "react-scripts": "5.0.1",
    "react-toastify": "^9.1.1",
    "redux": "^4.2.0",
    "redux-persist": "^6.0.0",
    "shortid": "^2.2.16",
    "spinners-react": "^1.0.7",
    "web-vitals": "^2.1.3"
    */