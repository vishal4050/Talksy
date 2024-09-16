import React, { useState } from 'react';
import { TextField } from '@mui/material';

const InputBox = ({ value, onChange }) => {
  return (
    <TextField
      variant="outlined"
      placeholder="Type a message..."
      fullWidth
    />
  );
};

export default InputBox;
