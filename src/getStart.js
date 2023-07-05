import React from 'react'
import ConfettiExplosion from 'react-confetti-explosion';
import { withRouter } from 'react-router-dom';
import ReactCountdownClock from "react-countdown-clock";


export default function GetStart() {
    const [isHover, setIsHover] = React.useState(false);
    const [isExploding, setIsExploding] = React.useState(false);
    const[display,setDisplay]=React.useState(false)
    const[timer,setTimer]=React.useState(false)
   // const navigate=withRouter();
 const large={
    force: 0.8,
    duration: 3000,
    particleCount: 250,
    width: 1600,
  }
    const getStart=()=>{
      setDisplay(true)
      setTimer(true)
        setTimeout(()=>{
           // window.location.href='https://app.tpo.ai/user/login'
           setTimer(false)
            setIsExploding(true)
            
            setTimeout(()=>{
              window.location.href='https://app.tpo.ai/user/login'
             // setIsExploding(true)
          },3000)
         
        },8500)
    }
    const handleMouseEnter = () => {
        setIsHover(true);
     };
     const handleMouseLeave = () => {
        setIsHover(false);
     };

  return (
    <div style={{backgroundImage: 'linear-gradient(to right,#02c197,#006a9a)',textAlign:"center",position:"relative",height:'100vh',margin:0}}>
    <div style={{position:'absolute',top:'50%',msTransform: 'translate(-50%,-50%)',
  transform:'translate(-50%,-50%)',margin:0,textAlign:"center",left:"50%"}} >
    <div style={{marginBottom:"30px",textAlign:'center',position:'relative'}}>
    {isExploding&& <ConfettiExplosion {...large}/>}
        <img src="/tpoWhiteBgLogo.png" />
    </div>
    <div style={{display:timer?"block":'none',position:'absolute',top:'120%',msTransform: 'translate(-50%,-50%)',
  transform:'translate(-50%,-50%)',margin:0,textAlign:"center",left:"50%"}}>
    <ReactCountdownClock seconds={10}
                     color="#8c0769"
                     alpha={0.9}
                     size={200}
                     showMilliseconds={false}
                     onComplete={() => {
                      return [true, 1000];
                    }} />
    </div>
    <div style={{display: display? "none":'block'}}>
<button style={{border:"none",padding:'10px',background:isHover?"#011414" :'#023636',color:'white',fontSize:'18px',fontWeight:'bold',borderRadius:'10px',cursor:'pointer',width:'25%'}} onClick={getStart}
onMouseEnter={handleMouseEnter}
onMouseLeave={handleMouseLeave}
>
Launch
</button>
</div>
    </div>
    <div style={{float:'right'}}>
    {isExploding&& <ConfettiExplosion {...large}/>}
    </div>
    </div>
  )
}
