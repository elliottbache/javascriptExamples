const ethers = require('ethers');

async function convertToString(args) {
    const bytes = args[0];
    const name = ethers.decodeBytes32String(bytes);
    console.log('bytes: ', name);
}

convertToString(process.argv.slice(2));