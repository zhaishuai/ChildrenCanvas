/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         var au_to_play=new Audio();
         au_to_play.src="sound/1.mp3";  //指定文件名，这里使用的是相对路径
         au_to_play.volume=1;     //设置音频播放时候的音量大小
         au_to_play.play();   //让文件开始播放
         // stop the timeline at the given position (ms or label)
      
      
      
      });
      //Edge binding end
      
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 31447, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-14284550");