import styles from '../styles.module.css'
import React, { useState } from 'react';
import axios from 'axios'


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

    async function handleSubmit(e) {
        e.preventDefault();
        const body = {'first_name': first_name,
                        'Last_name': Last_name,
                        'image':image,
                        'about_me':about_me
                    }
        localStorage.setItem("first_name",JSON.stringify(first_name))
        localStorage.setItem("Last_name",JSON.stringify(Last_name))
        localStorage.setItem("image",JSON.stringify(image))
        localStorage.setItem("about_me",JSON.stringify(about_me))
        router.push('/fakeDetails')
        // axios.interceptors.request.use(
        //     config  =>{
        //         config.headers.authorization = `Token ${localStorage.getItem('Token')}`;
        //         return config

        //     },
        //     error =>{
        //         return Promise.reject(error)
        //     }
        // )
        // const url = `https://asac-blog.herokuapp.com/blog/1`;
        // const response = await axios.put(url, body);
        // // router.push('/');
        // // window.location.href = '/profile';
        
        // console.log(response)
        // const requestOptions ={
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization' :`Token ${localStorage.getItem('Token')}`
        //     },
            
        //     body: JSON.stringify({
        //         'first_name': first_name,
        //         'Last_name': Last_name,
        //         'image':image,
        //         'about_me':about_me
        //     }),
        // }
        // //call api
        // fetch('https://asac-blog.herokuapp.com/blog/1',requestOptions )
        //     .then((r) => {
        //         console.log(r)
        //         return r.json();
        //     })
        //     .then((data) => {
        //         if (data && data.error) {

        //             setLoginError(data.message);

        //         }
        //         if (data && data.token) {
        //             //set cookie
        //             localStorage.setItem("Token", data.token);
        //             router.push('/personalPage')
        //             // cookie.set('token', data.token, {expires: 2});
        //             // Router.push('/');
        //         }
        //     }).catch(error => {
        //         setErrorMessage(error);
        //         console.error('There was an error!', error);
        //     });
    }
    return (
        < div style={{ backgroundColor: "whitesmoke", margin: "0px", padding: "0px" }}>
            < Header />
            <div className={styles.loginDiv}>


                <form onSubmit={handleSubmit}>
                    <fieldset className={styles.fieldSet} style ={{height : 'auto', marginTop : '-7px'}} >
                        <p className={styles.login}>Personal Info</p>
                        <label className={styles.nameLable}  style ={{display : 'block'}}>
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
                        <label className={styles.nameLable2}  style ={{display : 'block'}}>
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
                        <label className={styles.nameLable2}   style ={{display : 'block'}}>
                            Image
                            
                        </label>
                        
                        <input required className={styles.username}
                            name="image"
                            type="url"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                          
                        />
                        <br>
                        </br>
                        <br>
                        </br>
                        <label className={styles.nameLable2}  style ={{display : 'block'}}>
                            About me
                        </label>
                        
                        <textarea required className={styles.username} 
                            name="about_me"
                            type="textarea"
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
            {/* <div id="footer">
                <Footer className={styles.Footer}></Footer>
            </div>
 */}


        </div>


    )
}





// export default class UserPostCreate extends React.Component {
//     constructor(props) {
//         super(props);
//         if (process.browser) {
//             //  userId = JSON.parse(localStorage.getItem('user_Id'))
//             this.state = {
//                 user_id: JSON.parse(localStorage.getItem('user_id')),
//                 post_title: '',
//                 category: '',
//                 post_img: '',
//                 post_description: '',
//                 price: '',
//                 phone_number: ''
//             }
//         }
//     }
//     // async deleteHandler() {
//     //     const url = `https://ai-eshi-sooq-api.herokuapp.com/api/v1/post/${this.props.userpost.id}/`;
//     //     // const router = useRouter();
//     //     // console.log(props.userpost.id)
//     //     const response = await axios.delete(url)
//     //     // router.push('/user-profile');
//     //     window.location.href = '/user-profile';
//     // }
//     inputChanged = event => {
//         const cred = this.state;
//         cred[event.target.name] = event.target.value;
//         this.setState(cred);
//         console.log(this.state)
//     }
//     async postHandler() {
//         const url = `https://ai-eshi-sooq-api.herokuapp.com/api/v1/post/posts/`;
//         const response = await axios.post(url, this.state)
//         // router.push('/');
//         // window.location.href = '/profile';
//         window.location.assign('/profile');
//         console.log(this.state)
//     }
//     render() {
//         return (
//             <div className={stylesProfile.mainDiv}>
//                 <form onSubmit={() => this.postHandler()}>
//                     <div className={stylesProfile.mainPost}>
//                         {/* <label>
//                     Image Link: */}
//                         <input type='text' name='post_img' onChange={this.inputChanged} placeholder="Image Link" className={stylesProfile.mainInputs, stylesProdects.mainImg} />
//                         {/* </label>*/}
//                         {/* <br /> */}
//                         {/* <label>
//                     Ads Title: */}
//                         <div className={stylesProfile.mainInfo}>
//                             <h1 className={stylesProfile.mainFormTitle}>What do you want to sell ...</h1>
//                             <input type='text' name='post_title' onChange={this.inputChanged} placeholder="Title" className={stylesProfile.mainInputs, stylesProfile.mainInputs1} />
//                             {/* </label>*/}
//                             {/* <br /> */}
//                             {/* <label>
//                     Category: */}
//                             {/* <input type='text' name='category' onChange={this.inputChanged} placeholder="Category" className={stylesProfile.mainInputs} /> */}
//                             <select className={stylesProfile.mainInputs} onChange={this.inputChanged} name="category" required>
//                                 <option placeholder="--- Choose a category ---">--- Choose a category ---</option>
//                                 <option value="Cars">Cars</option>
//                                 <option value="ComputersAndLaptops">Computers and Laptops</option>
//                                 <option value="Electronics">Electronics</option>
//                                 <option value="Furniture">Furniture</option>
//                                 <option value="Houses">Houses</option>
//                                 <option value="HouseTools">Houses Tools</option>
//                                 <option>Others</option>
//                             </select>
//                             {/* </label>*/}
//                             <br />
//                             {/* <label>
//                     Description: */}
//                             <textarea name='post_description' rows="5" cols="50" onChange={this.inputChanged} placeholder="Description" className={stylesProfile.mainInputs2}>
//                             </textarea>
//                             {/* </label>
//                 <label>
//             Price: */}
//                             <br />
//                             <div className={stylesProfile.divInputs}>
//                                 <input type='text' name='price' onChange={this.inputChanged} placeholder="Price" className={stylesProfile.mainInputs} />
//                                 {/* </label>
//                 <label>
//             Phone Number */}
//                                 <br />
//                                 <input type='text' name='phone_number' onChange={this.inputChanged} placeholder="Phone Number" className={stylesProfile.mainInputs} />
//                                 {/* </label>*/}
//                             </div>
//                             <br />
//                             {/* <input type='submit' value='Post' /> */}
//                             <button type="submit" className={stylesProfile.mainBtn}>Post</button>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }
// // export async function getServerSideProps(context){
// //     const id = context.query.id
// //     console.log(id)
// //     const res = await fetch(`https://ai-eshi-sooq-api.herokuapp.com/api/v1/post/${id}/`);
// //     const dataObj = await res.json();
// //     return { props: {userpost: dataObj} };
// // }