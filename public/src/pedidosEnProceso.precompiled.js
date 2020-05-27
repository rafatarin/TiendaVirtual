(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['pedidosEnProceso'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"enProceso") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":0},"end":{"line":34,"column":9}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"product clientes\">\n<ul>	\n<li>Id pedido:"
    + alias4(((helper = (helper = lookupProperty(helpers,"id_pedido") || (depth0 != null ? lookupProperty(depth0,"id_pedido") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_pedido","hash":{},"data":data,"loc":{"start":{"line":8,"column":14},"end":{"line":8,"column":27}}}) : helper)))
    + "</li>\n<li>Productos:"
    + alias4(((helper = (helper = lookupProperty(helpers,"descripcion") || (depth0 != null ? lookupProperty(depth0,"descripcion") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"descripcion","hash":{},"data":data,"loc":{"start":{"line":9,"column":14},"end":{"line":9,"column":29}}}) : helper)))
    + "</li>\n<li>Cantidad:"
    + alias4(((helper = (helper = lookupProperty(helpers,"cantidad") || (depth0 != null ? lookupProperty(depth0,"cantidad") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cantidad","hash":{},"data":data,"loc":{"start":{"line":10,"column":13},"end":{"line":10,"column":25}}}) : helper)))
    + "</li>\n<li>Id_cliente:"
    + alias4(((helper = (helper = lookupProperty(helpers,"id_cliente") || (depth0 != null ? lookupProperty(depth0,"id_cliente") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_cliente","hash":{},"data":data,"loc":{"start":{"line":11,"column":15},"end":{"line":11,"column":29}}}) : helper)))
    + "</li>\n<label><input id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id_pedido") || (depth0 != null ? lookupProperty(depth0,"id_pedido") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_pedido","hash":{},"data":data,"loc":{"start":{"line":12,"column":18},"end":{"line":12,"column":31}}}) : helper)))
    + "\" name=\"miCheck\" type=\"checkbox\">Enviado</a></label>\n</ul>\n<p id=\"mensaje\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"mensaje") || (depth0 != null ? lookupProperty(depth0,"mensaje") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mensaje","hash":{},"data":data,"loc":{"start":{"line":14,"column":16},"end":{"line":14,"column":27}}}) : helper)))
    + "</p>\n</div>\n\n\n\n<script async>\nasync function alertaValue(req, res){ \n   	actualizaProceso("
    + alias4(((helper = (helper = lookupProperty(helpers,"id_pedido") || (depth0 != null ? lookupProperty(depth0,"id_pedido") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_pedido","hash":{},"data":data,"loc":{"start":{"line":21,"column":21},"end":{"line":21,"column":34}}}) : helper)))
    + ");\n   	\n} \ndocument.getElementById(\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id_pedido") || (depth0 != null ? lookupProperty(depth0,"id_pedido") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_pedido","hash":{},"data":data,"loc":{"start":{"line":24,"column":25},"end":{"line":24,"column":38}}}) : helper)))
    + "\").addEventListener(\"click\", alertaValue);\n\nasync function enviaMensaje(req, res){ \n   	muestraMensaje("
    + alias4(((helper = (helper = lookupProperty(helpers,"id_pedido") || (depth0 != null ? lookupProperty(depth0,"id_pedido") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_pedido","hash":{},"data":data,"loc":{"start":{"line":27,"column":19},"end":{"line":27,"column":32}}}) : helper)))
    + ");\n   	\n} \ndocument.getElementById(\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id_pedido") || (depth0 != null ? lookupProperty(depth0,"id_pedido") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_pedido","hash":{},"data":data,"loc":{"start":{"line":30,"column":25},"end":{"line":30,"column":38}}}) : helper)))
    + "\").addEventListener(\"click\", enviaMensaje);\n\n\n</script>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n<h1 id=\"stock\"><strong> Pedidos en Proceso: </strong></h1>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"enProceso") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":0},"end":{"line":35,"column":7}}})) != null ? stack1 : "");
},"useData":true});
})();