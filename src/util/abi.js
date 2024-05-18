import e = require("express")

let ABI = [
    {
        anonymous: false,
        inputs: [[Object], [Object]],
        name: 'BlogReported',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [[Object], [Object], [Object], [Object]],
        name: 'DataStored',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [[Object]],
        name: 'returnAllBlogs',
        type: 'event'
    },
    {
        inputs: [[Object]],
        name: 'retrivalBlogs',
        outputs: [[Object], [Object], [Object]],
        stateMutability: 'view',
        type: 'function',
        constant: true
    },
    {
        inputs: [[Object], [Object]],
        name: 'uploadBlog',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
        payable: true
    },
    {
        inputs: [],
        name: 'viewAllBlogs',
        outputs: [[Object]],
        stateMutability: 'view',
        type: 'function',
        constant: true
    },
    {
        inputs: [[Object], [Object]],
        name: 'reportBlog',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
        payable: true
    },
    {
        inputs: [[Object], [Object]],
        name: 'removeReport',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [[Object], [Object], [Object]],
        name: 'updateBlog',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
        payable: true
    }
]

export default ABI;