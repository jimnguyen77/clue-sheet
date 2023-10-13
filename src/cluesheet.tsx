import { FC, useState } from 'react';

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
  const [boxes, setBoxes] = useState(
    Array(PLAYERS.length + WEAPONS.length + ROOMS.length).fill(
      Array(NumBoxes.CHECK_BOXES).fill(false),
    ),
  );
  const theme = useTheme();

  return (
    <Container component='main' maxWidth='xs' sx={mainStyle}>
      <Box sx={mainSubStyle(theme)}>
        <Grid container spacing={1}>
          <Grid item xs={5} sx={gridTitleStyle(theme)}>
            {Titles.PLAYERS}
          </Grid>
          {Array(NumBoxes.PLAYERS)
            .fill(null)
            .map((_, index) => (
              <Grid item xs={1} key={index} sx={gridBorderStyle(theme)}>
                <TextField
                  size='small'
                  inputProps={{ maxLength: 1 }}
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
            boxes={boxes}
            setBoxes={setBoxes}
          />
          <Section
            title={Titles.WHAT}
            items={WEAPONS}
            theme={theme}
            rowIndex={PLAYERS.length}
            boxes={boxes}
            setBoxes={setBoxes}
          />
          <Section
            title={Titles.WHERE}
            items={ROOMS}
            theme={theme}
            rowIndex={PLAYERS.length + WEAPONS.length}
            boxes={boxes}
            setBoxes={setBoxes}
          />
        </Grid>
      </Box>
      <Box sx={{ my: 2 }}>
        <Button
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
