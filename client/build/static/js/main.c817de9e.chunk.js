(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{79:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n.n(c),r=n(59),i=n.n(r),s=(n(79),n(4)),o=n(11),d=n(8),l=n(68),u=n(101),j=n(103),b=n(100),p=n(67),h=n(7);function O(e,t){return 1===t?e:e+"s"}function m(e,t,n){return new Promise((function(c,a){var r,i,s,o=window.indexedDB.open("shop-shop",1);o.onupgradeneeded=function(e){var t=o.result;t.createObjectStore("products",{keyPath:"_id"}),t.createObjectStore("categories",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"})},o.onerror=function(e){console.log("There was an error")},o.onsuccess=function(a){switch(r=o.result,i=r.transaction(e,"readwrite"),s=i.objectStore(e),r.onerror=function(e){console.log("error",e)},t){case"put":s.put(n),c(n);break;case"get":var d=s.getAll();d.onsuccess=function(){c(d.result)};break;case"delete":s.delete(n._id);break;default:console.log("No valid method")}i.oncomplete=function(){r.close()}}}))}var f=n(69),x=n(28),g="UPDATE_PRODUCTS",v="ADD_TO_CART",y="ADD_MULTIPLE_TO_CART",w="REMOVE_FROM_CART",_="UPDATE_CART_QUANTITY",k="TOGGLE_CART",N="UPDATE_CATEGORIES",C="UPDATE_CURRENT_CATEGORY",S=function(e,t){switch(t.type){case g:return Object(s.a)(Object(s.a)({},e),{},{products:Object(x.a)(t.products)});case v:return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(x.a)(e.cart),[t.product])});case y:return Object(s.a)(Object(s.a)({},e),{},{cart:[].concat(Object(x.a)(e.cart),Object(x.a)(t.products))});case _:return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!0,cart:e.cart.map((function(e){return t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e}))});case w:var n=e.cart.filter((function(e){return e._id!==t._id}));return Object(s.a)(Object(s.a)({},e),{},{cartOpen:n.length>0,cart:n});case"CLEAR_CART":return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!1,cart:[]});case k:return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!e.cartOpen});case N:return Object(s.a)(Object(s.a)({},e),{},{categories:Object(x.a)(t.categories)});case C:return Object(s.a)(Object(s.a)({},e),{},{currentCategory:t.currentCategory});default:return e}};var T=S,E=n(1),A=Object(c.createContext)(),$=A.Provider,I=Object(f.a)(T,{products:[],cart:[],cartOpen:!1,categories:[],currentCategory:""}),D=function(e){return Object(E.jsx)($,Object(s.a)({store:I},e))},P=function(){return Object(c.useContext)(A)};var Q,R,F,U,L,q=function(e){var t=P(),n=Object(h.a)(t,2),c=n[0],a=n[1],r=e.image,i=e.name,d=e._id,l=e.price,u=e.quantity,j=c.cart;return Object(E.jsxs)("div",{className:"card px-1 py-1",children:[Object(E.jsxs)(o.b,{to:"/products/".concat(d),children:[Object(E.jsx)("img",{alt:i,src:"/images/".concat(r)}),Object(E.jsx)("p",{children:i})]}),Object(E.jsxs)("div",{children:[Object(E.jsxs)("div",{children:[u," ",O("item",u)," in stock"]}),Object(E.jsxs)("span",{children:["$",l]})]}),Object(E.jsx)("button",{onClick:function(){var t=j.find((function(e){return e._id===d}));t?(a({type:_,_id:d,purchaseQuantity:parseInt(t.purchaseQuantity)+1}),m("cart","put",Object(s.a)(Object(s.a)({},t),{},{purchaseQuantity:parseInt(t.purchaseQuantity)+1}))):(a({type:v,product:Object(s.a)(Object(s.a)({},e),{},{purchaseQuantity:1})}),m("cart","put",Object(s.a)(Object(s.a)({},e),{},{purchaseQuantity:1})))},children:"Add to cart"})]})},W=n(94),B=n(23),G=n(102),Y=Object(G.a)(Q||(Q=Object(B.a)(["\n  query getProducts($category: ID) {\n    products(category: $category) {\n      _id\n      name\n      description\n      price\n      quantity\n      image\n      category {\n        _id\n      }\n    }\n  }\n"]))),M=Object(G.a)(R||(R=Object(B.a)(["\n  query getCheckout($products: [ID]!) {\n    checkout(products: $products) {\n      session\n    }\n  }\n"]))),H=(Object(G.a)(F||(F=Object(B.a)(["\n  {\n    products {\n      _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      }\n    }\n  }\n"]))),Object(G.a)(U||(U=Object(B.a)(["\n  {\n    categories {\n      _id\n      name\n    }\n  }\n"])))),J=Object(G.a)(L||(L=Object(B.a)(["\n  {\n    user {\n      firstName\n      lastName\n      orders {\n        _id\n        purchaseDate\n        products {\n          _id\n          name\n          description\n          price\n          quantity\n          image\n        }\n      }\n    }\n  }\n"]))),z=n.p+"static/media/spinner.689d9a07.gif";var V=function(){var e=P(),t=Object(h.a)(e,2),n=t[0],a=t[1],r=n.currentCategory,i=Object(W.a)(Y),s=i.loading,o=i.data;return Object(c.useEffect)((function(){o?(a({type:g,products:o.products}),o.products.forEach((function(e){m("products","put",e)}))):s||m("products","get").then((function(e){a({type:g,products:e})}))}),[o,s,a]),Object(E.jsxs)("div",{className:"my-2",children:[Object(E.jsx)("h2",{children:"Our Products:"}),n.products.length?Object(E.jsx)("div",{className:"flex-row",children:(r?n.products.filter((function(e){return e.category._id===r})):n.products).map((function(e){return Object(E.jsx)(q,{_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity},e._id)}))}):Object(E.jsx)("h3",{children:"You haven't added any products yet!"}),s?Object(E.jsx)("img",{src:z,alt:"loading"}):null]})};var K=function(){var e=P(),t=Object(h.a)(e,2),n=t[0],a=t[1],r=n.categories,i=Object(W.a)(H),s=i.loading,o=i.data;return Object(c.useEffect)((function(){o?(a({type:N,categories:o.categories}),o.categories.forEach((function(e){m("categories","put",e)}))):s||m("categories","get").then((function(e){a({type:N,categories:e})}))}),[o,s,a]),Object(E.jsxs)("div",{children:[Object(E.jsx)("h2",{children:"Choose a Category:"}),r.map((function(e){return Object(E.jsx)("button",{onClick:function(){var t;t=e._id,a({type:C,currentCategory:t})},children:e.name},e._id)}))]})},X=n(16),Z=n.n(X),ee=n(27),te=n(63),ne=n(95),ce=function(e){var t=e.item,n=P(),c=Object(h.a)(n,2)[1];return Object(E.jsxs)("div",{className:"flex-row",children:[Object(E.jsx)("div",{children:Object(E.jsx)("img",{src:"/images/".concat(t.image),alt:""})}),Object(E.jsxs)("div",{children:[Object(E.jsxs)("div",{children:[t.name,", $",t.price]}),Object(E.jsxs)("div",{children:[Object(E.jsx)("span",{children:"Qty:"}),Object(E.jsx)("input",{type:"number",placeholder:"1",value:t.purchaseQuantity,onChange:function(e){var n=e.target.value;"0"===n?(c({type:w,_id:t._id}),m("cart","delete",Object(s.a)({},t))):(c({type:_,_id:t._id,purchaseQuantity:parseInt(n)}),m("cart","put",Object(s.a)(Object(s.a)({},t),{},{purchaseQuantity:parseInt(n)})))}}),Object(E.jsx)("span",{role:"img","aria-label":"trash",onClick:function(){return function(e){c({type:w,_id:e._id}),m("cart","delete",Object(s.a)({},e))}(t)},children:"\ud83d\uddd1\ufe0f"})]})]})]})},ae=n(64),re=n(65),ie=n(51),se=n.n(ie),oe=new(function(){function e(){Object(ae.a)(this,e)}return Object(re.a)(e,[{key:"getProfile",value:function(){return se()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return se()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),de=(n(89),Object(te.a)("pk_test_TYooMQauvdEDq54NiTphI7jx")),le=function(){var e=P(),t=Object(h.a)(e,2),n=t[0],a=t[1],r=Object(ne.a)(M),i=Object(h.a)(r,2),s=i[0],o=i[1].data;function d(){a({type:k})}return Object(c.useEffect)((function(){o&&de.then((function(e){e.redirectToCheckout({sessionId:o.checkout.session})}))}),[o]),Object(c.useEffect)((function(){function e(){return(e=Object(ee.a)(Z.a.mark((function e(){var t;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("cart","get");case 2:t=e.sent,a({type:y,products:Object(x.a)(t)});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n.cart.length||function(){e.apply(this,arguments)}()}),[n.cart.length,a]),n.cartOpen?Object(E.jsxs)("div",{className:"cart",children:[Object(E.jsx)("div",{className:"close",onClick:d,children:"[close]"}),Object(E.jsx)("h2",{children:"Shopping Cart"}),n.cart.length?Object(E.jsxs)("div",{children:[n.cart.map((function(e){return Object(E.jsx)(ce,{item:e},e._id)})),Object(E.jsxs)("div",{className:"flex-row space-between",children:[Object(E.jsxs)("strong",{children:["Total: $",function(){var e=0;return n.cart.forEach((function(t){e+=t.price*t.purchaseQuantity})),e.toFixed(2)}()]}),oe.loggedIn()?Object(E.jsx)("button",{onClick:function(){var e=[];n.cart.forEach((function(t){for(var n=0;n<t.purchaseQuantity;n++)e.push(t._id)})),s({variables:{products:e}})},children:"Checkout"}):Object(E.jsx)("span",{children:"(log in to check out)"})]})]}):Object(E.jsxs)("h3",{children:[Object(E.jsx)("span",{role:"img","aria-label":"shocked",children:"\ud83d\ude31"}),"You haven't added anything to your cart yet!"]})]}):Object(E.jsx)("div",{className:"cart-closed",onClick:d,children:Object(E.jsx)("span",{role:"img","aria-label":"trash",children:"\ud83d\uded2"})})},ue=function(){return Object(E.jsxs)("div",{className:"container",children:[Object(E.jsx)(K,{}),Object(E.jsx)(V,{}),Object(E.jsx)(le,{})]})};var je=function(){var e=P(),t=Object(h.a)(e,2),n=t[0],a=t[1],r=Object(d.f)().id,i=Object(c.useState)({}),l=Object(h.a)(i,2),u=l[0],j=l[1],b=Object(W.a)(Y),p=b.loading,O=b.data,f=n.products,x=n.cart;return Object(c.useEffect)((function(){f.length?j(f.find((function(e){return e._id===r}))):O?(a({type:g,products:O.products}),O.products.forEach((function(e){m("products","put",e)}))):p||m("products","get").then((function(e){a({type:g,products:e})}))}),[f,O,p,a,r]),Object(E.jsxs)(E.Fragment,{children:[u&&x?Object(E.jsxs)("div",{className:"container my-1",children:[Object(E.jsx)(o.b,{to:"/",children:"\u2190 Back to Products"}),Object(E.jsx)("h2",{children:u.name}),Object(E.jsx)("p",{children:u.description}),Object(E.jsxs)("p",{children:[Object(E.jsx)("strong",{children:"Price:"}),"$",u.price," ",Object(E.jsx)("button",{onClick:function(){var e=x.find((function(e){return e._id===r}));e?(a({type:_,_id:r,purchaseQuantity:parseInt(e.purchaseQuantity)+1}),m("cart","put",Object(s.a)(Object(s.a)({},e),{},{purchaseQuantity:parseInt(e.purchaseQuantity)+1}))):(a({type:v,product:Object(s.a)(Object(s.a)({},u),{},{purchaseQuantity:1})}),m("cart","put",Object(s.a)(Object(s.a)({},u),{},{purchaseQuantity:1})))},children:"Add to Cart"}),Object(E.jsx)("button",{disabled:!x.find((function(e){return e._id===u._id})),onClick:function(){a({type:w,_id:u._id}),m("cart","delete",Object(s.a)({},u))},children:"Remove from Cart"})]}),Object(E.jsx)("img",{src:"/images/".concat(u.image),alt:u.name})]}):null,p?Object(E.jsx)("img",{src:z,alt:"loading"}):null,Object(E.jsx)(le,{})]})};var be,pe,he,Oe=function(e){var t=e.children;return Object(E.jsx)("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"},children:t})},me=function(){return Object(E.jsx)("div",{children:Object(E.jsxs)(Oe,{children:[Object(E.jsx)("h1",{children:"404 Page Not Found"}),Object(E.jsx)("h1",{children:Object(E.jsx)("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji",children:"\ud83d\ude44"})})]})})},fe=n(33),xe=n(105),ge=Object(G.a)(be||(be=Object(B.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),ve=Object(G.a)(pe||(pe=Object(B.a)(["\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        category {\n          name\n        }\n      }\n    }\n  }\n"]))),ye=Object(G.a)(he||(he=Object(B.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"])));var we=function(e){var t=Object(c.useState)({email:"",password:""}),n=Object(h.a)(t,2),a=n[0],r=n[1],i=Object(xe.a)(ge),d=Object(h.a)(i,2),l=d[0],u=d[1].error,j=function(){var e=Object(ee.a)(Z.a.mark((function e(t){var n,c;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,l({variables:{email:a.email,password:a.password}});case 4:n=e.sent,c=n.data.login.token,oe.login(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.target,n=t.name,c=t.value;r(Object(s.a)(Object(s.a)({},a),{},Object(fe.a)({},n,c)))};return Object(E.jsxs)("div",{className:"container my-1",children:[Object(E.jsx)(o.b,{to:"/signup",children:"\u2190 Go to Signup"}),Object(E.jsx)("h2",{children:"Login"}),Object(E.jsxs)("form",{onSubmit:j,children:[Object(E.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(E.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(E.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:b})]}),Object(E.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(E.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(E.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:b})]}),u?Object(E.jsx)("div",{children:Object(E.jsx)("p",{className:"error-text",children:"The provided credentials are incorrect"})}):null,Object(E.jsx)("div",{className:"flex-row flex-end",children:Object(E.jsx)("button",{type:"submit",children:"Submit"})})]})]})};var _e=function(e){var t=Object(c.useState)({email:"",password:""}),n=Object(h.a)(t,2),a=n[0],r=n[1],i=Object(xe.a)(ye),d=Object(h.a)(i,1)[0],l=function(){var e=Object(ee.a)(Z.a.mark((function e(t){var n,c;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,d({variables:{email:a.email,password:a.password,firstName:a.firstName,lastName:a.lastName}});case 3:n=e.sent,c=n.data.addUser.token,oe.login(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(e){var t=e.target,n=t.name,c=t.value;r(Object(s.a)(Object(s.a)({},a),{},Object(fe.a)({},n,c)))};return Object(E.jsxs)("div",{className:"container my-1",children:[Object(E.jsx)(o.b,{to:"/login",children:"\u2190 Go to Login"}),Object(E.jsx)("h2",{children:"Signup"}),Object(E.jsxs)("form",{onSubmit:l,children:[Object(E.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(E.jsx)("label",{htmlFor:"firstName",children:"First Name:"}),Object(E.jsx)("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:u})]}),Object(E.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(E.jsx)("label",{htmlFor:"lastName",children:"Last Name:"}),Object(E.jsx)("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:u})]}),Object(E.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(E.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(E.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:u})]}),Object(E.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(E.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(E.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:u})]}),Object(E.jsx)("div",{className:"flex-row flex-end",children:Object(E.jsx)("button",{type:"submit",children:"Submit"})})]})]})};var ke=function(){return Object(E.jsxs)("header",{className:"flex-row px-1",children:[Object(E.jsx)("h1",{children:Object(E.jsxs)(o.b,{to:"/",children:[Object(E.jsx)("span",{role:"img","aria-label":"shopping bag",children:"\ud83d\udecd\ufe0f"}),"-Shop-Shop"]})}),Object(E.jsx)("nav",{children:oe.loggedIn()?Object(E.jsxs)("ul",{className:"flex-row",children:[Object(E.jsx)("li",{className:"mx-1",children:Object(E.jsx)(o.b,{to:"/orderHistory",children:"Order History"})}),Object(E.jsx)("li",{className:"mx-1",children:Object(E.jsx)("a",{href:"/",onClick:function(){return oe.logout()},children:"Logout"})})]}):Object(E.jsxs)("ul",{className:"flex-row",children:[Object(E.jsx)("li",{className:"mx-1",children:Object(E.jsx)(o.b,{to:"/signup",children:"Signup"})}),Object(E.jsx)("li",{className:"mx-1",children:Object(E.jsx)(o.b,{to:"/login",children:"Login"})})]})})]})};var Ne=function(){var e=Object(xe.a)(ve),t=Object(h.a)(e,1)[0];return Object(c.useEffect)((function(){function e(){return(e=Object(ee.a)(Z.a.mark((function e(){var n,c,a,r;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("cart","get");case 2:if(n=e.sent,!(c=n.map((function(e){return e._id}))).length){e.next=11;break}return e.next=7,t({variables:{products:c}});case 7:a=e.sent,r=a.data,r.addOrder.products.forEach((function(e){m("cart","delete",e)}));case 11:setTimeout((function(){window.location.assign("/")}),3e3);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(E.jsx)("div",{children:Object(E.jsxs)(Oe,{children:[Object(E.jsx)("h1",{children:"Success!"}),Object(E.jsx)("h2",{children:"Thank you for your purchase!"}),Object(E.jsx)("h2",{children:"You will now be redirected to the home page"})]})})};var Ce=function(){var e,t=Object(W.a)(J).data;return t&&(e=t.user),Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)("div",{className:"container my-1",children:[Object(E.jsx)(o.b,{to:"/",children:"\u2190 Back to Products"}),e?Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)("h2",{children:["Order History for ",e.firstName," ",e.lastName]}),e.orders.map((function(e){return Object(E.jsxs)("div",{className:"my-2",children:[Object(E.jsx)("h3",{children:new Date(parseInt(e.purchaseDate)).toLocaleDateString()}),Object(E.jsx)("div",{className:"flex-row",children:e.products.map((function(e,t){var n=e._id,c=e.image,a=e.name,r=e.price;return Object(E.jsxs)("div",{className:"card px-1 py-1",children:[Object(E.jsxs)(o.b,{to:"/products/".concat(n),children:[Object(E.jsx)("img",{alt:a,src:"/images/".concat(c)}),Object(E.jsx)("p",{children:a})]}),Object(E.jsx)("div",{children:Object(E.jsxs)("span",{children:["$",r]})})]},t)}))})]},e._id)}))]}):null]})})},Se=Object(l.a)({uri:"/graphql"}),Te=Object(p.a)((function(e,t){var n=t.headers,c=localStorage.getItem("id_token");return{headers:Object(s.a)(Object(s.a)({},n),{},{authorization:c?"Bearer ".concat(c):""})}})),Ee=new u.a({link:Te.concat(Se),cache:new j.a});var Ae=function(){return Object(E.jsx)(b.a,{client:Ee,children:Object(E.jsx)(o.a,{children:Object(E.jsx)("div",{children:Object(E.jsxs)(D,{children:[Object(E.jsx)(ke,{}),Object(E.jsxs)(d.c,{children:[Object(E.jsx)(d.a,{exact:!0,path:"/",component:ue}),Object(E.jsx)(d.a,{exact:!0,path:"/login",component:we}),Object(E.jsx)(d.a,{exact:!0,path:"/signup",component:_e}),Object(E.jsx)(d.a,{exact:!0,path:"/success",component:Ne}),Object(E.jsx)(d.a,{exact:!0,path:"/orderHistory",component:Ce}),Object(E.jsx)(d.a,{exact:!0,path:"/products/:id",component:je}),Object(E.jsx)(d.a,{component:me})]})]})})})})},$e=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ie(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(E.jsx)(a.a.StrictMode,{children:Object(E.jsx)(Ae,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");$e?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ie(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Ie(t,e)}))}}()}},[[90,1,2]]]);
//# sourceMappingURL=main.c817de9e.chunk.js.map