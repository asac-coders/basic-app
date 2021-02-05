import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";
import styles from '../styles.module.css'

const About = (props) => {
  return (
    <div id="experience">
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
                <img src={props.data.image} className = {styles.aboutmeImage} />
                <div className={styles.about}>
                    <h1 className={styles.h1about} >About me</h1>
                    <h2 className={styles.h2about}>MY name is {props.data.first_name}</h2>
                    <p className={styles.pabout}>{props.data.about_me}</p>
                </div>
            </div>
            <section ClassName={styles.aboutBoutton}>

                <div>
                    <a href={props.data.linkedin} target="_blank" rel="noopener noreferrer">
                        <Button className="m-2" variant="outline-success">
                          Email
                      </Button>
                    </a>
                </div>
                <div>
                    <a href={props.data.github} target="_blank" rel="noopener noreferrer">
                        <Button className="m-2" variant="outline-dark">
                            GitHub
                      </Button>
                    </a>
                </div>
                <div>
                    <a href={props.data.linkedin} target="_blank" rel="noopener noreferrer">
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
    </div>
  );
};

export default About;