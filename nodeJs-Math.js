const arguments = process.argv.slice(2);

const areaofTheCircle = r => {
    let result = Math.PI * (Math.sqrt(r))
    console.log(`${ result.toFixed(2) }`)
}

areaofTheCircle(arguments[0]*1)