import React from 'react';

import classes from './Header.module.css';
import {CustomLink} from './common/CustomLink';

export const Header = () => {
    return <div className={classes.headerContainer}>
        <div className={classes.headerContent}>
            <div>
                <CustomLink to="/">
                    <strong>
                        oOb
                    </strong>
                </CustomLink>
            </div>
        </div>
    </div>
};
