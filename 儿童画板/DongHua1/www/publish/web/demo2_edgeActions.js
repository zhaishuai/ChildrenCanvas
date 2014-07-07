
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){var au_to_play=new Audio();au_to_play.src="sound/1.mp3";au_to_play.volume=1;au_to_play.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",31447,function(sym,e){sym.stop();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-14284550");