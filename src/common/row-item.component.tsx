import { Fragment } from 'react';
import { Grid, Theme } from '@mui/material';
import { CheckMark, NumBoxes, QuestionMark, XMark } from './data.constants';
import { gridSectionTitleStyle, gridCheckboxStyle } from './styles.constants';

// Define the different states
const BoxStates = {
  BLANK: 0,
  CHECKMARK: 1,
  X_MARK: 2,
  QUESTION_MARK: 3,
};

type RowItemProps = {
  boxIndex: number;
  boxes: number[][];
  name: string;
  setBoxes: React.Dispatch<React.SetStateAction<number[][]>>;
  theme: Theme;
};

const RowItem = ({ boxIndex, boxes, name, setBoxes, theme }: RowItemProps) => (
  <Fragment>
    <Grid item xs={4} sx={gridSectionTitleStyle(theme)}>
      {name}
    </Grid>
    {Array.from({ length: NumBoxes.CHECK_BOXES }).map((_, index) => (
      <Grid
        item
        xs={1}
        key={index}
        sx={gridCheckboxStyle(theme)}
        onClick={() => {
          const newBoxes = boxes.map((row) => row.slice());
          // Cycle through the states
          newBoxes[boxIndex][index] = (newBoxes[boxIndex][index] + 1) % 4;
          setBoxes(newBoxes);
        }}
      >
        {/* Display the symbol based on the current state */}
        {boxes[boxIndex][index] === BoxStates.CHECKMARK && CheckMark}
        {boxes[boxIndex][index] === BoxStates.X_MARK && XMark}
        {boxes[boxIndex][index] === BoxStates.QUESTION_MARK && QuestionMark}
      </Grid>
    ))}
  </Fragment>
);

export default RowItem;
