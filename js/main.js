clonq_revo_ui_bootstrap = {
	init: function(config) {
		var config = config || {};
		if(config.load) revo.load({component:config.load})
		if(config.remove) $(config.remove).remove();
	}
}
