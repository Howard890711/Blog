import Title from './Title'
import UserInformation from './UserInformation'
import Footer from './Footer'
import style from "./css/About.module.css"
import { Link } from 'react-router-dom'
import ChangeButton from './ChangeButton'
import { useContext } from 'react'
import { ArchiveContext } from './Archive'


export default function About() {

    let{changeModel,modelBlock,modelText}=useContext(ArchiveContext);


  return (
    <div className={style.header}>
        <Title/>
        <div className={style.container}>
            <div className={`rounded shadow-sm ${style.leftContainer} ${modelBlock}`}>
                <div className={style.switchButton}>
                  <ChangeButton/>
                </div>
                <h3 className='mb-3'>About</h3>
                <div className='profileContainer'>
                    <ul className='lh-lg'>
                        <li className={` ${modelText}`}>網站名稱：Howard's Blog&nbsp;(HW)</li>
                        <li className={` ${modelText}`}>風格：乾淨簡潔</li>
                        <li className={` ${modelText}`}>專長：運動/探索/音樂</li>
                        <li className={` ${modelText}`}>文章領域：給自己一些期許及警惕/自然景色/前端領域的小常識</li>
                    </ul>
                    
                    <div style={{border:changeModel?'1px dashed #000':"1px dashed #fcfcfc",width:'100%'}}></div>
                    <h5 className='mt-3'>個人簡介:</h5>
                    <p>
                    Hello!!
                    我是正在求職的社會新鮮人。<br/><br/>
                    這個部落格的主要目的是記錄我在準備面試專案過程中所學到的一些知識與常識，並分享這些經驗，希望能對未來的自己或其他人有所幫助。<br/><br/>
                    此外，這裡也會記錄一些日常生活中讓我感到有趣或印象深刻的事情，作為一份珍貴的回憶。<br/><br/>

                    希望你能在這裡找到共鳴，並一起交流與成長！
                    </p>

                    <div className='d-flex mt-3'>
                        <Link to='https://www.instagram.com/howard_07_11/'>
                            <img className={`${style.communityImg} ${changeModel?"":style.changeIcon}`} src={process.env.PUBLIC_URL+'/img/widget/igImg.png'}/>
                        </Link>
                        <Link to='https://github.com/Howard890711'>
                            <img className={`${style.communityImg} ${changeModel?"":style.changeIcon}`} src={process.env.PUBLIC_URL+'/img/widget/githubImg.png'}/>
                        </Link>
                    </div>
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
