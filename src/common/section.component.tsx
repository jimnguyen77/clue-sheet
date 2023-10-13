import { Fragment } from 'react';
import { Grid, Theme } from '@mui/material';
import RowItem from './row-item.component';
import { gridTitleStyle } from './styles.constants';

type SectionProps = {
  boxes: boolean[][];
  items: string[];
  rowIndex: number;
  setBoxes: React.Dispatch<React.SetStateAction<boolean[][]>>;
  theme: Theme;
  title: string;
};

const Section = ({ boxes, items, rowIndex, setBoxes, theme, title }: SectionProps) => (
  <Fragment>
    <Grid item xs={12} sx={gridTitleStyle(theme)}>
      {title}
    </Grid>
    {items.map((name, index) => (
      <RowItem
        key={name}
        boxes={boxes}
        boxIndex={rowIndex + index}
        name={name}
        setBoxes={setBoxes}
        theme={theme}
      />
    ))}
  </Fragment>
);

export default Section;
