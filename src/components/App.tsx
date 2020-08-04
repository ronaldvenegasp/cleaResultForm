import React, { ChangeEvent, useState } from 'react';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import SearchForm from './SearchForm';
import DataTable from './DataTable';
import '../styles/index.scss';

export default function App() {
  const [state, setState] = useState({
    address: '',
    city: '',
    state: '',
    zip: 0,
    normalized: false,
    loadingData: false,
    data: [],
  });

  // Put together the request URL with the data from the form
  const getUrl = () => {
    let url = `https://elastic.snaplogic.com:443/api/1/rest/slsched/feed/ClearesultDev/LegacyArchive/Working/AddressInventory?`;
    for (const [key, value] of Object.entries(state)) {
      url = value && key !== 'data' ? (url += `&${key}=${value}`) : url;
    }
    return url;
  };

  const handleSearchButton = (event: any) => {
    event.preventDefault();
    setState({ ...state, loadingData: true });

    // Use a proxyURL for a CORS problem
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const bearerToken = 'dUSRGkaryQyUJ02XF97i9PdW2DpRV9yI';
    const subscriptionKey = '36493c4771434328aa9e5522248e91a3';

    // GET Request to the client's API with fetch()
    // fetch(proxyUrl + getUrl(), {
    //   method: 'GET',
    //   headers: {
    //     Authorization: `Bearer ${bearerToken}`,
    //     'Ocp-Apim-Subscription-Key': `${subscriptionKey}`,
    //   },
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     setState({ ...state, loadingData: false, data });
    //     console.log(response.data);
    //   })
    //   .catch(error => console.log(error));

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
        console.log(response.data);
      })
      .catch(error => console.error(error));
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
        {state.loadingData && (
          <div>
            <span>Loading data...</span>
            <CircularProgress color="primary" />
          </div>
        )}
        <DataTable></DataTable>
      </Container>
    </React.Fragment>
  );
}
