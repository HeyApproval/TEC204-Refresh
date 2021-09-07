(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.TEC_logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bar
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7921E").s().p("AgdMCIAA4DIA7AAIAAYDg");
	this.shape.setTransform(88,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// logo
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00527E").s().p("AgyBHIAAiwIAHgCIASgHQAQgIAHgGIAEACIAABGIAkgBIAAAVIgkgBIAAB3QgBAHAFAFQAGAGAKgCQANgCAMgMIAEABIAAABIgDASIAAAAQgOARgRAFQgJADgJAAQgxAAAAg6g");
	this.shape_1.setTransform(36.25,-15.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00527E").s().p("AgwBHIAAhsIgjAAIAAgUIAjABIAAgxIAHgCIASgHQAQgIAHgGIAEACIAABGIBRAAIgBATIhQAAIAAB3QgBAHAFAFQAGAGALgCQAMgCAMgMIAEABIAAABIgDASIAAAAQgOARgRAFQgJADgKAAQgwAAAAg6g");
	this.shape_2.setTransform(23.45,-15.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00527E").s().p("AhBBeIAAi3IA3AAIgBAjIABABQAGgQAPgLQAQgNARAAIAIABIAOACIgBABQgRARgIAXIgBAEIgDgBQgEgCgGAAQgRAAgKALQgKAMAAAPIABBog");
	this.shape_3.setTransform(-7.575,-12.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00527E").s().p("AgeBZQgSgHgNgPQgLgOgFgRQgFgTAAgQQAAgUAHgSQAHgTANgMQANgNATgIQASgHAXAAQAWAAAPAFQARAGALAHQgFAIgDALIgDAIIgGAAQgGgLgMgHQgLgHgOAAIgCgBQgWAAgLAVQgMAUAAAlQAAAjAPATQANATAcAAQALAAAMgGQAMgGAFgGIAEADQgDAFgBAHIgEALQgIAGgNAFQgOAEgRAAQgaAAgUgIg");
	this.shape_4.setTransform(14.025,22.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00527E").s().p("AgZBcQgRgFgMgMQgNgNgIgRQgHgTAAgZQAAgWAHgUQAHgSALgNQALgMARgGQAQgGASAAQAmAAAUAWQAUAXAAAoIAAALIhsAAQAAAQADAOQADAMAGAKQAHALAIAFQAJAGAOgBQAaABAbgXIAFACIAAAAIgDASQgNAPgWAHQgNAEgWAAQgSAAgRgFgAAggQQgBgcgGgSQgGgRgPAAQgHAAgGAGQgFAFgEAKQgEAIgBAMIgCAWIA5AAIAAAAg");
	this.shape_5.setTransform(6.125,-11.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00527E").s().p("AgYBcQgSgFgNgMQgMgMgIgSQgHgTAAgZQAAgYAGgSQAIgSALgNQAMgMAQgGQARgGARAAQAnAAATAWQAUAWAAApIAAALIhsAAQAAAQADAOQACALAHALQAHALAIAFQAJAGAOgBQAaABAbgXIAFACIAAAAIgDASQgNAPgWAHQgNAEgWAAQgTAAgPgFgAAfgQQAAgegHgQQgFgRgPAAQgIAAgFAGQgGAFgEAKIgEAUIgCAWIA4AAIAAAAg");
	this.shape_6.setTransform(-24.95,-11.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00527E").s().p("AgYBcQgQgFgOgMQgNgLgIgTQgHgSAAgaQAAgYAGgSQAHgSAMgNQAMgMAQgGQAQgGASAAQAnAAATAWQAUAWAAApIAAALIhsAAQAAAQACANQADANAHALQAHAKAIAFQAKAGANAAQAZAAAcgWIAFABIAAABIgDASQgNANgWAIQgNAEgWAAQgQAAgSgFgAAggQQgBgcgGgSQgHgRgOAAQgHAAgGAGQgGAFgDAKQgDAHgDANIgBAWIA5AAIAAAAg");
	this.shape_7.setTransform(-24.3,-45.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00527E").s().p("AAHBbIgeABIhCi3IAtABIAOgBIAqCFIAAAAIAYhCIAWhDIAQABIAIAAIAIgBIg1B/QgJAWgKAig");
	this.shape_8.setTransform(-41.5,-11.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00527E").s().p("AhCCQIgHAAIAAkfICTAAQgCAFAAALIACARIhYgFIAABOIBDgDIAJAbIACAFQgsgCgiAAIAAB/IBYgFIgBAHIAAATIABAGg");
	this.shape_9.setTransform(-58.825,-17.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00527E").s().p("AgZBcIAAi3IAZACQALAAAPgCIAAC3g");
	this.shape_10.setTransform(0.325,22.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00527E").s().p("AgZBcIAAi3IAZACQALAAAPgCIAAC3g");
	this.shape_11.setTransform(-28.55,22.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00527E").s().p("AgNCQIgMABIAAkgIAMABIAbAAIAMgBIAAEgg");
	this.shape_12.setTransform(-37.475,16.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00527E").s().p("AggCKQgagJgTgTQgTgUgIgYQgKgZAAgeQAAgrAMgeQANgeAVgTQAUgTAcgJQAZgIAggBIAqAGIAUAGQALAFAFADIgGAWIgDAVIgFAAQgOgUgQgIQgOgJgWAAQgPAAgQAIQgPAHgMAPQgNAQgHAYQgIAXAAAhQAAAhAIAWQAIAXANAOQANAPAPAGQAQAGAQAAQALAAAIgCIATgGQAGgCALgIQAJgGAGgGIAFACIgGASIgDASQgfASgvgBQggABgagLg");
	this.shape_13.setTransform(-55.425,17.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00527E").s().p("ABGBdIgnABIAAhtQAAgagFgHQgJgMgOAAQgQAAgJAPQgIAQAAAZIAABiIgngBIgMABIAAi3IAYACIAbgCIAAAcIABABQAKgPAOgKQAOgIARAAQAaAAAPAQQAPARAAAkIAAB2g");
	this.shape_14.setTransform(-13.925,21.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00527E").s().p("AAfCQIAAhuIgBgUQgBgIgEgFQgIgLgOAAQgRAAgHAOQgJAPABAbIAABiIg3AAIAAkfIAbACIAcgCIAACFIAAAAQAKgQAOgIQANgJASAAQAdAAAPAQQAPARAAAjIAAB3g");
	this.shape_15.setTransform(-43.05,-50.425);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00527E").s().p("AgbCQIAAkCIhGAFIAAgiIDDAAIAAASIAAAQIhEgFIABECg");
	this.shape_16.setTransform(-63.275,-50.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00527E").s().p("AgTAVQgIgIAAgNQAAgMAIgIQAJgJAKAAQAMAAAIAJQAIAIAAAMQAAANgIAIQgIAJgMAAQgKAAgJgJg");
	this.shape_17.setTransform(0.45,6.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00527E").s().p("AgTAVQgIgIAAgNQAAgMAIgIQAJgJAKAAQALAAAJAJQAIAIAAAMQAAANgIAIQgJAJgLAAQgKAAgJgJg");
	this.shape_18.setTransform(-28.6,6.35);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4E4F52").s().p("AA4A2IAAg+QAAgdgTAAQgNAAgHALQgHALAAAQIAAA1IgTAAIAAg+QAAgdgSAAQgOAAgHALQgHALAAAQIAAA1IgTAAIAAhoIASAAIAAAPIAAAAQALgSAXAAQAWAAAGAVQAFgJAJgGQAJgGAKAAQAkAAAAAoIAABDg");
	this.shape_19.setTransform(55.525,55.175);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4E4F52").s().p("AgtAJIAAg+IATAAIAAA4QAAAjAXAAQAOAAAIgLQAIgLAAgUIAAgxIATAAIAABoIgSAAIAAgQIgBAAQgEAIgJAFQgJAGgLAAQgnAAAAgtg");
	this.shape_20.setTransform(41.325,55.425);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4E4F52").s().p("AgMAnIAAg9IgXAAIAAgPIAXAAIAAgZIATgGIAAAfIAcAAIAAAPIgcAAIAAA5QAAAIAEAFQAFAFAHABQAHgBAGgDIAAAQIgQADQggAAAAgeg");
	this.shape_21.setTransform(31.225,53.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4E4F52").s().p("AgxBMIAAiUIATAAIAAAPIAAAAQAMgRAXAAQAVAAAMAPQAMAOAAAYQAAAXgLAPQgMARgWAAQgXAAgLgQIAAA6gAgVgvQgIALAAARQAAAPAHAKQAJANANAAQAOAAAIgMQAHgKAAgRQAAgUgIgJQgIgKgNAAQgNAAgIAMg");
	this.shape_22.setTransform(21.925,57.35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#4E4F52").s().p("AgyA2QgSgUAAgiQAAgfASgVQATgVAfAAQAggBATAWQASAUAAAgQAAAigSAVQgTATggAAQgfABgTgVgAgignQgMAQAAAXQAAAZAMAPQANARAVgBQAWABANgRQAMgPAAgZQAAgWgLgPQgNgSgXAAQgVAAgNAQg");
	this.shape_23.setTransform(8.125,53.35);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4E4F52").s().p("AgLBOIAAhYIgYAAIAAgPIAYAAIAAgLQAAgWAIgJQAHgKAUAAIAMAAIAAARQgEgCgGAAQgKAAgEAGQgEAFAAAMIAAAOIAbAAIAAAPIgbAAIAABYg");
	this.shape_24.setTransform(-9.525,52.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4E4F52").s().p("AgmAnQgOgQAAgXQAAgXAOgQQAPgPAXAAQAYAAAPAPQAOAPAAAYQAAAXgOAQQgPAQgYAAQgWAAgQgQgAgWgaQgKALABAPQgBAQAJAMQAIALAPABQAPgBAKgLQAIgMAAgQQAAgPgJgMQgJgLgPgBQgNAAgJANg");
	this.shape_25.setTransform(-18.65,55.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4E4F52").s().p("AgMAnIAAg9IgXAAIAAgPIAXAAIAAgZIATgGIAAAfIAcAAIAAAPIgcAAIAAA5QAAAIAEAFQAFAFAHABQAGgBAHgDIAAAQIgQADQggAAAAgeg");
	this.shape_26.setTransform(-34.875,53.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4E4F52").s().p("AgdA2IAAhoIATAAIAAAQQAEgJAHgFQAIgFAIAAIANACIAAARIgLgCQgNAAgIAMQgHAMAAASIAAAwg");
	this.shape_27.setTransform(-42.95,55.175);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#4E4F52").s().p("AgsAXQAAgRAPgJQANgJAWAAIATABQAAgOgGgHQgGgGgNgBQgRABgOAKIgBgQQARgKARAAQAqAAAAArIABA/IgSAAIAAgNIgBAAQgLAQgUAAQgnAAAAgggAgXAXQAAAHAGAFQAGAEAIABQAMgBAIgHQAIgIAAgMIAAgJIgNgBQgjAAAAAVg");
	this.shape_28.setTransform(-52.325,55.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#4E4F52").s().p("AgtBIIAAiPIAmAAQA1AAAAAsQAAAUgOAKQgOALgWAAIgUAAIAAA6gAgYgDIAUAAQALAAAIgFQAJgIAAgMQAAgLgKgHQgJgGgNAAIgQAAg");
	this.shape_29.setTransform(-61.525,53.35);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#4E4F52").s().p("AgdAeQgMgMAAgSQAAgRAMgMQAMgNARAAQARAAANANQAMAMAAARQAAASgMAMQgNANgRAAQgRAAgMgNgAgWgYQgJAKAAAOQAAAPAJAKQAJAKANAAQANAAAJgKQAKgKAAgPQAAgOgJgJQgJgKgOAAQgNAAgJAJgAAKAYIgLgVIgGAAIAAAVIgIAAIAAgvIAQAAQASAAAAAOQAAALgMABIAMAVgAgHgCIAIAAQAJgBAAgGQAAgIgJAAIgIAAg");
	this.shape_30.setTransform(68.925,50.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// box
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AtRMCIAA4DIajAAIAAYDg");

	this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TEC_logo, new cjs.Rectangle(-85,-77,176,154), null);


(lib.TAG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAGQgCgDAAgDQAAgCACgDQADgCACAAQADAAADACQACADAAACQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape.setTransform(69.675,28.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFAyIAAhYIggAAIAAgLIBLAAIAAALIggAAIAABYg");
	this.shape_1.setTransform(65.525,23.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAhAyIgIgWIgxAAIgJAWIgOAAIAohjIAOAAIApBjgAAVAQIgVg1IgVA1IAqAAg");
	this.shape_2.setTransform(57.6,23.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAdAyIAAguIg5AAIAAAuIgNAAIAAhjIANAAIAAArIA5AAIAAgrIANAAIAABjg");
	this.shape_3.setTransform(47.525,23.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFAyIAAhYIggAAIAAgLIBLAAIAAALIggAAIAABYg");
	this.shape_4.setTransform(38.125,23.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAWAyIgZgoIgUAAIAAAoIgNAAIAAhjIAoAAQAOAAAIAIQAJAJAAANQAAANgHAHQgIAIgKAAIAbApgAgXAAIAaAAQAIAAAGgFQAFgGABgIQgBgJgFgEQgGgGgIAAIgaAAg");
	this.shape_5.setTransform(26.1,23.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgjAlQgOgPAAgWQAAgWAOgOQAOgPAVAAQAWAAAOAPQAOAOAAAWQAAAWgOAPQgOAPgWAAQgVAAgOgPgAgagcQgKALAAARQAAASAKALQAKALAQAAQARAAAKgLQAKgMAAgRQAAgRgKgLQgKgMgRAAQgQAAgKAMg");
	this.shape_6.setTransform(15.775,23.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggAyIAAhjIBBAAIAAALIg0AAIAAAhIAzAAIAAAJIgzAAIAAAug");
	this.shape_7.setTransform(6.45,23.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AggAyIAAhjIBBAAIAAALIg1AAIAAAgIA0AAIAAAKIg0AAIAAAjIA1AAIAAALg");
	this.shape_8.setTransform(59.85,8.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAWAyIgZgoIgUAAIAAAoIgNAAIAAhjIAoAAQAOAAAIAIQAJAIAAAOQAAANgHAHQgIAHgKABIAbApgAgXAAIAaAAQAIAAAGgFQAFgGAAgIQAAgJgFgFQgGgFgIAAIgaAAg");
	this.shape_9.setTransform(51.3,8.85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAiAyIgJgWIgxAAIgJAWIgOAAIAohjIAPAAIAoBjgAAVARIgVg1IgUA1IApAAg");
	this.shape_10.setTransform(41.8,8.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgdAlQgPgOAAgXQAAgWAPgPQAPgOAVAAQAYAAAOAUIgLAGQgEgHgHgEQgIgEgIAAQgQAAgLAMQgLALAAARQAAARALAMQALALAQAAQAIAAAIgEQAHgEAEgGIALAGQgPAUgXAAQgVAAgPgPg");
	this.shape_11.setTransform(32.175,8.875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AggAyIAAhjIBBAAIAAALIg1AAIAAAgIAzAAIAAAKIgzAAIAAAjIA1AAIAAALg");
	this.shape_12.setTransform(19.45,8.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAWAyIgWhQIgVBQIgOAAIgchjIAOAAIAWBTIAXhTIAJAAIAXBTIAWhTIAOAAIgdBjg");
	this.shape_13.setTransform(8.625,8.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TAG, new cjs.Rectangle(0,0,93.1,34), null);


(lib.HEAD1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMANQgFgFgBgIQABgHAFgFQAGgGAGAAQAIAAAFAGQAGAFgBAHQABAIgGAFQgFAGgIAAQgGAAgGgGg");
	this.shape.setTransform(197.25,98.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhGBNIAAiZIA8AAQAkAAAXAVQAWAWAAAhQAAAjgWAVQgXAVgjAAgAglAwIAbAAQAWAAANgOQANgOAAgUQAAgUgNgNQgNgOgVAAIgcAAg");
	this.shape_1.setTransform(187.9,92.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAlBNIhIhjIAABjIghAAIAAiZIAiAAIBGBgIAAhgIAhAAIAACZg");
	this.shape_2.setTransform(172.425,92.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgzA8QgRgRAAgdIAAhbIAhAAIAABaQAAAQAJAKQAKAKAQAAQARAAAKgKQAJgKAAgQIAAhaIAhAAIAABbQAAAdgRARQgSASgiAAQghAAgSgSg");
	this.shape_3.setTransform(157.125,92.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag4A5QgXgXAAgiQAAgiAXgWQAWgWAigBQAjABAXAWQAWAWAAAiQAAAigWAXQgXAXgjgBQgiABgWgXgAghgjQgNAOABAVQgBAVANAPQANAPAUAAQAVAAANgPQAMgPAAgVQAAgVgMgOQgNgOgVAAQgUAAgNAOg");
	this.shape_4.setTransform(141.45,92.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAZBNIgdg3IgYAAIAAA3IghAAIAAiZIBHAAQAXAAAPAOQANAOAAAWQAAATgKALQgJALgOADIAiA7gAgcgFIAhAAQAKAAAGgGQAHgGAAgJQAAgKgHgFQgGgGgKAAIghAAg");
	this.shape_5.setTransform(127.125,92.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAqBNIgJgaIhBAAIgJAaIglAAIA6iZIApAAIA6CZgAAYAWIgYhBIgXBBIAvAAg");
	this.shape_6.setTransform(113.05,92.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag/A3IASgaQAVAVAcAAQAMAAAIgFQAGgFAAgHQAAgJgOgEIgdgIQgUgGgLgHQgOgLABgUQgBgUARgNQAQgNAZAAQAlAAAWAVIgSAYQgRgQgaAAQgWAAAAAPQAAAHAOAFQAIADAWAFQATAFALAJQANAKAAAUQAAAWgPANQgRAOgdAAQgoAAgZgYg");
	this.shape_7.setTransform(95.3,92.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAZBNIgdg3IgYAAIAAA3IghAAIAAiZIBHAAQAXAAAPAOQANAOAAAWQAAATgKALQgJALgOADIAiA7gAgcgFIAhAAQAKAAAGgGQAHgGAAgJQAAgKgHgFQgGgGgKAAIghAAg");
	this.shape_8.setTransform(82.975,92.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag4A5QgXgXAAgiQAAgiAXgWQAWgWAigBQAjABAWAWQAXAWAAAiQAAAigXAXQgWAXgjgBQgiABgWgXgAghgjQgMAOAAAVQAAAVAMAPQANAPAUAAQAVAAANgPQAMgPAAgVQAAgVgMgOQgNgOgVAAQgUAAgNAOg");
	this.shape_9.setTransform(68,92.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPBNIAAh8IgtAAIAAgdIB5AAIAAAdIgsAAIAAB8g");
	this.shape_10.setTransform(54.025,92.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgwA6QgYgXAAgjQAAgiAYgWQAXgXAiAAQArAAAVAmIgcAOQgFgKgKgGQgKgHgLABQgUAAgOAOQgNAOAAAVQAAAVANAPQAOAPAUAAQALgBAKgGQAKgGAFgKIAcAOQgVAmgrgBQgiAAgXgVg");
	this.shape_11.setTransform(41.125,92.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag4A5QgXgXAAgiQAAgiAXgWQAWgWAigBQAjABAXAWQAWAWAAAiQAAAigWAXQgXAXgjgBQgiABgWgXgAghgjQgMAOgBAVQABAVAMAPQANAPAUAAQAVAAANgPQAMgPAAgVQAAgVgMgOQgNgOgVAAQgUAAgNAOg");
	this.shape_12.setTransform(25.8,92.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhGBNIAAiZIA8AAQAkAAAXAVQAWAWAAAhQAAAjgWAVQgXAVgjAAgAglAwIAbAAQAWAAANgOQANgOAAgUQAAgUgNgNQgNgOgVAAIgcAAg");
	this.shape_13.setTransform(10.6,92.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgPBNIAAh8IgtAAIAAgdIB5AAIAAAdIgsAAIAAB8g");
	this.shape_14.setTransform(204.425,73.475);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag+A3IASgaQATAVAcAAQANAAAHgFQAHgFAAgHQAAgJgOgEIgdgIQgVgGgJgHQgOgLgBgUQABgUAQgNQAPgNAaAAQAlAAAWAVIgSAYQgRgQgaAAQgWAAAAAPQAAAHAOAFQAIADAWAFQATAFAKAJQAPAKAAAUQAAAWgQANQgQAOgeAAQgoAAgYgYg");
	this.shape_15.setTransform(192.25,73.525);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag1BNIAAiZIBrAAIAAAdIhKAAIAAAgIBJAAIAAAcIhJAAIAAAjIBKAAIAAAdg");
	this.shape_16.setTransform(180.5,73.475);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag/BNIAAiZIBQAAQAVAAAMAMQALALAAAQQAAAOgIAKQgHAJgMADQANABAJAKQAIALAAAOQAAASgMAMQgMAMgUAAgAgeAwIApAAQAUAAAAgSQAAgHgGgFQgEgFgKAAIgpAAgAgegPIAoAAQAIAAAFgEQAFgEgBgIQABgHgFgEQgFgFgIAAIgoAAg");
	this.shape_17.setTransform(167.75,73.475);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag1BNIAAiZIBsAAIAAAdIhMAAIAAAgIBKAAIAAAcIhKAAIAAAjIBMAAIAAAdg");
	this.shape_18.setTransform(150.5,73.475);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAlBNIAAhBIhIAAIAABBIghAAIAAiZIAhAAIAAA9IBIAAIAAg9IAgAAIAACZg");
	this.shape_19.setTransform(136.65,73.475);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgPBNIAAh8IgtAAIAAgdIB5AAIAAAdIgsAAIAAB8g");
	this.shape_20.setTransform(123.075,73.475);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgPBNIAAh8IgtAAIAAgdIB5AAIAAAdIgsAAIAAB8g");
	this.shape_21.setTransform(106.825,73.475);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAlBNIhIhjIAABjIghAAIAAiZIAiAAIBGBgIAAhgIAhAAIAACZg");
	this.shape_22.setTransform(93.275,73.475);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAqBNIgJgaIhAAAIgKAaIgmAAIA8iZIAoAAIA6CZgAAYAWIgYhBIgXBBIAvAAg");
	this.shape_23.setTransform(78.55,73.475);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAbBNIgbhpIgZBpIgjAAIgsiZIAlAAIAaBuIAdhuIAZAAIAdBuIAbhuIAkAAIgsCZg");
	this.shape_24.setTransform(61.65,73.475);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgzA8QgRgRAAgdIAAhbIAhAAIAABaQAAAQAJAKQAKAKAQAAQARAAAKgKQAJgKAAgQIAAhaIAhAAIAABbQAAAdgRARQgSASgiAAQghAAgSgSg");
	this.shape_25.setTransform(39.775,73.625);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag4A5QgXgXAAgiQAAgiAXgWQAWgWAigBQAjABAXAWQAWAWAAAiQAAAigWAXQgXAXgjgBQgiABgWgXgAghgjQgNAOAAAVQAAAVANAPQANAPAUAAQAVAAANgPQAMgPAAgVQAAgVgMgOQgNgOgVAAQgUAAgNAOg");
	this.shape_26.setTransform(24.1,73.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgPBNIAAg/Ig7haIAlAAIAlA+IAmg+IAlAAIg7BaIAAA/g");
	this.shape_27.setTransform(9.425,73.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1, new cjs.Rectangle(0,61,289.9,46), null);


(lib.CTA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAeA5Ig6hQIAABQIgUAAIAAhxIAUAAIA5BOIAAhOIAUAAIAABxg");
	this.shape.setTransform(68.425,13.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmA5IAAhxIBNAAIAAASIg5AAIAAAdIA4AAIAAARIg4AAIAAAfIA5AAIAAASg");
	this.shape_1.setTransform(57.775,13.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgmA5IAAhxIBNAAIAAASIg5AAIAAAdIA4AAIAAARIg4AAIAAAfIA5AAIAAASg");
	this.shape_2.setTransform(48.175,13.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgsApIALgQQAPAQAUAAQAMAAAGgFQAFgEAAgHQAAgHgLgFIgVgGQgQgEgHgFQgKgIAAgOQAAgPALgJQAMgKARAAQAaAAAQAQIgLAPQgNgNgTAAQgIAAgGAEQgFAEAAAGQAAAHAKAEIAWAHQAPAEAIAFQAKAIAAAPQAAAPgKAJQgMALgWAAQgcAAgRgSg");
	this.shape_3.setTransform(38.225,13.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgmA5IAAhxIBNAAIAAASIg5AAIAAAdIA4AAIAAARIg4AAIAAAfIA5AAIAAASg");
	this.shape_4.setTransform(24.575,13.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgsA5IAAhxIA3AAQAPAAAJAJQAIAIAAAMQAAAKgGAIQgGAHgIABQAJABAHAIQAGAIAAAKQAAAOgIAIQgJAJgQAAgAgYAnIAfAAQAJAAAEgEQAFgEAAgIQAAgGgFgFQgEgEgJAAIgfAAgAgYgJIAfAAQAHAAAEgEQAEgEAAgHQAAgGgEgEQgEgEgHAAIgfAAg");
	this.shape_5.setTransform(14.425,13.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F7921E").s().p("Ak6CCQgqAAgdgeQgdgcAAgqIAAg7QAAgqAdgdQAdgdAqAAIJ1AAQApAAAdAdQAeAdAAAqIAAA7QAAAqgeAcQgdAegpAAg");
	this.shape_6.setTransform(41.5,13);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(0,0,83,26), null);


(lib.BUG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FB842D").s().p("AgiK3IAA1tIBFAAIAAVtg");
	this.shape.setTransform(385.8,69.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhrB+IAAj7IBWgBQA5AAAkAlQAkAjAAA2QAAA3gkAjQgkAkg4AAgAhMhhIAADDIA4AAQArAAAbgdQAZgbAAgqQAAgpgYgbQgcgegsAAg");
	this.shape_1.setTransform(273.25,91.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhSh9IClAAIAAAcIiGAAIAABRICDAAIAAAbIiCAAIAABXICFAAIAAAcIilABg");
	this.shape_2.setTransform(249.15,91.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPB/IAAjgIhPAAIgBgcIC/AAIAAAcIhQAAIAADgg");
	this.shape_3.setTransform(227.1,91.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhZB/IgBj8IBmAAQAkgBAWAXQAUAVAAAhQAAAggUAUQgWAXgkAAIhFAAIAABlgAg5gBIBAAAQAXAAAOgOQAOgNAAgVQAAgWgOgNQgOgNgXAAIhBAAg");
	this.shape_4.setTransform(206.05,91.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhSh+IClAAIAAAcIiFAAIAABSICCAAIAAAbIiCAAIAABXICFAAIAAAcIilAAg");
	this.shape_5.setTransform(183.75,91.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhKBfQgmglAAg6QAAg4AmglQAkglA2AAQA+AAAjAyIgbAPQgLgRgSgJQgTgLgWAAQgoAAgcAdQgbAdAAAsQAAAtAbAdQAcAdAoAAQAWAAATgLQASgKALgQIAbAPQglAyg8AAQg2AAgkgkg");
	this.shape_6.setTransform(160.1497,91.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhLBfQglglAAg6QAAg4AlglQAlglA2AAQA+AAAjAyIgbAPQgLgQgSgKQgTgLgWAAQgpABgbAcQgcAdAAAsQAAAtAcAdQAcAdAoAAQAWAAATgKQASgKALgRIAbAPQglAyg8AAIgCAAQg0AAglgkg");
	this.shape_7.setTransform(134.525,91.6753);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABWB/IgWg5Ih/ABIgWA4IgjAAIBlj8IAmAAIBmD8gAg2ArIBsgBIg2iLg");
	this.shape_8.setTransform(110.225,91.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AheBaIASgYQAgAkAvAAQAfAAAQgOQANgMAAgRQAAgVgUgLQgMgGgggKQgpgLgRgJQgbgRAAghQAAgfAYgUQAZgUAlAAQA4AAAhAkIgTAXQgbgfgtAAQgXAAgOAMQgPALAAASQAAARATAKQALAGAfAIQAqAMASAKQAcATAAAjQAAAfgVAUQgZAXgvAAIgCABQg6AAgkgpg");
	this.shape_9.setTransform(334.675,46.0503);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABKB/IiSjMIAADMIggAAIAAj8IAgAAICRDHIAAjHIAfAAIABD8g");
	this.shape_10.setTransform(310.325,46.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ABWB+IgWg4Ih/AAIgWA4IgjAAIBlj7IAmAAIBmD7gAg2AqIBtAAIg3iLg");
	this.shape_11.setTransform(284.425,46.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhKh+IAgAAIAADgIB1AAIAAAcIiUAAg");
	this.shape_12.setTransform(263.025,46.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhZB+IAAj8IBlAAQAkABAWAWQAUAWABAgQgBAggUAVQgWAWgkAAIhGAAIAABkgAg6hhIAABgIBBAAQAXAAAOgNQAOgOAAgVQAAgVgOgOQgOgOgXAAg");
	this.shape_13.setTransform(242.35,46.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhSh9IClAAIAAAcIiFAAIAABRICCAAIAAAbIiCAAIAABXICFAAIAAAcIilABg");
	this.shape_14.setTransform(210.275,46.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AA3B/IhAhlIgyAAIAABlIggAAIAAj8IBlAAQAjgBAWAVQAWAVAAAiQAAAhgUATQgSATgbACIBEBogAg7AAIBBAAQAXAAAOgOQANgOAAgVQAAgWgOgNQgOgNgWAAIhBAAg");
	this.shape_15.setTransform(188.125,46.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ABXB+IgXg4Ih/AAIgWA4IgjAAIBlj7IAmAAIBmD7gAg2AqIBtAAIg3iLg");
	this.shape_16.setTransform(163.525,46.175);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhKBfQgmgmAAg5QAAg5AmglQAkgkA2AAQA9AAAkAyIgbAPQgLgQgSgKQgUgLgVAAQgoAAgcAdQgcAdAAAsQAAAsAcAeQAcAdAoAAQAWAAATgLQASgKAMgQIAaAPQglAyg8AAQg2AAgkgkg");
	this.shape_17.setTransform(138.8,46.225);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgPB+IAAj8IAfAAIAAD8g");
	this.shape_18.setTransform(121.025,46.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhrB+IAAj7IBWAAQA5AAAlAkQAjAjAAA2QAAA3gjAjQgkAkg5AAgAhLBiIA3AAQArAAAbgcQAagcgBgqQAAgpgZgbQgagdgtAAIg3AAg");
	this.shape_19.setTransform(103.725,46.225);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhRB/IgBj8ICkAAIAAAcIiFAAIAABRICDAAIAAAbIiDAAIAABYICGgBIAAAdg");
	this.shape_20.setTransform(79.65,46.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("ABcB/IAAjSIhWDSIgLAAIhWjRIAADRIggAAIAAj8IAtAAIBOC/IBPi/IAtAAIAAD8g");
	this.shape_21.setTransform(53.075,46.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FB842D").s().p("AhrB/IAAj8IBXAAQA4AAAkAkQAkAkAAA2QAAA2gkAkQgkAjg4ABgAhLBjIA3AAQArAAAbgdQAZgbAAgqQABgqgZgbQgbgdgsAAIg3AAg");
	this.shape_22.setTransform(273.35,92.85);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FB842D").s().p("AhSB/IAAj8IClAAIAAAcIiFAAIAABSICCAAIAAAaIiCAAIAABYICFAAIAAAcg");
	this.shape_23.setTransform(249.25,92.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FB842D").s().p("AgPB/IAAjgIhQAAIAAgcIC/AAIAAAcIhRAAIAADgg");
	this.shape_24.setTransform(227.225,92.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FB842D").s().p("AhaB/IAAj8IBmAAQAkAAAWAWQAUAVAAAhQAAAggUAUQgWAXgkAAIhGAAIAABlgAg6gBIBBAAQAXAAAOgOQAOgNAAgVQAAgWgOgNQgOgNgXAAIhBAAg");
	this.shape_25.setTransform(206.15,92.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FB842D").s().p("AhSB/IAAj8IClAAIAAAcIiFAAIAABSICCAAIAAAaIiCAAIAABYICFAAIAAAcg");
	this.shape_26.setTransform(183.825,92.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FB842D").s().p("AhLBfQglgmAAg5QAAg4AlglQAlglA2AAQA+AAAjAyIgbAPQgLgQgSgKQgTgLgWAAQgoAAgbAdQgcAdAAAsQAAAtAcAdQAbAdAoAAQAWAAATgKQASgKALgRIAbAPQglAyg8AAQg2AAglgkg");
	this.shape_27.setTransform(160.225,92.875);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FB842D").s().p("AhLBfQglglAAg6QAAg4AlglQAlglA2AAQA+AAAjAyIgbAPQgLgQgSgKQgTgLgWAAQgoAAgcAdQgcAdAAAsQAAAtAcAdQAcAdAoAAQAWAAATgKQASgKALgRIAbAPQglAyg8AAQg2AAglgkg");
	this.shape_28.setTransform(134.625,92.875);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FB842D").s().p("ABWB/IgWg4Ih/AAIgWA4IgjAAIBlj8IAnAAIBmD8gAg2AqIBsAAIg2iLg");
	this.shape_29.setTransform(110.3,92.85);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FB842D").s().p("AheBaIASgXQAhAkAuAAQAfAAAPgPQANgMABgRQAAgUgUgMQgMgHgfgJQgqgLgRgJQgbgRAAghQAAgfAZgUQAYgUAlAAQA4AAAiAkIgTAXQgcgfgsAAQgXAAgPAMQgOALAAASQAAARASAKQAMAGAeAIQAqAMARAKQAdATAAAjQAAAfgVAUQgZAYgvAAQg8AAgkgpg");
	this.shape_30.setTransform(334.8,47.425);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FB842D").s().p("ABKB/IiTjMIAADMIgeAAIAAj8IAfAAICRDGIAAjGIAgAAIAAD8g");
	this.shape_31.setTransform(310.45,47.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FB842D").s().p("ABWB/IgWg5Ih/AAIgXA5IgiAAIBlj8IAmAAIBmD8gAg2AqIBsAAIg2iLg");
	this.shape_32.setTransform(284.575,47.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FB842D").s().p("AhKB/IAAj8IAgAAIAADfIB1AAIAAAdg");
	this.shape_33.setTransform(263.15,47.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FB842D").s().p("AhaB/IAAj8IBlAAQAlAAAWAWQAUAVAAAgQABAhgWAUQgWAXgkAAIhFAAIAABlgAg6gBIBBAAQAXAAAOgOQAOgNAAgWQAAgVgOgNQgOgNgXAAIhBAAg");
	this.shape_34.setTransform(242.5,47.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FB842D").s().p("AhSB/IAAj8IClAAIAAAcIiGAAIAABRICDAAIAAAbIiDAAIAABXICGAAIAAAdg");
	this.shape_35.setTransform(210.425,47.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FB842D").s().p("AA2B/Ig/hlIgyAAIAABlIggAAIAAj8IBlAAQAjAAAWAUQAWAVAAAiQAAAhgUATQgSATgcACIBFBogAg7gBIBBAAQAWAAAOgOQAOgNAAgWQAAgVgOgNQgOgNgWAAIhBAAg");
	this.shape_36.setTransform(188.275,47.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FB842D").s().p("ABWB/IgWg5Ih/AAIgXA5IgiAAIBlj8IAmAAIBmD8gAg2AqIBsAAIg2iLg");
	this.shape_37.setTransform(163.675,47.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FB842D").s().p("AhLBfQglgmAAg5QAAg4AlgmQAlgkA2AAQA+AAAjAyIgbAPQgLgRgSgJQgTgLgWAAQgoAAgbAdQgcAdAAAsQAAAsAcAeQAbAdAoAAQAWAAATgLQASgKALgQIAbAPQglAyg8AAQg2AAglgkg");
	this.shape_38.setTransform(138.925,47.425);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FB842D").s().p("AgPB/IAAj8IAfAAIAAD8g");
	this.shape_39.setTransform(121.175,47.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FB842D").s().p("AhrB/IAAj8IBWAAQA6AAAkAkQAjAkAAA1QAAA3gjAkQgkAjg6ABgAhMBiIA3AAQAsAAAbgdQAagbgBgqQAAgqgZgbQgagcgtAAIg3AAg");
	this.shape_40.setTransform(103.85,47.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FB842D").s().p("AhSB/IAAj8IClAAIAAAcIiFAAIAABRICCAAIAAAbIiCAAIAABXICFAAIAAAdg");
	this.shape_41.setTransform(79.775,47.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FB842D").s().p("ABcB/IAAjSIhWDSIgMAAIhVjSIAADSIggAAIAAj8IAtAAIBOC/IBPi/IAtAAIAAD8g");
	this.shape_42.setTransform(53.225,47.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#004D7E").s().p("A+YK3IAA1tMA8xAAAIAAVtg");
	this.shape_43.setTransform(194.5,69.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BUG, new cjs.Rectangle(0,0,389.3,139), null);


// stage content:
(lib.TEC204_Display_Refresh_B1_1stTouch_320x50 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,247];
	// timeline functions:
	this.frame_0 = function() {
		//if(!this.alreadyyExecuted){
		//this.alreadyyExecuted=true;
		//	this.clickthru_btn.on("click", function(evt){
		//  window.open(clickTag, "_blank");
		//});
		//} else {
		//gotoAndPlay(2);
		//}
	}
	this.frame_247 = function() {
		//if(!this.alreadyExecuted){
		//this.alreadyExecuted=true;
		//this.loopNum=1;
		//} else {
		//this.loopNum++;
		//if(this.loopNum==2){
		this.stop();
		//}
		//}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(247).call(this.frame_247).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A46j0MAx1AAAIAAHpMgx1AAAg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(248));

	// HEAD1
	this.instance = new lib.HEAD1();
	this.instance.setTransform(94.25,-10.9,1,1,0,0,0,90.2,47.5);
	this.instance.shadow = new cjs.Shadow("rgba(247,146,30,1)",2,2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},71).wait(177));

	// TAG
	this.instance_1 = new lib.TAG();
	this.instance_1.setTransform(400.4,24,1,1,0,0,0,88.4,11);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23).to({_off:false},0).to({x:318.4},13,cjs.Ease.quadOut).to({_off:true},35).wait(177));

	// BUG
	this.instance_2 = new lib.BUG();
	this.instance_2.setTransform(69.75,24.8,0.3558,0.3558,0,0,0,194.7,69.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(71).to({_off:false},0).wait(177));

	// LOGO
	this.instance_3 = new lib.TEC_logo();
	this.instance_3.setTransform(289.85,25.25,0.3214,0.3214,0,0,0,0.3,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(71).to({_off:false},0).wait(177));

	// CTA
	this.instance_4 = new lib.CTA();
	this.instance_4.setTransform(-40.1,25.4,1,1,0,0,0,41.5,13);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(71).to({_off:false},0).to({x:200.1},7,cjs.Ease.quadOut).wait(170));

	// bkgd
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#164D7E").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_1.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(248));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(78.4,24.5,326.70000000000005,32.1);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 320,
	height: 50,
	fps: 24,
	color: "#333333",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0957C5EC3B874C629166840920B09671'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;