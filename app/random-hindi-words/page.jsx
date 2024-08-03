import React from 'react'
import { LoginComponent } from '../Helpers/ClientSideComponents'

const HindiWordsPage = () => {
  return (
    <div className=' fixed top-20 left-1/2 -translate-x-1/2  px-10 py-5 rounded-lg shadow-lg bg-slate-400 border border-gray-400 border-solid space-y-2 '>

        <h1>Random hindi words API</h1>
        <p>By Deepanshu Balyan</p>


        <p>This API returns random hindi word</p>

        <p>Method: GET</p>
        <div className=' bg-slate-50 px-5 py-3'> https://ap-south-1.aws.data.mongodb-api.com/app/revtrance-hcgmauq/endpoint/hindi/randomword </div>
        
        <a href="https://ap-south-1.aws.data.mongodb-api.com/app/revtrance-hcgmauq/endpoint/hindi/randomword"> check it out</a>
       <div>
        <p>response</p>
        <p>&#123; _id: (type) ObjectId  , word : (type) string &#125;</p>
       </div>


    </div>
  )
}

export default HindiWordsPage