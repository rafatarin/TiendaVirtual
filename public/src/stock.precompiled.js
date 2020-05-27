(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['stock'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"contenedorStock\">\n      <ul class=\"stockVista\">\n        <p>Descripción</p><li class=\"valorStock\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"descripcion") || (depth0 != null ? lookupProperty(depth0,"descripcion") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"descripcion","hash":{},"data":data,"loc":{"start":{"line":8,"column":49},"end":{"line":8,"column":64}}}) : helper)))
    + "<input class=\"valorStock\" type=\"text\" size=\"50\"><button id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id_articulo") || (depth0 != null ? lookupProperty(depth0,"id_articulo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_articulo","hash":{},"data":data,"loc":{"start":{"line":8,"column":124},"end":{"line":8,"column":139}}}) : helper)))
    + "_desc\" class=\"valorStock btnActualizar\">Modificar</button></li>\n      \n        <p>Categoría</p><li class=\"valorStock\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"categoria") || (depth0 != null ? lookupProperty(depth0,"categoria") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"categoria","hash":{},"data":data,"loc":{"start":{"line":10,"column":47},"end":{"line":10,"column":60}}}) : helper)))
    + "</li>\n\n        <p>Stock</p><li class=\"valorStock\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"stock") || (depth0 != null ? lookupProperty(depth0,"stock") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"stock","hash":{},"data":data,"loc":{"start":{"line":12,"column":43},"end":{"line":12,"column":52}}}) : helper)))
    + "<input class=\"valorStock\" type=\"text\" size=\"50\"><button id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id_articulo") || (depth0 != null ? lookupProperty(depth0,"id_articulo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_articulo","hash":{},"data":data,"loc":{"start":{"line":12,"column":112},"end":{"line":12,"column":127}}}) : helper)))
    + "_stock\" class=\"valorStock\">Modificar</button></li><br/>\n        \n        <p>Precio Eur</p><li class=\"valorStock\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"precio") || (depth0 != null ? lookupProperty(depth0,"precio") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"precio","hash":{},"data":data,"loc":{"start":{"line":14,"column":48},"end":{"line":14,"column":58}}}) : helper)))
    + "<input class=\"valorStock\" type=\"text\" size=\"50\"><button id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id_articulo") || (depth0 != null ? lookupProperty(depth0,"id_articulo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id_articulo","hash":{},"data":data,"loc":{"start":{"line":14,"column":118},"end":{"line":14,"column":133}}}) : helper)))
    + "_precio\" class=\"valorStock\">Modificar</button></li><br/>\n        \n            <img class=\"imagenStock\" src=\"../img/"
    + alias4(((helper = (helper = lookupProperty(helpers,"imagen") || (depth0 != null ? lookupProperty(depth0,"imagen") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imagen","hash":{},"data":data,"loc":{"start":{"line":16,"column":49},"end":{"line":16,"column":59}}}) : helper)))
    + "\"><br/>\n            <label for=\"avatar\">Modificar imagen:</label>\n            <input type=\"file\" id=\"photo\" />\n</ul>\n</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n\n\n\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"stock") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":0},"end":{"line":21,"column":11}}})) != null ? stack1 : "")
    + "\n</div>\n";
},"useData":true});
})();