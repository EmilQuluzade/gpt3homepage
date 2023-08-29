import React from 'react'
import Google from '../Images/google.svg'
import Slack from '../Images/slack.svg'
import Atlassian from '../Images/atlassian.svg'
import Dropbox from '../Images/dropbox.svg'
import Shopify from '../Images/shopify.svg'

// I know it's possible to use mapping here but I'm just planning to use design here. I use js in other projects in better way ))

const Companies = () => {
  return (
    <div className="companies">
        <img src={Google} alt="" />
        <img src={Slack} alt="" />
        <img src={Atlassian} alt="" />
        <img src={Dropbox} alt="" />
        <img src={Shopify} alt="" />
    </div>
  )
}

export default Companies