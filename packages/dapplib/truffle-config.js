require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski street cruise scrub pulse inside light army gas'; 
let testAccounts = [
"0x8e8fcf4db0459eefbf08de2581ef7ee1d8634cd3340338bc41ac32ac9a2fe2c9",
"0x3efd4cadbf574c3cf7d98deb9fd72aef908825b6ecf1b98935635f13a0ddd9c5",
"0xa1a39189289936835434e31680f594ffc4ea7b396db24f237b59096f22d7ebf6",
"0x236d961aa4fead0bff4e9d673c6bfd95400c777a8204e42af9435fc6ed1702bb",
"0xd74d8632b4656e70ab1f36172a5d1f78b7c2130ce76e707998993373a34dea15",
"0xb24d5f4c2bd16fea999938c8370a412a33fdd2075a54ec10bc4cd73a06887d2e",
"0x3a6e6c0fd3dc2c9b99e974f79c92fc758613f123a85407c354a881cab8c214dc",
"0xae96fbe590123eabf79fe579d59badc00d6ae0674b2d85aa581560a8d07f57a8",
"0x77c5cc79b82ba1bccc4de490406b0a1c63253f99c726911ae5fd628f9fe2db6e",
"0x9bbddf33655c7ae30926327da99c4f98a84540f6959627751942061f2de9ac6c"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

