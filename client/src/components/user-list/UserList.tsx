import { Avatar, Box, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import React, { FC } from "react"
import { IUserListType } from "./types/types";
import PersonOutlineIcon  from '@mui/icons-material/PersonOutline';
import Loading from '../loading/Loading'
const UserList: FC<IUserListType> = ({ foundedUsers,isLoading }) => {
    if (!!isLoading) {
        return (
            <Box display="flex" flexDirection="column" gap="10px">
            {[...new Array(7)].map(() => {
              return <Loading />;
            })}
            </Box>
          
        );
      }
    return (
        <div>
            {!!foundedUsers[0] ? foundedUsers.map(({ email, number }) => {
                return (
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                        <PersonOutlineIcon/>  
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={email} secondary={number} />
                </ListItem>)
            }) : 'The found users will be displayed here'}
        </div>

    )
};

export default React.memo(UserList);
