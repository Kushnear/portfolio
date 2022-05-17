const btn = document.querySelector('.scrollUp')

console.log('sheeeeit')

window.addEventListener('scroll', () => {
    scrollY >= 815 ? btn.classList.add('scrollUp--isShow') : btn.classList.remove('scrollUp--isShow')
})

btn.addEventListener('click', () => window.scrollTo({
    top: 0,
    behavior: "smooth"
}))
