"use strict";(self.webpackChunkflower_shop=self.webpackChunkflower_shop||[]).push([[252],{252:function(r,e,a){a.r(e),a.d(e,{default:function(){return p}});var n=a(8683),d=a(2791),i={wrapper:"ShoppingCard_wrapper__alDXe",header:"ShoppingCard_header__GMMu2",left:"ShoppingCard_left__q+rVD",right:"ShoppingCard_right__6Zkiz",ProductWrapper:"ShoppingCard_ProductWrapper__v+3N5",counter:"ShoppingCard_counter__KvKr+",Increase:"ShoppingCard_Increase__UQmdQ",Decrease:"ShoppingCard_Decrease__uUv47",Product:"ShoppingCard_Product__Drljh",remove:"ShoppingCard_remove__x6HH3",Price:"ShoppingCard_Price__d9fGw",ProductImage:"ShoppingCard_ProductImage__rynX-",bottomPanel:"ShoppingCard_bottomPanel__sAL6q",Back:"ShoppingCard_Back__RvEQP",PayNow:"ShoppingCard_PayNow__DregL",didntOrder:"ShoppingCard_didntOrder__X06bU"},c=a(9434),t=a(5045),s=a(6871),o=a(2579),l=a(184),p=function(){var r=(0,c.v9)((function(r){return r.MainReducer.isInitialized})),e=(0,c.v9)((function(r){return r.MainReducer.ShoppingCard})),a=(0,s.s0)(),p=(0,c.I0)();return(0,d.useEffect)((function(){p((0,t.Sh)())}),[]),!1===r?(0,l.jsx)(o.Z,{}):0===e.length?(0,l.jsx)("div",{className:i.emptyWrapper,children:(0,l.jsx)("div",{className:i.didntOrder,children:"You didn't order anything"})}):(0,l.jsxs)("div",{className:i.wrapper,children:[(0,l.jsx)("div",{className:i.header,children:(0,l.jsxs)("div",{className:i.left,children:[(0,l.jsx)("img",{src:"/Img/shopIcon.svg"}),(0,l.jsx)("p",{children:"Shopping card"})]})}),(0,l.jsx)("div",{className:i.ProductWrapper,children:e.map((function(r){return(0,l.jsxs)("div",{className:i.Product,children:[(0,l.jsx)("div",{className:i.ProductImage,children:(0,l.jsx)("img",{src:r.data.image})}),(0,l.jsx)("div",{children:r.data.title}),(0,l.jsxs)("div",{className:i.counter,children:[(0,l.jsx)("div",{className:i.Increase,onClick:function(){return function(r){var e={ProductsCount:r.data.ProductsCount+1},a=(0,n.Z)((0,n.Z)({},r),{data:(0,n.Z)((0,n.Z)({},r.data),e)});p((0,t.uH)(a))}(r)},children:"+"}),(0,l.jsx)("div",{children:r.data.ProductsCount}),(0,l.jsx)("div",{className:i.Decrease,onClick:function(){return function(r){var e={ProductsCount:r.data.ProductsCount-1},a=(0,n.Z)((0,n.Z)({},r),{data:(0,n.Z)((0,n.Z)({},r.data),e)});r.data.ProductsCount>1&&p((0,t.uH)(a))}(r)},children:"-"})]}),(0,l.jsx)("div",{className:i.Price,children:r.data.price}),(0,l.jsxs)("svg",{onClick:function(){return e=r.data.ProductId,void p((0,t.vD)(e));var e},className:i.remove,width:"32",height:"32",viewBox:"0 0 32 32",fill:"#D7D7D7",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("circle",{cx:"16",cy:"16",r:"15",fill:"white",stroke:"#D7D7D7","stroke-width":"2"}),(0,l.jsx)("path",{d:"M19.7479 17.9557L17.4993 15.7071L19.7479 13.4585C20.1618 13.0446 20.1618 12.3734 19.7479 11.9595C19.334 11.5455 18.6628 11.5455 18.2488 11.9595L16.0002 14.2081L13.7516 11.9595C13.3377 11.5455 12.6665 11.5455 12.2526 11.9595C11.8386 12.3734 11.8386 13.0446 12.2526 13.4585L14.5012 15.7071L12.2526 17.9557C11.8386 18.3696 11.8386 19.0409 12.2526 19.4548C12.6665 19.8687 13.3377 19.8687 13.7516 19.4548L16.0002 17.2062L18.2488 19.4548C18.6628 19.8687 19.334 19.8687 19.7479 19.4548C20.1618 19.0409 20.1618 18.3696 19.7479 17.9557Z"})]})]})}))}),(0,l.jsxs)("div",{className:i.bottomPanel,children:[(0,l.jsxs)("div",{className:i.leftTotal,children:[(0,l.jsxs)("p",{children:["Total count: ",e.length," pieces"]}),(0,l.jsx)("button",{onClick:function(){return a(-1)},className:i.Back,children:"Go back"})]}),(0,l.jsxs)("div",{className:i.rightTotal,children:[(0,l.jsxs)("p",{children:["Total price: ",function(){for(var r=0,a=0;e.length>a;a++)r+=e[a].data.price;return r}()]}),(0,l.jsx)("button",{className:i.PayNow,children:"Pay now"})]})]})]})}}}]);
//# sourceMappingURL=252.fcbdb12f.chunk.js.map