import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Title from "./Title";
import UserInformation from "./UserInformation";
import style from './css/Categories.module.css'
import { useContext } from "react";
import { ArchiveContext } from "./Archive";
import { Link } from "react-router-dom";
import ChangeButton from "./ChangeButton";

export default function CategoryDetail() {

    const {categoryName}=useParams();
    let {archives,categories,changeModel,modelBlock,modelAnnotation,modelText}=useContext(ArchiveContext);
    const key=categories.findIndex(item=>item.category===categoryName);
    let matchArchives=[];
    
    if(key !== -1){
        const CategoryIds=categories[key].categoryId;

        matchArchives=archives.filter(archive=>(
            CategoryIds.includes(archive.id)
        ))
    }


  return (
    <div className={style.header}>
      <Title/>
      <div className={style.container}>
        <div className={`rounded shadow-sm  ${style.leftContainer}  ${modelBlock}`}>
            <div className={style.switchButton}>
                  <ChangeButton/>
            </div>
            <div className="d-flex mb-3">
                <img src={process.env.PUBLIC_URL+'/img/widget/folder.png'} className={`${style.folderImg} ${changeModel?"":style.changeIcon}`}/>
                <h3>Categoried</h3>
                <h3>&nbsp;&gt;&nbsp;</h3>
                <h3 className="text-danger">{categoryName}</h3>
            </div>
            <ul className="lh-lg">
                {
                    matchArchives.map((archive)=>(
                        <Link to={'/ArticleContent/'+archive.id} className={`${style.category} ${modelText}`}>
                            <li key={archive.id} className={`${modelText}`}> 
                                <span className={`${modelText}`}>{archive.name}</span>
                                <span className="ms-3" style={{color:`${modelAnnotation}`}}>{archive.date}</span>
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
