const Block = require('./block.js')

class Blockchain{
    constructor(){
        this.chain = [this.createFirstBlock()];
    }

    createFirstBlock() {
        return new Block(0, '01/01/2018', 'Our First Block', '0');
    }

    //We need this to store in our new block to
    //create the 'chain' 
    theLastAddedBlock() {
        return this.chain[this.chain.length - 1];
    }

    addNewBlock(newBlock){
        newBlock.previousHash = this.theLastAddedBlock().hash;
        newBlock.hash = newBlock.createHash();
        this.chain.push(newBlock);
    }

    isChainValid(){
        for (let i = 1; i < this.chain.length; i+=1){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash !== currentBlock.createHash()){
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.hash){
                return false;
            }
            return true;
        }
    }
}

module.exports = Blockchain;