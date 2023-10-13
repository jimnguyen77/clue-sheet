import { FC, useState } from 'react';
import Cookies from 'js-cookie';

import { Box, Container, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import Buttons from './common/buttons.component';
import { NumBoxes, PLAYERS, ROOMS, Titles, WEAPONS } from './common/data.constants';
import Players from './common/players.component';
import Section from './common/section.component';
import { mainStyle, mainSubStyle } from './common/styles.constants';

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

  return (
    <Container component='main' maxWidth='xs' sx={mainStyle}>
      <Box sx={mainSubStyle(theme)}>
        <Grid container spacing={1}>
          <Players
            saveStateToCookies={(newState) => saveStateToCookies(newState)}
            state={state}
            theme={theme}
          />
          <Section
            boxes={state.boxes}
            items={PLAYERS}
            rowIndex={0}
            setBoxes={(boxes) => saveStateToCookies({ ...state, boxes })}
            theme={theme}
            title={Titles.WHO}
          />
          <Section
            boxes={state.boxes}
            items={WEAPONS}
            rowIndex={PLAYERS.length}
            setBoxes={(boxes) => saveStateToCookies({ ...state, boxes })}
            theme={theme}
            title={Titles.WHAT}
          />
          <Section
            boxes={state.boxes}
            items={ROOMS}
            rowIndex={PLAYERS.length + WEAPONS.length}
            setBoxes={(boxes) => saveStateToCookies({ ...state, boxes })}
            theme={theme}
            title={Titles.WHERE}
          />
        </Grid>
      </Box>
      <Buttons resetState={resetState} />
    </Container>
  );
};

export default ClueSheet;
