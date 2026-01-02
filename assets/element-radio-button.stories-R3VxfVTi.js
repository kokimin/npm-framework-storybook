import{a as oe,c as h,F as ae,C as le,o as B,n as ie,A as se,m as a}from"./vue.esm-bundler-C23JohzN.js";const re={class:"multi-btn"},de=["onClick"],o={__name:"element-radio-button",props:{modelValue:{type:[String,Number],default:""},options:{type:Array,default(){return[]}}},emits:["update:modelValue","click"],setup(e,{emit:n}){const l=e,t=n,i=oe({get(){return l.modelValue},set(s){return t("update:modelValue",s)}}),y=s=>{t("click",s.value),i.value=s.value};return(s,ue)=>(B(),h("div",re,[(B(!0),h(ae,null,le(e.options,(f,te)=>(B(),h("button",{key:te,class:ie([{"on-active":f.value===i.value},"btn-item"]),onClick:pe=>y(f)},se(f.label),11,de))),128))]))}};o.__docgenInfo={exportName:"default",displayName:"element-radio-button",description:"",tags:{},props:[{name:"modelValue",type:{name:"string|number"},defaultValue:{func:!1,value:"''"}},{name:"options",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],events:[{name:"update:modelValue"},{name:"click"}],sourceFiles:["/Users/kokimin/WorkSpace/npm-framework/src/components/form/ElementRadioButton/element-radio-button.vue"]};const me={title:"Form/ElementRadioButton",component:o,tags:["autodocs"],argTypes:{modelValue:{control:"text",description:"선택된 값"},options:{control:"object",description:"버튼 옵션 배열 [{ label, value }]"}}},r={args:{modelValue:"",options:[{label:"옵션 1",value:"option1"},{label:"옵션 2",value:"option2"},{label:"옵션 3",value:"option3"}]},render:e=>({components:{ElementRadioButton:o},setup(){const n=a(e.modelValue);return{args:e,selected:n}},template:`
      <div>
        <ElementRadioButton
          v-model="selected"
          :options="args.options"
        />
        <p style="margin-top: 12px; color: #666;">
          선택된 값: {{ selected || '없음' }}
        </p>
      </div>
    `})},d={args:{modelValue:"option2",options:[{label:"옵션 1",value:"option1"},{label:"옵션 2",value:"option2"},{label:"옵션 3",value:"option3"}]},render:e=>({components:{ElementRadioButton:o},setup(){const n=a(e.modelValue);return{args:e,selected:n}},template:`
      <div>
        <ElementRadioButton
          v-model="selected"
          :options="args.options"
        />
        <p style="margin-top: 12px; color: #666;">
          선택된 값: {{ selected }}
        </p>
      </div>
    `})},u={render:()=>({components:{ElementRadioButton:o},setup(){return{selected:a("on"),options:[{label:"ON",value:"on"},{label:"OFF",value:"off"}]}},template:`
      <div>
        <ElementRadioButton
          v-model="selected"
          :options="options"
        />
        <div style="margin-top: 16px; padding: 16px; border-radius: 4px;" :style="{ background: selected === 'on' ? '#e8f5e9' : '#ffebee' }">
          <p style="margin: 0; font-weight: bold;" :style="{ color: selected === 'on' ? '#2e7d32' : '#c62828' }">
            상태: {{ selected === 'on' ? '활성화됨' : '비활성화됨' }}
          </p>
        </div>
      </div>
    `})},p={render:()=>({components:{ElementRadioButton:o},setup(){return{viewMode:a("grid"),options:[{label:"그리드",value:"grid"},{label:"리스트",value:"list"},{label:"타임라인",value:"timeline"}]}},template:`
      <div>
        <div style="margin-bottom: 16px;">
          <label style="display: block; margin-bottom: 8px; font-weight: bold;">뷰 모드 선택</label>
          <ElementRadioButton
            v-model="viewMode"
            :options="options"
          />
        </div>

        <div style="padding: 20px; border: 1px solid #ddd; border-radius: 4px; background: #f5f5f5;">
          <p style="margin: 0 0 12px 0; font-weight: bold;">미리보기</p>
          <div v-if="viewMode === 'grid'" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px;">
            <div v-for="i in 6" :key="i" style="padding: 20px; background: white; border-radius: 4px; text-align: center;">
              Item {{ i }}
            </div>
          </div>
          <div v-else-if="viewMode === 'list'" style="display: flex; flex-direction: column; gap: 8px;">
            <div v-for="i in 4" :key="i" style="padding: 12px; background: white; border-radius: 4px;">
              Item {{ i }}
            </div>
          </div>
          <div v-else style="display: flex; flex-direction: column; gap: 12px;">
            <div v-for="i in 3" :key="i" style="display: flex; gap: 12px; align-items: center;">
              <div style="width: 40px; height: 40px; border-radius: 50%; background: #1976d2;"></div>
              <div style="flex: 1; padding: 12px; background: white; border-radius: 4px;">
                Timeline Item {{ i }}
              </div>
            </div>
          </div>
        </div>
      </div>
    `})},c={render:()=>({components:{ElementRadioButton:o},setup(){return{size:a("M"),options:[{label:"XS",value:"XS"},{label:"S",value:"S"},{label:"M",value:"M"},{label:"L",value:"L"},{label:"XL",value:"XL"}]}},template:`
      <div style="max-width: 400px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h3 style="margin: 0 0 16px 0;">사이즈 선택</h3>

        <ElementRadioButton
          v-model="size"
          :options="options"
        />

        <div style="margin-top: 16px; padding: 16px; background: #f5f5f5; border-radius: 4px;">
          <p style="margin: 0 0 8px 0; font-weight: bold;">선택된 사이즈: {{ size }}</p>
          <div style="padding: 12px; background: white; border-radius: 4px;">
            <p style="margin: 0; font-size: 13px;">
              {{ size === 'XS' ? '가슴둘레: 80cm' : '' }}
              {{ size === 'S' ? '가슴둘레: 85cm' : '' }}
              {{ size === 'M' ? '가슴둘레: 90cm' : '' }}
              {{ size === 'L' ? '가슴둘레: 95cm' : '' }}
              {{ size === 'XL' ? '가슴둘레: 100cm' : '' }}
            </p>
          </div>
        </div>
      </div>
    `})},m={render:()=>({components:{ElementRadioButton:o},setup(){const e=a("week");return{period:e,options:[{label:"오늘",value:"today"},{label:"이번 주",value:"week"},{label:"이번 달",value:"month"},{label:"올해",value:"year"}],getDateRange:()=>{const t=new Date;switch(e.value){case"today":return t.toLocaleDateString("ko-KR");case"week":const i=new Date(t.setDate(t.getDate()-t.getDay())),y=new Date(t.setDate(t.getDate()-t.getDay()+6));return`${i.toLocaleDateString("ko-KR")} ~ ${y.toLocaleDateString("ko-KR")}`;case"month":return`${t.getFullYear()}년 \${now.getMonth() + 1}월`;case"year":return`${t.getFullYear()}년`;default:return""}}}},template:`
          <div>
          <h4 style="margin: 0 0 12px 0;">기간 선택</h4>
            <ElementRadioButton
              v-model="period"
          :options="options"
            />
            <p style="margin-top: 12px; color: #666;">
            선택된 기간: {{ getDateRange() }}
          </p>
          </div>
            `})},g={render:()=>({components:{ElementRadioButton:o},setup(){return{plan:a("pro"),options:[{label:"Basic",value:"basic"},{label:"Pro",value:"pro"},{label:"Enterprise",value:"enterprise"}],planDetails:{basic:{price:9e3,users:5,storage:"10GB"},pro:{price:29e3,users:20,storage:"100GB"},enterprise:{price:99e3,users:"무제한",storage:"1TB"}}}},template:`
            <div style="max-width: 500px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h3 style="margin: 0 0 16px 0;">요금제 선택</h3>

            <ElementRadioButton
              v-model="plan"
          :options="options"
            />

            <div style="margin-top: 20px; padding: 20px; background: #f5f5f5; border-radius: 8px;">
            <h4 style="margin: 0 0 16px 0; color: #1976d2;">{{ plan.toUpperCase() }} 플랜</h4>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <p style="margin: 0;">💰 <strong>가격:</strong> {{ planDetails[plan].price.toLocaleString() }}원/월</p>
          <p style="margin: 0;">👥 <strong>사용자:</strong> {{ planDetails[plan].users }}명</p>
          <p style="margin: 0;">💾 <strong>스토리지:</strong> {{ planDetails[plan].storage }}</p>
        </div>
        <button
          style="width: 100%; margin-top: 16px; padding: 12px; background: #1976d2; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;"
        >
          {{ plan.toUpperCase() }} 플랜 선택
        </button>
      </div>
      </div>
        `})},v={render:()=>({components:{ElementRadioButton:o},setup(){return{chartType:a("bar"),options:[{label:"막대",value:"bar"},{label:"선",value:"line"},{label:"원",value:"pie"}],data:[30,50,20]}},template:`
        <div>
        <h4 style="margin: 0 0 12px 0;">차트 유형</h4>
        <ElementRadioButton
          v-model="chartType"
          :options="options"
          />

          <div style="margin-top: 20px; padding: 20px; border: 1px solid #ddd; border-radius: 4px; background: #f5f5f5;">
          <p style="margin: 0 0 12px 0; font-weight: bold;">미리보기</p>

        <div v-if="chartType === 'bar'" style="display: flex; align-items: flex-end; gap: 12px; height: 150px;">
          <div v-for="(value, i) in data" :key="i"
          :style="{ flex: 1, height: value + '%', background: '#1976d2', borderRadius: '4px 4px 0 0' }"
          ></div>
      </div>

        <div v-else-if="chartType === 'line'" style="height: 150px; position: relative; background: white; border-radius: 4px;">
          <svg width="100%" height="100%" style="position: absolute;">
            <polyline
            :points="\`0,\${150-data[0]*1.5} 50%,\${150-data[1]*1.5} 100%,\${150-data[2]*1.5}\`"
            fill="none"
            stroke="#1976d2"
            stroke-width="3"
            />
          </svg>
        </div>

        <div v-else style="display: flex; justify-content: center; align-items: center; height: 150px;">
          <svg width="120" height="120">
            <circle cx="60" cy="60" r="50" fill="#1976d2" />
            <circle cx="60" cy="60" r="50" fill="#4caf50" :stroke-dasharray="\`\${data[1]*3.14} 314\`" stroke-dashoffset="0" transform="rotate(-90 60 60)" />
            <circle cx="60" cy="60" r="50" fill="#ff9800" :stroke-dasharray="\`\${data[2]*3.14} 314\`" :stroke-dashoffset="\`-\${data[1]*3.14}\`" transform="rotate(-90 60 60)" />
          </svg>
        </div>
      </div>
      </div>
        `})},b={render:()=>({components:{ElementRadioButton:o},setup(){return{language:a("ko"),options:[{label:"한국어",value:"ko"},{label:"English",value:"en"},{label:"日本語",value:"ja"},{label:"中文",value:"zh"}],messages:{ko:"안녕하세요! 한국어를 선택하셨습니다.",en:"Hello! You have selected English.",ja:"こんにちは！日本語を選択しました。",zh:"你好！您选择了中文。"}}},template:`
        <div style="max-width: 500px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h3 style="margin: 0 0 16px 0;">언어 선택</h3>

        <ElementRadioButton
          v-model="language"
          :options="options"
          />

          <div style="margin-top: 16px; padding: 16px; background: #e3f2fd; border-radius: 4px;">
          <p style="margin: 0; color: #1565c0;">
          {{ messages[language] }}
      </p>
      </div>
      </div>
        `})},x={render:()=>({components:{ElementRadioButton:o},setup(){const e=a("1"),n=Array.from({length:10},(l,t)=>({label:`옵션 ${t+1}`,value:String(t+1)}));return{selected:e,options:n}},template:`
        <div>
        <h4 style="margin: 0 0 12px 0;">많은 버튼 (10개)</h4>
        <ElementRadioButton
          v-model="selected"
          :options="options"
          />
          <p style="margin-top: 12px; color: #666;">
          선택된 값: 옵션 {{ selected }}
      </p>
      </div>
        `})},C={render:()=>({components:{ElementRadioButton:o},setup(){const e=a(""),n=a(0);return{selected:e,clickCount:n,options:[{label:"버튼 1",value:"btn1"},{label:"버튼 2",value:"btn2"},{label:"버튼 3",value:"btn3"}],handleClick:i=>{n.value++,alert(`Clicked:${i}`)}}},template:`
        <div>
          <ElementRadioButton
            v-model="selected"
            :options="options"
            @click="handleClick"
          />
            <div style="margin-top: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
              <p style="margin: 0 0 4px 0;"><strong>선택된 값:</strong> {{ selected || '없음' }}</p>
            <p style="margin: 0;"><strong>클릭 횟수:</strong> {{ clickCount }}</p>
          </div>
        </div>
        `})};var D,k,w;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    options: [{
      label: '옵션 1',
      value: 'option1'
    }, {
      label: '옵션 2',
      value: 'option2'
    }, {
      label: '옵션 3',
      value: 'option3'
    }]
  },
  render: args => ({
    components: {
      ElementRadioButton
    },
    setup() {
      const selected = ref(args.modelValue);
      return {
        args,
        selected
      };
    },
    template: \`
      <div>
        <ElementRadioButton
          v-model="selected"
          :options="args.options"
        />
        <p style="margin-top: 12px; color: #666;">
          선택된 값: {{ selected || '없음' }}
        </p>
      </div>
    \`
  })
}`,...(w=(k=r.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var E,R,A;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    modelValue: 'option2',
    options: [{
      label: '옵션 1',
      value: 'option1'
    }, {
      label: '옵션 2',
      value: 'option2'
    }, {
      label: '옵션 3',
      value: 'option3'
    }]
  },
  render: args => ({
    components: {
      ElementRadioButton
    },
    setup() {
      const selected = ref(args.modelValue);
      return {
        args,
        selected
      };
    },
    template: \`
      <div>
        <ElementRadioButton
          v-model="selected"
          :options="args.options"
        />
        <p style="margin-top: 12px; color: #666;">
          선택된 값: {{ selected }}
        </p>
      </div>
    \`
  })
}`,...(A=(R=d.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var S,F,z;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementRadioButton
    },
    setup() {
      const selected = ref('on');
      const options = [{
        label: 'ON',
        value: 'on'
      }, {
        label: 'OFF',
        value: 'off'
      }];
      return {
        selected,
        options
      };
    },
    template: \`
      <div>
        <ElementRadioButton
          v-model="selected"
          :options="options"
        />
        <div style="margin-top: 16px; padding: 16px; border-radius: 4px;" :style="{ background: selected === 'on' ? '#e8f5e9' : '#ffebee' }">
          <p style="margin: 0; font-weight: bold;" :style="{ color: selected === 'on' ? '#2e7d32' : '#c62828' }">
            상태: {{ selected === 'on' ? '활성화됨' : '비활성화됨' }}
          </p>
        </div>
      </div>
    \`
  })
}`,...(z=(F=u.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};var $,M,L;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementRadioButton
    },
    setup() {
      const viewMode = ref('grid');
      const options = [{
        label: '그리드',
        value: 'grid'
      }, {
        label: '리스트',
        value: 'list'
      }, {
        label: '타임라인',
        value: 'timeline'
      }];
      return {
        viewMode,
        options
      };
    },
    template: \`
      <div>
        <div style="margin-bottom: 16px;">
          <label style="display: block; margin-bottom: 8px; font-weight: bold;">뷰 모드 선택</label>
          <ElementRadioButton
            v-model="viewMode"
            :options="options"
          />
        </div>

        <div style="padding: 20px; border: 1px solid #ddd; border-radius: 4px; background: #f5f5f5;">
          <p style="margin: 0 0 12px 0; font-weight: bold;">미리보기</p>
          <div v-if="viewMode === 'grid'" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px;">
            <div v-for="i in 6" :key="i" style="padding: 20px; background: white; border-radius: 4px; text-align: center;">
              Item {{ i }}
            </div>
          </div>
          <div v-else-if="viewMode === 'list'" style="display: flex; flex-direction: column; gap: 8px;">
            <div v-for="i in 4" :key="i" style="padding: 12px; background: white; border-radius: 4px;">
              Item {{ i }}
            </div>
          </div>
          <div v-else style="display: flex; flex-direction: column; gap: 12px;">
            <div v-for="i in 3" :key="i" style="display: flex; gap: 12px; align-items: center;">
              <div style="width: 40px; height: 40px; border-radius: 50%; background: #1976d2;"></div>
              <div style="flex: 1; padding: 12px; background: white; border-radius: 4px;">
                Timeline Item {{ i }}
              </div>
            </div>
          </div>
        </div>
      </div>
    \`
  })
}`,...(L=(M=p.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var V,T,_;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementRadioButton
    },
    setup() {
      const size = ref('M');
      const options = [{
        label: 'XS',
        value: 'XS'
      }, {
        label: 'S',
        value: 'S'
      }, {
        label: 'M',
        value: 'M'
      }, {
        label: 'L',
        value: 'L'
      }, {
        label: 'XL',
        value: 'XL'
      }];
      return {
        size,
        options
      };
    },
    template: \`
      <div style="max-width: 400px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h3 style="margin: 0 0 16px 0;">사이즈 선택</h3>

        <ElementRadioButton
          v-model="size"
          :options="options"
        />

        <div style="margin-top: 16px; padding: 16px; background: #f5f5f5; border-radius: 4px;">
          <p style="margin: 0 0 8px 0; font-weight: bold;">선택된 사이즈: {{ size }}</p>
          <div style="padding: 12px; background: white; border-radius: 4px;">
            <p style="margin: 0; font-size: 13px;">
              {{ size === 'XS' ? '가슴둘레: 80cm' : '' }}
              {{ size === 'S' ? '가슴둘레: 85cm' : '' }}
              {{ size === 'M' ? '가슴둘레: 90cm' : '' }}
              {{ size === 'L' ? '가슴둘레: 95cm' : '' }}
              {{ size === 'XL' ? '가슴둘레: 100cm' : '' }}
            </p>
          </div>
        </div>
      </div>
    \`
  })
}`,...(_=(T=c.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var X,I,O;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementRadioButton
    },
    setup() {
      const period = ref('week');
      const options = [{
        label: '오늘',
        value: 'today'
      }, {
        label: '이번 주',
        value: 'week'
      }, {
        label: '이번 달',
        value: 'month'
      }, {
        label: '올해',
        value: 'year'
      }];
      const getDateRange = () => {
        const now = new Date();
        switch (period.value) {
          case 'today':
            return now.toLocaleDateString('ko-KR');
          case 'week':
            const weekStart = new Date(now.setDate(now.getDate() - now.getDay()));
            const weekEnd = new Date(now.setDate(now.getDate() - now.getDay() + 6));
            return \`\${weekStart.toLocaleDateString('ko-KR')} ~ \${weekEnd.toLocaleDateString('ko-KR')}\`;
          case 'month':
            return \`\${now.getFullYear()}년 \\\${now.getMonth() + 1}월\`;
          case 'year':
            return \`\${now.getFullYear()}년\`;
          default:
            return '';
        }
      };
      return {
        period,
        options,
        getDateRange
      };
    },
    template: \`
          <div>
          <h4 style="margin: 0 0 12px 0;">기간 선택</h4>
            <ElementRadioButton
              v-model="period"
          :options="options"
            />
            <p style="margin-top: 12px; color: #666;">
            선택된 기간: {{ getDateRange() }}
          </p>
          </div>
            \`
  })
}`,...(O=(I=m.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var j,K,P;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementRadioButton
    },
    setup() {
      const plan = ref('pro');
      const options = [{
        label: 'Basic',
        value: 'basic'
      }, {
        label: 'Pro',
        value: 'pro'
      }, {
        label: 'Enterprise',
        value: 'enterprise'
      }];
      const planDetails = {
        basic: {
          price: 9000,
          users: 5,
          storage: '10GB'
        },
        pro: {
          price: 29000,
          users: 20,
          storage: '100GB'
        },
        enterprise: {
          price: 99000,
          users: '무제한',
          storage: '1TB'
        }
      };
      return {
        plan,
        options,
        planDetails
      };
    },
    template: \`
            <div style="max-width: 500px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h3 style="margin: 0 0 16px 0;">요금제 선택</h3>

            <ElementRadioButton
              v-model="plan"
          :options="options"
            />

            <div style="margin-top: 20px; padding: 20px; background: #f5f5f5; border-radius: 8px;">
            <h4 style="margin: 0 0 16px 0; color: #1976d2;">{{ plan.toUpperCase() }} 플랜</h4>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <p style="margin: 0;">💰 <strong>가격:</strong> {{ planDetails[plan].price.toLocaleString() }}원/월</p>
          <p style="margin: 0;">👥 <strong>사용자:</strong> {{ planDetails[plan].users }}명</p>
          <p style="margin: 0;">💾 <strong>스토리지:</strong> {{ planDetails[plan].storage }}</p>
        </div>
        <button
          style="width: 100%; margin-top: 16px; padding: 12px; background: #1976d2; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;"
        >
          {{ plan.toUpperCase() }} 플랜 선택
        </button>
      </div>
      </div>
        \`
  })
}`,...(P=(K=g.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var Y,N,U;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementRadioButton
    },
    setup() {
      const chartType = ref('bar');
      const options = [{
        label: '막대',
        value: 'bar'
      }, {
        label: '선',
        value: 'line'
      }, {
        label: '원',
        value: 'pie'
      }];
      const data = [30, 50, 20];
      return {
        chartType,
        options,
        data
      };
    },
    template: \`
        <div>
        <h4 style="margin: 0 0 12px 0;">차트 유형</h4>
        <ElementRadioButton
          v-model="chartType"
          :options="options"
          />

          <div style="margin-top: 20px; padding: 20px; border: 1px solid #ddd; border-radius: 4px; background: #f5f5f5;">
          <p style="margin: 0 0 12px 0; font-weight: bold;">미리보기</p>

        <div v-if="chartType === 'bar'" style="display: flex; align-items: flex-end; gap: 12px; height: 150px;">
          <div v-for="(value, i) in data" :key="i"
          :style="{ flex: 1, height: value + '%', background: '#1976d2', borderRadius: '4px 4px 0 0' }"
          ></div>
      </div>

        <div v-else-if="chartType === 'line'" style="height: 150px; position: relative; background: white; border-radius: 4px;">
          <svg width="100%" height="100%" style="position: absolute;">
            <polyline
            :points="\\\`0,\\\${150-data[0]*1.5} 50%,\\\${150-data[1]*1.5} 100%,\\\${150-data[2]*1.5}\\\`"
            fill="none"
            stroke="#1976d2"
            stroke-width="3"
            />
          </svg>
        </div>

        <div v-else style="display: flex; justify-content: center; align-items: center; height: 150px;">
          <svg width="120" height="120">
            <circle cx="60" cy="60" r="50" fill="#1976d2" />
            <circle cx="60" cy="60" r="50" fill="#4caf50" :stroke-dasharray="\\\`\\\${data[1]*3.14} 314\\\`" stroke-dashoffset="0" transform="rotate(-90 60 60)" />
            <circle cx="60" cy="60" r="50" fill="#ff9800" :stroke-dasharray="\\\`\\\${data[2]*3.14} 314\\\`" :stroke-dashoffset="\\\`-\\\${data[1]*3.14}\\\`" transform="rotate(-90 60 60)" />
          </svg>
        </div>
      </div>
      </div>
        \`
  })
}`,...(U=(N=v.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var W,G,H;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementRadioButton
    },
    setup() {
      const language = ref('ko');
      const options = [{
        label: '한국어',
        value: 'ko'
      }, {
        label: 'English',
        value: 'en'
      }, {
        label: '日本語',
        value: 'ja'
      }, {
        label: '中文',
        value: 'zh'
      }];
      const messages = {
        ko: '안녕하세요! 한국어를 선택하셨습니다.',
        en: 'Hello! You have selected English.',
        ja: 'こんにちは！日本語を選択しました。',
        zh: '你好！您选择了中文。'
      };
      return {
        language,
        options,
        messages
      };
    },
    template: \`
        <div style="max-width: 500px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h3 style="margin: 0 0 16px 0;">언어 선택</h3>

        <ElementRadioButton
          v-model="language"
          :options="options"
          />

          <div style="margin-top: 16px; padding: 16px; background: #e3f2fd; border-radius: 4px;">
          <p style="margin: 0; color: #1565c0;">
          {{ messages[language] }}
      </p>
      </div>
      </div>
        \`
  })
}`,...(H=(G=b.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var q,J,Q;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementRadioButton
    },
    setup() {
      const selected = ref('1');
      const options = Array.from({
        length: 10
      }, (_, i) => ({
        label: \`옵션 \${i + 1}\`,
        value: String(i + 1)
      }));
      return {
        selected,
        options
      };
    },
    template: \`
        <div>
        <h4 style="margin: 0 0 12px 0;">많은 버튼 (10개)</h4>
        <ElementRadioButton
          v-model="selected"
          :options="options"
          />
          <p style="margin-top: 12px; color: #666;">
          선택된 값: 옵션 {{ selected }}
      </p>
      </div>
        \`
  })
}`,...(Q=(J=x.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Z,ee,ne;C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementRadioButton
    },
    setup() {
      const selected = ref('');
      const clickCount = ref(0);
      const options = [{
        label: '버튼 1',
        value: 'btn1'
      }, {
        label: '버튼 2',
        value: 'btn2'
      }, {
        label: '버튼 3',
        value: 'btn3'
      }];
      const handleClick = value => {
        clickCount.value++;
        alert(\`Clicked:\${value}\`);
      };
      return {
        selected,
        clickCount,
        options,
        handleClick
      };
    },
    template: \`
        <div>
          <ElementRadioButton
            v-model="selected"
            :options="options"
            @click="handleClick"
          />
            <div style="margin-top: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
              <p style="margin: 0 0 4px 0;"><strong>선택된 값:</strong> {{ selected || '없음' }}</p>
            <p style="margin: 0;"><strong>클릭 횟수:</strong> {{ clickCount }}</p>
          </div>
        </div>
        \`
  })
}`,...(ne=(ee=C.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};const ge=["Default","WithInitialValue","TwoOptions","ViewMode","SizeOptions","TimeFilter","PricingPlan","ChartType","LanguageSelector","ManyButtons","WithClickEvent"];export{v as ChartType,r as Default,b as LanguageSelector,x as ManyButtons,g as PricingPlan,c as SizeOptions,m as TimeFilter,u as TwoOptions,p as ViewMode,C as WithClickEvent,d as WithInitialValue,ge as __namedExportsOrder,me as default};
