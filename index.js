const core = require('@actions/core');
const keccak256 = require('keccak256');

try {
    const data = core.getInput('data') || 'VelocityDidRegistry';
    
    if (!data) {
        throw new Error('No source data provided')
    }

    console.log(`Source data: ${data}`);

    const address = `0x${keccak256(data)
        .toString('hex')
        .slice(-40)}`;
    core.setOutput('address', address);
    console.log(`Generated address: ${address}`);
} catch (ex) {
    core.setFailed(ex.message);
    console.error(ex.message);
}