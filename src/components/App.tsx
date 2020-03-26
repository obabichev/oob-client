import React from 'react';
import {AppRouter} from './AppRouter';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-typescript.min.js'

import './App.css';


function App() {
    return (
        <div>
            <div className="content">
                <AppRouter/>
            </div>
        </div>
    );
}

export default App;
