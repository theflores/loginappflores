(this.webpackJsonploginapp=this.webpackJsonploginapp||[]).push([[0],{26:function(e,n,t){},27:function(e,n,t){},34:function(e,n,t){},35:function(e,n,t){},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),o=t(19),c=t.n(o),s=(t(26),t(27),t(12)),i=t(0);var d=function(e){var n=e.label,t=e.uri;return Object(i.jsx)("li",{children:Object(i.jsx)(s.b,{to:t,children:n})})};t(34);var l=function(){var e=[{label:"Home",uri:"/"},{label:"Todo's",uri:"/todos"},{label:"Login",uri:"/login"}].map((function(e,n){return Object(i.jsx)(d,{label:e.label,uri:e.uri},n)}));return Object(i.jsx)("nav",{children:Object(i.jsx)("ul",{children:e})})};var j=function(e){var n=e.title;return Object(i.jsx)("h1",{children:n})};t(35);var u=function(e){return e.children,Object(i.jsxs)("header",{children:[Object(i.jsx)(j,{title:"App Theflores"}),Object(i.jsx)(l,{})]})},b=t(10),p=t(6),x=t(13);var m=function(e){var n=e.children;return Object(i.jsx)("form",{className:"flex flex-col my-36 p-8 space-y-4 max-w-md mx-auto font-sans text-lg align-middle bg-green-800 bg-opacity-30 shadow-md rounded-lg",children:n})},O=t(21);var h=function(e){var n=e.type,t=e.id,r=e.fname,a=e.onChange,o=e.caption,c=e.value,s=e.error,d=e.labelClassName,l=e.containerClassName,j=Object(O.a)(e,["type","id","fname","onChange","caption","value","error","labelClassName","containerClassName"]);return Object(i.jsxs)("section",{className:l,children:[Object(i.jsx)("label",{className:d,children:o}),Object(i.jsx)("input",Object(p.a)({class:"placeholder-blue-500 placeholder-opacity-50 md:focus:placeholder-red-600 align-middle m-4 text-center text-base font-serif",type:n,id:t,name:r,onChange:a,value:c},j)),s?Object(i.jsx)("section",{children:s}):null]})};var f=function(e){var n=e.caption,t=e.onClick;return Object(i.jsx)("button",{onClick:t,className:["transition","duration-500","ease-in-out","bg-center","justify-center","border-none","border-transparent","text-base","font-medium","rounded","text-white","bg-blue-600","hover:bg-red-600","transform hover:-translate-y-1","hover:scale-110","md:py-4","md:text-lg","md:px-10"].join(" "),children:n})};var v=function(){var e=Object(r.useState)({username:"",password:"",usernameError:"",passwordError:""}),n=Object(x.a)(e,2),t=n[0],a=n[1],o=function(e){var n,r=e.currentTarget,o=r.name,c=r.value,s=null;"password"===o&&(s=/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,32}$/.test(c)?null:"Contrase\xf1a Inv\xe1lida"),a(Object(p.a)(Object(p.a)({},t),{},(n={},Object(b.a)(n,o,c),Object(b.a)(n,o+"Error",s),n)))};return Object(i.jsxs)(m,{children:[Object(i.jsx)(h,{type:"text",id:"username",fname:"username",onChange:o,caption:"Correo Electr\xf3nico",value:t.username,error:t.usernameError,placeholder:"Tu correo"}),Object(i.jsx)(h,{type:"password",id:"password",fname:"password",onChange:o,caption:"Contrase\xf1a",value:t.password,error:t.passwordError,placeholder:"Contrase\xf1a"}),Object(i.jsx)(f,{caption:"Enviar",onClick:function(e){e.preventDefault(),e.stopPropagation();var n=t.username,r=t.password;alert("Usuario:".concat(n," Psswd:").concat(r))}})]})};var g=function(){return Object(i.jsx)("section",{children:Object(i.jsx)(v,{})})};var w=function(){return Object(i.jsx)("section",{children:Object(i.jsx)("h1",{children:"Todo WApp V1"})})},C=t(11);var N=function(e){var n=e.onChange,t=e.value,r=e.onAddNew;return Object(i.jsx)("section",{className:"TodoAddNew align-middle",children:Object(i.jsxs)("section",{className:"flex justify-between items-center my-4 p-2 border align-middle bg-green-800 bg-opacity-50 shadow-md rounded-lg max-w-md mx-auto",children:[Object(i.jsx)(h,{type:"text",id:"txtNTodo",fname:"txtNTodo",onChange:n,value:t,caption:"Nuevo Todo",className:"flex p-2 m-2 w-5/6 bg-white shadow align-middle",labelClassName:"flex w-5/6 align-middle",containerClassName:"flex",onKeyUp:function(e){13==e.keyCode&&r(e)}}),Object(i.jsx)(C.a,{size:"3rem",onClick:r})]})})};function y(e){var n=e.descripcion,t=e.id,r=e.completed,a=e.doneHandler,o=e.deleteHandler,c=r?"striked":"";return Object(i.jsxs)("li",{children:[Object(i.jsx)("span",{className:c,children:n}),Object(i.jsx)(C.c,{onClick:function(e){a(t)}}),Object(i.jsx)(C.b,{onClick:function(e){o(t)}})]})}var T=function(e){var n=e.todos,t=e.doneHandler,r=e.deleteHandler,a=n.map((function(e){return Object(i.jsx)(y,{descripcion:e.description,id:e.id,completed:e.completed,doneHandler:t,deleteHandler:r},e.doneHandlerid)}));return Object(i.jsx)("section",{className:"TodoList",children:Object(i.jsx)("ul",{children:a})})};t(36);var k=function(){var e=Object(r.useState)({todos:[],newTodo:""}),n=Object(x.a)(e,2),t=n[0],a=n[1];return t.todos.map((function(e){return JSON.stringify(e)})).join(" | "),Object(i.jsxs)("section",{children:[Object(i.jsx)(N,{onChange:function(e){var n=e.currentTarget,r=(n.name,n.value);a(Object(p.a)(Object(p.a)({},t),{},{newTodo:r}))},value:t.newTodo,onAddNew:function(e){var n={description:t.newTodo,completed:!1,id:(new Date).getTime()},r=t.todos;r.push(n),a({todos:r,newTodo:""})}}),Object(i.jsx)(T,{todos:t.todos,doneHandler:function(e){var n=t.todos.map((function(n){return n.id==e&&(n.completed=!n.completed),n}));a(Object(p.a)(Object(p.a)({},t),{},{todos:n}))},deleteHandler:function(e){var n=t.todos.filter((function(n){return n.id!==e}));a(Object(p.a)(Object(p.a)({},t),{},{todos:n}))}})]})},H=t(2);var E=function(){return Object(i.jsx)(s.a,{children:Object(i.jsxs)("section",{children:[Object(i.jsx)(u,{}),Object(i.jsxs)(H.c,{children:[Object(i.jsx)(H.a,{path:"/",exact:!0,children:Object(i.jsx)(w,{})}),Object(i.jsx)(H.a,{path:"/todos",exact:!0,children:Object(i.jsx)(k,{})}),Object(i.jsx)(H.a,{path:"/login",exact:!0,children:Object(i.jsx)(g,{})})]})]})})},A=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,38)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,o=n.getLCP,c=n.getTTFB;t(e),r(e),a(e),o(e),c(e)}))};c.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(E,{})}),document.getElementById("root")),A()}},[[37,1,2]]]);
//# sourceMappingURL=main.6ef070d2.chunk.js.map