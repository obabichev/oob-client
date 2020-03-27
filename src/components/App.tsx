import React from 'react';
import {AppRouter} from './AppRouter';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-typescript.min.js'

import classes from './App.module.css';


function App() {
    return (
        <div>
            <div className={classes.content}>
                <AppRouter/>
            </div>
        </div>
    );
}

export default App;
