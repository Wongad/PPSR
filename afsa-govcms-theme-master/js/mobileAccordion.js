(function($,Drupal,window,document,undefined){'use strict';let headerClasses=['ui-accordion-header','ui-helper-reset','ui-state-default'];let bodyClasses=['ui-accordion-content','ui-helper-reset','ui-widget-content'];let resetAccordion=function(){let $body=$('article.view-mode-full h2:not(.element-invisible)').parent();$body.find('.ui-accordion-content').children().unwrap().removeClass(bodyClasses.join(' '));$body.find('h2:not(.element-invisible)').css("display","block").removeClass(headerClasses.join(' '));$('.extra').remove()}
Drupal.afsaResponsive.addAction('mobile',function(){let $body=$('article.view-mode-full .field-name-body h2:not(.element-invisible)').parent();if($body.length===0){return}
$body.find('h2:not(.element-invisible)').each(function(){let $set=$(this).nextUntil('h2:not(.element-invisible)');$set.wrapAll($('<div />',{class:bodyClasses.join(' '),style:'display:none'}));$(this).addClass(headerClasses.join(' ')).prepend('<i class="extra fa fa-chevron-circle-down" aria-hidden="true" style="position:absolute;margin: 0 -1em;"></i>')}).click(function(){$(this).next('.ui-accordion-content').slideToggle();$('i',this).toggleClass('fa-chevron-circle-down fa-chevron-circle-up')})});Drupal.afsaResponsive.addAction('tablet',resetAccordion);Drupal.afsaResponsive.addAction('desktop',resetAccordion)})(jQuery,Drupal,this,this.document)