import { useRef } from "react";
import "./portifolio.scss"
import { motion,scroll,useScroll,useSpring, useTransform } from "framer-motion";

const items =[
  {
    id:1,
    title:"React Commerce",
    image:"https://img.freepik.com/free-vector/flat-sale-landing-page-template-with-photo_23-2149028522.jpg?size=626&ext=jpg&ga=GA1.1.223668522.1691583228&semt=ais",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio assumenda odio, unde sed dolorum sit, aliquid eius veritatis ad nobis magnam nihil molestiae iure explicabo. Commodi suscipit laudantium id vero!"
  },
  {
    id:2,
    title:"Next.js Commerce",
    image:"https://img.freepik.com/free-psd/coffee-landing-pages-concept_23-2148472558.jpg?size=626&ext=jpg&ga=GA1.1.223668522.1691583228&semt=ais",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio assumenda odio, unde sed dolorum sit, aliquid eius veritatis ad nobis magnam nihil molestiae iure explicabo. Commodi suscipit laudantium id vero!"
  },
  {
    id:3,
    title:"Vanila JS Blog",
    image:"https://t3.ftcdn.net/jpg/05/88/40/50/360_F_588405018_UuK2CpnEIUX6jHPD3VLXwFvJOpNgwX7i.jpg",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio assumenda odio, unde sed dolorum sit, aliquid eius veritatis ad nobis magnam nihil molestiae iure explicabo. Commodi suscipit laudantium id vero!"
  },
  {
    id:4,
    title:"Music App",
    image:"https://img.freepik.com/free-vector/music-player-application-interface-template-collection_23-2148530265.jpg?size=626&ext=jpg&ga=GA1.1.223668522.1691583228&semt=ais",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio assumenda odio, unde sed dolorum sit, aliquid eius veritatis ad nobis magnam nihil molestiae iure explicabo. Commodi suscipit laudantium id vero!"
  },
];

const Single =({item})=>{

  const ref=useRef()
  const {scrollYProgress} =useScroll({
    target:ref,
    // offset:["start start","end start"]
  });
  const y = useTransform(scrollYProgress,[0,1], [-300,300]);
  return(
    <section >
     <div className="container">
      <div className="wrapper">
        <div className="imageContainer" ref={ref}>
      <img src={item.image} alt="" />
      </div>
   <motion.div className="textContainer" style={{y}}>
       <h2>{item.title}</h2>
       <p>{item.desc}</p>
       <button>See Demo</button>
   </motion.div>
   </div>
     </div>
    </section>
  )
}


const Portifolio = () => {
  const ref =useRef()

  const {scrollYProgress} =useScroll({
    target:ref,
    offset:["end end", "start start"]});

    const scaleX = useSpring(scrollYProgress,{
      stiffness:100,
      damping:30,
    });

  return (
    <div className='portifolio'>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{scaleX}} className="progressBar"></motion.div>
      </div>
      {
        items.map(item=>(
          <Single item={item} key={item.id}/>
        ))
      }
      </div>
  )
};

export default Portifolio