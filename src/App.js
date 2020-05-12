import React from "react";


import "./styles.css";

const usePasswordValidation = initialValue => {
    const [password, setPassword] = React.useState(initialValue);
    const [error, setError] = React.useState(undefined);

    const validatePassword = value => {
        let passwordError = undefined;
        if (!value.length) {
            passwordError = "Please enter a value";
        } else if (password && !/^.{5,15}$/.test(value)) {
            passwordError = "Password should be between 5 and 15 characters";
        }
        if (!passwordError) {
            setPassword(value);
        }
        setError(passwordError);
    };

    return [error, password, validatePassword];
};

function App() {
    const [
        EmailError,
        Email,
        validateEmail
    ] = usePasswordValidation("");
    const [
        newPasswordError,
        newPassword,
        validateNewPassword
    ] = usePasswordValidation("");
    const [
        confirmedPasswordError,
        confirmedPassword,
        validateConfirmedPassword
    ] = usePasswordValidation("");

    const allPasswordsSet =
        newPassword.length > 0 &&
        confirmedPassword.length > 0;

    return (
        <div className="App">
            <h1>AthrV-Ed LMS Portal</h1>
            <div className="formField">
                <h3>Email</h3>
                <input
                    type="Email"
                    onKeyUp={e => {
                        validateEmail(e.target.value);
                    }}
                    defaultValue={Email}
                    placeholder="Email"
                />
                {!!EmailError && (
                    <label className="error">EmailError</label>
                )}
            </div>
            <div className="formField">
                <h3>New Password</h3>
                <input
                    type="password"
                    onKeyUp={e => {
                        validateNewPassword(e.target.value);
                    }}
                    defaultValue={newPassword}
                    placeholder="New Password"
                />
                {!!newPasswordError && (
                    <label className="error">{newPasswordError}</label>
                )}
            </div>
            <div className="formField">
                <h3>Confirm Password</h3>
                <input
                    type="password"
                    onKeyUp={e => {
                        validateConfirmedPassword(e.target.value);
                    }}
                    defaultValue={confirmedPassword}
                    placeholder="Confirm Password"
                />
                {!!confirmedPasswordError && (
                    <label className="error">{confirmedPasswordError}</label>
                )}
            </div>
            <div className="formField">
                <button
                    type="button"
                    onClick={() => {
                        alert("Your password has been changed");
                    }}
                >
                    Submit
        </button>
            </div>
        </div>
    );
}

export default App;
