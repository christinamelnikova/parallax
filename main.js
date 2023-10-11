document.addEventListener('mousemove', function (e){
    document.querySelectorAll('.par').forEach(cur=>{
        let speedX = cur.getAttribute('data-speedX')
        let speedY = cur.getAttribute('data-speedY')
        cur.style.transform = `translate(${e.clientX*speedX/300}px, ${e.clientY*speedY/300}px)`
    })
})
