(function(t){function A(A){for(var i,n,l=A[0],c=A[1],r=A[2],u=0,C=[];u<l.length;u++)n=l[u],Object.prototype.hasOwnProperty.call(e,n)&&e[n]&&C.push(e[n][0]),e[n]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);o&&o(A);while(C.length)C.shift()();return a.push.apply(a,r||[]),s()}function s(){for(var t,A=0;A<a.length;A++){for(var s=a[A],i=!0,l=1;l<s.length;l++){var c=s[l];0!==e[c]&&(i=!1)}i&&(a.splice(A--,1),t=n(n.s=s[0]))}return t}var i={},e={app:0},a=[];function n(A){if(i[A])return i[A].exports;var s=i[A]={i:A,l:!1,exports:{}};return t[A].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=i,n.d=function(t,A,s){n.o(t,A)||Object.defineProperty(t,A,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,A){if(1&A&&(t=n(t)),8&A)return t;if(4&A&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&A&&"string"!=typeof t)for(var i in t)n.d(s,i,function(A){return t[A]}.bind(null,i));return s},n.n=function(t){var A=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(A,"a",A),A},n.o=function(t,A){return Object.prototype.hasOwnProperty.call(t,A)},n.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=A,l=l.slice();for(var r=0;r<l.length;r++)A(l[r]);var o=c;a.push([0,"chunk-vendors"]),s()})({0:function(t,A,s){t.exports=s("56d7")},"02b7":function(t,A){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAAAXNSR0IArs4c6QAABFFJREFUeJzt3T2KFFEUgFFHzN2CP2BkqIy5iYE7Eca1CONODEzMBVMjYXANrmBcgVXqs3xV9Z2TFj1d9MDHhXe7+uLy+ur2DpB0d/YNAPMIAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAITdG/0Dn9+8+xf3AfyFF+/fDr3eBABhAgBhAgBhAgBhAgBhAgBhAgBhw3sAjHn88Pni9ZvvX/7TnVBkAoAwAYAwAYAwAYAwAYAwAYAwAYAwewA7Z0+ALZkAIEwAIEwAIEwAIEwAIEwAIEwAIMwewMHZE2CECQDCBADCBADCBADCBADCBADCBADC7AFsbO2cHmYyAUCYAECYAECYAECYAECYAECYAECYPYAVRz/H97wAlpgAIEwAIEwAIEwAIEwAIEwAIEwAICy/B3D0c/5R9gTaTAAQJgAQJgAQJgAQJgAQJgAQJgAQdvo9gK3P+Z98+LR4/ePT+4vXX339sXj92+uXf3xP8LtMABAmABAmABAmABAmABAmABAmABB2+D2A+vf5YYQJAMIEAMIEAMIEAMIEAMIEAMIEAMIOvwcw29r39R89eDb0etiSCQDCBADCBADCBADCBADCBADCBADCDr8HsPb79Z4XAL9mAoAwAYAwAYAwAYAwAYAwAYAwAYCww+8BrLEnMGbt81n7fNk3EwCECQCECQCECQCECQCECQCECQCEnX4PYM3W59hn3zOwJ3BsJgAIEwAIEwAIEwAIEwAIEwAIEwAIy+8BsC17AvtmAoAwAYAwAYAwAYAwAYAwAYAwAYAwewBMZU9gLhMAhAkAhAkAhAkAhAkAhAkAhAkAhNkDGHT25/7PZk9gWyYACBMACBMACBMACBMACBMACBMACLMHwKHN3hMY3QOZvcdgAoAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwzwNY4bn/nJkJAMIEAMIEAMIEAMIEAMIEAMIEAMLsAXBqo78bcPY9EBMAhAkAhAkAhAkAhAkAhAkAhAkAhOX3AM5+zsuy+v/fBABhAgBhAgBhAgBhAgBhAgBhAgBhp98DqJ/zMtfa8wZmMwFAmABAmABAmABAmABAmABAmABA2On3ALY2+7nyo+fM9T2JvZ/Tb80EAGECAGECAGECAGECAGECAGECAGGH3wPY+zn70d+fczMBQJgAQJgAQJgAQJgAQJgAQJgAQNju9wD2/n1198eRmQAgTAAgTAAgTAAgTAAgTAAgTAAgbPd7AFub/X372e9/dj7fZSYACBMACBMACBMACBMACBMACBMACNv9HsDez3HdH0dmAoAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYCwi8vrq9vZNwHMYQKAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGArtufAs9qR8FzJOcAAAAASUVORK5CYII="},"034f":function(t,A,s){"use strict";s("85ec")},"362f":function(t,A,s){},"50ab":function(t,A){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAAAXNSR0IArs4c6QAABZtJREFUeJzt3TGuVFUcwGHHuAHZgFvARyXhNTYuQI2FiYECtFE7Y2ODKwALFQoTI4VRF2BjA8GK5xrcAC5hbC30nuh51zszv+9rb+bO4Q355STnP3d2V2/e3b8AJL249QKA7QgAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhL00e4PfvvnsMtYB/Aev3vp86vV2ABAmABAmABAmABAmABAmABAmABA2PQfAuna73dZLWNV+72cptmQHAGECAGECAGECAGECAGECAGECAGHmAFa29jn+2Y3XVr3/2mb/PuYI5tgBQJgAQJgAQJgAQJgAQJgAQJgAQJg5gEnO+eeM/n0XT35dvG6OYI4dAIQJAIQJAIQJAIQJAIQJAIQJAISZAxiYPWc+9XP8tc3OCYyMPt9TnxOwA4AwAYAwAYAwAYAwAYAwAYAwAYCw/BzA6BzYOf5hm/18ZucIjp0dAIQJAIQJAIQJAIQJAIQJAIQJAISd/ByAc35mnPrzAuwAIEwAIEwAIEwAIEwAIEwAIEwAIOzo5wBO/Zx/9vvqa39f/tDvPzJ7/2OfE7ADgDABgDABgDABgDABgDABgDABgLCjnwM4dluf8x+6recERrZ+/1l2ABAmABAmABAmABAmABAmABAmABB28HMAx/59/0M/559d3+z9nz9+sHj9yvmdqfsf+v+PrdkBQJgAQJgAQJgAQJgAQJgAQJgAQNjBzwEcurXP0dd+/7XP4Uf3nzW7/vqcgB0AhAkAhAkAhAkAhAkAhAkAhAkAhJkD2Nj8OfmtS1nHP1n7HH/t9zcnsMwOAMIEAMIEAMIEAMIEAMIEAMIEAMLMAQys/X37We/c/nbV+3//8L1V73/s6z92dgAQJgAQJgAQJgAQJgAQJgAQJgAQlp8DmP19+a1/F+DYz7mPff3Hzg4AwgQAwgQAwgQAwgQAwgQAwgQAwvJzAGs/93303Pmtn7t/6urP/R+xA4AwAYAwAYAwAYAwAYAwAYAwAYCwg58D2O/3i9d3u93i9bXPeWefF2BOYM7W5/zPHj9d9f5rswOAMAGAMAGAMAGAMAGAMAGAMAGAsIOfAxjZek5g7XPg0fp/PDtbvP76vQ8uczmXbnSOP/p89/vbi9evnV//12v6q61/92FtdgAQJgAQJgAQJgAQJgAQJgAQJgAQdvRzACOzcwKj18+aPecf+eXjr6Zev7XZz2c0p7H15781OwAIEwAIEwAIEwAIEwAIEwAIEwAIO/k5gJGtz/nrRnMOb11crPr+p37OP2IHAGECAGECAGECAGECAGECAGECAGH5OYBZs+f8s9/3P3Wjv89P164tXn/z2bPLXM7JsQOAMAGAMAGAMAGAMAGAMAGAMAGAMHMAA2s/t591mRNYZgcAYQIAYQIAYQIAYQIAYQIAYQIAYeYABp4/fjD1+g9/eOOSVsLf+eLtn7dewlGzA4AwAYAwAYAwAYAwAYAwAYAwAYAwcwADL9+4PfX6R+fLzxN496Pfp+5/6h7df2Xx+nf39v/TSk6THQCECQCECQCECQCECQCECQCECQCEmQOIG52zrz2nMHp/1mUHAGECAGECAGECAGECAGECAGECAGHmAFa23y9/X323W35ewOzvElw5v7N4fbS+kT+ePJx6/aP7y9dn18cyOwAIEwAIEwAIEwAIEwAIEwAIEwAIMwewsdE59/vXz1a9/6xPP/ly6vXO+bdlBwBhAgBhAgBhAgBhAgBhAgBhAgBhAgBhAgBhAgBhAgBhAgBhAgBhAgBhAgBhngdw4L5+erH1EhYd+vpYZgcAYQIAYQIAYQIAYQIAYQIAYQIAYburN+96MDtE2QFAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABA1/5P36Hs0jfePv0AAAAASUVORK5CYII="},"56d7":function(t,A,s){"use strict";s.r(A);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("2b0e"),e=function(){var t=this,A=t.$createElement,s=t._self._c||A;return s("div",{attrs:{id:"app"}},[s("div",{attrs:{id:"nav"}},[s("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),s("router-link",{attrs:{to:"/profile"}},[t._v("Profile")]),t._v(" | "),s("router-link",{attrs:{to:"/skillset"}},[t._v("Skillset")]),t._v(" | "),s("router-link",{attrs:{to:"/project"}},[t._v("Project")]),t._v(" | "),s("router-link",{attrs:{to:"/contact"}},[t._v("Contact")]),s("br"),s("router-link",{attrs:{to:"/frisk"}},[s("span",{staticClass:"fas fa-heart"})])],1),s("router-view")],1)},a=[],n=(s("034f"),s("2877")),l={},c=Object(n["a"])(l,e,a,!1,null,null,null),r=c.exports,o=s("8c4f"),u=function(){var t=this,A=t.$createElement,s=t._self._c||A;return s("div",{staticClass:"home"},[t._m(0),s("Profiles",{attrs:{id:"Profile"}}),t._m(1),s("Skillset"),s("Projects"),s("Contact"),t._m(2),s("Appendix"),t._m(3),t._m(4)],1)},C=[function(){var t=this,A=t.$createElement,s=t._self._c||A;return s("section",{staticClass:"protagonist hero is-bold is-medium"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container has-text-centered"},[s("h1",{staticClass:"words title is-light"},[t._v(" 【 "),s("span",{staticClass:"fas fa-rocket"}),t._v(" Under Construction Heroes "),s("span",{staticClass:"fas fa-robot"}),t._v(" 】 ")]),s("p",{staticClass:"words subtitle"},[t._v(" ucntkhr's Portfolio ( Made with Vue.js / Bulma ) ")])])]),s("div",{staticClass:"hero-foot is-hidden-mobile has-background-white"},[s("div",{staticClass:"hero-foot--wrapper"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-12 hero-menu-desktop has-text-centered"},[s("ul",[s("li",[s("a",{attrs:{href:"#home"}},[t._v("Home")])]),s("li",[s("a",{attrs:{href:"#profile"}},[t._v("Profiles")])]),s("li",[s("a",{attrs:{href:"#skill"}},[t._v("Skillset")])]),s("li",[s("a",{attrs:{href:"#project"}},[t._v("Projects")])]),s("li",[s("a",{attrs:{href:"#contact"}},[t._v("Contact")])])])])])])])])},function(){var t=this,A=t.$createElement,s=t._self._c||A;return s("section",{staticClass:"container"},[s("div",{staticClass:"column m-5 cheep-invisi"},[s("p",[t._v("【＊MY NAME IS SPACE LITTLE SPACER＊】")])])])},function(){var t=this,A=t.$createElement,s=t._self._c||A;return s("section",{staticClass:"container"},[s("div",{staticClass:"column m-5 cheep-invisi"},[s("p",[t._v("【＊SPACE LITTLE SPACER CAME BACK＊】")])])])},function(){var t=this,A=t.$createElement,s=t._self._c||A;return s("section",{staticClass:"container"},[s("div",{staticClass:"column m-5 cheep-invisi"},[s("p",[t._v("【＊SPACE, SPACER NEVER CHANGES＊】")])])])},function(){var t=this,A=t.$createElement,s=t._self._c||A;return s("footer",{staticClass:"footer has-background-grey-darker"},[s("div",{staticClass:"content has-text-centered"},[s("p",{staticClass:"has-text-grey-lighter"},[t._v("Copyright © 2021 ucntkhr All Rights Reserved.")]),s("a",{staticClass:"icon has-text-grey-lighter",attrs:{target:"”_blank”",href:"https://github.com/ucntkhr/portfolio_uc"}},[s("i",{staticClass:"fab fa-github fa-2x"})])])])}],g=function(){var t=this,A=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,A=t.$createElement,i=t._self._c||A;return i("section",{staticClass:"container"},[i("div",{staticClass:"intro column is-8 is-offset-2"},[i("h2",{staticClass:"title"},[t._v("PROFILES")]),i("p",{staticClass:"subtitle"},[t._v("Here are 3 Avaters of me.")])]),i("div",{staticClass:"columns features"},[i("div",{staticClass:"column is-4"},[i("div",{staticClass:"card is-shady"},[i("div",{staticClass:"card-image has-text-centered"},[i("img",{staticClass:"mt-5",attrs:{src:s("02b7")}}),i("br"),i("i",{staticClass:"fa fa-paw"}),i("a",{attrs:{href:"#"}},[t._v(" NEKO ")]),i("i",{staticClass:"fa fa-paw"})]),i("div",{staticClass:"card-content"},[i("div",{staticClass:"content"},[i("h4",[t._v("ucntkhr")]),i("p",[t._v("1986年3月生まれの魚座。2010年、関西学院大学（総合政策学部総合政策学科）を卒業。地元福岡にて派遣から始めた電話営業の職を正社員（専任職）登用に到るまで勤めるも2019年5月末退職。退職後はWebエンジニア/デザイナーを目指し、就労移行支援事業所などを利用しながら自学自習でコードを学ぶ。Vue.js (Bulma,Vuetify) / JavaScript / Ruby (Rails) "),i("br"),t._v("発達障害当事者（ADHD)")]),i("p",{staticClass:"is-align-center"},[i("a",{attrs:{href:"https://github.com/ucntkhr"}},[i("button",{staticClass:"button is-dark is-rounded"},[i("span",{staticClass:"icon"},[i("i",{staticClass:"fab fa-github"})]),i("span",[t._v("GitHub")])])])]),i("p",[i("a",{attrs:{href:"#"}},[t._v("Learn more")])])])])])]),i("div",{staticClass:"column is-4"},[i("div",{staticClass:"card is-shady"},[i("div",{staticClass:"card-image has-text-centered"},[i("img",{staticClass:"mt-5",attrs:{src:s("7f61")}}),i("br"),i("i",{staticClass:"fa fa-empire"}),i("a",{attrs:{href:"#"}},[t._v(" YGSKN ")]),i("i",{staticClass:"fa fa-empire"})]),i("div",{staticClass:"card-content"},[i("div",{staticClass:"content"},[i("h4",[t._v("ヤギナサカ【山羊魚マン】")]),i("p",[t._v("（※現在準備中：2021年2〜3月配信活動開始予定）"),i("br"),t._v("ゲーム実況者・怪人系バーチャルゲーマー。山羊的な容貌を備えているが実体は魚のキメラ。ゲームの腕前は割と『雑魚』レベル。AfterEffect・Premiere Pro等を駆使し、丁寧な作りの動画コンテンツ制作及び配信に努めていく計画を構想中。好みのゲームジャンルは雑食系。使用コンソール：PC(Windows)/Nintendo Switch/Playstation 3/Retrofreak")]),i("p",{staticClass:"is-align-center"},[i("a",{attrs:{href:"#"}},[i("button",{staticClass:"button is-danger is-rounded"},[i("span",{staticClass:"icon"},[i("i",{staticClass:"fab fa-youtube"})]),i("span",[t._v("Youtube")])])])]),i("p",[i("a",{attrs:{href:"#"}},[t._v("Learn more")])])])])])]),i("div",{staticClass:"column is-4"},[i("div",{staticClass:"card is-shady"},[i("div",{staticClass:"card-image has-text-centered"},[i("img",{staticClass:"mt-5",attrs:{src:s("50ab")}}),i("br"),i("i",{staticClass:"fa fa-apple"}),i("a",{attrs:{href:"#"}},[t._v(" HUMAN ")]),i("i",{staticClass:"fa fa-apple"})]),i("div",{staticClass:"card-content"},[i("div",{staticClass:"content"},[i("h4",[t._v("unomicha1（ゆのみ）")]),i("p",[t._v("もう一つの夢：インディーゲームクリエイターになることを目指している逸脱人。目標は人々の記憶に残るタイトル/作品をリリースし、多くの心を揺り動かすこと。開発環境はWin及びMac。使用エンジンは主にUnity、その他にGameMaker Studio 2、Godot Engine、Pixel GameMaker MVなど。 2D (pixel Art) のスタイルを特に好む。せめてドット絵ぐらいは自分の手で描けるようになるべく修行中。")]),i("p",{staticClass:"is-align-center"},[i("a",{attrs:{href:"https://twitter.com/unomicha1"}},[i("button",{staticClass:"button is-info is-rounded"},[i("span",{staticClass:"icon"},[i("i",{staticClass:"fab fa-twitter"})]),i("span",[t._v("Twitter")])])])]),i("p",[i("a",{attrs:{href:"#"}},[t._v("Learn more")])])])])])])])])}],f={name:"Profile",props:{msg:String}},v=f,d=(s("fa2c"),Object(n["a"])(v,g,m,!1,null,"08bb8514",null)),h=d.exports,w=function(){var t=this,A=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,A=t.$createElement,s=t._self._c||A;return s("section",{staticClass:"container"},[s("div",{staticClass:"notification is-info"},[s("h1",{staticClass:"title is-bold is-large m-5"},[t._v(" APPENDIX ")]),s("div",{staticClass:"intro column is-8 is-offset-2"},[s("h2",{staticClass:"title"},[t._v("Perfect for developers or designers!")]),s("br"),s("p",{staticClass:"subtitle"},[t._v("Vel fringilla est ullamcorper eget nulla facilisi. Nulla facilisi nullam vehicula ipsum a. Neque egestas congue quisque egestas diam in arcu cursus.")])]),s("div",{staticClass:"sandbox"},[s("div",{staticClass:"tile is-ancestor"},[s("div",{staticClass:"tile is-parent is-shady"},[s("article",{staticClass:"tile is-child notification is-white"},[s("p",{staticClass:"title"},[t._v("Hello World")]),s("p",{staticClass:"subtitle"},[t._v("What is up?")])])]),s("div",{staticClass:"tile is-parent is-shady"},[s("article",{staticClass:"tile is-child notification is-white"},[s("p",{staticClass:"title"},[t._v("Foo")]),s("p",{staticClass:"subtitle"},[t._v("Bar")])])]),s("div",{staticClass:"tile is-parent is-shady"},[s("article",{staticClass:"tile is-child notification is-white"},[s("p",{staticClass:"title"},[t._v("Third column")]),s("p",{staticClass:"subtitle"},[t._v("With some content")]),s("div",{staticClass:"content"},[s("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.")])])])])]),s("div",{staticClass:"tile is-ancestor"},[s("div",{staticClass:"tile is-vertical is-8"},[s("div",{staticClass:"tile"},[s("div",{staticClass:"tile is-parent is-vertical"},[s("article",{staticClass:"tile is-child notification is-white"},[s("p",{staticClass:"title"},[t._v("Vertical tiles")]),s("p",{staticClass:"subtitle"},[t._v("Top box")])]),s("article",{staticClass:"tile is-child notification is-white"},[s("p",{staticClass:"title"},[t._v("Vertical tiles")]),s("p",{staticClass:"subtitle"},[t._v("Bottom box")])])]),s("div",{staticClass:"tile is-parent"},[s("article",{staticClass:"tile is-child notification is-white"},[s("p",{staticClass:"title"},[t._v("Middle box")]),s("p",{staticClass:"subtitle"},[t._v("With an image")]),s("figure",{staticClass:"image is-4by3"},[s("img",{attrs:{src:"https://picsum.photos/640/480/?random",alt:"Description"}})])])])]),s("div",{staticClass:"tile is-parent is-shady"},[s("article",{staticClass:"tile is-child notification is-white"},[s("p",{staticClass:"title"},[t._v("Wide column")]),s("p",{staticClass:"subtitle"},[t._v("Aligned with the right column")]),s("div",{staticClass:"content"},[s("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.")])])])])]),s("div",{staticClass:"tile is-parent is-shady"},[s("article",{staticClass:"tile is-child notification is-white"},[s("div",{staticClass:"content"},[s("p",{staticClass:"title"},[t._v("Tall column")]),s("p",{staticClass:"subtitle"},[t._v("With even more content")]),s("div",{staticClass:"content"},[s("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.")]),s("p",[t._v("Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.")]),s("p",[t._v("Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.")])])])])])]),s("div",{staticClass:"tile is-ancestor"},[s("div",{staticClass:"tile is-parent is-shady"},[s("article",{staticClass:"tile is-child notification is-white"},[s("p",{staticClass:"title"},[t._v("Side column")]),s("p",{staticClass:"subtitle"},[t._v("With some content")]),s("div",{staticClass:"content"},[s("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.")])])])]),s("div",{staticClass:"tile is-parent is-8 is-shady"},[s("article",{staticClass:"tile is-child notification is-white"},[s("p",{staticClass:"title"},[t._v("Main column")]),s("p",{staticClass:"subtitle"},[t._v("With some content")]),s("div",{staticClass:"content"},[s("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.")])])])])]),s("div",{staticClass:"tile is-ancestor"},[s("div",{staticClass:"tile is-parent is-8 is-shady"},[s("article",{staticClass:"tile is-child notification is-white"},[s("p",{staticClass:"title"},[t._v("Murphy's law")]),s("p",{staticClass:"subtitle"},[t._v("Anything that can go wrong will go wrong")]),s("div",{staticClass:"content"},[s("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.")])])])]),s("div",{staticClass:"tile is-parent is-shady"},[s("article",{staticClass:"tile is-child notification is-white"},[s("p",{staticClass:"title"},[t._v("Main column")]),s("p",{staticClass:"subtitle"},[t._v("With some content")]),s("div",{staticClass:"content"},[s("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.")])])])])])])])])}],E={name:"Appendix",props:{msg:String}},B=E,I=Object(n["a"])(B,w,p,!1,null,null,null),Y=I.exports,Q=function(){var t=this,A=t.$createElement;t._self._c;return t._m(0)},M=[function(){var t=this,A=t.$createElement,s=t._self._c||A;return s("section",{staticClass:"section has-background-white-ter",attrs:{id:"skill"}},[s("div",{staticClass:"intro column is-8 is-offset-2"},[s("h2",{staticClass:"title"},[t._v("PROJECTS")]),s("p",{staticClass:"subtitle"},[t._v("Here are my "),s("strong",[t._v("WORKS")]),t._v(" , still "),s("strong",[t._v('"IN PROGRESS"')]),t._v(".")])])])}],b={},_=Object(n["a"])(b,Q,M,!1,null,null,null),P=_.exports,J=function(){var t=this,A=t.$createElement;t._self._c;return t._m(0)},G=[function(){var t=this,A=t.$createElement,s=t._self._c||A;return s("section",{staticClass:"section has-background-grey-lighter",attrs:{id:"skill"}},[s("div",{staticClass:"intro column is-8 is-offset-2"},[s("h2",{staticClass:"title"},[t._v("SKILLSET")]),s("p",{staticClass:"subtitle"},[t._v("Here are my special "),s("strong",[t._v('"PERKS"')]),t._v(".")])])])}],O={},k=Object(n["a"])(O,J,G,!1,null,null,null),D=k.exports,y=function(){var t=this,A=t.$createElement;t._self._c;return t._m(0)},X=[function(){var t=this,A=t.$createElement,s=t._self._c||A;return s("section",{staticClass:"section has-background-grey-light"},[s("div",{staticClass:"intro column is-8 is-offset-2"},[s("h2",{staticClass:"title"},[t._v("CONTACT")]),s("p",{staticClass:"subtitle is-bold"},[t._v("Do you wanna "),s("strong",[t._v("CONTACT")]),t._v(" me? here are my "),s("strong",[t._v('"INFO"')]),t._v("s.")])])])}],T={},x=Object(n["a"])(T,y,X,!1,null,null,null),H=x.exports,z={name:"Home",components:{Profiles:h,Appendix:Y,Projects:P,Skillset:D,Contact:H}},S=z,j=(s("c394"),Object(n["a"])(S,u,C,!1,null,"1d02bb07",null)),q=j.exports,N=function(){var t=this,A=t.$createElement;t._self._c;return t._m(0)},L=[function(){var t=this,A=t.$createElement,s=t._self._c||A;return s("section",{staticClass:"frisk hero is-bold is-medium"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container has-text-centered"},[s("h1",{staticClass:"words title is-light"},[t._v(" 【 "),s("span",{staticClass:"fas fa-star-of-life"}),t._v(" ーーーーー YOU ARE TRUE PACIFIST ーーーーー "),s("span",{staticClass:"fas fa-star-of-life"}),t._v(" 】 ")]),s("p",{staticClass:"words subtitle"},[t._v(' "SHARPENS YOU UP." ')])])])])}],R=(s("8319"),{}),F=Object(n["a"])(R,N,L,!1,null,"06a41d96",null),V=F.exports;i["a"].use(o["a"]);var U=[{path:"/",name:"Home",component:q},{path:"/profile",name:"Profile",component:h},{path:"/skillset",name:"Skillset",component:D},{path:"/project",name:"Project",component:P},{path:"/contact",name:"Contact",component:H},{path:"/frisk",name:"Frisk",component:V}],Z=new o["a"]({routes:U}),W=Z,K=s("2f62");i["a"].use(K["a"]);var $=new K["a"].Store({state:{},mutations:{},actions:{},modules:{}});i["a"].config.productionTip=!1,new i["a"]({router:W,store:$,render:function(t){return t(r)}}).$mount("#app")},6433:function(t,A,s){},"6c68":function(t,A,s){},"7f61":function(t,A){t.exports="data:image/png;base64,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"},8319:function(t,A,s){"use strict";s("6c68")},"85ec":function(t,A,s){},c394:function(t,A,s){"use strict";s("6433")},fa2c:function(t,A,s){"use strict";s("362f")}});
//# sourceMappingURL=app.c5a3bdf6.js.map