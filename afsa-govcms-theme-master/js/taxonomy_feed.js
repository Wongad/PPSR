var $jq=jQuery.noConflict();$jq(document).ready(function(){$jq('.rwd-table').attr('data-autogen-headers','true');$jq('.toc-filter .item-list:not(:has(>h3))').prepend('<h3>Table of contents</h3>');if($jq("[id^='divRss']").length==0){}
else{var taxw=$jq("[id^='divRss']").attr('id');var lastnum=taxw.split("-").pop();$jq('#divRss-'+lastnum).FeedEk({FeedUrl:location.protocol+'//'+location.hostname+'/taxonomy/term/'+lastnum+'/feed',ShowPubDate:!1,})}
$jq(function showURL(){$jq('ul.selectdropdown').each(function(){var select=$jq(document.createElement('select')).insertBefore($jq(this).hide());$jq('>li a',this).each(function(){var a=$jq(this).click(function(){if($jq(this).attr('target')==='_blank'){window.open(this.href)}
else{window.location.href=this.href}}),option=$jq(document.createElement('option')).appendTo(select).val(this.href).html($jq(this).html()).click(function(){a.click()})})})})})
