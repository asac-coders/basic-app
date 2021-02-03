
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from '../styles.module.css'

const SkillsIco = () => {
  return (
    <div className="pt-3 pb-3" id="skills" >
      <h1 className={styles.fontdetailsb}>TECH SKILLS</h1>
      <CardDeck  className = {styles.skills} style = {{ margin: "auto"}} >
        <Row className="d-flex justify-content-around" className = {styles.skills}>
          {/* Frontend */}
          <Col md={4}>
            <Card className={styles.focus} > 
              <Card.Body className={styles.cardSkills} >
                {/* Frontend */}
                <Card.Title className={styles.cardtitle}>Frontend</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
               
                    <span className="p-2">
                    <img src = "../icones/3.jpg"  className= {styles.imgSkills} />

                      <a className="text-dark text-decoration-none" href="#" target="_blank" rel="noopener noreferrer">
                      CSS3
                      </a>
                    </span>
                    <span className="p-2">
                    <img src = "../icones/html.png"  className= {styles.imgSkills} />

                      <a className="text-dark text-decoration-none" href="#" target="_blank" rel="noopener noreferrer">
                      html
                      </a>
                    </span>
                    <span className="p-2">
                    <img src = "../icones/react.png"  className= {styles.imgSkills} />

                      <a className="text-dark text-decoration-none" href="#" target="_blank" rel="noopener noreferrer">
                      react
                      </a>
                    </span>
                    <span className="p-2">
                    <img src = "../icones/javascript.png"  className= {styles.imgSkills} />

                      <a className="text-dark text-decoration-none" href="#" target="_blank" rel="noopener noreferrer">
                      Javascript
                      </a>
                    </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Backend */}
          <Col md={4}>
            <Card className={styles.focus}>
              <Card.Body>
                <Card.Title className={styles.cardtitle} >Backend</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
               
                    <span className="p-2">
                    <img src = "../icones/heroku.png"  className= {styles.imgSkills} />
                      <a className="text-dark text-decoration-none" href="#"target="_blank" rel="noopener noreferrer">
                         heroku
                      </a>
                    </span>
  
                    <span className="p-2">
                    <img src = "../icones/node.png"  className= {styles.imgSkills} />
                      <a className="text-dark text-decoration-none" href="#"target="_blank" rel="noopener noreferrer">
                         Node
                      </a>
                    </span>
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Hosting Platforms */}
            <Card className={styles.focus}>
              <Card.Body>
                <Card.Title className={styles.cardtitle} >Hosting Platforms</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
               
                    <span className="p-2">
                      <a className="text-dark text-decoration-none" href="#" target="_blank" rel="noopener noreferrer">
                    lfnldfnsl
                      </a>
                    </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Programming Languages */}
          <Col md={4}>
            <Card className={styles.focus}>
              <Card.Body>
                <Card.Title className={styles.cardtitle} >Programming Languages</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                    <span className="p-2">
                    <img src = "../icones/python.jpg"  className= {styles.imgSkills} />
                      <a className="text-dark text-decoration-none" href="#" target="_blank" rel="noopener noreferrer">
                  python
                      </a>
                    </span>
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Database */}

            <Card className={styles.focus}>
              <Card.Body>
                <Card.Title className={styles.cardtitle} >Database</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                    <span className="p-2">
                    <img src = "../icones/mange.jpg"  className= {styles.imgSkills} />
                      <a className="text-dark text-decoration-none" href="#" target="_blank" rel="noopener noreferrer">
                   mango
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
                  <span className="p-2">
                
                    <a className="text-dark text-decoration-none" href="#" target="_blank" rel="noopener noreferrer">
                  
                    </a>
             
                  </span>
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
