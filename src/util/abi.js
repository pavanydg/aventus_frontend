
let ABI = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "uniqueId",
                "type": "uint256"
            }
        ],
        "name": "BlogReported",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "hash",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "link",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "uniqueId",
                "type": "uint256"
            }
        ],
        "name": "DataStored",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "hash",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "link",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "uniqueId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "reports",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address[]",
                        "name": "reporters",
                        "type": "address[]"
                    }
                ],
                "indexed": false,
                "internalType": "struct Blog.Data[]",
                "name": "blogs",
                "type": "tuple[]"
            }
        ],
        "name": "returnAllBlogs",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "retrivalBlogs",
        "outputs": [
            {
                "internalType": "string",
                "name": "hash",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "link",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "blogOwner",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_hash",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_link",
                "type": "string"
            }
        ],
        "name": "uploadBlog",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function",
        "payable": true
    },
    {
        "inputs": [],
        "name": "viewAllBlogs",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "hash",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "link",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "blogOwner",
                        "type": "address"
                    }
                ],
                "internalType": "struct Blog.PublishingData[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "blogOwner",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "uniqueId",
                "type": "uint256"
            }
        ],
        "name": "reportBlog",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function",
        "payable": true
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "blogOwner",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "uniqueId",
                "type": "uint256"
            }
        ],
        "name": "removeReport",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "uniqueId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_hash",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_link",
                "type": "string"
            }
        ],
        "name": "updateBlog",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function",
        "payable": true
    }
]
export default ABI;