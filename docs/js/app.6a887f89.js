(function(t){function s(s){for(var e,n,c=s[0],r=s[1],l=s[2],u=0,d=[];u<c.length;u++)n=c[u],Object.prototype.hasOwnProperty.call(A,n)&&A[n]&&d.push(A[n][0]),A[n]=0;for(e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e]);o&&o(s);while(d.length)d.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var t,s=0;s<a.length;s++){for(var i=a[s],e=!0,c=1;c<i.length;c++){var r=i[c];0!==A[r]&&(e=!1)}e&&(a.splice(s--,1),t=n(n.s=i[0]))}return t}var e={},A={app:0},a=[];function n(s){if(e[s])return e[s].exports;var i=e[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,s,i){n.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,s){if(1&s&&(t=n(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var e in t)n.d(i,e,function(s){return t[s]}.bind(null,e));return i},n.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(s,"a",s),s},n.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},n.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=s,c=c.slice();for(var l=0;l<c.length;l++)s(c[l]);var o=r;a.push([0,"chunk-vendors"]),i()})({0:function(t,s,i){t.exports=i("56d7")},"02b7":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAAAXNSR0IArs4c6QAABFFJREFUeJzt3T2KFFEUgFFHzN2CP2BkqIy5iYE7Eca1CONODEzMBVMjYXANrmBcgVXqs3xV9Z2TFj1d9MDHhXe7+uLy+ur2DpB0d/YNAPMIAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAITdG/0Dn9+8+xf3AfyFF+/fDr3eBABhAgBhAgBhAgBhAgBhAgBhAgBhw3sAjHn88Pni9ZvvX/7TnVBkAoAwAYAwAYAwAYAwAYAwAYAwAYAwewA7Z0+ALZkAIEwAIEwAIEwAIEwAIEwAIEwAIMwewMHZE2CECQDCBADCBADCBADCBADCBADCBADC7AFsbO2cHmYyAUCYAECYAECYAECYAECYAECYAECYPYAVRz/H97wAlpgAIEwAIEwAIEwAIEwAIEwAIEwAICy/B3D0c/5R9gTaTAAQJgAQJgAQJgAQJgAQJgAQJgAQdvo9gK3P+Z98+LR4/ePT+4vXX339sXj92+uXf3xP8LtMABAmABAmABAmABAmABAmABAmABB2+D2A+vf5YYQJAMIEAMIEAMIEAMIEAMIEAMIEAMIOvwcw29r39R89eDb0etiSCQDCBADCBADCBADCBADCBADCBADCDr8HsPb79Z4XAL9mAoAwAYAwAYAwAYAwAYAwAYAwAYCww+8BrLEnMGbt81n7fNk3EwCECQCECQCECQCECQCECQCECQCEnX4PYM3W59hn3zOwJ3BsJgAIEwAIEwAIEwAIEwAIEwAIEwAIy+8BsC17AvtmAoAwAYAwAYAwAYAwAYAwAYAwAYAwewBMZU9gLhMAhAkAhAkAhAkAhAkAhAkAhAkAhNkDGHT25/7PZk9gWyYACBMACBMACBMACBMACBMACBMACLMHwKHN3hMY3QOZvcdgAoAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwzwNY4bn/nJkJAMIEAMIEAMIEAMIEAMIEAMIEAMLsAXBqo78bcPY9EBMAhAkAhAkAhAkAhAkAhAkAhAkAhOX3AM5+zsuy+v/fBABhAgBhAgBhAgBhAgBhAgBhAgBhp98DqJ/zMtfa8wZmMwFAmABAmABAmABAmABAmABAmABA2On3ALY2+7nyo+fM9T2JvZ/Tb80EAGECAGECAGECAGECAGECAGECAGGH3wPY+zn70d+fczMBQJgAQJgAQJgAQJgAQJgAQJgAQNju9wD2/n1198eRmQAgTAAgTAAgTAAgTAAgTAAgTAAgbPd7AFub/X372e9/dj7fZSYACBMACBMACBMACBMACBMACBMACNv9HsDez3HdH0dmAoAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYCwi8vrq9vZNwHMYQKAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGArtufAs9qR8FzJOcAAAAASUVORK5CYII="},"034f":function(t,s,i){"use strict";i("85ec")},2973:function(t,s,i){t.exports=i.p+"img/project_5.1cb87def.png"},"3ce0":function(t,s,i){t.exports=i.p+"img/project_0.3f20f3e4.png"},"49d8":function(t,s,i){"use strict";i("97a0")},"4dda":function(t){t.exports=JSON.parse('[{"project_id":"1","title":"Chat noir","url":"https://ucntkhr.github.io/portfolio_01/","desc":"『Progate』を参考に初めてHTMLとCSSで作成","status":"done","stat_color":"is-info","cardview":"@/asset/project_1.png"},{"project_id":"2","title":"Pattiserie Mon Chat","url":"https://ucntkhr.github.io/bootstrap_01/","desc":"Bootstrapを使って試作したもの","status":"done","stat_color":"is-info"},{"project_id":"3","title":"Asteroid","url":"https://ucntkhr.github.io/dtins2dstg/","desc":"『ドットインストール』のUnity講座を参考に作成","status":"done","stat_color":"is-info"},{"project_id":"4","title":"Todo Ninja","url":"https://musing-kirch-0c35b8.netlify.app/","desc":"Todoアプリ風の試作物(Vue.js2/Vuetify)","status":"ongoing","stat_color":"is-danger"},{"project_id":"5","title":"Others","desc":"準備中","status":"plotting"},{"project_id":"6","title":"And More","desc":"色々考えています","status":"plotting"}]')},"50ab":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAAAXNSR0IArs4c6QAABZtJREFUeJzt3TGuVFUcwGHHuAHZgFvARyXhNTYuQI2FiYECtFE7Y2ODKwALFQoTI4VRF2BjA8GK5xrcAC5hbC30nuh51zszv+9rb+bO4Q355STnP3d2V2/e3b8AJL249QKA7QgAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhL00e4PfvvnsMtYB/Aev3vp86vV2ABAmABAmABAmABAmABAmABAmABA2PQfAuna73dZLWNV+72cptmQHAGECAGECAGECAGECAGECAGECAGHmAFa29jn+2Y3XVr3/2mb/PuYI5tgBQJgAQJgAQJgAQJgAQJgAQJgAQJg5gEnO+eeM/n0XT35dvG6OYI4dAIQJAIQJAIQJAIQJAIQJAIQJAISZAxiYPWc+9XP8tc3OCYyMPt9TnxOwA4AwAYAwAYAwAYAwAYAwAYAwAYCw/BzA6BzYOf5hm/18ZucIjp0dAIQJAIQJAIQJAIQJAIQJAIQJAISd/ByAc35mnPrzAuwAIEwAIEwAIEwAIEwAIEwAIEwAIOzo5wBO/Zx/9vvqa39f/tDvPzJ7/2OfE7ADgDABgDABgDABgDABgDABgDABgLCjnwM4dluf8x+6recERrZ+/1l2ABAmABAmABAmABAmABAmABAmABB28HMAx/59/0M/559d3+z9nz9+sHj9yvmdqfsf+v+PrdkBQJgAQJgAQJgAQJgAQJgAQJgAQNjBzwEcurXP0dd+/7XP4Uf3nzW7/vqcgB0AhAkAhAkAhAkAhAkAhAkAhAkAhJkD2Nj8OfmtS1nHP1n7HH/t9zcnsMwOAMIEAMIEAMIEAMIEAMIEAMIEAMLMAQys/X37We/c/nbV+3//8L1V73/s6z92dgAQJgAQJgAQJgAQJgAQJgAQJgAQlp8DmP19+a1/F+DYz7mPff3Hzg4AwgQAwgQAwgQAwgQAwgQAwgQAwvJzAGs/93303Pmtn7t/6urP/R+xA4AwAYAwAYAwAYAwAYAwAYAwAYCwg58D2O/3i9d3u93i9bXPeWefF2BOYM7W5/zPHj9d9f5rswOAMAGAMAGAMAGAMAGAMAGAMAGAsIOfAxjZek5g7XPg0fp/PDtbvP76vQ8uczmXbnSOP/p89/vbi9evnV//12v6q61/92FtdgAQJgAQJgAQJgAQJgAQJgAQJgAQdvRzACOzcwKj18+aPecf+eXjr6Zev7XZz2c0p7H15781OwAIEwAIEwAIEwAIEwAIEwAIEwAIO/k5gJGtz/nrRnMOb11crPr+p37OP2IHAGECAGECAGECAGECAGECAGECAGH5OYBZs+f8s9/3P3Wjv89P164tXn/z2bPLXM7JsQOAMAGAMAGAMAGAMAGAMAGAMAGAMHMAA2s/t591mRNYZgcAYQIAYQIAYQIAYQIAYQIAYQIAYeYABp4/fjD1+g9/eOOSVsLf+eLtn7dewlGzA4AwAYAwAYAwAYAwAYAwAYAwAYAwcwADL9+4PfX6R+fLzxN496Pfp+5/6h7df2Xx+nf39v/TSk6THQCECQCECQCECQCECQCECQCECQCEmQOIG52zrz2nMHp/1mUHAGECAGECAGECAGECAGECAGECAGHmAFa23y9/X323W35ewOzvElw5v7N4fbS+kT+ePJx6/aP7y9dn18cyOwAIEwAIEwAIEwAIEwAIEwAIEwAIMwewsdE59/vXz1a9/6xPP/ly6vXO+bdlBwBhAgBhAgBhAgBhAgBhAgBhAgBhAgBhAgBhAgBhAgBhAgBhAgBhAgBhAgBhngdw4L5+erH1EhYd+vpYZgcAYQIAYQIAYQIAYQIAYQIAYQIAYburN+96MDtE2QFAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABA1/5P36Hs0jfePv0AAAAASUVORK5CYII="},"56d7":function(t,s,i){"use strict";i.r(s);i("e260"),i("e6cf"),i("cca6"),i("a79d");var e=i("2b0e"),A=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"app"}},[i("div",{attrs:{id:"nav"}},[i("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),i("router-link",{attrs:{to:"/profile"}},[t._v("Profile")]),t._v(" | "),i("router-link",{attrs:{to:"/skillset"}},[t._v("Skillset")]),t._v(" | "),i("router-link",{attrs:{to:"/project"}},[t._v("Project")]),t._v(" | "),i("router-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1),i("router-view")],1)},a=[],n=(i("034f"),i("2877")),c={},r=Object(n["a"])(c,A,a,!1,null,null,null),l=r.exports,o=i("8c4f"),u=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"home"},[t._m(0),i("Profiles",{attrs:{id:"Profile"}}),t._m(1),i("Skillset"),i("Projects"),i("Contact"),t._m(2),i("Appendix",{staticClass:"hiding"}),t._m(3),t._m(4)],1)},d=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("section",{staticClass:"protagonist hero is-bold is-medium"},[i("div",{staticClass:"hero-body"},[i("div",{staticClass:"container has-text-centered"},[i("h1",{staticClass:"words title is-light"},[t._v("Under Construction")]),i("p",{staticClass:"words subtitle"},[t._v(" ucntkhr's Portfolio ")])])]),i("div",{staticClass:"hero-foot is-hidden-mobile has-background-white"},[i("div",{staticClass:"hero-foot--wrapper"},[i("div",{staticClass:"columns"},[i("div",{staticClass:"column is-12 hero-menu-desktop has-text-centered"},[i("ul",[i("li",[i("a",{attrs:{href:"#home"}},[t._v("Home")])]),i("li",[i("a",{attrs:{href:"#profile"}},[t._v("Profiles")])]),i("li",[i("a",{attrs:{href:"#skill"}},[t._v("Skillset")])]),i("li",[i("a",{attrs:{href:"#project"}},[t._v("Projects")])]),i("li",[i("a",{attrs:{href:"#contact"}},[t._v("Contact")])])])])])])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("section",{staticClass:"container"},[i("div",{staticClass:"column m-5 cheep-invisi"},[i("p",[t._v("【＊MY NAME IS SPACE LITTLE SPACER＊】")])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("section",{staticClass:"container"},[i("div",{staticClass:"column m-5 cheep-invisi"},[i("p",[t._v("【＊SPACE LITTLE SPACER CAME BACK＊】")])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("section",{staticClass:"container hiding"},[i("div",{staticClass:"column m-5 cheep-invisi"},[i("p",[t._v("【＊SPACE, SPACER NEVER CHANGES＊】")])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("footer",{staticClass:"footer has-background-grey-darker"},[i("div",{staticClass:"content has-text-centered"},[i("p",{staticClass:"has-text-grey-lighter"},[t._v("Copyright © 2021 ucntkhr All Rights Reserved.")]),i("a",{staticClass:"icon has-text-grey-lighter",attrs:{target:"”_blank”",href:"https://github.com/ucntkhr/portfolio_uc"}},[i("i",{staticClass:"fab fa-github fa-2x"})])])])}],C=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"container"},[e("div",{staticClass:"intro column is-8 is-offset-2"},[e("h2",{staticClass:"title"},[t._v("PROFILES")]),e("p",{staticClass:"subtitle"},[t._v("自己紹介")])]),e("div",{staticClass:"columns features"},[e("div",{staticClass:"column is-4"},[e("div",{staticClass:"card is-shady"},[e("div",{staticClass:"card-image has-text-centered"},[e("img",{staticClass:"mt-5",attrs:{src:i("02b7")}}),e("br"),e("i",{staticClass:"fa fa-paw"}),e("a",{attrs:{href:"#"}},[t._v(" NEKO ")]),e("i",{staticClass:"fa fa-paw"})]),e("div",{staticClass:"card-content"},[e("div",{staticClass:"content"},[e("h4",[t._v("ucntkhr")]),e("p",[t._v(" Webエンジニア/デザイナーを志望してました。")]),e("p",{staticClass:"is-align-center"},[e("a",{attrs:{href:"https://github.com/ucntkhr"}},[e("button",{staticClass:"button is-dark is-rounded"},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fab fa-github"})]),e("span",[t._v("GitHub")])])])]),e("p",[e("a",{attrs:{href:"#"}},[t._v("Learn more")])])])])])]),e("div",{staticClass:"column is-4"},[e("div",{staticClass:"card is-shady"},[e("div",{staticClass:"card-image has-text-centered"},[e("img",{staticClass:"mt-5",attrs:{src:i("7f61")}}),e("br"),e("i",{staticClass:"fa fa-empire"}),e("a",{attrs:{href:"#"}},[t._v(" YGSKN ")]),e("i",{staticClass:"fa fa-empire"})]),e("div",{staticClass:"card-content"},[e("div",{staticClass:"content"},[e("h4",[t._v("山羊魚")]),e("p",[t._v("ゲーム配信者になりたい時期もありました。")]),e("p",{staticClass:"is-align-center"},[e("a",{attrs:{href:"#"}},[e("button",{staticClass:"button is-danger is-rounded"},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fab fa-youtube"})]),e("span",[t._v("Youtube")])])])]),e("p",[e("a",{attrs:{href:"#"}},[t._v("Learn more")])])])])])]),e("div",{staticClass:"column is-4"},[e("div",{staticClass:"card is-shady"},[e("div",{staticClass:"card-image has-text-centered"},[e("img",{staticClass:"mt-5",attrs:{src:i("50ab")}}),e("br"),e("i",{staticClass:"fa fa-apple"}),e("a",{attrs:{href:"#"}},[t._v(" HUMAN ")]),e("i",{staticClass:"fa fa-apple"})]),e("div",{staticClass:"card-content"},[e("div",{staticClass:"content"},[e("h4",[t._v("Unomicha1")]),e("p",[t._v("現在、カウンセリング治療を受けています。")]),e("p",{staticClass:"is-align-center"},[e("a",{attrs:{href:"#"}},[e("button",{staticClass:"button is-info is-rounded"},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fab fa-twitter"})]),e("span",[t._v("Twitter")])])])]),e("p",[e("a",{attrs:{href:"#"}},[t._v("Learn more")])])])])])])])])}],f={name:"Profile",props:{msg:String}},m=f,p=(i("a56c"),Object(n["a"])(m,C,g,!1,null,"4b25f773",null)),v=p.exports,h=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("section",{staticClass:"container"},[i("div",{staticClass:"notification is-info"},[i("h1",{staticClass:"title is-bold is-large m-5"},[t._v(" APPENDIX ")]),i("div",{staticClass:"intro column is-8 is-offset-2"},[i("h2",{staticClass:"title"},[t._v("Perfect for developers or designers!")]),i("br"),i("p",{staticClass:"subtitle"},[t._v("Vel fringilla est ullamcorper eget nulla facilisi. Nulla facilisi nullam vehicula ipsum a. Neque egestas congue quisque egestas diam in arcu cursus.")])]),i("div",{staticClass:"sandbox"},[i("div",{staticClass:"tile is-ancestor"},[i("div",{staticClass:"tile is-parent is-shady"},[i("article",{staticClass:"tile is-child notification is-white"},[i("p",{staticClass:"title"},[t._v("Hello World")]),i("p",{staticClass:"subtitle"},[t._v("What is up?")])])]),i("div",{staticClass:"tile is-parent is-shady"},[i("article",{staticClass:"tile is-child notification is-white"},[i("p",{staticClass:"title"},[t._v("Foo")]),i("p",{staticClass:"subtitle"},[t._v("Bar")])])]),i("div",{staticClass:"tile is-parent is-shady"},[i("article",{staticClass:"tile is-child notification is-white"},[i("p",{staticClass:"title"},[t._v("Third column")]),i("p",{staticClass:"subtitle"},[t._v("With some content")]),i("div",{staticClass:"content"},[i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.")])])])])]),i("div",{staticClass:"tile is-ancestor"},[i("div",{staticClass:"tile is-vertical is-8"},[i("div",{staticClass:"tile"},[i("div",{staticClass:"tile is-parent is-vertical"},[i("article",{staticClass:"tile is-child notification is-white"},[i("p",{staticClass:"title"},[t._v("Vertical tiles")]),i("p",{staticClass:"subtitle"},[t._v("Top box")])]),i("article",{staticClass:"tile is-child notification is-white"},[i("p",{staticClass:"title"},[t._v("Vertical tiles")]),i("p",{staticClass:"subtitle"},[t._v("Bottom box")])])]),i("div",{staticClass:"tile is-parent"},[i("article",{staticClass:"tile is-child notification is-white"},[i("p",{staticClass:"title"},[t._v("Middle box")]),i("p",{staticClass:"subtitle"},[t._v("With an image")]),i("figure",{staticClass:"image is-4by3"},[i("img",{attrs:{src:"https://picsum.photos/640/480/?random",alt:"Description"}})])])])]),i("div",{staticClass:"tile is-parent is-shady"},[i("article",{staticClass:"tile is-child notification is-white"},[i("p",{staticClass:"title"},[t._v("Wide column")]),i("p",{staticClass:"subtitle"},[t._v("Aligned with the right column")]),i("div",{staticClass:"content"},[i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.")])])])])]),i("div",{staticClass:"tile is-parent is-shady"},[i("article",{staticClass:"tile is-child notification is-white"},[i("div",{staticClass:"content"},[i("p",{staticClass:"title"},[t._v("Tall column")]),i("p",{staticClass:"subtitle"},[t._v("With even more content")]),i("div",{staticClass:"content"},[i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.")]),i("p",[t._v("Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.")]),i("p",[t._v("Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.")])])])])])]),i("div",{staticClass:"tile is-ancestor"},[i("div",{staticClass:"tile is-parent is-shady"},[i("article",{staticClass:"tile is-child notification is-white"},[i("p",{staticClass:"title"},[t._v("Side column")]),i("p",{staticClass:"subtitle"},[t._v("With some content")]),i("div",{staticClass:"content"},[i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.")])])])]),i("div",{staticClass:"tile is-parent is-8 is-shady"},[i("article",{staticClass:"tile is-child notification is-white"},[i("p",{staticClass:"title"},[t._v("Main column")]),i("p",{staticClass:"subtitle"},[t._v("With some content")]),i("div",{staticClass:"content"},[i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.")])])])])]),i("div",{staticClass:"tile is-ancestor"},[i("div",{staticClass:"tile is-parent is-8 is-shady"},[i("article",{staticClass:"tile is-child notification is-white"},[i("p",{staticClass:"title"},[t._v("Murphy's law")]),i("p",{staticClass:"subtitle"},[t._v("Anything that can go wrong will go wrong")]),i("div",{staticClass:"content"},[i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.")])])])]),i("div",{staticClass:"tile is-parent is-shady"},[i("article",{staticClass:"tile is-child notification is-white"},[i("p",{staticClass:"title"},[t._v("Main column")]),i("p",{staticClass:"subtitle"},[t._v("With some content")]),i("div",{staticClass:"content"},[i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.")])])])])])])])])}],E={name:"Appendix",props:{msg:String}},B=E,_=Object(n["a"])(B,h,w,!1,null,null,null),b=_.exports,I=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("section",{staticClass:"section has-background-white-ter",attrs:{id:"project"}},[t._m(0),i("div",{staticClass:"row columns is-multiline",attrs:{id:"app"}},t._l(t.ProjectDatas,(function(s){return i("ProjectCard",t._b({key:s.Project_id},"ProjectCard",s,!1))})),1)])},Y=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"intro column is-8 is-offset-2"},[i("h2",{staticClass:"title"},[t._v("PROJECTS")]),i("p",{staticClass:"subtitle"},[t._v("これまでに挑戦してみたこと")])])}],Q=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"column is-4"},[i("div",{staticClass:"card large"},[i("div",{staticClass:"card-image"},[i("figure",{staticClass:"image is-16by9"},[i("a",{attrs:{href:t.url}},[i("img",{attrs:{src:t.imgPath}})])])]),i("div",{staticClass:"card-content"},[i("div",{staticClass:"media"},[i("div",{staticClass:"media-content"},[i("p",{staticClass:"title is-4 no-padding"},[t._v(t._s(t.title))])])]),i("div",{staticClass:"content"},[t._v(" "+t._s(t.desc)+" ")]),i("div",{staticClass:"content"},[i("button",{staticClass:"button is-rounded",class:t.stat_color},[i("span",[t._v(t._s(t.status))])])])])])])},M=[],P={name:"ProjectCard",props:{title:String,project_id:String,desc:String,status:String,cardview:{type:String,default:"@/assets/Sky.jpg"},stat_color:{type:String,default:"is-primary"},url:String},data:function(){return{imgPath:i("9d69")("./project_".concat(this.project_id,".png"))}}},k=P,J=(i("49d8"),Object(n["a"])(k,Q,M,!1,null,"713e97a9",null)),G=J.exports,j=i("4dda"),O={name:"Project",components:{ProjectCard:G},data:function(){return{fontSize:"",ProjectDatas:j}},created:function(){"fas fa-code"!==this.icon&&(this.fontSize="font-size: x-large")}},y=O,D=Object(n["a"])(y,I,Y,!1,null,null,null),S=D.exports,x=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("section",{staticClass:"section has-background-grey-lighter",attrs:{id:"skill"}},[t._m(0),i("div",{staticClass:"container card-grid"},[t._m(1),i("div",{staticClass:"columns is-desktop is-multiline is-centered"},t._l(t.skills.web,(function(s){return i("Skillcard",t._b({key:s.id},"Skillcard",s,!1))})),1),t._m(2),i("div",{staticClass:"columns is-desktop is-multiline is-centered"},t._l(t.skills.vid,(function(s){return i("Skillcard",t._b({key:s.id},"Skillcard",s,!1))})),1),t._m(3),i("div",{staticClass:"columns is-desktop is-multiline is-centered"},t._l(t.skills.game,(function(s){return i("Skillcard",t._b({key:s.id},"Skillcard",s,!1))})),1)])])},z=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"intro column is-8 is-offset-2"},[i("h2",{staticClass:"title"},[t._v("SKILLSET")]),i("p",{staticClass:"subtitle"},[t._v("身につけたいもの")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("h4",{staticClass:"subtitle is-5 has-text-grey-darker"},[i("strong",[t._v("Web development")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("h4",{staticClass:"subtitle is-5 has-text-grey-darker"},[i("strong",[t._v("Video compilation")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("h4",{staticClass:"subtitle is-5 has-text-grey-darker"},[i("strong",[t._v("Game development")])])}],X=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"column is-4-desktop"},[i("div",{staticClass:"card"},[i("header",{staticClass:"card-header"},[i("p",{staticClass:"card-header-title is-centered"},[i("span",{staticClass:"icon icon-margin"},[i("i",{class:t.icon,style:t.fontSize})]),t._v(" "+t._s(t.name)+" ")])]),i("div",{staticClass:"card-content"},[i("div",{staticClass:"content"},[i("p",{staticClass:"pre-line"},[t._v(t._s(t.desc))])])])])])},T=[],q={name:"Skillcard",props:{name:String,icon:{type:String,default:"fas fa-code"},desc:String},data:function(){return{fontSize:""}}},H=q,N=Object(n["a"])(H,X,T,!1,null,null,null),L=N.exports,V={name:"Skillset",components:{Skillcard:L},data:function(){return{fontSize:"",skills:{web:[{name:"JavaScript",icon:"fab fa-js-square",desc:"直で使うことはあまりないです"},{name:"Vue.js",icon:"devicons devicon-vuejs-plain",desc:"便利です"},{name:"Ruby",icon:"devicons devicon-ruby-plain",desc:"資格が取れる位になりたい"},{name:"Rails",icon:"devicons devicon-rails-plain",desc:"データベースとかについても少し過去に学習しました"},{name:"HTML",icon:"fab fa-html5",desc:"復習しないといけないと最近思っています"},{name:"CSS",icon:"fab fa-css3-alt",desc:"色をつけたりするのが好き"},{name:"typescript",icon:"devicons devicon-typescript-plain",desc:"なんとなく勉強してみたい"},{name:"React",icon:"devicons devicon-react-plain",desc:"アプリとかも作ってみたいです"}],vid:[{name:"Photoshop",icon:"devicons devicon-photoshop-plain",desc:"色々描いたり編集したりする"},{name:"AfterEffect",icon:"devicons devicon-aftereffects-plain",desc:"一番学んでみたいAdobe製品 "},{name:"Premiere Pro",icon:"devicons devicon-premierepro-plain",desc:"動画編集の一つくらい自力で出来るようになりたい"}],game:[{name:"Unity",icon:"fab fa-unity",desc:"すぐVersionが上がるのが難点"},{name:"GameMaker Studio",icon:"fas fa-gamepad",desc:"ライセンスを購入しているので活用したいです"},{name:"Godot Engine",icon:"fas fa-robot",desc:"PythonとかRustとかも使えるらしいとのこと"}]}}},created:function(){"fas fa-code"!==this.icon&&(this.fontSize="font-size: x-large")}},R=V,F=Object(n["a"])(R,x,z,!1,null,null,null),U=F.exports,Z=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},W=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("section",{staticClass:"section has-background-grey-light",attrs:{id:"contact"}},[i("div",{staticClass:"intro column is-8 is-offset-2"},[i("h2",{staticClass:"title"},[t._v("CONTACT")]),i("p",{staticClass:"subtitle is-bold"},[t._v("お問い合わせ")])]),i("div",{staticClass:"content colomn is-8"},[i("p",[t._v("ご連絡の折は、ucntkhr.gftdwks[at]gmail.comまで ※[at]→@に置き換え")])])])}],K={},$=Object(n["a"])(K,Z,W,!1,null,null,null),tt=$.exports,st={name:"Home",components:{Profiles:v,Appendix:b,Projects:S,Skillset:U,Contact:tt}},it=st,et=(i("9de5"),Object(n["a"])(it,u,d,!1,null,"4097608c",null)),At=et.exports;e["a"].use(o["a"]);var at=[{path:"/",name:"Home",component:At},{path:"/profile",name:"Profile",component:v},{path:"/skillset",name:"Skillset",component:U},{path:"/project",name:"Project",component:S},{path:"/contact",name:"Contact",component:tt}],nt=new o["a"]({routes:at}),ct=nt,rt=i("2f62");e["a"].use(rt["a"]);var lt=new rt["a"].Store({state:{},mutations:{},actions:{},modules:{}});e["a"].config.productionTip=!1,new e["a"]({router:ct,store:lt,render:function(t){return t(l)}}).$mount("#app")},7885:function(t,s,i){t.exports=i.p+"img/project_2.3be16633.png"},"7f61":function(t,s){t.exports="data:image/png;base64,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"},"85ec":function(t,s,i){},"97a0":function(t,s,i){},"9b2c":function(t,s,i){t.exports=i.p+"img/project_3.3ae4fedc.png"},"9d69":function(t,s,i){var e={"./project_0.png":"3ce0","./project_1.png":"bac1","./project_2.png":"7885","./project_3.png":"9b2c","./project_4.png":"b88d","./project_5.png":"2973","./project_6.png":"f4bc"};function A(t){var s=a(t);return i(s)}function a(t){if(!i.o(e,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return e[t]}A.keys=function(){return Object.keys(e)},A.resolve=a,t.exports=A,A.id="9d69"},"9de5":function(t,s,i){"use strict";i("dff2")},a56c:function(t,s,i){"use strict";i("c704")},b88d:function(t,s,i){t.exports=i.p+"img/project_4.d28ee6dc.png"},bac1:function(t,s,i){t.exports=i.p+"img/project_1.7332e23e.png"},c704:function(t,s,i){},dff2:function(t,s,i){},f4bc:function(t,s,i){t.exports=i.p+"img/project_6.a5aabcf7.png"}});
//# sourceMappingURL=app.6a887f89.js.map