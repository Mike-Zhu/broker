import React from 'react';
import ReactDOM from 'react-dom';
import './static/styles/weui.scss';
import './static/styles/example.scss';
import './static/icons/iconfont.css';

import Main from './main';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
