import LoginForm from '../../Components/Forms/LoginForm';
import illustration from '../../Image/loginillustration.svg';
import logo from '../../Image/logo.svg'
import './Login.scss'
const Login = () => {
    return ( 
        <div className="login">
            <div className="illustration">
                <div className="illustration-inner">
                    <div className="logo">
                        <img src={logo} alt="logo"></img>
                    </div>
                    <div className="image-container">
                        <img src={illustration}></img>
                    </div>
                </div>
            </div>
            <div className="login-side">
                <div className="login-side-inner">
                    <div className="login-instruction">
                        <p className='welcome'>Welcome!</p>
                        <p className='instruction'>Enter details to login.</p>
                    </div>
                    <div className='loginform-container'>
                        <LoginForm/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Login;