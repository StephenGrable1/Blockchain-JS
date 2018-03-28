const Blockchain = require('./blockchain.js');
const Block = require('./block.js');

let stephenCoin = new Blockchain();

stephenCoin.addNewBlock(new Block(1, '01/09/2018', 'Sent $3,000,000 to Paul'))
stephenCoin.addNewBlock(new Block(2, '01/10/2018', 'Sent 1 apple to Shane'))


//this is our entire blockchain
console.log(stephenCoin)

//Lets check if our blockchain is valid
console.log('Is the blockchain valid? ', stephenCoin.isChainValid());

//Wait.... I didn't want to send Paul 3 million bucks!!!!!
stephenCoin.chain[1].data = 'Sent Paul 1 doughnut';

//This is the block after the mutation
console.log("After mutation: ", stephenCoin);

//Now lets check if our block is valid
console.log('Is the blockchain still valid after mutation? ', stephenCoin.isChainValid());


