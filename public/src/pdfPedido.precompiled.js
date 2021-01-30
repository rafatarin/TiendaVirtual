(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['pdfPedido'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<script>const url = \"../pdfs/"
    + alias4(((helper = (helper = lookupProperty(helpers,"pedido") || (depth0 != null ? lookupProperty(depth0,"pedido") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pedido","hash":{},"data":data,"loc":{"start":{"line":2,"column":29},"end":{"line":2,"column":39}}}) : helper)))
    + ".pdf\"</script>\n   <div id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"pedido") || (depth0 != null ? lookupProperty(depth0,"pedido") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pedido","hash":{},"data":data,"loc":{"start":{"line":3,"column":12},"end":{"line":3,"column":22}}}) : helper)))
    + "\" class=\"top-bar\">\n      <button class=\"btn\" id=\"prev-page\">\n        <i class=\"fas fa-arrow-circle-left\"></i> Prev Page\n      </button>\n      <button class=\"btn\" id=\"next-page\">\n        Next Page <i class=\"fas fa-arrow-circle-right\"></i>\n      </button>\n      <span class=\"page-info\">\n        Page <span id=\"page-num\"></span> of <span id=\"page-count\"></span>\n      </span>\n    </div>\n    \n  <canvas id=\"pdf-render\"></canvas>\n  <script src=\"https://mozilla.github.io/pdf.js/build/pdf.js\"></script>\n    <script type=\"text/javascript\" src=\"../src/pdfPedido.js\"></script>\n\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"pedido") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":1},"end":{"line":19,"column":11}}})) != null ? stack1 : "")
    + "\n\n";
},"useData":true});
})();