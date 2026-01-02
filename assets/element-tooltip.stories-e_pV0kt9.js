import{_ as e}from"./element-tooltip-CVQ3LOPp.js";import"./vue.esm-bundler-C23JohzN.js";const z={title:"Containment/ElementTooltip",component:e,tags:["autodocs"],argTypes:{msg:{control:"text",description:"툴팁 메시지"},isHover:{control:"boolean",description:"호버 시 툴팁 표시 여부"},arrow:{control:"boolean",description:"화살표 표시 여부"},placement:{control:"select",options:["top","bottom","left","right","top-start","top-end","bottom-start","bottom-end","left-start","left-end","right-start","right-end"],description:"툴팁 위치"},className:{control:"text",description:"추가 CSS 클래스"},offsetSkid:{control:"number",description:"스키드 오프셋"},offsetDistance:{control:"number",description:"거리 오프셋"}}},n={args:{msg:"기본 툴팁입니다",isHover:!0,arrow:!0,placement:"top",className:"",offsetSkid:0,offsetDistance:12},render:t=>({components:{ElementTooltip:e},setup(){return{args:t}},template:`
      <div style="padding: 100px; text-align: center;">
        <ElementTooltip v-bind="args">
          <button type="button" class="btn primary sm">
            마우스를 올려보세요
          </button>
        </ElementTooltip>
      </div>
    `})},o={args:{msg:"상단 툴팁",isHover:!0,arrow:!0,placement:"top",offsetDistance:12},render:t=>({components:{ElementTooltip:e},setup(){return{args:t}},template:`
      <div style="padding: 100px; text-align: center;">
        <ElementTooltip v-bind="args">
          <button type="button" class="btn primary sm">
            Top
          </button>
        </ElementTooltip>
      </div>
    `})},r={args:{msg:"하단 툴팁",isHover:!0,arrow:!0,placement:"bottom",offsetDistance:12},render:t=>({components:{ElementTooltip:e},setup(){return{args:t}},template:`
      <div style="padding: 100px; text-align: center;">
        <ElementTooltip v-bind="args">
          <button type="button" class="btn primary sm">
            Bottom
          </button>
        </ElementTooltip>
      </div>
    `})},s={args:{msg:"좌측 툴팁",isHover:!0,arrow:!0,placement:"left",offsetDistance:12},render:t=>({components:{ElementTooltip:e},setup(){return{args:t}},template:`
      <div style="padding: 100px; text-align: center;">
        <ElementTooltip v-bind="args">
          <button type="button" class="btn primary sm">
            Left
          </button>
        </ElementTooltip>
      </div>
    `})},a={args:{msg:"우측 툴팁",isHover:!0,arrow:!0,placement:"right",offsetDistance:12},render:t=>({components:{ElementTooltip:e},setup(){return{args:t}},template:`
      <div style="padding: 100px; text-align: center;">
        <ElementTooltip v-bind="args">
          <button type="button" class="btn primary sm">
            Right
          </button>
        </ElementTooltip>
      </div>
    `})},p={args:{msg:"화살표 없는 툴팁",isHover:!0,arrow:!1,placement:"top",offsetDistance:12},render:t=>({components:{ElementTooltip:e},setup(){return{args:t}},template:`
      <div style="padding: 100px; text-align: center;">
        <ElementTooltip v-bind="args">
          <button type="button" class="btn primary sm">
            화살표 없음
          </button>
        </ElementTooltip>
      </div>
    `})},u={args:{isHover:!0,arrow:!0,placement:"top",offsetDistance:12},render:t=>({components:{ElementTooltip:e},setup(){return{args:t}},template:`
      <div style="padding: 100px; text-align: center;">
        <ElementTooltip v-bind="args">
          <button type="button" class="btn primary sm">
            커스텀 콘텐츠
          </button>
          <template #detailBody>
            <div style="padding: 8px;">
              <strong>제목</strong>
              <p style="margin: 4px 0 0 0;">커스텀 HTML 콘텐츠를 표시할 수 있습니다.</p>
            </div>
          </template>
        </ElementTooltip>
      </div>
    `})},l={args:{msg:"이것은 매우 긴 툴팁 메시지입니다. 툴팁은 자동으로 줄바꿈되어 표시됩니다.",isHover:!0,arrow:!0,placement:"top",offsetDistance:12},render:t=>({components:{ElementTooltip:e},setup(){return{args:t}},template:`
      <div style="padding: 100px; text-align: center;">
        <ElementTooltip v-bind="args">
          <button type="button" class="btn primary sm">
            긴 텍스트
          </button>
        </ElementTooltip>
      </div>
    `})},i={render:()=>({components:{ElementTooltip:e},template:`
      <div style="padding: 100px; text-align: center; display: flex; gap: 20px; justify-content: center;">
        <ElementTooltip msg="첫 번째 툴팁" placement="top">
          <button type="button" class="btn primary sm">버튼 1</button>
        </ElementTooltip>

        <ElementTooltip msg="두 번째 툴팁" placement="bottom">
          <button type="button" class="btn danger sm">버튼 2</button>
        </ElementTooltip>

        <ElementTooltip msg="세 번째 툴팁" placement="left">
          <button type="button" class="btn sm">버튼 3</button>
        </ElementTooltip>
      </div>
    `})};var m,c,d;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    msg: '기본 툴팁입니다',
    isHover: true,
    arrow: true,
    placement: 'top',
    className: '',
    offsetSkid: 0,
    offsetDistance: 12
  },
  render: args => ({
    components: {
      ElementTooltip
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="padding: 100px; text-align: center;">
        <ElementTooltip v-bind="args">
          <button type="button" class="btn primary sm">
            마우스를 올려보세요
          </button>
        </ElementTooltip>
      </div>
    \`
  })
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var g,b,C;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    msg: '상단 툴팁',
    isHover: true,
    arrow: true,
    placement: 'top',
    offsetDistance: 12
  },
  render: args => ({
    components: {
      ElementTooltip
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="padding: 100px; text-align: center;">
        <ElementTooltip v-bind="args">
          <button type="button" class="btn primary sm">
            Top
          </button>
        </ElementTooltip>
      </div>
    \`
  })
}`,...(C=(b=o.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var E,T,v;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    msg: '하단 툴팁',
    isHover: true,
    arrow: true,
    placement: 'bottom',
    offsetDistance: 12
  },
  render: args => ({
    components: {
      ElementTooltip
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="padding: 100px; text-align: center;">
        <ElementTooltip v-bind="args">
          <button type="button" class="btn primary sm">
            Bottom
          </button>
        </ElementTooltip>
      </div>
    \`
  })
}`,...(v=(T=r.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var y,D,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    msg: '좌측 툴팁',
    isHover: true,
    arrow: true,
    placement: 'left',
    offsetDistance: 12
  },
  render: args => ({
    components: {
      ElementTooltip
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="padding: 100px; text-align: center;">
        <ElementTooltip v-bind="args">
          <button type="button" class="btn primary sm">
            Left
          </button>
        </ElementTooltip>
      </div>
    \`
  })
}`,...(f=(D=s.parameters)==null?void 0:D.docs)==null?void 0:f.source}}};var x,B,w;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    msg: '우측 툴팁',
    isHover: true,
    arrow: true,
    placement: 'right',
    offsetDistance: 12
  },
  render: args => ({
    components: {
      ElementTooltip
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="padding: 100px; text-align: center;">
        <ElementTooltip v-bind="args">
          <button type="button" class="btn primary sm">
            Right
          </button>
        </ElementTooltip>
      </div>
    \`
  })
}`,...(w=(B=a.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};var H,A,S;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    msg: '화살표 없는 툴팁',
    isHover: true,
    arrow: false,
    placement: 'top',
    offsetDistance: 12
  },
  render: args => ({
    components: {
      ElementTooltip
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="padding: 100px; text-align: center;">
        <ElementTooltip v-bind="args">
          <button type="button" class="btn primary sm">
            화살표 없음
          </button>
        </ElementTooltip>
      </div>
    \`
  })
}`,...(S=(A=p.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var h,F,L;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    isHover: true,
    arrow: true,
    placement: 'top',
    offsetDistance: 12
  },
  render: args => ({
    components: {
      ElementTooltip
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="padding: 100px; text-align: center;">
        <ElementTooltip v-bind="args">
          <button type="button" class="btn primary sm">
            커스텀 콘텐츠
          </button>
          <template #detailBody>
            <div style="padding: 8px;">
              <strong>제목</strong>
              <p style="margin: 4px 0 0 0;">커스텀 HTML 콘텐츠를 표시할 수 있습니다.</p>
            </div>
          </template>
        </ElementTooltip>
      </div>
    \`
  })
}`,...(L=(F=u.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var _,N,M;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    msg: '이것은 매우 긴 툴팁 메시지입니다. 툴팁은 자동으로 줄바꿈되어 표시됩니다.',
    isHover: true,
    arrow: true,
    placement: 'top',
    offsetDistance: 12
  },
  render: args => ({
    components: {
      ElementTooltip
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="padding: 100px; text-align: center;">
        <ElementTooltip v-bind="args">
          <button type="button" class="btn primary sm">
            긴 텍스트
          </button>
        </ElementTooltip>
      </div>
    \`
  })
}`,...(M=(N=l.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var R,k,j;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementTooltip
    },
    template: \`
      <div style="padding: 100px; text-align: center; display: flex; gap: 20px; justify-content: center;">
        <ElementTooltip msg="첫 번째 툴팁" placement="top">
          <button type="button" class="btn primary sm">버튼 1</button>
        </ElementTooltip>

        <ElementTooltip msg="두 번째 툴팁" placement="bottom">
          <button type="button" class="btn danger sm">버튼 2</button>
        </ElementTooltip>

        <ElementTooltip msg="세 번째 툴팁" placement="left">
          <button type="button" class="btn sm">버튼 3</button>
        </ElementTooltip>
      </div>
    \`
  })
}`,...(j=(k=i.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};const G=["Default","Top","Bottom","Left","Right","NoArrow","CustomContent","LongText","MultipleTooltips"];export{r as Bottom,u as CustomContent,n as Default,s as Left,l as LongText,i as MultipleTooltips,p as NoArrow,a as Right,o as Top,G as __namedExportsOrder,z as default};
