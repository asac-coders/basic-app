
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




const SkillsIco = (props) => {
  const frontEnd = [];
  const backEnd= [];
  const hosting = [];
  const programming = [];
  const database = [];
  if (props.data.html){
    frontEnd.push(<span className={styles.icons}>
    {/* <img src = "../icones/html.png"  className= {styles.imgSkills} /> */}

      <a className="text-dark text-decoration-none" href="https://en.wikipedia.org/wiki/HTML5" target="_blank" rel="noopener noreferrer">
     <FaHtml5/> html
      </a>
    </span>)
  }
  if (props.data.css){
    frontEnd.push( <span className={styles.icons}>
    {/* <img src = "../icones/3.jpg"  className= {styles.imgSkills} /> */}

      <a className="text-dark text-decoration-none" href="https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1" target="_blank" rel="noopener noreferrer">
     <DiCss3/>  CSS3
      </a>
    </span>)
  }
  if(props.data.js){
    frontEnd.push( <span className={styles.icons}>
    {/* <img src = "../icones/javascript.png"  className= {styles.imgSkills} /> */}

      <a className="text-dark text-decoration-none" href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
    <IoLogoJavascript/>  JS
      </a>
    </span>)
  }
  if(props.data.react){
    frontEnd.push( <span className={styles.icons}>
    {/* <img src = "../icones/react.png"  className= {styles.imgSkills} /> */}

      <a className="text-dark text-decoration-none" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
    <FaReact/>  React
      </a>
    </span>)
  }
  
  if (props.data.nodejs){
    backEnd.push( <span className={styles.icons} >
    {/* <img src = "../icones/node.png"  className= {styles.imgSkills} /> */}

      <a className="text-dark text-decoration-none" href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">
      <FaNodeJs/>  Node.js
      </a>
    </span>)
  }
  if (props.data.express){
    backEnd.push( <span className={styles.icons}>
    {/* <img src = "../icones/express.png"  className= {styles.imgSkills} /> */}

      <a className="text-dark text-decoration-none" href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
      Express
      </a>
    </span>)
  }
  if (props.data.django){
    backEnd.push( <span className={styles.icons}>
    {/* <img src = "../icones/django.jpg"  className= {styles.imgSkills} /> */}

      <a className="text-dark text-decoration-none" href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer">
      <DiDjango/>  Django
      </a>
    </span>)
  }
  
  if (props.data.heroku) {
    hosting.push( <span className={styles.icons}>
    {/* <img src = "../icones/heroku.png"  className= {styles.imgSkills} /> */}

      <a className="text-dark text-decoration-none" href="https://www.heroku.com/" target="_blank" rel="noopener noreferrer">
      <GrHeroku/>  Heroku
      </a>
    </span>)
  }
  if (props.data.vercel) {
    hosting.push( <span className={styles.icons}>
    {/* <img src = "../icones/vercel.png"  className= {styles.imgSkills} /> */}

      <a className="text-dark text-decoration-none" href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
      <IoLogoVercel/>  Vercel
      </a>
    </span>)
  }
  if (props.data.githab_pages){
    hosting.push( <span className={styles.icons}>
    {/* <img src = "../icones/github.png"  className= {styles.imgSkills} /> */}

      <a className="text-dark text-decoration-none" href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">
      <FaGithub/>  GitHub
      </a>
    </span>)
  }
  
  if (props.data.js){
    programming.push( <span className={styles.icons}>
    {/* <img src = "../icones/javascript.png"  className= {styles.imgSkills} /> */}

      <a className="text-dark text-decoration-none" href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
      <IoLogoJavascript/>  JavaScript
      </a>
    </span>)
  }
  if (props.data.python){
    programming.push( <span className={styles.icons}>
    {/* <img src = "../icones/python.jpg"  className= {styles.imgSkills} /> */}

      <a className="text-dark text-decoration-none" href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
     <FaPython/>  Python
      </a>
    </span>)
  }
  
  if (props.data.postgresql){
    database.push( <span className={styles.icons}>
    {/* <img src = "../icones/postgres.jpg"  className= {styles.imgSkills} /> */}

      <a className="text-dark text-decoration-none" href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">
       <SiPostgresql/>    PostgreSQL
      </a>
    </span>)
  }
  if (props.data.mongodb){
    database.push( <span className={styles.icons}>
    {/* <img src = "../icones/mongodb.jpg"  className= {styles.imgSkills} /> */}

      <a className="text-dark text-decoration-none" href="https://www.mongodb.com/2" target="_blank" rel="noopener noreferrer">
     <DiMongodb/>  Mongodb
      </a>
    </span>)
  }
  const versionControl = []
  if (props.data.git){
    versionControl.push( <span className={styles.icons}>
    {/* <img src = "../icones/git.png"  className= {styles.imgSkills} /> */}

      <a className="text-dark text-decoration-none" href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
    <DiGit/>  Git
      </a>
    </span>)
  }
  return (
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
                  {frontEnd.map(data=>{
                    return data
                  })} 

                
                   
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Backend */}
          <Col md={4}>
            <Card className={styles.focus} style={{marginBottom:"20px"}}>
              <Card.Body >
                <Card.Title className={styles.cardtitle} >Backend</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                {backEnd.map(data=>{
                    return data
                  })} 
                  
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Hosting Platforms */}
            <Card className={styles.focus} style={{marginBottom:"20px"}}>
              <Card.Body>
                <Card.Title className={styles.cardtitle} >Hosting Platforms</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                {hosting.map(data=>{
                    return data
                  })} 
                    
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
                {programming.map(data=>{
                    return data
                  })} 
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Database */}

            <Card className={styles.focus} style={{marginBottom:"25px"}}>
              <Card.Body>
                <Card.Title className={styles.cardtitle} >Database</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                {database.map(data=>{
                    return data
                  })} 
                </Card.Text>
              </Card.Body>
            </Card>
            {/* Version Control */}

            <Card className={styles.focus}>
              <Card.Body>
                <Card.Title className={styles.cardtitle} >Version Control</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                {versionControl.map(data=>{
                    return data
                  })} 
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </CardDeck>
    </div>
  );
};

export default SkillsIco;
