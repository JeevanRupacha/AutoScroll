
    const scrollAuto = (classname)=>{
        //newmsessage height
        cosnt containerClass = classname
        const divContainer = document.querySelector(`.${containerClass}`)  // your class replace
        /** chatting-msg is the container which goes scroll function so replace it with your div or container */
        const newMessageLastChild= divContainer.lastElementChild
        if (newMessageLastChild == null ) return null
        const newMessagestyle = getComputedStyle(newMessageLastChild)
        const marginBtn = parseInt(newMessagestyle.marginBottom)
    
        //new msg total height
        const newMessageHeight = newMessageLastChild.offsetHeight + marginBtn
    
    
    
        //chatting-msg container height
        const chattingContHeight = chattingCont.scrollHeight
        const visibleHeight = chattingCont.offsetHeight
        const scrolledH = visibleHeight+ chattingCont.scrollTop
    
        console.log(scrolledH)
    
        if(chattingContHeight - newMessageHeight<= scrolledH + 100){
        chattingCont.scrollTop = chattingCont.scrollHeight
         }
    
}
    
export default scrollAuto
