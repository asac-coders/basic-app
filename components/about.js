import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";
import styles from '../styles.module.css'

const About = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3"></h1>
      <Jumbotron className={styles.jumboStyle}>
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card style = {{ height: "400px", width : "100%", margin: "auto"}}>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
             
                <div>
                  <Card.Text className= "text-center" >
            <div className={styles.imageAbout}>
                <img src="https://mk0paperlessmovn94k7.kinstacdn.com/wp-content/uploads/2019/09/o2dvsv2pnhe-683x1024.jpg" className = {styles.aboutmeImage} />
                <div className={styles.about}>
                    <h1 className={styles.h1about} >About me</h1>
                    <h2 className={styles.h2about}>MY name is saja</h2>
                    <p className={styles.pabout}>loreacjfdhjfskjdbkjfdff jhfjsfdhjdsf slfhfdjvdlkvdlkfj;sczlkjfhdscjdljd</p>
                </div>
            </div>
            <section ClassName={styles.aboutBoutton}>

                <div>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <Button className="m-2" variant="outline-success">
                          Email
                      </Button>
                    </a>
                </div>
                <div>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <Button className="m-2" variant="outline-dark">
                            GitHub
                      </Button>
                    </a>
                </div>
                <div>
                    <a href="#" target="_blank" rel="noopener noreferrer">
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
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default About;