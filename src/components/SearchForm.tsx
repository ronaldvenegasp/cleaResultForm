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
  normalized: boolean;
}

type FormContainerProps = {
  padding?: string | 0;
  margin?: string | 0;
};

export const FormContainer = styled.div<FormContainerProps>`
  padding: ${props => ('padding' in props ? props.padding : 0)};
  margin: ${props => ('margin' in props ? props.margin : 0)};
`;

export default function SearchForm(Props: SearchFormProps) {
  const classes = useStyles();

  return (
    <FormContainer>
      <h1>ARCHIVE SEARCH</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          name="address"
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
          value={Props.FormState.address}
          onChange={Props.ChangeHandler}
        />

        <TextField
          name="city"
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
          value={Props.FormState.city}
          onChange={Props.ChangeHandler}
        />

        <TextField
          name="state"
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
          value={Props.FormState.state}
          onChange={Props.ChangeHandler}
        />

        <TextField
          name="zip"
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
          value={Props.FormState.zip}
          onChange={Props.ChangeHandler}
        />

        <FormControl
          variant="outlined"
          className={classes.formControl}
          size="small"
        >
          <InputLabel id="normalized-label">Normalized</InputLabel>
          <Select
            name="normalized"
            labelId="normalized-label"
            id="normalized-input"
            label="Normalized"
            value={Props.FormState.normalized}
            onChange={Props.ChangeHandler}
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
          onClick={Props.ClickHandler}
        >
          Search
        </Button>
      </form>
    </FormContainer>
  );
}
