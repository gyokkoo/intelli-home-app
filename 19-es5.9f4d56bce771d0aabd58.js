function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{DLJh:function(e,t,o){"use strict";o.r(t),o.d(t,"RoomsPageModule",(function(){return R}));var n,r=o("TEn/"),i=o("ofXK"),a=o("3Pt+"),c=o("qtYk"),s=o("tyNb"),m=o("fXoL"),l=o("LRne"),u={id:"living-room",headerImage:"tv",title:"Living room",temperature:21,humidity:68,electricity:412,lampPower:144,imagePath:"./assets/room-images/living-room.jpg"},p={id:"bathroom",headerImage:"bathtub",title:"Bathroom",temperature:27,humidity:87,electricity:43,lampPower:20,imagePath:"./assets/room-images/bathroom.jpg"},b={id:"bedroom",headerImage:"king_bed",title:"Bedroom",temperature:23,humidity:62,electricity:89,lampPower:20,imagePath:"./assets/room-images/bedroom.jpg"},d={id:"bedroom-guests",headerImage:"king_bed",title:"Bedroom (Guests)",temperature:22,humidity:67,electricity:9,lampPower:20,imagePath:"./assets/room-images/bedroom-guests.jpg"},g={id:"kitchen",headerImage:"room_service",title:"Kitchen",temperature:22,humidity:69,electricity:21,lampPower:134,imagePath:"./assets/room-images/kitchen.jpeg"},h=((n=function(){function e(){_classCallCheck(this,e),this.roomsState=new Map,this.roomsState.set(u.id,u),this.roomsState.set(p.id,p),this.roomsState.set(b.id,b),this.roomsState.set(d.id,d),this.roomsState.set(g.id,g)}return _createClass(e,[{key:"getRoomsData",value:function(){return Object(l.a)(_toConsumableArray(this.roomsState.values()))}},{key:"getRoomById",value:function(e){return Object(l.a)(this.roomsState.get(e))}},{key:"updateRoom",value:function(e,t){this.roomsState.set(e,t)}}]),e}()).\u0275fac=function(e){return new(e||n)},n.\u0275prov=m.Jb({token:n,factory:n.\u0275fac}),n);function f(e,t){if(1&e&&(m.Tb(0,"div",1),m.Tb(1,"div",2),m.Tb(2,"span",3),m.uc(3),m.Sb(),m.Tb(4,"span",4),m.uc(5),m.Sb(),m.Sb(),m.Tb(6,"div",5),m.Tb(7,"div",6),m.Ob(8,"img",7),m.uc(9),m.Sb(),m.Tb(10,"div",6),m.Ob(11,"img",8),m.uc(12),m.Sb(),m.Tb(13,"div",6),m.Ob(14,"img",9),m.uc(15),m.Sb(),m.Tb(16,"div",6),m.Ob(17,"img",10),m.uc(18),m.Sb(),m.Sb(),m.Sb()),2&e){var o=m.dc();m.Cb(3),m.vc(o.roomData.headerImage),m.Cb(2),m.vc(o.roomData.title),m.Cb(4),m.wc(" ",o.roomData.temperature," \xbaC "),m.Cb(3),m.wc(" ",o.roomData.humidity,"% "),m.Cb(3),m.wc(" ",o.roomData.electricity," kWh "),m.Cb(3),m.wc(" ",o.roomData.lampPower," lm ")}}var y,v=((y=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||y)},y.\u0275cmp=m.Hb({type:y,selectors:[["app-room-card"]],inputs:{roomData:"roomData"},decls:1,vars:1,consts:[["class","inline-block room-wrapper",4,"ngIf"],[1,"inline-block","room-wrapper"],[1,"room-header"],[1,"material-icons-outlined"],[1,"room-name"],[1,"room-statistics"],[1,"inline-block","room-stat"],["src","./assets/app-icons/temperature-icon.png","alt","Temperature icon",1,"small-icon"],["src","./assets/app-icons/water-drop-icon.png","alt","Water drop",1,"small-icon"],["src","./assets/app-icons/electricity-icon.png","alt","Electricity icon",1,"small-icon"],["src","./assets/app-icons/lamp-icon.png","alt","Electricity icon",1,"small-icon"]],template:function(e,t){1&e&&m.tc(0,f,19,6,"div",0),2&e&&m.ic("ngIf",t.roomData)},directives:[i.k],styles:[".room-name[_ngcontent-%COMP%]{padding-left:1rem;font-size:larger;vertical-align:super}.small-icon[_ngcontent-%COMP%]{width:20px;height:20px;opacity:1%}.room-statistics[_ngcontent-%COMP%]{padding-top:.5rem;color:#6c757d;text-align:left;font-size:small}.room-header[_ngcontent-%COMP%]{text-align:left;padding-left:10px;width:19rem}.room-stat[_ngcontent-%COMP%]{padding-right:1rem}.room-image[_ngcontent-%COMP%]{width:24px;height:24px}.room-wrapper[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.03);box-shadow:0 2px 2px rgba(0,0,0,.24),0 0 2px rgba(0,0,0,.12);padding:1rem 1.5rem}"]}),y),C=function(e){return["edit",e]};function _(e,t){if(1&e&&(m.Tb(0,"div",2),m.Ob(1,"app-room-card",3),m.Sb()),2&e){var o=t.$implicit;m.Cb(1),m.ic("roomData",o)("routerLink",m.kc(2,C,o.id))}}var S,w,T,P,O,k=((w=function(){function e(t){_classCallCheck(this,e),this.roomsDataService=t}return _createClass(e,[{key:"ngOnInit",value:function(){this.roomsData$=this.roomsDataService.getRoomsData()}}]),e}()).\u0275fac=function(e){return new(e||w)(m.Nb(h))},w.\u0275cmp=m.Hb({type:w,selectors:[["app-rooms-page"]],decls:3,vars:3,consts:[["id","container"],["class","room-data-card",4,"ngFor","ngForOf"],[1,"room-data-card"],[3,"roomData","routerLink"]],template:function(e,t){1&e&&(m.Tb(0,"div",0),m.tc(1,_,2,4,"div",1),m.ec(2,"async"),m.Sb()),2&e&&(m.Cb(1),m.ic("ngForOf",m.fc(2,1,t.roomsData$)))},directives:[i.j,v,r.n,s.h],pipes:[i.b],styles:[".room-data-card[_ngcontent-%COMP%]{margin-top:.5rem}"]}),w),M=((S=function e(){_classCallCheck(this,e)}).\u0275fac=function(e){return new(e||S)},S.\u0275cmp=m.Hb({type:S,selectors:[["app-tab2"]],decls:8,vars:2,consts:[[3,"translucent"],[3,"fullscreen"],[1,"page-container"]],template:function(e,t){1&e&&(m.Tb(0,"ion-header",0),m.Tb(1,"ion-toolbar"),m.Tb(2,"ion-title"),m.Tb(3,"div"),m.uc(4,"Rooms"),m.Sb(),m.Sb(),m.Sb(),m.Sb(),m.Tb(5,"ion-content",1),m.Tb(6,"div",2),m.Ob(7,"app-rooms-page"),m.Sb(),m.Sb()),2&e&&(m.ic("translucent",!0),m.Cb(5),m.ic("fullscreen",!0))},directives:[r.c,r.j,r.i,r.b,k],styles:[".page-container[_ngcontent-%COMP%]{position:relative;height:100%}"]}),S),x=o("5RNC"),D=o("f0Cb"),I=function(e){return{opacity:e}},L=[{path:"",component:M},{path:"edit/:id",component:(T=function(){function e(t,o,n){_classCallCheck(this,e),this.route=t,this.router=o,this.roomsDataService=n}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.routeSub=this.route.params.subscribe((function(t){e.roomsDataService.getRoomById(t.id).subscribe((function(t){e.room=t}))}))}},{key:"goBack",value:function(){this.roomsDataService.updateRoom(this.room.id,this.room),this.router.navigate(["../../"],{relativeTo:this.route})}},{key:"formatLabel",value:function(e){return e.toString()}}]),e}(),T.\u0275fac=function(e){return new(e||T)(m.Nb(s.a),m.Nb(s.g),m.Nb(h))},T.\u0275cmp=m.Hb({type:T,selectors:[["app-edit-room-preferences"]],decls:33,vars:13,consts:[[3,"translucent"],["name","close",1,"close-button",3,"click"],[3,"fullscreen"],[1,"page-container"],[1,"room-image-container"],["alt","Room image",3,"ngStyle","src"],[1,"edit-preferences-header"],[1,"inline-block"],[1,"header-value"],[1,"material-icons","cold-temp-icon"],["color","primary","thumbLabel","","min","10","max","50",3,"value","displayWith","input"],[1,"material-icons","hot-temp-icon"],[1,"material-icons-outlined","ion-color-primary"],["color","primary","thumbLabel","","min","0","max","150",3,"value","displayWith","input"],[1,"material-icons","mat-form-field-outline","lamp-icon"]],template:function(e,t){1&e&&(m.Tb(0,"ion-header",0),m.Tb(1,"ion-toolbar"),m.Tb(2,"ion-title"),m.Tb(3,"span"),m.uc(4),m.Tb(5,"ion-icon",1),m.bc("click",(function(){return t.goBack()})),m.Sb(),m.Sb(),m.Sb(),m.Sb(),m.Sb(),m.Tb(6,"ion-content",2),m.Tb(7,"div",3),m.Tb(8,"div",4),m.Ob(9,"img",5),m.Sb(),m.Tb(10,"div"),m.Tb(11,"div",6),m.Tb(12,"div",7),m.uc(13,"Temperature"),m.Sb(),m.Tb(14,"span",8),m.uc(15),m.Sb(),m.Sb(),m.Tb(16,"span",9),m.uc(17," ac_unit "),m.Sb(),m.Tb(18,"mat-slider",10),m.bc("input",(function(e){return t.room.temperature=e.value})),m.Sb(),m.Tb(19,"span",11),m.uc(20," wb_sunny "),m.Sb(),m.Sb(),m.Ob(21,"mat-divider"),m.Tb(22,"div"),m.Tb(23,"div",6),m.Tb(24,"div",7),m.uc(25,"Lighting"),m.Sb(),m.Tb(26,"span",8),m.uc(27),m.Sb(),m.Sb(),m.Tb(28,"span",12),m.uc(29," wb_incandescent "),m.Sb(),m.Tb(30,"mat-slider",13),m.bc("input",(function(e){return t.room.lampPower=e.value})),m.Sb(),m.Tb(31,"span",14),m.uc(32," wb_incandescent "),m.Sb(),m.Sb(),m.Sb(),m.Sb()),2&e&&(m.ic("translucent",!0),m.Cb(4),m.wc(" ",null==t.room?null:t.room.title," "),m.Cb(2),m.ic("fullscreen",!0),m.Cb(3),m.ic("ngStyle",m.kc(11,I,t.room.lampPower/150))("src",t.room.imagePath,m.oc),m.Cb(6),m.wc("",null==t.room?null:t.room.temperature," \xbaC"),m.Cb(3),m.ic("value",t.room.temperature)("displayWith",t.formatLabel),m.Cb(9),m.wc("",null==t.room?null:t.room.lampPower," lm"),m.Cb(3),m.ic("value",t.room.lampPower)("displayWith",t.formatLabel))},directives:[r.c,r.j,r.i,r.d,r.b,i.l,x.a,D.a],styles:[".room-image-container[_ngcontent-%COMP%]{background-color:#000;margin:auto}.room-image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{opacity:.5;margin-bottom:-4px}ion-title[_ngcontent-%COMP%]{text-align:center}@media screen and (max-width:678px){.page-container[_ngcontent-%COMP%]{padding-top:0!important}.room-image-container[_ngcontent-%COMP%]{width:100%}}@media screen and (min-width:679px){.room-image-container[_ngcontent-%COMP%]{width:400px}}.room-image-container[_ngcontent-%COMP%]{margin-bottom:1.5rem}.close-button[_ngcontent-%COMP%]{cursor:pointer;margin-top:-5px;width:30px;height:30px;float:right}mat-slider[_ngcontent-%COMP%]{width:210px}.mat-divider[_ngcontent-%COMP%]{margin:2rem 10%}.cold-temp-icon[_ngcontent-%COMP%], .edit-preferences-header[_ngcontent-%COMP%], .hot-temp-icon[_ngcontent-%COMP%], .lamp-icon[_ngcontent-%COMP%]{color:var(--ion-color-primary)}.edit-preferences-header[_ngcontent-%COMP%]{font-size:larger;padding-bottom:2rem}.edit-preferences-header[_ngcontent-%COMP%]   .inline-block[_ngcontent-%COMP%]{width:115px;text-align:left}.edit-preferences-header[_ngcontent-%COMP%]   .header-value[_ngcontent-%COMP%]{display:inline-block;width:80px;color:var(--ion-color-dark)}.small-icon[_ngcontent-%COMP%]{width:24px;height:24px;opacity:1%}"]}),T)}],j=((P=function e(){_classCallCheck(this,e)}).\u0275mod=m.Lb({type:P}),P.\u0275inj=m.Kb({factory:function(e){return new(e||P)},imports:[[s.i.forChild(L)],s.i]}),P),A=o("vvyD"),R=((O=function e(){_classCallCheck(this,e)}).\u0275mod=m.Lb({type:O}),O.\u0275inj=m.Kb({factory:function(e){return new(e||O)},providers:[h],imports:[[r.k,i.c,a.c,A.a,c.a,j]]}),O)}}]);