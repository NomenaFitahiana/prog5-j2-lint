class Wallet{
    #color;
    #size;
    #isLost;
    #isOpen;
    #total_Money;


    constructor(color, size, totalMoney = 0){
        this.#color = color;
        this.#size = size;
        this.#isLost = false;
        this.#isOpen = false;
        this.#total_Money = totalMoney;
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
        return this.#total_Money;
    }

    set color(newColor){
        this.#color = newColor;
    }

    set size(newSize){
        this.#size = newSize;
    }

    set totalMoney(amount){
        this.#total_Money = amount;
    }

    toggleLost(){
        this.#isLost = !this.#isLost;
        return `Wallet lost status: ${this.#isLost}`;
    }

    addMoney(newAmount){
        this.#total_Money +=  newAmount;
        return this.#total_Money;
    }

    getMoney(amount){
        this.#total_Money -= amount;
        return this.#total_Money;
    }

    checkTotalMoney(){
        return `Total money in wallet: $${this.#total_Money}`;
    }


    changeStatus(){
        this.#isOpen = !this.#isOpen;

        return `Wallet is now ${this.#isOpen ? 'open' : 'closed'}.`;
    }
}

let myWallet = new Wallet('black', 'medium', 100);

myWallet.checkTotalMoney();
