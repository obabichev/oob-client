import React from 'react';

import classes from './Header.module.css';
import {A} from './common/A';

export const Header = () => {
    return <div className={classes.headerContainer}>
        <div className={classes.headerContent}>
            <div>
                <strong>
                    oOb
                </strong>
            </div>
            <div style={{flex: 1}}></div>
            <div>
                <A href="/login">
                    Login
                </A>
            </div>
        </div>
    </div>
};
