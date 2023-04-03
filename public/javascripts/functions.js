//const { format } = require("morgan");


//let myAddress = "";
let web3 = {};
let myContract = {}
let myAddress = ""

let mineCounter = 0;
let inventory;
let worlds;






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
	/*let contracAddress = "0xd9145CCE52D386f254917e481eB44e9943F39138";
    myContract = new web3.eth.Contract(abi, contracAddress);
    console.log(myContract);
	await myContract.methods.getKeysShop().call({
	}).then(function(response){
		console.log(response)
	})*/
	await loadContract();
	await checkWorld();
	alert(
		"TUTORIAL: \nIl pianeta serve a selezionare il mondo\n le info servono per prendere le stats degli oggetti\n la moneta per le stats\n premi il blocco per minare\n il cartello per i duelli\n    nei duelli bisogna inserire la quantità che si vuole scommettere\n la struttura in basso a destra per lo shop"
		)


}

async function connectMetamaskDuel() {
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
	/*let contracAddress = "0xd9145CCE52D386f254917e481eB44e9943F39138";
    myContract = new web3.eth.Contract(abi, contracAddress);
    console.log(myContract);
	await myContract.methods.getKeysShop().call({
	}).then(function(response){
		console.log(response)
	})*/
	await loadContract();
	alert(
		"TUTORIAL:\n Inserisci nello spazio la quantità di soldi che si vogliono scommettere.\n se si vince si guadagna il doppio se si perde perdi tutto"
		)


}

async function loadContract(){
	
	let abi = [
		{
			"inputs": [],
			"name": "duel",
			"outputs": [],
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
				},
				{
					"internalType": "enum MineCoin.Outcome",
					"name": "lastOutcome",
					"type": "uint8"
				}
			],
			"stateMutability": "view",
			"type": "function"
		}
	]
	let contractAddress = "0x2d46E7ebF1328e5F63b06BA2d63E27d3b3f540d4"
    myContract = new web3.eth.Contract(abi, contractAddress, web3.eth.handleRevert = true);
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
	let _steve;
	await myContract.methods.steve().call({
		from: myAddress
	}).then(function(response){
		_steve = response
		console.log("get carcater " + response)
	})
	return _steve
}

async function getKeysShop(){
	await myContract.methods.getKeysShop().call().then(function(response){
		let Keys = response
		document.getElementById("keysText").innerHTML = Keys
	})
}

//Mostra I mondi e se sono lockati

//non mostra se sono lockati pk ho solo accesso ai nomi, va fatto nel contratto o un get infoWorld eventualmente. Altrimenti posso provare con js
async function getWorlds(){
	await myContract.methods.getKeysShopWorlds().call({
		from: myAddress
	}).then(function(response){
		worlds = response
		console.log(worlds)
		document.getElementById("nameTerra").innerHTML = worlds[0]
		document.getElementById("nameLuna").innerHTML = worlds[1]
		document.getElementById("nameMars").innerHTML = worlds[2]
		document.getElementById("nameNeptune").innerHTML = worlds[2]
		document.getElementById("nameHell").innerHTML = worlds[4]
		document.getElementById("nameCrypto").innerHTML = worlds[5]

	})
}

async function checkWorld(){
	// bisogna chiedere se il return funziona oppure no
	let steveWorld = await getCharacter()
	steveWorld = Object.values(steveWorld.world)
	steveWorld = steveWorld[0]
	console.log(steveWorld)

	if(steveWorld == "Terra"){
		document.getElementById("currentWorldId").style.backgroundImage = "url('/images/worlds/forest.gif')"
		document.getElementById("blockId").src = "/images/blocks/block.png"
	}
	if(steveWorld == "Luna"){
		document.getElementById("currentWorldId").style.backgroundImage = "url('/images/worlds/Moon.png')"
		document.getElementById("blockId").src = "/images/blocks/moonBlock.png"
	}
	if(steveWorld == "Mars"){
		document.getElementById("currentWorldId").style.backgroundImage = "url('/images/worlds/Mars.png')"
	}
	if(steveWorld == "Neptune"){
		document.getElementById("currentWorldId").style.backgroundImage = "url('/images/worlds/Neptune.png')"
	}
	if(steveWorld == "Hell"){
		document.getElementById("currentWorldId").style.backgroundImage = "url('/images/worlds/Hell.png')"
	}
	if(steveWorld == "Crypto"){
		document.getElementById("currentWorldId").style.backgroundImage = "url('/images/Crypto.png')"
	}
}

