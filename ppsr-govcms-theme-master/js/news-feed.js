(function($){
	$.fn.FeedEk=function(opt){var def=$.extend({MaxCount:2,ShowDesc:true,ShowPubDate:true,DescCharacterLimit:0,DateFormat:"dddd, D MMMM YYYY"},opt);
	var id=$(this).attr("id"),i,s="",dt;$("#"+id).empty();
		if(def.FeedUrl==undefined)return;
	$("#"+id).append('<h2><a href="http://news.ppsr.gov.au">PPSR Newsroom</a></h2><div id="cboxContent"><p>Loading feeds from PPSR Newsroom...</p><div id="cboxLoadingGraphic"></div></div>');
	var YQLstr='SELECT channel.item FROM feednormalizer WHERE output="rss_2.0" AND url ="'+def.FeedUrl+'" LIMIT '+def.MaxCount;
	$.ajax({url:"https://query.yahooapis.com/v1/public/yql?q="+encodeURIComponent(YQLstr)+"&format=json&diagnostics=false&callback=?",dataType:"json",success:function(data){
	$("#"+id).empty();
		if(!(data.query.results.rss instanceof Array))
			{data.query.results.rss=[data.query.results.rss];}
	$.each(data.query.results.rss,function(e,itm){
		s+='<h3 class="itemTitle"><a href="'+itm.channel.item.link+'">'+itm.channel.item.title+'</a>';
		if(def.ShowPubDate){
			mstring=['January','February','March','April','May','June','July','August','September','October','November','December'];
			dstring=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Undefined'];
			dt=new Date(itm.channel.item.pubDate);entrydatestr=''+dstring[dt.getDay()]+", "+dt.getDate()+" "+mstring[dt.getMonth()]+" "+dt.getFullYear();
			s+='<span style="font-size:.6em;color:#454B56;">';
			if($.trim(def.DateFormat).length>0){s+=entrydatestr;}s+='</span></h3>';
		}
		if(def.ShowDesc){
			s+='<p>';
			if(def.DescCharacterLimit>0&&itm.channel.item.description.length>def.DescCharacterLimit){
				s+=itm.channel.item.description.substring(0,def.DescCharacterLimit)+'...';
			}
			else{
				s+=itm.channel.item.description;
			}
			s+='</p>';
		}
	});
	$("#"+id).append('<h2><a href="http://news.ppsr.gov.au">PPSR Newsroom</a></h2><div class="feedEkList mobile-s">'+s+'</div>');
	$(".read-more").remove();
	}});
	};
})(jQuery);
