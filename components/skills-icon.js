
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from '../styles.module.css'

const SkillsIco = (props) => {
  const frontEnd = [];
  const backEnd= [];
  const hosting = [];
  const programming = [];
  const database = [];
  if (props.data.html){
    frontEnd.push(<span className="p-2">
    <img src = "../icones/html.png"  className= {styles.imgSkills} />

      <a className="text-dark text-decoration-none" href="#" target="_blank" rel="noopener noreferrer">
      html
      </a>
    </span>)
  }
  if (props.data.css){
    frontEnd.push( <span className="p-2">
    <img src = "../icones/3.jpg"  className= {styles.imgSkills} />

      <a className="text-dark text-decoration-none" href="#" target="_blank" rel="noopener noreferrer">
      CSS3
      </a>
    </span>)
  }
  if(props.data.js){
    frontEnd.push( <span className="p-2">
    <img src = "../icones/javascript.png"  className= {styles.imgSkills} />

      <a className="text-dark text-decoration-none" href="#" target="_blank" rel="noopener noreferrer">
      JS
      </a>
    </span>)
  }
  if(props.data.react){
    frontEnd.push( <span className="p-2">
    <img src = "../icones/react.png"  className= {styles.imgSkills} />

      <a className="text-dark text-decoration-none" href="#" target="_blank" rel="noopener noreferrer">
      React
      </a>
    </span>)
  }
  
  if (props.data.nodejs){
    backEnd.push( <span className="p-2">
    <img src = "../icones/node.png"  className= {styles.imgSkills} />

      <a className="text-dark text-decoration-none" href="#" target="_blank" rel="noopener noreferrer">
      Node.js
      </a>
    </span>)
  }
  if (props.data.express){
    backEnd.push( <span className="p-2">
    <img src = "../icones/express.png"  className= {styles.imgSkills} />

      <a className="text-dark text-decoration-none" href="#" target="_blank" rel="noopener noreferrer">
      Express
      </a>
    </span>)
  }
  if (props.data.django){
    backEnd.push( <span className="p-2">
    <img src = "../icones/django.jpg"  className= {styles.imgSkills} />

      <a className="text-dark text-decoration-none" href="#" target="_blank" rel="noopener noreferrer">
      Django
      </a>
    </span>)
  }
  
  if (props.data.heroku) {
    hosting.push( <span className="p-2">
    <img src = "../icones/heroku.png"  className= {styles.imgSkills} />

      <a className="text-dark text-decoration-none" href="#" target="_blank" rel="noopener noreferrer">
      Heroku
      </a>
    </span>)
  }
  if (props.data.vercel) {
    hosting.push( <span className="p-2">
    <img src = "../icones/vercel.png"  className= {styles.imgSkills} />

      <a className="text-dark text-decoration-none" href="#" target="_blank" rel="noopener noreferrer">
      Vercel
      </a>
    </span>)
  }
  if (props.data.githab_pages){
    hosting.push( <span className="p-2">
    <img src = "../icones/github.png"  className= {styles.imgSkills} />

      <a className="text-dark text-decoration-none" href="#" target="_blank" rel="noopener noreferrer">
      GitHub
      </a>
    </span>)
  }
  
  if (props.data.js){
    programming.push( <span className="p-2">
    <img src = "../icones/javascript.png"  className= {styles.imgSkills} />

      <a className="text-dark text-decoration-none" href="#" target="_blank" rel="noopener noreferrer">
      JavaScript
      </a>
    </span>)
  }
  if (props.data.python){
    programming.push( <span className="p-2">
    <img src = "../icones/python.jpg"  className= {styles.imgSkills} />

      <a className="text-dark text-decoration-none" href="#" target="_blank" rel="noopener noreferrer">
      Python
      </a>
    </span>)
  }
  
  if (props.data.postgresql){
    database.push( <span className="p-2">
    <img src = "../icones/postgres.jpg"  className= {styles.imgSkills} />

      <a className="text-dark text-decoration-none" href="#" target="_blank" rel="noopener noreferrer">
      PostgreSQL
      </a>
    </span>)
  }
  if (props.data.mongodb){
    database.push( <span className="p-2">
    <img src = "../icones/mongodb.jpg"  className= {styles.imgSkills} />

      <a className="text-dark text-decoration-none" href="#" target="_blank" rel="noopener noreferrer">
      Mongodb
      </a>
    </span>)
  }
  const versionControl = []
  if (props.data.git){
    versionControl.push( <span className="p-2">
    <img src = "../icones/git.png"  className= {styles.imgSkills} />

      <a className="text-dark text-decoration-none" href="#" target="_blank" rel="noopener noreferrer">
      Git
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