//seleziona il mondo
//aggiungere che il mondo selezionato aumenta di opacità
async function selectWorld(_worldIndex){
	//nel contratto bisgona fare con non puoi riselezionare il mondo che già hai
	let selectedWorld = worlds[_worldIndex]
	await myContract.methods.selectWorld(worlds[_worldIndex]).send({
		from: myAddress
	}).then(function(response){
		checkWorld()
		console.log("hai cambiato mondo")
	})

	
}

async function buyWorld(_index){
	let _value = document.getElementById("valoreInputMondo").value
	await myContract.methods.ShopMondo(worlds[_index]).send({
		from: myAddress,
		value: web3.utils.toWei(_value,'ether')
	}).then(function(response){
		console.log("ci sei riuscito")
	})
}

async function showStats(){
	//le stats nello smart contract come anche il value del mine sono da rifare
	await myContract.methods.getStats().call().then(function(response){
		let stats = Object.values(response);
		let balance = web3.utils.fromWei(stats[1], "ether")
		console.log(stats)
		document.getElementById("gainXBlockValue").innerHTML = stats[0]
		document.getElementById("balanceValue").innerHTML = balance + " ETH";
		document.getElementById("damageValue").innerHTML = stats[2];
		document.getElementById("defenseValue").innerHTML = stats[3];
		

	})
}

async function showInventory(){
	await myContract.methods.getInventorys().call().then(function(response){
		let _inventory = response;
		inventory = _inventory

		console.log(inventory)
		document.getElementById("slotInv1").innerHTML = _inventory[0].name
		document.getElementById("slotInv2").innerHTML = _inventory[1].name;
		document.getElementById("slotInv3").innerHTML = _inventory[2].name;
		document.getElementById("slotInv4").innerHTML = _inventory[3].name;
		document.getElementById("slotInv5").innerHTML = _inventory[4].name;
		document.getElementById("slotInv6").innerHTML = _inventory[5].name;
		document.getElementById("slotInv7").innerHTML = _inventory[6].name;
		document.getElementById("slotInv8").innerHTML = _inventory[7].name;
		document.getElementById("slotInv9").innerHTML = _inventory[8].name;
		document.getElementById("slotInv10").innerHTML = _inventory[9].name;

	})
	await myContract.methods.steve().call({
		from: myAddress
	}).then(function(response){
		let _steveInfo = response
		console.log("info steve " + response.pickacxe.name)
		document.getElementById("selectedPickacxe").innerHTML = _steveInfo.pickacxe.name
		document.getElementById("selectedSword").innerHTML = _steveInfo.sword.name
		document.getElementById("selectedArmor").innerHTML = _steveInfo.armor.name
		
		
	})
}

async function TypeControlInventory(_index){
	//far si che se è empty di selectarlo non sono sicuro si possa fare, cmq non è importante
	console.log("tipo " + inventory[_index].tipo)
	if(inventory[_index].tipo == 0){
		console.log(inventory[_index].name)
		await selectSword(_index)

		//return "nothing"
	}
	if(inventory[_index].tipo == 1){
		console.log(inventory[_index].name)
		await selectPickacxe(_index)

		//return "pickacxe"
	}
	if(inventory[_index].tipo == 2){
		console.log(inventory[_index].name)
		await selectArmor(_index)
		//return "armor"
	}
	if(inventory[_index].tipo == 3){

		//return "nothing"
	}
}

async function selectPickacxe(_tool){
	await myContract.methods.selectPickacxe(_tool).send({
		from: myAddress
	}).then(function(response){
		console.log("you have swapped pickacxe")
	})
}
async function selectSword(_tool){
	await myContract.methods.selectSword(_tool).send({
		from: myAddress
	}).then(function(response){
		console.log("you have swapped sword")
	})
}

