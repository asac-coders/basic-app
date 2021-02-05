import React, {useState} from 'react';
import Router from 'next/router';
import styles from '../styles.module.css'
import Header from '../components/Header'
import { useRouter } from 'next/router'

const Login = () => {
  const router = useRouter() 
  const [loginError, setLoginError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    
    //call api
    fetch('https://asac-blog.herokuapp.com/auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'username':email,
        'password':password,
      }),
    })
      .then((r) => {
        if (r.status == 400){
            router.push('/invalidpassword')
          }
        return r.json();
      })
      .then((data) => {
        if (data && data.error) {
          
          setLoginError(data.message);

        }
        if (data && data.token) {
          //set cookie
          localStorage.setItem("Token",data.token);
          router.push('/personalPage')
          // cookie.set('token', data.token, {expires: 2});
          // Router.push('/');
        }
      });
  }

  return (
    <>
      <Header />
      <div className={styles.loginDiv}>

      
    <form onSubmit={handleSubmit}>
        <fieldset  className={styles.fieldSet}>
      <p className={styles.login}>Log in</p>
      <label className={styles.nameLable}>
          Enter Your Username
      </label>
      <br/>
      <input required className={styles.username}
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
      <br/>
      <input required className={styles.username}
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        />
        <h3>Invalid username or password</h3>
      
      
      
      <input  type="submit" value="Submit" className={styles.button}  />
      {loginError && <p style={{color: 'red'}}>{loginError}</p>}
      </fieldset>
    </form>
    </div>
    
    </>
  );
};

export default Login;

