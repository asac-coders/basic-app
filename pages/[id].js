import Footer from '../components/Footer'
import About from '../components/about'
import styles from '../styles.module.css'
// import Image from 'next/image'
import Header from '../components/Header'
import Projects from '../components/project'
// import Skills from '../components/skills'
import SkillsIco from '../components/skills-icon'

import Image from 'next/image'
function Details(props) {
  return (

<div className = {styles.detailsPageDiv}>
<Header/>
<About data={props.data[0]}/>

<Projects data={props.data[1]}/>

<br></br>
<br></br>

<SkillsIco data={props.data[2]}/>
<Footer/>
</div>


  );
}

export default Details;


export async function getServerSideProps(context) {
  const blog = []
  const projects = []
  const id = context.query.id
  const res = await fetch(`https://asac-blog.herokuapp.com/blog/${id}`)
  const data = await res.json()
  blog.push(data)
  for (let i = 0 ; i < 3;i++){
    const response = await fetch(`https://asac-blog.herokuapp.com/blog/projects/${data.projects[i]}`);
    const data1 = await response.json();
    projects.push(data1)
  }
  const resp = await fetch(`https://asac-blog.herokuapp.com/blog/skils/${data.skils}`);
  const data2 = await resp.json();
  blog.push(projects)
  blog.push(data2)
  console.log(blog[2]);
  return { props: { data: blog } }
}
