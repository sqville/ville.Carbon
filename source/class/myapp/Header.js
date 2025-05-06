/* ************************************************************************



************************************************************************ */
/**
 * The Application's header
 */

qx.Class.define("myapp.Header", {
  extend: qx.ui.container.Composite,

  construct() {
    super();

    this.setLayout(new qx.ui.layout.HBox());
    this.setCursor(null);
    this.setCssUtilityClass("cds--header");

    // Add Logo here
   //var title = new qx.ui.container.Composite(new qx.ui.layout.HBox());

    // Logged in users Organization
    var orglabel = new myapp.components.Link("Qooxdoo + IBM Carbon Styles");
    orglabel.addListener("click", () => {
      this.__main.setSelection([this.__main.getChildren()[0]]);
    });
    orglabel.setCssUtilityClass("cds--header__name");

    var headnav = new qx.ui.container.Composite(new qx.ui.layout.Basic());
    headnav.getContentElement().setNodeName("nav");
    headnav.setCssUtilityClass("cds--header__nav");
    var headnavcontentsbox = new qx.ui.container.Composite(new qx.ui.layout.Basic());
    headnavcontentsbox.getContentElement().useMarkup(`<ul class="cds--header__menu-bar"></ul>`);
    headnav.add(headnavcontentsbox);
    var headnavcontentsitem = new qx.ui.container.Composite(new qx.ui.layout.Basic());
    headnavcontentsitem.getContentElement().useMarkup(`<li></li>`);
    headnavcontentsbox.add(headnavcontentsitem);

    var tablepagelink = new myapp.components.Link("Table Page");
    tablepagelink.setCssUtilityClass("cds--header__menu-item");
    tablepagelink.addListener("click", () => {
      this.__main.setSelection([this.__main.getChildren()[1]]);
    });
    headnavcontentsitem.add(tablepagelink);

    // assemble the header  
    this.add(orglabel);
    this.add(headnav);
  },

  members : {
    
    __main : null,
    
    // overridden
    _createContentElement() {
      return new qx.html.Element("header");
    },

    refMain(main) {
      this.__main = main;
    }
  }
});
