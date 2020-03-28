import React from 'react';

import classes from './Page.module.css';

export const Page: React.FunctionComponent<{}> = ({children}) => {
    return <div className={classes.content}>
        {children}
    </div>
};
