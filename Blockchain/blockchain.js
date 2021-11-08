class Block {
    constructor(previousHash, data) {
        this.previousHash = previousHash;
        this.data = data;
        this.hash = SHA256(JSON.stringify(this));
    }
}

class Blockchain {
    constructor() {
        // The blockchain stored in an array
        let chain = [];

        // Add a block to the chain
        this.add = function (data) {
            let previousHash = chain[chain.length - 1].hash;
            let block = new Block(previousHash, data);
            chain.push(block);
        };

        // Print the blockchain to the console
        this.print = function () {
            console.log(JSON.stringify(chain, null, 2));
        };

        chain.push(new Block('0', 'Genesis Block'));
    }
}
  