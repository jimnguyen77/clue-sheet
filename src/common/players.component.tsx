import { Grid, TextField, Theme } from '@mui/material';
import { Titles } from './data.constants';
import { gridBorderStyle, gridTitleStyle, TextFieldStyle } from './styles.constants';

type GameState = {
  boxes: boolean[][];
  textBoxes: string[];
};

type PlayersProps = {
  saveStateToCookies: (newState: GameState) => void;
  state: GameState;
  theme: Theme;
};

const Players = ({ saveStateToCookies, state, theme }: PlayersProps) => (
  <>
    <Grid item xs={5} sx={gridTitleStyle(theme)}>
      {Titles.PLAYERS}
    </Grid>
    {state.textBoxes.map((text: string, index: number) => (
      <Grid item xs={1} key={index} sx={gridBorderStyle(theme)}>
        <TextField
          size='small'
          inputProps={{ maxLength: 1 }}
          value={text}
          onChange={(e) => {
            const newTextboxes = [...state.textBoxes];
            newTextboxes[index] = e.target.value;
            saveStateToCookies({ ...state, textBoxes: newTextboxes });
          }}
          variant='standard'
          sx={TextFieldStyle}
        />
      </Grid>
    ))}
  </>
);

export default Players;
