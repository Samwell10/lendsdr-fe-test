import './LoginForm.scss';
import { Link } from 'react-router-dom';
const LoginForm = () => {
    return ( 
        <div className="login-form">
            <form>
                <div className="email">
                    <input
                        type='email'
                        name='email'
                        placeholder='Email'
                        required
                    />
                </div>
                <div className="password">
                    <input
                        type='password'
                        name='password'
                        placeholder='Password'
                        required    
                    />
                    <p>show</p>
                </div>
                <p className="forgot-password">FORGOT PASSWORD?</p>
                <Link to='/dashboard'>
                    <div className="submit">
                        <input
                            type='submit'
                            name='submit'
                            value='LOG IN'
                        />
                    </div>
                </Link>
            </form>
        </div>
     );
}
 
export default LoginForm;