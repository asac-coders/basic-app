import React, {useState} from 'react';
import Router from 'next/router';
import styles from '../styles.module.css'


const Login = () => {
  const [loginError, setLoginError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    //call api
    fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((r) => {
          console.log(r)
        return r.json();
      })
      .then((data) => {
        if (data && data.error) {
          setLoginError(data.message);
        }
        if (data && data.token) {
          //set cookie
          cookie.set('token', data.token, {expires: 2});
          Router.push('/');
        }
      });
  }
  return (
      <div className={styles.loginDiv}>

      
    <form onSubmit={handleSubmit}>
        <fieldset  className={styles.fieldSet}>
      <p className={styles.login}>Login</p>
      <label className={styles.nameLable}>
          Enter Your Username
      </label>
      <input className={styles.username}
        name="username"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br>
      </br>
      <br>
      </br>
       <label className={styles.nameLable2}>
          Enter Your password
      </label>
      <input
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      
      <br>
      </br>
      <br>
      </br>
      <input  type="submit" value="Submit" className={styles.button} />
      {loginError && <p style={{color: 'red'}}>{loginError}</p>}
      </fieldset>
    </form>
    </div>
  );
};

export default Login;

// <Form>
//   <Form.Group as={Row} controlId="formPlaintextEmail">
//     <Form.Label column sm="2">
//       Email
//     </Form.Label>
//     <Col sm="10">
//       <Form.Control plaintext readOnly defaultValue="email@example.com" />
//     </Col>
//   </Form.Group>

//   <Form.Group as={Row} controlId="formPlaintextPassword">
//     <Form.Label column sm="2">
//       Password
//     </Form.Label>
//     <Col sm="10">
//       <Form.Control type="password" placeholder="Password" />
//     </Col>
//   </Form.Group>
// </Form>