import { Routes, Route, useLocation } from "react-router-dom";
import style from "./css/PageLayout.module.css";
import Posts from "./page/Posts";
import ArticleContent from "./page/ArticleContent";
import About from "./page/About";
import Categories from "./page/Categories";
import CategoryDetail from "./page/CategoryDetail";
import Articles from "./page/Articles";
import ChangeButton from "./component/ChangeButton";
import UserInformation from "./component/UserInformation";
import { useArchive } from "./ArchiveData";

function PageLayout() {
  const location = useLocation();
  const {isLight}=useArchive();
  const isIndex=location.pathname==="/";
  const showBackground=!isIndex?`${style.showLeftBlock} ${isLight?"bg-white":"bg-dark text-white"}`:""

  
  return (
    <div className={style.container}>
      <div
        className={` ${style.leftBlock} ${showBackground}`}
      >
        <div className={style.switchButton}>
          <ChangeButton />
        </div>
        <Routes>
          <Route path="/" element={<Posts/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Articles" element={<Articles/>} />
          <Route path="/Categories" element={<Categories />} />
          <Route
            path="/Categories/:categoryName"
            element={<CategoryDetail />}
          />
          <Route path="ArticleContent" element={<ArticleContent />}>
            <Route path=":id" element={<ArticleContent />} />
          </Route>
        </Routes>
      </div>
      <div className={style.rightBlock}>
        <UserInformation />
      </div>
    </div>
  );
}

export default PageLayout;