async function selectArmor(_tool){
	await myContract.methods.selectArmor(_tool).send({
		from: myAddress
	}).then(function(response){
		console.log("you have swapped armor")
	})
}


function getRarity(_value){
	if(_value == 0){
		return "nothing"
	}
	if(_value == 1){
		return "common"
	}
	if(_value == 2){
		return "rare"
	}
	if(_value == 3){
		return "epic"
	}
	if(_value == 4){
		return "legendary"
	}
	if(_value == 5){
		return "exotic"
	}
}

function getTipoName(_value){
	if(_value == 0){
		return "sword"
	}
	if(_value == 1){
		return "pickacxe"
	}
	if(_value == 2){
		return "armor"
	}
	if(_value == 3){
		return "nothing"
	}
}

async function getInfoToll(){
	let _tool = document.getElementById("infoToolInput").value
	await myContract.methods.getToolStats(_tool).call({
		from:myAddress
	}).then(function(response){
		let _infoTool = Object.values(response);
		let cost = web3.utils.fromWei(_infoTool[6],'ether');
		let reSell = web3.utils.fromWei(_infoTool[7],'ether');
		let rarity = getRarity(_infoTool[8]);
		let tipo = getTipoName(_infoTool[9]);
		console.log(_infoTool);

		document.getElementById("showInfoName").innerHTML = _infoTool[0]
		document.getElementById("showInfoMoneyMining").innerHTML = _infoTool[1]
		document.getElementById("showInfoDurability").innerHTML = _infoTool[2]
		document.getElementById("showInfoDamage").innerHTML = _infoTool[3]
		document.getElementById("showInfoDefense").innerHTML = _infoTool[4]
		document.getElementById("showInfoBoostarmor").innerHTML = _infoTool[5]
		document.getElementById("showInfoCost").innerHTML = cost
		document.getElementById("showInfoReSell").innerHTML = reSell
		document.getElementById("showInfoRarity").innerHTML = rarity
		document.getElementById("showInfoTipo").innerHTML = tipo
	})
}

async function buyShop(){
	let _tooToBuy = document.getElementById("buyItem").value;
	let _value = document.getElementById("valueItem").value;
	let _index = document.getElementById("indexItemShop").value;
	await myContract.methods.ShopMint(_tooToBuy, _index).send({
		from: myAddress,
		value: web3.utils.toWei(_value,'ether')
	}).then(function(response){
		console.log("ci sei riuscito")
		
	})
}

async function sell(){
	let _index = document.getElementById("sellItem").value
	await myContract.methods.Sell(_index).send({
		from: myAddress,
	}).then(function(response){
		console.log("bo")
	})
}

async function mine(){
	counter = 0;

	document.getElementById("img-Carachter").style.width = "50em"
	document.getElementById("img-Carachter").src = "./images/robert-russell-attack-large.gif"

	var delayInMilliseconds = 800; //0.8 second

	setTimeout(function() {
		document.getElementById("img-Carachter").style.width = "22em"
		document.getElementById("img-Carachter").src = "./images/robert-russell-idle-large.gif"
	}, delayInMilliseconds);

	mineCounter++
	console.log("counter is " + mineCounter)
	if(mineCounter == 5){
		mineCounter = 0;
		await mineContract()

		
	}
}

async function mineContract() {
	await myContract.methods.mine().send({
		from: myAddress
	}).then(function(response){
		let value = response
		console.log("the value is " + value)
	})
}

async function duel(){
	//bisogna mettere un require spada per il duello nel contratto
	let _value = document.getElementById("betValue").value;
	await myContract.methods.duel().send({
		from: myAddress,
		value: web3.utils.toWei(_value,'ether')
	}).then(async function(response){
		let outcome = await getCharacter()
		outcome = outcome.lastOutcome
		console.log(outcome)
		if(outcome == 0){
			console.log("win")
			document.getElementById("outcomeText").innerHTML = "win"
		}
		if(outcome == 1){
			console.log("lose")
			document.getElementById("outcomeText").innerHTML = "lose"
		}
		if(outcome == 2){
			console.log("tie")
			document.getElementById("outcomeText").innerHTML = "lose"
		}
	})
}