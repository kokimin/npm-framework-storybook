import{a as ae,s as le,v as re,u as D,o as B,x as o,c as te,y as ue,z as oe,A as E,m as a}from"./vue.esm-bundler-C23JohzN.js";import{Q as se}from"./index-C8W6ez_R.js";import{F as ce}from"./vee-validate-rN8_QdDx.js";import"./_commonjsHelpers-Cpj98o6Y.js";const me={class:"checkbox single"},de=["id","checked"],pe={class:"text"},ie={key:0,class:"txt_tf txt_error"},l={__name:"element-checkbox",props:{modelValue:{type:[String,Number],default:""},rules:{type:String,default:""},name:{type:String,default:""},label:{type:String,default:""},immediate:{type:Boolean,default:!1},className:{type:String,default:"custom-input-compo"}},emits:["update:modelValue"],setup(e,{emit:n}){const r=e,u=n,x=se.generateUuid(),t=ae({get(){return r.modelValue},set(v){return u("update:modelValue",v)}});return(v,f)=>(B(),le(D(ce),{modelValue:t.value,"onUpdate:modelValue":f[0]||(f[0]=h=>t.value=h),rules:e.rules,type:"checkbox",name:e.name,value:!0,"unchecked-value":!1},{default:re(({field:h,errors:A})=>[o("div",null,[o("label",me,[o("input",oe({type:"checkbox"},h,{id:`checkbox-${D(x)}`,checked:t.value,value:!0,class:"hide"}),null,16,de),o("span",pe,E(e.label),1)]),A.length>0?(B(),te("p",ie,E(A[0]),1)):ue("",!0)])]),_:1},8,["modelValue","rules","name"]))}};l.__docgenInfo={exportName:"default",displayName:"element-checkbox",description:"",tags:{},props:[{name:"modelValue",type:{name:"string|number"},defaultValue:{func:!1,value:"''"}},{name:"rules",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"name",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"immediate",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"'custom-input-compo'"}}],events:[{name:"update:modelValue"}],sourceFiles:["/Users/kokimin/WorkSpace/npm-framework/src/components/form/ElementCheckbox/element-checkbox.vue"]};const he={title:"Form/ElementCheckbox",component:l,tags:["autodocs"],argTypes:{modelValue:{control:"boolean",description:"체크박스 값"},rules:{control:"text",description:"vee-validate 유효성 검사 규칙"},name:{control:"text",description:"vee-validate 필드 이름"},label:{control:"text",description:"체크박스 라벨"},immediate:{control:"boolean",description:"초기 유효성 검사 실행 여부"},className:{control:"text",description:"CSS 클래스명"}}},s={args:{modelValue:!1,label:"기본 체크박스",name:"checkbox-default",rules:"",immediate:!1,className:"custom-input-compo"},render:e=>({components:{ElementCheckbox:l},setup(){const n=a(e.modelValue);return{args:e,checked:n}},template:`
      <div>
        <ElementCheckbox
          v-model="checked"
          :label="args.label"
          :name="args.name"
          :rules="args.rules"
          :immediate="args.immediate"
          :className="args.className"
        />
        <p style="margin-top: 12px; color: #666;">
          현재 값: {{ checked }}
        </p>
      </div>
    `})},c={args:{modelValue:!0,label:"선택된 체크박스",name:"checkbox-checked"},render:e=>({components:{ElementCheckbox:l},setup(){const n=a(e.modelValue);return{args:e,checked:n}},template:`
      <div>
        <ElementCheckbox
          v-model="checked"
          :label="args.label"
          :name="args.name"
        />
        <p style="margin-top: 12px; color: #666;">
          현재 값: {{ checked }}
        </p>
      </div>
    `})},m={args:{modelValue:!1,label:"선택 안된 체크박스",name:"checkbox-unchecked"},render:e=>({components:{ElementCheckbox:l},setup(){const n=a(e.modelValue);return{args:e,checked:n}},template:`
      <div>
        <ElementCheckbox
          v-model="checked"
          :label="args.label"
          :name="args.name"
        />
        <p style="margin-top: 12px; color: #666;">
          현재 값: {{ checked }}
        </p>
      </div>
    `})},d={args:{modelValue:!1,label:"이용약관 동의 (필수)",name:"checkbox-required",rules:"required",immediate:!1},render:e=>({components:{ElementCheckbox:l},setup(){const n=a(e.modelValue);return{args:e,checked:n}},template:`
      <div>
        <ElementCheckbox
          v-model="checked"
          :label="args.label"
          :name="args.name"
          :rules="args.rules"
          :immediate="args.immediate"
        />
        <p style="margin-top: 12px; color: #666;">
          체크하지 않으면 에러 메시지가 표시됩니다.
        </p>
      </div>
    `})},p={args:{modelValue:!1,label:"필수 동의 항목",name:"checkbox-immediate",rules:"required",immediate:!0},render:e=>({components:{ElementCheckbox:l},setup(){const n=a(e.modelValue);return{args:e,checked:n}},template:`
      <div>
        <ElementCheckbox
          v-model="checked"
          :label="args.label"
          :name="args.name"
          :rules="args.rules"
          :immediate="args.immediate"
        />
        <p style="margin-top: 12px; color: #666;">
          페이지 로드 시 즉시 유효성 검사가 실행됩니다.
        </p>
      </div>
    `})},i={render:()=>({components:{ElementCheckbox:l},setup(){const e=a(!1),n=a(!1),r=a(!0);return{agree1:e,agree2:n,agree3:r}},template:`
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <ElementCheckbox
          v-model="agree1"
          label="첫 번째 항목"
          name="checkbox-1"
        />
        <ElementCheckbox
          v-model="agree2"
          label="두 번째 항목"
          name="checkbox-2"
        />
        <ElementCheckbox
          v-model="agree3"
          label="세 번째 항목 (기본 선택됨)"
          name="checkbox-3"
        />
        <div style="margin-top: 12px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <p><strong>선택된 항목:</strong></p>
          <p>첫 번째: {{ agree1 }}</p>
          <p>두 번째: {{ agree2 }}</p>
          <p>세 번째: {{ agree3 }}</p>
        </div>
      </div>
    `})},C={render:()=>({components:{ElementCheckbox:l},setup(){const e=a(!1),n=a(!1),r=a(!1),u=a(!1);return{termsAgree:e,privacyAgree:n,marketingAgree:r,allAgree:u,handleAllAgree:t=>{e.value=t,n.value=t,r.value=t}}},template:`
      <div style="padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h3 style="margin: 0 0 16px 0;">약관 동의</h3>

        <ElementCheckbox
          v-model="allAgree"
          @update:modelValue="handleAllAgree"
          label="전체 동의"
          name="all-agree"
        />

        <div style="margin: 16px 0 0 20px; display: flex; flex-direction: column; gap: 8px;">
          <ElementCheckbox
            v-model="termsAgree"
            label="이용약관 동의 (필수)"
            name="terms-agree"
            rules="required"
          />
          <ElementCheckbox
            v-model="privacyAgree"
            label="개인정보 처리방침 동의 (필수)"
            name="privacy-agree"
            rules="required"
          />
          <ElementCheckbox
            v-model="marketingAgree"
            label="마케팅 정보 수신 동의 (선택)"
            name="marketing-agree"
          />
        </div>

        <div style="margin-top: 20px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <p><strong>동의 상태:</strong></p>
          <p>전체: {{ allAgree }}</p>
          <p>이용약관: {{ termsAgree }}</p>
          <p>개인정보: {{ privacyAgree }}</p>
          <p>마케팅: {{ marketingAgree }}</p>
        </div>
      </div>
    `})},g={render:()=>({components:{ElementCheckbox:l},setup(){const e=a(!1),n=a(0);return{checked:e,clickCount:n,handleUpdate:u=>{n.value++,console.log("체크박스 변경:",u)}}},template:`
      <div>
        <ElementCheckbox
          v-model="checked"
          @update:modelValue="handleUpdate"
          label="상호작용 체크박스"
          name="interactive-checkbox"
        />
        <div style="margin-top: 12px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <p><strong>현재 상태:</strong> {{ checked ? '선택됨' : '선택 안됨' }}</p>
          <p><strong>클릭 횟수:</strong> {{ clickCount }}</p>
        </div>
      </div>
    `})},b={args:{modelValue:!1,label:"이것은 매우 긴 라벨 텍스트입니다. 체크박스 컴포넌트가 긴 텍스트를 어떻게 처리하는지 확인할 수 있습니다. 여러 줄로 표시될 수도 있습니다.",name:"checkbox-long-label"},render:e=>({components:{ElementCheckbox:l},setup(){const n=a(e.modelValue);return{args:e,checked:n}},template:`
      <div style="max-width: 400px;">
        <ElementCheckbox
          v-model="checked"
          :label="args.label"
          :name="args.name"
        />
      </div>
    `})},k={args:{modelValue:!1,label:"커스텀 클래스",name:"checkbox-custom",className:"custom-input-compo custom-style"},render:e=>({components:{ElementCheckbox:l},setup(){const n=a(e.modelValue);return{args:e,checked:n}},template:`
      <div>
        <style>
          .custom-style {
            font-weight: bold;
            color: #1976d2;
          }
        </style>
        <ElementCheckbox
          v-model="checked"
          :label="args.label"
          :name="args.name"
          :className="args.className"
        />
      </div>
    `})};var y,V,N;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    modelValue: false,
    label: '기본 체크박스',
    name: 'checkbox-default',
    rules: '',
    immediate: false,
    className: 'custom-input-compo'
  },
  render: args => ({
    components: {
      ElementCheckbox
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
        <ElementCheckbox
          v-model="checked"
          :label="args.label"
          :name="args.name"
          :rules="args.rules"
          :immediate="args.immediate"
          :className="args.className"
        />
        <p style="margin-top: 12px; color: #666;">
          현재 값: {{ checked }}
        </p>
      </div>
    \`
  })
}`,...(N=(V=s.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var F,S,_;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    label: '선택된 체크박스',
    name: 'checkbox-checked'
  },
  render: args => ({
    components: {
      ElementCheckbox
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
        <ElementCheckbox
          v-model="checked"
          :label="args.label"
          :name="args.name"
        />
        <p style="margin-top: 12px; color: #666;">
          현재 값: {{ checked }}
        </p>
      </div>
    \`
  })
}`,...(_=(S=c.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var U,q,w;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    modelValue: false,
    label: '선택 안된 체크박스',
    name: 'checkbox-unchecked'
  },
  render: args => ({
    components: {
      ElementCheckbox
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
        <ElementCheckbox
          v-model="checked"
          :label="args.label"
          :name="args.name"
        />
        <p style="margin-top: 12px; color: #666;">
          현재 값: {{ checked }}
        </p>
      </div>
    \`
  })
}`,...(w=(q=m.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var I,L,T;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    modelValue: false,
    label: '이용약관 동의 (필수)',
    name: 'checkbox-required',
    rules: 'required',
    immediate: false
  },
  render: args => ({
    components: {
      ElementCheckbox
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
        <ElementCheckbox
          v-model="checked"
          :label="args.label"
          :name="args.name"
          :rules="args.rules"
          :immediate="args.immediate"
        />
        <p style="margin-top: 12px; color: #666;">
          체크하지 않으면 에러 메시지가 표시됩니다.
        </p>
      </div>
    \`
  })
}`,...(T=(L=d.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var W,M,Q;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    modelValue: false,
    label: '필수 동의 항목',
    name: 'checkbox-immediate',
    rules: 'required',
    immediate: true
  },
  render: args => ({
    components: {
      ElementCheckbox
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
        <ElementCheckbox
          v-model="checked"
          :label="args.label"
          :name="args.name"
          :rules="args.rules"
          :immediate="args.immediate"
        />
        <p style="margin-top: 12px; color: #666;">
          페이지 로드 시 즉시 유효성 검사가 실행됩니다.
        </p>
      </div>
    \`
  })
}`,...(Q=(M=p.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var z,O,P;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementCheckbox
    },
    setup() {
      const agree1 = ref(false);
      const agree2 = ref(false);
      const agree3 = ref(true);
      return {
        agree1,
        agree2,
        agree3
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <ElementCheckbox
          v-model="agree1"
          label="첫 번째 항목"
          name="checkbox-1"
        />
        <ElementCheckbox
          v-model="agree2"
          label="두 번째 항목"
          name="checkbox-2"
        />
        <ElementCheckbox
          v-model="agree3"
          label="세 번째 항목 (기본 선택됨)"
          name="checkbox-3"
        />
        <div style="margin-top: 12px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <p><strong>선택된 항목:</strong></p>
          <p>첫 번째: {{ agree1 }}</p>
          <p>두 번째: {{ agree2 }}</p>
          <p>세 번째: {{ agree3 }}</p>
        </div>
      </div>
    \`
  })
}`,...(P=(O=i.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var $,j,G;C.parameters={...C.parameters,docs:{...($=C.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementCheckbox
    },
    setup() {
      const termsAgree = ref(false);
      const privacyAgree = ref(false);
      const marketingAgree = ref(false);
      const allAgree = ref(false);
      const handleAllAgree = value => {
        termsAgree.value = value;
        privacyAgree.value = value;
        marketingAgree.value = value;
      };
      return {
        termsAgree,
        privacyAgree,
        marketingAgree,
        allAgree,
        handleAllAgree
      };
    },
    template: \`
      <div style="padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h3 style="margin: 0 0 16px 0;">약관 동의</h3>

        <ElementCheckbox
          v-model="allAgree"
          @update:modelValue="handleAllAgree"
          label="전체 동의"
          name="all-agree"
        />

        <div style="margin: 16px 0 0 20px; display: flex; flex-direction: column; gap: 8px;">
          <ElementCheckbox
            v-model="termsAgree"
            label="이용약관 동의 (필수)"
            name="terms-agree"
            rules="required"
          />
          <ElementCheckbox
            v-model="privacyAgree"
            label="개인정보 처리방침 동의 (필수)"
            name="privacy-agree"
            rules="required"
          />
          <ElementCheckbox
            v-model="marketingAgree"
            label="마케팅 정보 수신 동의 (선택)"
            name="marketing-agree"
          />
        </div>

        <div style="margin-top: 20px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <p><strong>동의 상태:</strong></p>
          <p>전체: {{ allAgree }}</p>
          <p>이용약관: {{ termsAgree }}</p>
          <p>개인정보: {{ privacyAgree }}</p>
          <p>마케팅: {{ marketingAgree }}</p>
        </div>
      </div>
    \`
  })
}`,...(G=(j=C.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var H,J,K;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementCheckbox
    },
    setup() {
      const checked = ref(false);
      const clickCount = ref(0);
      const handleUpdate = value => {
        clickCount.value++;
        console.log('체크박스 변경:', value);
      };
      return {
        checked,
        clickCount,
        handleUpdate
      };
    },
    template: \`
      <div>
        <ElementCheckbox
          v-model="checked"
          @update:modelValue="handleUpdate"
          label="상호작용 체크박스"
          name="interactive-checkbox"
        />
        <div style="margin-top: 12px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <p><strong>현재 상태:</strong> {{ checked ? '선택됨' : '선택 안됨' }}</p>
          <p><strong>클릭 횟수:</strong> {{ clickCount }}</p>
        </div>
      </div>
    \`
  })
}`,...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var R,X,Y;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    modelValue: false,
    label: '이것은 매우 긴 라벨 텍스트입니다. 체크박스 컴포넌트가 긴 텍스트를 어떻게 처리하는지 확인할 수 있습니다. 여러 줄로 표시될 수도 있습니다.',
    name: 'checkbox-long-label'
  },
  render: args => ({
    components: {
      ElementCheckbox
    },
    setup() {
      const checked = ref(args.modelValue);
      return {
        args,
        checked
      };
    },
    template: \`
      <div style="max-width: 400px;">
        <ElementCheckbox
          v-model="checked"
          :label="args.label"
          :name="args.name"
        />
      </div>
    \`
  })
}`,...(Y=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ne;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    modelValue: false,
    label: '커스텀 클래스',
    name: 'checkbox-custom',
    className: 'custom-input-compo custom-style'
  },
  render: args => ({
    components: {
      ElementCheckbox
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
        <style>
          .custom-style {
            font-weight: bold;
            color: #1976d2;
          }
        </style>
        <ElementCheckbox
          v-model="checked"
          :label="args.label"
          :name="args.name"
          :className="args.className"
        />
      </div>
    \`
  })
}`,...(ne=(ee=k.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};const xe=["Default","Checked","Unchecked","WithValidation","ImmediateValidation","MultipleCheckboxes","TermsAgreement","InteractiveExample","LongLabel","CustomClassName"];export{c as Checked,k as CustomClassName,s as Default,p as ImmediateValidation,g as InteractiveExample,b as LongLabel,i as MultipleCheckboxes,C as TermsAgreement,m as Unchecked,d as WithValidation,xe as __namedExportsOrder,he as default};
