(this.webpackJsonpcryptodashboard=this.webpackJsonpcryptodashboard||[]).push([[0],{281:function(e,t,c){},283:function(e,t,c){"use strict";c.r(t);var a,n=c(0),s=c.n(n),i=c(28),r=c.n(i),l=c(42),o=c(32),j=c(30),d=c(285),h=c(287),b=c(294),u=c(31),O=c.n(u),x=c(87),p=c(54),m=c(288),v=c(103),g=c(45),y={"x-rapidapi-key":"b827c25191msh9a002d7ef599089p1b25bfjsn9da9bd4237c7","x-rapidapi-host":"coinranking1.p.rapidapi.com"},f=function(e){return{url:e,headers:y}},N=Object(v.a)({reducerPath:"cryptoApi",baseQuery:Object(g.d)({baseUrl:"https://coinranking1.p.rapidapi.com"}),endpoints:function(e){return{getCryptos:e.query({query:function(e){return f("/coins?limit=".concat(e))}}),getExchanges:e.query({query:function(){return f("/exchanges")}}),getCryptoDetails:e.query({query:function(e){return f("/coin/".concat(e))}}),getCryptoHistory:e.query({query:function(e){var t=e.coinId,c=e.timeperiod;return f("coin/".concat(t,"/history/").concat(c))}})}}}),w=N.useGetCryptosQuery,C=N.useGetCryptoDetailsQuery,k=N.useGetExchangesQuery,S=N.useGetCryptoHistoryQuery,T=c(6),P=c(289),E=c(286),q=c(284),I=c(4),M=function(){return Object(I.jsx)("div",{className:"loader",children:Object(I.jsx)(q.a,{})})},A=function(e){var t=e.simplified,c=w(t?10:100),a=c.data,s=c.isFetching,i=Object(n.useState)(),r=Object(T.a)(i,2),l=r[0],j=r[1],d=Object(n.useState)(""),h=Object(T.a)(d,2),b=h[0],u=h[1];return Object(n.useEffect)((function(){var e,t;j(null===a||void 0===a||null===(e=a.data)||void 0===e?void 0:e.coins);var c=null===a||void 0===a||null===(t=a.data)||void 0===t?void 0:t.coins.filter((function(e){return e.name.toLowerCase().includes(b)}));j(c)}),[a,b]),s?Object(I.jsx)(M,{}):Object(I.jsxs)(I.Fragment,{children:[!t&&Object(I.jsx)("div",{className:"search-crypto",children:Object(I.jsx)(P.a,{placeholder:"Search Cryptocurrency",onChange:function(e){return u(e.target.value.toLowerCase())}})}),Object(I.jsx)(x.a,{gutter:[32,32],className:"crypto-card-container",children:null===l||void 0===l?void 0:l.map((function(e){return Object(I.jsx)(p.a,{xs:24,sm:12,lg:6,className:"crypto-card",children:Object(I.jsx)(o.b,{to:"/crypto/".concat(e.id),children:Object(I.jsxs)(E.a,{title:"".concat(e.rank,". ").concat(e.name),extra:Object(I.jsx)("img",{className:"crypto-image",src:e.iconUrl}),hoverable:!0,children:[Object(I.jsxs)("p",{children:["Price: ",O()(e.price)]}),Object(I.jsxs)("p",{children:["Market Cap: ",O()(e.marketCap)]}),Object(I.jsxs)("p",{children:["Daily Change: ",e.change,"%"]})]})},e.id)},e.id)}))})]})},D=c(293),F=c(290),U=c(157),$=c.n(U),L={"x-bingapis-sdk":"true","x-rapidapi-key":"b827c25191msh9a002d7ef599089p1b25bfjsn9da9bd4237c7","x-rapidapi-host":"bing-news-search1.p.rapidapi.com"},V=Object(v.a)({reducerPath:"cryptoNewsApi",baseQuery:Object(g.d)({baseUrl:"https://bing-news-search1.p.rapidapi.com/news"}),endpoints:function(e){return{getCryptoNews:e.query({query:function(e){var t=e.newsCategory,c=e.count;return{url:"/search?q=".concat(t,"&safeSearch=Off&textFormat=Raw&freshness=Day&count=").concat(c),headers:L}}})}}}),Q=V.useGetCryptoNewsQuery,G="https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News",H=h.a.Text,R=h.a.Title,z=D.a.Option,J=function(e){var t,c,a=e.simplified,s=Object(n.useState)("Cryptocurrency"),i=Object(T.a)(s,2),r=i[0],l=i[1],o=w(100).data,j=Q({newsCategory:r,count:a?6:12}).data;return null!==j&&void 0!==j&&j.value?Object(I.jsxs)(x.a,{gutter:[24,24],children:[!a&&Object(I.jsx)(p.a,{span:24,children:Object(I.jsxs)(D.a,{showSearch:!0,className:"select-news",placeholder:"Select a Crypto",optionFilterProp:"children",onChange:function(e){return l(e)},filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},children:[Object(I.jsx)(z,{value:"Cryptocurency",children:"Cryptocurrency"}),null===o||void 0===o||null===(t=o.data)||void 0===t||null===(c=t.coins)||void 0===c?void 0:c.map((function(e){return Object(I.jsx)(z,{value:e.name,children:e.name})}))]})}),j.value.map((function(e,t){var c,a,n,s,i,r;return Object(I.jsx)(p.a,{xs:24,sm:12,lg:8,children:Object(I.jsx)(E.a,{hoverable:!0,className:"news-card",children:Object(I.jsxs)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:[Object(I.jsxs)("div",{className:"news-image-container",children:[Object(I.jsx)(R,{className:"news-title",level:4,children:e.name}),Object(I.jsx)("img",{src:(null===e||void 0===e||null===(c=e.image)||void 0===c||null===(a=c.thumbnail)||void 0===a?void 0:a.contentUrl)||G,alt:""})]}),Object(I.jsx)("p",{children:e.description.length>100?"".concat(e.description.substring(0,100),"..."):e.description}),Object(I.jsxs)("div",{className:"provider-container",children:[Object(I.jsxs)("div",{children:[Object(I.jsx)(F.a,{src:(null===(n=e.provider[0])||void 0===n||null===(s=n.image)||void 0===s||null===(i=s.thumbnail)||void 0===i?void 0:i.contentUrl)||G,alt:""}),Object(I.jsx)(H,{className:"provider-name",children:null===(r=e.provider[0])||void 0===r?void 0:r.name})]}),Object(I.jsx)(H,{children:$()(e.datePublished).startOf("ss").fromNow()})]})]})})},t)}))]}):Object(I.jsx)(M,{})},W=h.a.Title,Z=function(){var e,t=w(10),c=t.data,a=t.isFetching,n=null===c||void 0===c||null===(e=c.data)||void 0===e?void 0:e.stats;return console.log("data: "+JSON.stringify(c)),a?Object(I.jsx)(M,{}):Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(W,{level:2,className:"heading",children:"Global Crypto Stats"}),Object(I.jsxs)(x.a,{gutter:[32,32],children:[Object(I.jsx)(p.a,{span:12,children:Object(I.jsx)(m.a,{title:"Total Cryptocurrencies",value:n.total})}),Object(I.jsx)(p.a,{span:12,children:Object(I.jsx)(m.a,{title:"Total Exchanges",value:O()(n.totalExchanges)})}),Object(I.jsx)(p.a,{span:12,children:Object(I.jsx)(m.a,{title:"Total Market Cap:",value:"$".concat(O()(n.totalMarketCap))})}),Object(I.jsx)(p.a,{span:12,children:Object(I.jsx)(m.a,{title:"Total 24h Volume",value:"$".concat(O()(n.total24hVolume))})}),Object(I.jsx)(p.a,{span:12,children:Object(I.jsx)(m.a,{title:"Total Cryptocurrencies",value:n.total})}),Object(I.jsx)(p.a,{span:12,children:Object(I.jsx)(m.a,{title:"Total Markets",value:O()(n.totalMarkets)})})]}),Object(I.jsxs)("div",{className:"home-heading-container",children:[Object(I.jsx)(W,{level:2,className:"home-title",children:"Top 10 Cryptos In The World"}),Object(I.jsx)(W,{level:3,className:"show-more",children:Object(I.jsx)(o.b,{to:"/cryptocurrencies",children:"Show more"})})]}),Object(I.jsx)(A,{simplified:!0}),Object(I.jsxs)("div",{className:"home-heading-container",children:[Object(I.jsx)(W,{level:2,className:"home-title",children:"Latest Crypto News"}),Object(I.jsx)(W,{level:3,children:Object(I.jsx)(o.b,{to:"/news",children:"Show more"})})]}),Object(I.jsx)(J,{simplified:!0})]})},_=c(164),B=c(292),K=c(295),X=c(296),Y=c(297),ee=c(298),te=c(299),ce=c.p+"static/media/cryptocurrency.1548aced.png",ae=function(){var e=Object(n.useState)(!0),t=Object(T.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(void 0),i=Object(T.a)(s,2),r=i[0],l=i[1];return Object(n.useEffect)((function(){var e=function(){return l(window.innerWidth)};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),Object(n.useEffect)((function(){a(!(r<=800))}),[r]),Object(I.jsxs)("div",{className:"nav-container",children:[Object(I.jsxs)("div",{className:"logo-container",children:[Object(I.jsx)(F.a,{src:ce,size:"large"}),Object(I.jsx)(h.a.Title,{level:2,className:"logo",children:Object(I.jsx)(o.b,{to:"/",children:"Cryptoverse"})}),Object(I.jsx)(_.a,{className:"menu-control-container",onClick:function(){return a(!c)},children:Object(I.jsx)(K.a,{})})]}),c&&Object(I.jsxs)(B.a,{theme:"dark",children:[Object(I.jsx)(B.a.Item,{icon:Object(I.jsx)(X.a,{}),children:Object(I.jsx)(o.b,{to:"/",children:"Home"})}),Object(I.jsx)(B.a.Item,{icon:Object(I.jsx)(Y.a,{}),children:Object(I.jsx)(o.b,{to:"/cryptocurrencies",children:"Cryptocurrencies"})}),Object(I.jsx)(B.a.Item,{icon:Object(I.jsx)(ee.a,{}),children:Object(I.jsx)(o.b,{to:"/exchanges",children:"Exchanges"})}),Object(I.jsx)(B.a.Item,{icon:Object(I.jsx)(te.a,{}),children:Object(I.jsx)(o.b,{to:"/news",children:"News"})})]})]})},ne=c(291),se=c(117),ie=h.a.Text,re=ne.a.Panel,le=function(){var e,t=k(),c=t.data,a=t.isFetching,n=null===c||void 0===c||null===(e=c.data)||void 0===e?void 0:e.exchanges;return a?Object(I.jsx)(M,{}):Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(x.a,{children:[Object(I.jsx)(p.a,{span:6,children:"Exchanges"}),Object(I.jsx)(p.a,{span:6,children:"24h Trade Volume"}),Object(I.jsx)(p.a,{span:6,children:"Markets"}),Object(I.jsx)(p.a,{span:6,children:"Change"})]}),Object(I.jsx)(x.a,{children:n.map((function(e){return Object(I.jsx)(p.a,{span:24,children:Object(I.jsx)(ne.a,{children:Object(I.jsx)(re,{showArrow:!1,header:Object(I.jsxs)(x.a,{children:[Object(I.jsxs)(p.a,{span:6,children:[Object(I.jsx)(ie,{children:Object(I.jsxs)("strong",{children:[e.rank,"."]})}),Object(I.jsx)(F.a,{className:"exchange-image",src:e.iconUrl}),Object(I.jsx)(ie,{children:Object(I.jsx)("strong",{children:e.name})})]}),Object(I.jsxs)(p.a,{span:6,children:["$",O()(e.volume)]}),Object(I.jsx)(p.a,{span:6,children:O()(e.numberOfMarkets)}),Object(I.jsxs)(p.a,{span:6,children:[O()(e.marketShare),"%"]})]},e.id),children:Object(se.a)(e.description||"")},e.id)})})}))})]})},oe=c(300),je=c(301),de=c(302),he=c(303),be=c(119),ue=c(304),Oe=c(168),xe=c(165),pe=h.a.Title,me=function(e){for(var t,c=e.coinHistory,a=e.currentPrice,n=e.coinName,s=[],i=[],r=0;r<(null===c||void 0===c||null===(l=c.data)||void 0===l||null===(o=l.history)||void 0===o?void 0:o.length);r+=1){var l,o,j;s.push(null===c||void 0===c||null===(j=c.data)||void 0===j?void 0:j.history[r].price)}for(var d=0;d<(null===c||void 0===c||null===(h=c.data)||void 0===h||null===(b=h.history)||void 0===b?void 0:b.length);d+=1){var h,b,u;i.push(new Date(null===c||void 0===c||null===(u=c.data)||void 0===u?void 0:u.history[d].timestamp).toLocaleDateString())}var O={labels:i,datasets:[{label:"Price In USD",data:s,fill:!1,backgroundColor:"#0071bd",borderColor:"#0071bd"}]};return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(x.a,{className:"chart-header",children:[Object(I.jsxs)(pe,{level:2,className:"chart-title",children:[n," Price Chart "]}),Object(I.jsxs)(p.a,{className:"price-container",children:[Object(I.jsxs)(pe,{level:5,className:"price-change",children:["Change: ",null===c||void 0===c||null===(t=c.data)||void 0===t?void 0:t.change,"%"]}),Object(I.jsxs)(pe,{level:5,className:"current-price",children:["Current ",n," Price: $ ",a]})]})]}),Object(I.jsx)(xe.a,{data:O,options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})]})},ve=h.a.Title,ge=h.a.Text,ye=D.a.Option,fe=function(){var e,t,c,a,s=Object(j.f)().coinId,i=Object(n.useState)("7d"),r=Object(T.a)(i,2),l=r[0],o=r[1],d=C(s),h=d.data,b=d.isFetching,u=S({coinId:s,timeperiod:l}).data,m=null===h||void 0===h||null===(e=h.data)||void 0===e?void 0:e.coin;if(b)return Object(I.jsx)(M,{});var v=[{title:"Price to USD",value:"$ ".concat(m.price&&O()(m.price)),icon:Object(I.jsx)(oe.a,{})},{title:"Rank",value:m.rank,icon:Object(I.jsx)(je.a,{})},{title:"24h Volume",value:"$ ".concat(m.volume&&O()(m.volume)),icon:Object(I.jsx)(de.a,{})},{title:"Market Cap",value:"$ ".concat(m.marketCap&&O()(m.marketCap)),icon:Object(I.jsx)(oe.a,{})},{title:"All-time-high(daily avg.)",value:"$ ".concat(O()(m.allTimeHigh.price)),icon:Object(I.jsx)(he.a,{})}],g=[{title:"Number Of Markets",value:m.numberOfMarkets,icon:Object(I.jsx)(Y.a,{})},{title:"Number Of Exchanges",value:m.numberOfExchanges,icon:Object(I.jsx)(ee.a,{})},{title:"Aprroved Supply",value:m.approvedSupply?Object(I.jsx)(be.a,{}):Object(I.jsx)(ue.a,{}),icon:Object(I.jsx)(Oe.a,{})},{title:"Total Supply",value:"$ ".concat(O()(m.totalSupply)),icon:Object(I.jsx)(Oe.a,{})},{title:"Circulating Supply",value:"$ ".concat(O()(m.circulatingSupply)),icon:Object(I.jsx)(Oe.a,{})}];return Object(I.jsxs)(p.a,{className:"coin-detail-container",children:[Object(I.jsxs)(p.a,{className:"coin-heading-container",children:[Object(I.jsxs)(ve,{level:2,className:"coin-name",children:[null===h||void 0===h||null===(t=h.data)||void 0===t?void 0:t.coin.name," (",null===h||void 0===h||null===(c=h.data)||void 0===c?void 0:c.coin.slug,") Price"]}),Object(I.jsxs)("p",{children:[m.name," live price in US Dollar (USD). View value statistics, market cap and supply."]})]}),Object(I.jsx)(D.a,{defaultValue:"7d",className:"select-timeperiod",placeholder:"Select Timeperiod",onChange:function(e){return o(e)},children:["3h","24h","7d","30d","1y","3m","3y","5y"].map((function(e){return Object(I.jsx)(ye,{children:e},e)}))}),Object(I.jsx)(me,{coinHistory:u,currentPrice:O()(m.price),coinName:m.name}),Object(I.jsxs)(p.a,{className:"stats-container",children:[Object(I.jsxs)(p.a,{className:"coin-value-statistics",children:[Object(I.jsxs)(p.a,{className:"coin-value-statistics-heading",children:[Object(I.jsxs)(ve,{level:3,className:"coin-details-heading",children:[m.name," Value Statistics"]}),Object(I.jsxs)("p",{children:["An overview showing the statistics of ",m.name,", such as the base and quote currency, the rank, and trading volume."]})]}),v.map((function(e){var t=e.icon,c=e.title,a=e.value;return Object(I.jsxs)(p.a,{className:"coin-stats",children:[Object(I.jsxs)(p.a,{className:"coin-stats-name",children:[Object(I.jsx)(ge,{children:t}),Object(I.jsx)(ge,{children:c})]}),Object(I.jsx)(ge,{className:"stats",children:a})]})}))]}),Object(I.jsxs)(p.a,{className:"other-stats-info",children:[Object(I.jsxs)(p.a,{className:"coin-value-statistics-heading",children:[Object(I.jsx)(ve,{level:3,className:"coin-details-heading",children:"Other Stats Info"}),Object(I.jsxs)("p",{children:["An overview showing the statistics of ",m.name,", such as the base and quote currency, the rank, and trading volume."]})]}),g.map((function(e){var t=e.icon,c=e.title,a=e.value;return Object(I.jsxs)(p.a,{className:"coin-stats",children:[Object(I.jsxs)(p.a,{className:"coin-stats-name",children:[Object(I.jsx)(ge,{children:t}),Object(I.jsx)(ge,{children:c})]}),Object(I.jsx)(ge,{className:"stats",children:a})]})}))]})]}),Object(I.jsxs)(p.a,{className:"coin-desc-link",children:[Object(I.jsxs)(x.a,{className:"coin-desc",children:[Object(I.jsxs)(ve,{level:3,className:"coin-details-heading",children:["What is ",m.name,"?"]}),Object(se.a)(m.description)]}),Object(I.jsxs)(p.a,{className:"coin-links",children:[Object(I.jsxs)(ve,{level:3,className:"coin-details-heading",children:[m.name," Links"]}),null===(a=m.links)||void 0===a?void 0:a.map((function(e){return Object(I.jsxs)(x.a,{className:"coin-link",children:[Object(I.jsx)(ve,{level:5,className:"link-name",children:e.type}),Object(I.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:e.name})]},e.name)}))]})]})]})},Ne=(c(281),function(){return Object(I.jsxs)("div",{className:"app",children:[Object(I.jsx)("div",{className:"navbar",children:Object(I.jsx)(ae,{})}),Object(I.jsxs)("div",{className:"main",children:[Object(I.jsx)(d.a,{children:Object(I.jsx)("div",{className:"routes",children:Object(I.jsxs)(j.c,{children:[Object(I.jsx)(j.a,{exact:!0,path:"/",children:Object(I.jsx)(Z,{})}),Object(I.jsx)(j.a,{exact:!0,path:"/exchanges",children:Object(I.jsx)(le,{})}),Object(I.jsx)(j.a,{exact:!0,path:"/cryptocurrencies",children:Object(I.jsx)(A,{})}),Object(I.jsx)(j.a,{exact:!0,path:"/crypto/:coinId",children:Object(I.jsx)(fe,{})}),Object(I.jsx)(j.a,{exact:!0,path:"/news",children:Object(I.jsx)(J,{})})]})})}),Object(I.jsxs)("div",{className:"footer",children:[Object(I.jsxs)(h.a.Title,{level:5,style:{color:"white",textAlign:"center"},children:["Copyright \xa9 2022",Object(I.jsx)(o.b,{to:"/",children:"CryptoDashboard."})," ",Object(I.jsx)("br",{}),"All Rights Reserved."]}),Object(I.jsxs)(b.b,{children:[Object(I.jsx)(o.b,{to:"/",children:"Home"}),Object(I.jsx)(o.b,{to:"/exchanges",children:"Exchanges"}),Object(I.jsx)(o.b,{to:"/news",children:"News"})]})]})]})]})}),we=c(1),Ce=c(16),ke=Object(Ce.a)({reducer:(a={},Object(we.a)(a,N.reducerPath,N.reducer),Object(we.a)(a,V.reducerPath,V.reducer),a)});c(282);r.a.render(Object(I.jsx)(s.a.StrictMode,{children:Object(I.jsx)(o.a,{children:Object(I.jsx)(l.a,{store:ke,children:Object(I.jsx)(Ne,{})})})}),document.getElementById("root"))}},[[283,1,2]]]);
//# sourceMappingURL=main.f86cfb9a.chunk.js.map