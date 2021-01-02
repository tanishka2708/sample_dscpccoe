import React , {useState , useEffect} from 'react'
import Tilt from 'react-tilt'
import eventsJSONData from '../assets/eventsData'
import '../css/style.css';

const grandCanyon = `url(https://ewscripps.brightspotcdn.com/dims4/default/5a64170/2147483647/strip/true/crop/3000x1688+0+172/resize/1280x720!/quality/90/?url=https%3A%2F%2Fewscripps.brightspotcdn.com%2F0b%2F77%2F2d7dc37a4c59ba8a3f9e2709d4e9%2Fgrand-canyon-deaths-shutterstock-via-cnn-040519.JPG)`
const pichai = 'url(https://media.wired.com/photos/5cccd0e6af643e2f373ebbbe/16:9/w_2400,h_1350,c_limit/Google-IO-684260378.jpg)'

const constWidth = 350
const constHeight = 350
const constMax = 30

function Events(){
    const [tiltData , setTiltData] = useState({});
    const [eventsData , setEventsData] = useState({})

    
    useEffect(()=>{
        setEventsData(eventsJSONData)
        let tempdata = {}
        Object.keys(eventsJSONData).forEach((event)=>{
            tempdata[event] = {tX : 0 , tY : 0}
        })
        setTiltData(tempdata)
    },[])


    const mouseMove = (event , eventid) =>{
        let left = event.target.getBoundingClientRect().left
        let top = event.target.getBoundingClientRect().top
        let x = (event.clientX - left) / constWidth;
        let y = (event.clientY - top) / constHeight;
        let _x = Math.min(Math.max(x, 0), 1);
        let _y = Math.min(Math.max(y, 0), 1);

        let tiltX = (constMax / 2 - _x * constMax);
        let tiltY = (_y * constMax - constMax / 2);
        settiltdata(tiltX  , tiltY , eventid)
    }

    const settiltdata = (tiltX , tiltY , eventid) => {
        setTiltData({...tiltData , [eventid] : {tX : tiltX , tY : tiltY}})
    }

    return(
        <div className = "container container-fluid">
            {
                Object.keys(eventsData).map((event , index) =>{
                    return(
                        <div key = {event} style = {{margin : '10px'}}>
                            <Tilt className="Tilt event-tilt-card" onMouseLeave = {()=>{settiltdata(0,0 , event)}} onMouseMove = {(e) => mouseMove(e , event)} options={{reverse : false, max : constMax , speed : 5000 , scale : 1 }} style= {{height : constHeight , width : constWidth}}>
                                <div className = 'event-card-bg' style = {{backgroundImage : grandCanyon , transform : `translateX(${tiltData[event].tX}px) translateY(${tiltData[event].tY}px)`}}></div>
                                <div style = {{color : 'white', position : 'absolute' , bottom : '0'}}>hello worsdfasdfsdf sj fsdkfj;slkdfjasldkjf sljdfk asjdflkjld</div>
                            </Tilt>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Events