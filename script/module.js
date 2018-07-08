//Define module name here
const ModuleName = "frztable";

//Props default value write here
const ModuleDefaults = {
  count: {
    // M版時每次點擊往前往後移動幾格儲存格
    slide: 3, // [number]
    // M版時一個畫面show幾格儲存格
    show: 3 // [number]
  },
  // 設定花多久時間移動完成
  speed: 0.3, // [number]
  // 每次點擊儲存格時會執行此callback，並帶入所點擊的儲存格jquery物件
  whenClick: function($element) {
    console.log($element);
  }
};

//Define you want to get function returns from outside of scope
const ModuleReturns = []; //string

function onMouseClick(event) {
  let $this = $(this);
  let [f, b] = [$this.data("forth"), $this.data("back")];
  $this.removeClass("selected");
  $(event.data.target + "_date").removeClass("add_selected_bg selected");
  $this.addClass("selected");
  $(event.data.target + "_date[data-forth=" + f + "]").addClass(
    "add_selected_bg"
  );
  $(event.data.target + "_date[data-back=" + b + "]").addClass(
    "add_selected_bg"
  );
  console.log("f:", f, "b:", b);
  console.log(event.data.whenClickCallback($this));
}

function onMouseOver(event) {
  console.log(event.data.target);
  $(event.data.target + "_date").removeClass("mousover_effect");
  $(this).addClass("mousover_effect");
}

function slide(dir) {
  let change = this.option.count.slide;
  let op = "";
  if (dir === "left") {
    if (this.firstCol - change < 0) {
      console.log("right overflow");
      change = this.firstCol; //最後要移動的值，等於this.firstCol的距離，(左邊的虛線框框)
    }
    op = "+=";
    this.firstCol -= change;
  } else if (dir === "right") {
    if (this.firstCol + change >= 7 - this.option.count.show) {
      console.log("left overflow");
      change = 7 - this.option.count.show - this.firstCol;
    }
    op = "-=";
    this.firstCol += change;
  }
  $(this.target + "_overflow").animate(
    {
      left: op + change * this.colWidth
    },
    this.option.speed * 1000
  );
  console.log(this.firstCol);
} //slide

function onResize() {
  let winWidth = $(window).width();
  this.colWidth =
    (winWidth - $(this.target + "_col-1").width()) / this.option.count.show;
  // this.colWidth -= 1;
  if (winWidth <= 980) {
    console.log($(this.target + "_column").css("width"));
    console.log("-----------");
    console.log("overflow:" + $(this.target + "_overflow").css("width"));
    $(this.target + "_column").css("width", this.colWidth);
    $(this.target + "_overflow").css("width", this.colWidth * 7);
  } else {
    $(this.target + "_column").css("width", this.tmp1);
    $(this.target + "_overflow").css("width", this.tmp2);
  }
} //
class Module {
  constructor(ele, options) {
    this.target = ".frztable";
    this.option = options;
    this.$btnLeft = $(this.target + "_btn-left");
    this.$btnRight = $(this.target + "_btn-right");
    this.$cell = $(this.target + "_date");
    this.firstCol = 0;
  }

  init() {
    this.$cell.click(
      {
        whenClickCallback: this.option.whenClick,
        target: this.target
      },
      onMouseClick
    );
    this.$cell.mouseover(
      {
        target: this.target
      },
      onMouseOver
    );
    this.tmp1 = $(this.target + "_column").css("width");
    this.tmp2 = $(this.target + "_overflow").css("width");
    $(window).resize(onResize.bind(this));
    $(window).resize();
    this.$btnLeft.click(slide.bind(this, "left")); //btnLeft
    this.$btnRight.click(slide.bind(this, "right")); //btnLeft
  } //run first here
}
export { ModuleName, ModuleDefaults, ModuleReturns, Module };
