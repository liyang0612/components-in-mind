(self.webpackChunkcomponents_in_mind=self.webpackChunkcomponents_in_mind||[]).push([[583],{69583:function(t,Z,e){"use strict";e.r(Z),e.d(Z,{Crud:function(){return Ie},PreviewImage:function(){return De},SignAccord:function(){return we}});var L=e(42122),i=e.n(L),g=e(70215),D=e.n(g),w=e(861),F=e.n(w),Q=e(17061),d=e.n(Q),he=e(17156),N=e.n(he),ge=e(27424),y=e.n(ge),oe=e(67759),Y=e(45360),fe=e(34041),me=e(89847),q=e(71577),Se=e(15223),ie=e(48165),l=e(67294);function ye(B){var v=(0,l.useRef)(0),M=(0,l.useState)([]),O=y()(M,2),x=O[0],j=O[1],$=function(m){return v.current=m.length,m.map(function(p,f){return i()(i()({},p),{},{key:"key_".concat(f)})})};(0,l.useEffect)(function(){j($(B||[]))},[]);var W=function(m){var p=x.filter(function(f){return f.key!==m});return j(p),p},G=function(){return x},T=function(m){v.current+=1;var p=[].concat(F()(x),[i()(i()({},m),{},{key:"key_".concat(v.current)})]);return j(p),p},R=function(m,p){for(var f=[],E=0;E<x.length;E++)x[E].key===m?f.push(i()(i()({},p),{},{key:m})):f.push(x[E]);return j(f),f};return{create:T,read:G,update:R,del:W,initData:$,setData:j}}var xe=ye,r=e(85893),Ae=["component"];function je(B){var v=B.columns,M=B.defaultDataSource,O=M===void 0?[]:M,x=B.value,j=x===void 0?[]:x,$=B.onChange,W=$===void 0?function(){}:$,G=(0,l.useRef)(!0),T=oe.Z.useForm(),R=y()(T,1),I=R[0],m=(0,l.useState)(!1),p=y()(m,2),f=p[0],E=p[1],_=(0,l.useState)(),V=y()(_,2),z=V[0],H=V[1],C=xe(),X=C.read();(0,l.useEffect)(function(){C.setData(C.initData(j))},[j]),!j&&G.current&&O.length&&(C.setData(C.initData(O)),G.current=!1);var U=function(){E(!f)},J=function(){U()},K=function(){U(),I.resetFields(),H(void 0)},ee=function(){var u=N()(d()().mark(function S(){var c,s;return d()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,I.validateFields();case 2:c=h.sent,s=[],z?(s=C.update(z.key,c),Y.ZP.success("\u66F4\u65B0\u6210\u529F")):(s=C.create(c),Y.ZP.success("\u65B0\u589E\u6210\u529F")),K(),W(s);case 7:case"end":return h.stop()}},S)}));return function(){return u.apply(this,arguments)}}(),P=function(){var u=N()(d()().mark(function S(c){var s;return d()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:s=C.del(c.key),W(s),Y.ZP.success("\u5220\u9664\u6210\u529F");case 3:case"end":return h.stop()}},S)}));return function(c){return u.apply(this,arguments)}}(),re=function(){var u=N()(d()().mark(function S(c){return d()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:H(c),I.setFieldsValue(c),J();case 3:case"end":return b.stop()}},S)}));return function(c){return u.apply(this,arguments)}}(),le={select:fe.Z,input:me.Z},ne={title:"\u64CD\u4F5C",dataIndex:"opt",hideFormItem:!0,render:function(S,c){return(0,r.jsxs)("div",{children:[(0,r.jsx)("a",{type:"link",onClick:function(){return P(c)},children:"\u5220\u9664"}),"\xA0\xA0",(0,r.jsx)("a",{type:"link",onClick:function(){return re(c)},children:"\u7F16\u8F91"})]})}},ae=[].concat(F()(v),[ne]),ue=v.filter(function(u){return u.formItem&&!u.hideFormItem}).map(function(u){var S,c,s=(S=u.formItem)!==null&&S!==void 0?S:{},b=s.component,h=b===void 0?{}:b,se=D()(s,Ae),ce=l.createElement(le[(c=h.type)!==null&&c!==void 0?c:"input"],h==null?void 0:h.props);return(0,r.jsx)(oe.Z.Item,i()(i()({name:u.dataIndex,label:u.title},se),{},{children:ce}),u.dataIndex)});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(q.ZP,{onClick:J,children:"\u65B0\u589E"}),(0,r.jsx)(Se.Z,{columns:ae,dataSource:X}),(0,r.jsx)(ie.Z,{open:f,onCancel:K,onOk:ee,children:(0,r.jsx)(oe.Z,{form:I,children:ue})})]})}var Ie=je,ve=e(57953),Ce={width:"100%"},be=function(v){var M=v.children,O=v.url,x=v.request,j=x===void 0?function(){return""}:x,$=v.title,W=$===void 0?"\u56FE\u7247\u9884\u89C8":$,G=(0,l.useState)(!1),T=y()(G,2),R=T[0],I=T[1],m=(0,l.useState)(""),p=y()(m,2),f=p[0],E=p[1],_=(0,l.useState)(!1),V=y()(_,2),z=V[0],H=V[1],C=function(){I(!R)},X=function(){var U=N()(d()().mark(function J(){var K;return d()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:if(!O){P.next=4;break}E(O),P.next=10;break;case 4:return H(!0),P.next=7,j();case 7:K=P.sent,H(!1),E(K);case 10:C();case 11:case"end":return P.stop()}},J)}));return function(){return U.apply(this,arguments)}}();return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"im-preview-click-box",onClick:X,children:z?(0,r.jsx)(ve.Z,{size:"small"}):M||(0,r.jsx)(q.ZP,{type:"link",children:"\u67E5\u770B"})}),(0,r.jsx)(ie.Z,{title:W,footer:null,open:R,onCancel:C,children:(0,r.jsx)("img",{src:f,style:Ce})})]})},De=be,Fe=e(51904),Pe=["id"],Ze=function(v){var M=v.requestAccordList,O=v.requestAccordImg,x=v.requestSign,j=v.btnProps,$=v.btnText,W=v.modalTitle,G=(0,l.useState)(!1),T=y()(G,2),R=T[0],I=T[1],m=(0,l.useState)([]),p=y()(m,2),f=p[0],E=p[1],_=(0,l.useState)(!1),V=y()(_,2),z=V[0],H=V[1],C=(0,l.useState)(""),X=y()(C,2),U=X[0],J=X[1],K=(0,l.useState)(!1),ee=y()(K,2),P=ee[0],re=ee[1],le=(0,l.useState)(!1),ne=y()(le,2),ae=ne[0],ue=ne[1],u=(0,l.useRef)(0),S=(0,l.useState)(),c=y()(S,2),s=c[0],b=c[1],h=z||P||ae,se=function(){I(!R)},ce=function(){se()},de=function(){var A=N()(d()().mark(function o(n){var k;return d()().wrap(function(te){for(;;)switch(te.prev=te.next){case 0:return re(!0),te.next=3,O(n);case 3:k=te.sent,re(!1),J(k);case 6:case"end":return te.stop()}},o)}));return function(n){return A.apply(this,arguments)}}(),pe=function(){var A=N()(d()().mark(function o(){var n;return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return H(!0),a.next=3,M();case 3:return n=a.sent,H(!1),E(n),a.abrupt("return",n);case 7:case"end":return a.stop()}},o)}));return function(){return A.apply(this,arguments)}}(),Ee=function(o){var n=o[0];b(n),de(n)},ke=function(){var A=N()(d()().mark(function o(){var n;return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,pe();case 2:if(n=a.sent,n.length){a.next=5;break}return a.abrupt("return");case 5:se(),Ee(n);case 7:case"end":return a.stop()}},o)}));return function(){return A.apply(this,arguments)}}(),Oe=function(o){var n=f.filter(function(k,a){return u.current=a,k.id===o})[0];b(n),de(n)},$e=function(){u.current+=1,u.current>=f.length&&(u.current=0);var o=f[u.current];b(o),de(o)},Le=function(){var A=N()(d()().mark(function o(){var n;return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return ue(!0),a.next=3,x(s);case 3:n=a.sent,ue(!1),b(i()(i()({},s),{},{status:"SIGNED"})),pe(),n===!0&&Y.ZP.success("\u7B7E\u7F72\u6210\u529F"),n===!1&&Y.ZP.error("\u7B7E\u7F72\u5931\u8D25");case 9:case"end":return a.stop()}},o)}));return function(){return A.apply(this,arguments)}}(),Te=(0,l.useMemo)(function(){var A=function(n){var k=n.name,a=n.status;return(0,r.jsxs)("div",{children:[k," ",a==="SIGNED"&&(0,r.jsx)(Fe.Z,{color:"green",children:"\u5DF2\u7B7E\u7F72"})]})};return f.map(function(o){var n=o.id,k=D()(o,Pe);return{value:n,label:A(k)}})},[f]),Re=W||"\u534F\u8BAE\u7B7E\u7F72",Ne=(0,r.jsx)(r.Fragment,{children:(s==null?void 0:s.status)==="WAITSIGN"?(0,r.jsx)(q.ZP,{loading:ae,onClick:Le,disabled:h,children:"\u7B7E\u7F72"}):(0,r.jsx)(q.ZP,{loading:P,onClick:$e,children:"\u4E0B\u4E00\u4E2A"})});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(q.ZP,i()(i()({type:"link",onClick:ke},j),{},{loading:z,children:$||"\u7B7E\u7F72"})),(0,r.jsxs)(ie.Z,{title:Re,open:R,width:1e3,onCancel:ce,destroyOnClose:!0,footer:Ne,children:[(0,r.jsx)(fe.Z,{value:s==null?void 0:s.id,disabled:h,style:{width:200},options:Te,onChange:Oe,placeholder:"\u8BF7\u9009\u62E9"}),(0,r.jsx)(ve.Z,{tip:"Loading",spinning:h,children:(0,r.jsx)("div",{className:"sign-accord-content",children:U&&(0,r.jsx)("img",{src:U,alt:"\u534F\u8BAE\u56FE\u7247",title:"\u534F\u8BAE\u56FE\u7247"})})})]})]})},we=Ze},63405:function(t,Z,e){var L=e(73897);function i(g){if(Array.isArray(g))return L(g)}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports},79498:function(t){function Z(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}t.exports=Z,t.exports.__esModule=!0,t.exports.default=t.exports},42281:function(t){function Z(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}t.exports=Z,t.exports.__esModule=!0,t.exports.default=t.exports},70215:function(t,Z,e){var L=e(7071);function i(g,D){if(g==null)return{};var w=L(g,D),F,Q;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(g);for(Q=0;Q<d.length;Q++)F=d[Q],!(D.indexOf(F)>=0)&&Object.prototype.propertyIsEnumerable.call(g,F)&&(w[F]=g[F])}return w}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports},7071:function(t){function Z(e,L){if(e==null)return{};var i={},g=Object.keys(e),D,w;for(w=0;w<g.length;w++)D=g[w],!(L.indexOf(D)>=0)&&(i[D]=e[D]);return i}t.exports=Z,t.exports.__esModule=!0,t.exports.default=t.exports},861:function(t,Z,e){var L=e(63405),i=e(79498),g=e(86116),D=e(42281);function w(F){return L(F)||i(F)||g(F)||D()}t.exports=w,t.exports.__esModule=!0,t.exports.default=t.exports}}]);