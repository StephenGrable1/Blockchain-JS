const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(index, timestamp, data, previousHash = ''){
        this.index = index;
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.data = data;
        this.hash = this.createHash();
    }

    createHash(){
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
}



module.exports = Block;






// const newBlock = new Block(0, '01/01/2018', 'First Block', '0');
// console.log("Created a new block: ", newBlock);