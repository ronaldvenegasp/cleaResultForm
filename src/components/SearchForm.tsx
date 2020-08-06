import React from 'react';
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
    textField: {
      margin: theme.spacing(1),
      width: '25ch',
      [`& fieldset`]: {
        borderRadius: 0,
      },
      '& .MuiOutlinedInput-root': {
        '&:hover fieldset': {
          borderColor: 'red',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'red',
        },
      },
      '&:hover label': {
        color: 'red',
      },
      '& label.Mui-focused': {
        color: 'red',
      },
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: '25ch',
      [`& fieldset`]: {
        borderRadius: 0,
      },
      '& .MuiOutlinedInput-root': {
        '&:hover fieldset': {
          borderColor: 'red',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'red',
        },
      },
      '&:hover label': {
        color: 'red',
      },
      '& label.Mui-focused': {
        color: 'red',
      },
    },
    buttonSearch: {
      margin: theme.spacing(1),
      height: '5ch',
      width: '15ch',
      color: 'white',
      background: 'red',
      '&:hover': {
        background: 'black',
      },
      border: 0,
      borderRadius: 0,
    },
    buttonClear: {
      margin: theme.spacing(1),
      height: '5ch',
      width: '15ch',
      color: 'red',
      border: 0,
      borderRadius: 0,
    },
    label: {
      textTransform: 'capitalize',
    },
  })
);

interface SearchFormProps {
  clickSearchHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  clickClearHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  changeHandler: (event: any) => void;
  formState: FormState;
}

interface FormState {
  address: string;
  city: string;
  state: string;
  zip: string;
  normalized: string;
}

type FormContainerProps = {
  padding?: string | 0;
  margin?: string | 0;
};

export const FormContainer = styled.div<FormContainerProps>`
  padding: ${props => ('padding' in props ? props.padding : 0)};
  margin: ${props => ('margin' in props ? props.margin : 0)};
`;

export default function SearchForm(props: SearchFormProps) {
  const classes = useStyles();
  const { address, city, state, zip } = props.formState;
  const buttonSearchDisabled = !address || !city || !state || !zip;
  const buttonClearDisabled = !address && !city && !state && !zip;

  return (
    <FormContainer padding="1.2rem" margin="1.6rem" className="form-container">
      <h2 className="form-container__title">Welcome to Data Archive</h2>
      <p className="form-container__subtitle">Start a search</p>
      <form noValidate autoComplete="off">
        <TextField
          type="string"
          name="address"
          id="address-input"
          label="Address"
          helperText="*Required"
          size="small"
          variant="outlined"
          classes={{
            root: classes.textField,
          }}
          value={props.formState.address}
          onChange={props.changeHandler}
        />

        <TextField
          type="string"
          name="city"
          id="city-input"
          label="City"
          helperText="*Required"
          size="small"
          variant="outlined"
          className={classes.textField}
          value={props.formState.city}
          onChange={props.changeHandler}
        />

        <TextField
          type="string"
          name="state"
          id="state-input"
          label="State"
          helperText="*Required"
          size="small"
          variant="outlined"
          className={classes.textField}
          value={props.formState.state}
          onChange={props.changeHandler}
        />

        <TextField
          type="string"
          name="zip"
          id="zip-input"
          label="Zip code"
          helperText="*Required"
          size="small"
          variant="outlined"
          className={classes.textField}
          value={props.formState.zip}
          onChange={props.changeHandler}
        />

        <FormControl
          size="small"
          variant="outlined"
          className={classes.formControl}
        >
          <InputLabel>Normalized</InputLabel>
          <Select
            id="normalized-input"
            name="normalized"
            label="Normalized"
            value={props.formState.normalized}
            onChange={props.changeHandler}
          >
            <MenuItem value="true">true</MenuItem>
            <MenuItem value="false">false</MenuItem>
          </Select>
        </FormControl>

        <Button
          type="submit"
          color="secondary"
          variant="contained"
          disabled={buttonSearchDisabled}
          classes={{
            root: classes.buttonSearch,
            label: classes.label,
          }}
          onClick={props.clickSearchHandler}
        >
          Search
        </Button>
        <Button
          color="secondary"
          disabled={buttonClearDisabled}
          classes={{
            root: classes.buttonClear,
            label: classes.label,
          }}
          onClick={props.clickClearHandler}
        >
          Clear
        </Button>
      </form>
    </FormContainer>
  );
}
