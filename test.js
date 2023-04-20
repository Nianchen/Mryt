
function debounce(wait,funct,...args){
    var timer = null
   return ()=>{
        clearTimeout(timer)
        timer = setTimeout(()=>{
            funct(...args)
        },wait)
   }
}