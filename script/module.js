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
        console.log($element)
    }
};

//Define you want to get function returns from outside of scope
const ModuleReturns = []; //string

function onMouseClick() {
    let $this = $(this);
    let $cell = $('.date');
    let [f, b] = [$this.data('forth'), $this.data('back')];
    let $row = $('.date[data-forth=' + f + ']');
    let $col = $('.date[data-back=' + b + ']');
    $this.removeClass('selected');
    $cell.removeClass('add_selected_bg selected');
    $this.addClass('selected');
    $row.addClass('add_selected_bg');
    $col.addClass('add_selected_bg');
    console.log('f:' + f + 'b:' + b);
}

function onMouseOver() {
    $('.date').removeClass('mousover_effect')
    $(this).addClass('mousover_effect');
}

function slide(dir) {
    let left = parseInt($('.overflow').css('left'))
    if (dir === 'left') {

        $('.overflow').animate({
            left: "+=" + this.option.count.slide * this.colWidth,
        }, {
            speed: this.option.speed
        });
        if ($('.overflow').css('left') == "0px") {
            return
        }
    } else {
        console.log(left - this.option.count.show * this.colWidth + "px")
        if ($('.overflow').css('left') == "-" + left - this.option.count.show * this.colWidth + "px") {
            return
        }
        $('.overflow').animate({
            left: "-=" + this.option.count.slide * this.colWidth,
        }, {
            speed: this.option.speed
        });
    }
}; //slide


class Module {
    constructor(ele, options) {
        this.ele = ele;
        this.$ele = $(ele);
        this.option = options;
        this.$btnLeft = $('.btn-left');
        this.$btnRight = $('.btn-right');
        this.$cell = $('.date');
    }

    init() {
        this.$cell.click(onMouseClick);
        this.$cell.mouseover(onMouseOver);
        let tmp1 = $('.column').css('width');
        let tmp2 = $('.overflow').css('width');
        $(window).resize(function () {
            let winWidth = $(window).width();
            this.colWidth = (winWidth - $('.col-1').width()) / this.option.count.show;
            // this.colWidth -= 1;
            if (winWidth <= 980) {
                $('.column').css('width', this.colWidth);
                $('.overflow').css('width', this.colWidth * 8);
            } else {
                $('.column').css('width', tmp1);
                $('.overflow').css('width', tmp2);
            }
        }.bind(this));
        $(window).resize();
        this.$btnLeft.click(slide.bind(this, 'left')) //btnLeft
        this.$btnRight.click(slide.bind(this, 'right')); //btnLeft
    } //run first here
};
export {
    ModuleName,
    ModuleDefaults,
    ModuleReturns,
    Module
};
