(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['clientes'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n<div class=\"clientes\">\n<ul>	\n<li>Id_cliente: "
    + alias4(((helper = (helper = lookupProperty(helpers,"id_cliente") || (depth0 != null ? lookupProperty(depth0,"id_cliente") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_cliente","hash":{},"data":data,"loc":{"start":{"line":7,"column":16},"end":{"line":7,"column":30}}}) : helper)))
    + "</li>\n<li>Nombre: "
    + alias4(((helper = (helper = lookupProperty(helpers,"nombre") || (depth0 != null ? lookupProperty(depth0,"nombre") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nombre","hash":{},"data":data,"loc":{"start":{"line":8,"column":12},"end":{"line":8,"column":22}}}) : helper)))
    + "</li>\n<li>Primer Apellido: "
    + alias4(((helper = (helper = lookupProperty(helpers,"apellido1") || (depth0 != null ? lookupProperty(depth0,"apellido1") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"apellido1","hash":{},"data":data,"loc":{"start":{"line":9,"column":21},"end":{"line":9,"column":34}}}) : helper)))
    + "</li>\n<li>Segundo Apellido: "
    + alias4(((helper = (helper = lookupProperty(helpers,"apellido2") || (depth0 != null ? lookupProperty(depth0,"apellido2") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"apellido2","hash":{},"data":data,"loc":{"start":{"line":10,"column":22},"end":{"line":10,"column":35}}}) : helper)))
    + "</li>\n<li>Usuario: "
    + alias4(((helper = (helper = lookupProperty(helpers,"usuario") || (depth0 != null ? lookupProperty(depth0,"usuario") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"usuario","hash":{},"data":data,"loc":{"start":{"line":11,"column":13},"end":{"line":11,"column":24}}}) : helper)))
    + "</li>\n<li>Email: "
    + alias4(((helper = (helper = lookupProperty(helpers,"email") || (depth0 != null ? lookupProperty(depth0,"email") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data,"loc":{"start":{"line":12,"column":11},"end":{"line":12,"column":20}}}) : helper)))
    + "</li>\n<li>Población: "
    + alias4(((helper = (helper = lookupProperty(helpers,"poblacion") || (depth0 != null ? lookupProperty(depth0,"poblacion") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"poblacion","hash":{},"data":data,"loc":{"start":{"line":13,"column":15},"end":{"line":13,"column":28}}}) : helper)))
    + "</li>\n</ul>\n</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"clientes") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":1},"end":{"line":16,"column":9}}})) != null ? stack1 : "")
    + "\n";
},"useData":true});
})();