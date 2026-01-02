import{m as a,a as ke,f as Le,s as L,u as p,o as u,v as S,x as m,n as Se,c as A,y as q,z as Ae,F as Q,H,A as d}from"./vue.esm-bundler-C23JohzN.js";import{Q as N}from"./index-C8W6ez_R.js";import{F as qe}from"./vee-validate-rN8_QdDx.js";import{_ as Fe}from"./element-button-BG7G4eZx.js";import{_ as ze}from"./element-tooltip-CVQ3LOPp.js";import"./_commonjsHelpers-Cpj98o6Y.js";const Pe=["type","placeholder","readonly","disabled","maxlength"],Qe={key:0,class:"txt_maxLen"},t={__name:"element-text",props:{modelValue:{type:[String,Number],default:""},type:{type:String,default:"text"},name:{type:String,default:""},rules:{type:String,default:""},immediate:{type:Boolean,default:!1},isClear:{type:Boolean,default:!0},placeholder:{type:String,default:""},readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},maxLenType:{type:String,default:""},maxLength:{type:[String,Number],default:-1},tooltipPlacement:{type:String,default:"top-end"}},emits:["update:modelValue"],setup(e,{emit:n}){const o=e,T=n,F=a(null),s=ke({get(){return o.modelValue},set(r){const l=z(r);T("update:modelValue",l)}});Le(async()=>{o.immediate&&await F.value.validate()});const Ve=()=>{s.value="",T("update:modelValue","")},z=r=>!o.maxLength||o.maxLength<1?r:o.maxLenType==="text"?r.slice(0,o.maxLength):o.maxLenType==="byte"?N.trimStringByByte(r,o.maxLength):r,P=r=>{const l=z(r.target.value);l!==r.target.value&&(r.target.value=l),T("update:modelValue",l)};return(r,l)=>(u(),L(p(qe),{ref_key:"veeField",ref:F,modelValue:s.value,"onUpdate:modelValue":l[0]||(l[0]=V=>s.value=V),rules:e.rules,type:e.type,name:e.name},{default:S(({field:V,errors:k})=>[m("span",{class:Se(["ipt",k.length>0?"iptError":""])},[m("input",Ae(V,{type:e.type,placeholder:e.placeholder,readonly:e.readonly,disabled:e.disabled,maxlength:e.maxLenType==="text"?e.maxLength:null,autocomplete:"off",onKeyup:P,onKeydown:P}),null,16,Pe),e.maxLenType?(u(),A("span",Qe,[e.maxLenType==="text"?(u(),A(Q,{key:0},[H(d(s.value.length)+"/"+d(e.maxLength)+" 자 ",1)],64)):(u(),A(Q,{key:1},[H(d(p(N).getByteLength(s.value))+"/"+d(e.maxLength)+" Byte ",1)],64))])):q("",!0),k.length>0?(u(),L(p(ze),{key:1,msg:k[0],placement:e.tooltipPlacement,offsetSkid:20,offsetDistance:25},{default:S(()=>[...l[1]||(l[1]=[m("span",{class:"error"},[m("span",{class:"hide"},"에러")],-1)])]),_:1},8,["msg","placement"])):q("",!0),e.isClear&&s.value.length>0?(u(),L(p(Fe),{key:2,className:"btn_del",onClick:Ve},{default:S(()=>[...l[2]||(l[2]=[m("span",{class:"hide"},"삭제",-1)])]),_:1})):q("",!0)],2)]),_:1},8,["modelValue","rules","type","name"]))}};t.__docgenInfo={exportName:"default",displayName:"element-text",description:"",tags:{},props:[{name:"modelValue",type:{name:"string|number"},defaultValue:{func:!1,value:"''"}},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:"'text'"}},{name:"name",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"rules",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"immediate",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isClear",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"maxLenType",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"maxLength",type:{name:"string|number"},defaultValue:{func:!1,value:"-1"}},{name:"tooltipPlacement",type:{name:"string"},defaultValue:{func:!1,value:"'top-end'"}}],events:[{name:"update:modelValue"}],sourceFiles:["/Users/kokimin/WorkSpace/npm-framework/src/components/form/ElementText/element-text.vue"]};const Ie={title:"Form/ElementText",component:t,tags:["autodocs"],argTypes:{modelValue:{control:"text",description:"입력 값"},type:{control:"select",options:["text","email","password","url","tel","number"],description:"Input 타입"},name:{control:"text",description:"vee-validate 필드 이름"},rules:{control:"text",description:"vee-validate 유효성 검사 규칙"},immediate:{control:"boolean",description:"초기 유효성 검사 실행 여부"},isClear:{control:"boolean",description:"초기화 버튼 표시 여부"},placeholder:{control:"text",description:"플레이스홀더"},readonly:{control:"boolean",description:"읽기 전용 여부"},disabled:{control:"boolean",description:"비활성화 여부"},maxLenType:{control:"select",options:["","text","byte"],description:"최대 길이 타입"},maxLength:{control:"number",description:"최대 길이"}}},i={args:{modelValue:"",type:"text",name:"text-default",placeholder:"입력하세요",isClear:!0},render:e=>({components:{ElementText:t},setup(){const n=a(e.modelValue);return{args:e,value:n}},template:`
      <div>
        <ElementText
          v-model="value"
          :type="args.type"
          :name="args.name"
          :placeholder="args.placeholder"
          :isClear="args.isClear"
        />
        <p style="margin-top: 12px; color: #666;">
          입력된 값: {{ value || '없음' }}
        </p>
      </div>
    `})},c={args:{modelValue:"초기 값",type:"text",name:"text-initial",placeholder:"입력하세요",isClear:!0},render:e=>({components:{ElementText:t},setup(){const n=a(e.modelValue);return{args:e,value:n}},template:`
      <div>
        <ElementText
          v-model="value"
          :type="args.type"
          :name="args.name"
          :placeholder="args.placeholder"
          :isClear="args.isClear"
        />
        <p style="margin-top: 12px; color: #666;">
          입력된 값: {{ value }}
        </p>
      </div>
    `})},g={args:{modelValue:"",type:"email",name:"email",placeholder:"email@example.com",rules:"required|email",isClear:!0},render:e=>({components:{ElementText:t},setup(){const n=a(e.modelValue);return{args:e,value:n}},template:`
      <div>
        <label style="display: block; margin-bottom: 4px; font-weight: bold;">이메일 (필수)</label>
        <ElementText
          v-model="value"
          :type="args.type"
          :name="args.name"
          :placeholder="args.placeholder"
          :rules="args.rules"
          :isClear="args.isClear"
        />
        <p style="margin-top: 12px; color: #666; font-size: 13px;">
          올바른 이메일 형식을 입력하세요.
        </p>
      </div>
    `})},x={args:{modelValue:"",type:"password",name:"password",placeholder:"비밀번호를 입력하세요",rules:"required|min:8",isClear:!1},render:e=>({components:{ElementText:t},setup(){const n=a(e.modelValue);return{args:e,value:n}},template:`
      <div>
        <label style="display: block; margin-bottom: 4px; font-weight: bold;">비밀번호</label>
        <ElementText
          v-model="value"
          :type="args.type"
          :name="args.name"
          :placeholder="args.placeholder"
          :rules="args.rules"
          :isClear="args.isClear"
        />
        <p style="margin-top: 12px; color: #666; font-size: 13px;">
          최소 8자 이상 입력하세요.
        </p>
      </div>
    `})},y={args:{modelValue:"",type:"text",name:"text-maxlength",placeholder:"최대 20자",maxLenType:"text",maxLength:20,isClear:!0},render:e=>({components:{ElementText:t},setup(){const n=a(e.modelValue);return{args:e,value:n}},template:`
      <div>
        <label style="display: block; margin-bottom: 4px; font-weight: bold;">
          제목 (최대 20자)
        </label>
        <ElementText
          v-model="value"
          :type="args.type"
          :name="args.name"
          :placeholder="args.placeholder"
          :maxLenType="args.maxLenType"
          :maxLength="args.maxLength"
          :isClear="args.isClear"
        />
        <p style="margin-top: 12px; color: #666; font-size: 13px;">
          글자 수 제한이 적용됩니다.
        </p>
      </div>
    `})},C={args:{modelValue:"",type:"text",name:"text-maxbyte",placeholder:"최대 30 Byte",maxLenType:"byte",maxLength:30,isClear:!0},render:e=>({components:{ElementText:t},setup(){const n=a(e.modelValue);return{args:e,value:n}},template:`
      <div>
        <label style="display: block; margin-bottom: 4px; font-weight: bold;">
          이름 (최대 30 Byte)
        </label>
        <ElementText
          v-model="value"
          :type="args.type"
          :name="args.name"
          :placeholder="args.placeholder"
          :maxLenType="args.maxLenType"
          :maxLength="args.maxLength"
          :isClear="args.isClear"
        />
        <p style="margin-top: 12px; color: #666; font-size: 13px;">
          한글은 2byte, 영문/숫자는 1byte로 계산됩니다.
        </p>
      </div>
    `})},b={args:{modelValue:"",type:"text",name:"text-required",rules:"required",placeholder:"필수 입력",immediate:!1,isClear:!0},render:e=>({components:{ElementText:t},setup(){const n=a(e.modelValue);return{args:e,value:n}},template:`
      <div>
        <label style="display: block; margin-bottom: 4px; font-weight: bold;">이름 (필수)</label>
        <ElementText
          v-model="value"
          :type="args.type"
          :name="args.name"
          :rules="args.rules"
          :placeholder="args.placeholder"
          :immediate="args.immediate"
          :isClear="args.isClear"
        />
        <p style="margin-top: 12px; color: #666; font-size: 13px;">
          입력하지 않으면 에러 툴팁이 표시됩니다.
        </p>
      </div>
    `})},h={render:()=>({components:{ElementText:t},setup(){return{phone:a("")}},template:`
      <div style="max-width: 400px;">
        <label style="display: block; margin-bottom: 4px; font-weight: bold;">전화번호</label>
        <ElementText
          v-model="phone"
          type="tel"
          name="phone"
          placeholder="010-1234-5678"
          :isClear="true"
        />
        <p style="margin-top: 12px; color: #666; font-size: 13px;">
          입력된 번호: {{ phone || '없음' }}
        </p>
      </div>
    `})},v={render:()=>({components:{ElementText:t},setup(){return{url:a("")}},template:`
      <div style="max-width: 400px;">
        <label style="display: block; margin-bottom: 4px; font-weight: bold;">웹사이트</label>
        <ElementText
          v-model="url"
          type="url"
          name="website"
          placeholder="https://example.com"
          rules="url"
          :isClear="true"
        />
        <p style="margin-top: 12px; color: #666; font-size: 13px;">
          URL 형식으로 입력하세요.
        </p>
      </div>
    `})},f={args:{modelValue:"비활성화된 텍스트",type:"text",name:"text-disabled",disabled:!0,isClear:!1},render:e=>({components:{ElementText:t},setup(){const n=a(e.modelValue);return{args:e,value:n}},template:`
      <div>
        <ElementText
          v-model="value"
          :type="args.type"
          :name="args.name"
          :disabled="args.disabled"
          :isClear="args.isClear"
        />
        <p style="margin-top: 12px; color: #666;">
          비활성화된 상태입니다.
        </p>
      </div>
    `})},B={args:{modelValue:"읽기 전용 텍스트",type:"text",name:"text-readonly",readonly:!0,isClear:!1},render:e=>({components:{ElementText:t},setup(){const n=a(e.modelValue);return{args:e,value:n}},template:`
      <div>
        <ElementText
          v-model="value"
          :type="args.type"
          :name="args.name"
          :readonly="args.readonly"
          :isClear="args.isClear"
        />
        <p style="margin-top: 12px; color: #666;">
          읽기 전용 상태입니다.
        </p>
      </div>
    `})},D={render:()=>({components:{ElementText:t},setup(){const e=a({email:"",password:""});return{formData:e,handleSubmit:()=>{console.log("Login:",e.value),alert(`로그인 시도

이메일: ${e.value.email}
비밀번호: ${e.value.password?"●●●●●●●●":"미입력"}`)}}},template:`
        <div style="max-width: 400px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h3 style="margin: 0 0 20px 0;">로그인</h3>

        <div style="margin-bottom: 16px;">
          <label style="display: block; margin-bottom: 4px; font-weight: bold;">이메일</label>
          <ElementText
            v-model="formData.email"
            type="email"
            name="login-email"
            placeholder="email@example.com"
            rules="required|email"
          :isClear="true"
          />
        </div>

        <div style="margin-bottom: 20px;">
          <label style="display: block; margin-bottom: 4px; font-weight: bold;">비밀번호</label>
          <ElementText
            v-model="formData.password"
            type="password"
            name="login-password"
            placeholder="비밀번호"
            rules="required|min:8"
          :isClear="false"
          />
        </div>

        <button
          type="button"
          @click="handleSubmit"
        style="width: 100%; padding: 12px; background: #1976d2; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;"
          >
          로그인
          </button>
      </div>
        `})},w={render:()=>({components:{ElementText:t},setup(){const e=a({name:"",email:"",password:"",confirmPassword:"",phone:""});return{formData:e,handleSubmit:()=>{if(e.value.password!==e.value.confirmPassword){alert("비밀번호가 일치하지 않습니다.");return}console.log("Signup:",e.value),alert("회원가입이 완료되었습니다!")}}},template:`
        <div style="max-width: 500px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h3 style="margin: 0 0 20px 0;">회원가입</h3>

        <div style="margin-bottom: 16px;">
          <label style="display: block; margin-bottom: 4px; font-weight: bold;">이름</label>
          <ElementText
            v-model="formData.name"
            type="text"
            name="signup-name"
            placeholder="홍길동"
            rules="required"
            maxLenType="byte"
          :maxLength="30"
          :isClear="true"
          />
        </div>

        <div style="margin-bottom: 16px;">
          <label style="display: block; margin-bottom: 4px; font-weight: bold;">이메일</label>
          <ElementText
            v-model="formData.email"
            type="email"
            name="signup-email"
            placeholder="email@example.com"
            rules="required|email"
          :isClear="true"
          />
        </div>

        <div style="margin-bottom: 16px;">
          <label style="display: block; margin-bottom: 4px; font-weight: bold;">비밀번호</label>
          <ElementText
            v-model="formData.password"
            type="password"
            name="signup-password"
            placeholder="8자 이상"
            rules="required|min:8"
          :isClear="false"
          />
        </div>

        <div style="margin-bottom: 16px;">
          <label style="display: block; margin-bottom: 4px; font-weight: bold;">비밀번호 확인</label>
          <ElementText
            v-model="formData.confirmPassword"
            type="password"
            name="signup-confirm-password"
            placeholder="비밀번호 재입력"
            rules="required"
          :isClear="false"
          />
        </div>

        <div style="margin-bottom: 20px;">
          <label style="display: block; margin-bottom: 4px; font-weight: bold;">전화번호</label>
          <ElementText
            v-model="formData.phone"
            type="tel"
            name="signup-phone"
            placeholder="010-1234-5678"
          :isClear="true"
          />
        </div>

        <button
          type="button"
          @click="handleSubmit"
        style="width: 100%; padding: 12px; background: #1976d2; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;"
          >
          가입하기
          </button>
      </div>
        `})},E={render:()=>({components:{ElementText:t},setup(){const e=a(""),n=a([]);return{searchQuery:e,searchHistory:n,handleSearch:()=>{if(!e.value){alert("검색어를 입력하세요.");return}n.value.unshift(e.value),console.log("Searching for:",e.value),e.value=""}}},template:`
        <div style="max-width: 600px;">
          <div style="display: flex; gap: 8px;">
          <div style="flex: 1;">
          <ElementText
        v-model="searchQuery"
        type="text"
        name="search"
        placeholder="검색어를 입력하세요"
        maxLenType="text"
      :maxLength="50"
      :isClear="true"
      @keyup.enter="handleSearch"
          />
          </div>
        <button
            @click="handleSearch"
        style="padding: 0 20px; background: #1976d2; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;"
          >
          검색
          </button>
      </div>

        <div v-if="searchHistory.length > 0" style="margin-top: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <p style="margin: 0 0 8px 0; font-weight: bold;">최근 검색어</p>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            <span
              v-for="(query, index) in searchHistory.slice(0, 5)"
            :key="index"
            style="padding: 4px 12px; background: white; border-radius: 16px; font-size: 13px; cursor: pointer;"
            @click="searchQuery = query"
            >
            {{ query }}
          </span>
        </div>
      </div>
      </div>
        `})};var M,R,U;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    type: 'text',
    name: 'text-default',
    placeholder: '입력하세요',
    isClear: true
  },
  render: args => ({
    components: {
      ElementText
    },
    setup() {
      const value = ref(args.modelValue);
      return {
        args,
        value
      };
    },
    template: \`
      <div>
        <ElementText
          v-model="value"
          :type="args.type"
          :name="args.name"
          :placeholder="args.placeholder"
          :isClear="args.isClear"
        />
        <p style="margin-top: 12px; color: #666;">
          입력된 값: {{ value || '없음' }}
        </p>
      </div>
    \`
  })
}`,...(U=(R=i.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var $,I,W;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    modelValue: '초기 값',
    type: 'text',
    name: 'text-initial',
    placeholder: '입력하세요',
    isClear: true
  },
  render: args => ({
    components: {
      ElementText
    },
    setup() {
      const value = ref(args.modelValue);
      return {
        args,
        value
      };
    },
    template: \`
      <div>
        <ElementText
          v-model="value"
          :type="args.type"
          :name="args.name"
          :placeholder="args.placeholder"
          :isClear="args.isClear"
        />
        <p style="margin-top: 12px; color: #666;">
          입력된 값: {{ value }}
        </p>
      </div>
    \`
  })
}`,...(W=(I=c.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var K,O,j;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    type: 'email',
    name: 'email',
    placeholder: 'email@example.com',
    rules: 'required|email',
    isClear: true
  },
  render: args => ({
    components: {
      ElementText
    },
    setup() {
      const value = ref(args.modelValue);
      return {
        args,
        value
      };
    },
    template: \`
      <div>
        <label style="display: block; margin-bottom: 4px; font-weight: bold;">이메일 (필수)</label>
        <ElementText
          v-model="value"
          :type="args.type"
          :name="args.name"
          :placeholder="args.placeholder"
          :rules="args.rules"
          :isClear="args.isClear"
        />
        <p style="margin-top: 12px; color: #666; font-size: 13px;">
          올바른 이메일 형식을 입력하세요.
        </p>
      </div>
    \`
  })
}`,...(j=(O=g.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var G,J,X;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    type: 'password',
    name: 'password',
    placeholder: '비밀번호를 입력하세요',
    rules: 'required|min:8',
    isClear: false
  },
  render: args => ({
    components: {
      ElementText
    },
    setup() {
      const value = ref(args.modelValue);
      return {
        args,
        value
      };
    },
    template: \`
      <div>
        <label style="display: block; margin-bottom: 4px; font-weight: bold;">비밀번호</label>
        <ElementText
          v-model="value"
          :type="args.type"
          :name="args.name"
          :placeholder="args.placeholder"
          :rules="args.rules"
          :isClear="args.isClear"
        />
        <p style="margin-top: 12px; color: #666; font-size: 13px;">
          최소 8자 이상 입력하세요.
        </p>
      </div>
    \`
  })
}`,...(X=(J=x.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var Y,Z,_;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    type: 'text',
    name: 'text-maxlength',
    placeholder: '최대 20자',
    maxLenType: 'text',
    maxLength: 20,
    isClear: true
  },
  render: args => ({
    components: {
      ElementText
    },
    setup() {
      const value = ref(args.modelValue);
      return {
        args,
        value
      };
    },
    template: \`
      <div>
        <label style="display: block; margin-bottom: 4px; font-weight: bold;">
          제목 (최대 20자)
        </label>
        <ElementText
          v-model="value"
          :type="args.type"
          :name="args.name"
          :placeholder="args.placeholder"
          :maxLenType="args.maxLenType"
          :maxLength="args.maxLength"
          :isClear="args.isClear"
        />
        <p style="margin-top: 12px; color: #666; font-size: 13px;">
          글자 수 제한이 적용됩니다.
        </p>
      </div>
    \`
  })
}`,...(_=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:_.source}}};var ee,ne,ae;C.parameters={...C.parameters,docs:{...(ee=C.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    type: 'text',
    name: 'text-maxbyte',
    placeholder: '최대 30 Byte',
    maxLenType: 'byte',
    maxLength: 30,
    isClear: true
  },
  render: args => ({
    components: {
      ElementText
    },
    setup() {
      const value = ref(args.modelValue);
      return {
        args,
        value
      };
    },
    template: \`
      <div>
        <label style="display: block; margin-bottom: 4px; font-weight: bold;">
          이름 (최대 30 Byte)
        </label>
        <ElementText
          v-model="value"
          :type="args.type"
          :name="args.name"
          :placeholder="args.placeholder"
          :maxLenType="args.maxLenType"
          :maxLength="args.maxLength"
          :isClear="args.isClear"
        />
        <p style="margin-top: 12px; color: #666; font-size: 13px;">
          한글은 2byte, 영문/숫자는 1byte로 계산됩니다.
        </p>
      </div>
    \`
  })
}`,...(ae=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var te,le,re;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    type: 'text',
    name: 'text-required',
    rules: 'required',
    placeholder: '필수 입력',
    immediate: false,
    isClear: true
  },
  render: args => ({
    components: {
      ElementText
    },
    setup() {
      const value = ref(args.modelValue);
      return {
        args,
        value
      };
    },
    template: \`
      <div>
        <label style="display: block; margin-bottom: 4px; font-weight: bold;">이름 (필수)</label>
        <ElementText
          v-model="value"
          :type="args.type"
          :name="args.name"
          :rules="args.rules"
          :placeholder="args.placeholder"
          :immediate="args.immediate"
          :isClear="args.isClear"
        />
        <p style="margin-top: 12px; color: #666; font-size: 13px;">
          입력하지 않으면 에러 툴팁이 표시됩니다.
        </p>
      </div>
    \`
  })
}`,...(re=(le=b.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};var oe,se,ue;h.parameters={...h.parameters,docs:{...(oe=h.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementText
    },
    setup() {
      const phone = ref('');
      return {
        phone
      };
    },
    template: \`
      <div style="max-width: 400px;">
        <label style="display: block; margin-bottom: 4px; font-weight: bold;">전화번호</label>
        <ElementText
          v-model="phone"
          type="tel"
          name="phone"
          placeholder="010-1234-5678"
          :isClear="true"
        />
        <p style="margin-top: 12px; color: #666; font-size: 13px;">
          입력된 번호: {{ phone || '없음' }}
        </p>
      </div>
    \`
  })
}`,...(ue=(se=h.parameters)==null?void 0:se.docs)==null?void 0:ue.source}}};var me,pe,de;v.parameters={...v.parameters,docs:{...(me=v.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementText
    },
    setup() {
      const url = ref('');
      return {
        url
      };
    },
    template: \`
      <div style="max-width: 400px;">
        <label style="display: block; margin-bottom: 4px; font-weight: bold;">웹사이트</label>
        <ElementText
          v-model="url"
          type="url"
          name="website"
          placeholder="https://example.com"
          rules="url"
          :isClear="true"
        />
        <p style="margin-top: 12px; color: #666; font-size: 13px;">
          URL 형식으로 입력하세요.
        </p>
      </div>
    \`
  })
}`,...(de=(pe=v.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var ie,ce,ge;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    modelValue: '비활성화된 텍스트',
    type: 'text',
    name: 'text-disabled',
    disabled: true,
    isClear: false
  },
  render: args => ({
    components: {
      ElementText
    },
    setup() {
      const value = ref(args.modelValue);
      return {
        args,
        value
      };
    },
    template: \`
      <div>
        <ElementText
          v-model="value"
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
}`,...(ge=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:ge.source}}};var xe,ye,Ce;B.parameters={...B.parameters,docs:{...(xe=B.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    modelValue: '읽기 전용 텍스트',
    type: 'text',
    name: 'text-readonly',
    readonly: true,
    isClear: false
  },
  render: args => ({
    components: {
      ElementText
    },
    setup() {
      const value = ref(args.modelValue);
      return {
        args,
        value
      };
    },
    template: \`
      <div>
        <ElementText
          v-model="value"
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
}`,...(Ce=(ye=B.parameters)==null?void 0:ye.docs)==null?void 0:Ce.source}}};var be,he,ve;D.parameters={...D.parameters,docs:{...(be=D.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementText
    },
    setup() {
      const formData = ref({
        email: '',
        password: ''
      });
      const handleSubmit = () => {
        console.log('Login:', formData.value);
        alert(\`로그인 시도\\n\\n이메일: \${formData.value.email}\\n비밀번호: \${formData.value.password ? '●●●●●●●●' : '미입력'}\`);
      };
      return {
        formData,
        handleSubmit
      };
    },
    template: \`
        <div style="max-width: 400px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h3 style="margin: 0 0 20px 0;">로그인</h3>

        <div style="margin-bottom: 16px;">
          <label style="display: block; margin-bottom: 4px; font-weight: bold;">이메일</label>
          <ElementText
            v-model="formData.email"
            type="email"
            name="login-email"
            placeholder="email@example.com"
            rules="required|email"
          :isClear="true"
          />
        </div>

        <div style="margin-bottom: 20px;">
          <label style="display: block; margin-bottom: 4px; font-weight: bold;">비밀번호</label>
          <ElementText
            v-model="formData.password"
            type="password"
            name="login-password"
            placeholder="비밀번호"
            rules="required|min:8"
          :isClear="false"
          />
        </div>

        <button
          type="button"
          @click="handleSubmit"
        style="width: 100%; padding: 12px; background: #1976d2; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;"
          >
          로그인
          </button>
      </div>
        \`
  })
}`,...(ve=(he=D.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var fe,Be,De;w.parameters={...w.parameters,docs:{...(fe=w.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementText
    },
    setup() {
      const formData = ref({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: ''
      });
      const handleSubmit = () => {
        if (formData.value.password !== formData.value.confirmPassword) {
          alert('비밀번호가 일치하지 않습니다.');
          return;
        }
        console.log('Signup:', formData.value);
        alert('회원가입이 완료되었습니다!');
      };
      return {
        formData,
        handleSubmit
      };
    },
    template: \`
        <div style="max-width: 500px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h3 style="margin: 0 0 20px 0;">회원가입</h3>

        <div style="margin-bottom: 16px;">
          <label style="display: block; margin-bottom: 4px; font-weight: bold;">이름</label>
          <ElementText
            v-model="formData.name"
            type="text"
            name="signup-name"
            placeholder="홍길동"
            rules="required"
            maxLenType="byte"
          :maxLength="30"
          :isClear="true"
          />
        </div>

        <div style="margin-bottom: 16px;">
          <label style="display: block; margin-bottom: 4px; font-weight: bold;">이메일</label>
          <ElementText
            v-model="formData.email"
            type="email"
            name="signup-email"
            placeholder="email@example.com"
            rules="required|email"
          :isClear="true"
          />
        </div>

        <div style="margin-bottom: 16px;">
          <label style="display: block; margin-bottom: 4px; font-weight: bold;">비밀번호</label>
          <ElementText
            v-model="formData.password"
            type="password"
            name="signup-password"
            placeholder="8자 이상"
            rules="required|min:8"
          :isClear="false"
          />
        </div>

        <div style="margin-bottom: 16px;">
          <label style="display: block; margin-bottom: 4px; font-weight: bold;">비밀번호 확인</label>
          <ElementText
            v-model="formData.confirmPassword"
            type="password"
            name="signup-confirm-password"
            placeholder="비밀번호 재입력"
            rules="required"
          :isClear="false"
          />
        </div>

        <div style="margin-bottom: 20px;">
          <label style="display: block; margin-bottom: 4px; font-weight: bold;">전화번호</label>
          <ElementText
            v-model="formData.phone"
            type="tel"
            name="signup-phone"
            placeholder="010-1234-5678"
          :isClear="true"
          />
        </div>

        <button
          type="button"
          @click="handleSubmit"
        style="width: 100%; padding: 12px; background: #1976d2; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;"
          >
          가입하기
          </button>
      </div>
        \`
  })
}`,...(De=(Be=w.parameters)==null?void 0:Be.docs)==null?void 0:De.source}}};var we,Ee,Te;E.parameters={...E.parameters,docs:{...(we=E.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementText
    },
    setup() {
      const searchQuery = ref('');
      const searchHistory = ref([]);
      const handleSearch = () => {
        if (!searchQuery.value) {
          alert('검색어를 입력하세요.');
          return;
        }
        searchHistory.value.unshift(searchQuery.value);
        console.log('Searching for:', searchQuery.value);
        searchQuery.value = '';
      };
      return {
        searchQuery,
        searchHistory,
        handleSearch
      };
    },
    template: \`
        <div style="max-width: 600px;">
          <div style="display: flex; gap: 8px;">
          <div style="flex: 1;">
          <ElementText
        v-model="searchQuery"
        type="text"
        name="search"
        placeholder="검색어를 입력하세요"
        maxLenType="text"
      :maxLength="50"
      :isClear="true"
      @keyup.enter="handleSearch"
          />
          </div>
        <button
            @click="handleSearch"
        style="padding: 0 20px; background: #1976d2; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;"
          >
          검색
          </button>
      </div>

        <div v-if="searchHistory.length > 0" style="margin-top: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <p style="margin: 0 0 8px 0; font-weight: bold;">최근 검색어</p>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            <span
              v-for="(query, index) in searchHistory.slice(0, 5)"
            :key="index"
            style="padding: 4px 12px; background: white; border-radius: 16px; font-size: 13px; cursor: pointer;"
            @click="searchQuery = query"
            >
            {{ query }}
          </span>
        </div>
      </div>
      </div>
        \`
  })
}`,...(Te=(Ee=E.parameters)==null?void 0:Ee.docs)==null?void 0:Te.source}}};const We=["Default","WithInitialValue","Email","Password","MaxLengthText","MaxLengthByte","WithValidation","PhoneNumber","URL","Disabled","Readonly","LoginForm","SignupForm","SearchBar"];export{i as Default,f as Disabled,g as Email,D as LoginForm,C as MaxLengthByte,y as MaxLengthText,x as Password,h as PhoneNumber,B as Readonly,E as SearchBar,w as SignupForm,v as URL,c as WithInitialValue,b as WithValidation,We as __namedExportsOrder,Ie as default};
