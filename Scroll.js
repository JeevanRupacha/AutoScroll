
    const scrollAuto = ()=>{
        //newmsessage height
        const chattingCont = document.querySelector('.chatting-msg')
        const newMessageLastChild= chattingCont.lastElementChild
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