
import Footer from '../components/Footer'
import About from '../components/about'
import styles from '../styles.module.css'
import Image from 'next/image'
import Header from '../components/Header'


function Portfolio() {
  return (
  

<body className={styles.body}>
  <Header></Header>


  <About/>
    <div className={styles.fullwidth}>
    <div className={styles.cf}>
      <div className={styles.Switchcard}>
        <div className={styles.Toggle}></div>
        <span className={styles.on}><i className={styles.fafath}></i></span>
        <span className={styles.off}><i className={styles.fafathlist}></i></span>
      </div>
    </div>
      
    <div className=  {styles.colmd3}>

      <div className={styles.cardview}>
          <div className={styles.bg}>
     
          </div>
        <div className={styles.container}>
          <a href='#'><div className={styles.tag_name} className={styles.red} ></div></a>
          <div className={styles.company}>
            <div className={styles.c_logo}>
              <a href="#">   
              <Image
        src="/person.png"
        alt="Portfolio image"
        width={500}
        height={500}
      /></a>
            </div>
            <div className={styles.c_info}>
              <a href="#" className={styles.c_name}>Aya Naser</a><br/>
              <span className={styles.c_industry}>computer scince</span><br/>
              <span className={styles.c_stars} ></span>
              <div className={styles.c_num}></div >
            </div>
            <div className={styles.c_content}>
              {/* <a href='#' className={styles.title}><p>The most briliant company that I’ve ever worked for</p></a> */}
              <p className={styles.review}>Amazing opportunities for any person. The projects we are given always stress new and innovating ideas that constantly challenge ourselves to improve our ...</p>
            </div>
          </div> 

          <div className={styles.user}>
            <div className={styles.user_avatar}>
            <Image
        src="/person.png"
        alt="Portfolio image"
        width={500}
        height={500}
      />
            </div>
            <div className={styles.user_info}>
              <a href="#" className={styles.user_name} className={styles.orange}>pyhton</a> • May 30, 2015<br/>
            </div>
          </div> 
        </div>
      </div> 

      <div className={styles.cardview}>
        <div className={styles.container}>
          <a href='#'><div className={styles.tag_name} className={styles.blue}></div></a>
          <div className={styles.company}>
            <div className={styles.c_logo}>
              <a href="#"> 
                <Image
        src="/person.png"
        alt="Portfolio image"
        width={500}
        height={500}
      />
      </a>
            </div>
            <div className={styles.c_info}>
              <a href="#" className={styles.c_name}>Dania Shafee</a><br/>
              <span className={styles.c_industry}>Translation</span><br/>
              <span className={styles.c_stars} data-star="4"></span>
              <div className={styles.c_num}></div >
            </div>
            <div className={styles.c_content}>
              <a href='#' className={styles.title}><p></p></a>
              <p className={styles.review}>Because we all love our job, we're a super passionate team and we always look out for each other. That passion really shows, from the general way our business is ...</p>
            </div>
          </div> 
          <div className={styles.user}>
            <div className={styles.user_avatar}>
            <Image
        src="/person.png"
        alt="Portfolio image"
        width={500}
        height={500}
      />
            </div>
            <div className={styles.user_info}>
              <a href="#" className={styles.user_name} className={styles.orange}>python</a> • Aug 30, 2016<br/>
            </div>
          </div> 
        </div> 
      </div> 

      <div className={styles.cardview}>
          <div className={styles.bg}>
          {/* <Image
        src="/person.png"
        alt="Portfolio image"
        width={500}
        height={500}
      /> */}
          </div>
        <div className={styles.container}>
          <a href='#'><div className={styles.tag_name} className={styles.yellow}></div></a>
          <div className={styles.company}>
            <div className={styles.c_logo}>
              <a href="#">   <Image
        src="/person.png"
        alt="Portfolio image"
        width={500}
        height={500}
      /></a>
            </div>
            <div className={styles.c_info}>
              <a href="#" className={styles.c_name}>Ahmad Ali</a><br/>
              <span className={styles.c_industry}>mathmatic</span><br/>
              <span className={styles.c_stars} ></span>
              <div className={styles.c_num}></div >
            </div>
            <div className={styles.c_content}>
              <a href='#' className={styles.title}><p></p></a>
              <p className={styles.review}>
                Amazing opportunities for any person. The projects we are given always stress new and innovating ideas that constantly challenge ourselves to improve our ...</p>
            </div>
          </div> 
          <div className={styles.user}>
            <div className={styles.user_avatar}>
            <Image
        src="/person.png"
        alt="Portfolio image"
        width={500}
        height={500}
      />
            </div>
            <div className={styles.user_info}>
              <a href="#"  className={styles.orange} className={styles.user_name}>Java Script</a> • May 30, 2015<br/>
            </div>
          </div> 
        </div> 
      </div> 

      <div className={styles.cardview}>
          <div className={styles.bg}>
          {/* <Image
        src="/person.png"
        alt="Portfolio image"
        width={500}
        height={500}
      /> */}

        </div>
        <div className={styles.container}>
          <a href='#'><div  className={styles.tag_name}  className={styles.green}></div></a>
          <div className={styles.company}>
            <div className={styles.c_logo}>
              <a href="#">  
               <Image
        src="/person.png"
        alt="Portfolio image"
        width={500}
        height={500}  />
      </a>
            </div>
            <div className={styles.c_info}>
              <a href="#" className={styles.c_name}>Saja Ismael</a><br/>
              <span className={styles.c_industry}>Arabic</span><br/>
              <span className={styles.c_stars} ></span>
              <div className={styles.c_num}></div >
            </div>
            <div className={styles.c_content}>
              <a href='#' className={styles.title}><p>Saja</p></a>
              <p className={styles.review}>Amazing opportunities for any person. The projects we are given always stress new and innovating ideas that constantly challenge ourselves to improve our ...</p>
            </div>
          </div> 

          <div className={styles.user}>
            <div className={styles.user_avatar}>
            <Image
        src="/person.png"
        alt="Portfolio image"
        width={500}
        height={500}
      />
            </div>
            <div className={styles.user_info}>
              <a href="#"  className={styles.user_name} className={styles.orange}>Java Script</a> • Sep 30, 2020<br/>
            </div>
          </div>
        </div> 
      </div> 

      <div className={styles.cardview}>
          <div className={styles.bg}>
          {/* <Image
        src="/person.png"
        alt="Portfolio image"
        width={500}
        height={500}
      /> */}
          </div>
        <div className={styles.container}>
          <a href='#'><div  className={styles.tag_name} className={styles.cyan}></div></a>
          <div className={styles.company}>
            <div className={styles.c_logo}>
              <a href="#">   <Image
        src="/person.png"
        alt="Portfolio image"
        width={500}
        height={500}
      /></a>
            </div>
            <div className={styles.c_info}>
              <a href="#" className={styles.c_name}>Diala AL-hamd</a><br/>
              <span className={styles.c_industry}>Multi media</span><br/>
              <span className={styles.c_stars} ></span>
              <div className={styles.c_num}></div >
            </div>
            <div className={styles.c_content}>
              <a href='#' className={styles.title}><p>Diala</p></a>
              <p className={styles.review}>Amazing opportunities for any person. The projects we are given always stress new and innovating ideas that constantly challenge ourselves to improve our ...</p>
            </div>
          </div> 

          <div className={styles.user}>
            <div className={styles.user_avatar}>
            <Image
        src="/person.png"
        alt="Portfolio image"
        width={500}
        height={500}
      />
            </div>
            <div className={styles.user_info}>
              <a href="#"  className={styles.user_name} className={styles.orange}  >Python</a> • Nov 30, 2019<br/>
            </div>
          </div> 
        </div> 
      </div> 
    
      <div className={styles.cardview}>
        <div className={styles.container}>
          <a href='#'><div   className={styles.tag_name}  className={styles.red} ></div></a>
          <div className={styles.company}>
            <div className={styles.c_logo}>
              <a href="#">   <Image
        src="/person.png"
        alt="Portfolio image"
        width={500}
        height={500}
      /></a>
            </div>
            <div className={styles.c_info}>
              <a href="#" className={styles.c_name}>Saleh Ahmad</a><br/>
              <span className={styles.c_industry}>Information Technology</span><br/>
              <span className={styles.c_stars} ></span>
              <div className={styles.c_num}></div >
            </div>
            <div className={styles.c_content}>
              <a href='#' className={styles.title}><p>Saleh</p></a>
              <p className={styles.review}>True adherence to non discrimination policy. If you are young then rest assure that you will not finish up on the retrenchment list in the later age ...</p>
            </div>
          </div> 
          <div className={styles.user}>
            <div className={styles.user_avatar}>
            <Image
        src="/person.png"
        alt="Portfolio image"
        width={500}
        height={500}
      />
            </div>
            <div className={styles.user_info}>
              <a href="#" className={styles.orange} className={styles.user_name}>Python</a> • Aug 30, 2015<br/>
            </div>
          </div>
        </div> 
      </div> 
    
    </div> 
</div>
<br/>
  
  

<Footer></Footer>
</body>

  )
}
export async function getServerSideProps(){
  const res = await fetch(`https://book-api-using-elephant.herokuapp.com/api/v2/book`)
  const data = await res.json();
  console.log(data)
  return {props:{data:data}}
}

export default Portfolio

