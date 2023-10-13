import { FC, useState } from 'react';
import Cookies from 'js-cookie';

import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Button, Container, Grid, TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { GitHubLink, NumBoxes, PLAYERS, ROOMS, Titles, WEAPONS } from './common/data.constants';
import Section from './common/section.component';
import {
  gridBorderStyle,
  gridTitleStyle,
  mainStyle,
  mainSubStyle,
  TextFieldStyle,
} from './common/styles.constants';

const ClueSheet: FC = () => {
  const defaultBoxes = Array(PLAYERS.length + WEAPONS.length + ROOMS.length).fill(
    Array(NumBoxes.CHECK_BOXES).fill(false),
  );

  const defaultTextBoxes = Array(NumBoxes.PLAYERS).fill('');

  const initialState = {
    boxes: defaultBoxes,
    textBoxes: defaultTextBoxes,
  };

  const [state, setState] = useState(() => {
    const savedState = Cookies.get('gameState');
    return savedState ? JSON.parse(savedState) : initialState;
  });

  const theme = useTheme();

  const saveStateToCookies = (newState: typeof state) => {
    Cookies.set('gameState', JSON.stringify(newState), { expires: 1 }); // expires in 1 day
    setState(newState);
  };

  const resetState = () => {
    Cookies.remove('gameState');
    setState(initialState);
  };

  console.log(state);

  return (
    <Container component='main' maxWidth='xs' sx={mainStyle}>
      <Box sx={mainSubStyle(theme)}>
        <Grid container spacing={1}>
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

          <Section
            title={Titles.WHO}
            items={PLAYERS}
            theme={theme}
            rowIndex={0}
            boxes={state.boxes}
            setBoxes={(boxes) => saveStateToCookies({ ...state, boxes })}
          />
          <Section
            title={Titles.WHAT}
            items={WEAPONS}
            theme={theme}
            rowIndex={PLAYERS.length}
            boxes={state.boxes}
            setBoxes={(boxes) => saveStateToCookies({ ...state, boxes })}
          />
          <Section
            title={Titles.WHERE}
            items={ROOMS}
            theme={theme}
            rowIndex={PLAYERS.length + WEAPONS.length}
            boxes={state.boxes}
            setBoxes={(boxes) => saveStateToCookies({ ...state, boxes })}
          />
        </Grid>
      </Box>
      <Box sx={{ my: 2, display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <Button onClick={resetState} size='small' variant='contained' color='info'>
          Reset
        </Button>

        <Button
          color='info'
          href={GitHubLink}
          rel='noopener noreferrer'
          size='small'
          target='_blank'
          variant='outlined'
        >
          <GitHubIcon sx={{ mr: 1 }} /> Github
        </Button>
      </Box>
    </Container>
  );
};

export default ClueSheet;
