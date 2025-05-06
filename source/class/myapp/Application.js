/* ************************************************************************

   Copyright: 2025 undefined

   License: MIT license

   Authors: undefined

************************************************************************ */

/**
 * This is the main application class of "myapp"
 *
 * @asset(myapp/*)
 * @external(myapp/css/myapp.css)
 */
qx.Class.define("myapp.Application",
{
  extend : qx.application.Standalone,



  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    /**
     * This method contains the initial application code and gets called
     * during startup of the application
     *
     * @lint ignoreDeprecated(alert)
     */
    main()
    {
      // Call super class
      super.main();

      // Enable logging in debug variant
      if (qx.core.Environment.get("qx.debug"))
      {
        // support native logging capabilities, e.g. Firebug for Firefox
        qx.log.appender.Native;
        // support additional cross-browser console. Press F7 to toggle visibility
        qx.log.appender.Console;
      }

      if (qx.core.Environment.get("ville.cssuc")) {
        qx.Class.include(qx.ui.core.Widget, ville.cssuc.MCssUtilityClass);
      }  

      // Document is the application root
      const doc = this.getRoot();
      doc.setClearAllInlineStyles(true);
      doc.getContentElement().enableScrolling();

      // Header
      var headeranchor = new qx.ui.container.Composite(new qx.ui.layout.Basic());
      headeranchor.setCssUtilityClass("cds--g100 cds--layer-one");
      var header = new myapp.Header();
      headeranchor.add(header);

      // Main
      var main = new myapp.Main();

      header.refMain(main);

      doc.add(headeranchor);
      doc.add(main);
    }
  }
});
