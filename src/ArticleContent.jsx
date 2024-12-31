import { useContext } from "react";
import Footer from "./Footer";
import Title from "./Title";
import UserInformation from "./UserInformation";
import style from "./css/ArticleContent.module.css"
import { ArchiveContext } from "./Archive";
import { Link, useParams } from "react-router-dom";
import ChangeButton from "./ChangeButton";

export default function ArticleContent() {
    let {archives,changeModel,modelBlock,modelAnnotation,modelText}=useContext(ArchiveContext);
    let params=useParams();


    let categoryInfo=archives.find(element=>{
        return element.id===parseInt(params.id);
    })
    

  return (
    <div className={style.header}>
        <Title/>
        <div className={style.articleContainer}>
            <div className={`rounded shadow-sm ${style.leftContainer} ${modelBlock}`}>
                <div className={style.switchButton}>
                  <ChangeButton/>
                </div>
                <h2>{categoryInfo.name}</h2>
                <div className="d-flex">
                    <div className="d-flex me-3">
                        <img className={`${style.dateIcon} ${changeModel?"":style.changeIcon}`} src={process.env.PUBLIC_URL+'/img/widget/dateImg.png'}/>
                        <p className="ms-2" style={{color:`${modelAnnotation}`}}>{categoryInfo.date}</p>
                    </div>
                    <div className="d-flex">
                        <img className={`${style.dateIcon} ${changeModel?"":style.changeIcon}`} src={process.env.PUBLIC_URL+'/img/widget/data.png'}/>
                        <p className="ms-2" style={{color:`${modelAnnotation}`}}>{categoryInfo.folder}</p>
                    </div>                    
                </div>

                <div className="contentBlock">
                    <img src={process.env.PUBLIC_URL+'/img/'+categoryInfo.img} className={style.themeImg}/>
                    <div className='p-3'>
                        <div className='Preface'>
                            <p className={`lh text-wrap ${style.changeText}`}>
                                 {categoryInfo.preface} 
                            </p>
                        </div>
                        {
                            categoryInfo.content.map(section=>(
                                <div className="mb-4" key={section.id}>
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
                                                        <p className={`lh ${style.changeText}`}>
                                                            {item.describe}
                                                        </p>
                                                    </>
                                                );
                                            case "largeImg":
                                                return <img src={process.env.PUBLIC_URL+`/img/${item.src}`} className={style.themeImg}/>;
                                            
                                            case "checkList":
                                                return(
                                                    <ul className={`lh ${style.changeText}`} >
                                                        {item.describe.map((listItem)=>(
                                                            <li className={`${modelText}`}>{listItem}</li>
                                                        ))}
                                                    </ul>
                                                );

                                            case "annotation":
                                                return <p className="mt-3" style={{color:`${modelAnnotation}`}}>{item.describe}</p>;

                                            case "middleImg":
                                                return <img src={process.env.PUBLIC_URL+`/img/${item.src}`} className="border w-100 rounded"/>;

                                            case "program":
                                                return(
                                                    <pre className="bg-black p-4 rounded">
                                                        <span className={style.gitInstruction}>{item.describe}</span>
                                                    </pre>
                                                );
                                            
                                            case "link":
                                                return (<div className={` lh ${style.link}`}>
                                                            <Link to={item.src} style={{color:changeModel?"":"#46A3FF"}}>{item.linkName}</Link>
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
            <div className={style.rightContainer}>
                <UserInformation/>
            </div>
        </div>
        <Footer/>   
    </div>
  )
}

