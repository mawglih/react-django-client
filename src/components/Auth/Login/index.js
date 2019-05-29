import React, { useState, Fragment } from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import cn from 'classnames';
import Modal from 'components/Modal';
import styles from '../auth.css';

const Login = ({
  setNewUser,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [close, setClose] = useState(false);
  const handleSubmit = async (e, tokenAuth, client) => {
    e.preventDefault();
    const res = await tokenAuth();
    localStorage.setItem('authToken', res.data.tokenAuth.token);
    client.writeData({ data: { isLoggedIn: true }});
  }
  const errorButton = (
    <Fragment>
      <button
        onClick={() => setClose(true)}
      >
        Close
      </button>
    </Fragment>
  )
  return (
    <div className={styles.container}>
      <Mutation
        mutation={LOGIN_MUTATION}
        variables={{ username, password }}
        onCompleted={data => {
          console.log({data})
        }}
      >
        {(tokenAuth, { loading, error, called, client }) => {

          return (
            <form onSubmit={e => handleSubmit(e, tokenAuth, client)} className={styles.registerForm}>
              <h2 className={styles.formLabel}>Login</h2>
              <hr />
              <div className={styles.input}>
                <label htmlFor="username">Username*</label>
                <input id="username" type="text" onChange={e => setUsername(e.target.value)} />
              </div>
              <div className={styles.input}>
                <label htmlFor="password">Password*</label>
                <input id="password" type="password" onChange={e => setPassword(e.target.value)} />
              </div>
              <button
                type="submit"
                className={cn(
                  styles.btn,
                  styles.btnSubmit,
                )}
                disabled={loading || !username.trim() || !password.trim()}
              >
                {loading ? "Logging in..." : "Login"}
                {}
              </button>
              <button 
                type="button"
                className={cn(
                  styles.btn,
                  styles.btnSecondary,
                )}
                onClick={() => setNewUser(true)}
              >
                New user? Register here
              </button>
              <Modal 
                title="Error occurred"
                error={error}
                text={`New error: ${error}`}
                open={error}
                actionButtons={errorButton}
                modalDismiss={close}
              />
            </form>
          )
        }}
      </Mutation>

    </div>
  )
}

const LOGIN_MUTATION = gql`
mutation ($username:String!, $password:String!) {
  tokenAuth(username: $username, password: $password) {
    token
  }
}`

export default Login;
