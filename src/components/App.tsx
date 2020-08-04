import React, { ChangeEvent, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import DataTable from './DataTable';
import SearchForm from './SearchForm';

type ContainerProps = {
  padding?: string | 0;
  margin?: string | 0;
};

export default function App() {
  const [state, setState] = useState({
    address: '',
    city: '',
    state: '',
    zip: 0,
    normalized: false,
  });

  const handleSearchButton = (event: any) => {
    event.preventDefault();
    console.log(state);
  };

  const handleInputChange = (
    event: ChangeEvent<{ value: string; name: string }>
  ) => setState({ ...state, [event.target.name]: event.target.value });

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <SearchForm
          ClickHandler={handleSearchButton}
          ChangeHandler={handleInputChange}
          FormState={state}
        ></SearchForm>
        <DataTable></DataTable>
      </Container>
    </React.Fragment>
  );
}
