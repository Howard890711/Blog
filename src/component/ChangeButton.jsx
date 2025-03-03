import { Link } from "react-router-dom";
import style from "../css/ChangeButton.module.css";
import { useState } from "react";
import { useArchive } from "../ArchiveData";

export default function ChangeButton() {
  const { isLight,modelIcon } = useArchive();
  let background = isLight ? "rgb(240,240,240)" : "rgb(150,150,150)";
  const links = [
    { to: "/", img: "/img/widget/home.png", alt: "Home" },
    { to: "/Articles", img: "/img/widget/postImg.png", alt: "Articles" },
    { to: "/Categories", img: "/img/widget/folder.png", alt: "Categories" },
    { to: "/About", img: "/img/widget/aboutImg.png", alt: "About" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className={` ${style.menuBtn} ${isOpen ? "rounded-bottom" : "rounded"}`}
        onClick={toggleMenu}
        style={{
          backgroundColor: background,
          color: isLight ? "" : "white",
        }}
      >
        ☰
      </button>
      <div
        className={`rounded-top align-items-center ${style.sidebar} ${
          isOpen ? style.open : ""
        }`}
        style={{ backgroundColor: background }}
      >
        {links.map((link, index) => (
          <Link key={index} to={link.to} className="rounded p-2">
            <img
              src={process.env.PUBLIC_URL + link.img}
              className="h-100 w-100 "
              style={{filter:modelIcon}}
              alt={link.alt}
            />
          </Link>
        ))}
      </div>
    </>
  );
}
