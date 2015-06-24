/*! adplugin - v0.0.0 - 2015-6-23
 * Copyright (c) 2015 cuerposaco
 * Licensed under the Apache-2.0 license. */
(function(window, videojs) {
  'use strict';

  var defaults = {
        option: true
      },
      adplugin;

  /**
   * Initialize the plugin.
   * @param options (optional) {object} configuration for the plugin
   */
  adplugin = function(options) {
    var settings = videojs.util.mergeOptions(defaults, options);
    var player = this;

    adServer( player.el().getAttribute('id') );

    // TODO: write some amazing plugin code
  };

  function adServer(container){
    //var container = 'myContainer';
    var playerId = container;
    var pluginConfigFile = 'http://gallery.smartadserver.com/demo_instream_video/config_file.json';
    var pluginFile = 'http://r.sascdn.com/video/jwplayer-plugin.swf?nwid=92';
    var pluginLang = 'ES';
       // Smart variables
    var sasvideoData = {
        'sas_siteid': '55181',
        'sas_pageid': '428622',
        'sas_pagename': 'pre_mid_postroll',
        'sas_target': '',
        'sas_format_linears':'26242,26243,26244',
        'sas_format_overlays':'26254'
    }
    // Plugin configuration
    // Loading configuration file
    sas_adplayer.loadConfig("http://gallery.smartadserver.com/demo_instream_video/config_file.json");
    // Changing language
    sas_adplayer.setLang(pluginLang);
    // Player ready
    // Registering the player
    sas_adplayer.registerPlayer(playerId, sasvideoData);

  }

  // register the plugin
  videojs.plugin('adplugin', adplugin);
})(window, window.videojs);
