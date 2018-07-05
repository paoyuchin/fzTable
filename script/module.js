//Define module name here 

const ModuleName = 'frz_tabble';



//Props default value write here

const ModuleDefaults = {
    properties: 'value',
    gg: 'ininder',
};
console.log(ModuleDefaults.gg); //ininder

//Define you want to get function returns from outside of scope
const ModuleReturns = [];

class Module {
    constructor(ele, options) {
        this.ele = ele;
        this.$ele = $(ele);
        this.option = options;
        console.log('constructor this:' + this)
    }
    init() {
        // first run here
        console.log(this)
    }
    methods() {
        return this;
    }
}
export {
    ModuleName,
    ModuleDefaults,
    ModuleReturns,
    Module
};
