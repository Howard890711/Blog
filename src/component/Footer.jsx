import style from "../css/Footer.module.css";
import whiteImg from "../assets/footerImg.jpg";
import blackImg from "../assets/footerBlack.jpg";
import { useArchive } from "../ArchiveData";

export default function Footer() {
  const { isLight,modelText } = useArchive();
  let backgroundImg = isLight ? whiteImg : blackImg;

  return (
    <footer
      className={`text-center w-100 ${style.footerContainer} ${modelText}`}
      style={{ backgroundImage: `url(${backgroundImg})`}}
    >
      <p>Copyright&#x00A9; 2024-2025 &nbsp;Howard</p>
      <p>All related images are &#x00A9;ICONFINDER &nbsp; &#x00A9;Pexels</p>
    </footer>
  );
}
