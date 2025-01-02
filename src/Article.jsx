import 'bootstrap/dist/css/bootstrap.min.css'
import { useContext} from 'react'
import { ArchiveContext } from './Archive'
import style from './css/Article.module.css'
import { Link} from 'react-router-dom'


export default function Article() {

    let {archives,changeModel,modelBlock,modelAnnotation}=useContext(ArchiveContext);



  


  return (
    <>
        <div className={style.categoryGrid}>
            {
                archives &&
                archives.map((archive,index)=>(
                <Link to={'/ArticleContent/'+archive.id} className={style.categoryBlock} key={index}>
                    <div 
                        className={`articleContainer1 border-0 rounded-3  ${modelBlock} ${style.category}`}  key={archive.id} >
                        <div className='overflow-hidden rounded-top'>
                            <img 
                                className={`rounded-top ${style.articleImg}`} 
                                src={process.env.PUBLIC_URL+'/img/'+archive.img}
                                alt='themeImage'    
                            />
                        </div>
                        <div className="articleInformation mt-1 px-2 py-1">
                            <div className="d-flex align-items-start">
                                <img 
                                    src={process.env.PUBLIC_URL+'/img/widget/dateImg.png'} 
                                    className={`me-2 ${style.dateIcon} ${changeModel?"":style.changeIcon}`}
                                    alt='dateIcon'
                                    />
                                <p className="me-3" style={{color:`${modelAnnotation}`}} >{archive.date}</p>
                                <img 
                                    src={process.env.PUBLIC_URL+'/img/widget/data.png'} 
                                    className={`me-2 ${style.dateIcon} ${changeModel?"":style.changeIcon}`}
                                    alt='folderIcon'
                                    />
                                <p style={{color:`${modelAnnotation}`}}>{archive.folder}</p>
                            </div>
                            <h5 className={` ${style.articleName}`}>{archive.name}</h5>
                            <p className={style.articlePreface} style={{color:`${modelAnnotation}`}}>{archive.preface}</p>
                        </div>
                    </div>
                </Link>
                ))
            }

        </div>
      
    </>
  )
}
