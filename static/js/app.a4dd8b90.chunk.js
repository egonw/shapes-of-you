(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{1027:function(e,a){},1029:function(e,a){},644:function(e,a,t){e.exports=t.p+"static/media/icon.72626586.png"},686:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=t(640),l=t(153),s=t(147),c=t(28),i=t(685),p=t(1372),m=(t(708),t(75)),u=t.n(m),h=t(1348),d=t(66),g=t(1357),f=t(1358),E=t(1350),b=t(1318),y=t(1360),w=t(689),k=t(1359),_=t(650),j=t.n(_),x=t(194),v=t.n(x),S=t(649),F=t.n(S),O=t(196),R=t.n(O),A=t(1379),C=t(644),P=t.n(C),L=t(61),I=t.n(L),N=t(1352),q=t(76),T=t(1353),D=t(1354),B=t(1355),z=t(1356),M=t(128),X=t.n(M),W=t(195),U=t.n(W),G=Object(h.a)((function(e){return{link:{textDecoration:"none",color:e.palette.primary.main,"&:hover":{color:e.palette.secondary.main,textDecoration:"none"}}}}));function Q(e){var a=G(),t=Object(d.a)(),n=[];e.endpoint&&n.push("endpoint="+e.endpoint),e.query&&n.push("query="+encodeURIComponent(e.query));var o="https://yasgui.triply.cc/#Method=GET&tabTitle=Shapes%20of%20you%20query&headers=%7B%7D&contentTypeConstruct=application%2Fn-triples%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table&"+n.join("&");return r.a.createElement("a",{href:o,className:a.link,target:"_blank",rel:"noopener noreferrer"},!e.endpoint&&!e.query&&r.a.createElement(r.a.Fragment,null),e.endpoint&&r.a.createElement(E.a,{variant:"contained",color:"primary",style:{margin:t.spacing(0,2)}},r.a.createElement(v.a,null),"\xa0Query on YASGUI"),!e.endpoint&&e.query&&r.a.createElement(E.a,{variant:"contained",color:"primary",style:{margin:t.spacing(0,2)}},r.a.createElement(U.a,null),"\xa0See on YASGUI"))}function H(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function Y(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?H(Object(t),!0).forEach((function(a){I()(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):H(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var K=Object(h.a)((function(e){return{paperSearch:{padding:"2px 4px",display:"flex",alignItems:"center",width:"35ch",marginRight:e.spacing(3)},searchInput:{marginLeft:e.spacing(1),fontSize:"16px",flex:1},link:{textDecoration:"none",color:e.palette.primary.main,"&:hover":{color:e.palette.secondary.main,textDecoration:"none"}}}}));function Z(){var e=K(),a=(Object(d.a)(),r.a.useState({sparql_endpoints_array:[],search:""})),t=u()(a,2),n=t[0],o=t[1],l=r.a.useRef(n),s=r.a.useCallback((function(e){l.current=Y(Y({},l.current),e),o(l.current)}),[o]);r.a.useEffect((function(){X.a.get("https://graphdb.dumontierlab.com/repositories/shapes-registry?query="+encodeURIComponent(J)).then((function(e){var a=e.data.results.bindings,t=[];a.map((function(e){t.push(e.sparql_endpoint.value)})),s({sparql_endpoints_array:t})})).catch((function(e){console.log(e)}))}),[]);return r.a.createElement(N.a,{className:"mainContainer"},r.a.createElement(q.a,null,"List of active SPARQL endpoints defined in SPARQL queries metadata"),r.a.createElement(T.a,null,n.sparql_endpoints_array.map((function(a,t){return r.a.createElement(D.a,null,r.a.createElement(B.a,null,r.a.createElement(Q,{endpoint:a})),r.a.createElement(z.a,null,r.a.createElement("b",null,r.a.createElement("a",{href:a,className:e.link,target:"_blank",rel:"noopener noreferrer"},a))))}))))}var J="PREFIX schema: <https://schema.org/>\nSELECT DISTINCT * WHERE { \n  ?sparql_endpoint a schema:EntryPoint .\n} \n",V=Object(h.a)((function(e){return{menuButton:{color:e.palette.common.white,margin:e.spacing(0,1)},solidButton:{backgroundColor:e.palette.primary.main,color:"#fff",borderRadius:"6px",padding:"7px 14px","&:hover":{backgroundColor:e.palette.primary.dark,cursor:"pointer"}},linkButton:{textTransform:"none",textDecoration:"none",margin:e.spacing(0,1)},linkLogo:{alignItems:"center",display:"flex",margin:e.spacing(0,2)},paperPadding:{padding:e.spacing(2,2)}}}));function $(){var e=V(),a=Object(d.a)(),t=r.a.useState(!1),n=u()(t,2),o=n[0],l=n[1],c=r.a.useState(null),i=u()(c,2),p=i[0],m=i[1];return r.a.createElement(g.a,{title:"",position:"static"},r.a.createElement(f.a,{variant:"dense"},r.a.createElement(s.b,{to:"/",className:e.linkLogo},r.a.createElement(k.a,{title:"Shapes of you homepage"},r.a.createElement("img",{src:P.a,style:{height:"2em",width:"2em",marginRight:"10px"},alt:"Logo"}))),r.a.createElement(k.a,{title:"Access the grlc OpenAPI (which query the SPARQL endpoint)"},r.a.createElement(E.a,{className:e.menuButton,target:"_blank",rel:"noopener noreferrer",href:"http://grlc.io/api-git/vemonet/shapes-of-you/subdir/api"},r.a.createElement(v.a,{style:{marginRight:a.spacing(1)}}),"API docs")),r.a.createElement(k.a,{title:"Query the SPARQL endpoint with YASGUI"},r.a.createElement(E.a,{className:e.menuButton,target:"_blank",rel:"noopener noreferrer",href:"http://yasgui.triply.cc/#query=PREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dc%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0APREFIX%20dcterms%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20schema%3A%20%3Chttps%3A%2F%2Fschema.org%2F%3E%0APREFIX%20sh%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fshacl%23%3E%0APREFIX%20shex%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fshex%23%3E%0APREFIX%20void%3A%20%3Chttp%3A%2F%2Frdfs.org%2Fns%2Fvoid%23%3E%0ASELECT%20DISTINCT%20%3Fshape_type%20(count(distinct%20%3Frepository)%20AS%20%3Frepos_count)%20(count(distinct%20%3Fshape_file)%20AS%20%3Ffile_count)%0AWHERE%20%7B%20%0A%20%20%20%20%3Fshape_file%20a%20schema%3ASoftwareSourceCode%20%3B%0A%20%20%20%20%20%20%20%20a%20%3Fshape_type%20%3B%0A%20%20%20%20%20%20%20%20dc%3Asource%20%3Frepository%20.%0A%20%20%20%20FILTER(%3Fshape_type%20!%3D%20schema%3ASoftwareSourceCode)%0A%7D%20GROUP%20BY%20%3Fshape_type&endpoint=https%3A%2F%2Fgraphdb.dumontierlab.com%2Frepositories%2Fshapes-registry&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=application%2Fn-triples%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table"},r.a.createElement(F.a,{style:{marginRight:a.spacing(1)}}),"Query with SPARQL")),r.a.createElement(k.a,{title:"Application settings"},r.a.createElement(E.a,{className:e.menuButton,onClick:function(e){console.log("Click button!"),m(p?null:e.currentTarget),l((function(e){return!e}))}},r.a.createElement(R.a,{style:{marginRight:a.spacing(1)}}),"Active endpoints")),r.a.createElement(b.a,{open:o,anchorEl:p},r.a.createElement(y.a,{onClickAway:function(){l(!1),m(p?null:p),console.log("Click away!")}},r.a.createElement(w.a,{elevation:4,className:e.paperPadding},r.a.createElement(Z,null)))),r.a.createElement("div",{className:"flexGrow"}),r.a.createElement("a",{href:"https://github.com/vemonet/shapes-of-you/actions?query=workflow%3A%22Index+shapes%22",className:e.linkButton,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(k.a,{title:"Checkout the last workflow runs to index shapes."},r.a.createElement("img",{src:"https://github.com/vemonet/shapes-of-you/workflows/Index%20shapes/badge.svg"}))),r.a.createElement("a",{href:"https://github.com/vemonet/shapes-of-you/tree/report",className:e.linkButton,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(k.a,{title:"Reports for the files which failed to process, and that need to be fixed by their owners. Also known as the semantic web of shame"},r.a.createElement("img",{src:"https://img.shields.io/badge/\ud83d\udcce%20Index%20shapes-reports-ffa000"}))),r.a.createElement(k.a,{title:"Go to https://github.com/vemonet/shapes-of-you"},r.a.createElement(E.a,{className:e.menuButton,target:"_blank",href:"https://github.com/vemonet/shapes-of-you",rel:"noopener noreferrer"},r.a.createElement(j.a,null))),r.a.createElement(A.a,{title:"Login with SOLID",className:e.solidButton,popup:"https://inrupt.net/common/popup.html"})))}var ee=Object(h.a)((function(e){return{darkLink:{textDecoration:"none",color:"inherit","&:hover":{color:e.palette.primary.light,textDecoration:"none"}},whiteLink:{textDecoration:"none",color:"inherit","&:hover":{color:e.palette.primary.dark,textDecoration:"none"}},footer:{padding:e.spacing(2),marginTop:"auto",color:"white",backgroundColor:e.palette.primary.main}}}));function ae(){var e=ee();return r.a.createElement(q.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement("a",{className:e.darkLink,target:"_blank",rel:"noopener noreferrer",href:"https://maastrichtuniversity.nl/ids"},"Vincent Emonet")," ","2021")}function te(){var e=ee(),a=Object(d.a)();return r.a.createElement("footer",{className:e.footer},r.a.createElement(N.a,{maxWidth:"md",style:{textAlign:"center"}},r.a.createElement(q.a,{variant:"body2",style:{marginBottom:a.spacing(1)}},"Built for you, to explore the semantic space \u2728\ufe0f website under the\xa0",r.a.createElement("a",{className:e.whiteLink,target:"_blank",rel:"noopener noreferrer",href:"https://github.com/vemonet/shapes-of-you/blob/main/LICENSE"},"MIT license")),r.a.createElement(ae,null)))}var ne=t(1363),re=t(1364),oe=t(1365),le=t(1366),se=t(1367),ce=t(1374),ie=t(1370),pe=t(1371),me=t(1361),ue=t(1381),he=t(1380),de=t(1376),ge=t(659),fe=t.n(ge),Ee=t(658),be=t.n(Ee),ye=t(657),we=t.n(ye),ke=t(656),_e=t.n(ke),je=t(663),xe=t.n(je),ve=t(664),Se=t.n(ve),Fe=t(660),Oe=t.n(Fe),Re=t(661),Ae=t.n(Re),Ce=t(662),Pe=t.n(Ce),Le=t(264),Ie=t.n(Le),Ne=t(265),qe=t.n(Ne),Te=t(651),De=t.n(Te),Be=t(263),ze=t(652),Me=t.n(ze),Xe=t(1373),We=t(1368),Ue=t(1369),Ge=t(1378),Qe=t(1375),He=t(198),Ye=t(1362),Ke=t(1377),Ze=t(200);function Je(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function Ve(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?Je(Object(t),!0).forEach((function(a){I()(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Je(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var $e=Object(h.a)((function(e){return{paperSearch:{padding:"2px 4px",display:"flex",alignItems:"center",width:"35ch",marginRight:e.spacing(3)},searchInput:{marginLeft:e.spacing(1),fontSize:"16px",flex:1},link:{textDecoration:"none",color:e.palette.primary.main,"&:hover":{color:e.palette.secondary.main,textDecoration:"none"}}}}));function ea(){var e=$e(),a=Object(d.a)(),t=Object(He.a)(),n=r.a.useState({global_shapes_array:[],expanded_files:{},webid:"",shapes_files_list:[],search:"",repositories_hash:[],repositories_autocomplete:[],repos_overview_chart:{},files_overview_chart:{},checkbox_shacl:!0,checkbox_shex:!0,checkbox_sparql:!0,checkbox_owl:!0,checkbox_skos:!0,checkbox_obo:!0,checkbox_openapi:!0,checkbox_rml:!0,checkbox_r2rml:!0,checkbox_nanopub:!0,checkbox_dataset:!0,show_pwa_alert:!1,page:1,shapes_per_page:20,show_info_card:!1}),o=u()(n,2),l=o[0],s=o[1],c=r.a.useRef(l),i=r.a.useCallback((function(e){c.current=Ve(Ve({},c.current),e),s(c.current)}),[s]),p={"http://www.w3.org/ns/shacl#Shape":"SHACL","http://www.w3.org/2002/07/owl#Ontology":"OWL","http://www.w3.org/ns/shex#Schema":"ShEx","http://www.w3.org/ns/shacl#SPARQLFunction":"SPARQL","http://www.w3.org/2004/02/skos/core#ConceptScheme":"SKOS","http://semanticscience.org/resource/SIO_000623":"OBO","https://schema.org/APIReference":"OpenAPI","http://www.w3.org/ns/r2rml#TriplesMap":"R2RML","http://semweb.mmlab.be/ns/rml#LogicalSource":"RML","https://w3id.org/np/o/ntemplate/AssertionTemplate":"Nanopub","http://www.w3.org/ns/dcat#Dataset":"Dataset"};r.a.useEffect((function(){var e="https://graphdb.dumontierlab.com/repositories/shapes-registry";window.matchMedia("(display-mode: standalone)").matches&&i({show_pwa_alert:!1});var a={labels:[],datasets:[{label:"Number of repositories per resource type",data:[],backgroundColor:["#4caf50","#9575cd","#ffeb3b","#64b5f6","#ff7043","#1565c0","#ef6c00","#0277bd"]}]},n={labels:[],datasets:[{label:"Number of resources per resource type",data:[],backgroundColor:["#4caf50","#9575cd","#ffeb3b","#64b5f6","#ff7043","#1565c0","#ef6c00","#0277bd"]}]};X.a.get(e+"?query="+encodeURIComponent(na)).then((function(e){e.data.results.bindings.map((function(e){a.labels.push(p[e.shape_type.value]),a.datasets[0].data.push(e.repos_count.value),n.labels.push(p[e.shape_type.value]),n.datasets[0].data.push(e.files_count.value)})),console.log(a.labels),i({repos_overview_chart:a,files_overview_chart:n})})),X.a.get(e+"?query="+encodeURIComponent(aa)).then((function(e){var a=e.data.results.bindings,t=[];a.map((function(e){var a=e.shapeFileUri.value,n={url:a,type:e.shape_type.value,label:e.label.value},r=a+" "+e.label.value;e.shape_file_description&&(n.description=e.shape_file_description.value,r=r+" "+e.shape_file_description.value),e.sparqlEndpoint&&(n.sparqlEndpoint=e.sparqlEndpoint.value,r=r+" "+e.sparqlEndpoint.value),e.query&&(n.query=e.query.value,r=r+" "+e.query.value);var o=e.repository.value,l=t.findIndex((function(e){return e.url==o}));if(-1==l){var s="";e.repo_description&&(s=e.repo_description.value),l=t.push({url:o,description:s,files:[],search_description:""})-1}t[l].files.push(n),t[l].search_description=t[l].search_description+r})),console.log(t),i({global_shapes_array:t})})).catch((function(e){console.log(e)}));var r=[];X.a.get(e+"?query="+encodeURIComponent(ta)).then((function(e){e.data.results.bindings.map((function(e){var a="";e.repo_description&&(a=e.repo_description.value),r.push({label:e.repository.value,count:e.shapeFileCount.value,description:a})})),i({repositories_hash:r})})).catch((function(e){console.log(e)})),t&&function(e){var a=e.replace("profile/card#me","public/shapes-of-you/preferences.ttl");Ze.a[a].put()}(t)}),[t]);var m=function(e){i(I()({},e.target.name,e.target.checked))},h=function(e){i({expanded_files:Ve(Ve({},l.expanded_files),{},I()({},e.currentTarget.name,!l.expanded_files[e.currentTarget.name]))})},g=l.global_shapes_array.filter((function(e){var a=e.url+" ";return e.description&&(a=a+" "+e.description),e.search_description&&(a=a+" "+e.search_description),-1!==a.toLowerCase().indexOf(l.search.toLowerCase())}));function f(e){var a="\ud83d\udcc4";return"OWL"!=p[e]&&"OWL"!=e||(a="\ud83e\udd89"),"ShEx"!=p[e]&&"ShEx"!=e||(a="\u2734\ufe0f"),"SHACL"!=p[e]&&"SHACL"!=e||(a="\ud83d\udca0"),"RML"!=p[e]&&"RML"!=e||(a="\ud83e\udd9c"),"R2RML"!=p[e]&&"R2RML"!=e||(a="\ud83d\uddc4"),"OBO"!=p[e]&&"OBO"!=e||(a="\ud83e\uddea"),"OpenAPI"!=p[e]&&"OpenAPI"!=e||(a="\ud83d\udcec"),"SPARQL"!=p[e]&&"SPARQL"!=e||(a="\u2728\ufe0f"),"SKOS"!=p[e]&&"SKOS"!=e||(a="\ud83d\udcd5"),"Nanopub"!=p[e]&&"Nanopub"!=e||(a="\ud83d\uddde"),"Dataset"!=p[e]&&"Dataset"!=e||(a="\ud83d\udcbd"),a}return r.a.createElement(N.a,{className:"mainContainer"},l.show_pwa_alert&&r.a.createElement(de.a,{onClose:function(){i({show_pwa_alert:!1})},style:{marginBottom:a.spacing(2)}},"This web page is a Progressive Web App (PWA), it can be installed as a regular smartphone app, or desktop app on a laptop in a simple click!",r.a.createElement("br",null),"On Google Chrome click the + button to the right in the URL bar. Checkout ",r.a.createElement("a",{href:"https://medium.com/progressivewebapps/how-to-install-a-pwa-to-your-device-68a8d37fadc1",className:e.link,target:"_blank",rel:"noopener noreferrer"},"this article for more details")," about installing on various platforms."),r.a.createElement(Ye.a,null,r.a.createElement(q.a,{style:{textAlign:"center",margin:a.spacing(2,0)}},"Welcome to your semantic resources index ",r.a.createElement(Ke.a,{src:"user.name"}),"!"),r.a.createElement(q.a,{style:{textAlign:"center",marginBottom:a.spacing(3)}},"Hopefully, soon you will be able to bookmark your favourites resources using your SOLID account! \ud83d\udd16")),r.a.createElement(ne.a,null,r.a.createElement(re.a,{action:r.a.createElement(me.a,{style:{fontSize:"16px"},onClick:function(){i({show_info_card:!l.show_info_card})},name:"show_info_card","aria-expanded":l.show_info_card,"aria-label":"show more"},"About\xa0",!l.show_info_card&&r.a.createElement(Ie.a,null),l.show_info_card&&r.a.createElement(qe.a,null)),title:"\ud83d\udca0 Shapes of You",subheader:"An index of publicly available semantic resources"}),r.a.createElement(oe.a,{in:l.show_info_card,timeout:"auto",unmountOnExit:!0},r.a.createElement(le.a,null,r.a.createElement(q.a,{style:{marginBottom:a.spacing(2)}},"Shapes of you is the best place to search and explore existing semantic shapes, ontologies, vocabularies and queries. Searching an ontology for datasets? Needing to validate RDF using SHACL or ShEx? Finding SPARQL queries about drugs? There might be a shape out there waiting for you! You can also explore shapes to find inspirations. You might even find a grlc API serving data relevant to your projects, who knows? Linked Open Data are full of surprises."),r.a.createElement(q.a,{style:{marginBottom:a.spacing(2)}},"To insure their validity, all indexed files has been parsed using the corresponding python package (rdflib, obonet, prance). You can check the list of files which failed to load in our ",r.a.createElement("a",{href:"https://github.com/vemonet/shapes-of-you/tree/report",className:e.link},"reports"),". Feel free to fix them if you are the owner!"),r.a.createElement(q.a,null,"Add one of those topics to your ",r.a.createElement("a",{href:"https://github.com",className:e.link,target:"_blank",rel:"noopener noreferrer"},"GitHub")," repository, or mention it in your project description on ",r.a.createElement("a",{href:"https://gitlab.com",className:e.link,target:"_blank",rel:"noopener noreferrer"},"GitLab")," and ",r.a.createElement("a",{href:"https://gitee.com",className:e.link,target:"_blank",rel:"noopener noreferrer"},"Gitee"),",\xa0 we automatically index files from public repositories everyday \ud83d\udd50"),r.a.createElement(T.a,null,r.a.createElement(D.a,null,r.a.createElement(B.a,null,r.a.createElement(he.a,null,r.a.createElement(_e.a,null))),r.a.createElement(z.a,null,r.a.createElement("b",null,r.a.createElement("a",{href:"https://www.w3.org/OWL/",className:e.link,target:"_blank",rel:"noopener noreferrer"},"OWL")," ontologies"),": add the topic ",r.a.createElement("code",null,"owl"),", we index RDF files, with all ",r.a.createElement("code",null,"owl:Class")," they contain")),r.a.createElement(D.a,null,r.a.createElement(B.a,null,r.a.createElement(he.a,null,r.a.createElement(we.a,null))),r.a.createElement(z.a,null,r.a.createElement("b",null,r.a.createElement("a",{href:"https://www.w3.org/TR/swbp-skos-core-spec/",className:e.link,target:"_blank",rel:"noopener noreferrer"},"SKOS")," vocabularies"),": add the topic ",r.a.createElement("code",null,"skos"),", we index RDF files, with all ",r.a.createElement("code",null,"skos:Concept")," they contain")),r.a.createElement(D.a,null,r.a.createElement(B.a,null,r.a.createElement(he.a,null,r.a.createElement(R.a,null))),r.a.createElement(z.a,null,r.a.createElement("b",null,r.a.createElement("a",{href:"https://www.w3.org/TR/shacl/",className:e.link,target:"_blank",rel:"noopener noreferrer"},"SHACL")," shapes"),": add the topic ",r.a.createElement("code",null,"shacl-shapes"),", we index RDF files, with all ",r.a.createElement("code",null,"sh:NodeShape")," they contain")),r.a.createElement(D.a,null,r.a.createElement(B.a,null,r.a.createElement(he.a,null,r.a.createElement(be.a,null))),r.a.createElement(z.a,null,r.a.createElement("b",null,r.a.createElement("a",{href:"https://shex.io/",className:e.link,target:"_blank",rel:"noopener noreferrer"},"ShEx")," expressions"),": add the topic ",r.a.createElement("code",null,"shex"),", we index ",r.a.createElement("code",null,".shex")," files, and ShEx shapes defined in RDF files (but no metadata described in ShEx)")),r.a.createElement(D.a,null,r.a.createElement(B.a,null,r.a.createElement(he.a,null,r.a.createElement(fe.a,null))),r.a.createElement(z.a,null,r.a.createElement("b",null,r.a.createElement("a",{href:"https://www.w3.org/TR/sparql11-query/",className:e.link,target:"_blank",rel:"noopener noreferrer"},"SPARQL")," queries"),": add the topic ",r.a.createElement("code",null,"grlc"),", we index ",r.a.createElement("code",null,".rq")," and ",r.a.createElement("code",null,".sparql")," files, and parse ",r.a.createElement("a",{href:"http://grlc.io",className:e.link,target:"_blank",rel:"noopener noreferrer"},"grlc.io")," APIs metadata, complying with the ",r.a.createElement("a",{href:"https://github.com/the-open-university/basil/wiki/Introduction",className:e.link,target:"_blank",rel:"noopener noreferrer"},"BASIL convention"))),r.a.createElement(D.a,null,r.a.createElement(B.a,null,r.a.createElement(he.a,null,r.a.createElement(Oe.a,null))),r.a.createElement(z.a,null,r.a.createElement("b",null,r.a.createElement("a",{href:"https://rml.io/",className:e.link,target:"_blank",rel:"noopener noreferrer"},"RML")," mappings"),": add the topic ",r.a.createElement("code",null,"rml"),", we index RDF files, with all ",r.a.createElement("code",null,"r2rml:SubjectMap")," and ",r.a.createElement("code",null,"rml:LogicalSource")," they contain")),r.a.createElement(D.a,null,r.a.createElement(B.a,null,r.a.createElement(he.a,null,r.a.createElement(Ae.a,null))),r.a.createElement(z.a,null,r.a.createElement("b",null,r.a.createElement("a",{href:"https://www.w3.org/TR/r2rml/",className:e.link,target:"_blank",rel:"noopener noreferrer"},"R2RML")," mappings"),": add the topic ",r.a.createElement("code",null,"r2rml"),", we index RDF files, with all ",r.a.createElement("code",null,"r2rml:SubjectMap")," they contain")),r.a.createElement(D.a,null,r.a.createElement(B.a,null,r.a.createElement(he.a,null,r.a.createElement(Pe.a,null))),r.a.createElement(z.a,null,r.a.createElement("b",null,r.a.createElement("a",{href:"http://nanopub.org/wordpress/",className:e.link,target:"_blank",rel:"noopener noreferrer"},"Nanopublication")," templates"),": add the topic ",r.a.createElement("code",null,"nanopub"),", we index RDF files, with all ",r.a.createElement("code",null,"nt:AssertionTemplates")," and inputs they contain")),r.a.createElement(D.a,null,r.a.createElement(B.a,null,r.a.createElement(he.a,null,r.a.createElement(xe.a,null))),r.a.createElement(z.a,null,r.a.createElement("b",null,r.a.createElement("a",{href:"http://www.obofoundry.org/",className:e.link,target:"_blank",rel:"noopener noreferrer"},"OBO")," ontologies"),": add the topic ",r.a.createElement("code",null,"obo"),", we index ",r.a.createElement("code",null,".obo")," files, and parse all terms they contain")),r.a.createElement(D.a,null,r.a.createElement(B.a,null,r.a.createElement(he.a,null,r.a.createElement(Se.a,null))),r.a.createElement(z.a,null,r.a.createElement("b",null,r.a.createElement("a",{href:"https://www.openapis.org/",className:e.link,target:"_blank",rel:"noopener noreferrer"},"OpenAPI")," specifications"),": add the topic ",r.a.createElement("code",null,"openapi"),", we index ",r.a.createElement("code",null,".yml"),", ",r.a.createElement("code",null,".yaml")," and ",r.a.createElement("code",null,".json")," files, and parse the spec to retrieve API metadata")))))),l.repos_overview_chart.datasets&&l.files_overview_chart.datasets&&r.a.createElement(se.a,{container:!0,spacing:3,style:{textAlign:"center",marginTop:a.spacing(2)}},r.a.createElement(se.a,{item:!0,xs:12,md:6},r.a.createElement(w.a,{style:{padding:a.spacing(2,2)}},r.a.createElement(q.a,{variant:"h6",style:{marginBottom:a.spacing(1)}},"Number of repositories per shape type"),r.a.createElement(Be.Bar,{data:l.repos_overview_chart,options:(l.repos_overview_chart.datasets[0].data,{scales:{yAxes:[{ticks:{beginAtZero:!0}}],xAxes:[{ticks:{beginAtZero:!0}}]},legend:{display:!1},plugins:{datalabels:{display:!0,color:"black"}}}),plugins:[Me.a]}))),r.a.createElement(se.a,{item:!0,xs:12,md:6},r.a.createElement(w.a,{style:{padding:a.spacing(2,2)}},r.a.createElement(q.a,{variant:"h6",style:{marginBottom:a.spacing(1)}},"Number of resources per shape type"),r.a.createElement(Be.Bar,{data:l.files_overview_chart,options:(l.files_overview_chart.datasets[0].data,{scales:{yAxes:[{ticks:{beginAtZero:!0}}],xAxes:[{ticks:{beginAtZero:!0}}]},legend:{display:!1},plugins:{datalabels:{display:!0,color:"black"}}})})))),r.a.createElement(w.a,{elevation:6,style:{padding:a.spacing(3,2),margin:a.spacing(3,0)}},r.a.createElement(q.a,{variant:"h5"},g.reduce((function(e,a){return e+a.files.length}),0)," resources in\xa0",Object.keys(g).length," repositories"),r.a.createElement(ce.a,{display:"flex",style:{margin:a.spacing(2,0)}},r.a.createElement(w.a,{component:"form",className:e.paperSearch},r.a.createElement(ue.a,{className:e.searchInput,inputProps:{"aria-label":"search"},placeholder:"\ud83d\udd0e Search shapes",onChange:function(e){i({search:e.target.value})}}),r.a.createElement(me.a,{"aria-label":"search"},r.a.createElement(U.a,null))),r.a.createElement(Xe.a,{id:"shapes-per-page",value:l.shapes_per_page,onChange:function(e){i({shapes_per_page:e.target.value})},label:"Repos per page",type:"number",variant:"outlined"})),r.a.createElement(We.a,{style:{marginTop:a.spacing(2)},row:!0},r.a.createElement(Ue.a,{control:r.a.createElement(Ge.a,{checked:l.checkbox_shacl,onChange:m,name:"checkbox_shacl",color:"primary"}),label:"SHACL "+f("SHACL")}),r.a.createElement(Ue.a,{control:r.a.createElement(Ge.a,{checked:l.checkbox_shex,onChange:m,name:"checkbox_shex",color:"primary"}),label:"ShEx "+f("ShEx")}),r.a.createElement(Ue.a,{control:r.a.createElement(Ge.a,{checked:l.checkbox_sparql,onChange:m,name:"checkbox_sparql",color:"primary"}),label:"SPARQL "+f("SPARQL")}),r.a.createElement(Ue.a,{control:r.a.createElement(Ge.a,{checked:l.checkbox_owl,onChange:m,name:"checkbox_owl",color:"primary"}),label:"OWL "+f("OWL")}),r.a.createElement(Ue.a,{control:r.a.createElement(Ge.a,{checked:l.checkbox_skos,onChange:m,name:"checkbox_skos",color:"primary"}),label:"SKOS "+f("SKOS")}),r.a.createElement(Ue.a,{control:r.a.createElement(Ge.a,{checked:l.checkbox_obo,onChange:m,name:"checkbox_obo",color:"primary"}),label:"OBO "+f("OBO")}),r.a.createElement(Ue.a,{control:r.a.createElement(Ge.a,{checked:l.checkbox_rml,onChange:m,name:"checkbox_rml",color:"primary"}),label:"RML "+f("RML")}),r.a.createElement(Ue.a,{control:r.a.createElement(Ge.a,{checked:l.checkbox_r2rml,onChange:m,name:"checkbox_r2rml",color:"primary"}),label:"R2RML "+f("R2RML")}),r.a.createElement(Ue.a,{control:r.a.createElement(Ge.a,{checked:l.checkbox_nanopub,onChange:m,name:"checkbox_nanopub",color:"primary"}),label:"Nanopub "+f("Nanopub")}),r.a.createElement(Ue.a,{control:r.a.createElement(Ge.a,{checked:l.checkbox_dataset,onChange:m,name:"checkbox_dataset",color:"primary"}),label:"Dataset "+f("Dataset")}),r.a.createElement(Ue.a,{control:r.a.createElement(Ge.a,{checked:l.checkbox_openapi,onChange:m,name:"checkbox_openapi",color:"primary"}),label:"OpenAPI "+f("OpenAPI")}))),Object.keys(l.global_shapes_array).length<1&&r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(ie.a,{style:{padding:a.spacing(10,10)}})),g.slice((l.page-1)*l.shapes_per_page,l.page*l.shapes_per_page-1).map((function(t,n){return r.a.createElement(ne.a,{key:n.toString(),elevation:2,style:{padding:a.spacing(1,1),margin:a.spacing(2,0)}},r.a.createElement(le.a,{style:{paddingBottom:a.spacing(0),margin:a.spacing(0,0)}},r.a.createElement(q.a,null,r.a.createElement("a",{href:t.url,className:e.link},"\ud83d\udcc1\xa0",t.url.replace("https://github.com/","")),t.description&&r.a.createElement(r.a.Fragment,null,"\xa0-\xa0",t.description))),r.a.createElement(pe.a,{disableSpacing:!0,style:{padding:a.spacing(0,1),margin:a.spacing(0,0)}},r.a.createElement(me.a,{style:{fontSize:"16px"},onClick:h,name:t.url,"aria-expanded":l.expanded_files[t.url],"aria-label":"show more"},t.files.length," files",!l.expanded_files[t.url]&&r.a.createElement(Ie.a,null),l.expanded_files[t.url]&&r.a.createElement(qe.a,null))),r.a.createElement(oe.a,{in:l.expanded_files[t.url],timeout:"auto",unmountOnExit:!0},r.a.createElement(le.a,null,t.files.map((function(t,n){return r.a.createElement(ne.a,{key:n.toString(),style:{padding:a.spacing(1,1),margin:a.spacing(1,0)}},r.a.createElement(q.a,{style:{margin:a.spacing(1,0)}},r.a.createElement("a",{href:t.url,className:e.link},f(t.type)," ",t.label),r.a.createElement(Q,{endpoint:t.sparqlEndpoint,query:t.query}),t.description&&r.a.createElement("div",{style:{margin:a.spacing(1,0)}},r.a.createElement(De.a,{source:t.description.substring(0,1500),renderers:{paragraph:q.a}}))))})))))})),r.a.createElement(Qe.a,{count:Math.floor(Object.keys(g).length/l.shapes_per_page)+1,color:"primary",onChange:function(e,a){return i({page:a})},style:{display:"flex",justifyContent:"center"}}))}var aa="PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX dcterms: <http://purl.org/dc/terms/>\nPREFIX schema: <https://schema.org/>\nPREFIX sh: <http://www.w3.org/ns/shacl#>\nPREFIX shex: <http://www.w3.org/ns/shex#>\nPREFIX void: <http://rdfs.org/ns/void#>\nSELECT DISTINCT * WHERE { \n    ?shapeFileUri a schema:SoftwareSourceCode ;\n        a ?shape_type ;\n        rdfs:label ?label ;\n        schema:codeRepository ?repository .\n    FILTER(?shape_type != schema:SoftwareSourceCode)\n    OPTIONAL { ?repository rdfs:comment ?repo_description }\n    OPTIONAL { ?shapeFileUri schema:query ?query }\n    OPTIONAL { ?shapeFileUri void:sparqlEndpoint ?sparqlEndpoint }\n    OPTIONAL { ?shapeFileUri rdfs:comment ?shape_file_description }\n}",ta="PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX dcterms: <http://purl.org/dc/terms/>\nPREFIX schema: <https://schema.org/>\nPREFIX sh: <http://www.w3.org/ns/shacl#>\nPREFIX shex: <http://www.w3.org/ns/shex#>\nSELECT ?repository (count(?shapeFileUri) AS ?shapeFileCount) ?repo_description WHERE { \n  ?shapeFileUri a <https://schema.org/SoftwareSourceCode> ;\n    rdfs:label ?label ;\n    schema:codeRepository ?repository .\n  OPTIONAL { ?repository rdfs:comment ?repo_description }\n} GROUP BY ?repository ?repo_description\n",na="PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX dcterms: <http://purl.org/dc/terms/>\nPREFIX schema: <https://schema.org/>\nPREFIX sh: <http://www.w3.org/ns/shacl#>\nPREFIX shex: <http://www.w3.org/ns/shex#>\nPREFIX void: <http://rdfs.org/ns/void#>\nSELECT DISTINCT ?shape_type (count(distinct ?repository) AS ?repos_count) (count(distinct ?shape_file) AS ?files_count)\nWHERE { \n    ?shape_file a schema:SoftwareSourceCode ;\n        a ?shape_type ;\n        schema:codeRepository ?repository .\n    FILTER(?shape_type != schema:SoftwareSourceCode)\n} GROUP BY ?shape_type\n";var ra=Object(h.a)((function(e){return{settingsForm:{width:"100%","& .MuiFormControl-root":{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"& .MuiFormHelperText-root":{marginTop:e.spacing(0),marginBottom:e.spacing(1)}},saveButton:{textTransform:"none",margin:e.spacing(2,2)},fullWidth:{width:"100%"},normalFont:{fontSize:"14px"},smallerFont:{fontSize:"12px"},alignLeft:{textAlign:"left"},paperPadding:{padding:e.spacing(2,2),margin:e.spacing(2,2)},paperTitle:{fontWeight:300,marginBottom:e.spacing(1)}}}));function oa(){ra();var e=r.a.useState({open:!1,dialogOpen:!1,project_license:"",language_autocomplete:[]}),a=u()(e,2);a[0],a[1];return r.a.createElement(N.a,{className:"mainContainer"})}var la=Object(i.a)({palette:{primary:{light:"#63a4ff",main:"#1976d2",dark:"#004ba0"},secondary:{light:"#4caf50",main:"#7e57c2",dark:"#00600f"}},typography:{fontFamily:'"Open Sans", "Roboto", "Arial"',fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500}}),sa="Index for publicly available semantic resources (OWL & OBO ontologies, SKOS RDF vocabularies, SHACL & ShEx shapes, SPARQL queries, RML & R2RML mappings) stored in Git repositories (GitHub, GitLab, Gitee)";a.a=function(){return r.a.createElement(p.a,{theme:la},r.a.createElement(o.a,null,r.a.createElement("title",null,"Shapes of you"),r.a.createElement("meta",{name:"description",content:sa}),r.a.createElement("meta",{itemProp:"name",content:"Shapes of you"}),r.a.createElement("meta",{itemProp:"description",content:sa}),r.a.createElement("meta",{itemProp:"image",content:""}),r.a.createElement("meta",{property:"og:url",content:"https://index.semanticscience.org"}),r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:title",content:"Shapes of you"}),r.a.createElement("meta",{property:"og:description",content:sa}),r.a.createElement("meta",{property:"og:image",content:""}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{name:"twitter:title",content:"Shapes of you"}),r.a.createElement("meta",{name:"twitter:description",content:sa}),r.a.createElement("meta",{name:"twitter:image",content:""})),r.a.createElement(s.a,{basename:"/"},r.a.createElement(l.a,{style:{height:"100%",backgroundColor:"#eceff1"}},r.a.createElement($,null),r.a.createElement(c.a,{exact:!0,path:"/",component:ea}),r.a.createElement(c.a,{path:"/about",component:oa}),r.a.createElement(te,null))))}},701:function(e,a,t){t(702),e.exports=t(1317)},702:function(e,a){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},708:function(e,a,t){var n=t(709),r=t(710);"string"===typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n(r,o);e.exports=r.locals||{}},710:function(e,a,t){(a=t(711)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans);"]),a.push([e.i,'.flexGrow {\n  flex-grow: 1; \n}\n\n.mainContainer {\n  margin-top: 30px;\n  margin-bottom: 20px;\n}\n\npre, code {\n  font-family: monospace, monospace;\n  border-radius: 6px;\n  padding: 2px;\n  color: white;\n  background-color: #455a64;\n  /* background-color: #1976d2; */\n}\n  \n/* @import url("https://fonts.googleapis.com/icon?family=Material+Icons");\nbody {\n  margin: 0;\n  padding: 0;\n  text-align: center; } */\n',""]),e.exports=a},810:function(e,a,t){var n={"./af":296,"./af.js":296,"./ar":297,"./ar-dz":298,"./ar-dz.js":298,"./ar-kw":299,"./ar-kw.js":299,"./ar-ly":300,"./ar-ly.js":300,"./ar-ma":301,"./ar-ma.js":301,"./ar-sa":302,"./ar-sa.js":302,"./ar-tn":303,"./ar-tn.js":303,"./ar.js":297,"./az":304,"./az.js":304,"./be":305,"./be.js":305,"./bg":306,"./bg.js":306,"./bm":307,"./bm.js":307,"./bn":308,"./bn-bd":309,"./bn-bd.js":309,"./bn.js":308,"./bo":310,"./bo.js":310,"./br":311,"./br.js":311,"./bs":312,"./bs.js":312,"./ca":313,"./ca.js":313,"./cs":314,"./cs.js":314,"./cv":315,"./cv.js":315,"./cy":316,"./cy.js":316,"./da":317,"./da.js":317,"./de":318,"./de-at":319,"./de-at.js":319,"./de-ch":320,"./de-ch.js":320,"./de.js":318,"./dv":321,"./dv.js":321,"./el":322,"./el.js":322,"./en-au":323,"./en-au.js":323,"./en-ca":324,"./en-ca.js":324,"./en-gb":325,"./en-gb.js":325,"./en-ie":326,"./en-ie.js":326,"./en-il":327,"./en-il.js":327,"./en-in":328,"./en-in.js":328,"./en-nz":329,"./en-nz.js":329,"./en-sg":330,"./en-sg.js":330,"./eo":331,"./eo.js":331,"./es":332,"./es-do":333,"./es-do.js":333,"./es-mx":334,"./es-mx.js":334,"./es-us":335,"./es-us.js":335,"./es.js":332,"./et":336,"./et.js":336,"./eu":337,"./eu.js":337,"./fa":338,"./fa.js":338,"./fi":339,"./fi.js":339,"./fil":340,"./fil.js":340,"./fo":341,"./fo.js":341,"./fr":342,"./fr-ca":343,"./fr-ca.js":343,"./fr-ch":344,"./fr-ch.js":344,"./fr.js":342,"./fy":345,"./fy.js":345,"./ga":346,"./ga.js":346,"./gd":347,"./gd.js":347,"./gl":348,"./gl.js":348,"./gom-deva":349,"./gom-deva.js":349,"./gom-latn":350,"./gom-latn.js":350,"./gu":351,"./gu.js":351,"./he":352,"./he.js":352,"./hi":353,"./hi.js":353,"./hr":354,"./hr.js":354,"./hu":355,"./hu.js":355,"./hy-am":356,"./hy-am.js":356,"./id":357,"./id.js":357,"./is":358,"./is.js":358,"./it":359,"./it-ch":360,"./it-ch.js":360,"./it.js":359,"./ja":361,"./ja.js":361,"./jv":362,"./jv.js":362,"./ka":363,"./ka.js":363,"./kk":364,"./kk.js":364,"./km":365,"./km.js":365,"./kn":366,"./kn.js":366,"./ko":367,"./ko.js":367,"./ku":368,"./ku.js":368,"./ky":369,"./ky.js":369,"./lb":370,"./lb.js":370,"./lo":371,"./lo.js":371,"./lt":372,"./lt.js":372,"./lv":373,"./lv.js":373,"./me":374,"./me.js":374,"./mi":375,"./mi.js":375,"./mk":376,"./mk.js":376,"./ml":377,"./ml.js":377,"./mn":378,"./mn.js":378,"./mr":379,"./mr.js":379,"./ms":380,"./ms-my":381,"./ms-my.js":381,"./ms.js":380,"./mt":382,"./mt.js":382,"./my":383,"./my.js":383,"./nb":384,"./nb.js":384,"./ne":385,"./ne.js":385,"./nl":386,"./nl-be":387,"./nl-be.js":387,"./nl.js":386,"./nn":388,"./nn.js":388,"./oc-lnc":389,"./oc-lnc.js":389,"./pa-in":390,"./pa-in.js":390,"./pl":391,"./pl.js":391,"./pt":392,"./pt-br":393,"./pt-br.js":393,"./pt.js":392,"./ro":394,"./ro.js":394,"./ru":395,"./ru.js":395,"./sd":396,"./sd.js":396,"./se":397,"./se.js":397,"./si":398,"./si.js":398,"./sk":399,"./sk.js":399,"./sl":400,"./sl.js":400,"./sq":401,"./sq.js":401,"./sr":402,"./sr-cyrl":403,"./sr-cyrl.js":403,"./sr.js":402,"./ss":404,"./ss.js":404,"./sv":405,"./sv.js":405,"./sw":406,"./sw.js":406,"./ta":407,"./ta.js":407,"./te":408,"./te.js":408,"./tet":409,"./tet.js":409,"./tg":410,"./tg.js":410,"./th":411,"./th.js":411,"./tk":412,"./tk.js":412,"./tl-ph":413,"./tl-ph.js":413,"./tlh":414,"./tlh.js":414,"./tr":415,"./tr.js":415,"./tzl":416,"./tzl.js":416,"./tzm":417,"./tzm-latn":418,"./tzm-latn.js":418,"./tzm.js":417,"./ug-cn":419,"./ug-cn.js":419,"./uk":420,"./uk.js":420,"./ur":421,"./ur.js":421,"./uz":422,"./uz-latn":423,"./uz-latn.js":423,"./uz.js":422,"./vi":424,"./vi.js":424,"./x-pseudo":425,"./x-pseudo.js":425,"./yo":426,"./yo.js":426,"./zh-cn":427,"./zh-cn.js":427,"./zh-hk":428,"./zh-hk.js":428,"./zh-mo":429,"./zh-mo.js":429,"./zh-tw":430,"./zh-tw.js":430};function r(e){var a=o(e);return t(a)}function o(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=810},917:function(e,a){},918:function(e,a){},926:function(e,a){},928:function(e,a){},937:function(e,a){},939:function(e,a){},965:function(e,a){},966:function(e,a){},971:function(e,a){},973:function(e,a){},980:function(e,a){},999:function(e,a){}},[[701,1,2]]]);
//# sourceMappingURL=app.a4dd8b90.chunk.js.map