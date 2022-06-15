import React, {FC} from 'react';
import {Box, Typography} from "@mui/material";

interface AppFormHeaderProps {
    text?: string
}

const AppFormHeader: FC<AppFormHeaderProps> = ({text}) => {
    return (
        <Box
            borderRadius={'16px'}
            padding={'5px'}
            margin={'5px'}
        >
            <Typography
                variant={'h6'}
                color={'primary.main'}
            >
                {text}
            </Typography>
        </Box>
    );
};

export default AppFormHeader;