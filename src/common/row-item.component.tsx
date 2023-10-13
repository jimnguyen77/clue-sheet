import { FC, Fragment } from 'react';
import { Grid, Theme } from '@mui/material';
import { CheckMark, NumBoxes } from './data.constants';
import { gridSectionTitleStyle, gridCheckboxStyle } from './styles.constants';

type RowItemProps = {
  name: string;
  theme: Theme;
  boxIndex: number;
  boxes: boolean[][];
  setBoxes: React.Dispatch<React.SetStateAction<boolean[][]>>;
};

const RowItem: FC<RowItemProps> = ({ name, theme, boxIndex, boxes, setBoxes }) => (
  <Fragment>
    <Grid item xs={4} sx={gridSectionTitleStyle(theme)}>
      {name}
    </Grid>
    {Array(NumBoxes.CHECK_BOXES)
      .fill(null)
      .map((_, index) => (
        <Grid
          item
          xs={1}
          key={index}
          sx={gridCheckboxStyle(theme)}
          onClick={() => {
            const newBoxes = boxes.map((row) => row.slice());
            newBoxes[boxIndex][index] = !newBoxes[boxIndex][index];
            setBoxes(newBoxes);
          }}
        >
          {boxes[boxIndex][index] ? CheckMark : ''}
        </Grid>
      ))}
  </Fragment>
);

export default RowItem;
