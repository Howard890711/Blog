import { useContext } from "react";
import Footer from "./Footer";
import Title from "./Title";
import UserInformation from "./UserInformation";
import style from "./css/Categories.module.css"
import { ArchiveContext } from "./Archive";
import { Link} from "react-router-dom";
import ChangeButton from "./ChangeButton";

export default function Categories() {

    let {categories,changeModel,modelText,modelAnnotation,modelBlock}=useContext(ArchiveContext)
  
  return (
    <div className={style.header}>
      <Title/>
      <div className={style.container}>
        <div className={`rounded shadow-sm ${style.leftContainer} ${modelBlock}`}>
            <div className={style.switchButton}>
                  <ChangeButton/>
            </div>
            <div className="d-flex align-items-start">
                <img 
                    src={process.env.PUBLIC_URL+'/img/widget/folder.png'} 
                    className={`${style.folderImg} ${changeModel?"":style.changeIcon}`}
                    alt="cagegoryIcon"
                    />
                <h3>Categories</h3>
            </div>
            <h4 className="mb-3">共<span className="text-danger mx-1">{categories.length}</span>種類別</h4>
            <ul className="lh-lg fw-bold">
                {
                    categories.map((element,index)=>(
                        <li key={element.category} className={`${modelText}`}>
                            <Link to={`/Categories/${element.category}`} className={`${style.category} ${modelText}`}>
                                {element.category}
                                <span style={{color:`${modelAnnotation}`}}>&nbsp;({categories[index].categoryId.length})</span>
                            </Link>
                        </li>
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

