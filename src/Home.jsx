import { useEffect, useState } from "react"
import Article from "./Article"
import ChangeButton from "./ChangeButton"
import Footer from "./Footer"
import Title from "./Title"
import UserInformation from "./UserInformation"
import style from "./css/Home.module.css"



function Home() {

  return (
    <div className={style.header}>
        <Title/>
        <div className={style.homeContainer}>
            <div className={style.leftContainer}>
                <Article />
                <div className={style.switchButton}>
                  <ChangeButton/>
                </div>
            </div>
            <div className={style.rightContainer}>
                <UserInformation/>
            </div>
        </div>
        <Footer/>
        
    </div>
  )
}

export default Home
