
function Gem(num){
	var self = this;
	base(self,LSprite,[]);
	self.num = num;
	//self.graphics.drawRect(1,"black",[0, 0, 60, 60]);
	self.bitmap = new LBitmap(new LBitmapData(datalist["gem0"+num]));
	//bitmap.alpha = Math.random() > 0.5 ? 1:0.5;
	self.bitmap.x=self.bitmap.y=10;
	self.addChild(self.bitmap);
	
}
Gem.prototype.change = function (num){
	var self = this;
	self.num = num;
	self.bitmap.bitmapData = new LBitmapData(datalist["gem0"+num]);
}