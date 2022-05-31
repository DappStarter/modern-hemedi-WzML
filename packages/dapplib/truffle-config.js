require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope kite bone tooth tissue reflect noble protect good end army genuine'; 
let testAccounts = [
"0x37eb4c898d9e74e0495d9fc86bf33138daad1d24ab62963d3045850bf9c58f66",
"0x2faf4dc25aa152aa020805664a4a124f1b835dd8056b5f4aea6e4fb593abbfd3",
"0x53bed5669865418622b582221268324c89ebda55cbd611bd3af5e92e7ff40a48",
"0xcde0788d3d522261c327cf56bef32790924cc7b41f1250400923c6bfbeae2836",
"0x52410596d22ca8bc7c3a804c0b7918766ead45b4d14ce9e2e7ae48367dde2cb3",
"0xef7f6a399da6be63ec0032b25733d7ab20b025135285f61f2f2c29e7839e3894",
"0xeb388da130ae46661fb69a39c4a0df74101831bd9f2b5153d7b721bb805d4d9e",
"0xad40b195d12ae8bfd37d09f154df321a700856aafcdca67f9514c8e9ebe5b718",
"0x60082e5b30bfb91039d3038173554a6e4f519d4e0ca8e4efd15736d61d875f89",
"0x46f0014e4e83513a6655cef9482e1f722b64097442a7562ee0a68436bedb8fc2"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

