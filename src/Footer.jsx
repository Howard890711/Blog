import { useContext } from "react";
import style from "./css/Footer.module.css"
import { ArchiveContext } from "./Archive";
import whiteImg from './assets/footerImg.jpg';
import blackImg from './assets/footerBlack.jpg'




export default function Footer() {


  let {changeModel}=useContext(ArchiveContext);
  let backgroundImg=changeModel?whiteImg:blackImg;

  return (
    <footer className={`text-center w-100 ${style.footerContainer}`} style={{backgroundImage:`url(${backgroundImg})`}}>
      <p>Copyright&#x00A9; 2024-2025 &nbsp;Howard.</p>
      <p>All related images are &#x00A9;ICONFINDER &nbsp; &#x00A9;Pexels</p>
    </footer>
  )
}
