import { Link } from "react-router-dom";
import style from "./css/ChangeButton.module.css"
import { useContext, useState } from "react";
import { ArchiveContext } from "./Archive";

 


export default function ChangeButton() {

    let {changeModel}=useContext(ArchiveContext);
    let background=changeModel?"rgb(240,240,240)":"rgb(150,150,150)"
    const links=[
        {to:"/",img:"/img/widget/home.png",alt:"Home"},
        {to:"/Posts",img:"/img/widget/postImg.png",alt:"Post"},
        {to:"/Categories",img:"/img/widget/folder.png",alt:"Categories"},
        {to:"/About",img:"/img/widget/aboutImg.png",alt:"About"}
    ]
    const [isOpen,setIsOpen]=useState(false);
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };




  return (
    <>
        <button 
            className={` ${style.menuBtn} ${isOpen ? "rounded-bottom":"rounded"}`} onClick={toggleMenu}
            style={{backgroundColor:background,color:changeModel?"":"white"}}
        >
        ☰
        </button>
        <div 
            className={`rounded-top align-items-center ${style.sidebar} ${isOpen ? style.open : ""}`}
            style={{backgroundColor:background}}
        >
            {links.map((link,index)=>(
                <Link key={index} to={link.to} className="rounded p-2">
                    <img
                        src={process.env.PUBLIC_URL+link.img} 
                        className={`h-100 w-100 ${changeModel?"":style.changeIcon}`} 
                        alt={link.alt}
                    /> 
                </Link>
            ))}
        </div>
    </>


  );
}



