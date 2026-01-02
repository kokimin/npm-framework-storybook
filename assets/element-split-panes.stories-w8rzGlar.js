import{l as D,k as Ye,a as S,m as b,c as Ke,w as H,f as Ae,j as Me,o as _,r as Z,O as Ze,u as P,J as Fe,s as U,q as k,b as Ge,D as Y,h as et,v as K,y as le}from"./vue.esm-bundler-C23JohzN.js";import{Q as tt}from"./index-C8W6ez_R.js";import"./_commonjsHelpers-Cpj98o6Y.js";const nt={__name:"splitpanes",props:{horizontal:{type:Boolean,default:!1},pushOtherPanes:{type:Boolean,default:!0},maximizePanes:{type:Boolean,default:!0},rtl:{type:Boolean,default:!1},firstSplitter:{type:Boolean,default:!1}},emits:["ready","resize","resized","pane-click","pane-maximize","pane-add","pane-remove","splitter-click","splitter-dblclick"],setup(p,{emit:f}){const c=f,d=p,B=Fe(),a=b([]),z=S(()=>a.value.reduce((e,t)=>(e[~~t.id]=t)&&e,{})),h=S(()=>a.value.length),v=b(null),E=b(!1),u=b({mouseDown:!1,dragging:!1,activeSplitter:null,cursorOffset:0}),y=b({splitter:null,timeoutId:null}),A=S(()=>({[`splitpanes splitpanes--${d.horizontal?"horizontal":"vertical"}`]:!0,"splitpanes--dragging":u.value.dragging})),M=()=>{document.addEventListener("mousemove",s,{passive:!1}),document.addEventListener("mouseup",w),"ontouchstart"in window&&(document.addEventListener("touchmove",s,{passive:!1}),document.addEventListener("touchend",w))},F=()=>{document.removeEventListener("mousemove",s,{passive:!1}),document.removeEventListener("mouseup",w),"ontouchstart"in window&&(document.removeEventListener("touchmove",s,{passive:!1}),document.removeEventListener("touchend",w))},N=(e,t)=>{const l=e.target.closest(".splitpanes__splitter");if(l){const{left:n,top:i}=l.getBoundingClientRect(),{clientX:o,clientY:r}="ontouchstart"in window&&e.touches?e.touches[0]:e;u.value.cursorOffset=d.horizontal?r-i:o-n}M(),u.value.mouseDown=!0,u.value.activeSplitter=t},s=e=>{u.value.mouseDown&&(e.preventDefault(),u.value.dragging=!0,requestAnimationFrame(()=>{je(_e(e)),g("resize",{event:e},!0)}))},w=e=>{u.value.dragging&&(window.getSelection().removeAllRanges(),g("resized",{event:e},!0)),u.value.mouseDown=!1,u.value.activeSplitter=null,setTimeout(()=>{u.value.dragging=!1,F()},100)},Q=(e,t)=>{"ontouchstart"in window&&(e.preventDefault(),y.value.splitter===t?(clearTimeout(y.value.timeoutId),y.value.timeoutId=null,G(e,t),y.value.splitter=null):(y.value.splitter=t,y.value.timeoutId=setTimeout(()=>y.value.splitter=null,500))),u.value.dragging||g("splitter-click",{event:e,index:t},!0)},G=(e,t)=>{if(g("splitter-dblclick",{event:e,index:t},!0),d.maximizePanes){let l=0;a.value=a.value.map((n,i)=>(n.size=i===t?n.max:n.min,i!==t&&(l+=n.min),n)),a.value[t].size-=l,g("pane-maximize",{event:e,index:t,pane:a.value[t]}),g("resized",{event:e,index:t},!0)}},Re=(e,t)=>{g("pane-click",{event:e,index:z.value[t].index,pane:z.value[t]})},_e=e=>{const t=v.value.getBoundingClientRect(),{clientX:l,clientY:n}="ontouchstart"in window&&e.touches?e.touches[0]:e;return{x:l-(d.horizontal?0:u.value.cursorOffset)-t.left,y:n-(d.horizontal?u.value.cursorOffset:0)-t.top}},Ne=e=>{e=e[d.horizontal?"y":"x"];const t=v.value[d.horizontal?"clientHeight":"clientWidth"];return d.rtl&&!d.horizontal&&(e=t-e),e*100/t},je=e=>{const t=u.value.activeSplitter;let l={prevPanesSize:ee(t),nextPanesSize:R(t),prevReachedMinPanes:0,nextReachedMinPanes:0};const n=0+(d.pushOtherPanes?0:l.prevPanesSize),i=100-(d.pushOtherPanes?0:l.nextPanesSize),o=Math.max(Math.min(Ne(e),i),n);let r=[t,t+1],m=a.value[r[0]]||null,x=a.value[r[1]]||null;const ne=m.max<100&&o>=m.max+l.prevPanesSize,Xe=x.max<100&&o<=100-(x.max+R(t+1));if(ne||Xe){ne?(m.size=m.max,x.size=Math.max(100-m.max-l.prevPanesSize-l.nextPanesSize,0)):(m.size=Math.max(100-x.max-l.prevPanesSize-R(t+1),0),x.size=x.max);return}if(d.pushOtherPanes){const ie=Le(l,o);if(!ie)return;({sums:l,panesToResize:r}=ie),m=a.value[r[0]]||null,x=a.value[r[1]]||null}m!==null&&(m.size=Math.min(Math.max(o-l.prevPanesSize-l.prevReachedMinPanes,m.min),m.max)),x!==null&&(x.size=Math.min(Math.max(100-o-l.nextPanesSize-l.nextReachedMinPanes,x.min),x.max))},Le=(e,t)=>{const l=u.value.activeSplitter,n=[l,l+1];return t<e.prevPanesSize+a.value[n[0]].min&&(n[0]=Oe(l).index,e.prevReachedMinPanes=0,n[0]<l&&a.value.forEach((i,o)=>{o>n[0]&&o<=l&&(i.size=i.min,e.prevReachedMinPanes+=i.min)}),e.prevPanesSize=ee(n[0]),n[0]===void 0)?(e.prevReachedMinPanes=0,a.value[0].size=a.value[0].min,a.value.forEach((i,o)=>{o>0&&o<=l&&(i.size=i.min,e.prevReachedMinPanes+=i.min)}),a.value[n[1]].size=100-e.prevReachedMinPanes-a.value[0].min-e.prevPanesSize-e.nextPanesSize,null):t>100-e.nextPanesSize-a.value[n[1]].min&&(n[1]=Te(l).index,e.nextReachedMinPanes=0,n[1]>l+1&&a.value.forEach((i,o)=>{o>l&&o<n[1]&&(i.size=i.min,e.nextReachedMinPanes+=i.min)}),e.nextPanesSize=R(n[1]-1),n[1]===void 0)?(e.nextReachedMinPanes=0,a.value.forEach((i,o)=>{o<h.value-1&&o>=l+1&&(i.size=i.min,e.nextReachedMinPanes+=i.min)}),a.value[n[0]].size=100-e.prevPanesSize-R(n[0]-1),null):{sums:e,panesToResize:n}},ee=e=>a.value.reduce((t,l,n)=>t+(n<e?l.size:0),0),R=e=>a.value.reduce((t,l,n)=>t+(n>e+1?l.size:0),0),Oe=e=>[...a.value].reverse().find(t=>t.index<e&&t.size>t.min)||{},Te=e=>a.value.find(t=>t.index>e+1&&t.size>t.min)||{},We=()=>{var e;const t=Array.from(((e=v.value)==null?void 0:e.children)||[]);for(const l of t){const n=l.classList.contains("splitpanes__pane"),i=l.classList.contains("splitpanes__splitter");!n&&!i&&(l.remove(),console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."))}},te=(e,t,l=!1)=>{const n=e-1,i=document.createElement("div");i.classList.add("splitpanes__splitter"),l||(i.onmousedown=o=>N(o,n),typeof window<"u"&&"ontouchstart"in window&&(i.ontouchstart=o=>N(o,n)),i.onclick=o=>Q(o,n+1)),i.ondblclick=o=>G(o,n+1),t.parentNode.insertBefore(i,t)},Ie=e=>{e.onmousedown=void 0,e.onclick=void 0,e.ondblclick=void 0,e.remove()},j=()=>{var e;const t=Array.from(((e=v.value)==null?void 0:e.children)||[]);for(const n of t)n.className.includes("splitpanes__splitter")&&Ie(n);let l=0;for(const n of t)n.className.includes("splitpanes__pane")&&(!l&&d.firstSplitter?te(l,n,!0):l&&te(l,n),l++)},$e=({uid:e,...t})=>{const l=z.value[e];for(const[n,i]of Object.entries(t))l[n]=i},qe=e=>{var t;let l=-1;Array.from(((t=v.value)==null?void 0:t.children)||[]).some(n=>(n.className.includes("splitpanes__pane")&&l++,n.isSameNode(e.el))),a.value.splice(l,0,{...e,index:l}),a.value.forEach((n,i)=>n.index=i),E.value&&Y(()=>{j(),J({addedPane:a.value[l]}),g("pane-add",{pane:a.value[l]})})},Ve=e=>{const t=a.value.findIndex(n=>n.id===e);a.value[t].el=null;const l=a.value.splice(t,1)[0];a.value.forEach((n,i)=>n.index=i),Y(()=>{j(),g("pane-remove",{pane:l}),J({removedPane:{...l}})})},J=(e={})=>{!e.addedPane&&!e.removedPane?Ue():a.value.some(t=>t.givenSize!==null||t.min||t.max<100)?Qe(e):He(),E.value&&g("resized")},He=()=>{const e=100/h.value;let t=0;const l=[],n=[];for(const i of a.value)i.size=Math.max(Math.min(e,i.max),i.min),t-=i.size,i.size>=i.max&&l.push(i.id),i.size<=i.min&&n.push(i.id);t>.1&&X(t,l,n)},Ue=()=>{let e=100;const t=[],l=[];let n=0;for(const o of a.value)e-=o.size,o.givenSize!==null&&n++,o.size>=o.max&&t.push(o.id),o.size<=o.min&&l.push(o.id);let i=100;if(e>.1){for(const o of a.value)o.givenSize===null&&(o.size=Math.max(Math.min(e/(h.value-n),o.max),o.min)),i-=o.size;i>.1&&X(i,t,l)}},Qe=({addedPane:e,removedPane:t}={})=>{let l=100/h.value,n=0;const i=[],o=[];((e==null?void 0:e.givenSize)??null)!==null&&(l=(100-e.givenSize)/(h.value-1));for(const r of a.value)n-=r.size,r.size>=r.max&&i.push(r.id),r.size<=r.min&&o.push(r.id);if(!(Math.abs(n)<.1)){for(const r of a.value)(e==null?void 0:e.givenSize)!==null&&(e==null?void 0:e.id)===r.id||(r.size=Math.max(Math.min(l,r.max),r.min)),n-=r.size,r.size>=r.max&&i.push(r.id),r.size<=r.min&&o.push(r.id);n>.1&&X(n,i,o)}},X=(e,t,l)=>{let n;e>0?n=e/(h.value-t.length):n=e/(h.value-l.length),a.value.forEach((i,o)=>{if(e>0&&!t.includes(i.id)){const r=Math.max(Math.min(i.size+n,i.max),i.min),m=r-i.size;e-=m,i.size=r}else if(!l.includes(i.id)){const r=Math.max(Math.min(i.size+n,i.max),i.min),m=r-i.size;e-=m,i.size=r}}),Math.abs(e)>.1&&Y(()=>{E.value&&console.warn("Splitpanes: Could not resize panes correctly due to their constraints.")})},g=(e,t=void 0,l=!1)=>{const n=(t==null?void 0:t.index)??u.value.activeSplitter??null;c(e,{...t,...n!==null&&{index:n},...l&&n!==null&&{prevPane:a.value[n-(d.firstSplitter?1:0)],nextPane:a.value[n+(d.firstSplitter?0:1)]},panes:a.value.map(i=>({min:i.min,max:i.max,size:i.size}))})};H(()=>d.firstSplitter,()=>j()),Ae(()=>{We(),j(),J(),g("ready"),E.value=!0}),Me(()=>E.value=!1);const Je=()=>{var e;return et("div",{ref:v,class:A.value},(e=B.default)==null?void 0:e.call(B))};return k("panes",a),k("indexedPanes",z),k("horizontal",S(()=>d.horizontal)),k("requestUpdate",$e),k("onPaneAdd",qe),k("onPaneRemove",Ve),k("onPaneClick",Re),(e,t)=>(_(),U(Ge(Je)))}},ae={__name:"pane",props:{size:{type:[Number,String]},minSize:{type:[Number,String],default:0},maxSize:{type:[Number,String],default:100}},setup(p){var f;const c=p,d=D("requestUpdate"),B=D("onPaneAdd"),a=D("horizontal"),z=D("onPaneRemove"),h=D("onPaneClick"),v=(f=Ye())==null?void 0:f.uid,E=D("indexedPanes"),u=S(()=>E.value[v]),y=b(null),A=S(()=>{const s=isNaN(c.size)||c.size===void 0?0:parseFloat(c.size);return Math.max(Math.min(s,F.value),M.value)}),M=S(()=>{const s=parseFloat(c.minSize);return isNaN(s)?0:s}),F=S(()=>{const s=parseFloat(c.maxSize);return isNaN(s)?100:s}),N=S(()=>{var s;return`${a.value?"height":"width"}: ${(s=u.value)==null?void 0:s.size}%`});return H(()=>A.value,s=>d({uid:v,size:s})),H(()=>M.value,s=>d({uid:v,min:s})),H(()=>F.value,s=>d({uid:v,max:s})),Ae(()=>{B({id:v,el:y.value,min:M.value,max:F.value,givenSize:c.size===void 0?null:A.value,size:A.value})}),Me(()=>z(v)),(s,w)=>(_(),Ke("div",{ref_key:"paneEl",ref:y,class:"splitpanes__pane",onClick:w[0]||(w[0]=Q=>P(h)(Q,s._.uid)),style:Ze(N.value)},[Z(s.$slots,"default")],4))}},C={__name:"element-split-panes",props:{className:{type:String,default:""},horizontal:{type:Boolean,default:!1},leftSize:{type:Number,default:50}},emits:["resize"],setup(p,{emit:f}){const c=Fe(),d=tt.generateUuid(),B=f;return(a,z)=>(_(),U(P(nt),{key:P(d),class:"element-splitpanes",horizontal:p.horizontal,onResize:z[0]||(z[0]=h=>B("resize"))},{default:K(()=>[P(c).leftSlot?(_(),U(P(ae),{key:0,size:p.leftSize},{default:K(()=>[Z(a.$slots,"leftSlot")]),_:3},8,["size"])):le("",!0),P(c).rightSlot?(_(),U(P(ae),{key:1},{default:K(()=>[Z(a.$slots,"rightSlot")]),_:3})):le("",!0)]),_:3},8,["horizontal"]))}};C.__docgenInfo={exportName:"default",displayName:"element-split-panes",description:"",tags:{},props:[{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"horizontal",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"leftSize",type:{name:"number"},defaultValue:{func:!1,value:"50"}}],events:[{name:"resize"}],slots:[{name:"leftSlot"},{name:"rightSlot"}],sourceFiles:["/Users/kokimin/WorkSpace/npm-framework/src/components/display/ElementSplitPanes/element-split-panes.vue"]};const ot={title:"Display/ElementSplitPanes",component:C,tags:["autodocs"],argTypes:{className:{control:"text",description:"CSS 클래스명"},horizontal:{control:"boolean",description:"수평 분할 여부"},leftSize:{control:{type:"range",min:10,max:90,step:5},description:"왼쪽 패널 초기 크기 (%)"}}},L={args:{horizontal:!1,leftSize:50},render:p=>({components:{ElementSplitPanes:C},setup(){return{args:p}},template:`
      <div style="height: 400px; border: 1px solid #ddd; border-radius: 4px;">
        <ElementSplitPanes
          :horizontal="args.horizontal"
          :leftSize="args.leftSize"
        >
          <template #leftSlot>
            <div style="padding: 20px; height: 100%; background: #e3f2fd;">
              <h3 style="margin: 0 0 12px 0;">왼쪽 패널</h3>
              <p style="margin: 0;">
                크기를 조절할 수 있습니다. 가운데 구분선을 드래그하세요.
              </p>
            </div>
          </template>
          <template #rightSlot>
            <div style="padding: 20px; height: 100%; background: #f3e5f5;">
              <h3 style="margin: 0 0 12px 0;">오른쪽 패널</h3>
              <p style="margin: 0;">
                패널 크기가 유지됩니다.
              </p>
            </div>
          </template>
        </ElementSplitPanes>
      </div>
    `})},O={args:{horizontal:!0,leftSize:40},render:p=>({components:{ElementSplitPanes:C},setup(){return{args:p}},template:`
      <div style="height: 500px; border: 1px solid #ddd; border-radius: 4px;">
        <ElementSplitPanes
          :horizontal="args.horizontal"
          :leftSize="args.leftSize"
        >
          <template #leftSlot>
            <div style="padding: 20px; height: 100%; background: #fff3e0;">
              <h3 style="margin: 0 0 12px 0;">상단 패널</h3>
              <p style="margin: 0;">수평 분할 레이아웃입니다.</p>
            </div>
          </template>
          <template #rightSlot>
            <div style="padding: 20px; height: 100%; background: #e8f5e9;">
              <h3 style="margin: 0 0 12px 0;">하단 패널</h3>
              <p style="margin: 0;">위아래로 크기를 조절할 수 있습니다.</p>
            </div>
          </template>
        </ElementSplitPanes>
      </div>
    `})},T={render:()=>({components:{ElementSplitPanes:C},setup(){return{code:b(`function hello() {
  console.log("Hello, World!");
  return true;
}

const result = hello();`)}},template:`
      <div style="height: 500px; border: 1px solid #ddd; border-radius: 4px; background: #1e1e1e;">
        <ElementSplitPanes :leftSize="60">
          <template #leftSlot>
            <div style="height: 100%; display: flex; flex-direction: column;">
              <div style="padding: 12px; background: #2d2d2d; color: white; border-bottom: 1px solid #3d3d3d;">
                <strong>editor.js</strong>
              </div>
              <textarea
                v-model="code"
                style="flex: 1; padding: 16px; background: #1e1e1e; color: #d4d4d4; border: none; font-family: 'Courier New', monospace; resize: none; outline: none;"
              />
            </div>
          </template>
          <template #rightSlot>
            <div style="height: 100%; display: flex; flex-direction: column;">
              <div style="padding: 12px; background: #2d2d2d; color: white; border-bottom: 1px solid #3d3d3d;">
                <strong>미리보기</strong>
              </div>
              <div style="flex: 1; padding: 16px; background: #252525; color: #d4d4d4; overflow: auto;">
                <pre style="margin: 0; font-family: 'Courier New', monospace; line-height: 1.6;">{{ code }}</pre>
              </div>
            </div>
          </template>
        </ElementSplitPanes>
      </div>
    `})},W={render:()=>({components:{ElementSplitPanes:C},setup(){const p=[{name:"index.html",type:"file"},{name:"style.css",type:"file"},{name:"script.js",type:"file"},{name:"assets/",type:"folder"},{name:"components/",type:"folder"}],f=b("index.html");return{files:p,selectedFile:f}},template:`
      <div style="height: 500px; border: 1px solid #ddd; border-radius: 4px;">
        <ElementSplitPanes :leftSize="30">
          <template #leftSlot>
            <div style="height: 100%; background: #f5f5f5; border-right: 1px solid #ddd;">
              <div style="padding: 12px; background: #e0e0e0; font-weight: bold; border-bottom: 1px solid #ccc;">
                파일 탐색기
              </div>
              <div style="padding: 8px;">
                <div
                  v-for="file in files"
                  :key="file.name"
                  @click="selectedFile = file.name"
                  :style="{
                    padding: '8px 12px',
                    cursor: 'pointer',
                    borderRadius: '4px',
                    background: selectedFile === file.name ? '#1976d2' : 'transparent',
                    color: selectedFile === file.name ? 'white' : '#333',
                    marginBottom: '4px'
                  }"
                >
                  {{ file.type === 'folder' ? '📁' : '📄' }} {{ file.name }}
                </div>
              </div>
            </div>
          </template>
          <template #rightSlot>
            <div style="height: 100%; background: white;">
              <div style="padding: 12px; background: #f5f5f5; font-weight: bold; border-bottom: 1px solid #ddd;">
                {{ selectedFile }}
              </div>
              <div style="padding: 20px;">
                <p style="margin: 0; color: #666;">
                  "{{ selectedFile }}" 파일의 내용이 여기에 표시됩니다.
                </p>
              </div>
            </div>
          </template>
        </ElementSplitPanes>
      </div>
    `})},I={render:()=>({components:{ElementSplitPanes:C},setup(){const p=[{id:1,from:"홍길동",subject:"회의 일정 안내",time:"10:30 AM",unread:!0},{id:2,from:"김철수",subject:"프로젝트 제안서",time:"09:15 AM",unread:!0},{id:3,from:"이영희",subject:"Re: 문의사항",time:"어제",unread:!1},{id:4,from:"박지민",subject:"월간 보고서",time:"2일 전",unread:!1}],f=b(p[0]);return{emails:p,selectedEmail:f}},template:`
      <div style="height: 600px; border: 1px solid #ddd; border-radius: 4px;">
        <ElementSplitPanes :leftSize="35">
          <template #leftSlot>
            <div style="height: 100%; background: #fafafa; display: flex; flex-direction: column;">
              <div style="padding: 16px; background: white; border-bottom: 1px solid #ddd;">
                <h3 style="margin: 0;">받은 편지함</h3>
              </div>
              <div style="flex: 1; overflow: auto;">
                <div
                  v-for="email in emails"
                  :key="email.id"
                  @click="selectedEmail = email"
                  :style="{
                    padding: '16px',
                    borderBottom: '1px solid #e0e0e0',
                    cursor: 'pointer',
                    background: selectedEmail.id === email.id ? '#e3f2fd' : email.unread ? 'white' : '#f5f5f5'
                  }"
                >
                  <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                    <strong :style="{ fontWeight: email.unread ? 'bold' : 'normal' }">
                      {{ email.from }}
                    </strong>
                    <span style="font-size: 12px; color: #666;">{{ email.time }}</span>
                  </div>
                  <p :style="{
                    margin: 0,
                    fontSize: '14px',
                    color: '#666',
                    fontWeight: email.unread ? 'bold' : 'normal'
                  }">
                    {{ email.subject }}
                  </p>
                </div>
              </div>
            </div>
          </template>
          <template #rightSlot>
            <div style="height: 100%; background: white; display: flex; flex-direction: column;">
              <div style="padding: 20px; border-bottom: 1px solid #ddd;">
                <h2 style="margin: 0 0 8px 0;">{{ selectedEmail.subject }}</h2>
                <div style="display: flex; align-items: center; gap: 8px; color: #666;">
                  <span style="font-weight: bold;">{{ selectedEmail.from }}</span>
                  <span>•</span>
                  <span>{{ selectedEmail.time }}</span>
                </div>
              </div>
              <div style="flex: 1; padding: 20px; overflow: auto;">
                <p style="margin: 0; line-height: 1.6;">
                  이메일 내용이 여기에 표시됩니다. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </template>
        </ElementSplitPanes>
      </div>
    `})},$={render:()=>({components:{ElementSplitPanes:C},template:`
      <div style="height: 600px; border: 1px solid #ddd; border-radius: 4px;">
        <ElementSplitPanes :leftSize="25">
          <template #leftSlot>
            <div style="height: 100%; background: #2c3e50; color: white; padding: 20px;">
              <h3 style="margin: 0 0 20px 0;">대시보드</h3>
              <nav style="display: flex; flex-direction: column; gap: 12px;">
                <a href="#" style="color: white; text-decoration: none; padding: 10px; background: rgba(255,255,255,0.1); border-radius: 4px;">📊 개요</a>
                <a href="#" style="color: white; text-decoration: none; padding: 10px; background: transparent; border-radius: 4px;">📈 통계</a>
                <a href="#" style="color: white; text-decoration: none; padding: 10px; background: transparent; border-radius: 4px;">👥 사용자</a>
                <a href="#" style="color: white; text-decoration: none; padding: 10px; background: transparent; border-radius: 4px;">⚙️ 설정</a>
              </nav>
            </div>
          </template>
          <template #rightSlot>
            <div style="height: 100%; padding: 24px; background: #f5f5f5; overflow: auto;">
              <h2 style="margin: 0 0 20px 0;">개요</h2>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-bottom: 24px;">
                <div style="padding: 20px; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                  <p style="margin: 0 0 8px 0; color: #666;">총 방문자</p>
                  <p style="margin: 0; font-size: 32px; font-weight: bold; color: #1976d2;">1,234</p>
                </div>
                <div style="padding: 20px; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                  <p style="margin: 0 0 8px 0; color: #666;">매출</p>
                  <p style="margin: 0; font-size: 32px; font-weight: bold; color: #4caf50;">₩542만</p>
                </div>
                <div style="padding: 20px; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                  <p style="margin: 0 0 8px 0; color: #666;">주문</p>
                  <p style="margin: 0; font-size: 32px; font-weight: bold; color: #ff9800;">342</p>
                </div>
              </div>
              <div style="padding: 20px; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <h3 style="margin: 0 0 16px 0;">최근 활동</h3>
                <div v-for="i in 8" :key="i" style="padding: 12px; border-bottom: 1px solid #eee;">
                  <p style="margin: 0;">활동 항목 {{ i }}</p>
                </div>
              </div>
            </div>
          </template>
        </ElementSplitPanes>
      </div>
    `})},q={render:()=>({components:{ElementSplitPanes:C},template:`
      <div style="height: 500px; border: 1px solid #ddd; border-radius: 4px;">
        <ElementSplitPanes :leftSize="50">
          <template #leftSlot>
            <div style="height: 100%; display: flex; flex-direction: column;">
              <div style="padding: 12px; background: #e3f2fd; border-bottom: 1px solid #90caf9;">
                <strong>버전 1 (이전)</strong>
              </div>
              <div style="flex: 1; padding: 16px; background: #f5f5f5; overflow: auto; font-family: 'Courier New', monospace;">
                <pre style="margin: 0;">function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price;
  }
  return total;
}</pre>
              </div>
            </div>
          </template>
          <template #rightSlot>
            <div style="height: 100%; display: flex; flex-direction: column;">
              <div style="padding: 12px; background: #e8f5e9; border-bottom: 1px solid #81c784;">
                <strong>버전 2 (최신)</strong>
              </div>
              <div style="flex: 1; padding: 16px; background: #f5f5f5; overflow: auto; font-family: 'Courier New', monospace;">
                <pre style="margin: 0;">function calculateTotal(items) {
  return items.reduce((total, item) => {
    return total + item.price;
  }, 0);
}</pre>
              </div>
            </div>
          </template>
        </ElementSplitPanes>
      </div>
    `})},V={render:()=>({components:{ElementSplitPanes:C},setup(){const p=b({left:50,right:50});return{sizes:p,handleResize:c=>{p.value={left:c[0].size.toFixed(1),right:c[1].size.toFixed(1)}}}},template:`
      <div>
        <div style="margin-bottom: 12px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <p style="margin: 0;"><strong>크기:</strong> 왼쪽 {{ sizes.left }}% / 오른쪽 {{ sizes.right }}%</p>
        </div>
        <div style="height: 400px; border: 1px solid #ddd; border-radius: 4px;">
          <ElementSplitPanes @resize="handleResize">
            <template #leftSlot>
              <div style="padding: 20px; height: 100%; background: #e3f2fd;">
                <h3 style="margin: 0 0 12px 0;">왼쪽 패널</h3>
                <p style="margin: 0;">크기: {{ sizes.left }}%</p>
              </div>
            </template>
            <template #rightSlot>
              <div style="padding: 20px; height: 100%; background: #f3e5f5;">
                <h3 style="margin: 0 0 12px 0;">오른쪽 패널</h3>
                <p style="margin: 0;">크기: {{ sizes.right }}%</p>
              </div>
            </template>
          </ElementSplitPanes>
        </div>
      </div>
    `})};var oe,re,se;L.parameters={...L.parameters,docs:{...(oe=L.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    horizontal: false,
    leftSize: 50
  },
  render: args => ({
    components: {
      ElementSplitPanes
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="height: 400px; border: 1px solid #ddd; border-radius: 4px;">
        <ElementSplitPanes
          :horizontal="args.horizontal"
          :leftSize="args.leftSize"
        >
          <template #leftSlot>
            <div style="padding: 20px; height: 100%; background: #e3f2fd;">
              <h3 style="margin: 0 0 12px 0;">왼쪽 패널</h3>
              <p style="margin: 0;">
                크기를 조절할 수 있습니다. 가운데 구분선을 드래그하세요.
              </p>
            </div>
          </template>
          <template #rightSlot>
            <div style="padding: 20px; height: 100%; background: #f3e5f5;">
              <h3 style="margin: 0 0 12px 0;">오른쪽 패널</h3>
              <p style="margin: 0;">
                패널 크기가 유지됩니다.
              </p>
            </div>
          </template>
        </ElementSplitPanes>
      </div>
    \`
  })
}`,...(se=(re=L.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var de,pe,ue;O.parameters={...O.parameters,docs:{...(de=O.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    horizontal: true,
    leftSize: 40
  },
  render: args => ({
    components: {
      ElementSplitPanes
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="height: 500px; border: 1px solid #ddd; border-radius: 4px;">
        <ElementSplitPanes
          :horizontal="args.horizontal"
          :leftSize="args.leftSize"
        >
          <template #leftSlot>
            <div style="padding: 20px; height: 100%; background: #fff3e0;">
              <h3 style="margin: 0 0 12px 0;">상단 패널</h3>
              <p style="margin: 0;">수평 분할 레이아웃입니다.</p>
            </div>
          </template>
          <template #rightSlot>
            <div style="padding: 20px; height: 100%; background: #e8f5e9;">
              <h3 style="margin: 0 0 12px 0;">하단 패널</h3>
              <p style="margin: 0;">위아래로 크기를 조절할 수 있습니다.</p>
            </div>
          </template>
        </ElementSplitPanes>
      </div>
    \`
  })
}`,...(ue=(pe=O.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var me,ce,ve;T.parameters={...T.parameters,docs:{...(me=T.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementSplitPanes
    },
    setup() {
      const code = ref(\`function hello() {
  console.log("Hello, World!");
  return true;
}

const result = hello();\`);
      return {
        code
      };
    },
    template: \`
      <div style="height: 500px; border: 1px solid #ddd; border-radius: 4px; background: #1e1e1e;">
        <ElementSplitPanes :leftSize="60">
          <template #leftSlot>
            <div style="height: 100%; display: flex; flex-direction: column;">
              <div style="padding: 12px; background: #2d2d2d; color: white; border-bottom: 1px solid #3d3d3d;">
                <strong>editor.js</strong>
              </div>
              <textarea
                v-model="code"
                style="flex: 1; padding: 16px; background: #1e1e1e; color: #d4d4d4; border: none; font-family: 'Courier New', monospace; resize: none; outline: none;"
              />
            </div>
          </template>
          <template #rightSlot>
            <div style="height: 100%; display: flex; flex-direction: column;">
              <div style="padding: 12px; background: #2d2d2d; color: white; border-bottom: 1px solid #3d3d3d;">
                <strong>미리보기</strong>
              </div>
              <div style="flex: 1; padding: 16px; background: #252525; color: #d4d4d4; overflow: auto;">
                <pre style="margin: 0; font-family: 'Courier New', monospace; line-height: 1.6;">{{ code }}</pre>
              </div>
            </div>
          </template>
        </ElementSplitPanes>
      </div>
    \`
  })
}`,...(ve=(ce=T.parameters)==null?void 0:ce.docs)==null?void 0:ve.source}}};var fe,ge,xe;W.parameters={...W.parameters,docs:{...(fe=W.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementSplitPanes
    },
    setup() {
      const files = [{
        name: 'index.html',
        type: 'file'
      }, {
        name: 'style.css',
        type: 'file'
      }, {
        name: 'script.js',
        type: 'file'
      }, {
        name: 'assets/',
        type: 'folder'
      }, {
        name: 'components/',
        type: 'folder'
      }];
      const selectedFile = ref('index.html');
      return {
        files,
        selectedFile
      };
    },
    template: \`
      <div style="height: 500px; border: 1px solid #ddd; border-radius: 4px;">
        <ElementSplitPanes :leftSize="30">
          <template #leftSlot>
            <div style="height: 100%; background: #f5f5f5; border-right: 1px solid #ddd;">
              <div style="padding: 12px; background: #e0e0e0; font-weight: bold; border-bottom: 1px solid #ccc;">
                파일 탐색기
              </div>
              <div style="padding: 8px;">
                <div
                  v-for="file in files"
                  :key="file.name"
                  @click="selectedFile = file.name"
                  :style="{
                    padding: '8px 12px',
                    cursor: 'pointer',
                    borderRadius: '4px',
                    background: selectedFile === file.name ? '#1976d2' : 'transparent',
                    color: selectedFile === file.name ? 'white' : '#333',
                    marginBottom: '4px'
                  }"
                >
                  {{ file.type === 'folder' ? '📁' : '📄' }} {{ file.name }}
                </div>
              </div>
            </div>
          </template>
          <template #rightSlot>
            <div style="height: 100%; background: white;">
              <div style="padding: 12px; background: #f5f5f5; font-weight: bold; border-bottom: 1px solid #ddd;">
                {{ selectedFile }}
              </div>
              <div style="padding: 20px;">
                <p style="margin: 0; color: #666;">
                  "{{ selectedFile }}" 파일의 내용이 여기에 표시됩니다.
                </p>
              </div>
            </div>
          </template>
        </ElementSplitPanes>
      </div>
    \`
  })
}`,...(xe=(ge=W.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};var he,ye,be;I.parameters={...I.parameters,docs:{...(he=I.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementSplitPanes
    },
    setup() {
      const emails = [{
        id: 1,
        from: '홍길동',
        subject: '회의 일정 안내',
        time: '10:30 AM',
        unread: true
      }, {
        id: 2,
        from: '김철수',
        subject: '프로젝트 제안서',
        time: '09:15 AM',
        unread: true
      }, {
        id: 3,
        from: '이영희',
        subject: 'Re: 문의사항',
        time: '어제',
        unread: false
      }, {
        id: 4,
        from: '박지민',
        subject: '월간 보고서',
        time: '2일 전',
        unread: false
      }];
      const selectedEmail = ref(emails[0]);
      return {
        emails,
        selectedEmail
      };
    },
    template: \`
      <div style="height: 600px; border: 1px solid #ddd; border-radius: 4px;">
        <ElementSplitPanes :leftSize="35">
          <template #leftSlot>
            <div style="height: 100%; background: #fafafa; display: flex; flex-direction: column;">
              <div style="padding: 16px; background: white; border-bottom: 1px solid #ddd;">
                <h3 style="margin: 0;">받은 편지함</h3>
              </div>
              <div style="flex: 1; overflow: auto;">
                <div
                  v-for="email in emails"
                  :key="email.id"
                  @click="selectedEmail = email"
                  :style="{
                    padding: '16px',
                    borderBottom: '1px solid #e0e0e0',
                    cursor: 'pointer',
                    background: selectedEmail.id === email.id ? '#e3f2fd' : email.unread ? 'white' : '#f5f5f5'
                  }"
                >
                  <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                    <strong :style="{ fontWeight: email.unread ? 'bold' : 'normal' }">
                      {{ email.from }}
                    </strong>
                    <span style="font-size: 12px; color: #666;">{{ email.time }}</span>
                  </div>
                  <p :style="{
                    margin: 0,
                    fontSize: '14px',
                    color: '#666',
                    fontWeight: email.unread ? 'bold' : 'normal'
                  }">
                    {{ email.subject }}
                  </p>
                </div>
              </div>
            </div>
          </template>
          <template #rightSlot>
            <div style="height: 100%; background: white; display: flex; flex-direction: column;">
              <div style="padding: 20px; border-bottom: 1px solid #ddd;">
                <h2 style="margin: 0 0 8px 0;">{{ selectedEmail.subject }}</h2>
                <div style="display: flex; align-items: center; gap: 8px; color: #666;">
                  <span style="font-weight: bold;">{{ selectedEmail.from }}</span>
                  <span>•</span>
                  <span>{{ selectedEmail.time }}</span>
                </div>
              </div>
              <div style="flex: 1; padding: 20px; overflow: auto;">
                <p style="margin: 0; line-height: 1.6;">
                  이메일 내용이 여기에 표시됩니다. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </template>
        </ElementSplitPanes>
      </div>
    \`
  })
}`,...(be=(ye=I.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};var Ce,ze,Se;$.parameters={...$.parameters,docs:{...(Ce=$.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementSplitPanes
    },
    template: \`
      <div style="height: 600px; border: 1px solid #ddd; border-radius: 4px;">
        <ElementSplitPanes :leftSize="25">
          <template #leftSlot>
            <div style="height: 100%; background: #2c3e50; color: white; padding: 20px;">
              <h3 style="margin: 0 0 20px 0;">대시보드</h3>
              <nav style="display: flex; flex-direction: column; gap: 12px;">
                <a href="#" style="color: white; text-decoration: none; padding: 10px; background: rgba(255,255,255,0.1); border-radius: 4px;">📊 개요</a>
                <a href="#" style="color: white; text-decoration: none; padding: 10px; background: transparent; border-radius: 4px;">📈 통계</a>
                <a href="#" style="color: white; text-decoration: none; padding: 10px; background: transparent; border-radius: 4px;">👥 사용자</a>
                <a href="#" style="color: white; text-decoration: none; padding: 10px; background: transparent; border-radius: 4px;">⚙️ 설정</a>
              </nav>
            </div>
          </template>
          <template #rightSlot>
            <div style="height: 100%; padding: 24px; background: #f5f5f5; overflow: auto;">
              <h2 style="margin: 0 0 20px 0;">개요</h2>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-bottom: 24px;">
                <div style="padding: 20px; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                  <p style="margin: 0 0 8px 0; color: #666;">총 방문자</p>
                  <p style="margin: 0; font-size: 32px; font-weight: bold; color: #1976d2;">1,234</p>
                </div>
                <div style="padding: 20px; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                  <p style="margin: 0 0 8px 0; color: #666;">매출</p>
                  <p style="margin: 0; font-size: 32px; font-weight: bold; color: #4caf50;">₩542만</p>
                </div>
                <div style="padding: 20px; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                  <p style="margin: 0 0 8px 0; color: #666;">주문</p>
                  <p style="margin: 0; font-size: 32px; font-weight: bold; color: #ff9800;">342</p>
                </div>
              </div>
              <div style="padding: 20px; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <h3 style="margin: 0 0 16px 0;">최근 활동</h3>
                <div v-for="i in 8" :key="i" style="padding: 12px; border-bottom: 1px solid #eee;">
                  <p style="margin: 0;">활동 항목 {{ i }}</p>
                </div>
              </div>
            </div>
          </template>
        </ElementSplitPanes>
      </div>
    \`
  })
}`,...(Se=(ze=$.parameters)==null?void 0:ze.docs)==null?void 0:Se.source}}};var Ee,we,ke;q.parameters={...q.parameters,docs:{...(Ee=q.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementSplitPanes
    },
    template: \`
      <div style="height: 500px; border: 1px solid #ddd; border-radius: 4px;">
        <ElementSplitPanes :leftSize="50">
          <template #leftSlot>
            <div style="height: 100%; display: flex; flex-direction: column;">
              <div style="padding: 12px; background: #e3f2fd; border-bottom: 1px solid #90caf9;">
                <strong>버전 1 (이전)</strong>
              </div>
              <div style="flex: 1; padding: 16px; background: #f5f5f5; overflow: auto; font-family: 'Courier New', monospace;">
                <pre style="margin: 0;">function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price;
  }
  return total;
}</pre>
              </div>
            </div>
          </template>
          <template #rightSlot>
            <div style="height: 100%; display: flex; flex-direction: column;">
              <div style="padding: 12px; background: #e8f5e9; border-bottom: 1px solid #81c784;">
                <strong>버전 2 (최신)</strong>
              </div>
              <div style="flex: 1; padding: 16px; background: #f5f5f5; overflow: auto; font-family: 'Courier New', monospace;">
                <pre style="margin: 0;">function calculateTotal(items) {
  return items.reduce((total, item) => {
    return total + item.price;
  }, 0);
}</pre>
              </div>
            </div>
          </template>
        </ElementSplitPanes>
      </div>
    \`
  })
}`,...(ke=(we=q.parameters)==null?void 0:we.docs)==null?void 0:ke.source}}};var Pe,Be,De;V.parameters={...V.parameters,docs:{...(Pe=V.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementSplitPanes
    },
    setup() {
      const sizes = ref({
        left: 50,
        right: 50
      });
      const handleResize = panes => {
        sizes.value = {
          left: panes[0].size.toFixed(1),
          right: panes[1].size.toFixed(1)
        };
      };
      return {
        sizes,
        handleResize
      };
    },
    template: \`
      <div>
        <div style="margin-bottom: 12px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <p style="margin: 0;"><strong>크기:</strong> 왼쪽 {{ sizes.left }}% / 오른쪽 {{ sizes.right }}%</p>
        </div>
        <div style="height: 400px; border: 1px solid #ddd; border-radius: 4px;">
          <ElementSplitPanes @resize="handleResize">
            <template #leftSlot>
              <div style="padding: 20px; height: 100%; background: #e3f2fd;">
                <h3 style="margin: 0 0 12px 0;">왼쪽 패널</h3>
                <p style="margin: 0;">크기: {{ sizes.left }}%</p>
              </div>
            </template>
            <template #rightSlot>
              <div style="padding: 20px; height: 100%; background: #f3e5f5;">
                <h3 style="margin: 0 0 12px 0;">오른쪽 패널</h3>
                <p style="margin: 0;">크기: {{ sizes.right }}%</p>
              </div>
            </template>
          </ElementSplitPanes>
        </div>
      </div>
    \`
  })
}`,...(De=(Be=V.parameters)==null?void 0:Be.docs)==null?void 0:De.source}}};const rt=["Default","Horizontal","CodeEditor","FileExplorer","EmailClient","DashboardLayout","ComparisonView","WithResizeEvent"];export{T as CodeEditor,q as ComparisonView,$ as DashboardLayout,L as Default,I as EmailClient,W as FileExplorer,O as Horizontal,V as WithResizeEvent,rt as __namedExportsOrder,ot as default};
