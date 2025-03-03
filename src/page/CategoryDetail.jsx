import { useParams } from "react-router-dom";
import style from "../css/Categories.module.css";
import { Link } from "react-router-dom";
import { useArchive } from "../ArchiveData";

export default function CategoryDetail() {
  //細分類頁面

  const { categoryName } = useParams();
  const { archives, categories,modelText,modelIcon, modelAnnotation } = useArchive();
  const key = categories.findIndex((item) => item.category === categoryName);
  let matchArchives = [];

  if (key !== -1) {
    const CategoryIds = categories[key].categoryId;

    matchArchives = archives.filter((archive) =>
      CategoryIds.includes(archive.id)
    );
  }

  return (
    <>
      <div className="d-flex mb-3">
        <img
          src={process.env.PUBLIC_URL + "/img/widget/folder.png"}
          className={style.folderImg}
          style={{filter:modelIcon}}
          alt="folderIcon"
        />
        <Link to="/Categories" className={`${modelText} ${style.title}`}><h3>Categories</h3></Link>
        <h3>&nbsp;&gt;&nbsp;</h3>
        <h3 className="text-danger">{categoryName}</h3>
      </div>
      <ul className="lh-lg">
        {matchArchives.map((archive) => (
          <li key={archive.id} className={modelText}>
            <Link
              to={"/ArticleContent/" + archive.id}
              className={` ${style.category} ${modelText}`}
            >
              <span className="fw-bold">{archive.name}</span>
              <span className="ms-3" style={{ color: modelAnnotation }}>
                {archive.date}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
