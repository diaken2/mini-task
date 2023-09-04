import { Alert, Collapse, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { IClosableAlert } from "./types/types";
import React, {FC} from "react"
 



const ClosableAlert:FC<IClosableAlert> = ({errorMessage,onClose,isOpen}) => {
  return (
    <Collapse in={isOpen}>
    <Alert
        severity="warning"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={onClose}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {errorMessage}
        </Alert>
        </Collapse>
  )
};

export default React.memo(ClosableAlert);
