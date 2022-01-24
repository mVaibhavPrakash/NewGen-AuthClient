import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import '../css/index.css';

const AuthMount = (ref) =>{
    ReactDOM.render(
    <>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </>,
    ref
);
}


if(process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#auth-root')
    if(devRoot){
        AuthMount(devRoot)
    }
}

export {AuthMount}