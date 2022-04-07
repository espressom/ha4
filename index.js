const log = console.log;
const express = require("express");
const app = express();
const port = 8080;
const CaverExtKAS = require("caver-js-ext-kas");
const bytecode = require("./bytecode.json");

const caver = new CaverExtKAS(
  "1001",
  "KASK3JUM5E17RA9FDB005RKV",
  "f54yHrrfQoBVQARy7bBgQmXZrTQrorbboyeOUBF2",
  {
    useNodeAPIWithHttp: false,
  }
);

async function getAccounts() {
  try {
    const accounts = await caver.rpc.klay.getAccount(
      "0x13CCE5177618Fe45dfcd4A1a414d3112282f9139"
    );
    log(accounts);
    return accounts;
  } catch (e) {
    error(e);
    return e;
  }
}

async function getGasPrice() {
  try {
    const gasPrice = await caver.rpc.klay.getGasPrice();
    log(parseInt(gasPrice, 16));
    return parseInt(gasPrice, 16).toString();
  } catch (e) {
    error(e);
    return e;
  }
}

async function getBlock() {
  try {
    const getBlock = await caver.rpc.klay.getBlock(1);
    console.log(getBlock);
    return getBlock;
  } catch (e) {
    console.log(e);
    return e;
  }
}

async function helloWorld() {
  try {
    const jsonInterface = [
      {
        inputs: [],
        name: "renderHelloWorld",
        outputs: [
          {
            internalType: "string",
            name: "greeting",
            type: "string",
          },
        ],
        stateMutability: "pure",
        type: "function",
      },
    ];
    const address = "0x20caa5A23dd62C822f9BF971f6AC454bd8e4a746"; // 스마트 컨트랙트 주소
    const contract = new caver.contract(jsonInterface, address);
    const result = await contract.call("renderHelloWorld");
    console.log(result);
    return result;
  } catch (e) {
    console.log(e);
    return e;
  }
}

async function deployToken() {
  try {
    const jsonInterface = [
      {
        constant: true,
        inputs: [
          {
            name: "interfaceId",
            type: "bytes4",
          },
        ],
        name: "supportsInterface",
        outputs: [
          {
            name: "",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "name",
        outputs: [
          {
            name: "",
            type: "string",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            name: "tokenId",
            type: "uint256",
          },
        ],
        name: "getApproved",
        outputs: [
          {
            name: "",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            name: "to",
            type: "address",
          },
          {
            name: "tokenId",
            type: "uint256",
          },
        ],
        name: "approve",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [
          {
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            name: "from",
            type: "address",
          },
          {
            name: "to",
            type: "address",
          },
          {
            name: "tokenId",
            type: "uint256",
          },
        ],
        name: "transferFrom",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            name: "owner",
            type: "address",
          },
          {
            name: "index",
            type: "uint256",
          },
        ],
        name: "tokenOfOwnerByIndex",
        outputs: [
          {
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            name: "from",
            type: "address",
          },
          {
            name: "to",
            type: "address",
          },
          {
            name: "tokenId",
            type: "uint256",
          },
        ],
        name: "safeTransferFrom",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            name: "index",
            type: "uint256",
          },
        ],
        name: "tokenByIndex",
        outputs: [
          {
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            name: "tokenId",
            type: "uint256",
          },
        ],
        name: "ownerOf",
        outputs: [
          {
            name: "",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            name: "owner",
            type: "address",
          },
        ],
        name: "balanceOf",
        outputs: [
          {
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "owner",
        outputs: [
          {
            name: "",
            type: "address",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "isOwner",
        outputs: [
          {
            name: "",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "symbol",
        outputs: [
          {
            name: "",
            type: "string",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            name: "to",
            type: "address",
          },
          {
            name: "approved",
            type: "bool",
          },
        ],
        name: "setApprovalForAll",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            name: "from",
            type: "address",
          },
          {
            name: "to",
            type: "address",
          },
          {
            name: "tokenId",
            type: "uint256",
          },
          {
            name: "_data",
            type: "bytes",
          },
        ],
        name: "safeTransferFrom",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            name: "tokenId",
            type: "uint256",
          },
        ],
        name: "tokenURI",
        outputs: [
          {
            name: "",
            type: "string",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            name: "owner",
            type: "address",
          },
          {
            name: "operator",
            type: "address",
          },
        ],
        name: "isApprovedForAll",
        outputs: [
          {
            name: "",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            name: "newOwner",
            type: "address",
          },
        ],
        name: "transferOwnership",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            name: "tokenURI",
            type: "string",
          },
        ],
        name: "mintNFT",
        outputs: [
          {
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            name: "previousOwner",
            type: "address",
          },
          {
            indexed: true,
            name: "newOwner",
            type: "address",
          },
        ],
        name: "OwnershipTransferred",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            name: "from",
            type: "address",
          },
          {
            indexed: true,
            name: "to",
            type: "address",
          },
          {
            indexed: true,
            name: "tokenId",
            type: "uint256",
          },
        ],
        name: "Transfer",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            name: "owner",
            type: "address",
          },
          {
            indexed: true,
            name: "approved",
            type: "address",
          },
          {
            indexed: true,
            name: "tokenId",
            type: "uint256",
          },
        ],
        name: "Approval",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            name: "owner",
            type: "address",
          },
          {
            indexed: true,
            name: "operator",
            type: "address",
          },
          {
            indexed: false,
            name: "approved",
            type: "bool",
          },
        ],
        name: "ApprovalForAll",
        type: "event",
      },
    ];

    const contract = new caver.contract(jsonInterface);
    const byteCode = bytecode.object;
    const receipt = await contract.deploy(
      {
        from: "0xdFfa882bB09D9FD34B92a5B0B2739d0E8e160207",
        gas: 30,
      },
      `0x${byteCode}`
    );

    log(receipt);
    return receipt;
  } catch (e) {
    console.log(e);
    return e;
  }
}

app.get("/", (req, res) => {
  res.send("Hello Node.js!");
});

app.get("/deploy", (req, res) => {
  deployToken().then((result) => {
    res.send(result);
  });
});

app.get("/helloworld", (req, res) => {
  helloWorld().then((result) => {
    res.send(result);
  });
});

app.get("/getblock", (req, res) => {
  getBlock().then((getBlock) => {
    res.send(getBlock);
  });
});

app.get("/accounts", (req, res) => {
  getAccounts().then((accounts) => {
    res.send(accounts);
  });
});

app.get("/gasprice", (req, res) => {
  getGasPrice().then((gasPrice) => {
    res.send(gasPrice);
  });
});

app.listen(port, () => {
  console.log("Listening...");
});
