import{m as t,a as oe,f as ue,s as se,v as re,u as S,o as d,c as m,y as M,x as A,F as ie,C as pe,A as w,z as de,D as me}from"./vue.esm-bundler-C23JohzN.js";import{Q as ce}from"./index-C8W6ez_R.js";import{F as ge}from"./vee-validate-yFuzOwfJ.js";import"./_commonjsHelpers-Cpj98o6Y.js";const Ce={key:0},ve=["id","value","checked"],be={class:"text"},xe={key:0,class:"txt_tf txt_error"},l={__name:"element-multi-checkbox",props:{modelValue:{type:[String,Number],default:""},rules:{type:String,default:""},name:{type:String,default:""},immediate:{type:Boolean,default:!1},options:{type:Array,default(){return[]}}},emits:["update:modelValue"],setup(e,{emit:n}){const a=e,u=n,p=ce.generateUuid(),s=t(null),o=oe({get(){return a.modelValue},set(r){return u("update:modelValue",r)}});ue(async()=>{a.immediate&&await s.value.validate()});const le=async r=>{r.target.checked?o.value.push(r.target.value):o.value=o.value.filter(i=>i!==r.target.value),await me(),a.rules.includes("required")&&await s.value.validate()};return(r,i)=>(d(),se(S(ge),{ref_key:"veeField",ref:s,modelValue:o.value,"onUpdate:modelValue":i[1]||(i[1]=k=>o.value=k),rules:e.rules,type:"checkbox",name:e.name,class:"dms-checkbox-flex-area"},{default:re(({field:k,errors:B})=>[e.options.length>0?(d(),m("div",Ce,[(d(!0),m(ie,null,pe(e.options,(D,E)=>(d(),m("label",{class:"checkbox",key:E},[A("input",{type:"checkbox",id:`multi-checkbox-${S(p)}-${E}`,value:D.value,onClick:i[0]||(i[0]=ae=>le(ae)),checked:o.value.includes(D.value),class:"hide"},null,8,ve),A("span",be,w(D.label),1)]))),128)),A("input",de(k,{type:"hidden"}),null,16),B.length>0?(d(),m("p",xe,w(B[0]),1)):M("",!0)])):M("",!0)]),_:1},8,["modelValue","rules","name"]))}};l.__docgenInfo={exportName:"default",displayName:"element-multi-checkbox",description:"",tags:{},props:[{name:"modelValue",type:{name:"string|number"},defaultValue:{func:!1,value:"''"}},{name:"rules",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"name",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"immediate",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"options",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],events:[{name:"update:modelValue"}],sourceFiles:["/Users/kokimin/WorkSpace/npm-framework/src/components/form/ElementMultiCheckbox/element-multi-checkbox.vue"]};const De={title:"Form/ElementMultiCheckbox",component:l,tags:["autodocs"],argTypes:{modelValue:{control:"object",description:"선택된 값들의 배열"},rules:{control:"text",description:"vee-validate 유효성 검사 규칙"},name:{control:"text",description:"vee-validate 필드 이름"},immediate:{control:"boolean",description:"초기 유효성 검사 실행 여부"},options:{control:"object",description:"체크박스 옵션 배열 [{ label, value }]"}}},c={args:{modelValue:[],name:"multi-checkbox-default",rules:"",immediate:!1,options:[{label:"옵션 1",value:"option1"},{label:"옵션 2",value:"option2"},{label:"옵션 3",value:"option3"}]},render:e=>({components:{ElementMultiCheckbox:l},setup(){const n=t(e.modelValue);return{args:e,selected:n}},template:`
      <div>
        <ElementMultiCheckbox
          v-model="selected"
          :name="args.name"
          :rules="args.rules"
          :immediate="args.immediate"
          :options="args.options"
        />
        <div style="margin-top: 12px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <p style="margin: 0 0 4px 0;"><strong>선택된 항목:</strong></p>
          <p style="margin: 0;">{{ selected.length > 0 ? selected.join(', ') : '없음' }}</p>
        </div>
      </div>
    `})},g={args:{modelValue:["option1","option3"],name:"multi-checkbox-initial",options:[{label:"옵션 1",value:"option1"},{label:"옵션 2",value:"option2"},{label:"옵션 3",value:"option3"},{label:"옵션 4",value:"option4"}]},render:e=>({components:{ElementMultiCheckbox:l},setup(){const n=t(e.modelValue);return{args:e,selected:n}},template:`
      <div>
        <ElementMultiCheckbox
          v-model="selected"
          :name="args.name"
          :options="args.options"
        />
        <div style="margin-top: 12px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <p style="margin: 0 0 4px 0;"><strong>선택된 항목:</strong></p>
          <p style="margin: 0;">{{ selected.join(', ') }}</p>
        </div>
      </div>
    `})},C={args:{modelValue:[],name:"multi-checkbox-required",rules:"required",immediate:!1,options:[{label:"약관 동의 (필수)",value:"terms"},{label:"개인정보 처리방침 동의 (필수)",value:"privacy"},{label:"마케팅 수신 동의 (선택)",value:"marketing"}]},render:e=>({components:{ElementMultiCheckbox:l},setup(){const n=t(e.modelValue);return{args:e,selected:n}},template:`
      <div>
        <ElementMultiCheckbox
          v-model="selected"
          :name="args.name"
          :rules="args.rules"
          :immediate="args.immediate"
          :options="args.options"
        />
        <p style="margin-top: 12px; color: #666; font-size: 13px;">
          최소 1개 이상 선택해야 합니다.
        </p>
      </div>
    `})},v={args:{modelValue:[],name:"multi-checkbox-immediate",rules:"required",immediate:!0,options:[{label:"필수 항목 1",value:"required1"},{label:"필수 항목 2",value:"required2"},{label:"필수 항목 3",value:"required3"}]},render:e=>({components:{ElementMultiCheckbox:l},setup(){const n=t(e.modelValue);return{args:e,selected:n}},template:`
      <div>
        <ElementMultiCheckbox
          v-model="selected"
          :name="args.name"
          :rules="args.rules"
          :immediate="args.immediate"
          :options="args.options"
        />
        <p style="margin-top: 12px; color: #666; font-size: 13px;">
          페이지 로드 시 즉시 유효성 검사가 실행됩니다.
        </p>
      </div>
    `})},b={render:()=>({components:{ElementMultiCheckbox:l},setup(){return{interests:t([]),options:[{label:"스포츠",value:"sports"},{label:"음악",value:"music"},{label:"영화",value:"movies"},{label:"독서",value:"reading"},{label:"여행",value:"travel"},{label:"요리",value:"cooking"},{label:"게임",value:"gaming"},{label:"사진",value:"photography"}]}},template:`
      <div style="max-width: 500px;">
        <h3 style="margin: 0 0 16px 0;">관심사 선택</h3>
        <ElementMultiCheckbox
          v-model="interests"
          name="interests"
          :options="options"
        />
        <div style="margin-top: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <p style="margin: 0 0 8px 0;"><strong>선택된 관심사 ({{ interests.length }}개):</strong></p>
          <div v-if="interests.length > 0" style="display: flex; flex-wrap: wrap; gap: 8px;">
            <span
              v-for="interest in interests"
              :key="interest"
              style="padding: 4px 12px; background: #1976d2; color: white; border-radius: 16px; font-size: 13px;"
            >
              {{ options.find(o => o.value === interest)?.label }}
            </span>
          </div>
          <p v-else style="margin: 0; color: #666;">관심사를 선택해주세요</p>
        </div>
      </div>
    `})},x={render:()=>({components:{ElementMultiCheckbox:l},setup(){const e=t(["wifi","parking"]);return{features:e,options:[{label:"무료 Wi-Fi",value:"wifi"},{label:"주차 가능",value:"parking"},{label:"수영장",value:"pool"},{label:"헬스장",value:"gym"},{label:"레스토랑",value:"restaurant"},{label:"반려동물 동반 가능",value:"pet"}],calculatePrice:()=>{const p={wifi:0,parking:5e3,pool:2e4,gym:15e3,restaurant:1e4,pet:1e4};return 1e5+e.value.reduce((s,o)=>s+(p[o]||0),0)}}},template:`
      <div style="max-width: 500px;">
        <h3 style="margin: 0 0 16px 0;">숙소 옵션 선택</h3>
        <ElementMultiCheckbox
          v-model="features"
          name="features"
          :options="options"
        />
        <div style="margin-top: 16px; padding: 16px; background: #f5f5f5; border-radius: 4px;">
          <p style="margin: 0 0 8px 0;"><strong>선택된 옵션:</strong></p>
          <ul style="margin: 0 0 12px 0; padding-left: 20px;">
            <li v-for="feature in features" :key="feature">
              {{ options.find(o => o.value === feature)?.label }}
            </li>
          </ul>
          <p style="margin: 0; font-size: 18px; font-weight: bold; color: #1976d2;">
            총 금액: {{ calculatePrice().toLocaleString() }}원
          </p>
        </div>
      </div>
    `})},f={render:()=>({components:{ElementMultiCheckbox:l},setup(){const e=t([]),n=t(!1),a=[{label:"항목 1",value:"item1"},{label:"항목 2",value:"item2"},{label:"항목 3",value:"item3"},{label:"항목 4",value:"item4"}];return{selected:e,allSelected:n,options:a,toggleAll:()=>{n.value?e.value=a.map(s=>s.value):e.value=[]},checkAllSelected:()=>{n.value=e.value.length===a.length}}},template:`
      <div>
        <label style="display: block; margin-bottom: 12px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <input
            type="checkbox"
            v-model="allSelected"
            @change="toggleAll"
            style="margin-right: 8px;"
          />
          <strong>전체 선택</strong>
        </label>

        <ElementMultiCheckbox
          v-model="selected"
          @update:modelValue="checkAllSelected"
          name="all-or-none"
          :options="options"
        />

        <div style="margin-top: 12px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <p style="margin: 0;">
            선택됨: {{ selected.length }} / {{ options.length }}
          </p>
        </div>
      </div>
    `})},h={render:()=>({components:{ElementMultiCheckbox:l},setup(){const e=t([]),n=t([]);return{platforms:e,languages:n,platformOptions:[{label:"Windows",value:"windows"},{label:"macOS",value:"macos"},{label:"Linux",value:"linux"},{label:"iOS",value:"ios"},{label:"Android",value:"android"}],languageOptions:[{label:"JavaScript",value:"js"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"},{label:"Go",value:"go"},{label:"Rust",value:"rust"}],handleSubmit:()=>{console.log("Survey submitted:",{platforms:e.value,languages:n.value}),alert(`제출 완료!

플랫폼: ${e.value.join(", ")}
언어: ${n.value.join(", ")}`)}}},template:`
        <div style="max-width: 600px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h3 style="margin: 0 0 20px 0;">개발자 설문조사</h3>

        <div style="margin-bottom: 20px;">
          <label style="display: block; margin-bottom: 8px; font-weight: bold;">
            사용하는 운영체제 (복수 선택 가능)
          </label>
          <ElementMultiCheckbox
            v-model="platforms"
            name="platforms"
          :options="platformOptions"
          />
        </div>

        <div style="margin-bottom: 20px;">
          <label style="display: block; margin-bottom: 8px; font-weight: bold;">
            사용 가능한 프로그래밍 언어 (복수 선택 가능)
          </label>
          <ElementMultiCheckbox
            v-model="languages"
            name="languages"
          :options="languageOptions"
          />
        </div>

        <button
          type="button"
          @click="handleSubmit"
        style="width: 100%; padding: 12px; background: #1976d2; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;"
          >
          제출
          </button>

        <div style="margin-top: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px; font-size: 13px;">
          <p style="margin: 0 0 8px 0;"><strong>선택 현황:</strong></p>
          <p style="margin: 4px 0;">플랫폼: {{ platforms.length }}개 선택</p>
          <p style="margin: 4px 0;">언어: {{ languages.length }}개 선택</p>
        </div>
      </div>
        `})},y={render:()=>({components:{ElementMultiCheckbox:l},setup(){const e=t([]),n=Array.from({length:20},(a,u)=>({label:`옵션 ${u+1}`,value:`option${u+1}`}));return{selected:e,options:n}},template:`
        <div>
        <h4 style="margin: 0 0 12px 0;">많은 옵션 ({{ options.length }}개)</h4>
        <div style="max-height: 300px; overflow-y: auto; padding: 12px; border: 1px solid #ddd; border-radius: 4px;">
          <ElementMultiCheckbox
            v-model="selected"
            name="many-options"
          :options="options"
          />
        </div>
        <div style="margin-top: 12px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <p style="margin: 0;">
            선택된 항목: {{ selected.length }}개
          </p>
        </div>
      </div>
        `})};var V,F,O;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    modelValue: [],
    name: 'multi-checkbox-default',
    rules: '',
    immediate: false,
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
      ElementMultiCheckbox
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
        <ElementMultiCheckbox
          v-model="selected"
          :name="args.name"
          :rules="args.rules"
          :immediate="args.immediate"
          :options="args.options"
        />
        <div style="margin-top: 12px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <p style="margin: 0 0 4px 0;"><strong>선택된 항목:</strong></p>
          <p style="margin: 0;">{{ selected.length > 0 ? selected.join(', ') : '없음' }}</p>
        </div>
      </div>
    \`
  })
}`,...(O=(F=c.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var P,j,q;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    modelValue: ['option1', 'option3'],
    name: 'multi-checkbox-initial',
    options: [{
      label: '옵션 1',
      value: 'option1'
    }, {
      label: '옵션 2',
      value: 'option2'
    }, {
      label: '옵션 3',
      value: 'option3'
    }, {
      label: '옵션 4',
      value: 'option4'
    }]
  },
  render: args => ({
    components: {
      ElementMultiCheckbox
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
        <ElementMultiCheckbox
          v-model="selected"
          :name="args.name"
          :options="args.options"
        />
        <div style="margin-top: 12px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <p style="margin: 0 0 4px 0;"><strong>선택된 항목:</strong></p>
          <p style="margin: 0;">{{ selected.join(', ') }}</p>
        </div>
      </div>
    \`
  })
}`,...(q=(j=g.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var _,z,$;C.parameters={...C.parameters,docs:{...(_=C.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    modelValue: [],
    name: 'multi-checkbox-required',
    rules: 'required',
    immediate: false,
    options: [{
      label: '약관 동의 (필수)',
      value: 'terms'
    }, {
      label: '개인정보 처리방침 동의 (필수)',
      value: 'privacy'
    }, {
      label: '마케팅 수신 동의 (선택)',
      value: 'marketing'
    }]
  },
  render: args => ({
    components: {
      ElementMultiCheckbox
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
        <ElementMultiCheckbox
          v-model="selected"
          :name="args.name"
          :rules="args.rules"
          :immediate="args.immediate"
          :options="args.options"
        />
        <p style="margin-top: 12px; color: #666; font-size: 13px;">
          최소 1개 이상 선택해야 합니다.
        </p>
      </div>
    \`
  })
}`,...($=(z=C.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};var W,I,N;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    modelValue: [],
    name: 'multi-checkbox-immediate',
    rules: 'required',
    immediate: true,
    options: [{
      label: '필수 항목 1',
      value: 'required1'
    }, {
      label: '필수 항목 2',
      value: 'required2'
    }, {
      label: '필수 항목 3',
      value: 'required3'
    }]
  },
  render: args => ({
    components: {
      ElementMultiCheckbox
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
        <ElementMultiCheckbox
          v-model="selected"
          :name="args.name"
          :rules="args.rules"
          :immediate="args.immediate"
          :options="args.options"
        />
        <p style="margin-top: 12px; color: #666; font-size: 13px;">
          페이지 로드 시 즉시 유효성 검사가 실행됩니다.
        </p>
      </div>
    \`
  })
}`,...(N=(I=v.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var L,J,U;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementMultiCheckbox
    },
    setup() {
      const interests = ref([]);
      const options = [{
        label: '스포츠',
        value: 'sports'
      }, {
        label: '음악',
        value: 'music'
      }, {
        label: '영화',
        value: 'movies'
      }, {
        label: '독서',
        value: 'reading'
      }, {
        label: '여행',
        value: 'travel'
      }, {
        label: '요리',
        value: 'cooking'
      }, {
        label: '게임',
        value: 'gaming'
      }, {
        label: '사진',
        value: 'photography'
      }];
      return {
        interests,
        options
      };
    },
    template: \`
      <div style="max-width: 500px;">
        <h3 style="margin: 0 0 16px 0;">관심사 선택</h3>
        <ElementMultiCheckbox
          v-model="interests"
          name="interests"
          :options="options"
        />
        <div style="margin-top: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <p style="margin: 0 0 8px 0;"><strong>선택된 관심사 ({{ interests.length }}개):</strong></p>
          <div v-if="interests.length > 0" style="display: flex; flex-wrap: wrap; gap: 8px;">
            <span
              v-for="interest in interests"
              :key="interest"
              style="padding: 4px 12px; background: #1976d2; color: white; border-radius: 16px; font-size: 13px;"
            >
              {{ options.find(o => o.value === interest)?.label }}
            </span>
          </div>
          <p v-else style="margin: 0; color: #666;">관심사를 선택해주세요</p>
        </div>
      </div>
    \`
  })
}`,...(U=(J=b.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};var G,Q,R;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementMultiCheckbox
    },
    setup() {
      const features = ref(['wifi', 'parking']);
      const options = [{
        label: '무료 Wi-Fi',
        value: 'wifi'
      }, {
        label: '주차 가능',
        value: 'parking'
      }, {
        label: '수영장',
        value: 'pool'
      }, {
        label: '헬스장',
        value: 'gym'
      }, {
        label: '레스토랑',
        value: 'restaurant'
      }, {
        label: '반려동물 동반 가능',
        value: 'pet'
      }];
      const calculatePrice = () => {
        const basePrice = 100000;
        const featurePrices = {
          wifi: 0,
          parking: 5000,
          pool: 20000,
          gym: 15000,
          restaurant: 10000,
          pet: 10000
        };
        return basePrice + features.value.reduce((sum, f) => sum + (featurePrices[f] || 0), 0);
      };
      return {
        features,
        options,
        calculatePrice
      };
    },
    template: \`
      <div style="max-width: 500px;">
        <h3 style="margin: 0 0 16px 0;">숙소 옵션 선택</h3>
        <ElementMultiCheckbox
          v-model="features"
          name="features"
          :options="options"
        />
        <div style="margin-top: 16px; padding: 16px; background: #f5f5f5; border-radius: 4px;">
          <p style="margin: 0 0 8px 0;"><strong>선택된 옵션:</strong></p>
          <ul style="margin: 0 0 12px 0; padding-left: 20px;">
            <li v-for="feature in features" :key="feature">
              {{ options.find(o => o.value === feature)?.label }}
            </li>
          </ul>
          <p style="margin: 0; font-size: 18px; font-weight: bold; color: #1976d2;">
            총 금액: {{ calculatePrice().toLocaleString() }}원
          </p>
        </div>
      </div>
    \`
  })
}`,...(R=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:R.source}}};var T,H,K;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementMultiCheckbox
    },
    setup() {
      const selected = ref([]);
      const allSelected = ref(false);
      const options = [{
        label: '항목 1',
        value: 'item1'
      }, {
        label: '항목 2',
        value: 'item2'
      }, {
        label: '항목 3',
        value: 'item3'
      }, {
        label: '항목 4',
        value: 'item4'
      }];
      const toggleAll = () => {
        if (allSelected.value) {
          selected.value = options.map(o => o.value);
        } else {
          selected.value = [];
        }
      };
      const checkAllSelected = () => {
        allSelected.value = selected.value.length === options.length;
      };
      return {
        selected,
        allSelected,
        options,
        toggleAll,
        checkAllSelected
      };
    },
    template: \`
      <div>
        <label style="display: block; margin-bottom: 12px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <input
            type="checkbox"
            v-model="allSelected"
            @change="toggleAll"
            style="margin-right: 8px;"
          />
          <strong>전체 선택</strong>
        </label>

        <ElementMultiCheckbox
          v-model="selected"
          @update:modelValue="checkAllSelected"
          name="all-or-none"
          :options="options"
        />

        <div style="margin-top: 12px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <p style="margin: 0;">
            선택됨: {{ selected.length }} / {{ options.length }}
          </p>
        </div>
      </div>
    \`
  })
}`,...(K=(H=f.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var X,Y,Z;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementMultiCheckbox
    },
    setup() {
      const platforms = ref([]);
      const languages = ref([]);
      const platformOptions = [{
        label: 'Windows',
        value: 'windows'
      }, {
        label: 'macOS',
        value: 'macos'
      }, {
        label: 'Linux',
        value: 'linux'
      }, {
        label: 'iOS',
        value: 'ios'
      }, {
        label: 'Android',
        value: 'android'
      }];
      const languageOptions = [{
        label: 'JavaScript',
        value: 'js'
      }, {
        label: 'Python',
        value: 'python'
      }, {
        label: 'Java',
        value: 'java'
      }, {
        label: 'C++',
        value: 'cpp'
      }, {
        label: 'Go',
        value: 'go'
      }, {
        label: 'Rust',
        value: 'rust'
      }];
      const handleSubmit = () => {
        console.log('Survey submitted:', {
          platforms: platforms.value,
          languages: languages.value
        });
        alert(\`제출 완료!\\n\\n플랫폼: \${platforms.value.join(', ')}\\n언어: \${languages.value.join(', ')}\`);
      };
      return {
        platforms,
        languages,
        platformOptions,
        languageOptions,
        handleSubmit
      };
    },
    template: \`
        <div style="max-width: 600px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h3 style="margin: 0 0 20px 0;">개발자 설문조사</h3>

        <div style="margin-bottom: 20px;">
          <label style="display: block; margin-bottom: 8px; font-weight: bold;">
            사용하는 운영체제 (복수 선택 가능)
          </label>
          <ElementMultiCheckbox
            v-model="platforms"
            name="platforms"
          :options="platformOptions"
          />
        </div>

        <div style="margin-bottom: 20px;">
          <label style="display: block; margin-bottom: 8px; font-weight: bold;">
            사용 가능한 프로그래밍 언어 (복수 선택 가능)
          </label>
          <ElementMultiCheckbox
            v-model="languages"
            name="languages"
          :options="languageOptions"
          />
        </div>

        <button
          type="button"
          @click="handleSubmit"
        style="width: 100%; padding: 12px; background: #1976d2; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;"
          >
          제출
          </button>

        <div style="margin-top: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px; font-size: 13px;">
          <p style="margin: 0 0 8px 0;"><strong>선택 현황:</strong></p>
          <p style="margin: 4px 0;">플랫폼: {{ platforms.length }}개 선택</p>
          <p style="margin: 4px 0;">언어: {{ languages.length }}개 선택</p>
        </div>
      </div>
        \`
  })
}`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,te;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementMultiCheckbox
    },
    setup() {
      const selected = ref([]);
      const options = Array.from({
        length: 20
      }, (_, i) => ({
        label: \`옵션 \${i + 1}\`,
        value: \`option\${i + 1}\`
      }));
      return {
        selected,
        options
      };
    },
    template: \`
        <div>
        <h4 style="margin: 0 0 12px 0;">많은 옵션 ({{ options.length }}개)</h4>
        <div style="max-height: 300px; overflow-y: auto; padding: 12px; border: 1px solid #ddd; border-radius: 4px;">
          <ElementMultiCheckbox
            v-model="selected"
            name="many-options"
          :options="options"
          />
        </div>
        <div style="margin-top: 12px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <p style="margin: 0;">
            선택된 항목: {{ selected.length }}개
          </p>
        </div>
      </div>
        \`
  })
}`,...(te=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};const Ae=["Default","WithInitialSelection","WithValidation","ImmediateValidation","InterestSelection","ProductFeatures","AllOrNone","SurveyForm","ManyOptions"];export{f as AllOrNone,c as Default,v as ImmediateValidation,b as InterestSelection,y as ManyOptions,x as ProductFeatures,h as SurveyForm,g as WithInitialSelection,C as WithValidation,Ae as __namedExportsOrder,De as default};
