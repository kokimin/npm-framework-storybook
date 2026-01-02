import{m as u,a as re,f as ie,s as se,v as de,u as R,o as i,x as s,c as h,y as pe,F as Ce,C as me,E as ce,G as ve,A as V,z as ge}from"./vue.esm-bundler-C23JohzN.js";import{Q as be}from"./index-C8W6ez_R.js";import{F as Be}from"./vee-validate-rN8_QdDx.js";import"./_commonjsHelpers-Cpj98o6Y.js";const xe=["id","value"],De={class:"text"},ye={key:0,class:"txt_tf txt_error"},a={__name:"element-radio",props:{modelValue:{type:[String,Number],default:""},options:{type:Array,default(){return[]}},rules:{type:String,default:""},name:{type:String,default:""},immediate:{type:Boolean,default:!1}},emits:["update:modelValue","click"],setup(e,{emit:n}){const t=e,o=n,D=be.generateUuid(),y=u(null),l=re({get(){return t.modelValue},set(E){return o("update:modelValue",E)}});return ie(async()=>{t.immediate&&await y.value.validate()}),(E,r)=>(i(),se(R(Be),{ref_key:"veeField",ref:y,modelValue:l.value,"onUpdate:modelValue":r[1]||(r[1]=f=>l.value=f),rules:e.rules,type:"radio",name:e.name},{default:de(({field:f,errors:A})=>[s("div",null,[(i(!0),h(Ce,null,me(e.options,(q,w)=>(i(),h("label",{key:w,class:"radio"},[ce(s("input",{type:"radio",id:`radio-${R(D)}-${w}`,"onUpdate:modelValue":r[0]||(r[0]=le=>l.value=le),value:q.value,class:"hide"},null,8,xe),[[ve,l.value]]),s("span",De,V(q.label),1),s("input",ge({ref_for:!0},f,{type:"hidden"}),null,16)]))),128)),A.length>0?(i(),h("p",ye,V(A[0]),1)):pe("",!0)])]),_:1},8,["modelValue","rules","name"]))}};a.__docgenInfo={exportName:"default",displayName:"element-radio",description:"",tags:{},props:[{name:"modelValue",type:{name:"string|number"},defaultValue:{func:!1,value:"''"}},{name:"options",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"rules",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"name",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"immediate",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"click"}],sourceFiles:["/Users/kokimin/WorkSpace/npm-framework/src/components/form/ElementRadio/element-radio.vue"]};const qe={title:"Form/ElementRadio",component:a,tags:["autodocs"],argTypes:{modelValue:{control:"text",description:"선택된 값"},options:{control:"object",description:"라디오 옵션 배열 [{ label, value }]"},rules:{control:"text",description:"vee-validate 유효성 검사 규칙"},name:{control:"text",description:"vee-validate 필드 이름"},immediate:{control:"boolean",description:"초기 유효성 검사 실행 여부"}}},d={args:{modelValue:"",name:"radio-default",rules:"",immediate:!1,options:[{label:"옵션 1",value:"option1"},{label:"옵션 2",value:"option2"},{label:"옵션 3",value:"option3"}]},render:e=>({components:{ElementRadio:a},setup(){const n=u(e.modelValue);return{args:e,selected:n}},template:`
      <div>
        <ElementRadio
          v-model="selected"
          :name="args.name"
          :rules="args.rules"
          :immediate="args.immediate"
          :options="args.options"
        />
        <p style="margin-top: 12px; color: #666;">
          선택된 값: {{ selected || '없음' }}
        </p>
      </div>
    `})},p={args:{modelValue:"option2",name:"radio-initial",options:[{label:"옵션 1",value:"option1"},{label:"옵션 2",value:"option2"},{label:"옵션 3",value:"option3"}]},render:e=>({components:{ElementRadio:a},setup(){const n=u(e.modelValue);return{args:e,selected:n}},template:`
      <div>
        <ElementRadio
          v-model="selected"
          :name="args.name"
          :options="args.options"
        />
        <p style="margin-top: 12px; color: #666;">
          선택된 값: {{ selected }}
        </p>
      </div>
    `})},C={args:{modelValue:"",name:"radio-required",rules:"required",immediate:!1,options:[{label:"동의함",value:"agree"},{label:"동의하지 않음",value:"disagree"}]},render:e=>({components:{ElementRadio:a},setup(){const n=u(e.modelValue);return{args:e,selected:n}},template:`
      <div>
        <p style="margin: 0 0 8px 0; font-weight: bold;">약관에 동의하십니까? (필수)</p>
        <ElementRadio
          v-model="selected"
          :name="args.name"
          :rules="args.rules"
          :immediate="args.immediate"
          :options="args.options"
        />
        <p style="margin-top: 12px; color: #666; font-size: 13px;">
          선택하지 않으면 에러 메시지가 표시됩니다.
        </p>
      </div>
    `})},m={args:{modelValue:"",name:"radio-immediate",rules:"required",immediate:!0,options:[{label:"예",value:"yes"},{label:"아니오",value:"no"}]},render:e=>({components:{ElementRadio:a},setup(){const n=u(e.modelValue);return{args:e,selected:n}},template:`
      <div>
        <p style="margin: 0 0 8px 0; font-weight: bold;">선택하세요</p>
        <ElementRadio
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
    `})},c={render:()=>({components:{ElementRadio:a},setup(){return{answer:u(""),options:[{label:"예",value:"yes"},{label:"아니오",value:"no"}]}},template:`
      <div style="max-width: 500px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h3 style="margin: 0 0 16px 0;">질문</h3>
        <p style="margin: 0 0 12px 0;">이 서비스에 만족하십니까?</p>

        <ElementRadio
          v-model="answer"
          name="satisfaction"
          :options="options"
        />

        <div v-if="answer" style="margin-top: 16px; padding: 12px; border-radius: 4px;" :style="{ background: answer === 'yes' ? '#e8f5e9' : '#ffebee' }">
          <p style="margin: 0;" :style="{ color: answer === 'yes' ? '#2e7d32' : '#c62828' }">
            {{ answer === 'yes' ? '감사합니다! 😊' : '더 나은 서비스를 제공하도록 노력하겠습니다. 🙏' }}
          </p>
        </div>
      </div>
    `})},v={render:()=>({components:{ElementRadio:a},setup(){return{method:u(""),options:[{label:"신용카드",value:"card"},{label:"계좌이체",value:"transfer"},{label:"무통장입금",value:"deposit"},{label:"휴대폰 결제",value:"mobile"}],methodInfo:{card:"신용카드 결제는 즉시 처리됩니다.",transfer:"실시간 계좌이체로 안전하게 결제하세요.",deposit:"입금 확인 후 상품이 발송됩니다.",mobile:"휴대폰 요금에 합산 청구됩니다."}}},template:`
      <div style="max-width: 500px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h3 style="margin: 0 0 16px 0;">결제 수단 선택</h3>

        <ElementRadio
          v-model="method"
          name="payment-method"
          :options="options"
        />

        <div v-if="method" style="margin-top: 16px; padding: 12px; background: #e3f2fd; border-radius: 4px;">
          <p style="margin: 0; color: #1565c0;">
            ℹ️ {{ methodInfo[method] }}
          </p>
        </div>
      </div>
    `})},g={render:()=>({components:{ElementRadio:a},setup(){const e=u("standard"),n=[{label:"일반배송 (무료)",value:"standard"},{label:"빠른배송 (+3,000원)",value:"fast"},{label:"당일배송 (+5,000원)",value:"same-day"}],t={standard:0,fast:3e3,"same-day":5e3},o=5e4;return{speed:e,options:n,productPrice:o,totalPrice:()=>o+t[e.value]}},template:`
      <div style="max-width: 500px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h3 style="margin: 0 0 16px 0;">배송 방법 선택</h3>

        <ElementRadio
          v-model="speed"
          name="shipping-speed"
          :options="options"
        />

        <div style="margin-top: 16px; padding: 16px; background: #f5f5f5; border-radius: 4px;">
          <p style="margin: 0 0 8px 0;">상품 금액: {{ productPrice.toLocaleString() }}원</p>
          <p style="margin: 0 0 8px 0;">배송비: {{ (totalPrice() - productPrice).toLocaleString() }}원</p>
          <p style="margin: 0; font-size: 18px; font-weight: bold; color: #1976d2;">
            총 결제금액: {{ totalPrice().toLocaleString() }}원
          </p>
        </div>
      </div>
    `})},b={render:()=>({components:{ElementRadio:a},setup(){const e=u(""),n=u(""),t=u("");return{q1:e,q2:n,q3:t,q1Options:[{label:"매우 만족",value:"5"},{label:"만족",value:"4"},{label:"보통",value:"3"},{label:"불만족",value:"2"},{label:"매우 불만족",value:"1"}],q2Options:[{label:"매일",value:"daily"},{label:"주 2-3회",value:"weekly"},{label:"월 1-2회",value:"monthly"},{label:"거의 사용 안 함",value:"rarely"}],q3Options:[{label:"예",value:"yes"},{label:"아니오",value:"no"},{label:"잘 모르겠음",value:"unsure"}],handleSubmit:()=>{if(!e.value||!n.value||!t.value){alert("모든 질문에 답변해주세요.");return}console.log("Survey:",{q1:e.value,q2:n.value,q3:t.value}),alert("설문조사가 제출되었습니다. 감사합니다!")}}},template:`
      <div style="max-width: 600px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h3 style="margin: 0 0 20px 0;">서비스 만족도 설문조사</h3>

        <div style="margin-bottom: 24px;">
          <p style="margin: 0 0 8px 0; font-weight: bold;">1. 서비스에 얼마나 만족하시나요?</p>
          <ElementRadio
            v-model="q1"
            name="q1"
            :options="q1Options"
          />
        </div>

        <div style="margin-bottom: 24px;">
          <p style="margin: 0 0 8px 0; font-weight: bold;">2. 서비스를 얼마나 자주 이용하시나요?</p>
          <ElementRadio
            v-model="q2"
            name="q2"
            :options="q2Options"
          />
        </div>

        <div style="margin-bottom: 24px;">
          <p style="margin: 0 0 8px 0; font-weight: bold;">3. 이 서비스를 친구에게 추천하시겠습니까?</p>
          <ElementRadio
            v-model="q3"
            name="q3"
            :options="q3Options"
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
          <p style="margin: 0 0 4px 0;"><strong>응답 현황:</strong></p>
          <p style="margin: 4px 0;">질문 1: {{ q1 || '미응답' }}</p>
          <p style="margin: 4px 0;">질문 2: {{ q2 || '미응답' }}</p>
          <p style="margin: 4px 0;">질문 3: {{ q3 || '미응답' }}</p>
        </div>
      </div>
    `})},B={render:()=>({components:{ElementRadio:a},setup(){return{userType:u(""),options:[{label:"개인 회원",value:"individual"},{label:"기업 회원",value:"business"},{label:"학생",value:"student"}]}},template:`
      <div style="max-width: 500px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h3 style="margin: 0 0 16px 0;">회원 유형 선택</h3>

        <ElementRadio
          v-model="userType"
          name="user-type"
          :options="options"
        />

        <div v-if="userType === 'individual'" style="margin-top: 16px; padding: 12px; background: #e3f2fd; border-radius: 4px;">
          <h4 style="margin: 0 0 8px 0; color: #1565c0;">개인 회원 혜택</h4>
          <ul style="margin: 0; padding-left: 20px; color: #1565c0;">
            <li>월 최대 5회 무료 배송</li>
            <li>포인트 적립 1%</li>
            <li>생일 쿠폰 제공</li>
          </ul>
        </div>

        <div v-if="userType === 'business'" style="margin-top: 16px; padding: 12px; background: #f3e5f5; border-radius: 4px;">
          <h4 style="margin: 0 0 8px 0; color: #7b1fa2;">기업 회원 혜택</h4>
          <ul style="margin: 0; padding-left: 20px; color: #7b1fa2;">
            <li>무제한 무료 배송</li>
            <li>포인트 적립 3%</li>
            <li>전담 고객지원</li>
            <li>세금계산서 발행</li>
          </ul>
        </div>

        <div v-if="userType === 'student'" style="margin-top: 16px; padding: 12px; background: #fff3e0; border-radius: 4px;">
          <h4 style="margin: 0 0 8px 0; color: #e65100;">학생 회원 혜택</h4>
          <ul style="margin: 0; padding-left: 20px; color: #e65100;">
            <li>전 상품 10% 할인</li>
            <li>포인트 적립 2%</li>
            <li>학기별 특별 프로모션</li>
          </ul>
        </div>
      </div>
    `})},x={render:()=>({components:{ElementRadio:a},setup(){return{country:u(""),options:[{label:"대한민국",value:"kr"},{label:"미국",value:"us"},{label:"일본",value:"jp"},{label:"중국",value:"cn"},{label:"영국",value:"uk"},{label:"프랑스",value:"fr"},{label:"독일",value:"de"},{label:"캐나다",value:"ca"},{label:"호주",value:"au"},{label:"기타",value:"etc"}]}},template:`
      <div>
        <h4 style="margin: 0 0 12px 0;">국가 선택</h4>
        <div style="max-height: 300px; overflow-y: auto; padding: 12px; border: 1px solid #ddd; border-radius: 4px;">
          <ElementRadio
            v-model="country"
            name="country"
            :options="options"
          />
        </div>
        <p style="margin-top: 12px; color: #666;">
          선택된 국가: {{ country || '없음' }}
        </p>
      </div>
    `})};var k,F,S;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    name: 'radio-default',
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
      ElementRadio
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
        <ElementRadio
          v-model="selected"
          :name="args.name"
          :rules="args.rules"
          :immediate="args.immediate"
          :options="args.options"
        />
        <p style="margin-top: 12px; color: #666;">
          선택된 값: {{ selected || '없음' }}
        </p>
      </div>
    \`
  })
}`,...(S=(F=d.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};var O,P,T;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    modelValue: 'option2',
    name: 'radio-initial',
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
      ElementRadio
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
        <ElementRadio
          v-model="selected"
          :name="args.name"
          :options="args.options"
        />
        <p style="margin-top: 12px; color: #666;">
          선택된 값: {{ selected }}
        </p>
      </div>
    \`
  })
}`,...(T=(P=p.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var _,I,z;C.parameters={...C.parameters,docs:{...(_=C.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    name: 'radio-required',
    rules: 'required',
    immediate: false,
    options: [{
      label: '동의함',
      value: 'agree'
    }, {
      label: '동의하지 않음',
      value: 'disagree'
    }]
  },
  render: args => ({
    components: {
      ElementRadio
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
        <p style="margin: 0 0 8px 0; font-weight: bold;">약관에 동의하십니까? (필수)</p>
        <ElementRadio
          v-model="selected"
          :name="args.name"
          :rules="args.rules"
          :immediate="args.immediate"
          :options="args.options"
        />
        <p style="margin-top: 12px; color: #666; font-size: 13px;">
          선택하지 않으면 에러 메시지가 표시됩니다.
        </p>
      </div>
    \`
  })
}`,...(z=(I=C.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var L,N,M;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    name: 'radio-immediate',
    rules: 'required',
    immediate: true,
    options: [{
      label: '예',
      value: 'yes'
    }, {
      label: '아니오',
      value: 'no'
    }]
  },
  render: args => ({
    components: {
      ElementRadio
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
        <p style="margin: 0 0 8px 0; font-weight: bold;">선택하세요</p>
        <ElementRadio
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
}`,...(M=(N=m.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var Q,W,U;c.parameters={...c.parameters,docs:{...(Q=c.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementRadio
    },
    setup() {
      const answer = ref('');
      const options = [{
        label: '예',
        value: 'yes'
      }, {
        label: '아니오',
        value: 'no'
      }];
      return {
        answer,
        options
      };
    },
    template: \`
      <div style="max-width: 500px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h3 style="margin: 0 0 16px 0;">질문</h3>
        <p style="margin: 0 0 12px 0;">이 서비스에 만족하십니까?</p>

        <ElementRadio
          v-model="answer"
          name="satisfaction"
          :options="options"
        />

        <div v-if="answer" style="margin-top: 16px; padding: 12px; border-radius: 4px;" :style="{ background: answer === 'yes' ? '#e8f5e9' : '#ffebee' }">
          <p style="margin: 0;" :style="{ color: answer === 'yes' ? '#2e7d32' : '#c62828' }">
            {{ answer === 'yes' ? '감사합니다! 😊' : '더 나은 서비스를 제공하도록 노력하겠습니다. 🙏' }}
          </p>
        </div>
      </div>
    \`
  })
}`,...(U=(W=c.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};var j,Y,$;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementRadio
    },
    setup() {
      const method = ref('');
      const options = [{
        label: '신용카드',
        value: 'card'
      }, {
        label: '계좌이체',
        value: 'transfer'
      }, {
        label: '무통장입금',
        value: 'deposit'
      }, {
        label: '휴대폰 결제',
        value: 'mobile'
      }];
      const methodInfo = {
        card: '신용카드 결제는 즉시 처리됩니다.',
        transfer: '실시간 계좌이체로 안전하게 결제하세요.',
        deposit: '입금 확인 후 상품이 발송됩니다.',
        mobile: '휴대폰 요금에 합산 청구됩니다.'
      };
      return {
        method,
        options,
        methodInfo
      };
    },
    template: \`
      <div style="max-width: 500px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h3 style="margin: 0 0 16px 0;">결제 수단 선택</h3>

        <ElementRadio
          v-model="method"
          name="payment-method"
          :options="options"
        />

        <div v-if="method" style="margin-top: 16px; padding: 12px; background: #e3f2fd; border-radius: 4px;">
          <p style="margin: 0; color: #1565c0;">
            ℹ️ {{ methodInfo[method] }}
          </p>
        </div>
      </div>
    \`
  })
}`,...($=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var G,H,J;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementRadio
    },
    setup() {
      const speed = ref('standard');
      const options = [{
        label: '일반배송 (무료)',
        value: 'standard'
      }, {
        label: '빠른배송 (+3,000원)',
        value: 'fast'
      }, {
        label: '당일배송 (+5,000원)',
        value: 'same-day'
      }];
      const prices = {
        standard: 0,
        fast: 3000,
        'same-day': 5000
      };
      const productPrice = 50000;
      const totalPrice = () => productPrice + prices[speed.value];
      return {
        speed,
        options,
        productPrice,
        totalPrice
      };
    },
    template: \`
      <div style="max-width: 500px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h3 style="margin: 0 0 16px 0;">배송 방법 선택</h3>

        <ElementRadio
          v-model="speed"
          name="shipping-speed"
          :options="options"
        />

        <div style="margin-top: 16px; padding: 16px; background: #f5f5f5; border-radius: 4px;">
          <p style="margin: 0 0 8px 0;">상품 금액: {{ productPrice.toLocaleString() }}원</p>
          <p style="margin: 0 0 8px 0;">배송비: {{ (totalPrice() - productPrice).toLocaleString() }}원</p>
          <p style="margin: 0; font-size: 18px; font-weight: bold; color: #1976d2;">
            총 결제금액: {{ totalPrice().toLocaleString() }}원
          </p>
        </div>
      </div>
    \`
  })
}`,...(J=(H=g.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,X,Z;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementRadio
    },
    setup() {
      const q1 = ref('');
      const q2 = ref('');
      const q3 = ref('');
      const q1Options = [{
        label: '매우 만족',
        value: '5'
      }, {
        label: '만족',
        value: '4'
      }, {
        label: '보통',
        value: '3'
      }, {
        label: '불만족',
        value: '2'
      }, {
        label: '매우 불만족',
        value: '1'
      }];
      const q2Options = [{
        label: '매일',
        value: 'daily'
      }, {
        label: '주 2-3회',
        value: 'weekly'
      }, {
        label: '월 1-2회',
        value: 'monthly'
      }, {
        label: '거의 사용 안 함',
        value: 'rarely'
      }];
      const q3Options = [{
        label: '예',
        value: 'yes'
      }, {
        label: '아니오',
        value: 'no'
      }, {
        label: '잘 모르겠음',
        value: 'unsure'
      }];
      const handleSubmit = () => {
        if (!q1.value || !q2.value || !q3.value) {
          alert('모든 질문에 답변해주세요.');
          return;
        }
        console.log('Survey:', {
          q1: q1.value,
          q2: q2.value,
          q3: q3.value
        });
        alert('설문조사가 제출되었습니다. 감사합니다!');
      };
      return {
        q1,
        q2,
        q3,
        q1Options,
        q2Options,
        q3Options,
        handleSubmit
      };
    },
    template: \`
      <div style="max-width: 600px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h3 style="margin: 0 0 20px 0;">서비스 만족도 설문조사</h3>

        <div style="margin-bottom: 24px;">
          <p style="margin: 0 0 8px 0; font-weight: bold;">1. 서비스에 얼마나 만족하시나요?</p>
          <ElementRadio
            v-model="q1"
            name="q1"
            :options="q1Options"
          />
        </div>

        <div style="margin-bottom: 24px;">
          <p style="margin: 0 0 8px 0; font-weight: bold;">2. 서비스를 얼마나 자주 이용하시나요?</p>
          <ElementRadio
            v-model="q2"
            name="q2"
            :options="q2Options"
          />
        </div>

        <div style="margin-bottom: 24px;">
          <p style="margin: 0 0 8px 0; font-weight: bold;">3. 이 서비스를 친구에게 추천하시겠습니까?</p>
          <ElementRadio
            v-model="q3"
            name="q3"
            :options="q3Options"
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
          <p style="margin: 0 0 4px 0;"><strong>응답 현황:</strong></p>
          <p style="margin: 4px 0;">질문 1: {{ q1 || '미응답' }}</p>
          <p style="margin: 4px 0;">질문 2: {{ q2 || '미응답' }}</p>
          <p style="margin: 4px 0;">질문 3: {{ q3 || '미응답' }}</p>
        </div>
      </div>
    \`
  })
}`,...(Z=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ne,ue;B.parameters={...B.parameters,docs:{...(ee=B.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementRadio
    },
    setup() {
      const userType = ref('');
      const options = [{
        label: '개인 회원',
        value: 'individual'
      }, {
        label: '기업 회원',
        value: 'business'
      }, {
        label: '학생',
        value: 'student'
      }];
      return {
        userType,
        options
      };
    },
    template: \`
      <div style="max-width: 500px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h3 style="margin: 0 0 16px 0;">회원 유형 선택</h3>

        <ElementRadio
          v-model="userType"
          name="user-type"
          :options="options"
        />

        <div v-if="userType === 'individual'" style="margin-top: 16px; padding: 12px; background: #e3f2fd; border-radius: 4px;">
          <h4 style="margin: 0 0 8px 0; color: #1565c0;">개인 회원 혜택</h4>
          <ul style="margin: 0; padding-left: 20px; color: #1565c0;">
            <li>월 최대 5회 무료 배송</li>
            <li>포인트 적립 1%</li>
            <li>생일 쿠폰 제공</li>
          </ul>
        </div>

        <div v-if="userType === 'business'" style="margin-top: 16px; padding: 12px; background: #f3e5f5; border-radius: 4px;">
          <h4 style="margin: 0 0 8px 0; color: #7b1fa2;">기업 회원 혜택</h4>
          <ul style="margin: 0; padding-left: 20px; color: #7b1fa2;">
            <li>무제한 무료 배송</li>
            <li>포인트 적립 3%</li>
            <li>전담 고객지원</li>
            <li>세금계산서 발행</li>
          </ul>
        </div>

        <div v-if="userType === 'student'" style="margin-top: 16px; padding: 12px; background: #fff3e0; border-radius: 4px;">
          <h4 style="margin: 0 0 8px 0; color: #e65100;">학생 회원 혜택</h4>
          <ul style="margin: 0; padding-left: 20px; color: #e65100;">
            <li>전 상품 10% 할인</li>
            <li>포인트 적립 2%</li>
            <li>학기별 특별 프로모션</li>
          </ul>
        </div>
      </div>
    \`
  })
}`,...(ue=(ne=B.parameters)==null?void 0:ne.docs)==null?void 0:ue.source}}};var ae,te,oe;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementRadio
    },
    setup() {
      const country = ref('');
      const options = [{
        label: '대한민국',
        value: 'kr'
      }, {
        label: '미국',
        value: 'us'
      }, {
        label: '일본',
        value: 'jp'
      }, {
        label: '중국',
        value: 'cn'
      }, {
        label: '영국',
        value: 'uk'
      }, {
        label: '프랑스',
        value: 'fr'
      }, {
        label: '독일',
        value: 'de'
      }, {
        label: '캐나다',
        value: 'ca'
      }, {
        label: '호주',
        value: 'au'
      }, {
        label: '기타',
        value: 'etc'
      }];
      return {
        country,
        options
      };
    },
    template: \`
      <div>
        <h4 style="margin: 0 0 12px 0;">국가 선택</h4>
        <div style="max-height: 300px; overflow-y: auto; padding: 12px; border: 1px solid #ddd; border-radius: 4px;">
          <ElementRadio
            v-model="country"
            name="country"
            :options="options"
          />
        </div>
        <p style="margin-top: 12px; color: #666;">
          선택된 국가: {{ country || '없음' }}
        </p>
      </div>
    \`
  })
}`,...(oe=(te=x.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};const we=["Default","WithInitialValue","WithValidation","ImmediateValidation","YesNoQuestion","PaymentMethod","ShippingSpeed","SurveyQuestion","ConditionalContent","ManyOptions"];export{B as ConditionalContent,d as Default,m as ImmediateValidation,x as ManyOptions,v as PaymentMethod,g as ShippingSpeed,b as SurveyQuestion,p as WithInitialValue,C as WithValidation,c as YesNoQuestion,we as __namedExportsOrder,qe as default};
