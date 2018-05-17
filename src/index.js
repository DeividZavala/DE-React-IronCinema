import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter} from 'react-router-dom';
import 'toastr/build/toastr.css'
import './index.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import InjectTapEventPlugin from 'react-tap-event-plugin';

const WithRouter = () =>{
    return <BrowserRouter>
                <MuiThemeProvider>
                    <App/>
                </MuiThemeProvider>
            </BrowserRouter>
};

ReactDOM.render( <WithRouter/>, document.getElementById('root'));
registerServiceWorker();
InjectTapEventPlugin();