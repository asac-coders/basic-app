import Footer from '../components/Footer'
import About from '../components/about'
import styles from '../styles.module.css'
// import Image from 'next/image'
import Header from '../components/Header'
import Projects from '../components/project'
// import Skills from '../components/skills'
import SkillsIco from '../components/skills-icon'

import Image from 'next/image'
function Details() {
  return (

<div>
<Header/>
<About/>

<Projects/>

<br></br>
<br></br>

<SkillsIco/>
{/* <Footer/> */}
</div>

  );
}

export default Details;