import { useState } from 'react';
import { auth } from '../firebaseconfig';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link } from 'react-router-dom';
import '../App.css';

const provider = new GoogleAuthProvider();

const Signup = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false); // separate for Google button
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

    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setSuccess(true);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  }

  // Google Sign Up handler (only runs when button clicked)
  const handleGoogleSignup = () => {
    setGoogleLoading(true);
    setError('');

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log('Google signup success:', user);
        setSuccess(true);
        setGoogleLoading(false);
      })
      .catch((error) => {
        setGoogleLoading(false);
        setError(error.message);
      });
  };

  return (
    <div className="register-container">
      <h2>Create Account</h2>

      {/* Success / Error Messages */}
      {success && (
        <div style={{
          background: '#d1fae5',
          color: '#065f46',
          padding: '12px',
          borderRadius: '8px',
          marginBottom: '20px',
          textAlign: 'center',
          fontWeight: '500'
        }}>
          Account created successfully!
        </div>
      )}

      {error && (
        <div style={{
          background: '#fee2e2',
          color: '#991b1b',
          padding: '12px',
          borderRadius: '8px',
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="name@company.com"
            required
            disabled={loading || googleLoading}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={(e) => handleChange('password', e.target.value)}
            placeholder="••••••••"
            required
            disabled={loading || googleLoading}
          />
        </div>

        <button
          type="submit"
          disabled={loading || googleLoading}
          style={{
            opacity: loading || googleLoading ? 0.7 : 1,
            cursor: loading || googleLoading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? 'Creating Account...' : 'Sign Up'}
        </button>
      </form>

      {/* Divider + Google Button */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        margin: '24px 0',
        color: '#6b7280'
      }}>
        <div style={{ flex: 1, height: '1px', background: '#d1d5db' }} />
        <span style={{ padding: '0 16px', fontSize: '14px' }}>OR</span>
        <div style={{ flex: 1, height: '1px', background: '#d1d5db' }} />
      </div>

      <button
        onClick={handleGoogleSignup}
        disabled={loading || googleLoading}
        style={{
          width: '100%',
          padding: '12px',
          background: '#ffffff',
          border: '1px solid #d1d5db',
          borderRadius: '6px',
          fontSize: '16px',
          fontWeight: '500',
          color: '#111827',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          cursor: loading || googleLoading ? 'not-allowed' : 'pointer',
          opacity: loading || googleLoading ? 0.7 : 1,
        }}
      >
        {googleLoading ? (
          'Connecting...'
        ) : (
          <>
            <svg width="20" height="20" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
            Sign Up with Google
          </>
        )}
      </button>

      <div className="form-footer">
        <p>
          Already have an account?{' '}
          <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;