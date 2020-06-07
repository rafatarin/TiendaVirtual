(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['stock'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<section data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id_articulo") || (depth0 != null ? lookupProperty(depth0,"id_articulo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_articulo","hash":{},"data":data,"loc":{"start":{"line":3,"column":18},"end":{"line":3,"column":33}}}) : helper)))
    + "_desc\" class=\"contenedorStock box\">\n\n        <article>\n        <label for=\"descr"
    + alias4(((helper = (helper = lookupProperty(helpers,"id_articulo") || (depth0 != null ? lookupProperty(depth0,"id_articulo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_articulo","hash":{},"data":data,"loc":{"start":{"line":6,"column":25},"end":{"line":6,"column":40}}}) : helper)))
    + "\">Descripción: </label>\n        <p class=\"valorStock\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"descripcion") || (depth0 != null ? lookupProperty(depth0,"descripcion") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"descripcion","hash":{},"data":data,"loc":{"start":{"line":7,"column":30},"end":{"line":7,"column":45}}}) : helper)))
    + "</p>\n	      <input name=\"descripcion\" type=\"text\" id=\"descr-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id_articulo") || (depth0 != null ? lookupProperty(depth0,"id_articulo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_articulo","hash":{},"data":data,"loc":{"start":{"line":8,"column":55},"end":{"line":8,"column":70}}}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"descripcion") || (depth0 != null ? lookupProperty(depth0,"descripcion") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"descripcion","hash":{},"data":data,"loc":{"start":{"line":8,"column":79},"end":{"line":8,"column":94}}}) : helper)))
    + "\" size=\"40\">\n        <button id=\"btModificar\" class=\"btModificar\">Modificar</button>\n        </article>\n        <article>\n        <label for=\"stock"
    + alias4(((helper = (helper = lookupProperty(helpers,"id_articulo") || (depth0 != null ? lookupProperty(depth0,"id_articulo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_articulo","hash":{},"data":data,"loc":{"start":{"line":12,"column":25},"end":{"line":12,"column":40}}}) : helper)))
    + "\">Stock Actual: "
    + alias4(((helper = (helper = lookupProperty(helpers,"stock") || (depth0 != null ? lookupProperty(depth0,"stock") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"stock","hash":{},"data":data,"loc":{"start":{"line":12,"column":56},"end":{"line":12,"column":65}}}) : helper)))
    + " </label>\n		<input name=\"stock\" type=\"text\" id=\"stock-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id_articulo") || (depth0 != null ? lookupProperty(depth0,"id_articulo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_articulo","hash":{},"data":data,"loc":{"start":{"line":13,"column":44},"end":{"line":13,"column":59}}}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"stock") || (depth0 != null ? lookupProperty(depth0,"stock") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"stock","hash":{},"data":data,"loc":{"start":{"line":13,"column":68},"end":{"line":13,"column":77}}}) : helper)))
    + "\" size=\"3\">\n        <button  class=\"btModificarStock\">Modificar</button><br/>\n        </article>  \n        <article> \n        <label for=\"precio"
    + alias4(((helper = (helper = lookupProperty(helpers,"id_articulo") || (depth0 != null ? lookupProperty(depth0,"id_articulo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_articulo","hash":{},"data":data,"loc":{"start":{"line":17,"column":26},"end":{"line":17,"column":41}}}) : helper)))
    + "\">Precio en Eur: "
    + alias4(((helper = (helper = lookupProperty(helpers,"precio") || (depth0 != null ? lookupProperty(depth0,"precio") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"precio","hash":{},"data":data,"loc":{"start":{"line":17,"column":58},"end":{"line":17,"column":68}}}) : helper)))
    + "</label>\n        <input name=\"precio\" type=\"text\" id=\"precio-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id_articulo") || (depth0 != null ? lookupProperty(depth0,"id_articulo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_articulo","hash":{},"data":data,"loc":{"start":{"line":18,"column":52},"end":{"line":18,"column":67}}}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"precio") || (depth0 != null ? lookupProperty(depth0,"precio") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"precio","hash":{},"data":data,"loc":{"start":{"line":18,"column":76},"end":{"line":18,"column":86}}}) : helper)))
    + "\" size=\"3\">\n        <button class=\"btModificarPrecio\">Modificar</button><br/>\n        </article>\n        <article>\n         <img src=\"./img/"
    + alias4(((helper = (helper = lookupProperty(helpers,"imagen") || (depth0 != null ? lookupProperty(depth0,"imagen") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imagen","hash":{},"data":data,"loc":{"start":{"line":22,"column":25},"end":{"line":22,"column":35}}}) : helper)))
    + "\" img class=\"imagenStock\" alt=\"imagen Producto\">Nombre de la imagen: "
    + alias4(((helper = (helper = lookupProperty(helpers,"imagen") || (depth0 != null ? lookupProperty(depth0,"imagen") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imagen","hash":{},"data":data,"loc":{"start":{"line":22,"column":104},"end":{"line":22,"column":114}}}) : helper)))
    + "\n        <br><br>\n        <form ref='uploadForm' id='upload"
    + alias4(((helper = (helper = lookupProperty(helpers,"id_articulo") || (depth0 != null ? lookupProperty(depth0,"id_articulo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_articulo","hash":{},"data":data,"loc":{"start":{"line":24,"column":41},"end":{"line":24,"column":56}}}) : helper)))
    + "' action='/uploadArticulo' method='post' encType=\"multipart/form-data\">\n          <input type=\"file\" name=\"sampleFile\" />\n          <input type='submit' value='Cambiar Imagen' />\n        </form>\n\n </section>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"stock") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":30,"column":10}}})) != null ? stack1 : "")
    + "  ";
},"useData":true});
})();