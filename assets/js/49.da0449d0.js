(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{608:function(t,a,s){"use strict";s.r(a);var r=s(22),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),s("p",[t._v("自己的博客图片链接使用B站的图床，如果直接使用这些链接的话，是会返回403的。然后今天在做"),s("a",{attrs:{href:"https://xlzy520.cn/bili-short-url/",target:"_blank",rel:"noopener noreferrer"}},[t._v("B站短链生成器"),s("OutboundLink")],1),t._v("的时候，生成的短链想要点击之后直接新窗口打开，页面展示403，如果在地址栏再点一次回车或者复制链接打开都是正常的。")]),t._v(" "),s("h3",{attrs:{id:"原因"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原因"}},[t._v("#")]),t._v(" 原因")]),t._v(" "),s("p",[t._v("原因都是一样的，因为B站开启了防盗链，利用的是HTTP的Referer属性做判断。如果Referer是他白名单之外的网站，就会返回403。\n"),s("img",{attrs:{src:"http://i0.hdslb.com/bfs/album/325d4a90155fae66f8fa0cbeeacd5466df1aa0d2.png",alt:"image-20210525212528558"}})]),t._v(" "),s("h3",{attrs:{id:"解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),s("h4",{attrs:{id:"全站图片使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全站图片使用"}},[t._v("#")]),t._v(" 全站图片使用")]),t._v(" "),s("p",[t._v("在html的head标签中设置如下标志，那么全站资源引用都不会携带referrer")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("referrer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("no-referrer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h4",{attrs:{id:"新窗口打开"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新窗口打开"}},[t._v("#")]),t._v(" 新窗口打开")]),t._v(" "),s("p",[t._v("主要设置"),s("code",[t._v('rel="noreferrer"')]),t._v("，使用"),s("code",[t._v("window.open")]),t._v("打开的话是会默认携带"),s("code",[t._v("referrer")]),t._v("的，第一次还是会403")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("noreferrer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("target")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("_blank"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"推荐"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#推荐"}},[t._v("#")]),t._v(" 推荐")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://xlzy520.cn/bili-short-url/",target:"_blank",rel:"noopener noreferrer"}},[t._v("B站短链生成器"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/xlzy520/bilibili-img-uploader",target:"_blank",rel:"noopener noreferrer"}},[t._v("B站图床插件"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/xlzy520/typora-plugin-bilibili",target:"_blank",rel:"noopener noreferrer"}},[t._v("Typora B站图床插件 粘贴上传"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);