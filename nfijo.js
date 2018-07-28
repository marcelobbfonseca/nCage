(function() {
	//nCage 
	var main = function($) { 
		
		var self = $.nCage = new function(){};
		
		$.extend(self, {
			nCageImgs : [
			//fijo imgs	
			'https://i.kym-cdn.com/entries/icons/original/000/003/047/omg.jpg',
			'https://i.kym-cdn.com/photos/images/original/000/439/396/31b.png',
			'https://i.kym-cdn.com/photos/images/original/000/394/835/377.jpg',
			'https://i.kym-cdn.com/photos/images/original/000/691/346/f84.gif',
			'https://www.meme-arsenal.com/memes/53660151c36ae1c13d9b04b198cb9aba.jpg',
			'https://www.meme-arsenal.com/memes/76861ce47fe08d299a80a3898cdee1da.jpg',
			'https://www.meme-arsenal.com/memes/f87306162e1a94aa5dad938f0a9d1efb.jpg',
			'https://www.meme-arsenal.com/memes/a5be80175a58bbb64ec84e1604d4831d.jpg',
			'https://img00.deviantart.net/9ef9/i/2009/122/b/3/adonis_calamardo_by_sergevirusx.jpg',
			'https://coubsecure-s.akamaihd.net/get/b131/p/coub/simple/cw_timeline_pic/5f683280f4a/97eb55a89f9426eb9b1f6/med_1473937413_image.jpg',
			'https://cdn.shopify.com/s/files/1/1749/2495/products/HandsomeSquidwardHoodie_2000x.jpg?v=1523538344',
			'https://static1.squarespace.com/static/52293fbde4b054f0e184d15f/55768047e4b03d1ffbe5a477/58fadb75bf629ab224d9707a/1492835191109/CRUX-WEB-handsome-squidward_stickers-3-800.jpg?format=750w',
			//+14

			],
			handleImages : function (lstImgs, time)
			{
				$.each($('img'), function(i,item) { 
					//Skip if image is already replaced
					if($.inArray($(item).attr('src'), lstImgs) == -1)
					{
						var h = $(item).height();
						var w = $(item).width();
						
						//If image loaded
						if(h > 0 && w > 0)
						{
							//Replace
							$(item).css('width', w + 'px').css('height', h + 'px');
							$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
						}
						else
						{
							//Replace when loaded
							$(item).load(function(){
								//Prevent 'infinite' loop
									if($.inArray($(item).attr('src'), lstImgs) == -1)
									{
										var h = $(item).height();
										var w = $(item).width();
										$(item).css('width', w + 'px').css('height', h + 'px');
										$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
									}
								});
							}
						}
					});
					
					//Keep replacing
					if(time > 0)
						setTimeout(function(){self.handleImages(lstImgs, time);},time);
				}
			});

		//Run on jQuery ready
		$(function(){
			self.handleImages(self.nCageImgs, 3000);
		});
	};

	//Method to load jQuery
	function loadJS(src, callback) {
		var s = document.createElement('script');
		s.src = src;
		s.async = true;
		s.onreadystatechange = s.onload = function() {
			var state = s.readyState;
			if (!callback.done && (!state || /loaded|complete/.test(state))) {
				callback.done = true;
				callback();
			}
		};
		document.getElementsByTagName('head')[0].appendChild(s);
	}
	
	//Add jQuery if not present, then run main
	if(typeof jQuery == 'undefined') {
		loadJS(('https:' == document.location.protocol ? 'https://' : 'http://') + 'ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js', function(){
			jQuery.noConflict();
			main(jQuery);
		});
	}else {
		main(jQuery);
	}
 })();
 
 