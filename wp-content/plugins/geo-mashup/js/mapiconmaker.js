var MapIconMaker={};MapIconMaker.createMarkerIcon=function(a){var d=a.width||32;var j=a.height||32;var e=a.primaryColor||"#ff0000";var k=a.strokeColor||"#000000";var c=a.cornerColor||"#ffffff";var g="http://chart.apis.google.com/chart?cht=mm";var b=g+"&chs="+d+"x"+j+"&chco="+c.replace("#","")+","+e.replace("#","")+","+k.replace("#","")+"&ext=.png";var h=new GIcon(G_DEFAULT_ICON);h.image=b;h.iconSize=new GSize(d,j);h.shadowSize=new GSize(Math.floor(d*1.6),j);h.iconAnchor=new GPoint(d/2,j);h.infoWindowAnchor=new GPoint(d/2,Math.floor(j/12));h.printImage=b+"&chof=gif";h.mozPrintImage=b+"&chf=bg,s,ECECD8&chof=gif";b=g+"&chs="+d+"x"+j+"&chco="+c.replace("#","")+","+e.replace("#","")+","+k.replace("#","");h.transparent=b+"&chf=a,s,ffffff11&ext=.png";h.imageMap=[d/2,j,(7/16)*d,(5/8)*j,(5/16)*d,(7/16)*j,(7/32)*d,(5/16)*j,(5/16)*d,(1/8)*j,(1/2)*d,0,(11/16)*d,(1/8)*j,(25/32)*d,(5/16)*j,(11/16)*d,(7/16)*j,(9/16)*d,(5/8)*j];for(var f=0;f<h.imageMap.length;f++){h.imageMap[f]=parseInt(h.imageMap[f],10)}return h};MapIconMaker.createFlatIcon=function(k){var n=k.width||32;var l=k.height||32;var r=k.primaryColor||"#ff0000";var m=k.shadowColor||"#000000";var i=MapIconMaker.escapeUserText_(k.label)||"";var t=k.labelColor||"#000000";var j=k.labelSize||0;var c=k.shape||"circle";var p=(c==="circle")?"it":"itr";var b="http://chart.apis.google.com/chart?cht="+p;var h=b+"&chs="+n+"x"+l+"&chco="+r.replace("#","")+","+m.replace("#","")+"ff,ffffff01&chl="+i+"&chx="+t.replace("#","")+","+j;var q=new GIcon(G_DEFAULT_ICON);q.image=h+"&chf=bg,s,00000000&ext=.png";q.iconSize=new GSize(n,l);q.shadowSize=new GSize(0,0);q.iconAnchor=new GPoint(n/2,l/2);q.infoWindowAnchor=new GPoint(n/2,l/2);q.printImage=h+"&chof=gif";q.mozPrintImage=h+"&chf=bg,s,ECECD8&chof=gif";q.transparent=h+"&chf=a,s,ffffff01&ext=.png";q.imageMap=[];if(p==="itr"){q.imageMap=[0,0,n,0,n,l,0,l]}else{var g=8;var d=360/g;var u=Math.min(n,l)/2;for(var s=0;s<(g+1);s++){var o=d*s*(Math.PI/180);var f=u+u*Math.cos(o);var e=u+u*Math.sin(o);q.imageMap.push(parseInt(f,10),parseInt(e,10))}}return q};MapIconMaker.createLabeledMarkerIcon=function(b){var c=b.primaryColor||"#DA7187";var k=b.strokeColor||"#000000";var g=b.starPrimaryColor||"#FFFF00";var l=b.starStrokeColor||"#0000FF";var h=MapIconMaker.escapeUserText_(b.label)||"";var i=b.labelColor||"#000000";var d=b.addStar||false;var j=(d)?"pin_star":"pin";var e="http://chart.apis.google.com/chart?cht=d&chdp=mapsapi&chl=";var a=e+j+"'i\\'["+h+"'-2'f\\hv'a\\]h\\]o\\"+c.replace("#","")+"'fC\\"+i.replace("#","")+"'tC\\"+k.replace("#","")+"'eC\\";if(d){a+=g.replace("#","")+"'1C\\"+l.replace("#","")+"'0C\\"}a+="Lauto'f\\";var f=new GIcon(G_DEFAULT_ICON);f.image=a+"&ext=.png";f.iconSize=(d)?new GSize(23,39):new GSize(21,34);return f};MapIconMaker.escapeUserText_=function(a){if(a===undefined){return null}a=a.replace(/@/,"@@");a=a.replace(/\\/,"@\\");a=a.replace(/'/,"@'");a=a.replace(/\[/,"@[");a=a.replace(/\]/,"@]");return encodeURIComponent(a)};