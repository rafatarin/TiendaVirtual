(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['pedidosEnProceso'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"enProceso") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":0},"end":{"line":51,"column":9}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n<div name=\"divPedido\" class=\"listaPedido\">\n<ul id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id_pedido") || (depth0 != null ? lookupProperty(depth0,"id_pedido") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_pedido","hash":{},"data":data,"loc":{"start":{"line":12,"column":8},"end":{"line":12,"column":21}}}) : helper)))
    + "mensaje\">	\n<a href=\"/detallePedido/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id_pedido") || (depth0 != null ? lookupProperty(depth0,"id_pedido") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_pedido","hash":{},"data":data,"loc":{"start":{"line":13,"column":24},"end":{"line":13,"column":37}}}) : helper)))
    + "\">Detalle Pedido</a>\n<li>Id pedido: "
    + alias4(((helper = (helper = lookupProperty(helpers,"id_pedido") || (depth0 != null ? lookupProperty(depth0,"id_pedido") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_pedido","hash":{},"data":data,"loc":{"start":{"line":14,"column":15},"end":{"line":14,"column":28}}}) : helper)))
    + "</li>\n<li>Productos: "
    + alias4(((helper = (helper = lookupProperty(helpers,"descripcion") || (depth0 != null ? lookupProperty(depth0,"descripcion") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"descripcion","hash":{},"data":data,"loc":{"start":{"line":15,"column":15},"end":{"line":15,"column":30}}}) : helper)))
    + "</li>\n<li>Cantidad: "
    + alias4(((helper = (helper = lookupProperty(helpers,"cantidad") || (depth0 != null ? lookupProperty(depth0,"cantidad") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cantidad","hash":{},"data":data,"loc":{"start":{"line":16,"column":14},"end":{"line":16,"column":26}}}) : helper)))
    + "</li>\n<label><input id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id_pedido") || (depth0 != null ? lookupProperty(depth0,"id_pedido") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_pedido","hash":{},"data":data,"loc":{"start":{"line":17,"column":18},"end":{"line":17,"column":31}}}) : helper)))
    + "\" name=\"miCheck\" type=\"checkbox\"> Enviado </a></label>\n<li><button id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id_pedido") || (depth0 != null ? lookupProperty(depth0,"id_pedido") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_pedido","hash":{},"data":data,"loc":{"start":{"line":18,"column":16},"end":{"line":18,"column":29}}}) : helper)))
    + "button\">Guardar</button></li>\n<li>"
    + alias4(((helper = (helper = lookupProperty(helpers,"mensaje") || (depth0 != null ? lookupProperty(depth0,"mensaje") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mensaje","hash":{},"data":data,"loc":{"start":{"line":19,"column":4},"end":{"line":19,"column":15}}}) : helper)))
    + "</li>\n</ul>\n</div>\n\n\n\n<script async>\nasync function alertaValue(req, res){ \n   	const check = document.getElementById(\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id_pedido") || (depth0 != null ? lookupProperty(depth0,"id_pedido") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_pedido","hash":{},"data":data,"loc":{"start":{"line":27,"column":43},"end":{"line":27,"column":56}}}) : helper)))
    + "\");\n   	if (check) {\n	actualizaProceso("
    + alias4(((helper = (helper = lookupProperty(helpers,"id_pedido") || (depth0 != null ? lookupProperty(depth0,"id_pedido") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_pedido","hash":{},"data":data,"loc":{"start":{"line":29,"column":18},"end":{"line":29,"column":31}}}) : helper)))
    + ");\n   	}\n  	\n} \n\ndocument.getElementById(\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id_pedido") || (depth0 != null ? lookupProperty(depth0,"id_pedido") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_pedido","hash":{},"data":data,"loc":{"start":{"line":34,"column":25},"end":{"line":34,"column":38}}}) : helper)))
    + "button\").addEventListener(\"click\", alertaValue);\n\nasync function enviaMensaje(req, res){ \n   	muestraMensaje("
    + alias4(((helper = (helper = lookupProperty(helpers,"id_pedido") || (depth0 != null ? lookupProperty(depth0,"id_pedido") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_pedido","hash":{},"data":data,"loc":{"start":{"line":37,"column":19},"end":{"line":37,"column":32}}}) : helper)))
    + ");\n   	\n} \ndocument.getElementById(\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id_pedido") || (depth0 != null ? lookupProperty(depth0,"id_pedido") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_pedido","hash":{},"data":data,"loc":{"start":{"line":40,"column":25},"end":{"line":40,"column":38}}}) : helper)))
    + "button\").addEventListener(\"click\", enviaMensaje);\n\n\nasync function sendValue(req, res){ \n   	busquedaCliente("
    + alias4(((helper = (helper = lookupProperty(helpers,"id_cliente") || (depth0 != null ? lookupProperty(depth0,"id_cliente") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_cliente","hash":{},"data":data,"loc":{"start":{"line":44,"column":20},"end":{"line":44,"column":34}}}) : helper)))
    + ");\n   	\n} \n\ndocument.getElementById(\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id_cliente") || (depth0 != null ? lookupProperty(depth0,"id_cliente") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_cliente","hash":{},"data":data,"loc":{"start":{"line":48,"column":25},"end":{"line":48,"column":39}}}) : helper)))
    + "\").addEventListener(\"click\", sendValue);\n\n</script>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h1 id=\"stock\"><strong> Pedidos en Proceso: </strong></h1>\n<div class=\"divEnlaces\">\n<a class=\"enlaces\" href=\"/pedidosEnviados\">Pasa a vista Pedidos Enviados</a>\n<a  class=\"enlaces\" href=\"/historicoPedidos\">Pasa a vista Histórico de Pedidos</a>\n\n</div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"enProceso") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":0},"end":{"line":52,"column":7}}})) != null ? stack1 : "")
    + "\n\n";
},"useData":true});
})();