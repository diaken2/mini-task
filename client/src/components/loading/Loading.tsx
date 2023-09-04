import { Box, Skeleton } from "@mui/material";
import React, {FC} from 'react'


const Loading:FC = () => {
  return (
    <Box display="flex" gap="15px">
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="rounded" width={150} height={50} />
    </Box>
  )
};

export default Loading;
