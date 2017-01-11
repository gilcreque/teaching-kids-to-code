(function(){ window.JST || (window.JST = {}) 
window.JST["example"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<p>This project is is running with the following settings:</p>\n\n<pre>\n'+
( config )+
'    \n</pre>\n\n<p>This project has the following COPY configured:</p>\n\n<pre>\n'+
( copy )+
'\n</pre>\n\n<p>This text is rendered from a template found at <code>'+
( template_path )+
'</code>.</p>\n';
}
return __p;
};

window.JST["slide_nav"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<div class="rail left-rail">\n    <div class="clickable previous-slide">\n        <i class="fa fa-arrow-left"></i>\n    </div>\n</div>\n<div class="rail right-rail">\n    <div class="clickable next-slide">\n        <i class="fa fa-arrow-right"></i>\n    </div>\n</div>';
}
return __p;
};

})();