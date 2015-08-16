clonq_revo_ui_bootstrap = {
	init: function(config) {
		var config = config || {};
		// if(config.load) setTimeout(function() { revo.load({component:config.load}) }, 1000);
		if(config.load) revo.load({component:config.load});
		if(config.remove) $(config.remove).remove();
	}
}
