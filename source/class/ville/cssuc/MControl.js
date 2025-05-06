qx.Mixin.define("ville.cssuc.MControl",
    {      
      properties : {
        excludeBoundsFromDom: {
          check: "Boolean",
          init: true,
          themeable: true
        },

        excludeBoundsFromDomMods: {
          check: "Array",
          nullable: true,
          init: null,
          themeable: true
        }
      }
});