import style from "../css/Articles.module.css";
import { Link } from "react-router-dom";
import { useArchive } from "../ArchiveData";

export default function Post() {
  const { archives,modelText, modelAnnotation,modelIcon } = useArchive();

  return (
    <>
      <div className="d-flex align-items-start">
        <img
          src={process.env.PUBLIC_URL + "/img/widget/postImg.png"}
          className={style.postIcon}
          style={{filter:modelIcon}}
          alt="postIcon"
        />
        <h3>Articles</h3>
      </div>
      <h4 className="mb-3">
        共<span className="text-danger mx-1">{archives.length}</span>筆文章
      </h4>
      <ul className="lh-lg">
        {archives.map((posts) => (
          <li key={posts.id} className={modelText}>
            <Link
              to={"/ArticleContent/" + posts.id}
              className={`${style.post} ${modelText}`}
            >
              <span className="fw-bold">{posts.name}</span>
              <span className="ms-3" style={{ color: modelAnnotation }}>
                {posts.date}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
