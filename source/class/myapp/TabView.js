/* ************************************************************************


************************************************************************ */

qx.Class.define("myapp.TabView", {
  extend: qx.ui.tabview.TabView,

  construct() {
    super();

    // TabView
    this.setBarPosition("top");
    this.setExcludeBoundsFromDom(true);
    this.setClearAllInlineStyles(true);
    this.setCssUtilityClass("landing-page__r2 cds--sm:col-span-4 cds--md:col-span-8 cds--lg:col-span-16 cds--css-grid-column");

    // TabView > Slidebar
    var slidebar = this.getChildControl("bar");
    slidebar.setCssUtilityClass("cds--tabs tabs-group");
    slidebar.setExcludeBoundsFromDom(true);
    slidebar.setClearAllInlineStyles(true);
    var sbscrollpane = slidebar.getChildControl("scrollpane");
    sbscrollpane.setCssUtilityClass("cds--tab--list");
    sbscrollpane.setExcludeBoundsFromDom(true);
    sbscrollpane.setClearAllInlineStyles(true);
    sbscrollpane.getContentElement().setAttribute("role", "tablist");
    var sbcont = slidebar.getChildControl("content");
    sbcont.setCssUtilityClass("tabs-group-subcompsite");
    sbcont.setExcludeBoundsFromDom(true);
    sbcont.setClearAllInlineStyles(true);

    // TabView > Stack
    //var stack = this.getChildControl("pane");
    
    // Create pages
    var aboutpage = new myapp.pages.About();
    var designspage = new myapp.pages.Design();
    var developpage = new myapp.pages.Develop();
    
    // Add TabPages to the TabView
    this.add(aboutpage);
    this.add(designspage);
    this.add(developpage);
  }
});
