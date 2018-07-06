//Define module name here

const ModuleName = 'frz_table';

//Props default value write here
const ModuleDefaults = {
    count: {
        // M版時每次點擊往前往後移動幾格儲存格
        slide: 1, // [number] 
        // M版時一個畫面show幾格儲存格
        show: 4 // [number] 
    },
    // 設定花多久時間移動完成
    speed: .3, // [number] 
    // 每次點擊儲存格時會執行此callback，並帶入所點擊的儲存格jquery物件
    whenClick: function ($element) {
        // console.log($element)
    }
};
//array dictionary
['12/27(三)', '12/28(四)', '12/29(五)', '12/30(六)', '12/31(日)', '01/1(一)', '01/2(二)', '01/3(三)', '01/4(四)', '01/5(四)'];

//Define you want to get function returns from outside of scope
const ModuleReturns = ['methods']; //string






function on_clicked() {
    $('.date').click(function () {
        let f = $(this).data('forth');
        let b = $(this).data('back');
        let selected_row = $('.date[data-forth=' + f + ']');
        let selected_col = $('.date[data-back=' + b + ']');
        console.log('f:' + f + 'b:' + b);

        $(this).removeClass('selected');
        $('.date').removeClass('add_selected_bg');
        $('.date').removeClass('selected');

        $(this).addClass('selected');
        selected_row.addClass('add_selected_bg');
        selected_col.addClass('add_selected_bg');
    });
}; //on click



function mouseover() {
    $(".date").mouseover(function () {
        $('.date').removeClass('mousover_effect')
        $(this).addClass('mousover_effect');
    });
} //hover
on_clicked();
mouseover();


class Module {
    constructor(ele, options) {
        this.ele = ele;
        this.$ele = $(ele);
        this.option = options;
        this.$btnLeft = $('.btn-left');
        this.$btnRight = $('.btn-right');
        this.$selected = $('.selected');
        this.$date = $('.date');
    }

    init() {
        // this.changeColor();
    } //run first here

    methods() {
        return this;
    }
};
export {
    ModuleName,
    ModuleDefaults,
    ModuleReturns,
    Module
};
