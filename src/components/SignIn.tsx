import React, { FormEvent, useState } from "react";
import { CircularProgress, Link, TextField } from "@material-ui/core";
import { LoadingButton } from "@material-ui/lab";

const emailValidationRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

export default function SignIn(): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<{ email?: string; password?: string }>({});
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    let error = false;

    if (!email.match(emailValidationRegex) || email === "") {
      error = true;
      setErrorMessage({
        email: "Invalid email address.",
      });
    }

    if (password === "") {
      error = true;
      setErrorMessage((prev) => ({
        ...prev,
        password: "Fill in a password.",
      }));
    }

    if (!error) {
      setErrorMessage({});
      setLoading(true);
    }
  };

  return (
    <form className="sign-in-form" noValidate>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="Email"
        name="email"
        type="email"
        autoComplete="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setErrorMessage((prev) => ({
            ...prev,
            email: undefined,
          }));
        }}
        error={!!errorMessage.email}
        helperText={errorMessage.email && errorMessage.email}
        autoFocus
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="Password"
        name="password"
        type="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setErrorMessage((prev) => ({
            ...prev,
            password: undefined,
          }));
        }}
        error={!!errorMessage.password}
        helperText={errorMessage.password && errorMessage.password}
      />
      <LoadingButton
        className="sign-in-form-submit"
        fullWidth
        pending={loading}
        pendingIndicator={<CircularProgress color="primary" size={24} />}
        color="primary"
        variant="contained"
        onClick={handleSubmit}>
        Sign In !
      </LoadingButton>
      <Link href="/">Forgot password ?</Link>
    </form>
  );
}
