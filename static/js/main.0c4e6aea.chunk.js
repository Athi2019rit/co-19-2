(this.webpackJsonpcovid_kanvas=this.webpackJsonpcovid_kanvas||[]).push([[0],{180:function(e,t,a){},181:function(e,t,a){},182:function(e,t,a){},183:function(e,t,a){},184:function(e,t,a){},185:function(e,t,a){},186:function(e,t,a){},187:function(e,t,a){},188:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(57),s=a.n(l),i=(a(64),a(1)),c=a(2),o=a(4),m=a(3),u=a(5),d=a.n(u),h=(a(81),function(e){return r.a.createElement("div",{className:"sk-chase"},r.a.createElement("div",{className:"sk-chase-dot"}),r.a.createElement("div",{className:"sk-chase-dot"}),r.a.createElement("div",{className:"sk-chase-dot"}),r.a.createElement("div",{className:"sk-chase-dot"}),r.a.createElement("div",{className:"sk-chase-dot"}),r.a.createElement("div",{className:"sk-chase-dot"}))}),p=(a(22),a(82),a(83),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={state_data:[],district_data:[{district_name:[]},{district_cases:[]}]},e.capitalizeFirstLetter=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},e.searchDeleteHandler=function(){e.setState({district_data:[{district_name:[]},{district_cases:[]}],district:""})},e}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(e){var t=this;e.searched!==this.props.searched&&d.a.get("https://api.covid19india.org/state_district_wise.json").then((function(e){t.setState({state_data:e.data});var a=[],n=[];for(var r in t.state.state_data)if(r===t.capitalizeFirstLetter(t.props.searched))for(var l in t.state.state_data[r].districtData)a.push(l),n.push(t.state.state_data[r].districtData[l].confirmed);t.setState({district_data:[{district_name:a},{district_cases:n}]})}))}},{key:"render",value:function(){var e=this,t=null,a=null;return this.state.district_data[1].district_cases.length&&(a=this.state.district_data[0].district_name.map((function(t,a){return e.state.district_data[1].district_cases.map((function(e,n){var l=null;return a===n&&(l=r.a.createElement("tr",{key:a},r.a.createElement("td",null,r.a.createElement("strong",null,t)),r.a.createElement("td",null,e))),l}))})),t=r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("table",{style:{padding:"0px"}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",{style:{textAlign:"right",marginLeft:"30%"}}," ",r.a.createElement("button",{onClick:this.searchDeleteHandler},r.a.createElement("i",{className:"fa fa-times fa-lg","aria-hidden":"true",style:{color:"#726B6B"}})))),r.a.createElement("tr",null,r.a.createElement("th",{style:{fontSize:"20px"}},"District"),r.a.createElement("th",{style:{fontSize:"20px"}},"No. Of Cases"))),r.a.createElement("tbody",null,a))))),r.a.createElement("div",null,r.a.createElement("div",{style:{paddingLeft:"30%"}},t))}}]),a}(r.a.Component)),f=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={district:"",input:"Search For Your State"},e.changeHandler=function(t){t.preventDefault(),e.setState({input:t.target.value})},e.submitHandler=function(t){t.preventDefault(),e.setState({district:e.state.input})},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Search"},r.a.createElement("form",null,r.a.createElement("input",{type:"text",className:"SearchBar",placeholder:"Search For Your State",onChange:this.changeHandler}),r.a.createElement("button",{className:"placeholder",onClick:this.submitHandler},r.a.createElement("i",{className:"fa fa-search fa-2x"}))),r.a.createElement(p,{searched:this.state.district}))}}]),a}(r.a.Component),g=(a(84),function(e){return e.data.map((function(e){return r.a.createElement("div",{key:e.statecode,className:"TimeStamp"},r.a.createElement("strong",null,"Last Updated On:",e.lastupdatedtime," ")," ")}))}),v=(a(85),a(11)),E=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={Data:{}},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;d.a.get("https://api.covid19india.org/data.json").then((function(t){var a=[],n=[];t.data.cases_time_series.forEach((function(e){a.push(e.date),n.push(e.totalconfirmed)})),e.setState({Data:{labels:a,datasets:[{data:n,fill:!1,lineTension:.5,backgroundColor:"sky",borderColor:"red",borderWidth:2}]}})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v.a,{width:100,height:300,data:this.state.Data,options:{scales:{xAxes:[{display:!1}]},maintainAspectRatio:!1,title:{text:"Total Cases",fontSize:25,fontColor:"black",display:!0},legend:{display:!1,position:"right"}}}))}}]),a}(r.a.Component),y=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={Data:{}},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;d.a.get("https://api.covid19india.org/data.json").then((function(t){var a=[],n=[];t.data.cases_time_series.forEach((function(e){a.push(e.date),n.push(e.totaldeceased)})),e.setState({Data:{labels:a,datasets:[{data:n,fill:!1,lineTension:.5,backgroundColor:"sky",borderColor:"grey",borderWidth:2}]}})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v.a,{width:100,height:300,data:this.state.Data,options:{scales:{xAxes:[{display:!1}]},maintainAspectRatio:!1,title:{text:"Deceased Cases",fontColor:"black",fontSize:25,display:!0},legend:{display:!1,position:"right"}}}))}}]),a}(r.a.Component),b=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={Data:{}},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;d.a.get("https://api.covid19india.org/data.json").then((function(t){var a=[],n=[];t.data.cases_time_series.forEach((function(e){a.push(e.date),n.push(e.totalrecovered)})),e.setState({Data:{labels:a,datasets:[{data:n,fill:!1,lineTension:.5,backgroundColor:"sky",borderColor:"green",borderWidth:2}]}})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v.a,{width:700,height:300,data:this.state.Data,options:{scales:{xAxes:[{display:!1}]},maintainAspectRatio:!1,title:{text:"Recovered Cases",fontColor:"black",fontSize:25,display:!0},legend:{display:!1,position:"right"}}}))}}]),a}(r.a.Component),C=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Graphs"},r.a.createElement("div",{style:{paddingTop:"5%"}},r.a.createElement(E,null)),r.a.createElement("div",{style:{paddingTop:"5%"}},r.a.createElement(b,null)),r.a.createElement("div",{style:{paddingTop:"5%"}},r.a.createElement(y,null)))}}]),a}(r.a.Component),N=(a(180),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={state_data:[],total_data:[]},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;d.a.get("https://api.covid19india.org/data.json").then((function(t){e.setState({state_data:t.data.statewise.slice(1,38)}),e.setState({total_data:t.data.statewise.slice(0,1)})}))}},{key:"render",value:function(){var e=this.state.state_data.map((function(e){return r.a.createElement("tr",{key:e.statecode},r.a.createElement("td",{className:"States"},e.state),r.a.createElement("td",{className:"Confirmed"},e.confirmed),r.a.createElement("td",{className:"Active"},e.active),r.a.createElement("td",{className:"Recovered"},e.recovered),r.a.createElement("td",{className:"Deaths"},e.deaths))})),t=this.state.total_data.map((function(e){return r.a.createElement("tr",{key:e.statecode},r.a.createElement("td",{className:"States"},e.state),r.a.createElement("td",{className:"Confirmed"},e.confirmed),r.a.createElement("td",{className:"Active"},e.active),r.a.createElement("td",{className:"Recovered"},e.recovered),r.a.createElement("td",{className:"Deaths"},e.deaths," "))}));return r.a.createElement("table",null,r.a.createElement("thead",{style:{borderBottom:"1px solid black"}},r.a.createElement("tr",{style:{fontSize:"18px"}},r.a.createElement("th",null,"STATE/UT"),r.a.createElement("th",null,"CONFIRMED"),r.a.createElement("th",null,"ACTIVE"),r.a.createElement("th",null,"RECOVERED"),r.a.createElement("th",null,"DECEASED"))),r.a.createElement("tbody",null,e),r.a.createElement("tbody",null,t))}}]),a}(r.a.Component)),S=(a(181),function(e){var t=e.data.map((function(e){return r.a.createElement("div",{className:"Head",key:e.statecode},r.a.createElement("section",{className:"ConfirmedData"},r.a.createElement("h1",{style:{textAlign:"left",fontSize:"100%",marginLeft:"10%",marginBottom:"4%"}},"Confirmed"),r.a.createElement("div",{style:{fontSize:"175%",textAlign:"left",marginLeft:"10%",marginBottom:"4%"}},e.confirmed)),r.a.createElement("section",{className:"ActiveData"},r.a.createElement("h1",{style:{textAlign:"left",fontSize:"100%",marginLeft:"10%",marginBottom:"4%"}},"Active"),r.a.createElement("div",{style:{fontSize:"175%",textAlign:"left",marginLeft:"10%",marginBottom:"4%"}},e.active)),r.a.createElement("section",{className:"RecoveredData"},r.a.createElement("h1",{style:{textAlign:"left",fontSize:"100%",marginLeft:"10%",marginBottom:"4%"}},"Recovered"),r.a.createElement("div",{style:{fontSize:"175%",textAlign:"left",marginLeft:"10%",marginBottom:"4%"}},e.recovered)),r.a.createElement("section",{className:"DeathsData"},r.a.createElement("h1",{style:{textAlign:"left",fontSize:"100%",marginLeft:"10%",marginBottom:"4%"}},"Deaths"),r.a.createElement("div",{style:{fontSize:"175%",textAlign:"left",marginLeft:"10%",marginBottom:"4%"}},e.deaths)))}));return r.a.createElement("div",{className:"Header"},t)}),j=(a(182),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={posts:[],Total:[],labels:[],loading:!0},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;d.a.get("https://api.covid19india.org/data.json").then((function(t){e.setState({posts:t.data.statewise.slice(1,38)}),e.setState({Total:t.data.statewise.slice(0,1)}),e.setState({timeStamp:t.data.statewise.slice(0,1).lastupdatedtime}),e.setState({loading:!1})}))}},{key:"render",value:function(){var e=r.a.createElement("div",{style:{marginLeft:"49%",marginTop:"20%"}},r.a.createElement(h,null));return this.state.loading?r.a.createElement("div",null,e):r.a.createElement("div",{className:"App"},r.a.createElement("div",{style:{textAlign:"center",marginLeft:"-75px"}},r.a.createElement(S,{data:this.state.Total})),r.a.createElement("div",{className:"Content"},r.a.createElement(N,null),r.a.createElement("div",{style:{marginTop:"4%"}}," ",r.a.createElement(g,{data:this.state.Total}),r.a.createElement(f,null)," ",r.a.createElement(C,{style:{margin:"30px"}}))))}}]),a}(r.a.Component)),k=(a(183),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).myFunction=function(){var e=document.getElementById("myTopnav");"topnav"===e.className?e.className+=" responsive":e.className="topnav"},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"NavBar"},r.a.createElement("div",{className:"topnav",id:"myTopnav"},r.a.createElement("a",{href:"/"},r.a.createElement("i",{className:"fa fa-home","aria-hidden":"true"})," Home"),r.a.createElement("a",{href:"/",className:"Faq"},r.a.createElement("i",{className:"fa fa-question-circle","aria-hidden":"true"})," FAQs"),r.a.createElement("a",{href:"/",className:"suggestions"},r.a.createElement("i",{className:"fa fa-lightbulb-o","aria-hidden":"true"})," Suggestions"),r.a.createElement("a",{href:"/",className:"about"},r.a.createElement("i",{className:"fas fa-virus"}),"About"),r.a.createElement("button",{className:"icon",onClick:this.myFunction,style:{backgroundColor:"transparent",color:"white",fontSize:"20px",padding:"13px"}},r.a.createElement("i",{className:"fa fa-bars"}))))}}]),a}(r.a.Component)),O=(a(184),a(185),function(e){return r.a.createElement("button",{className:"Button Success",onClick:e.clicked},e.children)}),D=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={name:"",mail:"",phone:"",suggestion:"",nameChange:"",mailChange:"",phoneChange:"",suggestionChange:"",result:"",loading:!1},e.nameChangeHandler=function(t){t.preventDefault(),e.setState({nameChange:t.target.value})},e.mailChangeHandler=function(t){t.preventDefault(),e.setState({mailChange:t.target.value})},e.phoneChangeHandler=function(t){t.preventDefault(),e.setState({phoneChange:t.target.value})},e.suggestionChangeHandler=function(t){t.preventDefault(),e.setState({suggestionChange:t.target.value})},e.submitHandler=function(t){e.setState({loading:!0}),e.setState({name:e.state.nameChange,mail:e.state.mailChange,phone:e.state.phoneChange,suggestion:e.state.suggestionChange}),t.preventDefault();var a={nameinput:e.state.nameChange,emailinput:e.state.mailChange,phoneinput:e.state.phoneChange,suggestioninput:e.state.suggestionChange};console.log(e.state.nameChange),""!==a.nameinput&&""!==a.emailinput&&""!==a.phoneinput&&""!==a.suggestioninput&&""!==a.nameinput?d.a.post("https://covid-kanvas.firebaseio.com/covid-kanvas.json",a).then((function(t){e.setState({nameChange:"",mailChange:"",phoneChange:"",suggestionChange:"",result:r.a.createElement("p",{className:"success"},"Your Suggestion Has Been Submitted Successfully"),loading:!1}),document.getElementById("suggestionForm").reset()})):e.setState({loading:!1,result:r.a.createElement("p",{className:"fail"},"Please Fill Out All Fields")})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=r.a.createElement("div",{className:"suggestionForm"},r.a.createElement("h4",null,"Please Fill Your Details And Suggestions To Fight COVID-19"),r.a.createElement("h5",null,"By Everyone's Support We Can defeat Corona"),r.a.createElement("form",{id:"suggestionForm",className:"InputFields"},r.a.createElement("p",null," Your Name : "),r.a.createElement("input",{type:"text",placeholder:"Name",className:"InputElement",onChange:this.nameChangeHandler}),r.a.createElement("p",null,"Your E-Mail ID :"),r.a.createElement("input",{type:"tex",placeholder:"E-Mail",className:"InputElement",onChange:this.mailChangeHandler}),r.a.createElement("p",null,"Your Contact No. :"),r.a.createElement("input",{type:"text",placeholder:"Contact No.",className:"InputElement",onChange:this.phoneChangeHandler}),r.a.createElement("p",null,"Your Suggestion For Fight Against Coronavirus"),r.a.createElement("textarea",{placeholder:"Suggestion",className:"InputElement",onChange:this.suggestionChangeHandler}),r.a.createElement(O,{className:"SubmitButton",clicked:this.submitHandler},"SUBMIT"),this.state.result));return this.state.loading&&(e=r.a.createElement("div",{className:"suggestionForm",style:{justifyContent:"center",textAlign:"center",paddingLeft:"15%"}},r.a.createElement(h,null))),r.a.createElement("div",null,e)}}]),a}(r.a.Component),A=(a(186),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={faqData:[]},e.componentDidMount=function(){d.a.get("https://api.covid19india.org/website_data.json").then((function(t){e.setState({faqData:t.data.faq})}))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state.faqData.map((function(e){return r.a.createElement("div",{key:e.qno,className:"faq"},r.a.createElement("p",{className:"question"},r.a.createElement("span",null,e.qno),"  ",e.question),r.a.createElement("p",{className:"answer"},r.a.createElement("strong",null,"Answer")," ",e.answer))}));return r.a.createElement("div",{style:{justifyContent:"center"}},r.a.createElement("h3",{style:{textAlign:"center"}},"Some frequently asked questions"),e)}}]),a}(r.a.Component)),x=(a(187),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement(j,null),r.a.createElement(D,null),r.a.createElement(A,null))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},59:function(e,t,a){e.exports=a(188)},64:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){}},[[59,1,2]]]);
//# sourceMappingURL=main.0c4e6aea.chunk.js.map