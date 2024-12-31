import { useContext} from "react";
import Footer from "./Footer";
import Title from "./Title";
import UserInformation from "./UserInformation";
import style from "./css/Posts.module.css"
import { ArchiveContext } from "./Archive";
import { Link } from "react-router-dom";
import ChangeButton from "./ChangeButton";

export default function Post() {

  let {archives,changeModel,modelBlock,modelAnnotation,modelText}=useContext(ArchiveContext)


  return (
    <div className={style.header}>
      <Title/>
      <div  className={style.container}>
        <div className={`rounded shadow-sm ${style.leftContainer} ${modelBlock}`}>
          <div className={style.switchButton}>
            <ChangeButton/>
          </div>
          <div className="d-flex align-items-start">
            <img src={process.env.PUBLIC_URL+'/img/widget/postImg.png'} className={`${style.postIcon} ${changeModel?"":style.changeIcon}`}/>
            <h3>Posts</h3> 
          </div>
          <h4 className="mb-3">共<span className="text-danger mx-1">{archives.length}</span>筆文章</h4>
          <ul className="lh-lg">
            {
              archives.map(posts => (
                <Link to={'/ArticleContent/'+posts.id} style={{textDecoration:"none" }}>
                  <li key={posts.id} className={`${modelText}`}>
                    <span className={`${style.post} ${modelText}`}>{posts.name}</span>
                    <span className="ms-3" style={{color:`${modelAnnotation}`}}>{posts.date}</span>
                  </li>
                </Link>
              ))
            }
          </ul>
        </div>
        <div className={style.rightContainer}>
          <UserInformation/>
        </div>

      </div>
      <Footer/>
    </div>
  )
}
