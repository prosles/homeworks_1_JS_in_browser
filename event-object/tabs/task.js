const tabs = Array.from(document.querySelectorAll('.tab'));
const content = Array.from(document.querySelectorAll('.tab__content'));



for(let i = 0; i < tabs.length; i++) {
    const tabActive = () => {
        tabs.forEach(item => item.classList.remove('tab_active'));
        content.forEach(item => item.classList.remove('tab__content_active'));
        tabs[i].classList.add('tab_active');
        content[i].classList.add('tab__content_active');
    }

    tabs[i].addEventListener('click', tabActive);
}