const chainMaker = {
  chain: [],
	chainError() {
		this.chain = [];
		throw new Error();
	},
  getLength() {
    return this.chain.length;
    // remove line with error and write your code here
  },
  addLink(value) {
    this.chain.push(value);
		return this;
    // remove line with error and write your code here
  },
  removeLink(position) {
    if (typeof (position) === 'number') {
			position = position - 1;
			if (position < 0 || position >= this.getLength()) {
				this.chainError();
			}

			this.chain.splice(position, 1);
			return this;

		} else {
			this.chainError();
		}
  },
  reverseChain() {
    this.chain.reverse();
		return this;
  },
  finishChain() {
    let chain = '';

		for (let i = 0; i < this.getLength(); i++) {
			chain += `( ${this.chain[i]} )`;
			i < this.getLength() - 1 ? chain += '~~' : '';
		}

		this.chain = [];
		return chain;
  }
};

module.exports = chainMaker;
