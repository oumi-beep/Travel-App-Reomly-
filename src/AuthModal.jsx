import React, { useState } from 'react';
import './auth_modal.scss'; // Ensure you have corresponding CSS styles

const AuthModal = ({ isOpen, onClose, onLogin }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Example user data for simulation
        const users = JSON.parse(localStorage.getItem('users')) || {};

        if (isLogin) {
            // Handle login
            if (users[username] && users[username].password === password) {
                // Show user info (simulated with alert)
                alert('Login successful!');
                const userInfo = { username, profilePic: users[username].profilePic };
                localStorage.setItem('currentUser', JSON.stringify(userInfo));
                onLogin(userInfo); // Pass user info to the parent component
                onClose();
            } else {
                setErrorMessage('Invalid username or password.');
            }
        } else {
            // Handle sign-up
            if (users[username]) {
                setErrorMessage('User already exists.');
                return;
            }
            users[username] = { password, profilePic: 'path/to/profile-pic.jpg' };
            localStorage.setItem('users', JSON.stringify(users));
            alert('Sign up successful!');
            setIsLogin(true); // Switch to login view
        }
    };

    // Close modal if not open
    if (!isOpen) return null;

    return (
        <div className="auth-modal">
            <div className="auth-modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    {!isLogin && (
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    )}
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="auth-button">
                        {isLogin ? 'Login' : 'Sign Up'}
                    </button>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <p onClick={() => setIsLogin(!isLogin)} className="switch-link">
                        {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
                    </p>
                </form>
            </div>
        </div>
    );
};

export default AuthModal;
