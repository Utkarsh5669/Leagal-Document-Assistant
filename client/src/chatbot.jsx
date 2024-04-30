import React, { useEffect } from 'react'
 import './chatbot.css'
const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
    script.async = true
    document.body.appendChild(script)
 
    script.onload = () => {
      window.botpressWebChat.init({
       
        "composerPlaceholder": "Chat with LeagalAdvisor",
      "botConversationDescription": "This chatbot was built surprisingly fast with Botpress",
      "botId": "9044f150-3b44-4783-afe0-ce96823c8ed7",
      "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
      "messagingUrl": "https://messaging.botpress.cloud",
      "clientId": "9044f150-3b44-4783-afe0-ce96823c8ed7",
      "lazySocket": true,
      "botName": "LegalAdvisor",
      "stylesheet": "https://webchat-styler-css.botpress.app/prod/code/a1ecdf9f-eecd-49d0-af7d-626060e2799b/v28935/style.css",
      "frontendVersion": "v1"
        
      })
    }
  }, [])
 
  return (

  <>
  <div className='pb-1'>
  
  <div id="webchat" />
  </div>
    
  </>
  )
}
 
export default Chatbot