import style from "../css/About.module.css";
import { Link } from "react-router-dom";
import { useArchive } from "../ArchiveData";

export default function About() {
  const { isLight, modelIcon } = useArchive();

  return (
    <div>
      <h3 className="mb-3">About</h3>
      <div className="ul">
        <ul className={`lh-lg ${isLight ? style.lightMode : style.darkMode}`}>
          <li>網站名稱：Howard's Blog&nbsp;(HW)</li>
          <li>風格：乾淨簡潔</li>
          <li>專長：運動/探索/音樂</li>
          <li>文章領域：給自己一些期許及警惕/自然景色/前端領域的小常識</li>
        </ul>

        <div
          style={{
            border: isLight ? "1px dashed #000" : "1px dashed #fcfcfc",
            width: "100%",
          }}
        ></div>
        <div className="mt-3">
          <h5 className="fw-bold">Howard Liu</h5>
          目前是正在求職的前端工程師
          <br/>
          <br/>
          這個部落格的主要目的是記錄我在準備面試專案過程中所學到的一些知識與常識，
          並分享這些經驗，希望能對未來的自己或其他人有所幫助。
          <br />
          <br />
          此外，這裡也會記錄一些日常生活中讓我感到有趣或印象深刻的事情，作為一份珍貴的回憶。
          <br />
          <br />
          希望你能在這裡找到共鳴，並一起交流與成長！
        </div>

        <div className="d-flex mt-3">
          <Link to="https://www.instagram.com/howard_07_11/">
            <img
              className={style.communityImg}
              style={{ filter: modelIcon }}
              src={process.env.PUBLIC_URL + "/img/widget/igImg.png"}
              alt="igImage"
            />
          </Link>
          <Link to="https://github.com/Howard890711">
            <img
              className={style.communityImg}
              style={{ filter: modelIcon }}
              src={process.env.PUBLIC_URL + "/img/widget/githubImg.png"}
              alt="githubImage"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
