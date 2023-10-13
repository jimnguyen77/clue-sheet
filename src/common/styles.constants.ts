import { Theme } from '@mui/material/styles';

export const gridBorderStyle = (theme: Theme) => ({
  backgroundColor: theme.palette.common.white,
  border: `1px solid ${theme.palette.primary.light}`,
});

export const gridCheckboxStyle = (theme: Theme) => ({
  ...gridBorderStyle(theme),
  cursor: 'pointer',
  fontWeight: 'bold',
  paddingLeft: '9px !important',
  paddingTop: '2px !important',
});

export const gridSectionTitleStyle = (theme: Theme) => ({
  ...gridBorderStyle(theme),
  paddingTop: '2px !important',
});

export const gridTitleStyle = (theme: Theme) => ({
  color: theme.palette.common.white,
  fontWeight: 'bold',
});

export const mainStyle = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100vh',
};

export const mainSubStyle = (theme: Theme) => ({
  alignItems: 'center',
  backgroundColor: theme.palette.primary.light,
  display: 'flex',
  flexWrap: 'nowrap',
  paddingBottom: 1,
  paddingLeft: 2,
  paddingRight: 1,
  paddingTop: 2,
  width: '100%',
});

export const TextFieldStyle = {
  '& .MuiInput-underline:after': {
    borderBottom: 'none !important',
  },
  '& .MuiInput-underline:before': {
    borderBottom: 'none !important',
  },
  '&:hover .MuiInput-underline:before': {
    borderBottom: 'none !important',
  },
  '& .MuiInput-underline.Mui-focused:after': {
    borderBottom: 'none !important',
  },
  '& .MuiInput-underline.Mui-focused:before': {
    borderBottom: 'none !important',
  },
  '& .MuiInputBase-input': {
    borderBottom: 'none !important',
  },
};