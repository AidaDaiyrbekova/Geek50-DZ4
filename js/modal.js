//MODAL
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal')
    const modalOpenBtn = document.querySelector('#btn-get')
    const modalCloseBtn = document.querySelector('.modal_close')

    const openModal = () => {
        modal.style.display = 'block'
        document.body.style.overflow = 'hidden'
    }
    setTimeout(openModal,10000)

    const closeModal = () => {
        modal.style.display = 'none'
        document.body.style.overflow = ''
    }

    modalOpenBtn.onclick = openModal
    modalCloseBtn.onclick = closeModal
    modal.onclick = (event) => {
        if (event.target === modal) {
            closeModal()
        }
    }

    function bottom() {
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;
        const pageHeight = document.documentElement.scrollHeight;

        return scrollY + viewportHeight >= pageHeight-5;
    }

    function onScroll() {
        if (bottom()) {
            openModal()
            window.removeEventListener('scroll', onScroll);
        }
    }
    window.addEventListener('scroll', onScroll);
})

