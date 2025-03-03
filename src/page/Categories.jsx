import style from "../css/Categories.module.css";
import { Link } from "react-router-dom";
import { useArchive } from "../ArchiveData";

export default function Categories() {
  //分類頁面

  const {categories,modelText,modelIcon,modelAnnotation } = useArchive();

  return (
    <>
      <div className="d-flex align-items-start">
        <img
          src={process.env.PUBLIC_URL + "/img/widget/folder.png"}
          className={style.folderImg}
          style={{filter:modelIcon}}
          alt="cagegoryIcon"
        />
        <h3>Categories</h3>
      </div>
      <h4 className="mb-3">
        共<span className="text-danger mx-1">{categories.length}</span>種類別
      </h4>
      <ul className="lh-lg fw-bold">
        {categories.map((element, index) => (
          <li key={element.category} className={modelText}>
            <Link
              to={`/Categories/${element.category}`}
              className={`${style.category} ${modelText}`}
            >
              {element.category}
              <span style={{ color: modelAnnotation }}>
                &nbsp;({categories[index].categoryId.length})
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
