import { Link } from "react-router-dom";
import style from "../css/Header.module.css";
import { useArchive } from "../ArchiveData";

function Header() {
  const { isLight,toggleLight,modelStyle } = useArchive();


  return (
    <nav
      className={`navbar ${style.titleContainer} ${
        isLight ? "" : "bg-dark"
      }`}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className={`d-flex align-items-center ${style.titleLink}`}>
          <h2 className={`${style.titleFirst} ${modelStyle}`}>HW</h2>
          <h2 className={`${style.titleSecond} ${modelStyle}`}>Blog</h2>
        </div>
      </Link>
      <div className="d-flex">
        <div
          className={`${style.changeModel}`}
          style={{ backgroundColor: isLight ? "" : "rgb(100,100,100)" }}
          onClick={toggleLight}
        >
          {/*變換模式的背景顏色 */}
          <div
            className={`rounded-circle overflow-hidden d-flex align-items-center ${
              style.modelIconBlock
            } ${isLight ? "bg-white" : ""}`}
          >
            <img
              src={process.env.PUBLIC_URL + "/img/widget/sun.png"}
              className={`img-fluid ${isLight ? "" : style.modelIcon}`}
              alt="sunIcon"
            />
          </div>

          <div
            className={`rounded-circle overflow-hidden d-flex align-items-center ${
              style.modelIconBlock
            } ${isLight ? "" : "bg-white"}`}
          >
            <img
              src={process.env.PUBLIC_URL + "/img/widget/moon.png"}
              className={`img-fluid`}
              alt="moonIcon"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
