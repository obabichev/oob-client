import React from 'react';

import classes from './A.module.css';

export const A: React.FunctionComponent<{href?: string}> = ({children, href}) => {
    return <a className={classes.a} href={href}>
        {children}
    </a>
};
