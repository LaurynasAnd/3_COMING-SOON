function renderProgressBars(config) {
    // object destructurising
    const {selector, selectorPosition='BeforeEnd'} = config;
    let {data} = config;
    // data validation
    if (typeof selector !== 'string' ||
        selector.length < 1) {
            return console.error('ERROR: have to pass non-empty string as a selector value');
    }
    const DOM = document.querySelector(selector);
    if (!DOM) {
        return console.error('ERROR: selector does not exist');
    }
    if (typeof data !== 'object') {
        return console.error('ERROR: data has to be an object type');
    }
    if (!Array.isArray(data)) {
        data = [data];
    }
    //logic
    const size = data.length;
    let HTML = '';
    for (let i = 0; i < size; i++) {
        const progressBar = data[i];
        if (typeof progressBar.title !== 'string' || 
            progressBar.title.length < 1) {
                console.error(`ERROR: invalid "title" for progress bar index ${i} in selector "${selector}"`);
        }
        if (typeof progressBar.value !== 'number' || 
            progressBar.value < 0 ||
            progressBar.value > 100) {
                console.error(`ERROR: invalid "value" for progress bar index ${i} in selector "${selector}"`);
        }
        HTML += `<div class="progress-bar" >
        <div class="top">
            <div class="label">${progressBar.title}</div>
            <div class="value">${progressBar.value}%</div>
        </div>
        <div class="bar">
            <div class="fill" style="width: ${progressBar.value}%"></div>
        </div>
    </div>`;
    }
    console.log('progress...');
    // DOM.innerHTML += HTML;
    return DOM.insertAdjacentHTML(selectorPosition, HTML)
}

export default renderProgressBars;