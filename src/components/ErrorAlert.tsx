import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

type ErrorProps = {
  showAlert: boolean,
  errorMessage?:  string
}
export default function ErrorAlert({showAlert = false, errorMessage = "Something went wrong."}:ErrorProps) {
  const [open, setOpen] = React.useState(showAlert);
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={6000} anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
        <Alert severity="error" onClose={()=>setOpen(false)} sx={{ width: '100%' }}>
          {errorMessage}
        </Alert>
      </Snackbar>
    </Stack>
  );
}