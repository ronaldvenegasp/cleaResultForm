import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    addressField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '50ch',
      size: 'small',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
      size: 'small',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      size: 'small',
    },
    button: {
      margin: theme.spacing(1),
      size: 'small',
      height: '5ch',
    },
  })
);

type FormContainerProps = {
  padding?: string | 0;
  margin?: string | 0;
};

export const FormContainer = styled.div<FormContainerProps>`
  padding: ${props => ('padding' in props ? props.padding : 0)};
  margin: ${props => ('margin' in props ? props.margin : 0)};
`;

export default function SearchForm() {
  const [state, setState] = useState({
    address: '',
    city: '',
    state: '',
    zip: 0,
    normalized: false,
  });

  const classes = useStyles();

  const handlerAddressChange = (event: ChangeEvent<{ value: string }>) =>
    setState({ ...state, address: event.target.value });

  const handlerCityChange = (event: ChangeEvent<{ value: string }>) =>
    setState({ ...state, city: event.target.value });

  const handlerStateChange = (event: ChangeEvent<{ value: string }>) =>
    setState({ ...state, state: event.target.value });

  const handlerZipChange = (event: any) =>
    setState({ ...state, zip: parseInt(event.target.value) });

  const handleNormalizedChange = (event: any) =>
    setState({ ...state, normalized: !!event.target.value });

  const handleSearchButton = (event: any) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <FormContainer>
      <h1>ARCHIVE SEARCH</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="address-input"
          className={classes.addressField}
          label="Address"
          type="string"
          style={{ margin: 8 }}
          placeholder="Address"
          helperText="Address input"
          size="small"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={state.address}
          onChange={handlerAddressChange}
        />

        <TextField
          id="city-input"
          className={classes.textField}
          label="City"
          type="string"
          style={{ margin: 8 }}
          placeholder="City"
          helperText="City input"
          size="small"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={state.city}
          onChange={handlerCityChange}
        />

        <TextField
          id="state-input"
          className={classes.textField}
          label="State"
          type="string"
          style={{ margin: 8 }}
          placeholder="State"
          helperText="State input"
          size="small"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={state.state}
          onChange={handlerStateChange}
        />

        <TextField
          id="zip-input"
          className={classes.textField}
          label="Zip code"
          type="number"
          style={{ margin: 8, width: '15ch' }}
          placeholder="Zip code"
          helperText="Zip code input"
          size="small"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={state.zip}
          onChange={handlerZipChange}
        />

        <FormControl
          variant="outlined"
          className={classes.formControl}
          size="small"
        >
          <InputLabel id="normalized-label">Normalized</InputLabel>
          <Select
            labelId="normalized-label"
            id="normalized-input"
            value={state.normalized ? 1 : 0}
            label="Normalized"
            onChange={handleNormalizedChange}
          >
            <MenuItem value={1}>true</MenuItem>
            <MenuItem value={0}>false</MenuItem>
          </Select>
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleSearchButton}
        >
          Search
        </Button>
      </form>
    </FormContainer>
  );
}
