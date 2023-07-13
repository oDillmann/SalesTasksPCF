import { IStackStyles, Stack } from '@fluentui/react';
import React from 'react';

interface props {
    children: JSX.Element
}

const Card = ({ children }: props) => {
    return (
        <Stack tokens={{ childrenGap: 20 }} styles={{
            root: {
                background: 'white',
                borderRadius: 5
            }
        } as IStackStyles}>
            {children}
        </Stack>
    );
}

export default Card;
