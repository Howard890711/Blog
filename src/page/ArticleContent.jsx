import style from "../css/ArticleContent.module.css"
import { Link, useParams } from "react-router-dom";
import { useArchive } from "../ArchiveData";

export default function ArticleContent() {//文章內容
    let {archives,isLight,modelAnnotation,modelIcon}=useArchive();
    let params=useParams();


    let categoryInfo=archives.find(element=>{
        return element.id===parseInt(params.id);
    })
    

  return (

            <div className={style.container}>
                <h2>{categoryInfo.name}</h2>
                <div className="d-flex">
                    <div className="d-flex me-3">
                        <img 
                            className={style.dateIcon}
                            style={{filter:modelIcon}} 
                            src={process.env.PUBLIC_URL+'/img/widget/dateImg.png'}
                            alt="dateIcon"
                            />
                        <p className="ms-2" style={{color:`${modelAnnotation}`}}>{categoryInfo.date}</p>
                    </div>
                    <div className="d-flex">
                        <img 
                            className={style.dateIcon} 
                            style={{filter:modelIcon}}
                            src={process.env.PUBLIC_URL+'/img/widget/data.png'}
                            alt="dataIcon"
                            />
                        <p className="ms-2" style={{color:`${modelAnnotation}`}}>{categoryInfo.folder}</p>
                    </div>                    
                </div>

                <div className="contentBlock">
                    <img 
                        src={process.env.PUBLIC_URL+'/img/'+categoryInfo.img} 
                        className={style.themeImg}
                        alt="themeImage"
                        />
                    <div className={style.contentBlock}>
                        <div className='Preface'>
                            <p className={`lh text-wrap ${style.fontSize}`}>
                                 {categoryInfo.preface} 
                            </p>
                        </div>
                        {
                            categoryInfo.content.map(section=>(
                                <div className="mb-4">
                                    {section.map(item=>{
                                        switch(item.type){
                                            case "title":
                                                return( 
                                                    <>
                                                        <h4>{item.describe}</h4>
                                                        <hr/>
                                                    </>
                                                );
                                            case "text":
                                                return(
                                                    <>
                                                        <p className={`lh ${style.fontSize}`}>
                                                            {item.describe}
                                                        </p>
                                                    </>
                                                );
                                            case "largeImg":
                                                return <img 
                                                            src={process.env.PUBLIC_URL+`/img/${item.src}`} 
                                                            className={style.themeImg}
                                                            alt="largeImg"
                                                            />;
                                            
                                            case "checkList":
                                                return(
                                                    <ul className={`lh ${style.fontSize}`} >
                                                        {item.describe.map((listItem)=>(
                                                            <li className={isLight?"":"text-white"}>{listItem}</li>
                                                        ))}
                                                    </ul>
                                                );

                                            case "annotation":
                                                return <p className="mt-3" style={{color:`${modelAnnotation}`}}>{item.describe}</p>;

                                            case "middleImg":
                                                return <img
                                                            src={process.env.PUBLIC_URL+`/img/${item.src}`} 
                                                            className="border w-100 rounded"
                                                            alt="middleImage"
                                                            />;

                                            case "program":
                                                return(
                                                    <pre className="bg-black p-4 rounded">
                                                        <span className={style.gitInstruction}>{item.describe}</span>
                                                    </pre>
                                                );
                                            
                                            case "link":
                                                return (<div className={` lh ${style.link}`}>
                                                            <Link to={item.src} style={{color:isLight?"":"#46A3FF"}}>{item.linkName}</Link>
                                                        </div>
                                                        );
                                            default:
                                                return null;
                                        }    
                                    })}
                                </div>
                            ))
                        }
                    </div>
                </div>
                
            </div>
  )
}

