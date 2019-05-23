import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import cn from 'classnames';
import styles from '../auth.css'

const Register = ({
  setNewUser,
}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e, createUser) => {
    e.preventDefault();
    const res = await createUser();
    console.log({res});
  }
  return (
    <div className={styles.container}>
      <Mutation
        mutation={REGISTER_MUTATION}
        variables={{ username, email, password }}
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
              <button type="submit" className={cn(
                  styles.btn,
                  styles.btnSubmit,
                )}
              >
                Submit
              </button>
              <button type="button" className={cn(
                styles.btn,
                styles.btnSecondary,
              )}
              >
                Previous user? Login here
              </button>
            </form>
          )
        }}
      </Mutation>
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
