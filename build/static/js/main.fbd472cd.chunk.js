(this.webpackJsonpreactwork=this.webpackJsonpreactwork||[]).push([[0],{22:function(e,t,a){e.exports=a(33)},29:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(19),l=a.n(r),c=a(16),i=a(6),d=a(7),s=a(9),u=a(8),p=a(12),m=a(1),f=a(10),h=a.n(f),b=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).getStyle=function(){return{backgroundColor:"#e8e8e8",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:e.props.todo.completed?"line-through":"none"}},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.todo,t=e.id,a=e.title;return n.a.createElement("div",{style:this.getStyle()},n.a.createElement("p",null,n.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,t)}),"","\xa0\xa0",a,n.a.createElement("button",{onClick:this.props.deleteTodo.bind(this,t),style:v},"Delete")))}}]),a}(o.Component);b.propType={todo:h.a.object.isRequired};var v={height:"20px",width:"100px",backgroundColor:"#37474f",color:"#ffffff",border:"none",borderRadius:"5%",cursor:"pointer",float:"right"},g=b,y=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return this.props.todos.map((function(t){return n.a.createElement(g,{key:t.id,todo:t,markComplete:e.props.markComplete,deleteTodo:e.props.deleteTodo})}))}}]),a}(o.Component),E=a(20),j=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={title:""},e.onChange=function(t){return e.setState(Object(E.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault(),e.props.addTodo(e.state.title),e.setState({title:""})},e}return Object(d.a)(a,[{key:"render",value:function(){return n.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},n.a.createElement("input",{type:"text",name:"title",style:{flex:"10",padding:"5px"},placeholder:"Add Todo ...",value:this.state.title,onChange:this.onChange}),n.a.createElement("input",{type:"submit",value:"Add",className:"submitButton",style:{flex:"1"}}))}}]),a}(o.Component);function k(){return n.a.createElement("div",{className:"about"},n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"About"),n.a.createElement("p",null,"Todo App is a todo list application built using React JS."),n.a.createElement("p",null,"verson: v1.0.0")))}a(29);var O=a(35);function C(){return n.a.createElement("header",{style:w},n.a.createElement("h1",null,"Todo App"),n.a.createElement(p.b,{style:x,to:"/"},"Home"),"\xa0\xa0|\xa0\xa0",n.a.createElement(p.b,{style:x,to:"/about"},"About"))}var x={color:"#ffffff",textDecoration:"none"},w={backgroundColor:"#263238",color:"#fff",textAlign:"center",padding:"10px"},T=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={todos:[{id:Object(O.a)(),title:"Breakfast",completed:!1},{id:Object(O.a)(),title:"Classes",completed:!1},{id:Object(O.a)(),title:"Homework",completed:!1}]},e.markComplete=function(t){e.setState({todos:e.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},e.deleteTodo=function(t){e.setState({todos:Object(c.a)(e.state.todos.filter((function(e){return e.id!==t})))})},e.addTodo=function(t){var a={id:Object(O.a)(),title:t,completed:!1};e.setState({todos:[].concat(Object(c.a)(e.state.todos),[a])})},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement(p.a,null,n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"container"},n.a.createElement(C,null),n.a.createElement(m.a,{exact:!0,path:"/",render:function(t){return n.a.createElement(n.a.Fragment,null,n.a.createElement(j,{addTodo:e.addTodo}),n.a.createElement(y,{todos:e.state.todos,markComplete:e.markComplete,deleteTodo:e.deleteTodo}))}}),n.a.createElement(m.a,{path:"/about",component:k}))))}}]),a}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.fbd472cd.chunk.js.map