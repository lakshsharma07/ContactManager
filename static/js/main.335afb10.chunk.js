(this["webpackJsonphello-world"]=this["webpackJsonphello-world"]||[]).push([[0],{37:function(e,a,t){e.exports=t(66)},66:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(32),o=t.n(c),l=t(13),s=t(14),i=t(6),m=t(7),u=t(9),p=t(8),h=t(2),d=t.n(h),b=t(11),f=t(36),E=t(18),v=t(12),y=t.n(v),N=r.a.createContext(),g=function(e,a){switch(a.type){case"DELETE_CONTACT":return Object(E.a)({},e,{contacts:e.contacts.filter((function(e){return e.id!==a.payload}))});case"ADD_CONTACT":return Object(E.a)({},e,{contacts:[a.payload].concat(Object(f.a)(e.contacts))});case"UPDATE_CONTACT":return Object(E.a)({},e,{contacts:e.contacts.map((function(e){return e.id===a.payload.id?e=a.payload:e}))});default:return e}},C=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={contacts:[],dispatch:function(a){return e.setState((function(e){return g(e,a)}))}},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("https://jsonplaceholder.typicode.com/users");case 2:a=e.sent,this.setState({contacts:a.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(N.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),O=N.Consumer,j=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={showContactInfo:!1},e.onDeleteClick=function(){var e=Object(b.a)(d.a.mark((function e(a,t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.delete("https://jsonplaceholder.typicode.com/users/".concat(a));case 3:t({type:"DELETE_CONTACT",payload:a}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),t({type:"DELETE_CONTACT",payload:a});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(a,t){return e.apply(this,arguments)}}(),e}return Object(m.a)(t,[{key:"render",value:function(){var e=this,a=this.props.contact,t=a.id,n=a.name,c=a.email,o=a.phone,s=this.state.showContactInfo;return r.a.createElement(O,null,(function(a){var i=a.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h3",{style:k},n,r.a.createElement("i",{onClick:function(){return e.setState({showContactInfo:!e.state.showContactInfo})},className:"fas fa-sort-down",style:{cursor:"pointer"}}),r.a.createElement("i",{className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:e.onDeleteClick.bind(e,t,i)}),r.a.createElement(l.b,{to:"contact/edit/".concat(t)},r.a.createElement("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",float:"right",color:"blue",marginRight:"16px"}}))),s?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email: ",c),r.a.createElement("li",{className:"list-group-item"},"Phone: ",o)):null)}))}}]),t}(n.Component),k={color:"red",fontSize:"20px"},x=j,w=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(O,null,(function(e){var a=e.contacts;return r.a.createElement("React-fragment",null,r.a.createElement("h1",{className:"display-4 mb-4"},r.a.createElement("span",{className:"text-danger"},"Contact")," List"),a.map((function(e){return r.a.createElement(x,{key:e.id,contact:e})})))}))}}]),t}(n.Component),S=t(16),A=t(35),T=t.n(A),D=function(e){var a=e.label,t=e.name,n=e.value,c=e.placeholder,o=e.type,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",{name:t,placeholder:c,type:o,className:T()("form-control form-control-lg",{"is-invalid":s}),value:n,onChange:l}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))};D.defaultProps={type:"text"};var P=D,_=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={name:"",email:"",phone:"",errors:{}},e.onSubmit=function(){var a=Object(b.a)(d.a.mark((function a(t,n){var r,c,o,l,s,i;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.preventDefault(),r=e.state,c=r.name,o=r.email,l=r.phone,""!==c){a.next=5;break}return e.setState({errors:{name:"Name is required"}}),a.abrupt("return");case 5:if(""!==o){a.next=8;break}return e.setState({errors:{email:"Email is required"}}),a.abrupt("return");case 8:if(""!==l){a.next=11;break}return e.setState({errors:{phone:"PhoneNumber is required"}}),a.abrupt("return");case 11:return s={name:c,email:o,phone:l},a.next=14,y.a.post("https://jsonplaceholder.typicode.com/users",s);case 14:i=a.sent,t({type:"ADD_CONTACT",payload:i.data}),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/");case 18:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}(),e.onChange=function(a){return e.setState(Object(S.a)({},a.target.name,a.target.value))},e}return Object(m.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.errors;return r.a.createElement(O,null,(function(a){var l=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(P,{label:"Name",name:"name",placeholder:"Enter Name",value:t,onChange:e.onChange,error:o.name}),r.a.createElement(P,{label:"Email",name:"email",type:"email",placeholder:"Enter Email",value:n,onChange:e.onChange,error:o.email}),r.a.createElement(P,{label:"Phone Number",name:"phone",placeholder:"Enter PhoneNumber",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-light btn-block"}))))}))}}]),t}(n.Component),q=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={name:"",email:"",phone:"",errors:{}},e.onSubmit=function(){var a=Object(b.a)(d.a.mark((function a(t,n){var r,c,o,l,s,i,m;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.preventDefault(),r=e.state,c=r.name,o=r.email,l=r.phone,""!==c){a.next=5;break}return e.setState({errors:{name:"Name is required"}}),a.abrupt("return");case 5:if(""!==o){a.next=8;break}return e.setState({errors:{email:"Email is required"}}),a.abrupt("return");case 8:if(""!==l){a.next=11;break}return e.setState({errors:{phone:"PhoneNumber is required"}}),a.abrupt("return");case 11:return s={name:c,email:o,phone:l},i=e.props.match.params.id,a.next=15,y.a.put("https://jsonplaceholder.typicode.com/users/".concat(i),s);case 15:m=a.sent,t({type:"UPDATE_CONTACT",payload:m.data}),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/");case 19:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}(),e.onChange=function(a){return e.setState(Object(S.a)({},a.target.name,a.target.value))},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(d.a.mark((function e(){var a,t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.match.params.id,e.next=3,y.a.get("https://jsonplaceholder.typicode.com/users/".concat(a));case 3:t=e.sent,n=t.data,this.setState({name:n.name,email:n.email,phone:n.phone});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.errors;return r.a.createElement(O,null,(function(a){var l=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(P,{label:"Name",name:"name",placeholder:"Enter Name",value:t,onChange:e.onChange,error:o.name}),r.a.createElement(P,{label:"Email",name:"email",type:"email",placeholder:"Enter Email",value:n,onChange:e.onChange,error:o.email}),r.a.createElement(P,{label:"Phone Number",name:"phone",placeholder:"Enter PhoneNumber",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Update Contact",className:"btn btn-light btn-block"}))))}))}}]),t}(n.Component),I=function(e){return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"navbar-brand"},e.branding)),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"})," Home")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"}),"Add")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"}),"About")))))};I.defaultProps={branding:"My App"};var L=I;function M(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact manager"),r.a.createElement("p",{className:"lead"},"This is a simple application for managing the contacts."),r.a.createElement("p",{className:"text-secoundary"},"Version: 1.0.0"))}function U(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404")," Page Not Found"),r.a.createElement("p",{className:"lead"},"Sorry, the page you are looking for does not exist."))}t(65);var B=function(){return r.a.createElement(C,null,r.a.createElement(l.a,{basename:ProcessingInstruction.env.PUBLIC_URL},r.a.createElement("div",{className:"App"},r.a.createElement(L,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:w}),r.a.createElement(s.a,{exact:!0,path:"/contact/add",component:_}),r.a.createElement(s.a,{exact:!0,path:"/contact/edit/:id",component:q}),r.a.createElement(s.a,{exact:!0,path:"/about",component:M}),r.a.createElement(s.a,{component:U}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("main")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.335afb10.chunk.js.map