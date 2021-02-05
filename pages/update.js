import styles from '../styles.module.css'
import React, { useState } from 'react';


import { useRouter } from 'next/router'

import Footer from '../components/personalPageFooter'
import Header from '../components/personalPageHeader'

export default function personalPage(props) {
    const router = useRouter()
    const [loginError, setLoginError] = useState('');
    const [first_name, setFirstName] = useState('');
    const [Last_name, setLastName] = useState('');
    const [image, setImage] = useState('');
    const [about_me, setAboutMe] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log(localStorage.getItem('Token'))
        const requestOptions ={
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' :`Bearer ${localStorage.getItem('Token')}`
            },
            
            body: JSON.stringify({
                'first_name': first_name,
                'Last_name': Last_name,
                'image':image,
                'about_me':about_me
            }),
        }
        //call api
        fetch('https://asac-blog.herokuapp.com/blog/1',requestOptions )
            .then((r) => {
                alert(r)
                return r.json();
            })
            .then((data) => {
                if (data && data.error) {

                    setLoginError(data.message);

                }
                if (data && data.token) {
                    //set cookie
                    localStorage.setItem("Token", data.token);
                    router.push('/personalPage')
                    // cookie.set('token', data.token, {expires: 2});
                    // Router.push('/');
                }
            }).catch(error => {
                setErrorMessage(error);
                console.error('There was an error!', error);
            });
    }
    return (
        < div style={{ backgroundColor: "whitesmoke", margin: "0px", padding: "0px" }}>
            < Header />
            <div className={styles.loginDiv}>


                <form onSubmit={handleSubmit}>
                    <fieldset className={styles.fieldSet}>
                        <p className={styles.login}>Personal Info</p>
                        <label className={styles.nameLable}>
                                First Name
                        </label>
                        
                        <input required className={styles.username}
                            name="first_name"
                            type="text"
                            value={first_name}
                            onChange={(e) => setFirstName(e.target.value)}

                        />
                        <br>
                        </br>
                        <br>
                        </br>
                        <label className={styles.nameLable2}>
                            Last Name
                        </label>
                        
                        <input required className={styles.username}
                            name="Last_name"
                            type="text"
                            value={Last_name}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <br>
                        </br>
                        <br>
                        </br>
                        <label className={styles.nameLable2}>
                            Image
                        </label>
                        
                        <input required className={styles.username}
                            name="image"
                            type="text"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />
                        <br>
                        </br>
                        <br>
                        </br>
                        <label className={styles.nameLable2}>
                            About me
                        </label>
                        
                        <input required className={styles.username}
                            name="about_me"
                            type="text"
                            value={about_me}
                            onChange={(e) => setAboutMe(e.target.value)}
                        />
                        

                        <br>
                        </br>
                        <br>
                        </br>
                        <input type="submit" value="Submit" className={styles.button} />
                        {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
                    </fieldset>
                </form>

            </div>
            <div id="footer">
                <Footer className={styles.Footer}></Footer>
            </div>



        </div>


    )
}



