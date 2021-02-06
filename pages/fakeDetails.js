import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

import Tilt from "react-tilt";
import Footer from "../components/personalPageFooter"
import Header from '../components/personalPageHeader'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from '../styles.module.css'
import { FaHtml5 } from "@react-icons/all-files/fa/FaHtml5";
import { FaCss3Alt } from "@react-icons/all-files/fa/FaCss3Alt";
import { DiCss3 } from "@react-icons/all-files/di/DiCss3";
import { IoLogoJavascript } from "@react-icons/all-files/io/IoLogoJavascript";
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { FaNodeJs } from "@react-icons/all-files/fa/FaNodeJs";
import { DiDjango } from "@react-icons/all-files/di/DiDjango";
import { GrHeroku } from "@react-icons/all-files/gr/GrHeroku";
import {FaGithub } from "@react-icons/all-files/fa/FaGithub";
import {FaPython } from "@react-icons/all-files/fa/FaPython";
import {DiMongodb } from "@react-icons/all-files/di/DiMongodb";
import {DiGit } from "@react-icons/all-files/di/DiGit";
import {SiPostgresql } from "@react-icons/all-files/si/SiPostgresql";
import {IoLogoVercel } from "@react-icons/all-files/io5/IoLogoVercel";

const About = (props) => {
  return (
    <div id="experience">
        <Header />
      <h1 className="pt-3 text-center font-details-b pb-3"></h1>
      <Jumbotron className={styles.jumboStyle}>
        {/* <Container> */}
          {/* <Tilt options={{ max: 25 }}> */}
            <Card style = {{ height: "450px", width : "95%", margin: "auto", bottom: "17px"}}>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
             
                <div>
                  <Card.Text className= "text-center" >
            <div className={styles.imageAbout}>
                <img src={JSON.parse(localStorage.getItem('image'))} className = {styles.aboutmeImage} />
                <div className={styles.about}>
                    <h1 className={styles.h1about} >About me</h1>
                    <h2 className={styles.h2about}>MY name is {JSON.parse(localStorage.getItem('first_name'))}</h2>
                    <p className={styles.pabout}>{JSON.parse(localStorage.getItem('about_me'))}</p>
                </div>
            </div>
            <section ClassName={styles.aboutBoutton}>

                <div>
                    <a href='https://www.linkedin.com/in/ahmed-almohammed-a9857b109/' target="_blank" rel="noopener noreferrer">
                        <Button className="m-2" variant="outline-success">
                          Email
                      </Button>
                    </a>
                </div>
                <div>
                    <a href='https://github.com/Eng-Ahmad-Almohammad' target="_blank" rel="noopener noreferrer">
                        <Button className="m-2" variant="outline-dark">
                            GitHub
                      </Button>
                    </a>
                </div>
                <div>
                    <a href='https://www.linkedin.com/in/ahmed-almohammed-a9857b109/' target="_blank" rel="noopener noreferrer">
                        <Button className="m-2" variant="outline-info">
                            LinkedIn
                      </Button>
                    </a>
                </div>
                
            </section>
        
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          {/* </Tilt> */}
        {/* </Container> */}
      </Jumbotron>
      <section class={styles.studentProjectList}>
      <article class={styles.studentProject}>
        <h2 class={styles.studetnProjectH2}>Project Name: Journey</h2>
        <div class={styles.projectStudent}>

          <a class={styles.studentAvatar} href='https://journy-app.herokuapp.com/'> Live_url
      </a>
          <a class={styles.studentAvatar} href='https://github.com/batoolalomari/Journey'>GitHub_url
      </a>
        </div>
        <p class={styles.studetnProjectH2}> Our idea is to create an entertainment website that contains multiple application inside it with many features such as : Music app , Galley app , books app and WorldClock, so the user can make a journey inside our app and entertainment with all of it's features. Our app for entertainment the user , we will create a vital environment with good search engine for the book , clock and gallery .</p>

      </article>
      <article class={styles.studentProject}>
        <h2 class={styles.studetnProjectH2}>Project Name: self-driving-vehicle </h2>
        <div class={styles.projectStudent}>

          <a class={styles.studentAvatar} href='https://github.com/beforeTheBots/self-driving-vehicle'> Live_url
      </a>
          <a class={styles.studentAvatar} href='https://github.com/beforeTheBots/self-driving-vehicle'>GitHub_url
      </a>
        </div>
        <p class={styles.studetnProjectH2}> In light of the technological advances we have seen within the road vehicles industry, we already see a demand for a self-driving vehicle. Motivated by the multitude of collisions we see on a day to day basis in Jordan, we found that a self-driving vehicle might add to safety of the population. With that in mind, the first step towards this is to first train a vehicle bot to recognize roads and avoid collision.</p>

      </article>
      <article class={styles.studentProject}>
        <h2 class={styles.studetnProjectH2}>Project Name: ASAC-BLOG</h2>
        <div class={styles.projectStudent}>

          <a class={styles.studentAvatar} href='https://github.com/asac-coders/basic-app'> Live_url
      </a>
          <a class={styles.studentAvatar} href='https://github.com/asac-coders/basic-app'>GitHub_url
      </a>
        </div>
        <p class={styles.studetnProjectH2}> ASAC is an amazing institution, and has already graduated more than 99 creative students so far..Imagine having a place that has all these students’ works and projects ^.^ and communicate with them</p>

      </article>



    </section>
    <div className="pt-3 pb-3" id="skills" >
      <h1 className={styles.fontdetailsb}>TECH SKILLS</h1>
      <CardDeck  className = {styles.skills} style = {{ margin: "auto"}} >
        <Row className="d-flex justify-content-around" className = {styles.skills}>
          {/* Frontend */}
          <Col md={4}>
            <Card className={styles.focus}> 
              <Card.Body className={styles.cardSkills} >
                {/* Frontend */}
                <Card.Title className={styles.cardtitle}>Frontend</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                <span className={styles.icons}>
                {/* <img src = "../icones/html.png"  className= {styles.imgSkills} /> */}

                 <a className="text-dark text-decoration-none" href="https://en.wikipedia.org/wiki/HTML5" target="_blank" rel="noopener noreferrer">
                    <FaHtml5/> html
                </a>
                </span>

                <span className={styles.icons}>
                {/* <img src = "../icones/3.jpg"  className= {styles.imgSkills} /> */}

                <a className="text-dark text-decoration-none" href="https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1" target="_blank" rel="noopener noreferrer">
                <DiCss3/>  CSS3
                </a>
                </span>
                
                <span className={styles.icons}>
                {/* <img src = "../icones/javascript.png"  className= {styles.imgSkills} /> */}

                <a className="text-dark text-decoration-none" href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
                <IoLogoJavascript/>  JS
                </a>
                    </span>

                    <span className={styles.icons}>
    {/* <img src = "../icones/react.png"  className= {styles.imgSkills} /> */}

      <a className="text-dark text-decoration-none" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
    <FaReact/>  React
      </a>
    </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

         
          <Col md={4}>
            <Card className={styles.focus} style={{marginBottom:"20px"}}>
              <Card.Body >
                <Card.Title className={styles.cardtitle} >Backend</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                <span className={styles.icons} >
    {/* <img src = "../icones/node.png"  className= {styles.imgSkills} /> */}

      <a className="text-dark text-decoration-none" href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">
      <FaNodeJs/>  Node.js
      </a>
    </span>
    <span className={styles.icons}>
    {/* <img src = "../icones/express.png"  className= {styles.imgSkills} /> */}

      <a className="text-dark text-decoration-none" href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
     <strong>EXPRESS </strong> Express
      </a>
    </span>
    <span className={styles.icons}>
    {/* <img src = "../icones/django.jpg"  className= {styles.imgSkills} /> */}

      <a className="text-dark text-decoration-none" href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer">
      <DiDjango/>  Django
      </a>
    </span>
                  
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Hosting Platforms */}
            <Card className={styles.focus} style={{marginBottom:"20px"}}>
              <Card.Body>
                <Card.Title className={styles.cardtitle} >Hosting Platforms</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                <span className={styles.icons}>
    {/* <img src = "../icones/heroku.png"  className= {styles.imgSkills} /> */}

      <a className="text-dark text-decoration-none" href="https://www.heroku.com/" target="_blank" rel="noopener noreferrer">
      <GrHeroku/>  Heroku
      </a>
    </span>
    <span className={styles.icons}>
    {/* <img src = "../icones/vercel.png"  className= {styles.imgSkills} /> */}

      <a className="text-dark text-decoration-none" href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
      <IoLogoVercel/>  Vercel
      </a>
    </span>
    <span className={styles.icons}>
    {/* <img src = "../icones/github.png"  className= {styles.imgSkills} /> */}

      <a className="text-dark text-decoration-none" href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">
      <FaGithub/>  GitHub
      </a>
    </span>
                    
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Programming Languages */}
          <Col md={4}>
            <Card className={styles.focus} style={{marginBottom:"25px"}}>
              <Card.Body>
                <Card.Title className={styles.cardtitle} >Programming Languages</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                <span className={styles.icons}>
    {/* <img src = "../icones/javascript.png"  className= {styles.imgSkills} /> */}

      <a className="text-dark text-decoration-none" href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
      <IoLogoJavascript/>  JavaScript
      </a>
    </span>
    <span className={styles.icons}>
    {/* <img src = "../icones/python.jpg"  className= {styles.imgSkills} /> */}

      <a className="text-dark text-decoration-none" href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
     <FaPython/>  Python
      </a>
    </span>
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Database */}

            <Card className={styles.focus} style={{marginBottom:"25px"}}>
              <Card.Body>
                <Card.Title className={styles.cardtitle} >Database</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                <span className={styles.icons}>
    {/* <img src = "../icones/postgres.jpg"  className= {styles.imgSkills} /> */}

      <a className="text-dark text-decoration-none" href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">
       <SiPostgresql/>    PostgreSQL
      </a>
    </span>
                </Card.Text>
              </Card.Body>
            </Card>
            {/* Version Control */}

            <Card className={styles.focus}>
              <Card.Body>
                <Card.Title className={styles.cardtitle} >Version Control</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                <span className={styles.icons}>
    {/* <img src = "../icones/git.png"  className= {styles.imgSkills} /> */}

      <a className="text-dark text-decoration-none" href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
    <DiGit/>  Git
      </a>
    </span> 
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </CardDeck>
    </div>
    <Footer />
    </div>
  );
};

export default About;