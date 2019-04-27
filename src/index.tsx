import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {Form} from "./Components/Form/Form";

ReactDOM.render(<Form />, document.getElementById('root'));

serviceWorker.unregister();
