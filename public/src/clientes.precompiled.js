(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['clientes'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 mb-5\">\n    	<figure class=\"user-card green\">\n			<figcaption>\n				<img src=\"https://bootdey.com/img/Content/avatar/avatar1.png\" alt=\"Milestone Admin\" class=\"profile\">\n				<h5>"
    + alias4(((helper = (helper = lookupProperty(helpers,"Nombre") || (depth0 != null ? lookupProperty(depth0,"Nombre") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Nombre","hash":{},"data":data,"loc":{"start":{"line":11,"column":8},"end":{"line":11,"column":18}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"apellido1") || (depth0 != null ? lookupProperty(depth0,"apellido1") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"apellido1","hash":{},"data":data,"loc":{"start":{"line":11,"column":19},"end":{"line":11,"column":32}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"apellido2") || (depth0 != null ? lookupProperty(depth0,"apellido2") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"apellido2","hash":{},"data":data,"loc":{"start":{"line":11,"column":33},"end":{"line":11,"column":46}}}) : helper)))
    + "</h5>\n				<h6>Id de cliente: "
    + alias4(((helper = (helper = lookupProperty(helpers,"id_cliente") || (depth0 != null ? lookupProperty(depth0,"id_cliente") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_cliente","hash":{},"data":data,"loc":{"start":{"line":12,"column":23},"end":{"line":12,"column":37}}}) : helper)))
    + "</h6>\n				<p>Usuario: "
    + alias4(((helper = (helper = lookupProperty(helpers,"usuario") || (depth0 != null ? lookupProperty(depth0,"usuario") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"usuario","hash":{},"data":data,"loc":{"start":{"line":13,"column":16},"end":{"line":13,"column":27}}}) : helper)))
    + "</p>\n				<ul class=\"contacts\">\n					<li>\n						Email: <a href=\"#\">\n							"
    + alias4(((helper = (helper = lookupProperty(helpers,"email") || (depth0 != null ? lookupProperty(depth0,"email") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data,"loc":{"start":{"line":17,"column":7},"end":{"line":17,"column":16}}}) : helper)))
    + "\n						</a>\n					</li>\n                    <li>\n                        Dirección: "
    + alias4(((helper = (helper = lookupProperty(helpers,"poblacion") || (depth0 != null ? lookupProperty(depth0,"poblacion") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"poblacion","hash":{},"data":data,"loc":{"start":{"line":21,"column":35},"end":{"line":21,"column":48}}}) : helper)))
    + "\n                    </li>\n                    <li>\n                        Rol: "
    + alias4(((helper = (helper = lookupProperty(helpers,"rol") || (depth0 != null ? lookupProperty(depth0,"rol") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rol","hash":{},"data":data,"loc":{"start":{"line":24,"column":29},"end":{"line":24,"column":36}}}) : helper)))
    + "\n                    </li>\n				</ul>\n			</figcaption>\n		</figure>\n	</div>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n\n\n<div class=\"container page-container\">\n<div class=\"row gutters\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"clientes") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":4},"end":{"line":29,"column":16}}})) != null ? stack1 : "")
    + "\n</div>\n</div>\n\n\n\n\n\n";
},"useData":true});
})();