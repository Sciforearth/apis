"use client"
import React, { useEffect } from 'react'
import * as Realm from "realm-web"

export const LoginComponent = () => {

    
 const app = new Realm.App({ id: "revtrance-hcgmauq" });


useEffect(()=>{

    if(!app.currentUser?.id){
        app.logIn(Realm.Credentials.anonymous())

    }

},[])
    
  return (
    <div></div>
  )
}
