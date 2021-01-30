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
    + alias4(((helper = (helper = lookupProperty(helpers,"id_articulo") || (depth0 != null ? lookupProperty(depth0,"id_articulo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_articulo","hash":{},"data":data,"loc":{"start":{"line":2,"column":18},"end":{"line":2,"column":33}}}) : helper)))
    + "_desc\" class=\"contenedorStock box\">\n\n        <article> \n        <label for=\"descr"
    + alias4(((helper = (helper = lookupProperty(helpers,"id_articulo") || (depth0 != null ? lookupProperty(depth0,"id_articulo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_articulo","hash":{},"data":data,"loc":{"start":{"line":5,"column":25},"end":{"line":5,"column":40}}}) : helper)))
    + "\">Descripción:</label><br/>\n        <p class=\"valorStock\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"descripcion") || (depth0 != null ? lookupProperty(depth0,"descripcion") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"descripcion","hash":{},"data":data,"loc":{"start":{"line":6,"column":30},"end":{"line":6,"column":45}}}) : helper)))
    + "<br/>\n        <input name=\"descripcion\" type=\"text\" id=\"descr-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id_articulo") || (depth0 != null ? lookupProperty(depth0,"id_articulo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_articulo","hash":{},"data":data,"loc":{"start":{"line":7,"column":56},"end":{"line":7,"column":71}}}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"descripcion") || (depth0 != null ? lookupProperty(depth0,"descripcion") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"descripcion","hash":{},"data":data,"loc":{"start":{"line":7,"column":80},"end":{"line":7,"column":95}}}) : helper)))
    + "\" size=\"30\">\n        <button id=\"btModificar\" class=\"btModificar\">Modificar</button>\n        </article>\n        <article>\n        <label for=\"stock"
    + alias4(((helper = (helper = lookupProperty(helpers,"id_articulo") || (depth0 != null ? lookupProperty(depth0,"id_articulo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_articulo","hash":{},"data":data,"loc":{"start":{"line":11,"column":25},"end":{"line":11,"column":40}}}) : helper)))
    + "\">Stock Actual: "
    + alias4(((helper = (helper = lookupProperty(helpers,"stock") || (depth0 != null ? lookupProperty(depth0,"stock") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"stock","hash":{},"data":data,"loc":{"start":{"line":11,"column":56},"end":{"line":11,"column":65}}}) : helper)))
    + " </label>\n        <input name=\"stock\" type=\"text\" id=\"stock-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id_articulo") || (depth0 != null ? lookupProperty(depth0,"id_articulo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_articulo","hash":{},"data":data,"loc":{"start":{"line":12,"column":50},"end":{"line":12,"column":65}}}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"stock") || (depth0 != null ? lookupProperty(depth0,"stock") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"stock","hash":{},"data":data,"loc":{"start":{"line":12,"column":74},"end":{"line":12,"column":83}}}) : helper)))
    + "\" size=\"3\">\n        <button class=\"btModificarStock\">Modificar</button><br/>\n        </article>\n        <article>\n        <label for=\"precio"
    + alias4(((helper = (helper = lookupProperty(helpers,"id_articulo") || (depth0 != null ? lookupProperty(depth0,"id_articulo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_articulo","hash":{},"data":data,"loc":{"start":{"line":16,"column":26},"end":{"line":16,"column":41}}}) : helper)))
    + "\">Precio en Eur: "
    + alias4(((helper = (helper = lookupProperty(helpers,"precio") || (depth0 != null ? lookupProperty(depth0,"precio") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"precio","hash":{},"data":data,"loc":{"start":{"line":16,"column":58},"end":{"line":16,"column":68}}}) : helper)))
    + "</label>\n        <input name=\"precio\" type=\"text\" id=\"precio-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id_articulo") || (depth0 != null ? lookupProperty(depth0,"id_articulo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_articulo","hash":{},"data":data,"loc":{"start":{"line":17,"column":52},"end":{"line":17,"column":67}}}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"precio") || (depth0 != null ? lookupProperty(depth0,"precio") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"precio","hash":{},"data":data,"loc":{"start":{"line":17,"column":76},"end":{"line":17,"column":86}}}) : helper)))
    + "\" size=\"3\">\n        <button class=\"btModificarPrecio\">Modificar</button><br/>\n        </article>\n            <label>Modificar Categoría: "
    + alias4(((helper = (helper = lookupProperty(helpers,"categoria") || (depth0 != null ? lookupProperty(depth0,"categoria") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"categoria","hash":{},"data":data,"loc":{"start":{"line":20,"column":40},"end":{"line":20,"column":53}}}) : helper)))
    + "</label><br/>\n            <button id=\"1-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id_articulo") || (depth0 != null ? lookupProperty(depth0,"id_articulo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_articulo","hash":{},"data":data,"loc":{"start":{"line":21,"column":26},"end":{"line":21,"column":41}}}) : helper)))
    + "\" class=\"btModificarCategoria\">Ropa deportiva</button>\n            <button id=\"2-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id_articulo") || (depth0 != null ? lookupProperty(depth0,"id_articulo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_articulo","hash":{},"data":data,"loc":{"start":{"line":22,"column":26},"end":{"line":22,"column":41}}}) : helper)))
    + "\" class=\"btModificarCategoria\">Calzado deportivo</button>\n            <button id=\"3-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id_articulo") || (depth0 != null ? lookupProperty(depth0,"id_articulo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_articulo","hash":{},"data":data,"loc":{"start":{"line":23,"column":26},"end":{"line":23,"column":41}}}) : helper)))
    + "\" class=\"btModificarCategoria\">Joyería</button>\n            <button id=\"4-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id_articulo") || (depth0 != null ? lookupProperty(depth0,"id_articulo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_articulo","hash":{},"data":data,"loc":{"start":{"line":24,"column":26},"end":{"line":24,"column":41}}}) : helper)))
    + "\" class=\"btModificarCategoria\">Jueguetes</button>\n            <button id=\"5-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id_articulo") || (depth0 != null ? lookupProperty(depth0,"id_articulo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_articulo","hash":{},"data":data,"loc":{"start":{"line":25,"column":26},"end":{"line":25,"column":41}}}) : helper)))
    + "\" class=\"btModificarCategoria\">Libros</button>\n        </article>\n        <img src=\"./img/"
    + alias4(((helper = (helper = lookupProperty(helpers,"imagen") || (depth0 != null ? lookupProperty(depth0,"imagen") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imagen","hash":{},"data":data,"loc":{"start":{"line":27,"column":24},"end":{"line":27,"column":34}}}) : helper)))
    + "\" img class=\"imagenStock\" alt=\"imagen Producto\"> Nombre de la imagen: "
    + alias4(((helper = (helper = lookupProperty(helpers,"imagen") || (depth0 != null ? lookupProperty(depth0,"imagen") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imagen","hash":{},"data":data,"loc":{"start":{"line":27,"column":104},"end":{"line":27,"column":114}}}) : helper)))
    + "\n        <br><br>\n        <form ref='uploadForm' id='upload"
    + alias4(((helper = (helper = lookupProperty(helpers,"id_articulo") || (depth0 != null ? lookupProperty(depth0,"id_articulo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_articulo","hash":{},"data":data,"loc":{"start":{"line":29,"column":41},"end":{"line":29,"column":56}}}) : helper)))
    + "' action='/uploadArticulo' method='post' encType=\"multipart/form-data\">\n          <input type=\"file\" name=\"sampleFile\" />\n          <input type='submit' value='Cambiar Imagen' />\n        </form>\n\n </section>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"stock") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":35,"column":10}}})) != null ? stack1 : "");
},"useData":true});
})();