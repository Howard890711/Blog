import { Link, useNavigate } from "react-router-dom"
import style from "./css/UserInformation.module.css"
import { useContext } from "react";
import { ArchiveContext } from "./Archive";


export default function UserInformation() {
    let {changeModel}=useContext(ArchiveContext);
    const toPosts=useNavigate();
    const toCategories=useNavigate();
    const handlePosts=()=>{
        toPosts('/Posts');
    }
    const handleCategories=()=>{
        toCategories('/Categories');
    }

    let {archives,categories,modelBlock,modelAnnotation}=useContext(ArchiveContext)

  return (
    <>
        <aside>
            <div className={`rounded shadow-sm ${modelBlock} ${style.userInfo}`}>
                <div className={`rounded-circle overflow-hidden border ${style.userImgContainer}`}>
                    <img className='img-fluid' src={process.env.PUBLIC_URL+'/img/headShot/head_shot1.jpg'} alt="大頭貼"/>
                </div>
                <div className='userBlock'>
                    <div className="col text-center">
                        <Link to="/About" className={style.userName}>
                            <h5>Howard</h5>
                        </Link>
                    </div>
                    <div className="categoryAndPost row text-center mx-1">
                        <div className={`col ${style.containerCA}`} onClick={handlePosts}>
                            <p>Posts</p>
                            <p>{archives.length}</p>
                        </div>
                        <div className={`col ${style.containerCA}`} onClick={handleCategories}>
                            <p>Categories</p>
                            <p>{categories.length}</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className={`mt-3 rounded shadow-sm ${modelBlock} ${style.userInfo}`}>{/*Categories Block*/}
                <div className={style.categoryTitle} onClick={handleCategories}>
                    <img 
                        src={process.env.PUBLIC_URL+'/img/widget/folder.png'}
                        className={`${style.folderIcon} ${changeModel?"":style.changeIcon}`}
                        alt="分類Icon"/>
                    <p className="ms-2 fw-bold">Categories</p>
                </div>
                <div className="folderContainer">
                    {
                        categories.map((item,index)=>(
                            <Link to={`/Categories/${item.category}`} className="text-decoration-none" key={index}>
                                <p className={style.folder} style={{color:`${modelAnnotation}`}}>{item.category} &nbsp;({item.categoryId.length})</p>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </aside>
    </>
  )
}
