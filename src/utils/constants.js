
const TakToken = require("../contracts/TakToken.json");
const NFTStaking = require("../contracts/NFTStaking.json");
const NFTMint = require("../contracts/NFTMint.json");
const TakTokenStaking = require("../contracts/TakTokenStaking.json");

export const CONTRACTS_TYPE = {
  TAKTOKEN: "TAKTOKEN",
  NFTSTAKING: "NFTSTAKING",
  NFTMINT: "NFTMINT",
  TAKTOKENSTAKE: "TAKTOKENSTAKE"
};

export const CONTRACTS = {

  [CONTRACTS_TYPE.TAKTOKEN]: {
    1: { address: '0xFDd7Ebc453535eD80E86F543ae6B9BA302eD0446', abi: TakToken},
    4: { address: "0xFDd7Ebc453535eD80E86F543ae6B9BA302eD0446", abi: TakToken},
    56: { address: '', abi: '' },
    97: { address: '0xFDd7Ebc453535eD80E86F543ae6B9BA302eD0446', abi: TakToken},
  },
  [CONTRACTS_TYPE.NFTSTAKING]: {
    1: { address: '0x2D9A3804Bf88666B67424D301F0C5c815dc5438f', abi: NFTStaking},
    4: { address: "0x2D9A3804Bf88666B67424D301F0C5c815dc5438f", abi: NFTStaking},
    56: { address: '0x2D9A3804Bf88666B67424D301F0C5c815dc5438f', abi: '' },
    97: { address: '0x2D9A3804Bf88666B67424D301F0C5c815dc5438f', abi: NFTStaking},
  },
  [CONTRACTS_TYPE.NFTMINT]: {
    1: { address: '0xdfdb171071ee8edd99e1435ce42308c5dc639d95', abi: NFTMint},
    4: { address: "0xdfdb171071ee8edd99e1435ce42308c5dc639d95", abi: NFTMint},
    56: { address: '0xdfdb171071ee8edd99e1435ce42308c5dc639d95', abi: '' },
    97: { address: '0xdfdb171071ee8edd99e1435ce42308c5dc639d95', abi: NFTMint},
  },
  [CONTRACTS_TYPE.TAKTOKENSTAKE]: {
    1: { address: '0xc60e678f3A0cDFDc70cfF8A90Ff6A836D74Ff5a9', abi: TakTokenStaking},
    4: { address: "0xc60e678f3A0cDFDc70cfF8A90Ff6A836D74Ff5a9", abi: TakTokenStaking},
    56: { address: '0xc60e678f3A0cDFDc70cfF8A90Ff6A836D74Ff5a9', abi: '' },
    97: { address: '0xc60e678f3A0cDFDc70cfF8A90Ff6A836D74Ff5a9', abi: TakTokenStaking},
  },

  
  // [CONTRACTS_TYPE.TAKTOKEN]: {
  //   1: { address: '0x4ae947b44AD412C16b381Bf78e809df7E48924eb', abi: TakToken},
  //   4: { address: "0x4ae947b44AD412C16b381Bf78e809df7E48924eb", abi: TakToken},
  //   56: { address: '', abi: '' },
  //   97: { address: '0x4ae947b44AD412C16b381Bf78e809df7E48924eb', abi: TakToken},
  // },
  // [CONTRACTS_TYPE.NFTSTAKING]: {
  //   1: { address: '0x2D9A3804Bf88666B67424D301F0C5c815dc5438f', abi: NFTStaking},
  //   4: { address: "0x2D9A3804Bf88666B67424D301F0C5c815dc5438f", abi: NFTStaking},
  //   56: { address: '0x2D9A3804Bf88666B67424D301F0C5c815dc5438f', abi: '' },
  //   97: { address: '0x2D9A3804Bf88666B67424D301F0C5c815dc5438f', abi: NFTStaking},
  // },
  // [CONTRACTS_TYPE.NFTMINT]: {
  //   1: { address: '0xdfdb171071ee8edd99e1435ce42308c5dc639d95', abi: NFTMint},
  //   4: { address: "0xdfdb171071ee8edd99e1435ce42308c5dc639d95", abi: NFTMint},
  //   56: { address: '0xdfdb171071ee8edd99e1435ce42308c5dc639d95', abi: '' },
  //   97: { address: '0xdfdb171071ee8edd99e1435ce42308c5dc639d95', abi: NFTMint},
  // },
  // [CONTRACTS_TYPE.TAKTOKENSTAKE]: {
  //   1: { address: '0xd25994ef380086BEEFA892584f5817e8a9601e3F', abi: TakTokenStaking},
  //   4: { address: "0xd25994ef380086BEEFA892584f5817e8a9601e3F", abi: TakTokenStaking},
  //   56: { address: '0xd25994ef380086BEEFA892584f5817e8a9601e3F', abi: '' },
  //   97: { address: '0xd25994ef380086BEEFA892584f5817e8a9601e3F', abi: TakTokenStaking},
  // },


};

