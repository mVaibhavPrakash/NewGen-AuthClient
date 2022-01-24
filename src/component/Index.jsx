import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import AuthApp from './AuthApp';
import '../css/index.css';

ReactDOM.render(
  <>
    <BrowserRouter>
      <AuthApp />
    </BrowserRouter>
  </>,
  document.getElementById('auth-root')
);
