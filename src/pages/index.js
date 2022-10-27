import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Bridge from 'views/Bridge';

const BridgePage = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Bridge />
    </LocalizationProvider>);
};

export default BridgePage;
