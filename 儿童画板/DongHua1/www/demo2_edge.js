/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'psdb',
            type:'image',
            rect:['-5px','-63px','100%','108.8%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"psdb.jpg",'0px','0px']
         },
         {
            id:'_w',
            type:'image',
            rect:['11px','-26px','126px','147px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"%E6%9C%AA%E5%91%BDw%E5%90%8D.gif",'0px','0px']
         },
         {
            id:'_2',
            type:'image',
            rect:['1322px','-8px','126px','178px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"2.gif",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '1440px'],
            ["style", "height", '780px'],
            ["style", "overflow", 'hidden']
         ],
         "${__2}": [
            ["style", "top", '82px'],
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '178px'],
            ["style", "left", '1194px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '126px']
         ],
         "${__w}": [
            ["style", "top", '180px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '147px'],
            ["style", "left", '189px'],
            ["style", "width", '126px']
         ],
         "${_psdb}": [
            ["style", "height", '108.75%'],
            ["style", "top", '-63px'],
            ["style", "left", '-5px'],
            ["style", "width", '100%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 31447,
         autoPlay: true,
         timeline: [
            { id: "eid248", tween: [ "style", "${_psdb}", "left", '-10px', { fromValue: '-5px'}], position: 235, duration: 30607 },
            { id: "eid306", tween: [ "style", "${_psdb}", "left", '0px', { fromValue: '-10px'}], position: 30842, duration: 221 },
            { id: "eid304", tween: [ "transform", "${__2}", "rotateZ", '361deg', { fromValue: '0deg'}], position: 235, duration: 30607 },
            { id: "eid305", tween: [ "transform", "${__2}", "rotateZ", '896deg', { fromValue: '361deg'}], position: 30842, duration: 221 },
            { id: "eid311", tween: [ "transform", "${__2}", "rotateZ", '1082deg', { fromValue: '896deg'}], position: 31063, duration: 384 },
            { id: "eid167", tween: [ "style", "${__2}", "top", '-8px', { fromValue: '82px'}], position: 180, duration: 55 },
            { id: "eid171", tween: [ "style", "${__2}", "top", '332px', { fromValue: '-8px'}], position: 235, duration: 130 },
            { id: "eid177", tween: [ "style", "${__2}", "top", '489px', { fromValue: '332px'}], position: 365, duration: 238 },
            { id: "eid179", tween: [ "style", "${__2}", "top", '553px', { fromValue: '489px'}], position: 603, duration: 232 },
            { id: "eid185", tween: [ "style", "${__2}", "top", '602px', { fromValue: '553px'}], position: 835, duration: 915 },
            { id: "eid189", tween: [ "style", "${__2}", "top", '618px', { fromValue: '602px'}], position: 1750, duration: 374 },
            { id: "eid193", tween: [ "style", "${__2}", "top", '602px', { fromValue: '618px'}], position: 2124, duration: 566 },
            { id: "eid197", tween: [ "style", "${__2}", "top", '361px', { fromValue: '602px'}], position: 2690, duration: 2072 },
            { id: "eid202", tween: [ "style", "${__2}", "top", '5px', { fromValue: '361px'}], position: 4762, duration: 758 },
            { id: "eid206", tween: [ "style", "${__2}", "top", '-7px', { fromValue: '5px'}], position: 5520, duration: 470 },
            { id: "eid207", tween: [ "style", "${__2}", "top", '-31px', { fromValue: '-7px'}], position: 5990, duration: 3000 },
            { id: "eid214", tween: [ "style", "${__2}", "top", '469px', { fromValue: '-31px'}], position: 8990, duration: 3782 },
            { id: "eid218", tween: [ "style", "${__2}", "top", '602px', { fromValue: '469px'}], position: 12772, duration: 2569 },
            { id: "eid220", tween: [ "style", "${__2}", "top", '336px', { fromValue: '602px'}], position: 15341, duration: 457 },
            { id: "eid224", tween: [ "style", "${__2}", "top", '340px', { fromValue: '336px'}], position: 15798, duration: 312 },
            { id: "eid229", tween: [ "style", "${__2}", "top", '356px', { fromValue: '340px'}], position: 16110, duration: 791 },
            { id: "eid231", tween: [ "style", "${__2}", "top", '354px', { fromValue: '356px'}], position: 16901, duration: 586 },
            { id: "eid237", tween: [ "style", "${__2}", "top", '106px', { fromValue: '354px'}], position: 17487, duration: 5056 },
            { id: "eid240", tween: [ "style", "${__2}", "top", '336px', { fromValue: '106px'}], position: 22543, duration: 4519 },
            { id: "eid245", tween: [ "style", "${__2}", "top", '351px', { fromValue: '336px'}], position: 27062, duration: 3780 },
            { id: "eid247", tween: [ "style", "${__2}", "width", '108px', { fromValue: '126px'}], position: 235, duration: 30607 },
            { id: "eid246", tween: [ "style", "${__2}", "height", '162px', { fromValue: '178px'}], position: 235, duration: 30607 },
            { id: "eid303", tween: [ "style", "${__2}", "-webkit-transform-origin", [40.74,74.69], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 235, duration: 30607 },
            { id: "eid337", tween: [ "style", "${__2}", "-moz-transform-origin", [40.74,74.69], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 235, duration: 30607 },
            { id: "eid338", tween: [ "style", "${__2}", "-ms-transform-origin", [40.74,74.69], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 235, duration: 30607 },
            { id: "eid339", tween: [ "style", "${__2}", "msTransformOrigin", [40.74,74.69], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 235, duration: 30607 },
            { id: "eid340", tween: [ "style", "${__2}", "-o-transform-origin", [40.74,74.69], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 235, duration: 30607 },
            { id: "eid164", tween: [ "style", "${__w}", "left", '189px', { fromValue: '189px'}], position: 180, duration: 0 },
            { id: "eid172", tween: [ "style", "${__w}", "left", '599px', { fromValue: '189px'}], position: 235, duration: 130 },
            { id: "eid174", tween: [ "style", "${__w}", "left", '1187px', { fromValue: '599px'}], position: 365, duration: 238 },
            { id: "eid180", tween: [ "style", "${__w}", "left", '1329px', { fromValue: '1187px'}], position: 603, duration: 232 },
            { id: "eid182", tween: [ "style", "${__w}", "left", '949px', { fromValue: '1329px'}], position: 835, duration: 684 },
            { id: "eid186", tween: [ "style", "${__w}", "left", '1159px', { fromValue: '949px'}], position: 1519, duration: 389 },
            { id: "eid190", tween: [ "style", "${__w}", "left", '1323px', { fromValue: '1159px'}], position: 1908, duration: 216 },
            { id: "eid194", tween: [ "style", "${__w}", "left", '1251px', { fromValue: '1323px'}], position: 2124, duration: 566 },
            { id: "eid198", tween: [ "style", "${__w}", "left", '1003px', { fromValue: '1251px'}], position: 2690, duration: 2072 },
            { id: "eid200", tween: [ "style", "${__w}", "left", '441px', { fromValue: '1003px'}], position: 4762, duration: 758 },
            { id: "eid203", tween: [ "style", "${__w}", "left", '45px', { fromValue: '441px'}], position: 5520, duration: 470 },
            { id: "eid210", tween: [ "style", "${__w}", "left", '65px', { fromValue: '45px'}], position: 5990, duration: 3000 },
            { id: "eid212", tween: [ "style", "${__w}", "left", '955px', { fromValue: '65px'}], position: 8990, duration: 3782 },
            { id: "eid215", tween: [ "style", "${__w}", "left", '1263px', { fromValue: '955px'}], position: 12772, duration: 2569 },
            { id: "eid221", tween: [ "style", "${__w}", "left", '829px', { fromValue: '1263px'}], position: 15341, duration: 457 },
            { id: "eid225", tween: [ "style", "${__w}", "left", '706px', { fromValue: '829px'}], position: 15798, duration: 312 },
            { id: "eid227", tween: [ "style", "${__w}", "left", '512px', { fromValue: '706px'}], position: 16110, duration: 791 },
            { id: "eid232", tween: [ "style", "${__w}", "left", '196px', { fromValue: '512px'}], position: 16901, duration: 586 },
            { id: "eid235", tween: [ "style", "${__w}", "left", '422px', { fromValue: '196px'}], position: 17487, duration: 5056 },
            { id: "eid238", tween: [ "style", "${__w}", "left", '454px', { fromValue: '422px'}], position: 22543, duration: 4519 },
            { id: "eid242", tween: [ "style", "${__w}", "left", '628px', { fromValue: '454px'}], position: 27062, duration: 3361 },
            { id: "eid299", tween: [ "style", "${__2}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 235, duration: 0 },
            { id: "eid300", tween: [ "style", "${__2}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 30842, duration: 0 },
            { id: "eid169", tween: [ "style", "${__2}", "left", '1322px', { fromValue: '1194px'}], position: 180, duration: 55 },
            { id: "eid170", tween: [ "style", "${__2}", "left", '1112px', { fromValue: '1322px'}], position: 235, duration: 130 },
            { id: "eid176", tween: [ "style", "${__2}", "left", '362px', { fromValue: '1112px'}], position: 365, duration: 238 },
            { id: "eid178", tween: [ "style", "${__2}", "left", '106px', { fromValue: '362px'}], position: 603, duration: 232 },
            { id: "eid184", tween: [ "style", "${__2}", "left", '594px', { fromValue: '106px'}], position: 835, duration: 915 },
            { id: "eid188", tween: [ "style", "${__2}", "left", '916px', { fromValue: '594px'}], position: 1750, duration: 374 },
            { id: "eid192", tween: [ "style", "${__2}", "left", '1134px', { fromValue: '916px'}], position: 2124, duration: 566 },
            { id: "eid196", tween: [ "style", "${__2}", "left", '1268px', { fromValue: '1134px'}], position: 2690, duration: 2072 },
            { id: "eid201", tween: [ "style", "${__2}", "left", '1264px', { fromValue: '1268px'}], position: 4762, duration: 758 },
            { id: "eid205", tween: [ "style", "${__2}", "left", '652px', { fromValue: '1264px'}], position: 5520, duration: 470 },
            { id: "eid208", tween: [ "style", "${__2}", "left", '158px', { fromValue: '652px'}], position: 5990, duration: 3000 },
            { id: "eid213", tween: [ "style", "${__2}", "left", '148px', { fromValue: '158px'}], position: 8990, duration: 3782 },
            { id: "eid217", tween: [ "style", "${__2}", "left", '1030px', { fromValue: '148px'}], position: 12772, duration: 2569 },
            { id: "eid219", tween: [ "style", "${__2}", "left", '530px', { fromValue: '1030px'}], position: 15341, duration: 457 },
            { id: "eid223", tween: [ "style", "${__2}", "left", '580px', { fromValue: '530px'}], position: 15798, duration: 312 },
            { id: "eid228", tween: [ "style", "${__2}", "left", '696px', { fromValue: '580px'}], position: 16110, duration: 791 },
            { id: "eid230", tween: [ "style", "${__2}", "left", '1074px', { fromValue: '696px'}], position: 16901, duration: 586 },
            { id: "eid236", tween: [ "style", "${__2}", "left", '834px', { fromValue: '1074px'}], position: 17487, duration: 5056 },
            { id: "eid241", tween: [ "style", "${__2}", "left", '836px', { fromValue: '834px'}], position: 22543, duration: 4519 },
            { id: "eid244", tween: [ "style", "${__2}", "left", '748px', { fromValue: '836px'}], position: 27062, duration: 3361 },
            { id: "eid302", tween: [ "style", "${__2}", "left", '762px', { fromValue: '748px'}], position: 30423, duration: 419 },
            { id: "eid249", tween: [ "style", "${_psdb}", "top", '-59px', { fromValue: '-63px'}], position: 235, duration: 30607 },
            { id: "eid307", tween: [ "style", "${_psdb}", "top", '-51px', { fromValue: '-59px'}], position: 30842, duration: 221 },
            { id: "eid165", tween: [ "style", "${__w}", "top", '180px', { fromValue: '180px'}], position: 180, duration: 0 },
            { id: "eid173", tween: [ "style", "${__w}", "top", '361px', { fromValue: '180px'}], position: 235, duration: 130 },
            { id: "eid175", tween: [ "style", "${__w}", "top", '593px', { fromValue: '361px'}], position: 365, duration: 238 },
            { id: "eid181", tween: [ "style", "${__w}", "top", '621px', { fromValue: '593px'}], position: 603, duration: 232 },
            { id: "eid183", tween: [ "style", "${__w}", "top", '605px', { fromValue: '621px'}], position: 835, duration: 684 },
            { id: "eid187", tween: [ "style", "${__w}", "top", '611px', { fromValue: '605px'}], position: 1519, duration: 389 },
            { id: "eid191", tween: [ "style", "${__w}", "top", '618px', { fromValue: '611px'}], position: 1908, duration: 216 },
            { id: "eid195", tween: [ "style", "${__w}", "top", '148px', { fromValue: '618px'}], position: 2124, duration: 566 },
            { id: "eid199", tween: [ "style", "${__w}", "top", '42px', { fromValue: '148px'}], position: 2690, duration: 2072 },
            { id: "eid204", tween: [ "style", "${__w}", "top", '0px', { fromValue: '42px'}], position: 4762, duration: 1228 },
            { id: "eid209", tween: [ "style", "${__w}", "top", '456px', { fromValue: '0px'}], position: 5990, duration: 3000 },
            { id: "eid211", tween: [ "style", "${__w}", "top", '566px', { fromValue: '456px'}], position: 8990, duration: 3782 },
            { id: "eid216", tween: [ "style", "${__w}", "top", '580px', { fromValue: '566px'}], position: 12772, duration: 2569 },
            { id: "eid222", tween: [ "style", "${__w}", "top", '361px', { fromValue: '580px'}], position: 15341, duration: 457 },
            { id: "eid226", tween: [ "style", "${__w}", "top", '349px', { fromValue: '361px'}], position: 15798, duration: 312 },
            { id: "eid233", tween: [ "style", "${__w}", "top", '347px', { fromValue: '349px'}], position: 16110, duration: 1377 },
            { id: "eid234", tween: [ "style", "${__w}", "top", '99px', { fromValue: '347px'}], position: 17487, duration: 5056 },
            { id: "eid239", tween: [ "style", "${__w}", "top", '325px', { fromValue: '99px'}], position: 22543, duration: 4519 },
            { id: "eid243", tween: [ "style", "${__w}", "top", '345px', { fromValue: '325px'}], position: 27062, duration: 3361 },
            { id: "eid308", tween: [ "transform", "${__w}", "rotateZ", '-168deg', { fromValue: '0deg'}], position: 235, duration: 30828 },
            { id: "eid309", tween: [ "transform", "${__w}", "rotateZ", '-361deg', { fromValue: '-168deg'}], position: 31063, duration: 384 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-14284550");
