import React, {ChangeEvent} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import DataTable from './DataTable';
import SearchForm from './SearchForm';

type ContainerProps = {
  padding?: string | 0;
  margin?: string | 0;
};

export default function App() {
  const handleSearchButton = (event: any) => {
    event.preventDefault();
    console.log('handleSearchButton');
  };

  const handleInputChange = (event: ChangeEvent<{ value: string }>) => {
    console.log(event);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <SearchForm
          ClickHandler={handleSearchButton}
          ChangeHandler={handleInputChange}
        ></SearchForm>
        <DataTable></DataTable>
      </Container>
    </React.Fragment>
  );
}
