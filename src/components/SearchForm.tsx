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
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    addressField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '50ch',
      margin: 8,
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
      margin: 8,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    button: {
      margin: theme.spacing(1),
      height: '5ch',
    },
  })
);

interface SearchFormProps {
  ClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  ChangeHandler: (event: any) => void;
  FormState: FormState;
}

interface FormState {
  address: string;
  city: string;
  state: string;
  zip: number;
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

  return (
    <FormContainer>
      <h1>ARCHIVE SEARCH</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          name="address"
          id="address-input"
          label="Address"
          type="string"
          size="small"
          variant="outlined"
          className={classes.addressField}
          onChange={props.ChangeHandler}
        />

        <TextField
          name="city"
          id="city-input"
          label="City"
          type="string"
          size="small"
          variant="outlined"
          className={classes.textField}
          onChange={props.ChangeHandler}
        />

        <TextField
          name="state"
          id="state-input"
          label="State"
          type="string"
          size="small"
          variant="outlined"
          className={classes.textField}
          onChange={props.ChangeHandler}
        />

        <TextField
          name="zip"
          id="zip-input"
          label="Zip code"
          type="number"
          size="small"
          variant="outlined"
          style={{ width: '15ch' }}
          inputProps={{ min: '0' }}
          className={classes.textField}
          onChange={props.ChangeHandler}
        />

        <FormControl
          variant="outlined"
          className={classes.formControl}
          size="small"
        >
          <InputLabel id="normalized-label">Normalized</InputLabel>
          <Select
            name="normalized"
            id="normalized-input"
            label="Normalized"
            value={props.FormState.normalized}
            onChange={props.ChangeHandler}
          >
            <MenuItem value="true">true</MenuItem>
            <MenuItem value="false">false</MenuItem>
          </Select>
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={props.ClickHandler}
        >
          Search
        </Button>
      </form>
    </FormContainer>
  );
}
