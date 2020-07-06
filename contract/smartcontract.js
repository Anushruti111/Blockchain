var address="0x72c82E501a628A68A16ac0390a20eDf3C4570623";
var ABI=[
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_Dname",
                    "type": "string"
                },
                {
                    "name": "_Dmobile",
                    "type": "string"
                },
                {
                    "name": "_Daddress",
                    "type": "string"
                },
                {
                    "name": "_Demail",
                    "type": "string"
                },
                {
                    "name": "_Dpassword",
                    "type": "string"
                }
            ],
            "name": "registerDoner",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_Iname",
                    "type": "string"
                },
                {
                    "name": "_Iamount",
                    "type": "uint256"
                },
                {
                    "name": "_pickingaddress",
                    "type": "string"
                }
            ],
            "name": "registerItem",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_Nname",
                    "type": "string"
                },
                {
                    "name": "_Nmobile",
                    "type": "string"
                },
                {
                    "name": "_Naddress",
                    "type": "string"
                },
                {
                    "name": "_Nemail",
                    "type": "string"
                },
                {
                    "name": "_Npassword",
                    "type": "string"
                }
            ],
            "name": "registerNgo",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getDonerDetails",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                },
                {
                    "name": "",
                    "type": "string"
                },
                {
                    "name": "",
                    "type": "string"
                },
                {
                    "name": "",
                    "type": "string"
                },
                {
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getItemDetails",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                },
                {
                    "name": "",
                    "type": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256"
                },
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getNgoDetails",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                },
                {
                    "name": "",
                    "type": "string"
                },
                {
                    "name": "",
                    "type": "string"
                },
                {
                    "name": "",
                    "type": "string"
                },
                {
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_Demail",
                    "type": "string"
                },
                {
                    "name": "_Dpassword",
                    "type": "string"
                }
            ],
            "name": "vaildDoner",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ]