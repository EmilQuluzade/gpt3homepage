import React from 'react'
import Blogpic1 from '../Images/Blog1.svg'
import Blogpic2 from '../Images/Blog2.svg'
import Blogpic3 from '../Images/Blog3.svg'
import Blogpic4 from '../Images/Blog4.svg'
import Blogpic5 from '../Images/Blog5.svg'

const Blogs = () => {
  return (
    <div className="blogs">
      <h1>A lot is happening, <br/>
We are blogging about it.</h1>
<div className="blogcards">
  <div className="line1">
<img src={Blogpic1} alt="" />
<div className="linetexts">
<div className="linestart">
<span className="date">Sep 26, 2021</span>
<h4>GPT-3 and Open  AI is the<br/> future. Let us explore how it<br/> is?</h4>
</div>
<span className="link">Read Full Article</span>
</div>
  </div>
  <div className="line2"></div>
  <div className="line3"></div>
</div>
    </div>
  )
}

export default Blogs