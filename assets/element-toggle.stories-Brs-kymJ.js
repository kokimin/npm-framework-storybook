import{d as fe,m as o,a as w,c as O,L as xe,o as T,x as Ce,y as ve,O as A,A as ye,M as z,R as S,s as be,u as he}from"./vue.esm-bundler-C23JohzN.js";(function(){try{if(typeof document<"u"){var n=document.createElement("style");n.appendChild(document.createTextNode(".vue-toggles{--toggle-transition-duration: .2s;--toggle-transition-timing: ease;display:flex;align-items:center;border-radius:9999px;overflow:hidden;transition:background-color var(--toggle-transition-duration) var(--toggle-transition-timing),width var(--toggle-transition-duration) var(--toggle-transition-timing),height var(--toggle-transition-duration) var(--toggle-transition-timing)}.vue-toggles__dot{position:relative;display:flex;align-items:center;border-radius:9999px;box-shadow:0 1px 3px #0000001a,0 1px 2px #0000000f;transition:margin ease .2s}.vue-toggles__text{position:absolute;font-family:inherit;-webkit-user-select:none;user-select:none;white-space:nowrap}@media(prefers-reduced-motion){.vue-toggles,.vue-toggles *,.vue-toggles *:before,.vue-toggles *:after{animation:none!important;transition:none!important;transition-duration:none!important}}")),document.head.appendChild(n)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();const ke=["aria-checked","aria-readonly","onKeyup"],Be=8,r=5,p=3,we=fe({__name:"VueToggles",props:{modelValue:{type:Boolean,default:void 0},value:{type:Boolean,default:void 0},disabled:{type:Boolean},reverse:{type:Boolean},width:{default:75},height:{default:25},dotColor:{default:"#ffffff"},dotSize:{default:0},uncheckedBg:{default:"#939393"},checkedBg:{default:"#5850ec"},uncheckedTextColor:{default:"#ffffff"},checkedTextColor:{default:"#ffffff"},uncheckedText:{default:""},checkedText:{default:""},fontSize:{default:12},fontWeight:{default:"normal"}},emits:["update:modelValue","click"],setup(n,{emit:t}){const e=n,d=t,i=o(e.value||e.modelValue),E=w(()=>({width:`${e.width}px`,height:`${e.height}px`,background:i.value?e.checkedBg:e.uncheckedBg,opacity:e.disabled?"0.5":"1",cursor:e.disabled?"not-allowed":"pointer"})),u=w(()=>{const l=e.dotSize||e.height-Be,a={background:e.dotColor,width:`${l}px`,height:`${l}px`,"min-width":`${l}px`,"min-height":`${l}px`,"margin-left":i.value?`${e.width-l-r}px`:`${r}px`};return i.value?e.reverse?a["margin-left"]=`${r}px`:a["margin-left"]=`${e.width-l-r}px`:e.reverse?a["margin-left"]=`${e.width-l-r}px`:a["margin-left"]=`${r}px`,a}),F=w(()=>{const l={"font-weight":e.fontWeight,"font-size":`${e.fontSize}px`,color:i.value&&!e.disabled?e.checkedTextColor:e.uncheckedTextColor,right:i.value?`${e.height-p}px`:"auto",left:i.value?"auto":`${e.height-p}px`};return i.value?e.reverse?(l.left=`${e.height-p}px`,l.right="auto"):(l.right=`${e.height-p}px`,l.left="auto"):e.reverse?(l.right=`${e.height-p}px`,l.left="auto"):(l.left=`${e.height-p}px`,l.right="auto"),l}),D=()=>{e.disabled||(i.value=!i.value,d("update:modelValue",i.value),d("click"))};return xe(()=>{e.value!==void 0&&e.modelValue!==void 0&&console.warn('Avoid using both "v-model" and ":value" at the same time. Choose one for better predictability.'),i.value=e.value||e.modelValue}),(l,a)=>(T(),O("span",{class:"vue-toggles",style:A(E.value),role:"switch",tabindex:"0","aria-checked":i.value,"aria-readonly":n.disabled,"test-id":"toggle",onKeyup:[z(S(D,["prevent"]),["enter"]),z(S(D,["prevent"]),["space"])],onClick:D},[Ce("span",{"aria-hidden":"true",style:A(u.value),class:"vue-toggles__dot","test-id":"dot"},[n.checkedText||n.uncheckedText?(T(),O("span",{key:0,class:"vue-toggles__text",style:A(F.value),"test-id":"text"},ye(i.value?n.checkedText:n.uncheckedText),5)):ve("",!0)],4)],44,ke))}}),s={__name:"element-toggle",props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue","click"],setup(n,{emit:t}){const e=n,d=t,i=w({get(){return e.modelValue},set(u){return d("update:modelValue",u)}}),E=()=>{i.value=!i.value};return(u,F)=>(T(),be(he(we),{value:i.value,height:"22",width:"40",checkedBg:"#9983FF",uncheckedBg:"#d5dbe3",onClick:E},null,8,["value"]))}};s.__docgenInfo={exportName:"default",displayName:"element-toggle",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"click"}],sourceFiles:["/Users/kokimin/WorkSpace/npm-framework/src/components/form/ElementToggle/element-toggle.vue"]};const De={title:"Form/ElementToggle",component:s,tags:["autodocs"],argTypes:{modelValue:{control:"boolean",description:"토글 상태"}}},g={args:{modelValue:!1},render:n=>({components:{ElementToggle:s},setup(){const t=o(n.modelValue);return{args:n,checked:t}},template:`
      <div>
        <ElementToggle v-model="checked" />
        <p style="margin-top: 12px; color: #666;">
          상태: {{ checked ? 'ON' : 'OFF' }}
        </p>
      </div>
    `})},c={args:{modelValue:!0},render:n=>({components:{ElementToggle:s},setup(){const t=o(n.modelValue);return{args:n,checked:t}},template:`
      <div>
        <ElementToggle v-model="checked" />
        <p style="margin-top: 12px; color: #666;">
          상태: {{ checked ? 'ON' : 'OFF' }}
        </p>
      </div>
    `})},m={args:{modelValue:!1},render:n=>({components:{ElementToggle:s},setup(){const t=o(n.modelValue);return{args:n,checked:t}},template:`
      <div>
        <ElementToggle v-model="checked" />
        <p style="margin-top: 12px; color: #666;">
          상태: {{ checked ? 'ON' : 'OFF' }}
        </p>
      </div>
    `})},f={render:()=>({components:{ElementToggle:s},setup(){return{enabled:o(!1)}},template:`
      <div style="display: flex; align-items: center; gap: 12px;">
        <ElementToggle v-model="enabled" />
        <label style="font-weight: bold; cursor: pointer;" @click="enabled = !enabled">
          알림 받기
        </label>
      </div>
    `})},x={render:()=>({components:{ElementToggle:s},setup(){return{settings:o({notifications:!0,darkMode:!1,autoSave:!0,soundEffects:!1})}},template:`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px; border: 1px solid #ddd; border-radius: 4px;">
          <label style="font-weight: bold;">알림</label>
          <ElementToggle v-model="settings.notifications" />
        </div>

        <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px; border: 1px solid #ddd; border-radius: 4px;">
          <label style="font-weight: bold;">다크 모드</label>
          <ElementToggle v-model="settings.darkMode" />
        </div>

        <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px; border: 1px solid #ddd; border-radius: 4px;">
          <label style="font-weight: bold;">자동 저장</label>
          <ElementToggle v-model="settings.autoSave" />
        </div>

        <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px; border: 1px solid #ddd; border-radius: 4px;">
          <label style="font-weight: bold;">효과음</label>
          <ElementToggle v-model="settings.soundEffects" />
        </div>

        <div style="margin-top: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <p style="margin: 0 0 8px 0; font-weight: bold;">현재 설정:</p>
          <p style="margin: 4px 0; font-size: 13px;">알림: {{ settings.notifications ? 'ON' : 'OFF' }}</p>
          <p style="margin: 4px 0; font-size: 13px;">다크 모드: {{ settings.darkMode ? 'ON' : 'OFF' }}</p>
          <p style="margin: 4px 0; font-size: 13px;">자동 저장: {{ settings.autoSave ? 'ON' : 'OFF' }}</p>
          <p style="margin: 4px 0; font-size: 13px;">효과음: {{ settings.soundEffects ? 'ON' : 'OFF' }}</p>
        </div>
      </div>
    `})},C={render:()=>({components:{ElementToggle:s},setup(){return{notifications:o({email:!0,push:!1,sms:!1})}},template:`
      <div style="max-width: 500px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h3 style="margin: 0 0 16px 0;">알림 설정</h3>

        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div style="display: flex; align-items: center; justify-content: space-between; padding: 16px; background: #f5f5f5; border-radius: 4px;">
            <div>
              <p style="margin: 0 0 4px 0; font-weight: bold;">이메일 알림</p>
              <p style="margin: 0; font-size: 13px; color: #666;">중요한 업데이트를 이메일로 받습니다</p>
            </div>
            <ElementToggle v-model="notifications.email" />
          </div>

          <div style="display: flex; align-items: center; justify-content: space-between; padding: 16px; background: #f5f5f5; border-radius: 4px;">
            <div>
              <p style="margin: 0 0 4px 0; font-weight: bold;">푸시 알림</p>
              <p style="margin: 0; font-size: 13px; color: #666;">실시간 알림을 받습니다</p>
            </div>
            <ElementToggle v-model="notifications.push" />
          </div>

          <div style="display: flex; align-items: center; justify-content: space-between; padding: 16px; background: #f5f5f5; border-radius: 4px;">
            <div>
              <p style="margin: 0 0 4px 0; font-weight: bold;">SMS 알림</p>
              <p style="margin: 0; font-size: 13px; color: #666;">문자 메시지로 알림을 받습니다</p>
            </div>
            <ElementToggle v-model="notifications.sms" />
          </div>
        </div>
      </div>
    `})},v={render:()=>({components:{ElementToggle:s},setup(){return{privacy:o({profilePublic:!1,showEmail:!1,allowMessages:!0})}},template:`
      <div style="max-width: 500px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h3 style="margin: 0 0 16px 0;">개인정보 설정</h3>

        <div style="display: flex; flex-direction: column; gap: 12px;">
          <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px;">
            <label style="font-weight: bold;">프로필 공개</label>
            <ElementToggle v-model="privacy.profilePublic" />
          </div>

          <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px;">
            <label style="font-weight: bold;">이메일 주소 공개</label>
            <ElementToggle v-model="privacy.showEmail" />
          </div>

          <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px;">
            <label style="font-weight: bold;">메시지 수신 허용</label>
            <ElementToggle v-model="privacy.allowMessages" />
          </div>
        </div>

        <div style="margin-top: 16px; padding: 16px; background: #fff3e0; border-radius: 4px;">
          <p style="margin: 0; color: #e65100; font-size: 13px;">
            ⚠️ 개인정보 설정을 변경하면 다른 사용자에게 보이는 정보가 달라집니다.
          </p>
        </div>
      </div>
    `})},y={render:()=>({components:{ElementToggle:s},setup(){return{features:o({beta:!1,experimental:!1})}},template:`
      <div style="max-width: 500px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h3 style="margin: 0 0 16px 0;">실험적 기능</h3>

        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div style="padding: 16px; border: 1px solid #ddd; border-radius: 4px;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
              <label style="font-weight: bold;">베타 기능</label>
              <ElementToggle v-model="features.beta" />
            </div>
            <p style="margin: 0; font-size: 13px; color: #666;">
              새로운 기능을 먼저 사용해볼 수 있습니다.
            </p>
            <div v-if="features.beta" style="margin-top: 12px; padding: 8px; background: #e3f2fd; border-radius: 4px;">
              <p style="margin: 0; font-size: 13px; color: #1565c0;">
                ✓ 베타 기능이 활성화되었습니다
              </p>
            </div>
          </div>

          <div style="padding: 16px; border: 1px solid #ddd; border-radius: 4px;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
              <label style="font-weight: bold;">실험적 기능</label>
              <ElementToggle v-model="features.experimental" />
            </div>
            <p style="margin: 0; font-size: 13px; color: #666;">
              아직 개발 중인 기능을 사용할 수 있습니다. 불안정할 수 있습니다.
            </p>
            <div v-if="features.experimental" style="margin-top: 12px; padding: 8px; background: #ffebee; border-radius: 4px;">
              <p style="margin: 0; font-size: 13px; color: #c62828;">
                ⚠️ 실험적 기능은 예기치 않은 오류가 발생할 수 있습니다
              </p>
            </div>
          </div>
        </div>
      </div>
    `})},b={render:()=>({components:{ElementToggle:s},setup(){return{permissions:o({read:!0,write:!1,delete:!1,admin:!1}),permissionLabels:{read:"읽기",write:"쓰기",delete:"삭제",admin:"관리자"}}},template:`
      <div style="max-width: 500px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h3 style="margin: 0 0 16px 0;">권한 설정</h3>

        <div style="display: flex; flex-direction: column; gap: 12px;">
          <div
            v-for="(value, key) in permissions"
            :key="key"
            style="display: flex; align-items: center; justify-content: space-between; padding: 12px; background: #f5f5f5; border-radius: 4px;"
          >
            <label style="font-weight: bold;">{{ permissionLabels[key] }} 권한</label>
            <ElementToggle v-model="permissions[key]" />
          </div>
        </div>

        <div style="margin-top: 16px; padding: 16px; background: #e8f5e9; border-radius: 4px;">
          <p style="margin: 0 0 8px 0; font-weight: bold; color: #2e7d32;">활성화된 권한:</p>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            <span
              v-for="(value, key) in permissions"
              :key="key"
              v-if="value"
              style="padding: 4px 12px; background: #4caf50; color: white; border-radius: 16px; font-size: 13px;"
            >
              {{ permissionLabels[key] }}
            </span>
          </div>
          <p v-if="Object.values(permissions).every(v => !v)" style="margin: 8px 0 0 0; color: #666; font-size: 13px;">
            활성화된 권한이 없습니다
          </p>
        </div>
      </div>
    `})},h={render:()=>({components:{ElementToggle:s},setup(){const n=o(!1),t=o(0);return{enabled:n,clickCount:t,handleClick:()=>{t.value++,console.log("Toggle clicked:",n.value)}}},template:`
      <div>
        <ElementToggle v-model="enabled" @click="handleClick" />
        <div style="margin-top: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <p style="margin: 0 0 4px 0;"><strong>상태:</strong> {{ enabled ? 'ON' : 'OFF' }}</p>
          <p style="margin: 0;"><strong>클릭 횟수:</strong> {{ clickCount }}</p>
        </div>
      </div>
    `})},k={render:()=>({components:{ElementToggle:s},setup(){return{showDetails:o(!1)}},template:`
      <div style="max-width: 500px;">
        <div style="display: flex; align-items: center; gap: 12px; padding: 16px; border: 1px solid #ddd; border-radius: 4px;">
          <ElementToggle v-model="showDetails" />
          <label style="font-weight: bold;">상세 정보 표시</label>
        </div>

        <transition name="fade">
          <div v-if="showDetails" style="margin-top: 16px; padding: 16px; background: #e3f2fd; border-radius: 4px;">
            <h4 style="margin: 0 0 12px 0;">상세 정보</h4>
            <p style="margin: 0 0 8px 0;">이것은 토글을 켰을 때만 보이는 콘텐츠입니다.</p>
            <ul style="margin: 0; padding-left: 20px;">
              <li>항목 1</li>
              <li>항목 2</li>
              <li>항목 3</li>
            </ul>
          </div>
        </transition>
      </div>
    `})},B={render:()=>({components:{ElementToggle:s},setup(){const n=o([{id:1,title:"프로젝트 기획서 작성",completed:!0},{id:2,title:"디자인 시안 검토",completed:!1},{id:3,title:"개발 환경 설정",completed:!0},{id:4,title:"테스트 코드 작성",completed:!1},{id:5,title:"배포 준비",completed:!1}]),t=()=>n.value.filter(d=>d.completed).length;return{tasks:n,completedCount:t,progress:()=>Math.round(t()/n.value.length*100)}},template:`
      <div style="max-width: 500px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h3 style="margin: 0 0 16px 0;">할 일 목록</h3>

        <div style="margin-bottom: 16px;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <span style="font-weight: bold;">진행률</span>
            <span style="font-weight: bold;">{{ completedCount() }} / {{ tasks.length }}</span>
          </div>
          <div style="width: 100%; height: 8px; background: #e0e0e0; border-radius: 4px; overflow: hidden;">
            <div :style="{ width: progress() + '%', height: '100%', background: '#4caf50', transition: 'width 0.3s' }"></div>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 8px;">
          <div
            v-for="task in tasks"
            :key="task.id"
            style="display: flex; align-items: center; gap: 12px; padding: 12px; background: #f5f5f5; border-radius: 4px;"
          >
            <ElementToggle v-model="task.completed" />
            <span :style="{ textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? '#999' : '#000' }">
              {{ task.title }}
            </span>
          </div>
        </div>

        <div v-if="completedCount() === tasks.length" style="margin-top: 16px; padding: 12px; background: #e8f5e9; border-radius: 4px; text-align: center;">
          <p style="margin: 0; color: #2e7d32; font-weight: bold;">
            🎉 모든 작업을 완료했습니다!
          </p>
        </div>
      </div>
    `})};var j,V,N;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    modelValue: false
  },
  render: args => ({
    components: {
      ElementToggle
    },
    setup() {
      const checked = ref(args.modelValue);
      return {
        args,
        checked
      };
    },
    template: \`
      <div>
        <ElementToggle v-model="checked" />
        <p style="margin-top: 12px; color: #666;">
          상태: {{ checked ? 'ON' : 'OFF' }}
        </p>
      </div>
    \`
  })
}`,...(N=(V=g.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var _,$,M;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    modelValue: true
  },
  render: args => ({
    components: {
      ElementToggle
    },
    setup() {
      const checked = ref(args.modelValue);
      return {
        args,
        checked
      };
    },
    template: \`
      <div>
        <ElementToggle v-model="checked" />
        <p style="margin-top: 12px; color: #666;">
          상태: {{ checked ? 'ON' : 'OFF' }}
        </p>
      </div>
    \`
  })
}`,...(M=($=c.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};var L,W,P;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    modelValue: false
  },
  render: args => ({
    components: {
      ElementToggle
    },
    setup() {
      const checked = ref(args.modelValue);
      return {
        args,
        checked
      };
    },
    template: \`
      <div>
        <ElementToggle v-model="checked" />
        <p style="margin-top: 12px; color: #666;">
          상태: {{ checked ? 'ON' : 'OFF' }}
        </p>
      </div>
    \`
  })
}`,...(P=(W=m.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var K,H,I;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementToggle
    },
    setup() {
      const enabled = ref(false);
      return {
        enabled
      };
    },
    template: \`
      <div style="display: flex; align-items: center; gap: 12px;">
        <ElementToggle v-model="enabled" />
        <label style="font-weight: bold; cursor: pointer;" @click="enabled = !enabled">
          알림 받기
        </label>
      </div>
    \`
  })
}`,...(I=(H=f.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var R,U,q;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementToggle
    },
    setup() {
      const settings = ref({
        notifications: true,
        darkMode: false,
        autoSave: true,
        soundEffects: false
      });
      return {
        settings
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px; border: 1px solid #ddd; border-radius: 4px;">
          <label style="font-weight: bold;">알림</label>
          <ElementToggle v-model="settings.notifications" />
        </div>

        <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px; border: 1px solid #ddd; border-radius: 4px;">
          <label style="font-weight: bold;">다크 모드</label>
          <ElementToggle v-model="settings.darkMode" />
        </div>

        <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px; border: 1px solid #ddd; border-radius: 4px;">
          <label style="font-weight: bold;">자동 저장</label>
          <ElementToggle v-model="settings.autoSave" />
        </div>

        <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px; border: 1px solid #ddd; border-radius: 4px;">
          <label style="font-weight: bold;">효과음</label>
          <ElementToggle v-model="settings.soundEffects" />
        </div>

        <div style="margin-top: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <p style="margin: 0 0 8px 0; font-weight: bold;">현재 설정:</p>
          <p style="margin: 4px 0; font-size: 13px;">알림: {{ settings.notifications ? 'ON' : 'OFF' }}</p>
          <p style="margin: 4px 0; font-size: 13px;">다크 모드: {{ settings.darkMode ? 'ON' : 'OFF' }}</p>
          <p style="margin: 4px 0; font-size: 13px;">자동 저장: {{ settings.autoSave ? 'ON' : 'OFF' }}</p>
          <p style="margin: 4px 0; font-size: 13px;">효과음: {{ settings.soundEffects ? 'ON' : 'OFF' }}</p>
        </div>
      </div>
    \`
  })
}`,...(q=(U=x.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var G,J,Q;C.parameters={...C.parameters,docs:{...(G=C.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementToggle
    },
    setup() {
      const notifications = ref({
        email: true,
        push: false,
        sms: false
      });
      return {
        notifications
      };
    },
    template: \`
      <div style="max-width: 500px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h3 style="margin: 0 0 16px 0;">알림 설정</h3>

        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div style="display: flex; align-items: center; justify-content: space-between; padding: 16px; background: #f5f5f5; border-radius: 4px;">
            <div>
              <p style="margin: 0 0 4px 0; font-weight: bold;">이메일 알림</p>
              <p style="margin: 0; font-size: 13px; color: #666;">중요한 업데이트를 이메일로 받습니다</p>
            </div>
            <ElementToggle v-model="notifications.email" />
          </div>

          <div style="display: flex; align-items: center; justify-content: space-between; padding: 16px; background: #f5f5f5; border-radius: 4px;">
            <div>
              <p style="margin: 0 0 4px 0; font-weight: bold;">푸시 알림</p>
              <p style="margin: 0; font-size: 13px; color: #666;">실시간 알림을 받습니다</p>
            </div>
            <ElementToggle v-model="notifications.push" />
          </div>

          <div style="display: flex; align-items: center; justify-content: space-between; padding: 16px; background: #f5f5f5; border-radius: 4px;">
            <div>
              <p style="margin: 0 0 4px 0; font-weight: bold;">SMS 알림</p>
              <p style="margin: 0; font-size: 13px; color: #666;">문자 메시지로 알림을 받습니다</p>
            </div>
            <ElementToggle v-model="notifications.sms" />
          </div>
        </div>
      </div>
    \`
  })
}`,...(Q=(J=C.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementToggle
    },
    setup() {
      const privacy = ref({
        profilePublic: false,
        showEmail: false,
        allowMessages: true
      });
      return {
        privacy
      };
    },
    template: \`
      <div style="max-width: 500px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h3 style="margin: 0 0 16px 0;">개인정보 설정</h3>

        <div style="display: flex; flex-direction: column; gap: 12px;">
          <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px;">
            <label style="font-weight: bold;">프로필 공개</label>
            <ElementToggle v-model="privacy.profilePublic" />
          </div>

          <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px;">
            <label style="font-weight: bold;">이메일 주소 공개</label>
            <ElementToggle v-model="privacy.showEmail" />
          </div>

          <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px;">
            <label style="font-weight: bold;">메시지 수신 허용</label>
            <ElementToggle v-model="privacy.allowMessages" />
          </div>
        </div>

        <div style="margin-top: 16px; padding: 16px; background: #fff3e0; border-radius: 4px;">
          <p style="margin: 0; color: #e65100; font-size: 13px;">
            ⚠️ 개인정보 설정을 변경하면 다른 사용자에게 보이는 정보가 달라집니다.
          </p>
        </div>
      </div>
    \`
  })
}`,...(Z=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,te;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementToggle
    },
    setup() {
      const features = ref({
        beta: false,
        experimental: false
      });
      return {
        features
      };
    },
    template: \`
      <div style="max-width: 500px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h3 style="margin: 0 0 16px 0;">실험적 기능</h3>

        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div style="padding: 16px; border: 1px solid #ddd; border-radius: 4px;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
              <label style="font-weight: bold;">베타 기능</label>
              <ElementToggle v-model="features.beta" />
            </div>
            <p style="margin: 0; font-size: 13px; color: #666;">
              새로운 기능을 먼저 사용해볼 수 있습니다.
            </p>
            <div v-if="features.beta" style="margin-top: 12px; padding: 8px; background: #e3f2fd; border-radius: 4px;">
              <p style="margin: 0; font-size: 13px; color: #1565c0;">
                ✓ 베타 기능이 활성화되었습니다
              </p>
            </div>
          </div>

          <div style="padding: 16px; border: 1px solid #ddd; border-radius: 4px;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
              <label style="font-weight: bold;">실험적 기능</label>
              <ElementToggle v-model="features.experimental" />
            </div>
            <p style="margin: 0; font-size: 13px; color: #666;">
              아직 개발 중인 기능을 사용할 수 있습니다. 불안정할 수 있습니다.
            </p>
            <div v-if="features.experimental" style="margin-top: 12px; padding: 8px; background: #ffebee; border-radius: 4px;">
              <p style="margin: 0; font-size: 13px; color: #c62828;">
                ⚠️ 실험적 기능은 예기치 않은 오류가 발생할 수 있습니다
              </p>
            </div>
          </div>
        </div>
      </div>
    \`
  })
}`,...(te=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var le,ie,oe;b.parameters={...b.parameters,docs:{...(le=b.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementToggle
    },
    setup() {
      const permissions = ref({
        read: true,
        write: false,
        delete: false,
        admin: false
      });
      const permissionLabels = {
        read: '읽기',
        write: '쓰기',
        delete: '삭제',
        admin: '관리자'
      };
      return {
        permissions,
        permissionLabels
      };
    },
    template: \`
      <div style="max-width: 500px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h3 style="margin: 0 0 16px 0;">권한 설정</h3>

        <div style="display: flex; flex-direction: column; gap: 12px;">
          <div
            v-for="(value, key) in permissions"
            :key="key"
            style="display: flex; align-items: center; justify-content: space-between; padding: 12px; background: #f5f5f5; border-radius: 4px;"
          >
            <label style="font-weight: bold;">{{ permissionLabels[key] }} 권한</label>
            <ElementToggle v-model="permissions[key]" />
          </div>
        </div>

        <div style="margin-top: 16px; padding: 16px; background: #e8f5e9; border-radius: 4px;">
          <p style="margin: 0 0 8px 0; font-weight: bold; color: #2e7d32;">활성화된 권한:</p>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            <span
              v-for="(value, key) in permissions"
              :key="key"
              v-if="value"
              style="padding: 4px 12px; background: #4caf50; color: white; border-radius: 16px; font-size: 13px;"
            >
              {{ permissionLabels[key] }}
            </span>
          </div>
          <p v-if="Object.values(permissions).every(v => !v)" style="margin: 8px 0 0 0; color: #666; font-size: 13px;">
            활성화된 권한이 없습니다
          </p>
        </div>
      </div>
    \`
  })
}`,...(oe=(ie=b.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var se,de,ae;h.parameters={...h.parameters,docs:{...(se=h.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementToggle
    },
    setup() {
      const enabled = ref(false);
      const clickCount = ref(0);
      const handleClick = () => {
        clickCount.value++;
        console.log('Toggle clicked:', enabled.value);
      };
      return {
        enabled,
        clickCount,
        handleClick
      };
    },
    template: \`
      <div>
        <ElementToggle v-model="enabled" @click="handleClick" />
        <div style="margin-top: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <p style="margin: 0 0 4px 0;"><strong>상태:</strong> {{ enabled ? 'ON' : 'OFF' }}</p>
          <p style="margin: 0;"><strong>클릭 횟수:</strong> {{ clickCount }}</p>
        </div>
      </div>
    \`
  })
}`,...(ae=(de=h.parameters)==null?void 0:de.docs)==null?void 0:ae.source}}};var re,pe,ue;k.parameters={...k.parameters,docs:{...(re=k.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementToggle
    },
    setup() {
      const showDetails = ref(false);
      return {
        showDetails
      };
    },
    template: \`
      <div style="max-width: 500px;">
        <div style="display: flex; align-items: center; gap: 12px; padding: 16px; border: 1px solid #ddd; border-radius: 4px;">
          <ElementToggle v-model="showDetails" />
          <label style="font-weight: bold;">상세 정보 표시</label>
        </div>

        <transition name="fade">
          <div v-if="showDetails" style="margin-top: 16px; padding: 16px; background: #e3f2fd; border-radius: 4px;">
            <h4 style="margin: 0 0 12px 0;">상세 정보</h4>
            <p style="margin: 0 0 8px 0;">이것은 토글을 켰을 때만 보이는 콘텐츠입니다.</p>
            <ul style="margin: 0; padding-left: 20px;">
              <li>항목 1</li>
              <li>항목 2</li>
              <li>항목 3</li>
            </ul>
          </div>
        </transition>
      </div>
    \`
  })
}`,...(ue=(pe=k.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var ge,ce,me;B.parameters={...B.parameters,docs:{...(ge=B.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementToggle
    },
    setup() {
      const tasks = ref([{
        id: 1,
        title: '프로젝트 기획서 작성',
        completed: true
      }, {
        id: 2,
        title: '디자인 시안 검토',
        completed: false
      }, {
        id: 3,
        title: '개발 환경 설정',
        completed: true
      }, {
        id: 4,
        title: '테스트 코드 작성',
        completed: false
      }, {
        id: 5,
        title: '배포 준비',
        completed: false
      }]);
      const completedCount = () => tasks.value.filter(t => t.completed).length;
      const progress = () => Math.round(completedCount() / tasks.value.length * 100);
      return {
        tasks,
        completedCount,
        progress
      };
    },
    template: \`
      <div style="max-width: 500px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h3 style="margin: 0 0 16px 0;">할 일 목록</h3>

        <div style="margin-bottom: 16px;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <span style="font-weight: bold;">진행률</span>
            <span style="font-weight: bold;">{{ completedCount() }} / {{ tasks.length }}</span>
          </div>
          <div style="width: 100%; height: 8px; background: #e0e0e0; border-radius: 4px; overflow: hidden;">
            <div :style="{ width: progress() + '%', height: '100%', background: '#4caf50', transition: 'width 0.3s' }"></div>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 8px;">
          <div
            v-for="task in tasks"
            :key="task.id"
            style="display: flex; align-items: center; gap: 12px; padding: 12px; background: #f5f5f5; border-radius: 4px;"
          >
            <ElementToggle v-model="task.completed" />
            <span :style="{ textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? '#999' : '#000' }">
              {{ task.title }}
            </span>
          </div>
        </div>

        <div v-if="completedCount() === tasks.length" style="margin-top: 16px; padding: 12px; background: #e8f5e9; border-radius: 4px; text-align: center;">
          <p style="margin: 0; color: #2e7d32; font-weight: bold;">
            🎉 모든 작업을 완료했습니다!
          </p>
        </div>
      </div>
    \`
  })
}`,...(me=(ce=B.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};const Ae=["Default","On","Off","WithLabel","MultipleToggles","NotificationSettings","PrivacySettings","FeatureToggle","AccessControl","WithClickEvent","ConditionalContent","TaskList"];export{b as AccessControl,k as ConditionalContent,g as Default,y as FeatureToggle,x as MultipleToggles,C as NotificationSettings,m as Off,c as On,v as PrivacySettings,B as TaskList,h as WithClickEvent,f as WithLabel,Ae as __namedExportsOrder,De as default};
