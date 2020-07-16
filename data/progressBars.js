const leftProgressBars = {
    selector: '.column-left',
    data:   [
        {
            title: 'UX design',
            value: 90
        },
        {
            title: 'Web design',
            value: 85
        },
        {
            title: 'Web development',
            value: 70
        }
        ]
}
const rightProgressBars = {
    selector: '.column-right > p',
    selectorPosition: 'afterend',
    data: {
        title: 'HTML',
        value: 10
    }
}
export default {
    leftProgressBars,
    rightProgressBars
};