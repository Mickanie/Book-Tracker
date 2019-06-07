(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),l=a.n(o),i=(a(16),a(6)),c=a.n(i),u=a(7),s=a(1),d=a(2),m=a(4),p=a(3),h=a(5),b=(a(18),a(19),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).validateISBN=function(e){if(13===e.length){for(var t=e.split(""),a=0,n=1;n<=t.length-1;n++)a+=n%2==1?parseInt(t[n-1]):3*parseInt(t[n-1]);return console.log(a),console.log(10-a%10),a%10===0?0===parseInt(t[12]):10-a%10===parseInt(t[12])}return!1},a.state={ISBN:""},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.validateISBN(this.state.ISBN)?"hidden":"visible",a=this.validateISBN(this.state.ISBN)?"transparent":"rgba(255, 0, 0, 0.143)";return r.a.createElement("div",{className:"new-book-container"},r.a.createElement("h3",null,"Add a new book"),r.a.createElement("form",{onSubmit:this.props.addBook},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",name:"title",pattern:"^[A-Z]{1}[A-Za-z\\s0-9]{2,45}",required:!0,placeholder:" "}),r.a.createElement("label",{htmlFor:"author"},"Author"),r.a.createElement("input",{type:"text",name:"author",pattern:"[A-Z]{1}[a-z.]{1,15}\\s{1}[A-Z]{1}[a-z]{2,20}",required:!0,placeholder:" "}),r.a.createElement("label",{htmlFor:"ISBN"},"ISBN"),r.a.createElement("input",{type:"text",name:"ISBN",id:"ISBN",pattern:"[0-9]{13}",required:!0,placeholder:" ",style:{background:a},onChange:function(t){return e.setState({ISBN:t.target.value})}}),r.a.createElement("p",{className:"error-sign",style:{visibility:t}},"!"),r.a.createElement("label",{htmlFor:"pages"},"Number of pages"),r.a.createElement("input",{type:"text",name:"pages",pattern:"[0-9]{2,4}",required:!0,placeholder:" "}),r.a.createElement("label",{htmlFor:"rating"},"Your rating"),r.a.createElement("div",{className:"rating-stars"},r.a.createElement("input",{type:"radio",name:"rating",value:"1",id:"rate-1"}),r.a.createElement("label",{htmlFor:"rate-1"},"\u2605"),r.a.createElement("input",{type:"radio",name:"rating",value:"2",id:"rate-2"}),r.a.createElement("label",{htmlFor:"rate-2"},"\u2605"),r.a.createElement("input",{type:"radio",name:"rating",value:"3",id:"rate-3"}),r.a.createElement("label",{htmlFor:"rate-3"},"\u2605"),r.a.createElement("input",{type:"radio",name:"rating",value:"4",id:"rate-4"}),r.a.createElement("label",{htmlFor:"rate-4"},"\u2605"),r.a.createElement("input",{type:"radio",name:"rating",value:"5",id:"rate-5",defaultChecked:!0}),r.a.createElement("label",{htmlFor:"rate-5"},"\u2605")),r.a.createElement("input",{type:"submit",value:"Add",disabled:!this.validateISBN(this.state.ISBN)})))}}]),t}(n.Component)),k=(a(20),a(21),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).validateISBN=function(e){if(13===e.length){for(var t=e.split(""),a=0,n=1;n<=t.length;n++)a+=n%2==1?parseInt(t[n-1]):3*parseInt(t[n-1]);return a%10===0}return!1},a.switchEditMode=function(e){if(a.state.editMode){var t=document.querySelector("#title"),n=document.querySelector("#author"),r=(document.querySelector("#ISBN"),document.querySelector("#pages"));t.checkValidity()&&n.checkValidity()&&a.validateISBN(a.state.ISBN)&&r.checkValidity()&&(a.setState({editMode:!1}),a.props.editBook(e,a.props.book.ISBN))}else a.setState({editMode:!0})},a.state={editMode:!1,ISBN:a.props.book.ISBN},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props.book,a=this.validateISBN(this.state.ISBN)?"transparent":"rgba(255, 0, 0, 0.143)";return r.a.createElement("div",{className:"book-card"},r.a.createElement("button",{className:"edit","data-isbn":t.ISBN,onClick:this.switchEditMode}),r.a.createElement("button",{className:"delete","data-isbn":t.ISBN,onClick:this.props.deleteBook},"\u2716"),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"left-column"},"Title:"),r.a.createElement("td",{className:"right-column"},this.state.editMode?r.a.createElement("input",{type:"text",name:"title",id:"title",pattern:"^[A-Z]{1}[A-Za-z\\s0-9]{2,45}",required:!0,defaultValue:t.title}):t.title)),r.a.createElement("tr",null,r.a.createElement("td",{className:"left-column"},"Author:"),r.a.createElement("td",{className:"right-column"}," ",this.state.editMode?r.a.createElement("input",{type:"text",name:"author",id:"author",pattern:"[A-Z]{1}[a-z.]{1,15}\\s{1}[A-Z]{1}[a-z]{2,20}",required:!0,defaultValue:t.author}):t.author)),r.a.createElement("tr",null,r.a.createElement("td",{className:"left-column"},"ISBN:"),r.a.createElement("td",{className:"right-column"}," ",this.state.editMode?r.a.createElement("input",{type:"text",name:"ISBN",id:"ISBN",pattern:"[0-9]{13}",required:!0,style:{background:a},onChange:function(t){return e.setState({ISBN:t.target.value})},defaultValue:t.ISBN}):t.ISBN)),r.a.createElement("tr",null,r.a.createElement("td",{className:"left-column"},"No. of pages:"),r.a.createElement("td",{className:"right-column"}," ",this.state.editMode?r.a.createElement("input",{type:"text",name:"pages",id:"pages",pattern:"[0-9]{2,4}",required:!0,defaultValue:t.pages}):t.pages)),r.a.createElement("tr",null,r.a.createElement("td",{className:"left-column"}," Your rating:"),r.a.createElement("td",{className:"right-column"}," ",this.state.editMode?r.a.createElement("div",{className:"rating-edition"},r.a.createElement("input",{type:"radio",name:"rating",value:"1",id:"rated-1"}),r.a.createElement("label",{htmlFor:"rated-1"},"\u2605"),r.a.createElement("input",{type:"radio",name:"rating",value:"2",id:"rated-2"}),r.a.createElement("label",{htmlFor:"rated-2"},"\u2605"),r.a.createElement("input",{type:"radio",name:"rating",value:"3",id:"rated-3"}),r.a.createElement("label",{htmlFor:"rated-3"},"\u2605"),r.a.createElement("input",{type:"radio",name:"rating",value:"4",id:"rated-4"}),r.a.createElement("label",{htmlFor:"rated-4"},"\u2605"),r.a.createElement("input",{type:"radio",name:"rating",value:"5",id:"rated-5",defaultChecked:!0}),r.a.createElement("label",{htmlFor:"rated-5"},"\u2605")):"\u2605 ".repeat(parseInt(t.rating)))))))}}]),t}(n.Component)),v=function(e){function t(e){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).call(this,e))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"book-list-container"},r.a.createElement("h3",null,"Books you've read:"),r.a.createElement("div",null,this.props.books.map(function(t,a){return r.a.createElement(k,{key:a,book:t,deleteBook:e.props.deleteBook,editBook:e.props.editBook})})))}}]),t}(n.Component),f=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={books:[]},a.addBook=function(){var e=Object(u.a)(c.a.mark(function e(t){var n,r,o,l,i,u;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.target,r=n.title,o=n.author,l=n.ISBN,i=n.pages,u=n.rating,r.value=r.value.trim(),e.next=5,fetch("https://book-tracker-server.herokuapp.com/add-book",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:r.value,author:o.value,ISBN:l.value,pages:i.value,rating:u.value})}).then(function(e){return e.json().then(function(e){return a.setState({books:e})})});case 5:r.value="",o.value="",l.value="",i.value="",u.value="5";case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.editBook=function(){var e=Object(u.a)(c.a.mark(function e(t){var n,r,o,l,i,u;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=document.querySelector(".rating-edition"),r=document.querySelector("#title"),o=document.querySelector("#author"),l=document.querySelector("#ISBN"),i=document.querySelector("#pages"),u=n.querySelector('input[type="radio"]:checked').value,!(r.checkValidity()&&o.checkValidity()&&l.checkValidity()&&i.checkValidity())){e.next=10;break}return console.log("Editing"),e.next=10,fetch("https://book-tracker-server.herokuapp.com/edit-book",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({ISBN:t.target.dataset.isbn,title:r.value,author:o.value,newISBN:l.value,pages:i.value,rating:u})}).then(function(e){return e.json().then(function(e){return a.setState({books:e})})});case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.deleteBook=function(){var e=Object(u.a)(c.a.mark(function e(t){var n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("delete"),n=t.target.dataset.isbn,e.next=4,fetch("https://book-tracker-server.herokuapp.com/delete-book",{method:"delete",headers:{"Content-Type":"application/json"},body:JSON.stringify({ISBN:n})}).then(function(e){return e.json().then(function(e){return a.setState({books:e})})});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://book-tracker-server.herokuapp.com/booklist").then(function(e){return e.json()}).then(function(t){return e.setState({books:t})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null," Welcome to Book Tracker"),r.a.createElement("h3",null," ","You've read ",this.state.books.length," ",1===this.state.books.length?"book":"books"),r.a.createElement("div",{className:"book-container"},r.a.createElement(b,{addBook:this.addBook}),r.a.createElement(v,{editBook:this.editBook,deleteBook:this.deleteBook,books:this.state.books})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.eac15399.chunk.js.map