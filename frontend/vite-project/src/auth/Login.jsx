import { useState } from 'react'
import { auth } from '../firebaseconfig'; 
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import '../App.css';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    function handleChange(key, val) {
        setUser({
            ...user,
            [key]: val
        });
        setError('');
    }

    function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setError('');

        signInWithEmailAndPassword(auth, user.email, user.password)
  .then((userCredential) => {
    const user = userCredential.user;
    localStorage.setItem('user', user)
    setLoading(false);
  })
  .catch((error) => {
    setLoading(false);
    setError(error.message);
  });

  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}

  return (
    <div className="register-container">
      <h2>Login Account</h2>

      <form onSubmit={handleSubmit}>
    
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            placeholder="name@company.com"
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            placeholder="••••••••"
            required
          />
        </div>

        <button type="submit"> SignIn </button>
      </form>

      <div className="form-footer">
        <p>
          Already have an account?{' '}
          <Link to="/">Register</Link>
        </p>
      </div>
    </div>
  )
}

export default Login