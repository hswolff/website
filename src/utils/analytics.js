function addChartbeat() {
  // Chartbeat
  window._sf_async_config = {};
  window._sf_async_config.domain = 'hswolff.com';
  window._sf_async_config.sections = 'blog';
  window._sf_async_config.uid = 47740;
  window._sf_async_config.useCanonical = true;

  (function() {
    function loadChartbeat() {
      window._sf_endpt = new Date().getTime();
      var e = document.createElement('script');
      e.setAttribute('language', 'javascript');
      e.setAttribute('type', 'text/javascript');
      e.setAttribute(
        'src',
        ('https:' == document.location.protocol ? 'https://' : 'http://') +
          'static.chartbeat.com/js/chartbeat.js'
      );
      document.body.appendChild(e);
    }
    var oldonload = window.onload;
    window.onload =
      typeof window.onload != 'function'
        ? loadChartbeat
        : function() {
          try {
            oldonload();
          } catch (e) {
            loadChartbeat();
            throw e;
          }
          loadChartbeat();
        };
  })();
}

if (process.env.NODE_ENV === 'production') {
  if (typeof window !== 'undefined') {
    addChartbeat();
  }
}
