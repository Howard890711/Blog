import { Link } from 'react-router-dom';
import  style from './css/Title.module.css'
import { useContext} from 'react';
import { ArchiveContext } from './Archive';

function Title() {
  
  let {changeModel,setChangeModel,modelText}=useContext(ArchiveContext)

  const handleModel=()=>{
    setChangeModel(!changeModel)
  }


  

  return (
      <nav className={`navbar ${style.titleContainer} ${changeModel?"":"bg-dark"}`}>
        <Link to="/" style={{textDecoration:'none'}}>
          <div className={`d-flex align-items-center ${style.titleLink}`}>
            <h2 className={`${style.titleFirst} ${modelText}`}>HW</h2>
            <h2 className={`${style.titleSecond} ${modelText}`}>Blog</h2>
          </div> 
        </Link>
      <div className='d-flex'>
        <div className={`${style.changeModel}`} style={{backgroundColor:changeModel?" ":"rgb(100,100,100)"}} onClick={handleModel}>{/*變換模式的背景顏色 */}
          <div className={`rounded-circle overflow-hidden d-flex align-items-center ${style.modelIconBlock} ${changeModel===true? "bg-white":""}`}>
            <img 
              src={process.env.PUBLIC_URL+'/img/widget/sun.png'} 
              className={`img-fluid ${changeModel?"":style.modelIcon}`}
              alt="sunIcon"
              />
          </div>

          <div className={`rounded-circle overflow-hidden d-flex align-items-center ${style.modelIconBlock} ${changeModel===false? "bg-white":""}`}>
            <img 
              src={process.env.PUBLIC_URL+'/img/widget/moon.png'} 
              className={`img-fluid`}
              alt='moonIcon'  
            />
          </div>
        </div>
      </div>

    </nav>
  )
} 

export default Title

