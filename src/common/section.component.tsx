import { FC, Fragment } from 'react';
import { Grid, Theme } from '@mui/material';
import RowItem from './row-item.component';
import { gridTitleStyle } from './styles.constants';

type SectionProps = {
  title: string;
  items: string[];
  theme: Theme;
  rowIndex: number;
  boxes: boolean[][];
  setBoxes: React.Dispatch<React.SetStateAction<boolean[][]>>;
};

const Section: FC<SectionProps> = ({ title, items, theme, rowIndex, boxes, setBoxes }) => (
  <Fragment>
    <Grid item xs={12} sx={gridTitleStyle(theme)}>
      {title}
    </Grid>
    {items.map((name, index) => (
      <RowItem
        key={name}
        name={name}
        theme={theme}
        boxIndex={rowIndex + index}
        boxes={boxes}
        setBoxes={setBoxes}
      />
    ))}
  </Fragment>
);

export default Section;
