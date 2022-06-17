import * as React from "react";
import { PricingTable, PricingSlot, PricingDetail } from "react-pricing-table";

const MyComponent = () => {
  return (
    <>
      <PricingTable highlightColor="#0336ff">
        <PricingSlot
          highlighted
          buttonText="자세히보기"
          shouldDisplayButton={false}
          title="일반형"
          priceText="180만원/월"
        >
          <PricingDetail>
            {" "}
            최소 <b>200건</b> 월별 포스팅
          </PricingDetail>
          <PricingDetail>
            {" "}
            전체 카테고리 <b>오픈</b>
          </PricingDetail>
          <PricingDetail> 실시간 리포트 제공</PricingDetail>
          <PricingDetail>
            {" "}
            <b>지역독점권</b> 부여
          </PricingDetail>
          <PricingDetail>
            {" "}
            일부 디테일 <b>조율가능</b>
          </PricingDetail>
          <PricingDetail> </PricingDetail>
        </PricingSlot>
        <PricingSlot
          buttonText="자세히보기"
          shouldDisplayButton={false}
          title="실속형"
          priceText="120만원/월"
        >
          <PricingDetail>
            {" "}
            최소 <b>75건</b> 월별 포스팅
          </PricingDetail>
          <PricingDetail>
            {" "}
            카테고리 <b>2개</b> 선택
          </PricingDetail>
          <PricingDetail> 실시간 리포트 제공</PricingDetail>
          <PricingDetail>
            {" "}
            지역독점권 <b>없음</b>
          </PricingDetail>
          <PricingDetail>
            {" "}
            일부 디테일 <b>조율가능</b>
          </PricingDetail>
          <PricingDetail> </PricingDetail>
        </PricingSlot>

        <PricingSlot
          buttonText="자세히보기"
          shouldDisplayButton={false}
          title="특화형"
          priceText="175만원/월"
        >
          <PricingDetail>
            {" "}
            최소 <b>160건</b> 월별 포스팅
          </PricingDetail>
          <PricingDetail>
            {" "}
            1개 카테고리 <b>지정</b>
          </PricingDetail>
          <PricingDetail> 실시간 리포트 제공</PricingDetail>
          <PricingDetail> 카테고리한정 독점권</PricingDetail>
          <PricingDetail>
            {" "}
            일부 디테일 <b>조율가능</b>
          </PricingDetail>
          <PricingDetail> </PricingDetail>
        </PricingSlot>
        <PricingSlot
          buttonText="자세히보기"
          shouldDisplayButton={false}
          title="기타 상품"
          priceText="별도문의"
        >
          <span className="unHL">
            <PricingDetail>
              {" "}
              컨텐츠 <b>커스터마이징</b>{" "}
            </PricingDetail>
            <PricingDetail>
              {" "}
              마케팅전략 <b>컨설팅</b> 제공
            </PricingDetail>
            <PricingDetail>
              {" "}
              <b>맞춤형상품</b> 설계
            </PricingDetail>
            <PricingDetail>
              {" "}
              <b>프랜차이즈</b> 일괄계약 등
            </PricingDetail>
            <PricingDetail> 자세한 사항은 문의바람</PricingDetail>
          </span>
          <PricingDetail> </PricingDetail>
        </PricingSlot>
      </PricingTable>
      <div
        className="tablecell"
        data-sal="slide-left"
        data-sal-duration="1000"
        data-sal-easing="ease"
      >
        <div className="details"></div>
        <div id="pricing" className="details">
          <details>
            <summary className="buttontypetext">
              &nbsp;💣 폭탄 블로그 일반형
            </summary>
            <p className="subdetails">
              월 180만원, 월간 포스팅 최소 200건
              <ul>
                <li>
                  압도적 물량 살포로 지역 장악을 원하는 분께 추천드리는 서비스
                </li>
                <li>진료 카테고리에 부합하는 키워드 세팅</li>
                <li>사전 상담을 통해 계약 수량 조정 및 커스터마이징 가능</li>
                <li>롱테일 키워드를 통해 다양한 스펙트럼의 고객유치에 적합</li>
              </ul>
            </p>
          </details>
        </div>
        <div className="details">
          <details>
            <summary className="buttontypetext">
              &nbsp;🧨 폭탄 블로그 실속형
            </summary>
            <p className="subdetails">
              월 120만원, 월별 포스팅 최소 75건
              <ul>
                <li>세부 카테고리 2개에 물량을 집중 </li>
                <li>가성비 있는 진행을 원하시는 분에게 적합</li>
                <li>사전상담을 통해 일부 디테일 변경 가능</li>
              </ul>
            </p>
          </details>
        </div>
        <div className="details">
          <details>
            <summary className="buttontypetext">
              &nbsp;🌟 폭탄 블로그 특화형
            </summary>
            <p className="subdetails">
              월 175만원, 월별 포스팅 최소 160건
              <ul>
                <li>카테고리 1개에 물량을 집중 </li>
                <li>특정 카테고리만 집중하는 분들에게 적합</li>
                <li>입원실한의원, 신경정신과, 피부질환 특화병의원 등에 추천</li>
                <li>사전상담을 통해 일부 디테일 변경 가능</li>
              </ul>
            </p>
          </details>
        </div>
        <div className="details">
          <details>
            <summary className="buttontypetext">
              &nbsp;🎉 프로모션 상품 안내
            </summary>
            <p className="subdetails">
              2022.6월 기준 프로모션 상품 목록입니다.
              <ul>
                <li>신규개원 병의원 대상</li>
                <li>입원실한의원 런칭이벤트</li>
                <li>치과 런칭이벤트</li>
              </ul>
              프로모션 이벤트는 기존 서비스보다 더 많은 물량을 프로모션가에
              진행하실 수 있습니다. 프로모션 대상자 여부는 별도문의 주시면
              안내해드립니다.
            </p>
          </details>
        </div>

        <p>
          일반형은 업종별로 <b>지역독점권</b>을 드리므로,
          늦게 신청하시면 서비스 진행이 불가할 수 있습니다. 실속형은
          지역독점권이 없고, 해당 카테고리 한정 독점권을 갖게 됩니다. 실속형은
          한 권역별 최대 2팀까지 가능합니다. 이외 별도 맞춤형 상품이
          필요하시다면 문의하기 메뉴를 활용해주세요.
        </p>
        <p className="subtext"> * 모든 상품은 VAT 별도입니다.</p>
      </div>
    </>
  );
};

export default MyComponent;
