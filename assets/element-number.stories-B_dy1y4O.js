var Me=Object.defineProperty;var Le=(e,n,a)=>n in e?Me(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a;var c=(e,n,a)=>Le(e,typeof n!="symbol"?n+"":n,a);import{d as je,m,a as W,w as We,Q as Ie,E as Te,c as Ue,o as S,f as He,s as k,v as j,u as E,x as N,n as Qe,y as K,z as X}from"./vue.esm-bundler-C23JohzN.js";import{Q as Y}from"./index-C8W6ez_R.js";import{F as Je}from"./vee-validate-yFuzOwfJ.js";import{_ as Ge}from"./element-button-BG7G4eZx.js";import{_ as Ke}from"./element-tooltip-CVQ3LOPp.js";import"./_commonjsHelpers-Cpj98o6Y.js";/**
 * Vue Number Format 3.34.1
 * (c) 2021-2025 Dipak Sarkar <hello@dipaksarkar.in> (https://dipaksarkar.in/)
 * @license MIT
 */var U={prefix:"",suffix:"",separator:",",decimal:".",inputmode:"numeric",precision:2,minimumFractionDigits:null,prefill:!0,reverseFill:!1,min:null,max:null,nullValue:""};function Xe(e){return n=0,a=e,r=20,Math.max(n,Math.min(a,r));var n,a,r}class H{constructor(n){c(this,"options");c(this,"input");c(this,"number");c(this,"isClean");c(this,"isCustomDecimal");c(this,"noPreSuffix");c(this,"hasPreOrSuffix");c(this,"prefix");c(this,"preSufRegExp");c(this,"prefixRegExp");c(this,"suffixRegExp");c(this,"numberRegExp");c(this,"cleanRegExp");c(this,"negativeRegExp");this.options=Object.assign(Q(U),n);const{prefix:a,suffix:r,decimal:s,reverseFill:u}=this.options;this.input="",this.number="",this.isClean=!u;const l=a,t=r,o=l.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),i=t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&");o&&(this.prefixRegExp=new RegExp(`^${o}`)),i&&(this.suffixRegExp=new RegExp(`${i}$`)),this.prefix=a,this.numberRegExp=new RegExp(`[^0-9\\${s||"."}]+`,"gi"),this.cleanRegExp=new RegExp("[^0-9]+","gi"),this.negativeRegExp=new RegExp("[^0-9\\-]+","gi"),this.isCustomDecimal=s!==".",this.noPreSuffix=!l&&!t,this.hasPreOrSuffix=!this.noPreSuffix}isNull(){return!this.numberOnly(this.isClean?this.cleanRegExp:this.negativeRegExp)}clean(n=!1){return this.isClean=n,this}sign(){if(this.input===null||this.input===void 0)return"";const n=this.input.toString().indexOf(y)>=0;return this.isClean?n&&this.realNumber()>0?y:"":n?y:""}toFixed(){const n=Math.pow(10,this.options.precision);return(parseFloat(this.numberOnly(/\D+/g))/n||0).toFixed(Xe(this.options.precision))}toNumber(n){return Number(n)}numberOnly(n){var r;let a=(r=this.input)==null?void 0:r.toString();return this.prefixRegExp&&(a=a.replace(this.prefixRegExp,"")),this.suffixRegExp&&(a=a.replace(this.suffixRegExp,"")),a.replace(n||this.numberRegExp,"")}inputWithPreOrSuffix(){return this.input&&this.prefixRegExp?this.prefixRegExp.test(this.input.toString()):!this.input||!this.suffixRegExp||this.suffixRegExp.test(this.input.toString())}isNegative(){return this.sign()===y}isNumber(n){return!isNaN(this.toNumber(n||this.input))}numbers(){var s;const{reverseFill:n,decimal:a,separator:r}=this.options;if(n)this.number=this.toFixed().replace(".",a);else{const u=(s=this.input)==null?void 0:s.toString().replace(this.prefixRegExp??"","").replace(this.suffixRegExp??"","").replace(new RegExp(y,"g"),""),l=this.input.toString().indexOf(a)>=0&&this.isCustomDecimal;let t=u;r&&(t=t.replace(new RegExp(`\\${r}`,"g"),"")),t=t.replace(a,"."),typeof this.input=="number"||this.isNumber()&&!l&&!this.inputWithPreOrSuffix()&&this.hasPreOrSuffix?this.number=this.parts(u,".").join(a):this.isNumber(t)&&!l&&this.inputWithPreOrSuffix()&&this.hasPreOrSuffix?this.number=this.parts(t,".").join(a):this.number=this.parts(this.numberOnly()).join(a)}return this.number}unformatNumber(){return this.numbers().toString().replace(this.options.decimal,".")}realNumber(){return parseFloat(this.unformatNumber())}parts(n,a){const{precision:r,minimumFractionDigits:s,decimal:u}=this.options;let l=n.toString().split(a||u);if(l.length>1&&(l[0]=this.toNumber(l[0])||0,l[1]=l.slice(1,l.length).join(""),l=l.slice(0,2)),this.isClean){const t=this.toNumber(l.join(".")).toFixed(r),o=this.toNumber(t),i=o.toFixed(s);l=s>=0&&o.toString().length<i.length?i.toString().split("."):o.toString().split(".")}return l.slice(0,2)}addSeparator(){const{decimal:n,separator:a}=this.options,r=this.numbers().split(n);return r[0]=r[0].toString().replace(/(\d)(?=(?:\d{3})+\b)/gm,`$1${a}`),r.join(n)}format(n){this.input=n;const{reverseFill:a,nullValue:r,prefix:s,suffix:u}=this.options;return this.isNull()&&!a?r:this.sign()+s+this.addSeparator()+u}unformat(n){this.input=n;const{reverseFill:a,nullValue:r}=this.options,s=this.realNumber(),u=this.unformatNumber();return this.isNull()||a&&s===0?r:this.sign()+u}}const y="-";function Q(e){return JSON.parse(JSON.stringify(e))}function I(e){return new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:{facade:!0}})}function w(e){const n=e instanceof HTMLInputElement?e:e.querySelector("input");if(!n)throw new Error("number directive requires an input element");return n}function Z(e,n){const a=()=>{e.setSelectionRange(n,n)};a(),setTimeout(a,1)}function V(e,n,{emit:a=!0,force:r=!1,clean:s=!1}={}){var d;const{options:u,oldValue:l}=e,{reverseFill:t,max:o,min:i}=u,p=((d=n==null?void 0:n.props)==null?void 0:d.value)||e.value;if(r||l!==p){const b=new H(u).clean(s&&!t);let x=b.format(p),v=b.clean(!t).unformat(p);s&&(Number(o)===o&&Number(v)>o?(x=b.format(o),v=o.toString()):Number(i)===i&&Number(v)<i&&(x=b.format(i),v=i.toString())),e.oldValue=x,e.unmasked=v,e.value!==x&&(e.value=x)}return a&&e.dispatchEvent(I("input"))}var Ye={beforeMount:(e,{value:n,modifiers:a},r)=>{var i;e=w(e);const s=Object.assign(Q(U),n,a),{reverseFill:u,precision:l,decimal:t,inputmode:o}=s;e.options=s,e.setAttribute("inputmode",o),u&&e.value?(e.value=parseFloat(new H({...s,reverseFill:!1}).unformat(e.value)).toFixed(l),(i=r==null?void 0:r.props)!=null&&i.value&&(r.props.value=e.value)):e.value&&!isNaN(Number(e.value))&&(e.value=e.value.replace(".",t)),V(e,r,{force:s.prefill,clean:!0,emit:!1})},mounted:e=>{const n=(e=w(e)).parentElement||e,a=u=>{u.target===e&&function(l){const{target:t,detail:o}=l;if(o!=null&&o.facade)return!1;l.stopPropagation();let i=t.value.length;const{oldValue:p,options:d}=t;t.selectionEnd&&(i=t.value.length-t.selectionEnd),V(t,null,{clean:!d.precision,emit:!1}),d.suffix&&(i=Math.max(i,d.suffix.length)),i=t.value.length-i,d.prefix&&(i=Math.max(i,d.prefix.length)),Z(t,i),p!==t.value&&t.dispatchEvent(I("input"))}(u)},r=u=>{u.target===e&&function(l){const{target:t}=l,{oldValue:o}=t;V(t,null,{force:!0,clean:!0,emit:!1}),o!==t.value&&t.dispatchEvent(I("input"))}(u)},s=u=>{u.target===e&&function(l,t){const{options:o}=t,{prefix:i,suffix:p,decimal:d,min:b,separator:x}=o,{key:v}=l,Oe=new RegExp(`${i}|${p}`,"g"),J=t.value.replace(Oe,""),qe=b===void 0||Number(b)<0||Number(b)!==b;if(v===d)J.includes(d)?l.preventDefault():J||(t.value="0",t.dispatchEvent(new Event("input")));else if(v!==y||qe){if(v==="Backspace"){const C=t.selectionEnd||0,G=t.value.slice(C-1,C),ze=t.value.slice(C-2,C);let h=t.value.length-C;[i,y,x].includes(G)&&(l.preventDefault(),t.value=G===x?t.value.replace(ze,""):t.value.replace(new RegExp(`[${i}${y}]`,"g"),""),h=Math.max(h,p.length),h=t.value.length-h,h=Math.max(h,i.length),Z(t,h),t.dispatchEvent(new Event("input")))}}else l.preventDefault()}(u,e)};n.addEventListener("input",a,!0),n.addEventListener("blur",r,!0),n.addEventListener("keydown",s,!0),e.cleanup=()=>{n.removeEventListener("input",a,!0),n.removeEventListener("blur",r,!0),n.removeEventListener("keydown",s,!0)}},updated:(e,{value:n,oldValue:a,modifiers:r},s)=>{if(e=w(e),n!==a){const u=e.options;e.options=Object.assign(u,n,r),V(e,s,{force:!0,clean:!1,emit:!1})}else V(e,s,{emit:!1})},unmounted:e=>{var n;(n=w(e))==null||n.cleanup()}};const f=Q(U);var T=je({name:"VueNumber",directives:{number:Ye},props:{modelValue:{type:[String,Number],required:!0},nullValue:{type:[Number,String],default:f.nullValue},masked:Boolean,readonly:Boolean,disabled:Boolean,reverseFill:{type:Boolean,default:f.reverseFill},prefill:{type:Boolean,default:f.prefill},precision:{type:Number,default:()=>f.precision},minimumFractionDigits:{type:Number,default:()=>f.minimumFractionDigits},decimal:{type:String,default:()=>f.decimal},min:{type:Number,default:()=>f.min},max:{type:Number,default:()=>f.max},separator:{type:String,default:()=>f.separator},prefix:{type:String,default:()=>f.prefix},suffix:{type:String,default:()=>f.suffix},inputmode:{type:String,default:()=>f.inputmode}},emits:["update:model-value","input:model-value"],setup(e,{emit:n}){const a=m(e.modelValue),r=m(!1),s=m(""),u=W(()=>({...e})),l=new H(u.value),t=W(()=>e.masked?l.format(a.value):s.value),o=()=>{n("update:model-value",t.value)};return We(()=>e.modelValue,i=>{t.value!==i&&(a.value=l.format(i))}),{config:u,maskedValue:a,unmaskedValue:s,input:i=>{const{target:p}=i;a.value=p.value,s.value=p.unmasked,r.value=!0,n("input:model-value",t.value)},blur:()=>{r.value&&t.value!==e.modelValue&&o()},change:o}}});const Ze=["value","readonly","disabled"];T.render=function(e,n,a,r,s,u){const l=Ie("number");return Te((S(),Ue("input",{type:"text",autocomplete:"off",value:e.maskedValue,readonly:e.readonly,disabled:e.disabled,class:"v-number vue-number-format",onChange:n[0]||(n[0]=(...t)=>e.change&&e.change(...t)),onInput:n[1]||(n[1]=(...t)=>e.input&&e.input(...t)),onBlur:n[2]||(n[2]=(...t)=>e.blur&&e.blur(...t))},null,40,Ze)),[[l,e.config]])},T.__file="src/component.vue";const g={__name:"element-number",props:{modelValue:{type:[String,Number],default:null},type:{type:String,default:"text"},name:{type:String,default:""},rules:{type:String,default:""},immediate:{type:Boolean,default:!1},isClear:{type:Boolean,default:!0},placeholder:{type:String,default:"입력해 주세요."},className:{type:String,default:"custom-input-compo"},readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},isHover:{type:Boolean,default:!0},tooltipPlacement:{type:String,default:"top-end"},prefix:{type:String,default:""},suffix:{type:String,default:""},separator:{type:String,default:","},decimal:{type:String,default:"."},precision:{type:String,default:""},minimumFractionDigits:{type:String,default:""},prefill:{type:Boolean,default:!0},reverseFill:{type:Boolean,default:!1},masked:{type:Boolean,default:!1},min:{type:Number,default:null},max:{type:Number,default:null},nullValue:{type:String,default:""}},emits:["update:modelValue"],setup(e,{emit:n}){const a=e,r=n;let s=Y.generateUuid();const u=m(null),l=W({get(){return s=Y.generateUuid(),a.modelValue},set(o){return r("update:modelValue",o)}});He(async()=>{a.immediate&&await u.value.validate()});const t=()=>{l.value="",r("update:modelValue","")};return(o,i)=>(S(),k(E(Je),{ref_key:"veeField",ref:u,modelValue:l.value,"onUpdate:modelValue":i[1]||(i[1]=p=>l.value=p),rules:e.rules,type:e.type,name:e.name},{default:j(({field:p,errors:d})=>[N("span",{class:Qe(["ipt",d.length>0?"iptError":""])},[N("input",X(p,{type:"hidden"}),null,16),(S(),k(E(T),X({modelValue:l.value,"onUpdate:modelValue":i[0]||(i[0]=b=>l.value=b)},{prefix:e.prefix,suffix:e.suffix,separator:e.separator,decimal:e.decimal,precision:e.precision,minimumFractionDigits:e.minimumFractionDigits,prefill:e.prefill,reverseFill:e.reverseFill,masked:e.masked,min:e.min,max:e.max,nullValue:e.nullValue},{disabled:e.disabled,readonly:e.readonly,style:{"text-align":"right"},key:E(s)}),null,16,["modelValue","disabled","readonly"])),d.length>0?(S(),k(E(Ke),{key:0,msg:d[0],placement:e.tooltipPlacement,offsetSkid:20,offsetDistance:25},{default:j(()=>[...i[2]||(i[2]=[N("span",{class:"error"},[N("span",{class:"hide"},"에러")],-1)])]),_:1},8,["msg","placement"])):K("",!0),!e.disabled&&e.isClear&&l.value?(S(),k(E(Ge),{key:1,className:"btn_del",onClick:t},{default:j(()=>[...i[3]||(i[3]=[N("span",{class:"hide"},"삭제",-1)])]),_:1})):K("",!0)],2)]),_:1},8,["modelValue","rules","type","name"]))}};g.__docgenInfo={exportName:"default",displayName:"element-number",description:"",tags:{},props:[{name:"modelValue",type:{name:"string|number"},defaultValue:{func:!1,value:"null"}},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:"'text'"}},{name:"name",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"rules",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"immediate",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isClear",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"'입력해 주세요.'"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"'custom-input-compo'"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isHover",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"tooltipPlacement",type:{name:"string"},defaultValue:{func:!1,value:"'top-end'"}},{name:"prefix",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"suffix",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"separator",type:{name:"string"},defaultValue:{func:!1,value:"','"}},{name:"decimal",type:{name:"string"},defaultValue:{func:!1,value:"'.'"}},{name:"precision",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"minimumFractionDigits",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"prefill",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"reverseFill",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"masked",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"min",type:{name:"number"},defaultValue:{func:!1,value:"null"}},{name:"max",type:{name:"number"},defaultValue:{func:!1,value:"null"}},{name:"nullValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"update:modelValue"}],sourceFiles:["/Users/kokimin/WorkSpace/npm-framework/src/components/form/ElementNumber/element-number.vue"]};const sn={title:"Form/ElementNumber",component:g,tags:["autodocs"],argTypes:{modelValue:{control:"number",description:"숫자 값"},type:{control:"text",description:"Input 타입"},name:{control:"text",description:"vee-validate 필드 이름"},rules:{control:"text",description:"vee-validate 유효성 검사 규칙"},immediate:{control:"boolean",description:"초기 유효성 검사 실행 여부"},isClear:{control:"boolean",description:"초기화 버튼 표시 여부"},placeholder:{control:"text",description:"플레이스홀더"},readonly:{control:"boolean",description:"읽기 전용 여부"},disabled:{control:"boolean",description:"비활성화 여부"},prefix:{control:"text",description:"앞에 붙는 문자"},suffix:{control:"text",description:"뒤에 붙는 문자"},separator:{control:"text",description:"천 단위 구분 문자"},decimal:{control:"text",description:"소수점 구분 문자"},precision:{control:"text",description:"정밀도"},min:{control:"number",description:"최소값"},max:{control:"number",description:"최대값"}}},D={args:{modelValue:null,name:"number-default",type:"text",rules:"",immediate:!1,isClear:!0,placeholder:"숫자를 입력하세요",separator:",",decimal:"."},render:e=>({components:{ElementNumber:g},setup(){const n=m(e.modelValue);return{args:e,value:n}},template:`
      <div>
        <ElementNumber
          v-model="value"
          :name="args.name"
          :type="args.type"
          :rules="args.rules"
          :immediate="args.immediate"
          :isClear="args.isClear"
          :placeholder="args.placeholder"
          :separator="args.separator"
          :decimal="args.decimal"
        />
        <p style="margin-top: 12px; color: #666;">
          입력된 값: {{ value || '없음' }}
        </p>
      </div>
    `})},B={args:{modelValue:1234567,name:"number-separator",separator:",",isClear:!0},render:e=>({components:{ElementNumber:g},setup(){const n=m(e.modelValue);return{args:e,value:n}},template:`
      <div>
        <ElementNumber
          v-model="value"
          :name="args.name"
          :separator="args.separator"
          :isClear="args.isClear"
        />
        <p style="margin-top: 12px; color: #666;">
          값: {{ value }}
        </p>
      </div>
    `})},P={args:{modelValue:5e4,name:"number-currency",prefix:"₩ ",separator:",",isClear:!0},render:e=>({components:{ElementNumber:g},setup(){const n=m(e.modelValue);return{args:e,value:n}},template:`
      <div>
        <label style="display: block; margin-bottom: 4px; font-weight: bold;">가격</label>
        <ElementNumber
          v-model="value"
          :name="args.name"
          :prefix="args.prefix"
          :separator="args.separator"
          :isClear="args.isClear"
        />
        <p style="margin-top: 12px; color: #666;">
          원 단위 값: {{ value }}원
        </p>
      </div>
    `})},F={args:{modelValue:75,name:"number-percentage",suffix:"%",min:0,max:100,isClear:!0},render:e=>({components:{ElementNumber:g},setup(){const n=m(e.modelValue);return{args:e,value:n}},template:`
      <div>
        <label style="display: block; margin-bottom: 4px; font-weight: bold;">진행률</label>
        <ElementNumber
          v-model="value"
          :name="args.name"
          :suffix="args.suffix"
          :min="args.min"
          :max="args.max"
          :isClear="args.isClear"
        />
        <div style="margin-top: 12px;">
          <div style="width: 100%; height: 20px; background: #e0e0e0; border-radius: 10px; overflow: hidden;">
            <div
              :style="{ width: value + '%', height: '100%', background: '#1976d2', transition: 'width 0.3s' }"
            ></div>
          </div>
          <p style="margin-top: 4px; color: #666; text-align: center;">{{ value }}%</p>
        </div>
      </div>
    `})},R={args:{modelValue:3.14159,name:"number-decimal",precision:"2",decimal:".",isClear:!0},render:e=>({components:{ElementNumber:g},setup(){const n=m(e.modelValue);return{args:e,value:n}},template:`
      <div>
        <label style="display: block; margin-bottom: 4px; font-weight: bold;">소수점 (2자리)</label>
        <ElementNumber
          v-model="value"
          :name="args.name"
          :precision="args.precision"
          :decimal="args.decimal"
          :isClear="args.isClear"
        />
        <p style="margin-top: 12px; color: #666;">
          값: {{ value }}
        </p>
      </div>
    `})},A={args:{modelValue:50,name:"number-minmax",min:0,max:100,isClear:!0},render:e=>({components:{ElementNumber:g},setup(){const n=m(e.modelValue);return{args:e,value:n}},template:`
      <div>
        <label style="display: block; margin-bottom: 4px; font-weight: bold;">
          숫자 (0 ~ 100)
        </label>
        <ElementNumber
          v-model="value"
          :name="args.name"
          :min="args.min"
          :max="args.max"
          :isClear="args.isClear"
        />
        <p style="margin-top: 12px; color: #666;">
          값: {{ value }}
        </p>
        <p style="margin-top: 4px; color: #999; font-size: 13px;">
          최소값: {{ args.min }}, 최대값: {{ args.max }}
        </p>
      </div>
    `})},$={args:{modelValue:null,name:"number-required",rules:"required",immediate:!1,isClear:!0},render:e=>({components:{ElementNumber:g},setup(){const n=m(e.modelValue);return{args:e,value:n}},template:`
      <div>
        <label style="display: block; margin-bottom: 4px; font-weight: bold;">
          금액 (필수)
        </label>
        <ElementNumber
          v-model="value"
          :name="args.name"
          :rules="args.rules"
          :immediate="args.immediate"
          :isClear="args.isClear"
          prefix="₩ "
          separator=","
        />
        <p style="margin-top: 12px; color: #666; font-size: 13px;">
          값을 입력하지 않으면 에러 툴팁이 표시됩니다.
        </p>
      </div>
    `})},O={args:{modelValue:123456,name:"number-disabled",disabled:!0,separator:",",isClear:!1},render:e=>({components:{ElementNumber:g},setup(){const n=m(e.modelValue);return{args:e,value:n}},template:`
      <div>
        <ElementNumber
          v-model="value"
          :name="args.name"
          :disabled="args.disabled"
          :separator="args.separator"
          :isClear="args.isClear"
        />
        <p style="margin-top: 12px; color: #666;">
          비활성화된 상태입니다.
        </p>
      </div>
    `})},q={args:{modelValue:999999,name:"number-readonly",readonly:!0,separator:",",prefix:"₩ ",isClear:!1},render:e=>({components:{ElementNumber:g},setup(){const n=m(e.modelValue);return{args:e,value:n}},template:`
      <div>
        <ElementNumber
          v-model="value"
          :name="args.name"
          :readonly="args.readonly"
          :separator="args.separator"
          :prefix="args.prefix"
          :isClear="args.isClear"
        />
        <p style="margin-top: 12px; color: #666;">
          읽기 전용 상태입니다.
        </p>
      </div>
    `})},z={render:()=>({components:{ElementNumber:g},setup(){const e=m(1),n=m(1e4),a=m(0);return{quantity:e,unitPrice:n,discount:a,totalPrice:()=>{const s=e.value*n.value;return s-s*a.value/100}}},template:`
      <div style="max-width: 400px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h3 style="margin: 0 0 20px 0;">가격 계산기</h3>

        <div style="margin-bottom: 16px;">
          <label style="display: block; margin-bottom: 4px; font-weight: bold;">수량</label>
          <ElementNumber
            v-model="quantity"
            name="quantity"
            :min="1"
            :isClear="false"
          />
        </div>

        <div style="margin-bottom: 16px;">
          <label style="display: block; margin-bottom: 4px; font-weight: bold;">단가</label>
          <ElementNumber
            v-model="unitPrice"
            name="unit-price"
            prefix="₩ "
            separator=","
            :isClear="true"
          />
        </div>

        <div style="margin-bottom: 16px;">
          <label style="display: block; margin-bottom: 4px; font-weight: bold;">할인율</label>
          <ElementNumber
            v-model="discount"
            name="discount"
            suffix="%"
            :min="0"
            :max="100"
            :isClear="true"
          />
        </div>

        <div style="padding: 16px; background: #f5f5f5; border-radius: 4px;">
          <p style="margin: 0 0 8px 0; font-size: 14px;">소계: {{ (quantity * unitPrice).toLocaleString() }}원</p>
          <p style="margin: 0 0 8px 0; font-size: 14px;">할인: -{{ ((quantity * unitPrice) * discount / 100).toLocaleString() }}원</p>
          <p style="margin: 0; font-size: 18px; font-weight: bold; color: #1976d2;">
            총 금액: {{ totalPrice().toLocaleString() }}원
          </p>
        </div>
      </div>
    `})},M={render:()=>({components:{ElementNumber:g},setup(){const e=m({korean:null,english:null,math:null});return{scores:e,average:()=>{const a=Object.values(e.value).filter(r=>r!==null);return a.length===0?0:(a.reduce((r,s)=>r+s,0)/a.length).toFixed(2)}}},template:`
      <div style="max-width: 400px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h3 style="margin: 0 0 20px 0;">성적 입력</h3>

        <div style="margin-bottom: 16px;">
          <label style="display: block; margin-bottom: 4px; font-weight: bold;">국어</label>
          <ElementNumber
            v-model="scores.korean"
            name="korean"
            :min="0"
            :max="100"
            suffix="점"
            :isClear="true"
          />
        </div>

        <div style="margin-bottom: 16px;">
          <label style="display: block; margin-bottom: 4px; font-weight: bold;">영어</label>
          <ElementNumber
            v-model="scores.english"
            name="english"
            :min="0"
            :max="100"
            suffix="점"
            :isClear="true"
          />
        </div>

        <div style="margin-bottom: 16px;">
          <label style="display: block; margin-bottom: 4px; font-weight: bold;">수학</label>
          <ElementNumber
            v-model="scores.math"
            name="math"
            :min="0"
            :max="100"
            suffix="점"
            :isClear="true"
          />
        </div>

        <div style="padding: 16px; background: #f5f5f5; border-radius: 4px;">
          <p style="margin: 0 0 8px 0;">국어: {{ scores.korean || '-' }}점</p>
          <p style="margin: 0 0 8px 0;">영어: {{ scores.english || '-' }}점</p>
          <p style="margin: 0 0 12px 0;">수학: {{ scores.math || '-' }}점</p>
          <p style="margin: 0; font-size: 18px; font-weight: bold; color: #1976d2;">
            평균: {{ average() }}점
          </p>
        </div>
      </div>
    `})},L={render:()=>({components:{ElementNumber:g},setup(){return{phone:m(1012345678),formatPhone:a=>{if(!a)return"";const r=String(a);return r.length===10?r.replace(/(\d{3})(\d{3})(\d{4})/,"$1-$2-$3"):r.length===11?r.replace(/(\d{3})(\d{4})(\d{4})/,"$1-$2-$3"):r}}},template:`
      <div>
        <label style="display: block; margin-bottom: 4px; font-weight: bold;">전화번호</label>
        <ElementNumber
          v-model="phone"
          name="phone"
          :isClear="true"
          separator=""
        />
        <p style="margin-top: 12px; color: #666;">
          포맷된 번호: {{ formatPhone(phone) }}
        </p>
      </div>
    `})};var _,ee,ne;D.parameters={...D.parameters,docs:{...(_=D.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    modelValue: null,
    name: 'number-default',
    type: 'text',
    rules: '',
    immediate: false,
    isClear: true,
    placeholder: '숫자를 입력하세요',
    separator: ',',
    decimal: '.'
  },
  render: args => ({
    components: {
      ElementNumber
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
        <ElementNumber
          v-model="value"
          :name="args.name"
          :type="args.type"
          :rules="args.rules"
          :immediate="args.immediate"
          :isClear="args.isClear"
          :placeholder="args.placeholder"
          :separator="args.separator"
          :decimal="args.decimal"
        />
        <p style="margin-top: 12px; color: #666;">
          입력된 값: {{ value || '없음' }}
        </p>
      </div>
    \`
  })
}`,...(ne=(ee=D.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var ae,te,re;B.parameters={...B.parameters,docs:{...(ae=B.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    modelValue: 1234567,
    name: 'number-separator',
    separator: ',',
    isClear: true
  },
  render: args => ({
    components: {
      ElementNumber
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
        <ElementNumber
          v-model="value"
          :name="args.name"
          :separator="args.separator"
          :isClear="args.isClear"
        />
        <p style="margin-top: 12px; color: #666;">
          값: {{ value }}
        </p>
      </div>
    \`
  })
}`,...(re=(te=B.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var le,ie,se;P.parameters={...P.parameters,docs:{...(le=P.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    modelValue: 50000,
    name: 'number-currency',
    prefix: '₩ ',
    separator: ',',
    isClear: true
  },
  render: args => ({
    components: {
      ElementNumber
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
        <label style="display: block; margin-bottom: 4px; font-weight: bold;">가격</label>
        <ElementNumber
          v-model="value"
          :name="args.name"
          :prefix="args.prefix"
          :separator="args.separator"
          :isClear="args.isClear"
        />
        <p style="margin-top: 12px; color: #666;">
          원 단위 값: {{ value }}원
        </p>
      </div>
    \`
  })
}`,...(se=(ie=P.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var ue,oe,me;F.parameters={...F.parameters,docs:{...(ue=F.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    modelValue: 75,
    name: 'number-percentage',
    suffix: '%',
    min: 0,
    max: 100,
    isClear: true
  },
  render: args => ({
    components: {
      ElementNumber
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
        <label style="display: block; margin-bottom: 4px; font-weight: bold;">진행률</label>
        <ElementNumber
          v-model="value"
          :name="args.name"
          :suffix="args.suffix"
          :min="args.min"
          :max="args.max"
          :isClear="args.isClear"
        />
        <div style="margin-top: 12px;">
          <div style="width: 100%; height: 20px; background: #e0e0e0; border-radius: 10px; overflow: hidden;">
            <div
              :style="{ width: value + '%', height: '100%', background: '#1976d2', transition: 'width 0.3s' }"
            ></div>
          </div>
          <p style="margin-top: 4px; color: #666; text-align: center;">{{ value }}%</p>
        </div>
      </div>
    \`
  })
}`,...(me=(oe=F.parameters)==null?void 0:oe.docs)==null?void 0:me.source}}};var pe,de,ce;R.parameters={...R.parameters,docs:{...(pe=R.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    modelValue: 3.14159,
    name: 'number-decimal',
    precision: '2',
    decimal: '.',
    isClear: true
  },
  render: args => ({
    components: {
      ElementNumber
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
        <label style="display: block; margin-bottom: 4px; font-weight: bold;">소수점 (2자리)</label>
        <ElementNumber
          v-model="value"
          :name="args.name"
          :precision="args.precision"
          :decimal="args.decimal"
          :isClear="args.isClear"
        />
        <p style="margin-top: 12px; color: #666;">
          값: {{ value }}
        </p>
      </div>
    \`
  })
}`,...(ce=(de=R.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var ge,fe,be;A.parameters={...A.parameters,docs:{...(ge=A.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    modelValue: 50,
    name: 'number-minmax',
    min: 0,
    max: 100,
    isClear: true
  },
  render: args => ({
    components: {
      ElementNumber
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
          숫자 (0 ~ 100)
        </label>
        <ElementNumber
          v-model="value"
          :name="args.name"
          :min="args.min"
          :max="args.max"
          :isClear="args.isClear"
        />
        <p style="margin-top: 12px; color: #666;">
          값: {{ value }}
        </p>
        <p style="margin-top: 4px; color: #999; font-size: 13px;">
          최소값: {{ args.min }}, 최대값: {{ args.max }}
        </p>
      </div>
    \`
  })
}`,...(be=(fe=A.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var ve,xe,ye;$.parameters={...$.parameters,docs:{...(ve=$.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    modelValue: null,
    name: 'number-required',
    rules: 'required',
    immediate: false,
    isClear: true
  },
  render: args => ({
    components: {
      ElementNumber
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
          금액 (필수)
        </label>
        <ElementNumber
          v-model="value"
          :name="args.name"
          :rules="args.rules"
          :immediate="args.immediate"
          :isClear="args.isClear"
          prefix="₩ "
          separator=","
        />
        <p style="margin-top: 12px; color: #666; font-size: 13px;">
          값을 입력하지 않으면 에러 툴팁이 표시됩니다.
        </p>
      </div>
    \`
  })
}`,...(ye=(xe=$.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};var he,Ce,Ee;O.parameters={...O.parameters,docs:{...(he=O.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    modelValue: 123456,
    name: 'number-disabled',
    disabled: true,
    separator: ',',
    isClear: false
  },
  render: args => ({
    components: {
      ElementNumber
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
        <ElementNumber
          v-model="value"
          :name="args.name"
          :disabled="args.disabled"
          :separator="args.separator"
          :isClear="args.isClear"
        />
        <p style="margin-top: 12px; color: #666;">
          비활성화된 상태입니다.
        </p>
      </div>
    \`
  })
}`,...(Ee=(Ce=O.parameters)==null?void 0:Ce.docs)==null?void 0:Ee.source}}};var Ne,Ve,Se;q.parameters={...q.parameters,docs:{...(Ne=q.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    modelValue: 999999,
    name: 'number-readonly',
    readonly: true,
    separator: ',',
    prefix: '₩ ',
    isClear: false
  },
  render: args => ({
    components: {
      ElementNumber
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
        <ElementNumber
          v-model="value"
          :name="args.name"
          :readonly="args.readonly"
          :separator="args.separator"
          :prefix="args.prefix"
          :isClear="args.isClear"
        />
        <p style="margin-top: 12px; color: #666;">
          읽기 전용 상태입니다.
        </p>
      </div>
    \`
  })
}`,...(Se=(Ve=q.parameters)==null?void 0:Ve.docs)==null?void 0:Se.source}}};var ke,we,De;z.parameters={...z.parameters,docs:{...(ke=z.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementNumber
    },
    setup() {
      const quantity = ref(1);
      const unitPrice = ref(10000);
      const discount = ref(0);
      const totalPrice = () => {
        const subtotal = quantity.value * unitPrice.value;
        return subtotal - subtotal * discount.value / 100;
      };
      return {
        quantity,
        unitPrice,
        discount,
        totalPrice
      };
    },
    template: \`
      <div style="max-width: 400px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h3 style="margin: 0 0 20px 0;">가격 계산기</h3>

        <div style="margin-bottom: 16px;">
          <label style="display: block; margin-bottom: 4px; font-weight: bold;">수량</label>
          <ElementNumber
            v-model="quantity"
            name="quantity"
            :min="1"
            :isClear="false"
          />
        </div>

        <div style="margin-bottom: 16px;">
          <label style="display: block; margin-bottom: 4px; font-weight: bold;">단가</label>
          <ElementNumber
            v-model="unitPrice"
            name="unit-price"
            prefix="₩ "
            separator=","
            :isClear="true"
          />
        </div>

        <div style="margin-bottom: 16px;">
          <label style="display: block; margin-bottom: 4px; font-weight: bold;">할인율</label>
          <ElementNumber
            v-model="discount"
            name="discount"
            suffix="%"
            :min="0"
            :max="100"
            :isClear="true"
          />
        </div>

        <div style="padding: 16px; background: #f5f5f5; border-radius: 4px;">
          <p style="margin: 0 0 8px 0; font-size: 14px;">소계: {{ (quantity * unitPrice).toLocaleString() }}원</p>
          <p style="margin: 0 0 8px 0; font-size: 14px;">할인: -{{ ((quantity * unitPrice) * discount / 100).toLocaleString() }}원</p>
          <p style="margin: 0; font-size: 18px; font-weight: bold; color: #1976d2;">
            총 금액: {{ totalPrice().toLocaleString() }}원
          </p>
        </div>
      </div>
    \`
  })
}`,...(De=(we=z.parameters)==null?void 0:we.docs)==null?void 0:De.source}}};var Be,Pe,Fe;M.parameters={...M.parameters,docs:{...(Be=M.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementNumber
    },
    setup() {
      const scores = ref({
        korean: null,
        english: null,
        math: null
      });
      const average = () => {
        const values = Object.values(scores.value).filter(v => v !== null);
        if (values.length === 0) return 0;
        return (values.reduce((sum, v) => sum + v, 0) / values.length).toFixed(2);
      };
      return {
        scores,
        average
      };
    },
    template: \`
      <div style="max-width: 400px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h3 style="margin: 0 0 20px 0;">성적 입력</h3>

        <div style="margin-bottom: 16px;">
          <label style="display: block; margin-bottom: 4px; font-weight: bold;">국어</label>
          <ElementNumber
            v-model="scores.korean"
            name="korean"
            :min="0"
            :max="100"
            suffix="점"
            :isClear="true"
          />
        </div>

        <div style="margin-bottom: 16px;">
          <label style="display: block; margin-bottom: 4px; font-weight: bold;">영어</label>
          <ElementNumber
            v-model="scores.english"
            name="english"
            :min="0"
            :max="100"
            suffix="점"
            :isClear="true"
          />
        </div>

        <div style="margin-bottom: 16px;">
          <label style="display: block; margin-bottom: 4px; font-weight: bold;">수학</label>
          <ElementNumber
            v-model="scores.math"
            name="math"
            :min="0"
            :max="100"
            suffix="점"
            :isClear="true"
          />
        </div>

        <div style="padding: 16px; background: #f5f5f5; border-radius: 4px;">
          <p style="margin: 0 0 8px 0;">국어: {{ scores.korean || '-' }}점</p>
          <p style="margin: 0 0 8px 0;">영어: {{ scores.english || '-' }}점</p>
          <p style="margin: 0 0 12px 0;">수학: {{ scores.math || '-' }}점</p>
          <p style="margin: 0; font-size: 18px; font-weight: bold; color: #1976d2;">
            평균: {{ average() }}점
          </p>
        </div>
      </div>
    \`
  })
}`,...(Fe=(Pe=M.parameters)==null?void 0:Pe.docs)==null?void 0:Fe.source}}};var Re,Ae,$e;L.parameters={...L.parameters,docs:{...(Re=L.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementNumber
    },
    setup() {
      const phone = ref(1012345678);
      const formatPhone = num => {
        if (!num) return '';
        const str = String(num);
        if (str.length === 10) {
          return str.replace(/(\\d{3})(\\d{3})(\\d{4})/, '$1-$2-$3');
        } else if (str.length === 11) {
          return str.replace(/(\\d{3})(\\d{4})(\\d{4})/, '$1-$2-$3');
        }
        return str;
      };
      return {
        phone,
        formatPhone
      };
    },
    template: \`
      <div>
        <label style="display: block; margin-bottom: 4px; font-weight: bold;">전화번호</label>
        <ElementNumber
          v-model="phone"
          name="phone"
          :isClear="true"
          separator=""
        />
        <p style="margin-top: 12px; color: #666;">
          포맷된 번호: {{ formatPhone(phone) }}
        </p>
      </div>
    \`
  })
}`,...($e=(Ae=L.parameters)==null?void 0:Ae.docs)==null?void 0:$e.source}}};const un=["Default","WithThousandSeparator","Currency","Percentage","Decimal","MinMax","WithValidation","Disabled","Readonly","PriceCalculator","ScoreInput","PhoneNumber"];export{P as Currency,R as Decimal,D as Default,O as Disabled,A as MinMax,F as Percentage,L as PhoneNumber,z as PriceCalculator,q as Readonly,M as ScoreInput,B as WithThousandSeparator,$ as WithValidation,un as __namedExportsOrder,sn as default};
