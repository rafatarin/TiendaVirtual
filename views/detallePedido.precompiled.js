(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['detallePedido'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h1 id=\"stock\"><strong> Detalle en pedidos </strong></h1>\n<div class=\"divEnlaces\">\n<a class=\"enlaces\" href=\"/pedidosEnProceso\"><button class=\"btn btn-primary mr-3 float-left\">Pedidos En Proceso</button></a>\n<a class=\"enlaces\" id=\"generarPDF\" href=\"/imprimir/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id_pedido") || (depth0 != null ? lookupProperty(depth0,"id_pedido") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_pedido","hash":{},"data":data,"loc":{"start":{"line":5,"column":51},"end":{"line":5,"column":64}}}) : helper)))
    + "\"> <button class=\"btn btn-primary mr-3 float-left\">Generar PDF</button></a>\n</div>\n<br><br>\n\n<table class=\"table\">\n	  \n  <thead class=\"thead-dark\">\n	\n    <tr>\n      <th class=\"text-center\">Id pedido:</th>\n      <th class=\"text-center\">Productos: </th>\n      <th class=\"text-center\">Cantidad: </th>\n	  <th class=\"text-center\">Precio Unidad: </th>\n      <th class=\"text-center\">Subtotal: </th>\n      <th class=\"text-center\">IVA: </th>\n      <th class=\"text-center\">Total Factura: </th>\n\n    </tr>\n  </thead> \n  <tbody>\n	  \n    <tr id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id_pedido") || (depth0 != null ? lookupProperty(depth0,"id_pedido") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_pedido","hash":{},"data":data,"loc":{"start":{"line":26,"column":12},"end":{"line":26,"column":25}}}) : helper)))
    + "mensaje\">\n		\n	  <td  class=\"text-center\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"id_pedido") || (depth0 != null ? lookupProperty(depth0,"id_pedido") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_pedido","hash":{},"data":data,"loc":{"start":{"line":28,"column":28},"end":{"line":28,"column":41}}}) : helper)))
    + "</td>\n	  <td class=\"text-center\"> "
    + alias4(((helper = (helper = lookupProperty(helpers,"descripcion") || (depth0 != null ? lookupProperty(depth0,"descripcion") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"descripcion","hash":{},"data":data,"loc":{"start":{"line":29,"column":28},"end":{"line":29,"column":43}}}) : helper)))
    + "</td>\n      <td class=\"text-center\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"cantidad") || (depth0 != null ? lookupProperty(depth0,"cantidad") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cantidad","hash":{},"data":data,"loc":{"start":{"line":30,"column":30},"end":{"line":30,"column":42}}}) : helper)))
    + "</td>\n	  <td class=\"text-center\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"precio") || (depth0 != null ? lookupProperty(depth0,"precio") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"precio","hash":{},"data":data,"loc":{"start":{"line":31,"column":27},"end":{"line":31,"column":37}}}) : helper)))
    + "€</td>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "       <td class=\"text-center\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"sumaPrecio") || (depth0 != null ? lookupProperty(depth0,"sumaPrecio") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"sumaPrecio","hash":{},"data":data,"loc":{"start":{"line":34,"column":31},"end":{"line":34,"column":45}}}) : helper)))
    + "€</td>";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " <td class=\"text-center\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"sumaPrecio") || (depth0 != null ? lookupProperty(depth0,"sumaPrecio") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"sumaPrecio","hash":{},"data":data,"loc":{"start":{"line":35,"column":49},"end":{"line":35,"column":63}}}) : helper)))
    + "€</td>";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " <td class=\"text-center\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"totalFactura") || (depth0 != null ? lookupProperty(depth0,"totalFactura") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"totalFactura","hash":{},"data":data,"loc":{"start":{"line":36,"column":52},"end":{"line":36,"column":68}}}) : helper)))
    + "€</td>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"detallePedido") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":32,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"sumaPrecio") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":6},"end":{"line":34,"column":58}}})) != null ? stack1 : "")
    + "\n       "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"precioIVA") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":7},"end":{"line":35,"column":76}}})) != null ? stack1 : "")
    + "\n       "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"totalFactura") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":36,"column":7},"end":{"line":36,"column":81}}})) != null ? stack1 : "")
    + "\n	  </th>\n    </tr>\n\n\n  </tbody>\n</table>\n\n\n\n";
},"useData":true});
})();