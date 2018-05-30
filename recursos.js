jQuery(this).closest('.cuadro-psd').animate({ height: jQuery(this).closest('.cuadro-psd').get(0).scrollHeight}, 800, function(){
    jQuery(this).closest('.cuadro-psd').height('auto');
});