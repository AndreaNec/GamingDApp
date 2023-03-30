//const { format } = require("morgan");


//let myAddress = "";
let web3 = {};
let myContract = {}
let myAddress = ""




async function connectMetamask() {
    const {ethereum} = window;
    //console.log(Boolean(ethereum && ethereum.isMetaMask));
    // console.log(window.ethereum);
    web3 = new Web3(ethereum);
    // web3.eth.getAccounts(function (err, response) {
    //     console.log("account via web3js api");
    //     console.log(response);
    //     myAddress = response[0];
    // })

	await web3.eth.getAccounts().then(function(response){
		myAddress = response[0];
		console.log(response)
	})

    const accounts = await ethereum.request({method: 'eth_accounts'});
    console.log("account via metamask api");
    console.log(accounts[0]);
    myAddress = accounts[0];

	/*let abi = [
		{
			"inputs": [],
			"name": "duel",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "mine",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_index",
					"type": "uint256"
				}
			],
			"name": "selectArmor",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_index",
					"type": "uint256"
				}
			],
			"name": "selectPickacxe",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_index",
					"type": "uint256"
				}
			],
			"name": "selectSword",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_world",
					"type": "string"
				}
			],
			"name": "selectWorld",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_index",
					"type": "uint256"
				}
			],
			"name": "Sell",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "sendToContract",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_name",
					"type": "string"
				}
			],
			"name": "setLogin",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "toolToBuy",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "_index",
					"type": "uint256"
				}
			],
			"name": "ShopMint",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_world",
					"type": "string"
				}
			],
			"name": "ShopMondo",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [],
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"stateMutability": "payable",
			"type": "receive"
		},
		{
			"inputs": [],
			"name": "getContractBalance",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_tool",
					"type": "string"
				}
			],
			"name": "getCost",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getInventorys",
			"outputs": [
				{
					"components": [
						{
							"internalType": "string",
							"name": "name",
							"type": "string"
						},
						{
							"internalType": "uint256",
							"name": "moneyMining",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "durability",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "damage",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "defense",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "boostarmor",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "cost",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "reSell",
							"type": "uint256"
						},
						{
							"internalType": "enum MineCoin.Rarity",
							"name": "rarity",
							"type": "uint8"
						},
						{
							"internalType": "enum MineCoin.Tipo",
							"name": "tipo",
							"type": "uint8"
						}
					],
					"internalType": "struct MineCoin.Tool[10]",
					"name": "",
					"type": "tuple[10]"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getKeysShop",
			"outputs": [
				{
					"internalType": "string[]",
					"name": "",
					"type": "string[]"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getKeysShopWorlds",
			"outputs": [
				{
					"internalType": "string[]",
					"name": "",
					"type": "string[]"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getStats",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getSteve",
			"outputs": [
				{
					"components": [
						{
							"internalType": "string",
							"name": "name",
							"type": "string"
						},
						{
							"internalType": "address payable",
							"name": "me",
							"type": "address"
						},
						{
							"components": [
								{
									"internalType": "string",
									"name": "name",
									"type": "string"
								},
								{
									"internalType": "uint256",
									"name": "moneyMining",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "durability",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "damage",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "defense",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "boostarmor",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "cost",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "reSell",
									"type": "uint256"
								},
								{
									"internalType": "enum MineCoin.Rarity",
									"name": "rarity",
									"type": "uint8"
								},
								{
									"internalType": "enum MineCoin.Tipo",
									"name": "tipo",
									"type": "uint8"
								}
							],
							"internalType": "struct MineCoin.Tool[10]",
							"name": "inventory",
							"type": "tuple[10]"
						},
						{
							"internalType": "uint256",
							"name": "health",
							"type": "uint256"
						},
						{
							"components": [
								{
									"internalType": "string",
									"name": "name",
									"type": "string"
								},
								{
									"internalType": "uint256",
									"name": "moneyMining",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "durability",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "damage",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "defense",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "boostarmor",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "cost",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "reSell",
									"type": "uint256"
								},
								{
									"internalType": "enum MineCoin.Rarity",
									"name": "rarity",
									"type": "uint8"
								},
								{
									"internalType": "enum MineCoin.Tipo",
									"name": "tipo",
									"type": "uint8"
								}
							],
							"internalType": "struct MineCoin.Tool",
							"name": "sword",
							"type": "tuple"
						},
						{
							"components": [
								{
									"internalType": "string",
									"name": "name",
									"type": "string"
								},
								{
									"internalType": "uint256",
									"name": "moneyMining",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "durability",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "damage",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "defense",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "boostarmor",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "cost",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "reSell",
									"type": "uint256"
								},
								{
									"internalType": "enum MineCoin.Rarity",
									"name": "rarity",
									"type": "uint8"
								},
								{
									"internalType": "enum MineCoin.Tipo",
									"name": "tipo",
									"type": "uint8"
								}
							],
							"internalType": "struct MineCoin.Tool",
							"name": "armor",
							"type": "tuple"
						},
						{
							"components": [
								{
									"internalType": "string",
									"name": "name",
									"type": "string"
								},
								{
									"internalType": "uint256",
									"name": "moneyMining",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "durability",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "damage",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "defense",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "boostarmor",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "cost",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "reSell",
									"type": "uint256"
								},
								{
									"internalType": "enum MineCoin.Rarity",
									"name": "rarity",
									"type": "uint8"
								},
								{
									"internalType": "enum MineCoin.Tipo",
									"name": "tipo",
									"type": "uint8"
								}
							],
							"internalType": "struct MineCoin.Tool",
							"name": "pickacxe",
							"type": "tuple"
						},
						{
							"components": [
								{
									"internalType": "string",
									"name": "name",
									"type": "string"
								},
								{
									"internalType": "uint256",
									"name": "blockValue",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "cost",
									"type": "uint256"
								},
								{
									"internalType": "enum MineCoin.Availability",
									"name": "availability",
									"type": "uint8"
								}
							],
							"internalType": "struct MineCoin.Worlds",
							"name": "world",
							"type": "tuple"
						}
					],
					"internalType": "struct MineCoin.Character",
					"name": "",
					"type": "tuple"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_toolStats",
					"type": "string"
				}
			],
			"name": "getToolStats",
			"outputs": [
				{
					"components": [
						{
							"internalType": "string",
							"name": "name",
							"type": "string"
						},
						{
							"internalType": "uint256",
							"name": "moneyMining",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "durability",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "damage",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "defense",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "boostarmor",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "cost",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "reSell",
							"type": "uint256"
						},
						{
							"internalType": "enum MineCoin.Rarity",
							"name": "rarity",
							"type": "uint8"
						},
						{
							"internalType": "enum MineCoin.Tipo",
							"name": "tipo",
							"type": "uint8"
						}
					],
					"internalType": "struct MineCoin.Tool",
					"name": "",
					"type": "tuple"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "keysShop",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "keysWorlds",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "steve",
			"outputs": [
				{
					"internalType": "string",
					"name": "name",
					"type": "string"
				},
				{
					"internalType": "address payable",
					"name": "me",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "health",
					"type": "uint256"
				},
				{
					"components": [
						{
							"internalType": "string",
							"name": "name",
							"type": "string"
						},
						{
							"internalType": "uint256",
							"name": "moneyMining",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "durability",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "damage",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "defense",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "boostarmor",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "cost",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "reSell",
							"type": "uint256"
						},
						{
							"internalType": "enum MineCoin.Rarity",
							"name": "rarity",
							"type": "uint8"
						},
						{
							"internalType": "enum MineCoin.Tipo",
							"name": "tipo",
							"type": "uint8"
						}
					],
					"internalType": "struct MineCoin.Tool",
					"name": "sword",
					"type": "tuple"
				},
				{
					"components": [
						{
							"internalType": "string",
							"name": "name",
							"type": "string"
						},
						{
							"internalType": "uint256",
							"name": "moneyMining",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "durability",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "damage",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "defense",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "boostarmor",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "cost",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "reSell",
							"type": "uint256"
						},
						{
							"internalType": "enum MineCoin.Rarity",
							"name": "rarity",
							"type": "uint8"
						},
						{
							"internalType": "enum MineCoin.Tipo",
							"name": "tipo",
							"type": "uint8"
						}
					],
					"internalType": "struct MineCoin.Tool",
					"name": "armor",
					"type": "tuple"
				},
				{
					"components": [
						{
							"internalType": "string",
							"name": "name",
							"type": "string"
						},
						{
							"internalType": "uint256",
							"name": "moneyMining",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "durability",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "damage",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "defense",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "boostarmor",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "cost",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "reSell",
							"type": "uint256"
						},
						{
							"internalType": "enum MineCoin.Rarity",
							"name": "rarity",
							"type": "uint8"
						},
						{
							"internalType": "enum MineCoin.Tipo",
							"name": "tipo",
							"type": "uint8"
						}
					],
					"internalType": "struct MineCoin.Tool",
					"name": "pickacxe",
					"type": "tuple"
				},
				{
					"components": [
						{
							"internalType": "string",
							"name": "name",
							"type": "string"
						},
						{
							"internalType": "uint256",
							"name": "blockValue",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "cost",
							"type": "uint256"
						},
						{
							"internalType": "enum MineCoin.Availability",
							"name": "availability",
							"type": "uint8"
						}
					],
					"internalType": "struct MineCoin.Worlds",
					"name": "world",
					"type": "tuple"
				}
			],
			"stateMutability": "view",
			"type": "function"
		}
	]*/
	/*let contracAddress = "0xd9145CCE52D386f254917e481eB44e9943F39138";
    myContract = new web3.eth.Contract(abi, contracAddress);
    console.log(myContract);
	await myContract.methods.getKeysShop().call({
	}).then(function(response){
		console.log(response)
	})*/
}

