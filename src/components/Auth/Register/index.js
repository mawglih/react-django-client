import React, { useState, Fragment } from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import cn from 'classnames';
import Modal from 'components/Modal';
// import Error from 'components/Error';
import styles from '../auth.css';

const Register = ({
  setNewUser,
}) => {
  let user = '';
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open,setOpen] = useState(false);
  const [close, setClose] = useState(false);

  const handleSubmit = (e, createUser) => {
    e.preventDefault();
    createUser();
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
  const actionButtons = (
    <Fragment>
      <button
        onClick={() => setClose(true)}
      >
        Cancel
      </button>
      <button
        onClick={() => setNewUser(false)}
      >
        To Login
      </button>
    </Fragment>
  )

  return (
    <div className={styles.container}>
      <Mutation
        mutation={REGISTER_MUTATION}
        variables={{ username, email, password }}
        onCompleted={data => {
          console.log(data);
          user = data.createUser.user.username;
          console.log(user);
          setOpen(true);
        }}
      >
        {(createUser, { loading, error }) => {

          return (
            <form onSubmit={e => handleSubmit(e, createUser)} className={styles.registerForm}>
              <h2 className={styles.formLabel}>New User Registration</h2>
              <hr />
              <div className={styles.input}>
                <label htmlFor="username">Username*</label>
                <input id="username" type="text" onChange={e => setUsername(e.target.value)} />
              </div>
              <div className={styles.input}>
                <label htmlFor="email">Email*</label>
                <input id="email" type="email" onChange={e => setEmail(e.target.value)} />
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
                disabled={loading || !username.trim() || !email.trim() || !password.trim()}
              >
                {loading ? "Registering..." : "Register"}
                {}
              </button>
              <button 
                type="button"
                className={cn(
                  styles.btn,
                  styles.btnSecondary,
                )}
                onClick={() => setNewUser(false)}
              >
                Previous user? Login here
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
      <Modal
        open={open}
        text={`New user: ${user}`}
        size="small"
        title="User created successfully"
        actionButtons={actionButtons}
        modalDismiss={close}
      />
    </div>
  )
}

const REGISTER_MUTATION = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      user {
        username
        email
      }
    }
  }
`

export default Register;
