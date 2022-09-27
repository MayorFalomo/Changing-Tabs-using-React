import React,{useState, useEffect} from 'react'
import "./Tab.css"
import { FaAngleDoubleRight } from "react-icons/fa"

const Tabs = ({newArray, current, handleClick}) => {

    const [loading, setLoading] = useState(false);
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setCompleted(true);
        }, 8000);
    }, [])

  return (
      <div className='Container'>
          {!completed ? (
              <div className='Contain'>
                  {!loading ? (
                      <div className='loader'>
                          <span>
                              <video id='video' autoPlay muted loop>
                                <source src='./morphy.mp4' type='video/mp4'/>
                              </video>
                          </span>
                          </div>
                  ) : (
                          <div className="completed"> loaded </div>
                  )}
                  </div>
          ) : (
                  <div className='card'>
                      <div className='heading'>
                          <h1>Experience</h1>
                          <div className='line'></div>
                          </div>
                          
                      <div className='mainFlex'>
    <nav>
        <ul>
          <li><button className={ current === 0 ? "link active" : ""} onClick = {() => handleClick(0) } >TOMMY</button></li>
          <li><button  className={current === 1 ? "link active" : ""}  onClick={() => handleClick(1) } >BIGDROP</button></li>
          <li><button  className={current === 2 ? "link active" : ""} onClick={() => handleClick(2) } > CUKER </button></li>
        </ul>
                      </nav>
                      <div className='mainBody'>
          <div className='position'><b>{newArray.position}</b></div>
          <div className='name'>{newArray.name}</div>
                      <div className='date'>{newArray.Date}</div>
                      <div className="iconFlex">
                          <div className='comment'>
                              
                              <div className='flexOne'>
                             <div className='icon'><FaAngleDoubleRight /></div>
                                  <div className='comment'>{newArray.firstComment}</div>
                              </div>
                              
                              <div className='flexOne'>
                                <div className='icon'><FaAngleDoubleRight /></div>
                                  <div className='comment'>{newArray.secondComment}</div>
                                  </div>
                              
                              <div className='flexOne'>
                             <div className='icon'><FaAngleDoubleRight /></div>
                                  <div className='comment'>{newArray.thirdComment}</div>
                              </div>
                              
                              <div className='flexOne'>
                                    <div className='fourthIcon'><FaAngleDoubleRight /></div>
                                  <div className='comment'>{newArray.fourthComment}</div>
                                </div>
                          </div>
                          </div>
                              <button className='info'>MORE INFO</button>
                              </div>
                      </div>    
                  </div>    
          )}       
    </div>
  )
}

export default Tabs