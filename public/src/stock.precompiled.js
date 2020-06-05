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
    + alias4(((helper = (helper = lookupProperty(helpers,"id_articulo") || (depth0 != null ? lookupProperty(depth0,"id_articulo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_articulo","hash":{},"data":data,"loc":{"start":{"line":5,"column":18},"end":{"line":5,"column":33}}}) : helper)))
    + "_desc\" class=\"contenedorStock box\">\n\n        <article>\n        <p class=\"titulosStock\">Categoría - "
    + alias4(((helper = (helper = lookupProperty(helpers,"categoria") || (depth0 != null ? lookupProperty(depth0,"categoria") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"categoria","hash":{},"data":data,"loc":{"start":{"line":8,"column":44},"end":{"line":8,"column":57}}}) : helper)))
    + "</p>\n        <label for=\"descr"
    + alias4(((helper = (helper = lookupProperty(helpers,"id_articulo") || (depth0 != null ? lookupProperty(depth0,"id_articulo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_articulo","hash":{},"data":data,"loc":{"start":{"line":9,"column":25},"end":{"line":9,"column":40}}}) : helper)))
    + "\">Descripción:</label><br/>\n        <p class=\"valorStock\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"descripcion") || (depth0 != null ? lookupProperty(depth0,"descripcion") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"descripcion","hash":{},"data":data,"loc":{"start":{"line":10,"column":30},"end":{"line":10,"column":45}}}) : helper)))
    + "<br/>\n	    <input name=\"descripcion\" type=\"text\" id=\"descr-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id_articulo") || (depth0 != null ? lookupProperty(depth0,"id_articulo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_articulo","hash":{},"data":data,"loc":{"start":{"line":11,"column":53},"end":{"line":11,"column":68}}}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"descripcion") || (depth0 != null ? lookupProperty(depth0,"descripcion") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"descripcion","hash":{},"data":data,"loc":{"start":{"line":11,"column":77},"end":{"line":11,"column":92}}}) : helper)))
    + "\" size=\"40\">\n        <button id=\"btModificar\" class=\"btModificar\">Modificar</button>\n        </article>\n        <article>\n        <label for=\"stock"
    + alias4(((helper = (helper = lookupProperty(helpers,"id_articulo") || (depth0 != null ? lookupProperty(depth0,"id_articulo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_articulo","hash":{},"data":data,"loc":{"start":{"line":15,"column":25},"end":{"line":15,"column":40}}}) : helper)))
    + "\">Stock Actual: "
    + alias4(((helper = (helper = lookupProperty(helpers,"stock") || (depth0 != null ? lookupProperty(depth0,"stock") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"stock","hash":{},"data":data,"loc":{"start":{"line":15,"column":56},"end":{"line":15,"column":65}}}) : helper)))
    + " </label>\n		<input name=\"stock\" type=\"text\" id=\"stock-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id_articulo") || (depth0 != null ? lookupProperty(depth0,"id_articulo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_articulo","hash":{},"data":data,"loc":{"start":{"line":16,"column":44},"end":{"line":16,"column":59}}}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"stock") || (depth0 != null ? lookupProperty(depth0,"stock") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"stock","hash":{},"data":data,"loc":{"start":{"line":16,"column":68},"end":{"line":16,"column":77}}}) : helper)))
    + "\" size=\"3\">\n        <button class=\"btModificarStock\">Modificar</button><br/>\n        </article>\n        <article>\n        <label for=\"precio"
    + alias4(((helper = (helper = lookupProperty(helpers,"id_articulo") || (depth0 != null ? lookupProperty(depth0,"id_articulo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_articulo","hash":{},"data":data,"loc":{"start":{"line":20,"column":26},"end":{"line":20,"column":41}}}) : helper)))
    + "\">Precio en Eur: "
    + alias4(((helper = (helper = lookupProperty(helpers,"precio") || (depth0 != null ? lookupProperty(depth0,"precio") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"precio","hash":{},"data":data,"loc":{"start":{"line":20,"column":58},"end":{"line":20,"column":68}}}) : helper)))
    + "</label>\n        <input name=\"precio\" type=\"text\" id=\"precio-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id_articulo") || (depth0 != null ? lookupProperty(depth0,"id_articulo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_articulo","hash":{},"data":data,"loc":{"start":{"line":21,"column":52},"end":{"line":21,"column":67}}}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"precio") || (depth0 != null ? lookupProperty(depth0,"precio") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"precio","hash":{},"data":data,"loc":{"start":{"line":21,"column":76},"end":{"line":21,"column":86}}}) : helper)))
    + "\" size=\"3\">\n        <button class=\"btModificarPrecio\">Modificar</button><br/>\n        </article>\n        <article>\n         <img src=\"./img/"
    + alias4(((helper = (helper = lookupProperty(helpers,"imagen") || (depth0 != null ? lookupProperty(depth0,"imagen") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imagen","hash":{},"data":data,"loc":{"start":{"line":25,"column":25},"end":{"line":25,"column":35}}}) : helper)))
    + "\" img class=\"imagenStock\" alt=\"imagen Producto\"> Nombre de la imagen: "
    + alias4(((helper = (helper = lookupProperty(helpers,"imagen") || (depth0 != null ? lookupProperty(depth0,"imagen") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imagen","hash":{},"data":data,"loc":{"start":{"line":25,"column":105},"end":{"line":25,"column":115}}}) : helper)))
    + "\n        <br><br>\n        <form ref='uploadForm' id='upload"
    + alias4(((helper = (helper = lookupProperty(helpers,"id_articulo") || (depth0 != null ? lookupProperty(depth0,"id_articulo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_articulo","hash":{},"data":data,"loc":{"start":{"line":27,"column":41},"end":{"line":27,"column":56}}}) : helper)))
    + "' action='/uploadArticulo' method='post' encType=\"multipart/form-data\">\n          <input type=\"file\" name=\"sampleFile\" />\n          <input type='submit' value='Cambiar Imagen' />\n        </form>\n\n\n </section>\n\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n\n\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"stock") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":0},"end":{"line":35,"column":10}}})) != null ? stack1 : "")
    + " \n <div id=\"nuevoProducto\">\n<section id=\"formNuevo\" class=\"formNuevo\">\n    <p>Crea un nuevo producto</p>\n    <p>La imagen se debe incluir en la modificación de producto cuando ya se haya creado.</p>\n    <form id=\"form\" action=\"/creaArticulo\" method=\"POST\">\n    <fieldset>\n        <label for=\"descripcion\">Descripción:</label>\n        <input name=\"descripcion\" type=\"text\" id=\"descripcion\" size=\"40\">\n    </fieldset>\n    <fieldset>\n        <label for=\"stock\">Stock Actual:</label>\n        <input name=\"stock\" type=\"text\" id=\"stock\" size=\"3\">\n    </fieldset>\n    <fieldset>\n        <label for=\"precio\">Precio en Eur:</label>\n        <input name=\"precio\" type=\"text\" id=\"precio\" size=\"3\">\n    </fieldset>\n    <fieldset> Último nombre de imagen utilizado: "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"imagenUltima") || (depth0 != null ? lookupProperty(depth0,"imagenUltima") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"imagenUltima","hash":{},"data":data,"loc":{"start":{"line":54,"column":50},"end":{"line":54,"column":66}}}) : helper)))
    + "\n      <label for=\"nombreImagen\">Nombre Imagen:</label>\n        <input name=\"nombreImagen\" type=\"text\" id=\"nombreImagen\" size=\"6\">\n    </fieldset>\n        <input id=\"enviar\" type=\"submit\" value=\"Guardar\">\n    </form>\n</section>\n</div>\n\n";
},"useData":true});
})();