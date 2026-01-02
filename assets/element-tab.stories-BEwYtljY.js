import{a as L,c as g,x as m,F as O,C as U,n as y,o as x,A as q,D as G,m as i}from"./vue.esm-bundler-C23JohzN.js";const J=["onClick"],t={__name:"element-tab",props:{modelValue:{type:[String,Number],default:""},options:{type:Array,default(){return[]}},className:{type:String,default:"tab_primary"}},emits:["update:modelValue","click"],setup(e,{emit:n}){const l=e,a=n,o=L({get(){return l.modelValue},set(d){return a("update:modelValue",d)}}),I=async d=>{o.value=d.value,await G(),a("click",d.value)};return(d,K)=>(x(),g("div",{class:y(e.className)},[m("ul",null,[(x(!0),g(O,null,U(e.options,s=>(x(),g("li",{key:s.value,class:y([s.value===o.value?"active":""])},[m("button",{type:"button",onClick:Q=>I(s)},q(s.label),9,J)],2))),128))])],2))}};t.__docgenInfo={exportName:"default",displayName:"element-tab",description:"",tags:{},props:[{name:"modelValue",type:{name:"string|number"},defaultValue:{func:!1,value:"''"}},{name:"options",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"'tab_primary'"}}],events:[{name:"update:modelValue"},{name:"click"}],sourceFiles:["/Users/kokimin/WorkSpace/npm-framework/src/components/navigation/ElementTab/element-tab.vue"]};const X={title:"Navigation/ElementTab",component:t,tags:["autodocs"],argTypes:{modelValue:{control:"text",description:"선택된 탭 값"},options:{control:"object",description:"탭 옵션 배열 [{ label, value }]"},className:{control:"text",description:"CSS 클래스명"}}},u={args:{modelValue:"tab1",className:"tab_primary",options:[{label:"탭 1",value:"tab1"},{label:"탭 2",value:"tab2"},{label:"탭 3",value:"tab3"}]},render:e=>({components:{ElementTab:t},setup(){const n=i(e.modelValue);return{args:e,activeTab:n}},template:`
      <div>
        <ElementTab
          v-model="activeTab"
          :options="args.options"
          :className="args.className"
        />
        <div style="margin-top: 16px; padding: 16px; border: 1px solid #ddd; border-radius: 4px;">
          <p style="margin: 0;">현재 선택된 탭: <strong>{{ activeTab }}</strong></p>
        </div>
      </div>
    `})},p={render:()=>({components:{ElementTab:t},setup(){return{activeTab:i("home"),options:[{label:"홈",value:"home"},{label:"프로필",value:"profile"},{label:"설정",value:"settings"}]}},template:`
      <div>
        <ElementTab
          v-model="activeTab"
          :options="options"
        />

        <div style="margin-top: 16px; padding: 20px; border: 1px solid #ddd; border-radius: 4px; background: white;">
          <div v-if="activeTab === 'home'">
            <h3 style="margin: 0 0 12px 0;">홈</h3>
            <p style="margin: 0;">홈 페이지 콘텐츠입니다. 여기에서 최신 정보를 확인할 수 있습니다.</p>
          </div>

          <div v-else-if="activeTab === 'profile'">
            <h3 style="margin: 0 0 12px 0;">프로필</h3>
            <p style="margin: 0;">사용자 프로필 정보가 표시됩니다.</p>
          </div>

          <div v-else-if="activeTab === 'settings'">
            <h3 style="margin: 0 0 12px 0;">설정</h3>
            <p style="margin: 0;">앱 설정을 변경할 수 있습니다.</p>
          </div>
        </div>
      </div>
    `})},r={render:()=>({components:{ElementTab:t},setup(){return{activeTab:i("description"),options:[{label:"상품 설명",value:"description"},{label:"상세 정보",value:"details"},{label:"리뷰",value:"reviews"},{label:"배송/환불",value:"shipping"}]}},template:`
      <div style="max-width: 800px;">
        <ElementTab
          v-model="activeTab"
          :options="options"
        />

        <div style="margin-top: 16px; padding: 24px; border: 1px solid #ddd; border-radius: 4px; background: white;">
          <div v-if="activeTab === 'description'">
            <h3 style="margin: 0 0 16px 0;">상품 설명</h3>
            <p style="margin: 0 0 12px 0; line-height: 1.6;">
              이 제품은 최고급 소재로 만들어진 프리미엄 상품입니다.
              뛰어난 품질과 세련된 디자인으로 고객님의 만족도를 높여드립니다.
            </p>
            <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
              <li>고급 소재 사용</li>
              <li>세련된 디자인</li>
              <li>내구성 우수</li>
              <li>다양한 색상 옵션</li>
            </ul>
          </div>

          <div v-else-if="activeTab === 'details'">
            <h3 style="margin: 0 0 16px 0;">상세 정보</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 12px; font-weight: bold; width: 30%; background: #f5f5f5;">브랜드</td>
                <td style="padding: 12px;">Premium Brand</td>
              </tr>
              <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 12px; font-weight: bold; background: #f5f5f5;">제조국</td>
                <td style="padding: 12px;">대한민국</td>
              </tr>
              <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 12px; font-weight: bold; background: #f5f5f5;">소재</td>
                <td style="padding: 12px;">천연 소재 100%</td>
              </tr>
              <tr>
                <td style="padding: 12px; font-weight: bold; background: #f5f5f5;">보증 기간</td>
                <td style="padding: 12px;">1년</td>
              </tr>
            </table>
          </div>

          <div v-else-if="activeTab === 'reviews'">
            <h3 style="margin: 0 0 16px 0;">리뷰</h3>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div style="padding: 16px; border: 1px solid #ddd; border-radius: 4px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                  <strong>홍길동</strong>
                  <span style="color: #ff9800;">★★★★★</span>
                </div>
                <p style="margin: 0; color: #666;">품질이 매우 좋습니다. 추천합니다!</p>
              </div>
              <div style="padding: 16px; border: 1px solid #ddd; border-radius: 4px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                  <strong>김철수</strong>
                  <span style="color: #ff9800;">★★★★☆</span>
                </div>
                <p style="margin: 0; color: #666;">가격 대비 만족스럽습니다.</p>
              </div>
            </div>
          </div>

          <div v-else-if="activeTab === 'shipping'">
            <h3 style="margin: 0 0 16px 0;">배송/환불</h3>
            <div style="line-height: 1.8;">
              <p style="margin: 0 0 12px 0;"><strong>배송 안내</strong></p>
              <ul style="margin: 0 0 20px 0; padding-left: 20px;">
                <li>배송비: 3,000원 (30,000원 이상 무료)</li>
                <li>배송 기간: 2-3 영업일</li>
                <li>제주/도서산간 지역은 추가 배송비 발생</li>
              </ul>
              <p style="margin: 0 0 12px 0;"><strong>환불 안내</strong></p>
              <ul style="margin: 0; padding-left: 20px;">
                <li>수령 후 7일 이내 반품 가능</li>
                <li>상품 하자 시 무료 반품</li>
                <li>단순 변심 시 왕복 배송비 고객 부담</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `})},c={render:()=>({components:{ElementTab:t},setup(){return{activeTab:i("overview"),options:[{label:"개요",value:"overview"},{label:"통계",value:"stats"},{label:"활동",value:"activity"}],stats:{users:1250,revenue:542e4,orders:342,growth:15.3}}},template:`
      <div style="max-width: 900px;">
        <ElementTab
          v-model="activeTab"
          :options="options"
        />

        <div style="margin-top: 16px; padding: 24px; border: 1px solid #ddd; border-radius: 4px; background: white;">
          <div v-if="activeTab === 'overview'">
            <h3 style="margin: 0 0 20px 0;">대시보드 개요</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
              <div style="padding: 20px; background: #e3f2fd; border-radius: 8px;">
                <p style="margin: 0 0 8px 0; color: #1565c0; font-size: 14px;">총 사용자</p>
                <p style="margin: 0; font-size: 32px; font-weight: bold; color: #1565c0;">{{ stats.users }}</p>
              </div>
              <div style="padding: 20px; background: #e8f5e9; border-radius: 8px;">
                <p style="margin: 0 0 8px 0; color: #2e7d32; font-size: 14px;">매출</p>
                <p style="margin: 0; font-size: 32px; font-weight: bold; color: #2e7d32;">₩{{ (stats.revenue / 10000).toFixed(0) }}만</p>
              </div>
              <div style="padding: 20px; background: #fff3e0; border-radius: 8px;">
                <p style="margin: 0 0 8px 0; color: #e65100; font-size: 14px;">주문 수</p>
                <p style="margin: 0; font-size: 32px; font-weight: bold; color: #e65100;">{{ stats.orders }}</p>
              </div>
              <div style="padding: 20px; background: #f3e5f5; border-radius: 8px;">
                <p style="margin: 0 0 8px 0; color: #7b1fa2; font-size: 14px;">성장률</p>
                <p style="margin: 0; font-size: 32px; font-weight: bold; color: #7b1fa2;">{{ stats.growth }}%</p>
              </div>
            </div>
          </div>

          <div v-else-if="activeTab === 'stats'">
            <h3 style="margin: 0 0 20px 0;">상세 통계</h3>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div style="padding: 16px; background: #f5f5f5; border-radius: 4px;">
                <p style="margin: 0 0 8px 0; font-weight: bold;">월별 매출</p>
                <div style="height: 8px; background: #e0e0e0; border-radius: 4px; overflow: hidden;">
                  <div style="width: 75%; height: 100%; background: #4caf50;"></div>
                </div>
                <p style="margin: 8px 0 0 0; font-size: 13px; color: #666;">목표 대비 75% 달성</p>
              </div>
              <div style="padding: 16px; background: #f5f5f5; border-radius: 4px;">
                <p style="margin: 0 0 8px 0; font-weight: bold;">신규 가입자</p>
                <div style="height: 8px; background: #e0e0e0; border-radius: 4px; overflow: hidden;">
                  <div style="width: 90%; height: 100%; background: #2196f3;"></div>
                </div>
                <p style="margin: 8px 0 0 0; font-size: 13px; color: #666;">목표 대비 90% 달성</p>
              </div>
            </div>
          </div>

          <div v-else-if="activeTab === 'activity'">
            <h3 style="margin: 0 0 20px 0;">최근 활동</h3>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <div style="display: flex; gap: 12px; padding: 12px; border-left: 3px solid #1976d2; background: #f5f5f5;">
                <div style="width: 40px; height: 40px; border-radius: 50%; background: #1976d2; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">A</div>
                <div style="flex: 1;">
                  <p style="margin: 0 0 4px 0; font-weight: bold;">새로운 주문</p>
                  <p style="margin: 0; font-size: 13px; color: #666;">홍길동 고객님이 주문했습니다 - 5분 전</p>
                </div>
              </div>
              <div style="display: flex; gap: 12px; padding: 12px; border-left: 3px solid #4caf50; background: #f5f5f5;">
                <div style="width: 40px; height: 40px; border-radius: 50%; background: #4caf50; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">B</div>
                <div style="flex: 1;">
                  <p style="margin: 0 0 4px 0; font-weight: bold;">결제 완료</p>
                  <p style="margin: 0; font-size: 13px; color: #666;">김철수 고객님의 결제가 완료되었습니다 - 15분 전</p>
                </div>
              </div>
              <div style="display: flex; gap: 12px; padding: 12px; border-left: 3px solid #ff9800; background: #f5f5f5;">
                <div style="width: 40px; height: 40px; border-radius: 50%; background: #ff9800; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">C</div>
                <div style="flex: 1;">
                  <p style="margin: 0 0 4px 0; font-weight: bold;">신규 가입</p>
                  <p style="margin: 0; font-size: 13px; color: #666;">이영희 님이 회원가입 했습니다 - 30분 전</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `})},b={render:()=>({components:{ElementTab:t},setup(){return{activeTab:i("account"),options:[{label:"계정",value:"account"},{label:"보안",value:"security"},{label:"알림",value:"notifications"},{label:"개인정보",value:"privacy"}]}},template:`
      <div style="max-width: 700px;">
        <h2 style="margin: 0 0 16px 0;">설정</h2>
        <ElementTab
          v-model="activeTab"
          :options="options"
        />

        <div style="margin-top: 16px; padding: 24px; border: 1px solid #ddd; border-radius: 4px; background: white;">
          <div v-if="activeTab === 'account'">
            <h3 style="margin: 0 0 16px 0;">계정 설정</h3>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <label style="display: block; margin-bottom: 4px; font-weight: bold;">이메일</label>
                <input type="email" value="user@example.com" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box;" />
              </div>
              <div>
                <label style="display: block; margin-bottom: 4px; font-weight: bold;">이름</label>
                <input type="text" value="홍길동" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box;" />
              </div>
              <button style="padding: 10px 20px; background: #1976d2; color: white; border: none; border-radius: 4px; cursor: pointer;">저장</button>
            </div>
          </div>

          <div v-else-if="activeTab === 'security'">
            <h3 style="margin: 0 0 16px 0;">보안 설정</h3>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <label style="display: block; margin-bottom: 4px; font-weight: bold;">현재 비밀번호</label>
                <input type="password" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box;" />
              </div>
              <div>
                <label style="display: block; margin-bottom: 4px; font-weight: bold;">새 비밀번호</label>
                <input type="password" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box;" />
              </div>
              <div>
                <label style="display: block; margin-bottom: 4px; font-weight: bold;">비밀번호 확인</label>
                <input type="password" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box;" />
              </div>
              <button style="padding: 10px 20px; background: #1976d2; color: white; border: none; border-radius: 4px; cursor: pointer;">비밀번호 변경</button>
            </div>
          </div>

          <div v-else-if="activeTab === 'notifications'">
            <h3 style="margin: 0 0 16px 0;">알림 설정</h3>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <label style="display: flex; align-items: center; gap: 8px;">
                <input type="checkbox" checked />
                <span>이메일 알림 받기</span>
              </label>
              <label style="display: flex; align-items: center; gap: 8px;">
                <input type="checkbox" />
                <span>푸시 알림 받기</span>
              </label>
              <label style="display: flex; align-items: center; gap: 8px;">
                <input type="checkbox" checked />
                <span>SMS 알림 받기</span>
              </label>
            </div>
          </div>

          <div v-else-if="activeTab === 'privacy'">
            <h3 style="margin: 0 0 16px 0;">개인정보 설정</h3>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <label style="display: flex; align-items: center; gap: 8px;">
                <input type="checkbox" />
                <span>프로필 공개</span>
              </label>
              <label style="display: flex; align-items: center; gap: 8px;">
                <input type="checkbox" />
                <span>활동 내역 공개</span>
              </label>
              <label style="display: flex; align-items: center; gap: 8px;">
                <input type="checkbox" checked />
                <span>검색 엔진 노출 허용</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    `})},C={render:()=>({components:{ElementTab:t},setup(){const e=i("tab1"),n=Array.from({length:8},(l,a)=>({label:`탭 ${a+1}`,value:`tab${a+1}`}));return{activeTab:e,options:n}},template:`
      <div>
      <ElementTab
      v-model="activeTab"
    :options="options"
        />
        <div style="margin-top: 16px; padding: 16px; border: 1px solid #ddd; border-radius: 4px;">
        <p style="margin: 0;">현재 탭: <strong>{{ activeTab }}</strong></p>
    </div>
    </div>
      `})},v={render:()=>({components:{ElementTab:t},setup(){const e=i("home"),n=i(0);return{activeTab:e,clickCount:n,options:[{label:"홈",value:"home"},{label:"소개",value:"about"},{label:"연락처",value:"contact"}],handleClick:o=>{n.value++,console.log("Tab clicked:",o)}}},template:`
      <div>
      <ElementTab
      v-model="activeTab"
    :options="options"
    @click="handleClick"
        />
        <div style="margin-top: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
        <p style="margin: 0 0 4px 0;"><strong>활성 탭:</strong> {{ activeTab }}</p>
      <p style="margin: 0;"><strong>클릭 횟수:</strong> {{ clickCount }}</p>
    </div>
    </div>
      `})};var f,h,B;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    modelValue: 'tab1',
    className: 'tab_primary',
    options: [{
      label: '탭 1',
      value: 'tab1'
    }, {
      label: '탭 2',
      value: 'tab2'
    }, {
      label: '탭 3',
      value: 'tab3'
    }]
  },
  render: args => ({
    components: {
      ElementTab
    },
    setup() {
      const activeTab = ref(args.modelValue);
      return {
        args,
        activeTab
      };
    },
    template: \`
      <div>
        <ElementTab
          v-model="activeTab"
          :options="args.options"
          :className="args.className"
        />
        <div style="margin-top: 16px; padding: 16px; border: 1px solid #ddd; border-radius: 4px;">
          <p style="margin: 0;">현재 선택된 탭: <strong>{{ activeTab }}</strong></p>
        </div>
      </div>
    \`
  })
}`,...(B=(h=u.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var D,w,T;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementTab
    },
    setup() {
      const activeTab = ref('home');
      const options = [{
        label: '홈',
        value: 'home'
      }, {
        label: '프로필',
        value: 'profile'
      }, {
        label: '설정',
        value: 'settings'
      }];
      return {
        activeTab,
        options
      };
    },
    template: \`
      <div>
        <ElementTab
          v-model="activeTab"
          :options="options"
        />

        <div style="margin-top: 16px; padding: 20px; border: 1px solid #ddd; border-radius: 4px; background: white;">
          <div v-if="activeTab === 'home'">
            <h3 style="margin: 0 0 12px 0;">홈</h3>
            <p style="margin: 0;">홈 페이지 콘텐츠입니다. 여기에서 최신 정보를 확인할 수 있습니다.</p>
          </div>

          <div v-else-if="activeTab === 'profile'">
            <h3 style="margin: 0 0 12px 0;">프로필</h3>
            <p style="margin: 0;">사용자 프로필 정보가 표시됩니다.</p>
          </div>

          <div v-else-if="activeTab === 'settings'">
            <h3 style="margin: 0 0 12px 0;">설정</h3>
            <p style="margin: 0;">앱 설정을 변경할 수 있습니다.</p>
          </div>
        </div>
      </div>
    \`
  })
}`,...(T=(w=p.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var k,A,E;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementTab
    },
    setup() {
      const activeTab = ref('description');
      const options = [{
        label: '상품 설명',
        value: 'description'
      }, {
        label: '상세 정보',
        value: 'details'
      }, {
        label: '리뷰',
        value: 'reviews'
      }, {
        label: '배송/환불',
        value: 'shipping'
      }];
      return {
        activeTab,
        options
      };
    },
    template: \`
      <div style="max-width: 800px;">
        <ElementTab
          v-model="activeTab"
          :options="options"
        />

        <div style="margin-top: 16px; padding: 24px; border: 1px solid #ddd; border-radius: 4px; background: white;">
          <div v-if="activeTab === 'description'">
            <h3 style="margin: 0 0 16px 0;">상품 설명</h3>
            <p style="margin: 0 0 12px 0; line-height: 1.6;">
              이 제품은 최고급 소재로 만들어진 프리미엄 상품입니다.
              뛰어난 품질과 세련된 디자인으로 고객님의 만족도를 높여드립니다.
            </p>
            <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
              <li>고급 소재 사용</li>
              <li>세련된 디자인</li>
              <li>내구성 우수</li>
              <li>다양한 색상 옵션</li>
            </ul>
          </div>

          <div v-else-if="activeTab === 'details'">
            <h3 style="margin: 0 0 16px 0;">상세 정보</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 12px; font-weight: bold; width: 30%; background: #f5f5f5;">브랜드</td>
                <td style="padding: 12px;">Premium Brand</td>
              </tr>
              <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 12px; font-weight: bold; background: #f5f5f5;">제조국</td>
                <td style="padding: 12px;">대한민국</td>
              </tr>
              <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 12px; font-weight: bold; background: #f5f5f5;">소재</td>
                <td style="padding: 12px;">천연 소재 100%</td>
              </tr>
              <tr>
                <td style="padding: 12px; font-weight: bold; background: #f5f5f5;">보증 기간</td>
                <td style="padding: 12px;">1년</td>
              </tr>
            </table>
          </div>

          <div v-else-if="activeTab === 'reviews'">
            <h3 style="margin: 0 0 16px 0;">리뷰</h3>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div style="padding: 16px; border: 1px solid #ddd; border-radius: 4px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                  <strong>홍길동</strong>
                  <span style="color: #ff9800;">★★★★★</span>
                </div>
                <p style="margin: 0; color: #666;">품질이 매우 좋습니다. 추천합니다!</p>
              </div>
              <div style="padding: 16px; border: 1px solid #ddd; border-radius: 4px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                  <strong>김철수</strong>
                  <span style="color: #ff9800;">★★★★☆</span>
                </div>
                <p style="margin: 0; color: #666;">가격 대비 만족스럽습니다.</p>
              </div>
            </div>
          </div>

          <div v-else-if="activeTab === 'shipping'">
            <h3 style="margin: 0 0 16px 0;">배송/환불</h3>
            <div style="line-height: 1.8;">
              <p style="margin: 0 0 12px 0;"><strong>배송 안내</strong></p>
              <ul style="margin: 0 0 20px 0; padding-left: 20px;">
                <li>배송비: 3,000원 (30,000원 이상 무료)</li>
                <li>배송 기간: 2-3 영업일</li>
                <li>제주/도서산간 지역은 추가 배송비 발생</li>
              </ul>
              <p style="margin: 0 0 12px 0;"><strong>환불 안내</strong></p>
              <ul style="margin: 0; padding-left: 20px;">
                <li>수령 후 7일 이내 반품 가능</li>
                <li>상품 하자 시 무료 반품</li>
                <li>단순 변심 시 왕복 배송비 고객 부담</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    \`
  })
}`,...(E=(A=r.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var z,F,S;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementTab
    },
    setup() {
      const activeTab = ref('overview');
      const options = [{
        label: '개요',
        value: 'overview'
      }, {
        label: '통계',
        value: 'stats'
      }, {
        label: '활동',
        value: 'activity'
      }];
      const stats = {
        users: 1250,
        revenue: 5420000,
        orders: 342,
        growth: 15.3
      };
      return {
        activeTab,
        options,
        stats
      };
    },
    template: \`
      <div style="max-width: 900px;">
        <ElementTab
          v-model="activeTab"
          :options="options"
        />

        <div style="margin-top: 16px; padding: 24px; border: 1px solid #ddd; border-radius: 4px; background: white;">
          <div v-if="activeTab === 'overview'">
            <h3 style="margin: 0 0 20px 0;">대시보드 개요</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
              <div style="padding: 20px; background: #e3f2fd; border-radius: 8px;">
                <p style="margin: 0 0 8px 0; color: #1565c0; font-size: 14px;">총 사용자</p>
                <p style="margin: 0; font-size: 32px; font-weight: bold; color: #1565c0;">{{ stats.users }}</p>
              </div>
              <div style="padding: 20px; background: #e8f5e9; border-radius: 8px;">
                <p style="margin: 0 0 8px 0; color: #2e7d32; font-size: 14px;">매출</p>
                <p style="margin: 0; font-size: 32px; font-weight: bold; color: #2e7d32;">₩{{ (stats.revenue / 10000).toFixed(0) }}만</p>
              </div>
              <div style="padding: 20px; background: #fff3e0; border-radius: 8px;">
                <p style="margin: 0 0 8px 0; color: #e65100; font-size: 14px;">주문 수</p>
                <p style="margin: 0; font-size: 32px; font-weight: bold; color: #e65100;">{{ stats.orders }}</p>
              </div>
              <div style="padding: 20px; background: #f3e5f5; border-radius: 8px;">
                <p style="margin: 0 0 8px 0; color: #7b1fa2; font-size: 14px;">성장률</p>
                <p style="margin: 0; font-size: 32px; font-weight: bold; color: #7b1fa2;">{{ stats.growth }}%</p>
              </div>
            </div>
          </div>

          <div v-else-if="activeTab === 'stats'">
            <h3 style="margin: 0 0 20px 0;">상세 통계</h3>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div style="padding: 16px; background: #f5f5f5; border-radius: 4px;">
                <p style="margin: 0 0 8px 0; font-weight: bold;">월별 매출</p>
                <div style="height: 8px; background: #e0e0e0; border-radius: 4px; overflow: hidden;">
                  <div style="width: 75%; height: 100%; background: #4caf50;"></div>
                </div>
                <p style="margin: 8px 0 0 0; font-size: 13px; color: #666;">목표 대비 75% 달성</p>
              </div>
              <div style="padding: 16px; background: #f5f5f5; border-radius: 4px;">
                <p style="margin: 0 0 8px 0; font-weight: bold;">신규 가입자</p>
                <div style="height: 8px; background: #e0e0e0; border-radius: 4px; overflow: hidden;">
                  <div style="width: 90%; height: 100%; background: #2196f3;"></div>
                </div>
                <p style="margin: 8px 0 0 0; font-size: 13px; color: #666;">목표 대비 90% 달성</p>
              </div>
            </div>
          </div>

          <div v-else-if="activeTab === 'activity'">
            <h3 style="margin: 0 0 20px 0;">최근 활동</h3>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <div style="display: flex; gap: 12px; padding: 12px; border-left: 3px solid #1976d2; background: #f5f5f5;">
                <div style="width: 40px; height: 40px; border-radius: 50%; background: #1976d2; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">A</div>
                <div style="flex: 1;">
                  <p style="margin: 0 0 4px 0; font-weight: bold;">새로운 주문</p>
                  <p style="margin: 0; font-size: 13px; color: #666;">홍길동 고객님이 주문했습니다 - 5분 전</p>
                </div>
              </div>
              <div style="display: flex; gap: 12px; padding: 12px; border-left: 3px solid #4caf50; background: #f5f5f5;">
                <div style="width: 40px; height: 40px; border-radius: 50%; background: #4caf50; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">B</div>
                <div style="flex: 1;">
                  <p style="margin: 0 0 4px 0; font-weight: bold;">결제 완료</p>
                  <p style="margin: 0; font-size: 13px; color: #666;">김철수 고객님의 결제가 완료되었습니다 - 15분 전</p>
                </div>
              </div>
              <div style="display: flex; gap: 12px; padding: 12px; border-left: 3px solid #ff9800; background: #f5f5f5;">
                <div style="width: 40px; height: 40px; border-radius: 50%; background: #ff9800; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">C</div>
                <div style="flex: 1;">
                  <p style="margin: 0 0 4px 0; font-weight: bold;">신규 가입</p>
                  <p style="margin: 0; font-size: 13px; color: #666;">이영희 님이 회원가입 했습니다 - 30분 전</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    \`
  })
}`,...(S=(F=c.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};var V,N,_;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementTab
    },
    setup() {
      const activeTab = ref('account');
      const options = [{
        label: '계정',
        value: 'account'
      }, {
        label: '보안',
        value: 'security'
      }, {
        label: '알림',
        value: 'notifications'
      }, {
        label: '개인정보',
        value: 'privacy'
      }];
      return {
        activeTab,
        options
      };
    },
    template: \`
      <div style="max-width: 700px;">
        <h2 style="margin: 0 0 16px 0;">설정</h2>
        <ElementTab
          v-model="activeTab"
          :options="options"
        />

        <div style="margin-top: 16px; padding: 24px; border: 1px solid #ddd; border-radius: 4px; background: white;">
          <div v-if="activeTab === 'account'">
            <h3 style="margin: 0 0 16px 0;">계정 설정</h3>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <label style="display: block; margin-bottom: 4px; font-weight: bold;">이메일</label>
                <input type="email" value="user@example.com" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box;" />
              </div>
              <div>
                <label style="display: block; margin-bottom: 4px; font-weight: bold;">이름</label>
                <input type="text" value="홍길동" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box;" />
              </div>
              <button style="padding: 10px 20px; background: #1976d2; color: white; border: none; border-radius: 4px; cursor: pointer;">저장</button>
            </div>
          </div>

          <div v-else-if="activeTab === 'security'">
            <h3 style="margin: 0 0 16px 0;">보안 설정</h3>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <label style="display: block; margin-bottom: 4px; font-weight: bold;">현재 비밀번호</label>
                <input type="password" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box;" />
              </div>
              <div>
                <label style="display: block; margin-bottom: 4px; font-weight: bold;">새 비밀번호</label>
                <input type="password" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box;" />
              </div>
              <div>
                <label style="display: block; margin-bottom: 4px; font-weight: bold;">비밀번호 확인</label>
                <input type="password" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box;" />
              </div>
              <button style="padding: 10px 20px; background: #1976d2; color: white; border: none; border-radius: 4px; cursor: pointer;">비밀번호 변경</button>
            </div>
          </div>

          <div v-else-if="activeTab === 'notifications'">
            <h3 style="margin: 0 0 16px 0;">알림 설정</h3>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <label style="display: flex; align-items: center; gap: 8px;">
                <input type="checkbox" checked />
                <span>이메일 알림 받기</span>
              </label>
              <label style="display: flex; align-items: center; gap: 8px;">
                <input type="checkbox" />
                <span>푸시 알림 받기</span>
              </label>
              <label style="display: flex; align-items: center; gap: 8px;">
                <input type="checkbox" checked />
                <span>SMS 알림 받기</span>
              </label>
            </div>
          </div>

          <div v-else-if="activeTab === 'privacy'">
            <h3 style="margin: 0 0 16px 0;">개인정보 설정</h3>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <label style="display: flex; align-items: center; gap: 8px;">
                <input type="checkbox" />
                <span>프로필 공개</span>
              </label>
              <label style="display: flex; align-items: center; gap: 8px;">
                <input type="checkbox" />
                <span>활동 내역 공개</span>
              </label>
              <label style="display: flex; align-items: center; gap: 8px;">
                <input type="checkbox" checked />
                <span>검색 엔진 노출 허용</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    \`
  })
}`,...(_=(N=b.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var j,W,$;C.parameters={...C.parameters,docs:{...(j=C.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementTab
    },
    setup() {
      const activeTab = ref('tab1');
      const options = Array.from({
        length: 8
      }, (_, i) => ({
        label: \`탭 \${i + 1}\`,
        value: \`tab\${i + 1}\`
      }));
      return {
        activeTab,
        options
      };
    },
    template: \`
      <div>
      <ElementTab
      v-model="activeTab"
    :options="options"
        />
        <div style="margin-top: 16px; padding: 16px; border: 1px solid #ddd; border-radius: 4px;">
        <p style="margin: 0;">현재 탭: <strong>{{ activeTab }}</strong></p>
    </div>
    </div>
      \`
  })
}`,...($=(W=C.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var M,P,H;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ElementTab
    },
    setup() {
      const activeTab = ref('home');
      const clickCount = ref(0);
      const options = [{
        label: '홈',
        value: 'home'
      }, {
        label: '소개',
        value: 'about'
      }, {
        label: '연락처',
        value: 'contact'
      }];
      const handleClick = value => {
        clickCount.value++;
        console.log('Tab clicked:', value);
      };
      return {
        activeTab,
        clickCount,
        options,
        handleClick
      };
    },
    template: \`
      <div>
      <ElementTab
      v-model="activeTab"
    :options="options"
    @click="handleClick"
        />
        <div style="margin-top: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
        <p style="margin: 0 0 4px 0;"><strong>활성 탭:</strong> {{ activeTab }}</p>
      <p style="margin: 0;"><strong>클릭 횟수:</strong> {{ clickCount }}</p>
    </div>
    </div>
      \`
  })
}`,...(H=(P=v.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};const Y=["Default","WithContent","ProductTabs","DashboardTabs","SettingsTabs","ManyTabs","WithClickEvent"];export{c as DashboardTabs,u as Default,C as ManyTabs,r as ProductTabs,b as SettingsTabs,v as WithClickEvent,p as WithContent,Y as __namedExportsOrder,X as default};
