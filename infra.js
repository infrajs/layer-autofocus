Event.handler('Layer.oncheck', function (layer) {
	infrajs.autofocussave(layer);
});
Event.handler('Layer.onshow', function (layer) {
	infrajs.autofocus(layer);
});