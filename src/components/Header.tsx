import React from 'react';

import classes from './Header.module.css';
import {CustomLink} from './common/CustomLink';
import {useSession} from '../context/SessionContext';

export const Header = () => {
    const [user] = useSession();

    return <div className={classes.headerContainer}>
        <div className={classes.headerContent}>
            <div>
                <CustomLink to="/">
                    <strong>
                        oOb
                    </strong>
                </CustomLink>
            </div>
            <div style={{flex: 1}}/>
            {user && <div>
                {user.username}
            </div>}
        </div>
    </div>
};
