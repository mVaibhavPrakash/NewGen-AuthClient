import {Routes,Route} from 'react-router-dom'
import LoginForm from './LoginForm'
import Home from './Home'
import '../css/app.css'
import SignupForm from './SignupForm'

const App = () => {
    return (
        <div className='authapp'>
            <Routes>
                <Route path='auth' element={<LoginForm />}>
                    <Route path='login' element={<LoginForm/>} />
                    <Route path='signup' element={<SignupForm/>} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
