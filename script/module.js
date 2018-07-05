//Define module name here 

const ModuleName = 'frz_tabble';



//Props default value write here

const ModuleDefaults = {
    properties: 'value',
    gg: 'ininder',
    left: 10
};
console.log('line 9 :' + ModuleDefaults.gg); //ininder

//Define you want to get function returns from outside of scope
const ModuleReturns = [];

class Module {
    constructor(ele, options) {
        this.ele = ele;
        this.$ele = $(ele);
        this.option = options;
        console.log('constructor' + this)
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


// 從script裡面招喚module.js 把他有export的東西接起來
import {
    ModuleName,
    ModuleDefaults,
    ModuleReturns,
    Module
} from './script/module.js';
// 確認root是誰 (純粹用來找jquery的)
const root = ((root) => {
    if (typeof root === 'object' && (root.self === root || root.global === global) && root) {
        return root;
    }
})(self || global || {});
// 找jquery，確保 $ 就是jquery
const $ = (($) => {
    if (typeof $ === 'function') {
        return $;
    } else {
        throw new Error('You must import jQuery');
    }
})(root.jQuery);
//本體
//第一行你應該很會了
//差在這邊沒有放argument(參數)，因為他等等要直接用更帥的方法讀arguments
$.fn[ModuleName] = function () {
    // 把arguments變成array
    let args = Array.prototype.slice.call(arguments, 0);
    // method就是第一個參數，跟之前一樣
    let method = args[0];
    // 第二個以後的參數就是options，把所有的options存成一個array
    // 要是沒有第二個參數 那options就存『沒有東西』
    let options = args.slice(1).length <= 0 ? void 0 : args.slice(1, args.length);
    // 判斷module.js裡有沒有return東西
    let isReturnMethod = this.length === 1 && typeof method === 'string' && ModuleReturns.indexOf(method) !== -1;
    // 定義執行內部method(就是.prototype.什麼什麼function)的流程，把method名稱跟選項拿給module執行
    // uesReturn應該是useReturn，就是看這個內部method有沒有要return (老實說我覺得這個有點多餘)
    let methodRunner = function (method, options, uesReturn) {
        // 這邊你應該很會，只是這邊多一個useReturn而已
        let $this = $(this);
        let module = $this.data(ModuleName);
        if (module) {
            if (typeof method === 'string' && !uesReturn) {
                module[method].apply(module, options);
            } else if (typeof method === 'string' && !!uesReturn) {
                return module[method].apply(module, options);
            } else {
                throw new Error('unsupported options!');
            }
        } else {
            throw new Error('You must run first this plugin!');
        }
    };
    // 假設有要return 就return
    if (isReturnMethod) {
        return methodRunner.call(this, method, options, isReturnMethod);
    } else {
        // 你的強項 跟上個作業幾乎一樣
        return this.each(function () {
            let $this = $(this);
            let module = $this.data(ModuleName);
            let opts = null;
            if (module) {
                methodRunner.call(this, method, options);
            } else {
                opts = $.extend(true, {}, ModuleDefaults, (typeof method === 'object' && method), (typeof options === 'object' && options));
                module = new Module(this, opts);
                $this.data(ModuleName, module);
                // 多一個init
                module.init();
            }
        });
    }
};
