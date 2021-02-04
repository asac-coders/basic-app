import styles from '../styles.module.css'
const Projects = (props) => {

  return (

    <section class={styles.studentProjectList}>
      <article class={styles.studentProject}>
        <h2 class={styles.studetnProjectH2}>Project Name: {props.data[0].project_name}</h2>
        <div class={styles.projectStudent}>

          <a class={styles.studentAvatar} href={props.data[0].live_url}> Live_url
      </a>
          <a class={styles.studentAvatar} href={props.data[0].github_url}>GitHub_url
      </a>
        </div>
        <p class={styles.studetnProjectH2}> {props.data[0].description}</p>

      </article>
      <article class={styles.studentProject}>
        <h2 class={styles.studetnProjectH2}>Project Name: {props.data[1].project_name} </h2>
        <div class={styles.projectStudent}>

          <a class={styles.studentAvatar} href={props.data[1].live_url}> Live_url
      </a>
          <a class={styles.studentAvatar} href={props.data[1].github_url}>GitHub_url
      </a>
        </div>
        <p class={styles.studetnProjectH2}> {props.data[1].description}</p>

      </article>
      <article class={styles.studentProject}>
        <h2 class={styles.studetnProjectH2}>Project Name: {props.data[2].project_name}</h2>
        <div class={styles.projectStudent}>

          <a class={styles.studentAvatar} href={props.data[2].live_url}> Live_url
      </a>
          <a class={styles.studentAvatar} href={props.data[2].github_url}>GitHub_url
      </a>
        </div>
        <p class={styles.studetnProjectH2}> {props.data[2].description}</p>

      </article>



    </section>
  );
};

export default Projects;



