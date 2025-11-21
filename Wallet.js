class Wallet{
    #color;
    #size;
    #isLost;
    #isOpen;
    #totalMoney;


    constructor(color, size, totalMoney = 0){
        this.#color = color;
        this.#size = size;
        this.#isLost = false;
        this.#isOpen = false;
        this.#totalMoney = totalMoney;
    }

    get color(){
        return this.#color;
    }
    
    get size(){
        return this.#size;
    }

    get isLost(){
        return this.#isLost;
    }
    
    get isOpen(){
        return this.#isOpen;
    }

    get totalMoney(){
        return this.#totalMoney;
    }

    set color(newColor){
        this.#color = newColor;
    }

    set size(newSize){
        this.#size = newSize;
    }

    set totalMoney(amount){
        this.#totalMoney = amount;
    }

    toggleLost(){
        this.#isLost = !this.#isLost;
        return `Wallet lost status: ${this.#isLost}`;
    }

    addMoney(newAmount){
        this.#totalMoney +=  newAmount;
        return this.#totalMoney;
    }

    getMoney(amount){
        this.#totalMoney -= amount;
        return this.#totalMoney;
    }

    checkTotalMoney(){
        return `Total money in wallet: $${this.#totalMoney}`;
    }


    changeStatus(){
        this.#isOpen = !this.#isOpen;

        return `Wallet is now ${this.#isOpen ? 'open' : 'closed'}.`;
    }
}

let myWallet = new Wallet('black', 'medium', 100);

myWallet.checkTotalMoney();