async function loadContract(){
	let abi = [
		{
			"inputs": [],
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_index",
					"type": "uint256"
				}
			],
			"name": "Sell",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "toolToBuy",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "_index",
					"type": "uint256"
				}
			],
			"name": "ShopMint",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_world",
					"type": "string"
				}
			],
			"name": "ShopMondo",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "duel",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getContractBalance",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getInventorys",
			"outputs": [
				{
					"components": [
						{
							"internalType": "string",
							"name": "name",
							"type": "string"
						},
						{
							"internalType": "uint256",
							"name": "moneyMining",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "durability",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "damage",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "defense",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "boostarmor",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "cost",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "reSell",
							"type": "uint256"
						},
						{
							"internalType": "enum MineCoin.Rarity",
							"name": "rarity",
							"type": "uint8"
						},
						{
							"internalType": "enum MineCoin.Tipo",
							"name": "tipo",
							"type": "uint8"
						}
					],
					"internalType": "struct MineCoin.Tool[10]",
					"name": "",
					"type": "tuple[10]"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getKeysShop",
			"outputs": [
				{
					"internalType": "string[]",
					"name": "",
					"type": "string[]"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getKeysShopWorlds",
			"outputs": [
				{
					"internalType": "string[]",
					"name": "",
					"type": "string[]"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getStats",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getSteve",
			"outputs": [
				{
					"components": [
						{
							"internalType": "string",
							"name": "name",
							"type": "string"
						},
						{
							"internalType": "address payable",
							"name": "me",
							"type": "address"
						},
						{
							"components": [
								{
									"internalType": "string",
									"name": "name",
									"type": "string"
								},
								{
									"internalType": "uint256",
									"name": "moneyMining",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "durability",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "damage",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "defense",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "boostarmor",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "cost",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "reSell",
									"type": "uint256"
								},
								{
									"internalType": "enum MineCoin.Rarity",
									"name": "rarity",
									"type": "uint8"
								},
								{
									"internalType": "enum MineCoin.Tipo",
									"name": "tipo",
									"type": "uint8"
								}
							],
							"internalType": "struct MineCoin.Tool[10]",
							"name": "inventory",
							"type": "tuple[10]"
						},
						{
							"internalType": "uint256",
							"name": "health",
							"type": "uint256"
						},
						{
							"components": [
								{
									"internalType": "string",
									"name": "name",
									"type": "string"
								},
								{
									"internalType": "uint256",
									"name": "moneyMining",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "durability",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "damage",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "defense",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "boostarmor",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "cost",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "reSell",
									"type": "uint256"
								},
								{
									"internalType": "enum MineCoin.Rarity",
									"name": "rarity",
									"type": "uint8"
								},
								{
									"internalType": "enum MineCoin.Tipo",
									"name": "tipo",
									"type": "uint8"
								}
							],
							"internalType": "struct MineCoin.Tool",
							"name": "sword",
							"type": "tuple"
						},
						{
							"components": [
								{
									"internalType": "string",
									"name": "name",
									"type": "string"
								},
								{
									"internalType": "uint256",
									"name": "moneyMining",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "durability",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "damage",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "defense",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "boostarmor",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "cost",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "reSell",
									"type": "uint256"
								},
								{
									"internalType": "enum MineCoin.Rarity",
									"name": "rarity",
									"type": "uint8"
								},
								{
									"internalType": "enum MineCoin.Tipo",
									"name": "tipo",
									"type": "uint8"
								}
							],
							"internalType": "struct MineCoin.Tool",
							"name": "armor",
							"type": "tuple"
						},
						{
							"components": [
								{
									"internalType": "string",
									"name": "name",
									"type": "string"
								},
								{
									"internalType": "uint256",
									"name": "moneyMining",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "durability",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "damage",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "defense",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "boostarmor",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "cost",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "reSell",
									"type": "uint256"
								},
								{
									"internalType": "enum MineCoin.Rarity",
									"name": "rarity",
									"type": "uint8"
								},
								{
									"internalType": "enum MineCoin.Tipo",
									"name": "tipo",
									"type": "uint8"
								}
							],
							"internalType": "struct MineCoin.Tool",
							"name": "pickacxe",
							"type": "tuple"
						},
						{
							"components": [
								{
									"internalType": "string",
									"name": "name",
									"type": "string"
								},
								{
									"internalType": "uint256",
									"name": "blockValue",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "cost",
									"type": "uint256"
								},
								{
									"internalType": "enum MineCoin.Availability",
									"name": "availability",
									"type": "uint8"
								}
							],
							"internalType": "struct MineCoin.Worlds",
							"name": "world",
							"type": "tuple"
						}
					],
					"internalType": "struct MineCoin.Character",
					"name": "",
					"type": "tuple"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_toolStats",
					"type": "string"
				}
			],
			"name": "getToolStats",
			"outputs": [
				{
					"components": [
						{
							"internalType": "string",
							"name": "name",
							"type": "string"
						},
						{
							"internalType": "uint256",
							"name": "moneyMining",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "durability",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "damage",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "defense",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "boostarmor",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "cost",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "reSell",
							"type": "uint256"
						},
						{
							"internalType": "enum MineCoin.Rarity",
							"name": "rarity",
							"type": "uint8"
						},
						{
							"internalType": "enum MineCoin.Tipo",
							"name": "tipo",
							"type": "uint8"
						}
					],
					"internalType": "struct MineCoin.Tool",
					"name": "",
					"type": "tuple"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "keysShop",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "keysWorlds",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "mine",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_index",
					"type": "uint256"
				}
			],
			"name": "selectArmor",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_index",
					"type": "uint256"
				}
			],
			"name": "selectPickacxe",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_index",
					"type": "uint256"
				}
			],
			"name": "selectSword",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_world",
					"type": "string"
				}
			],
			"name": "selectWorld",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "sendToContract",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_name",
					"type": "string"
				}
			],
			"name": "setLogin",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "steve",
			"outputs": [
				{
					"internalType": "string",
					"name": "name",
					"type": "string"
				},
				{
					"internalType": "address payable",
					"name": "me",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "health",
					"type": "uint256"
				},
				{
					"components": [
						{
							"internalType": "string",
							"name": "name",
							"type": "string"
						},
						{
							"internalType": "uint256",
							"name": "moneyMining",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "durability",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "damage",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "defense",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "boostarmor",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "cost",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "reSell",
							"type": "uint256"
						},
						{
							"internalType": "enum MineCoin.Rarity",
							"name": "rarity",
							"type": "uint8"
						},
						{
							"internalType": "enum MineCoin.Tipo",
							"name": "tipo",
							"type": "uint8"
						}
					],
					"internalType": "struct MineCoin.Tool",
					"name": "sword",
					"type": "tuple"
				},
				{
					"components": [
						{
							"internalType": "string",
							"name": "name",
							"type": "string"
						},
						{
							"internalType": "uint256",
							"name": "moneyMining",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "durability",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "damage",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "defense",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "boostarmor",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "cost",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "reSell",
							"type": "uint256"
						},
						{
							"internalType": "enum MineCoin.Rarity",
							"name": "rarity",
							"type": "uint8"
						},
						{
							"internalType": "enum MineCoin.Tipo",
							"name": "tipo",
							"type": "uint8"
						}
					],
					"internalType": "struct MineCoin.Tool",
					"name": "armor",
					"type": "tuple"
				},
				{
					"components": [
						{
							"internalType": "string",
							"name": "name",
							"type": "string"
						},
						{
							"internalType": "uint256",
							"name": "moneyMining",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "durability",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "damage",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "defense",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "boostarmor",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "cost",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "reSell",
							"type": "uint256"
						},
						{
							"internalType": "enum MineCoin.Rarity",
							"name": "rarity",
							"type": "uint8"
						},
						{
							"internalType": "enum MineCoin.Tipo",
							"name": "tipo",
							"type": "uint8"
						}
					],
					"internalType": "struct MineCoin.Tool",
					"name": "pickacxe",
					"type": "tuple"
				},
				{
					"components": [
						{
							"internalType": "string",
							"name": "name",
							"type": "string"
						},
						{
							"internalType": "uint256",
							"name": "blockValue",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "cost",
							"type": "uint256"
						},
						{
							"internalType": "enum MineCoin.Availability",
							"name": "availability",
							"type": "uint8"
						}
					],
					"internalType": "struct MineCoin.Worlds",
					"name": "world",
					"type": "tuple"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"stateMutability": "payable",
			"type": "receive"
		}
	];
	let contracAddress = "0x3cE326B0fCeb8bdeED1cAfe8451D2e501e1c530a";
    myContract = new web3.eth.Contract(abi, contracAddress);
    console.log(myContract);
	await myContract.methods.getKeysShop().call({
	}).then(function(response){
		console.log(response)
	})


}

