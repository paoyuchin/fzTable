$('.frzTable.default').frzTable({
count: {
// M 版時每次點擊往前往後移動幾格儲存格
slide: 1, // [number]
// M 版時一個畫面 show 幾格儲存格
show: 4 // [number]
},
// 設定花多久時間移動完成
speed: .3, // [number]
// 每次點擊儲存格時會執行此 callback，並帶入所點擊的儲存格 jquery 物件
whenClick: function($element) {
// console.log($element)
}
})
$('.frzTable.rel').frzTable({
count: {
slide: 1,
show: 2
},
whenClick: function($element) {
// console.log($element)
}
})
