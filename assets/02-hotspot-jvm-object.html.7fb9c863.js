import{_ as a,d as e}from"./app.bff67ba1.js";const r={},t=e('<h1 id="hotspot-\u865A\u62DF\u673A\u5BF9\u8C61\u63A2\u79D8" tabindex="-1"><a class="header-anchor" href="#hotspot-\u865A\u62DF\u673A\u5BF9\u8C61\u63A2\u79D8" aria-hidden="true">#</a> HotSpot \u865A\u62DF\u673A\u5BF9\u8C61\u63A2\u79D8</h1><h2 id="\u5BF9\u8C61\u7684\u5185\u5B58\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u7684\u5185\u5B58\u5E03\u5C40" aria-hidden="true">#</a> \u5BF9\u8C61\u7684\u5185\u5B58\u5E03\u5C40</h2><p>\u5728 HotSpot \u865A\u62DF\u673A\u4E2D\uFF0C\u5BF9\u8C61\u7684\u5185\u5B58\u5E03\u5C40\u5206\u4E3A\u4EE5\u4E0B 3 \u5757\u533A\u57DF\uFF1A</p><ul><li>\u5BF9\u8C61\u5934\uFF08Header\uFF09</li><li>\u5B9E\u4F8B\u6570\u636E\uFF08Instance Data\uFF09</li><li>\u5BF9\u9F50\u586B\u5145\uFF08Padding\uFF09</li></ul><p><img src="https://cdn.jsdelivr.net/gh/doocs/jvm@main/images/object-memory-layout.png" alt="object-memory-layout.png"></p><h3 id="\u5BF9\u8C61\u5934" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u5934" aria-hidden="true">#</a> \u5BF9\u8C61\u5934</h3><p>\u5BF9\u8C61\u5934\u8BB0\u5F55\u4E86\u5BF9\u8C61\u5728\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u6240\u9700\u8981\u4F7F\u7528\u7684\u4E00\u4E9B\u6570\u636E\uFF1A</p><ul><li>\u54C8\u5E0C\u7801</li><li>GC \u5206\u4EE3\u5E74\u9F84</li><li>\u9501\u72B6\u6001\u6807\u5FD7</li><li>\u7EBF\u7A0B\u6301\u6709\u7684\u9501</li><li>\u504F\u5411\u7EBF\u7A0B ID</li><li>\u504F\u5411\u65F6\u95F4\u6233</li></ul><p>\u5BF9\u8C61\u5934\u53EF\u80FD\u5305\u542B\u7C7B\u578B\u6307\u9488\uFF0C\u901A\u8FC7\u8BE5\u6307\u9488\u80FD\u786E\u5B9A\u5BF9\u8C61\u5C5E\u4E8E\u54EA\u4E2A\u7C7B\u3002\u5982\u679C\u5BF9\u8C61\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u90A3\u4E48\u5BF9\u8C61\u5934\u8FD8\u4F1A\u5305\u62EC\u6570\u7EC4\u957F\u5EA6\u3002</p><h3 id="\u5B9E\u4F8B\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B\u6570\u636E" aria-hidden="true">#</a> \u5B9E\u4F8B\u6570\u636E</h3><p>\u5B9E\u4F8B\u6570\u636E\u90E8\u5206\u5C31\u662F\u6210\u5458\u53D8\u91CF\u7684\u503C\uFF0C\u5176\u4E2D\u5305\u62EC\u7236\u7C7B\u6210\u5458\u53D8\u91CF\u548C\u672C\u7C7B\u6210\u5458\u53D8\u91CF\u3002</p><h3 id="\u5BF9\u9F50\u586B\u5145" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u9F50\u586B\u5145" aria-hidden="true">#</a> \u5BF9\u9F50\u586B\u5145</h3><p>\u7528\u4E8E\u786E\u4FDD\u5BF9\u8C61\u7684\u603B\u957F\u5EA6\u4E3A 8 \u5B57\u8282\u7684\u6574\u6570\u500D\u3002</p><p>HotSpot VM \u7684\u81EA\u52A8\u5185\u5B58\u7BA1\u7406\u7CFB\u7EDF\u8981\u6C42\u5BF9\u8C61\u7684\u5927\u5C0F\u5FC5\u987B\u662F 8 \u5B57\u8282\u7684\u6574\u6570\u500D\u3002\u800C\u5BF9\u8C61\u5934\u90E8\u5206\u6B63\u597D\u662F 8 \u5B57\u8282\u7684\u500D\u6570\uFF081 \u500D\u6216 2 \u500D\uFF09\uFF0C\u56E0\u6B64\uFF0C\u5F53\u5BF9\u8C61\u5B9E\u4F8B\u6570\u636E\u90E8\u5206\u6CA1\u6709\u5BF9\u9F50\u65F6\uFF0C\u5C31\u9700\u8981\u901A\u8FC7\u5BF9\u9F50\u586B\u5145\u6765\u8865\u5168\u3002</p><blockquote><p>\u5BF9\u9F50\u586B\u5145\u5E76\u4E0D\u662F\u5FC5\u7136\u5B58\u5728\uFF0C\u4E5F\u6CA1\u6709\u7279\u522B\u7684\u542B\u4E49\uFF0C\u5B83\u4EC5\u4EC5\u8D77\u7740\u5360\u4F4D\u7B26\u7684\u4F5C\u7528\u3002</p></blockquote><h2 id="\u5BF9\u8C61\u7684\u521B\u5EFA\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u7684\u521B\u5EFA\u8FC7\u7A0B" aria-hidden="true">#</a> \u5BF9\u8C61\u7684\u521B\u5EFA\u8FC7\u7A0B</h2><h3 id="\u7C7B\u52A0\u8F7D\u68C0\u67E5" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u52A0\u8F7D\u68C0\u67E5" aria-hidden="true">#</a> \u7C7B\u52A0\u8F7D\u68C0\u67E5</h3><p>\u865A\u62DF\u673A\u5728\u89E3\u6790<code>.class</code>\u6587\u4EF6\u65F6\uFF0C\u82E5\u9047\u5230\u4E00\u6761 new \u6307\u4EE4\uFF0C\u9996\u5148\u5B83\u4F1A\u53BB\u68C0\u67E5\u5E38\u91CF\u6C60\u4E2D\u662F\u5426\u6709\u8FD9\u4E2A\u7C7B\u7684\u7B26\u53F7\u5F15\u7528\uFF0C\u5E76\u4E14\u68C0\u67E5\u8FD9\u4E2A\u7B26\u53F7\u5F15\u7528\u6240\u4EE3\u8868\u7684\u7C7B\u662F\u5426\u5DF2\u88AB\u52A0\u8F7D\u3001\u89E3\u6790\u548C\u521D\u59CB\u5316\u8FC7\u3002\u5982\u679C\u6CA1\u6709\uFF0C\u90A3\u4E48\u5FC5\u987B\u5148\u6267\u884C\u76F8\u5E94\u7684\u7C7B\u52A0\u8F7D\u8FC7\u7A0B\u3002</p><h3 id="\u4E3A\u65B0\u751F\u5BF9\u8C61\u5206\u914D\u5185\u5B58" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u65B0\u751F\u5BF9\u8C61\u5206\u914D\u5185\u5B58" aria-hidden="true">#</a> \u4E3A\u65B0\u751F\u5BF9\u8C61\u5206\u914D\u5185\u5B58</h3><p>\u5BF9\u8C61\u6240\u9700\u5185\u5B58\u7684\u5927\u5C0F\u5728\u7C7B\u52A0\u8F7D\u5B8C\u6210\u540E\u4FBF\u53EF\u5B8C\u5168\u786E\u5B9A\uFF0C\u63A5\u4E0B\u6765\u4ECE\u5806\u4E2D\u5212\u5206\u4E00\u5757\u5BF9\u5E94\u5927\u5C0F\u7684\u5185\u5B58\u7A7A\u95F4\u7ED9\u65B0\u7684\u5BF9\u8C61\u3002\u5206\u914D\u5806\u4E2D\u5185\u5B58\u6709\u4E24\u79CD\u65B9\u5F0F\uFF1A</p><ul><li><p><strong>\u6307\u9488\u78B0\u649E</strong><br> \u5982\u679C Java <strong>\u5806\u4E2D\u5185\u5B58\u7EDD\u5BF9\u89C4\u6574</strong>\uFF08\u8BF4\u660E\u91C7\u7528\u7684\u662F\u201C<strong>\u590D\u5236\u7B97\u6CD5</strong>\u201D\u6216\u201C<strong>\u6807\u8BB0\u6574\u7406\u6CD5</strong>\u201D\uFF09\uFF0C\u7A7A\u95F2\u5185\u5B58\u548C\u5DF2\u4F7F\u7528\u5185\u5B58\u4E2D\u95F4\u653E\u7740\u4E00\u4E2A\u6307\u9488\u4F5C\u4E3A\u5206\u754C\u70B9\u6307\u793A\u5668\uFF0C\u90A3\u4E48\u5206\u914D\u5185\u5B58\u65F6\u53EA\u9700\u8981\u628A\u6307\u9488\u5411\u7A7A\u95F2\u5185\u5B58\u632A\u52A8\u4E00\u6BB5\u4E0E\u5BF9\u8C61\u5927\u5C0F\u4E00\u6837\u7684\u8DDD\u79BB\uFF0C\u8FD9\u79CD\u5206\u914D\u65B9\u5F0F\u79F0\u4E3A\u201C<strong>\u6307\u9488\u78B0\u649E</strong>\u201D\u3002</p></li><li><p><strong>\u7A7A\u95F2\u5217\u8868</strong><br> \u5982\u679C Java <strong>\u5806\u4E2D\u5185\u5B58\u5E76\u4E0D\u89C4\u6574</strong>\uFF0C\u5DF2\u4F7F\u7528\u7684\u5185\u5B58\u548C\u7A7A\u95F2\u5185\u5B58\u4EA4\u9519\uFF08\u8BF4\u660E\u91C7\u7528\u7684\u662F<strong>\u6807\u8BB0-\u6E05\u9664\u6CD5</strong>\uFF0C\u6709\u788E\u7247\uFF09\uFF0C\u6B64\u65F6\u6CA1\u6CD5\u7B80\u5355\u8FDB\u884C\u6307\u9488\u78B0\u649E\uFF0C VM \u5FC5\u987B\u7EF4\u62A4\u4E00\u4E2A\u5217\u8868\uFF0C\u8BB0\u5F55\u5176\u4E2D\u54EA\u4E9B\u5185\u5B58\u5757\u7A7A\u95F2\u53EF\u7528\u3002\u5206\u914D\u4E4B\u65F6\u4ECE\u7A7A\u95F2\u5217\u8868\u4E2D\u627E\u5230\u4E00\u5757\u8DB3\u591F\u5927\u7684\u5185\u5B58\u7A7A\u95F4\u5212\u5206\u7ED9\u5BF9\u8C61\u5B9E\u4F8B\u3002\u8FD9\u79CD\u65B9\u5F0F\u79F0\u4E3A\u201C<strong>\u7A7A\u95F2\u5217\u8868</strong>\u201D\u3002</p></li></ul><h3 id="\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316" aria-hidden="true">#</a> \u521D\u59CB\u5316</h3><p>\u5206\u914D\u5B8C\u5185\u5B58\u540E\uFF0C\u4E3A\u5BF9\u8C61\u4E2D\u7684\u6210\u5458\u53D8\u91CF\u8D4B\u4E0A\u521D\u59CB\u503C\uFF0C\u8BBE\u7F6E\u5BF9\u8C61\u5934\u4FE1\u606F\uFF0C\u8C03\u7528\u5BF9\u8C61\u7684\u6784\u9020\u51FD\u6570\u65B9\u6CD5\u8FDB\u884C\u521D\u59CB\u5316\u3002</p><p>\u81F3\u6B64\uFF0C\u6574\u4E2A\u5BF9\u8C61\u7684\u521B\u5EFA\u8FC7\u7A0B\u5C31\u5B8C\u6210\u4E86\u3002</p><h2 id="\u5BF9\u8C61\u7684\u8BBF\u95EE\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u7684\u8BBF\u95EE\u65B9\u5F0F" aria-hidden="true">#</a> \u5BF9\u8C61\u7684\u8BBF\u95EE\u65B9\u5F0F</h2><p>\u6240\u6709\u5BF9\u8C61\u7684\u5B58\u50A8\u7A7A\u95F4\u90FD\u662F\u5728\u5806\u4E2D\u5206\u914D\u7684\uFF0C\u4F46\u662F\u8FD9\u4E2A\u5BF9\u8C61\u7684\u5F15\u7528\u5374\u662F\u5728\u5806\u6808\u4E2D\u5206\u914D\u7684\u3002\u4E5F\u5C31\u662F\u8BF4\u5728\u5EFA\u7ACB\u4E00\u4E2A\u5BF9\u8C61\u65F6\u4E24\u4E2A\u5730\u65B9\u90FD\u5206\u914D\u5185\u5B58\uFF0C\u5728\u5806\u4E2D\u5206\u914D\u7684\u5185\u5B58\u5B9E\u9645\u5EFA\u7ACB\u8FD9\u4E2A\u5BF9\u8C61\uFF0C\u800C\u5728\u5806\u6808\u4E2D\u5206\u914D\u7684\u5185\u5B58\u53EA\u662F\u4E00\u4E2A\u6307\u5411\u8FD9\u4E2A\u5806\u5BF9\u8C61\u7684\u6307\u9488\uFF08\u5F15\u7528\uFF09\u800C\u5DF2\u3002 \u90A3\u4E48\u6839\u636E\u5F15\u7528\u5B58\u653E\u7684\u5730\u5740\u7C7B\u578B\u7684\u4E0D\u540C\uFF0C\u5BF9\u8C61\u6709\u4E0D\u540C\u7684\u8BBF\u95EE\u65B9\u5F0F\u3002</p><h3 id="\u53E5\u67C4\u8BBF\u95EE\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u53E5\u67C4\u8BBF\u95EE\u65B9\u5F0F" aria-hidden="true">#</a> \u53E5\u67C4\u8BBF\u95EE\u65B9\u5F0F</h3><p>\u5806\u4E2D\u9700\u8981\u6709\u4E00\u5757\u53EB\u505A\u201C\u53E5\u67C4\u6C60\u201D\u7684\u5185\u5B58\u7A7A\u95F4\uFF0C\u53E5\u67C4\u4E2D\u5305\u542B\u4E86\u5BF9\u8C61\u5B9E\u4F8B\u6570\u636E\u4E0E\u7C7B\u578B\u6570\u636E\u5404\u81EA\u7684\u5177\u4F53\u5730\u5740\u4FE1\u606F\u3002</p><p>\u5F15\u7528\u7C7B\u578B\u7684\u53D8\u91CF\u5B58\u653E\u7684\u662F\u8BE5\u5BF9\u8C61\u7684\u53E5\u67C4\u5730\u5740\uFF08reference\uFF09\u3002\u8BBF\u95EE\u5BF9\u8C61\u65F6\uFF0C\u9996\u5148\u9700\u8981\u901A\u8FC7\u5F15\u7528\u7C7B\u578B\u7684\u53D8\u91CF\u627E\u5230\u8BE5\u5BF9\u8C61\u7684\u53E5\u67C4\uFF0C\u7136\u540E\u6839\u636E\u53E5\u67C4\u4E2D\u5BF9\u8C61\u7684\u5730\u5740\u627E\u5230\u5BF9\u8C61\u3002</p><p><img src="https://cdn.jsdelivr.net/gh/doocs/jvm@main/images/handle-access.jpg" alt="handle-access"></p><h3 id="\u76F4\u63A5\u6307\u9488\u8BBF\u95EE\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u76F4\u63A5\u6307\u9488\u8BBF\u95EE\u65B9\u5F0F" aria-hidden="true">#</a> \u76F4\u63A5\u6307\u9488\u8BBF\u95EE\u65B9\u5F0F</h3><p>\u5F15\u7528\u7C7B\u578B\u7684\u53D8\u91CF\u76F4\u63A5\u5B58\u653E\u5BF9\u8C61\u7684\u5730\u5740\uFF0C\u4ECE\u800C\u4E0D\u9700\u8981\u53E5\u67C4\u6C60\uFF0C\u901A\u8FC7\u5F15\u7528\u80FD\u591F\u76F4\u63A5\u8BBF\u95EE\u5BF9\u8C61\u3002\u4F46\u5BF9\u8C61\u6240\u5728\u7684\u5185\u5B58\u7A7A\u95F4\u9700\u8981\u989D\u5916\u7684\u7B56\u7565\u5B58\u50A8\u5BF9\u8C61\u6240\u5C5E\u7684\u7C7B\u4FE1\u606F\u7684\u5730\u5740\u3002</p><p><img src="https://cdn.jsdelivr.net/gh/doocs/jvm@main/images/direct-pointer.jpg" alt="direct-pointer"></p><p>\u9700\u8981\u8BF4\u660E\u7684\u662F\uFF0CHotSpot \u91C7\u7528\u7B2C\u4E8C\u79CD\u65B9\u5F0F\uFF0C\u5373\u76F4\u63A5\u6307\u9488\u65B9\u5F0F\u6765\u8BBF\u95EE\u5BF9\u8C61\uFF0C\u53EA\u9700\u8981\u4E00\u6B21\u5BFB\u5740\u64CD\u4F5C\uFF0C\u6240\u4EE5\u5728\u6027\u80FD\u4E0A\u6BD4\u53E5\u67C4\u8BBF\u95EE\u65B9\u5F0F\u5FEB\u4E00\u500D\u3002\u4F46\u50CF\u4E0A\u9762\u6240\u8BF4\uFF0C\u5B83\u9700\u8981<strong>\u989D\u5916\u7684\u7B56\u7565</strong>\u6765\u5B58\u50A8\u5BF9\u8C61\u5728\u65B9\u6CD5\u533A\u4E2D\u7C7B\u4FE1\u606F\u7684\u5730\u5740\u3002</p>',34);function i(h,d){return t}var s=a(r,[["render",i],["__file","02-hotspot-jvm-object.html.vue"]]);export{s as default};
