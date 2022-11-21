let css = `<ProgressBar length='490px' progress='245px' height='20px' />`;

function pxToRem(CSSString) {
    const rgx = new RegExp(/(\d+\.?\d*)px/, 'g');
    return CSSString.replace(rgx, (match, n) => (n / 16) + 'rem');
}

console.log(pxToRem(css));