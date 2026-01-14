qx.Class.define("myapp.pages.About", {
    extend: qx.ui.tabview.Page,

    construct() {
      super();

      // Page
      this.setLayout(new qx.ui.layout.Basic());

      const pagenameroot = "about";
      const pageurl = "/";
      const pageName = qx.lang.String.firstUp(pagenameroot);

      this.setLabel(pageName);
      this.setCssUtilityClass("cds--tab-content");
      this.setExcludeBoundsFromDom(true);
      this.setClearAllInlineStyles(true);

      // Page Button
      var pagebtn = this.getButton();
      pagebtn.setExcludeBoundsFromDom(true);
      pagebtn.setClearAllInlineStyles(true);
      var pagebtnlink = pagebtn.getContentElement();
      pagebtnlink.setNodeName("button");
      pagebtnlink.setAttribute("role", "tab");
      pagebtnlink.setAttribute("type", "button");
      pagebtn.getChildControl("label").setClearAllInlineStyles(true);

      // Page Group Area
      var pagegrouparea = new qx.ui.container.Composite(new qx.ui.layout.Basic());
      pagegrouparea.setExcludeBoundsFromDom(true);
      pagegrouparea.setClearAllInlineStyles(true);
      pagegrouparea.setCssUtilityClass("tabs-group-content cds--subgrid cds--subgrid--wide");

      // Page Group Landing and Content
      var pagegroupsubarea = new qx.ui.embed.Html();
      pagegroupsubarea.setCssUtilityClass("landing-page__tab-content cds--sm:col-span-4 cds--md:col-span-8 cds--lg:col-span-16 cds--css-grid-column");
      pagegroupsubarea.setExcludeBoundsFromDom(true);
      pagegroupsubarea.setClearAllInlineStyles(true);
      var pghtml = `<p class="landing-page__p">About needs content</p>`;
      pagegroupsubarea.setHtml(pghtml);

      // assemble the page
      pagegrouparea.add(pagegroupsubarea);
      this.add(pagegrouparea);
    }
  });
