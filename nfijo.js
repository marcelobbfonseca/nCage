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
			'https://i.pinimg.com/originals/a1/db/4e/a1db4ec2ac945e7fb743b210e1c69796.gif',
			'https://i.kym-cdn.com/photos/images/original/000/059/683/Skweedward_Is_SO_Handsome_by_iSakubomb.png',
			'https://i.pinimg.com/236x/b6/a2/7a/b6a27a3d0a41981296553c2260a58b9a--squidward-tentacles-cartoon-characters.jpg',
			'https://78.media.tumblr.com/7fdb437d4ed53bf0e00e3034020e6986/tumblr_o0cghpKb3U1snyb10o1_500.png',
			'https://orig00.deviantart.net/3008/f/2011/234/c/9/handsome_soldier_by_pinkstarangel_x-d47grw5.png',
			'https://i.kym-cdn.com/photos/images/original/000/180/261/aee.jpg',
			'https://scontent.fbsb3-1.fna.fbcdn.net/v/t1.0-9/10522096_798653753489080_2389378803438467078_n.jpg?_nc_cat=0&oh=f8b7f4b4307339f6714e7314e334626c&oe=5C11E8E0',
			'https://pre00.deviantart.net/980f/th/pre/f/2014/002/1/4/handsome_squidward_magikarp_by_sagejellyfish-d70iaqb.png',
			'https://78.media.tumblr.com/de9fc9a010256fdf512e822d8be395b2/tumblr_owcndyo9Iw1r6l5hao1_500.png',
			'https://i.kym-cdn.com/photos/images/newsfeed/000/158/108/877.png',
			'https://i.kym-cdn.com/photos/images/newsfeed/000/172/688/9cd.jpg',
			'http://78.media.tumblr.com/tumblr_m0cnccel3G1r62ekio5_r1_500.jpg',
			'https://pbs.twimg.com/profile_images/604923765806350337/HfXfLeNL.jpg',
			'https://www.pngkey.com/png/detail/183-1831529_handsome-squidward-squidward-falling-image-mlp-rainbow-dash.png',
			'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/d21bfd9c-8760-49f2-8a0b-be682df5a9f3/d97gm8o-51b8f90f-3dac-477f-8dc7-206652f1ab76.png',
			'http://pixelartmaker.com/art/23247f1f55533d3.png',
			'https://cdn.drawception.com/images/panels/2016/6-27/yFxEGh8d2h-2.png',
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
 
 
