function renderIcons(selector, icons){
    const count = icons.length;
    const DOM = document.querySelector(selector);
    DOM.innerHTML = '';
    let HTML = '';
    for (let i = 0; i < count; i++){
        const social = icons[i];
        HTML += `<a href="${social.url}" class="fa fa-${social.icon}"></a>`;    
    }
    // console.log(HTML);
    
    return DOM.innerHTML = HTML;
}
export default renderIcons;