async function login(){
	let _name = document.getElementById("nameLogin").value;
	await myContract.methods.setLogin(_name).send({
		from: myAddress
	}).then(function(receipt){
		console.log(_name)
	});

}

async function getCharacter(){
	await myContract.methods.steve().call({
		from: myAddress
	}).then(function(response){
		console.log(response)
	})
}

async function getKeysShop(){
	await myContract.methods.getKeysShop().call().then(function(response){
		console.log(response)
	})
}

async function showStats(){
	//le stats nello smart contract come anche il value del mine sono da rifare
	await myContract.methods.getStats().call().then(function(response){
		let stats = Object.values(response);
		console.log(stats)
		document.getElementById("gainXBlockValue").innerHTML = stats[0]
		document.getElementById("balanceValue").innerHTML = stats[1];
		document.getElementById("damageValue").innerHTML = stats[2];
		document.getElementById("defenseValue").innerHTML = stats[3];

	})
}

async function showInventory(){
	await myContract.methods.getInventorys().call().then(function(response){
		let inventory = response;
		console.log(inventory)
		document.getElementById("slotInv1").innerHTML = inventory[0].name
		document.getElementById("slotInv2").innerHTML = inventory[1].name;
		document.getElementById("slotInv3").innerHTML = inventory[2].name;
		document.getElementById("slotInv4").innerHTML = inventory[3].name;
		document.getElementById("slotInv5").innerHTML = inventory[4].name;
		document.getElementById("slotInv6").innerHTML = inventory[5].name;
		document.getElementById("slotInv7").innerHTML = inventory[6].name;
		document.getElementById("slotInv8").innerHTML = inventory[7].name;
		document.getElementById("slotInv9").innerHTML = inventory[8].name;
		document.getElementById("slotInv10").innerHTML = inventory[9].name;

	})
}



