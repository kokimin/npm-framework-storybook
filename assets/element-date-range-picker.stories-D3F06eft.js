import{m as r,a as A,f as ie,s as P,v as V,u as p,o as E,x as u,n as pe,B as ue,y as w,z as ge}from"./vue.esm-bundler-C23JohzN.js";import{Z as me,k as ce}from"./ko-CsC63XQn.js";import{F as ye}from"./vee-validate-yFuzOwfJ.js";import{_ as fe}from"./element-button-BG7G4eZx.js";import{_ as Ce}from"./element-tooltip-CVQ3LOPp.js";const t={__name:"element-date-range-picker",props:{modelValue:{type:Array,default(){return[]}},type:{type:String,default:"day"},name:{type:String,default:""},rules:{type:String,default:""},immediate:{type:Boolean,default:!1},isTextInput:{type:Boolean,default:!1},isClear:{type:Boolean,default:!0},autoApply:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},tooltipPlacement:{type:String,default:"top-end"}},emits:["update:modelValue"],setup(e,{emit:a}){const g=e,k=a,n=r(null),s=A({get(){return g.modelValue},set(l){return k("update:modelValue",l)}}),d=A(()=>{switch(g.type){case"day":return{input:"yyyy-MM-dd"};case"month":return{input:"yyyy-MM"};case"year":return{input:"yyyy"};default:return{input:"yyyy-MM-dd"}}});ie(async()=>{g.immediate&&await n.value.validate()});const oe=l=>{if(!l)return;const[o,i]=l;o&&!i&&(s.value=null)},de=()=>{k("update:modelValue","")};return(l,o)=>(E(),P(p(ye),{ref_key:"veeField",ref:n,modelValue:s.value,"onUpdate:modelValue":o[1]||(o[1]=i=>s.value=i),rules:e.rules,type:"text",name:e.name},{default:V(({field:i,errors:h})=>[u("span",{class:pe(["ipt",h.length>0?"iptError":""]),style:{width:"210px"}},[u("input",ge(i,{type:"hidden"}),null,16),ue(p(me),{modelValue:s.value,"onUpdate:modelValue":[o[0]||(o[0]=le=>s.value=le),oe],locale:p(ce),formats:d.value,"auto-apply":e.autoApply,"action-row":{showNow:!0,nowBtnLabel:"Today"},"time-config":{enableTimePicker:e.type!=="day"},range:!0,"multi-calendars":!0,disabled:e.disabled,readonly:e.readonly,textInput:e.isTextInput,"enable-time-picker":e.type!=="day",yearPicker:e.type==="year",quarterPicker:e.type==="quarter",monthPicker:e.type==="month",weekPicker:e.type==="week",timePicker:e.type==="time",inputAttrs:{clearable:!1}},null,8,["modelValue","locale","formats","auto-apply","time-config","disabled","readonly","textInput","enable-time-picker","yearPicker","quarterPicker","monthPicker","weekPicker","timePicker"]),h.length>0?(E(),P(p(Ce),{key:0,msg:h[0],placement:e.tooltipPlacement,offsetSkid:20,offsetDistance:25},{default:V(()=>[...o[2]||(o[2]=[u("span",{class:"error"},[u("span",{class:"hide"},"에러")],-1)])]),_:1},8,["msg","placement"])):w("",!0),e.isClear&&s.value?(E(),P(p(fe),{key:1,className:"btn_del",onClick:de},{default:V(()=>[...o[3]||(o[3]=[u("span",{class:"hide"},"삭제",-1)])]),_:1})):w("",!0)],2)]),_:1},8,["modelValue","rules","name"]))}};t.__docgenInfo={exportName:"default",displayName:"element-date-range-picker",description:"",tags:{},props:[{name:"modelValue",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:"'day'"}},{name:"name",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"rules",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"immediate",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isTextInput",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isClear",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"autoApply",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"tooltipPlacement",type:{name:"string"},defaultValue:{func:!1,value:"'top-end'"}}],events:[{name:"update:modelValue"}],sourceFiles:["/Users/kokimin/WorkSpace/npm-framework/src/components/form/ElementDateRangePicker/element-date-range-picker.vue"]};const ke={title:"Form/ElementDateRangePicker",component:t,tags:["autodocs"],argTypes:{modelValue:{control:"object",description:"날짜 범위 배열 [시작일, 종료일]"},type:{control:"select",options:["day","month","year","quarter","week","time"],description:"날짜 선택 타입"},name:{control:"text",description:"vee-validate 필드 이름"},rules:{control:"text",description:"vee-validate 유효성 검사 규칙"},immediate:{control:"boolean",description:"초기 유효성 검사 실행 여부"},isTextInput:{control:"boolean",description:"텍스트 직접 입력 가능 여부"},isClear:{control:"boolean",description:"초기화 버튼 표시 여부"},autoApply:{control:"boolean",description:"날짜 선택 시 자동 적용"},disabled:{control:"boolean",description:"비활성화 여부"},readonly:{control:"boolean",description:"읽기 전용 여부"},tooltipPlacement:{control:"select",options:["top","bottom","left","right","top-start","top-end","bottom-start","bottom-end"],description:"툴팁 위치"}}},m={args:{modelValue:[],type:"day",name:"daterange-default",rules:"",immediate:!1,isTextInput:!1,isClear:!0,autoApply:!1,disabled:!1,readonly:!1,tooltipPlacement:"top-end"},render:e=>({components:{ElementDateRangePicker:t},setup(){const a=r(e.modelValue);return{args:e,dateRange:a}},template:`
      <div>
        <ElementDateRangePicker
          v-model="dateRange"
          :type="args.type"
          :name="args.name"
          :rules="args.rules"
          :immediate="args.immediate"
          :isTextInput="args.isTextInput"
          :isClear="args.isClear"
          :autoApply="args.autoApply"
          :disabled="args.disabled"
          :readonly="args.readonly"
          :tooltipPlacement="args.tooltipPlacement"
        />
        <div style="margin-top: 12px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <p><strong>선택된 기간:</strong></p>
          <p v-if="dateRange && dateRange.length === 2">
            {{ dateRange[0] }} ~ {{ dateRange[1] }}
          </p>
          <p v-else>없음</p>
        </div>
      </div>
    `})},c={args:{modelValue:["2025-01-01","2025-01-31"],type:"day",name:"daterange-initial",isClear:!0},render:e=>({components:{ElementDateRangePicker:t},setup(){const a=r(e.modelValue);return{args:e,dateRange:a}},template:`
      <div>
        <ElementDateRangePicker
          v-model="dateRange"
          :type="args.type"
          :name="args.name"
          :isClear="args.isClear"
        />
        <div style="margin-top: 12px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <p><strong>선택된 기간:</strong></p>
          <p>{{ dateRange[0] }} ~ {{ dateRange[1] }}</p>
        </div>
      </div>
    `})},y={args:{modelValue:["2025-01","2025-12"],type:"month",name:"daterange-month",isClear:!0},render:e=>({components:{ElementDateRangePicker:t},setup(){const a=r(e.modelValue);return{args:e,dateRange:a}},template:`
      <div>
        <ElementDateRangePicker
          v-model="dateRange"
          :type="args.type"
          :name="args.name"
          :isClear="args.isClear"
        />
        <div style="margin-top: 12px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <p><strong>선택된 월 범위:</strong></p>
          <p v-if="dateRange && dateRange.length === 2">
            {{ dateRange[0] }} ~ {{ dateRange[1] }}
          </p>
          <p v-else>없음</p>
        </div>
      </div>
    `})},f={args:{modelValue:["2020","2025"],type:"year",name:"daterange-year",isClear:!0},render:e=>({components:{ElementDateRangePicker:t},setup(){const a=r(e.modelValue);return{args:e,dateRange:a}},template:`
      <div>
        <ElementDateRangePicker
          v-model="dateRange"
          :type="args.type"
          :name="args.name"
          :isClear="args.isClear"
        />
        <div style="margin-top: 12px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <p><strong>선택된 년도 범위:</strong></p>
          <p v-if="dateRange && dateRange.length === 2">
            {{ dateRange[0] }} ~ {{ dateRange[1] }}
          </p>
          <p v-else>없음</p>
        </div>
      </div>
    `})},C={args:{modelValue:[],type:"day",name:"daterange-required",rules:"required",immediate:!1,isClear:!0},render:e=>({components:{ElementDateRangePicker:t},setup(){const a=r(e.modelValue);return{args:e,dateRange:a}},template:`
      <div>
        <ElementDateRangePicker
          v-model="dateRange"
          :type="args.type"
          :name="args.name"
          :rules="args.rules"
          :immediate="args.immediate"
          :isClear="args.isClear"
        />
        <p style="margin-top: 12px; color: #666;">
          기간을 선택하지 않으면 에러 툴팁이 표시됩니다.
        </p>
      </div>
    `})},v={args:{modelValue:[],type:"day",name:"daterange-auto-apply",autoApply:!0,isClear:!0},render:e=>({components:{ElementDateRangePicker:t},setup(){const a=r(e.modelValue);return{args:e,dateRange:a}},template:`
      <div>
        <ElementDateRangePicker
          v-model="dateRange"
          :type="args.type"
          :name="args.name"
          :autoApply="args.autoApply"
          :isClear="args.isClear"
        />
        <p style="margin-top: 12px; color: #666;">
          날짜를 선택하면 자동으로 적용됩니다 (확인 버튼 불필요)
        </p>
        <div style="margin-top: 8px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <p v-if="dateRange && dateRange.length === 2">
            {{ dateRange[0] }} ~ {{ dateRange[1] }}
          </p>
          <p v-else>기간을 선택해주세요</p>
        </div>
      </div>
    `})},R={args:{modelValue:["2025-01-01","2025-01-31"],type:"day",name:"daterange-disabled",disabled:!0,isClear:!1},render:e=>({components:{ElementDateRangePicker:t},setup(){const a=r(e.modelValue);return{args:e,dateRange:a}},template:`
      <div>
        <ElementDateRangePicker
          v-model="dateRange"
          :type="args.type"
          :name="args.name"
          :disabled="args.disabled"
          :isClear="args.isClear"
        />
        <p style="margin-top: 12px; color: #666;">
          비활성화된 상태입니다.
        </p>
      </div>
    `})},D={args:{modelValue:["2025-01-01","2025-01-31"],type:"day",name:"daterange-readonly",readonly:!0,isClear:!1},render:e=>({components:{ElementDateRangePicker:t},setup(){const a=r(e.modelValue);return{args:e,dateRange:a}},template:`
      <div>
        <ElementDateRangePicker
          v-model="dateRange"
          :type="args.type"
          :name="args.name"
          :readonly="args.readonly"
          :isClear="args.isClear"
        />
        <p style="margin-top: 12px; color: #666;">
          읽기 전용 상태입니다.
        </p>
      </div>
    `})},b={render:()=>({components:{ElementDateRangePicker:t},setup(){const e=r(["2025-01-01","2025-01-31"]);return{searchPeriod:e,handleSearch:()=>{console.log("검색:",e.value),alert(`검색 기간: ${e.value[0]} ~ ${e.value[1]}`)}}},template:`
      <div style="max-width: 500px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h3 style="margin: 0 0 16px 0;">기간 검색</h3>

        <div style="margin-bottom: 16px;">
          <label style="display: block; margin-bottom: 4px; font-weight: bold;">검색 기간</label>
          <ElementDateRangePicker
            v-model="searchPeriod"
            type="day"
            name="search-period"
            :isClear="true"
          />
        </div>

        <button
          type="button"
          @click="handleSearch"
          style="width: 100%; padding: 10px; background: #1976d2; color: white; border: none; border-radius: 4px; cursor: pointer;"
        >
          검색
        </button>

        <div style="margin-top: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px; font-size: 13px;">
          <p><strong>선택된 기간:</strong></p>
          <p v-if="searchPeriod && searchPeriod.length === 2">
            {{ searchPeriod[0] }} ~ {{ searchPeriod[1] }}
          </p>
          <p v-else>기간을 선택해주세요</p>
        </div>
      </div>
    `})},x={render:()=>({components:{ElementDateRangePicker:t},setup(){const e=r([]);return{dateRange:e,setToday:()=>{const n=new Date().toISOString().split("T")[0];e.value=[n,n]},setThisWeek:()=>{const n=new Date,s=new Date(n.setDate(n.getDate()-n.getDay())),d=new Date(n.setDate(n.getDate()-n.getDay()+6));e.value=[s.toISOString().split("T")[0],d.toISOString().split("T")[0]]},setThisMonth:()=>{const n=new Date,s=new Date(n.getFullYear(),n.getMonth(),1),d=new Date(n.getFullYear(),n.getMonth()+1,0);e.value=[s.toISOString().split("T")[0],d.toISOString().split("T")[0]]}}},template:`
      <div>
        <div style="margin-bottom: 12px; display: flex; gap: 8px;">
          <button
            @click="setToday"
            style="padding: 6px 12px; background: #f5f5f5; border: 1px solid #ddd; border-radius: 4px; cursor: pointer;"
          >
            오늘
          </button>
          <button
            @click="setThisWeek"
            style="padding: 6px 12px; background: #f5f5f5; border: 1px solid #ddd; border-radius: 4px; cursor: pointer;"
          >
            이번 주
          </button>
          <button
            @click="setThisMonth"
            style="padding: 6px 12px; background: #f5f5f5; border: 1px solid #ddd; border-radius: 4px; cursor: pointer;"
          >
            이번 달
          </button>
        </div>

        <ElementDateRangePicker
          v-model="dateRange"
          type="day"
          name="quick-period"
          :isClear="true"
        />

        <div style="margin-top: 12px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <p v-if="dateRange && dateRange.length === 2">
            {{ dateRange[0] }} ~ {{ dateRange[1] }}
          </p>
          <p v-else>기간을 선택해주세요</p>
        </div>
      </div>
    `})};var B,S,T;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    modelValue: [],
    type: 'day',
    name: 'daterange-default',
    rules: '',
    immediate: false,
    isTextInput: false,
    isClear: true,
    autoApply: false,
    disabled: false,
    readonly: false,
    tooltipPlacement: 'top-end'
  },
  render: args => ({
    components: {
      ElementDateRangePicker
    },
    setup() {
      const dateRange = ref(args.modelValue);
      return {
        args,
        dateRange
      };
    },
    template: \`
      <div>
        <ElementDateRangePicker
          v-model="dateRange"
          :type="args.type"
          :name="args.name"
          :rules="args.rules"
          :immediate="args.immediate"
          :isTextInput="args.isTextInput"
          :isClear="args.isClear"
          :autoApply="args.autoApply"
          :disabled="args.disabled"
          :readonly="args.readonly"
          :tooltipPlacement="args.tooltipPlacement"
        />
        <div style="margin-top: 12px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <p><strong>선택된 기간:</strong></p>
          <p v-if="dateRange && dateRange.length === 2">
            {{ dateRange[0] }} ~ {{ dateRange[1] }}
          </p>
          <p v-else>없음</p>
        </div>
      </div>
    \`
  })
}`,...(T=(S=m.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var I,M,F;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    modelValue: ['2025-01-01', '2025-01-31'],
    type: 'day',
    name: 'daterange-initial',
    isClear: true
  },
  render: args => ({
    components: {
      ElementDateRangePicker
    },
    setup() {
      const dateRange = ref(args.modelValue);
      return {
        args,
        dateRange
      };
    },
    template: \`
      <div>
        <ElementDateRangePicker
          v-model="dateRange"
          :type="args.type"
          :name="args.name"
          :isClear="args.isClear"
        />
        <div style="margin-top: 12px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <p><strong>선택된 기간:</strong></p>
          <p>{{ dateRange[0] }} ~ {{ dateRange[1] }}</p>
        </div>
      </div>
    \`
  })
}`,...(F=(M=c.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var O,W,q;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    modelValue: ['2025-01', '2025-12'],
    type: 'month',
    name: 'daterange-month',
    isClear: true
  },
  render: args => ({
    components: {
      ElementDateRangePicker
    },
    setup() {
      const dateRange = ref(args.modelValue);
      return {
        args,
        dateRange
      };
    },
    template: \`
      <div>
        <ElementDateRangePicker
          v-model="dateRange"
          :type="args.type"
          :name="args.name"
          :isClear="args.isClear"
        />
        <div style="margin-top: 12px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <p><strong>선택된 월 범위:</strong></p>
          <p v-if="dateRange && dateRange.length === 2">
            {{ dateRange[0] }} ~ {{ dateRange[1] }}
          </p>
          <p v-else>없음</p>
        </div>
      </div>
    \`
  })
}`,...(q=(W=y.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var N,Y,$;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    modelValue: ['2020', '2025'],
    type: 'year',
    name: 'daterange-year',
    isClear: true
  },
  render: args => ({
    components: {
      ElementDateRangePicker
    },
    setup() {
      const dateRange = ref(args.modelValue);
      return {
        args,
        dateRange
      };
    },
    template: \`
      <div>
        <ElementDateRangePicker
          v-model="dateRange"
          :type="args.type"
          :name="args.name"
          :isClear="args.isClear"
        />
        <div style="margin-top: 12px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <p><strong>선택된 년도 범위:</strong></p>
          <p v-if="dateRange && dateRange.length === 2">
            {{ dateRange[0] }} ~ {{ dateRange[1] }}
          </p>
          <p v-else>없음</p>
        </div>
      </div>
    \`
  })
}`,...($=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var z,U,H;C.parameters={...C.parameters,docs:{...(z=C.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    modelValue: [],
    type: 'day',
    name: 'daterange-required',
    rules: 'required',
    immediate: false,
    isClear: true
  },
  render: args => ({
    components: {
      ElementDateRangePicker
    },
    setup() {
      const dateRange = ref(args.modelValue);
      return {
        args,
        dateRange
      };
    },
    template: \`
      <div>
        <ElementDateRangePicker
          v-model="dateRange"
          :type="args.type"
          :name="args.name"
          :rules="args.rules"
          :immediate="args.immediate"
          :isClear="args.isClear"
        />
        <p style="margin-top: 12px; color: #666;">
          기간을 선택하지 않으면 에러 툴팁이 표시됩니다.
        </p>
      </div>
    \`
  })
}`,...(H=(U=C.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};var Q,Z,j;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    modelValue: [],
    type: 'day',
    name: 'daterange-auto-apply',
    autoApply: true,
    isClear: true
  },
  render: args => ({
    components: {
      ElementDateRangePicker
    },
    setup() {
      const dateRange = ref(args.modelValue);
      return {
        args,
        dateRange
      };
    },
    template: \`
      <div>
        <ElementDateRangePicker
          v-model="dateRange"
          :type="args.type"
          :name="args.name"
          :autoApply="args.autoApply"
          :isClear="args.isClear"
        />
        <p style="margin-top: 12px; color: #666;">
          날짜를 선택하면 자동으로 적용됩니다 (확인 버튼 불필요)
        </p>
        <div style="margin-top: 8px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <p v-if="dateRange && dateRange.length === 2">
            {{ dateRange[0] }} ~ {{ dateRange[1] }}
          </p>
          <p v-else>기간을 선택해주세요</p>
        </div>
      </div>
    \`
  })
}`,...(j=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:j.source}}};var L,G,J;R.parameters={...R.parameters,docs:{...(L=R.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    modelValue: ['2025-01-01', '2025-01-31'],
    type: 'day',
    name: 'daterange-disabled',
    disabled: true,
    isClear: false
  },
  render: args => ({
    components: {
      ElementDateRangePicker
    },
    setup() {
      const dateRange = ref(args.modelValue);
      return {
        args,
        dateRange
      };
    },
    template: \`
      <div>
        <ElementDateRangePicker
          v-model="dateRange"
          :type="args.type"
          :name="args.name"
          :disabled="args.disabled"
          :isClear="args.isClear"
        />
        <p style="margin-top: 12px; color: #666;">
          비활성화된 상태입니다.
        </p>
      </div>
    \`
  })
}`,...(J=(G=R.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,X,_;D.parameters={...D.parameters,docs:{...(K=D.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    modelValue: ['2025-01-01', '2025-01-31'],
    type: 'day',
    name: 'daterange-readonly',
    readonly: true,
    isClear: false
  },
  render: args => ({
    components: {
      ElementDateRangePicker
    },
    setup() {
      const dateRange = ref(args.modelValue);
      return {
        args,
        dateRange
      };
    },
    template: \`
      <div>
        <ElementDateRangePicker
          v-model="dateRange"
          :type="args.type"
          :name="args.name"
          :readonly="args.readonly"
          :isClear="args.isClear"
        />
        <p style="margin-top: 12px; color: #666;">
          읽기 전용 상태입니다.
        </p>
      </div>
    \`
  })
}`,...(_=(X=D.parameters)==null?void 0:X.docs)==null?void 0:_.source}}};var ee,ae,ne;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementDateRangePicker
    },
    setup() {
      const searchPeriod = ref(['2025-01-01', '2025-01-31']);
      const handleSearch = () => {
        console.log('검색:', searchPeriod.value);
        alert(\`검색 기간: \${searchPeriod.value[0]} ~ \${searchPeriod.value[1]}\`);
      };
      return {
        searchPeriod,
        handleSearch
      };
    },
    template: \`
      <div style="max-width: 500px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h3 style="margin: 0 0 16px 0;">기간 검색</h3>

        <div style="margin-bottom: 16px;">
          <label style="display: block; margin-bottom: 4px; font-weight: bold;">검색 기간</label>
          <ElementDateRangePicker
            v-model="searchPeriod"
            type="day"
            name="search-period"
            :isClear="true"
          />
        </div>

        <button
          type="button"
          @click="handleSearch"
          style="width: 100%; padding: 10px; background: #1976d2; color: white; border: none; border-radius: 4px; cursor: pointer;"
        >
          검색
        </button>

        <div style="margin-top: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px; font-size: 13px;">
          <p><strong>선택된 기간:</strong></p>
          <p v-if="searchPeriod && searchPeriod.length === 2">
            {{ searchPeriod[0] }} ~ {{ searchPeriod[1] }}
          </p>
          <p v-else>기간을 선택해주세요</p>
        </div>
      </div>
    \`
  })
}`,...(ne=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var te,re,se;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementDateRangePicker
    },
    setup() {
      const dateRange = ref([]);
      const setToday = () => {
        const today = new Date().toISOString().split('T')[0];
        dateRange.value = [today, today];
      };
      const setThisWeek = () => {
        const now = new Date();
        const firstDay = new Date(now.setDate(now.getDate() - now.getDay()));
        const lastDay = new Date(now.setDate(now.getDate() - now.getDay() + 6));
        dateRange.value = [firstDay.toISOString().split('T')[0], lastDay.toISOString().split('T')[0]];
      };
      const setThisMonth = () => {
        const now = new Date();
        const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
        const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        dateRange.value = [firstDay.toISOString().split('T')[0], lastDay.toISOString().split('T')[0]];
      };
      return {
        dateRange,
        setToday,
        setThisWeek,
        setThisMonth
      };
    },
    template: \`
      <div>
        <div style="margin-bottom: 12px; display: flex; gap: 8px;">
          <button
            @click="setToday"
            style="padding: 6px 12px; background: #f5f5f5; border: 1px solid #ddd; border-radius: 4px; cursor: pointer;"
          >
            오늘
          </button>
          <button
            @click="setThisWeek"
            style="padding: 6px 12px; background: #f5f5f5; border: 1px solid #ddd; border-radius: 4px; cursor: pointer;"
          >
            이번 주
          </button>
          <button
            @click="setThisMonth"
            style="padding: 6px 12px; background: #f5f5f5; border: 1px solid #ddd; border-radius: 4px; cursor: pointer;"
          >
            이번 달
          </button>
        </div>

        <ElementDateRangePicker
          v-model="dateRange"
          type="day"
          name="quick-period"
          :isClear="true"
        />

        <div style="margin-top: 12px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <p v-if="dateRange && dateRange.length === 2">
            {{ dateRange[0] }} ~ {{ dateRange[1] }}
          </p>
          <p v-else>기간을 선택해주세요</p>
        </div>
      </div>
    \`
  })
}`,...(se=(re=x.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};const he=["Default","WithInitialValue","MonthRange","YearRange","WithValidation","AutoApply","Disabled","Readonly","SearchForm","QuickPeriodSelection"];export{v as AutoApply,m as Default,R as Disabled,y as MonthRange,x as QuickPeriodSelection,D as Readonly,b as SearchForm,c as WithInitialValue,C as WithValidation,f as YearRange,he as __namedExportsOrder,ke as default};
