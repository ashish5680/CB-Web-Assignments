(this["webpackJsonpreact-todo-app-v1-yt"]=this["webpackJsonpreact-todo-app-v1-yt"]||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var o=n(2),c=n.n(o),a=n(8),i=n.n(a),r=(n(15),n(7)),d=n(3),s=n(1);var u=function(t){var e=Object(o.useState)(t.edit?t.edit.value:""),n=Object(d.a)(e,2),c=n[0],a=n[1],i=Object(o.useRef)(null);Object(o.useEffect)((function(){i.current.focus()}));var r=function(t){a(t.target.value)},u=function(e){e.preventDefault(),t.onSubmit({id:Math.floor(1e4*Math.random()),text:c}),a("")};return Object(s.jsx)("form",{className:"todo-form",onSubmit:u,children:t.edit?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("input",{placeholder:"Update todo",value:c,onChange:r,name:"text",ref:i,className:"todo-input edit"}),Object(s.jsx)("button",{onClick:u,className:"todo-button edit",children:"Update"})]}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("input",{placeholder:"Add a task",value:c,onChange:r,name:"text",className:"todo-input",ref:i}),Object(s.jsx)("button",{onClick:u,className:"todo-button",children:"Add todo"})]})})},l=n(10),j=n(9);var b=function(t){var e=t.todos,n=t.completeTodo,c=t.removeTodo,a=t.updateTodo,i=Object(o.useState)({id:null,value:""}),r=Object(d.a)(i,2),b=r[0],f=r[1];return b.id?Object(s.jsx)(u,{edit:b,onSubmit:function(t){a(b.id,t),f({id:null,value:""})}}):e.map((function(t,e){return Object(s.jsxs)("div",{className:t.isComplete?"todo-row complete":"todo-row",children:[Object(s.jsx)("div",{onClick:function(){return n(t.id)},children:t.text},t.id),Object(s.jsxs)("div",{className:"icons",children:[Object(s.jsx)(j.a,{onClick:function(){return f({id:t.id,value:t.text})},className:"edit-icon"}),Object(s.jsx)(l.a,{onClick:function(){return c(t.id)},className:"delete-icon"})]})]},e)}))};var f=function(){var t=Object(o.useState)([]),e=Object(d.a)(t,2),n=e[0],c=e[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{className:"heading",children:" To-Do List App "}),Object(s.jsx)("h1",{children:"What's the plan for today?"}),Object(s.jsx)(u,{onSubmit:function(t){if(t.text&&!/^\s*$/.test(t.text)){var e=[t].concat(Object(r.a)(n));c(e)}}}),Object(s.jsx)(b,{todos:n,completeTodo:function(t){var e=n.map((function(e){return e.id===t&&(e.isComplete=!e.isComplete),e}));c(e)},removeTodo:function(t){var e=Object(r.a)(n).filter((function(e){return e.id!==t}));c(e)},updateTodo:function(t,e){e.text&&!/^\s*$/.test(e.text)&&c((function(n){return n.map((function(n){return n.id===t?e:n}))}))}})]})};var m=function(){return Object(s.jsx)("div",{className:"todo-app",children:Object(s.jsx)(f,{})})};i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(m,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.f570163a.chunk.js.map