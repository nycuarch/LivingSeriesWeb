var e=`# Studio 名單（COLLECTION）

**這個檔案就是全站 16 個 Studio 的設定。** 改下面表格裡的文字、存檔，選單、篩選列、Studio 頁、作品頁、搜尋、展場地圖都會一起更新。

| 代號 | 系列 | 中文名稱 | 英文名稱 | 發布 |
| --- | --- | --- | --- | --- |
| CS1A | CS | 象之尺 | | 即將 |
| CS1B | CS | 身體機器 | | 即將 |
| CS2A | CS | 住宅 | | |
| CS2B | CS | 型態工作坊 | | |
| CS2C | CS | 圖書館 | | |
| CS3A | CS | 小住宅 | | 即將 |
| CS3B | CS | 集合住宅 | | 即將 |
| CS4 | CS | 國立原住民族博物館園區 | | |
| OS1 | OS | 模組化築構設計與實作 | | |
| OS2 | OS | 房產科技與住宅產品化實踐 | | |
| OS3 | OS | | Landscape Urbanism Studio | |
| OS4 | OS | 五十種建築的存在樣貌 | | |
| OS5 | OS | 異自然2 | | 即將 |
| OS6 | OS | 建築機器人 | | 即將 |
| OS7 | OS | 能源組 | | 即將 |
| OS8 | OS | 2050的十八尖山 | | 即將 |

## 怎麼改

- **中文名稱／英文名稱**：直接改格子裡的字。可以只填其中一種；兩種都填的話，Studio 頁的標題會兩種並列。
  中文名稱空白時，全站用英文名稱代替。
- **發布**：
  - 空白 = 已發布，作品會出現在網站上
  - \`即將\` = 頁面顯示 COMING SOON，資料夾裡的作品先不發布
  - 其他文字（例如 \`2027.02\`）= 一樣是 COMING SOON，而且這段文字會顯示在 COMING SOON 旁邊
- **代號**：會變成網址（\`/collections/cs2a\`），也是作品資料夾的名稱（\`src/works/CS2A/\`）。定下來之後不要再改。
- **系列**：\`CS\` 或 \`OS\`，決定在選單與篩選列裡排在哪一組。
- **增加或刪除 Studio**：增減表格的一列（代號不能重複）。作品資料夾 \`src/works/<代號>/\` 要跟著增減。
- 每一列要用 \`|\` 分成五格；格子裡不要再打 \`|\`。表格以外的文字（像這一段）網站不會讀。
`,t=[{slug:`architecture`,label:`ARCHITECTURE`,color:`#3d5f8a`},{slug:`structural`,label:`STRUCTURAL`,color:`#3f7d4e`},{slug:`installation`,label:`INSTALLATION`,color:`#a8791a`},{slug:`conceptual`,label:`CONCEPTUAL`,color:`#7353a8`},{slug:`urban`,label:`URBAN`,color:`#b04a6a`}],n=[{slug:`cs`,label:`CS`},{slug:`os`,label:`OS`}],r={code:`代號`,group:`系列`,nameZh:`中文名稱`,nameEn:`英文名稱`,release:`發布`},i=new Set([`即將`,`是`,`soon`,`coming`,`coming soon`,`true`,`yes`,`v`,`✓`]);function a(e){return Error(`[Studio 名單] src/studios.md：${e}`)}function o(e){return e.trim().replace(/^\|/,``).replace(/\|$/,``).split(`|`).map(e=>e.trim().replace(/^`(.*)`$/,`$1`).trim())}function s(e){let t=e.split(/\r?\n/).filter(e=>e.trim().startsWith(`|`)).map(o),s=t.shift()??[],c=Object.fromEntries(Object.entries(r).map(([e,t])=>{let n=s.indexOf(t);if(n<0)throw a(`表格少了「${t}」這一欄（第一列要是：${Object.values(r).join(`｜`)}）。`);return[e,n]})),l=new Set;return t.filter(e=>!e.every(e=>/^:?-*:?$/.test(e))).map(e=>{let t=e[c.code]??``,r=t.toLowerCase();if(!/^[a-z0-9-]+$/.test(r))throw a(`「${t||`（空白）`}」不能當代號，只能用英文字母、數字、連字號。`);if(l.has(r))throw a(`代號 ${t} 出現了兩次。`);l.add(r);let o=(e[c.group]??``).toLowerCase();if(!n.some(e=>e.slug===o))throw a(`${t} 的系列要填 ${n.map(e=>e.label).join(` 或 `)}。`);let s=e[c.nameZh]??``,u=e[c.nameEn]??``,d=e[c.release]??``;return{slug:r,label:t,name:s||u,nameZh:s,nameEn:u,group:o,coming:d?i.has(d.toLowerCase())||d:!1}})}var c=s(e);function l(e){let t=String(e??``).trim().toLowerCase();return c.find(e=>e.slug===t)??null}function u(e){return e?[e.label,e.name].filter(Boolean).join(` `):``}var d=[{slug:`2026`,label:`2026`},{slug:`2025`,label:`2025`},{slug:`2024`,label:`2024`}],f=[{slug:`tutors`,role:`tutor`,label:`TUTORS`,labelZh:`老師`},{slug:`students`,role:`student`,label:`STUDENTS`,labelZh:`同學`}];function p(e){return t.find(t=>t.slug===e)??null}function m(e){let t=p(e);return t?{"--cat":t.color}:void 0}var h={PROJECTS:{href:`/projects`,columns:[{title:`CATEGORY`,links:[{label:`ALL`,href:`/projects`},...t.map(e=>({label:e.label,href:`/projects/${e.slug}`}))]},...n.map(e=>({title:`COLLECTION　${e.label}`,links:c.filter(t=>t.group===e.slug).map(e=>({label:e.label,alt:e.name,full:u(e),soon:!!e.coming,href:`/collections/${e.slug}`}))})),{title:`ARCHIVE`,links:d.map(e=>({label:e.label,href:`/archive/${e.slug}`}))}]},PEOPLE:{href:`/people`,columns:[{title:`PEOPLE`,links:[{label:`ALL`,href:`/people`},...f.map(e=>({label:e.label,href:`/people/${e.slug}`}))]}]},ABOUT:{href:`/about`,columns:[{title:`EXHIBITION`,links:[{label:`ABOUT`,href:`/about`},{label:`INFORMATION`,href:`/information`},{label:`VENUE MAP`,href:`/map`},{label:`LOCATION`,href:`/location`},{label:`CONTACT`,href:`/contact`}]},{title:`INSTITUTE`,links:[{label:`NYCU ARCHITECTURE ↗`,href:`https://arch.nycu.edu.tw/zh/home/`}]}]}};export{l as a,t as c,p as i,n,h as o,c as r,f as s,m as t};