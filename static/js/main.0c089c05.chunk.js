(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(3),s=n.n(a),c=n(4),r=n(5),o=n(7),i=n(6),l=n(1),p=n.n(l),u=n(0),d=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={lastKey:null},e.handleKeyUp=function(t){e.setState({lastKey:"The last pressed key is ".concat(t.key)})},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keyup",this.handleKeyUp)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keyup",this.handleKeyUp)}},{key:"render",value:function(){var e=this.state.lastKey;return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)("p",{className:"App__message",children:e||"Nothing was pressed yet"})})}}]),n}(p.a.Component);n(13);s.a.render(Object(u.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.0c089c05.chunk.js.map