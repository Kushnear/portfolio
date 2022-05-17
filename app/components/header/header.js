const targetElement = document.querySelectorAll('.technologies__progress-scale');

// const scrollItem = () => {
    window.addEventListener('scroll',(event) => {
        console.log(scrollY);
        if (scrollY >= 2602) {
            targetElement.forEach((e) => {
                e.classList.add('technologies__progress-scale--advanced')              
                // e.classList.add('technologies__progress-scale--advanced') 
            }) 
        }
    });






