import React, { ChangeEvent, useState } from 'react';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import SearchForm from './SearchForm';
import DataTable from './DataTable';
import '../styles/index.scss';

/*
 * Use a proxyURL because a CORS problem
 * Bearer token and Subscription key pendig to define where they come from
 */
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const bearerToken = 'dUSRGkaryQyUJ02XF97i9PdW2DpRV9yI';
const subscriptionKey = '36493c4771434328aa9e5522248e91a3';

export default function App() {
  const [state, setState] = useState({
    address: '',
    city: '',
    state: '',
    zip: '',
    normalized: '',
    loadingData: false,
    data: [],
  });

  // Set the state values with the data from the form
  const handleInputChange = (
    event: ChangeEvent<{ value: string; name: string }>
  ) => setState({ ...state, [event.target.name]: event.target.value });

  // Put together the request URL with the data from the form
  const getUrl = () => {
    let url = `https://elastic.snaplogic.com:443/api/1/rest/slsched/feed/ClearesultDev/LegacyArchive/Working/AddressInventory?`;
    for (const [key, value] of Object.entries(state)) {
      url = value && key !== 'data' ? (url += `&${key}=${value}`) : url;
    }
    return url;
  };

  const handleClearButton = (event: any) => {
    event.preventDefault();
    setState({
      ...state,
      address: '',
      city: '',
      state: '',
      zip: '',
      normalized: '',
      loadingData: false,
    });
  };

  const handleSearchButton = (event: any) => {
    event.preventDefault();
    setState({ ...state, loadingData: true });

    // GET Request to the client's API with Axios
    axios({
      url: proxyUrl + getUrl(),
      method: 'GET',
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        'Ocp-Apim-Subscription-Key': `${subscriptionKey}`,
      },
    })
      .then(response => {
        setState({ ...state, loadingData: false, data: response.data });
        console.log(state.data);
      }
      )
      .catch(error => console.error(error));
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <SearchForm
          clickSearchHandler={handleSearchButton}
          clickClearHandler={handleClearButton}
          changeHandler={handleInputChange}
          formState={state}
        ></SearchForm>
        {state.loadingData && (
          <div>
            <span>Loading data...</span>
            <CircularProgress color="secondary" />
          </div>
        )}
        <DataTable></DataTable>
      </Container>
    </React.Fragment>
  );
}
