import React from 'react'
import Human from '../Images/humanface.svg'
import Profiles from '../Images/profiles.svg'

const Introduction = () => {
  return (
    <div className="introduction">
    <div className="introtext">
    <h1>Let’s Build Something <br/> amazing with GPT-3 <br/>    OpenAI</h1>
    <p>Yet bed any for travelling assistance indulgence unpleasing. <br/>  Not thoughts all exercise blessing. Indulgence way <br/>  everything joy alteration boisterous the attachment. Party<br/>  we years to order allow asked of.</p>
    <div className="inputpart">
        <form action="">
        <input type="text" className='inputtext' placeholder='Your Email Address' />
        <input type="submit" className='propbutton formbutton'  value='Get Started'/>
        </form>
        <div className="profiles">
            <img src={Profiles} alt="" />
            <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
    </div>
    </div>
    <div className="image">
        <img src={Human} alt=""/>
    </div>
    </div>
  )
}

export default Introduction