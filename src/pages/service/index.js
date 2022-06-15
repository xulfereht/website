// Step 1: Import React
import * as React from "react";
import Layout from "../../components/layout";
import { Link } from "gatsby";
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';
 

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="서비스별 비용안내">
      <PricingTable  highlightColor='#0336ff'>
    
    <PricingSlot highlighted buttonText='신청하기' title='실속형' priceText='120만원/월'>
        <PricingDetail> 최소 <b>75 건</b> 월별 포스팅</PricingDetail>
        <PricingDetail> 카테고리 <b>2 개</b> 선택</PricingDetail>
        <PricingDetail> 실시간 <b> 리포트</b> 제공</PricingDetail>
        <PricingDetail> 지역독점권 <b>없음</b></PricingDetail>
        <PricingDetail> 일부 디테일 <b>조율 가능</b></PricingDetail>
    </PricingSlot>
    <PricingSlot  buttonText='신청하기' title='일반형' priceText='180만원/월'>
        <PricingDetail> 최소 <b>120 건</b> 월별 포스팅</PricingDetail>
        <PricingDetail> 전체 카테고리 <b>오픈</b></PricingDetail>
        <PricingDetail> 실시간 <b>리포트</b> 제공</PricingDetail>
        <PricingDetail> <b>지역독점권</b> 부여</PricingDetail>
        <PricingDetail> 일부 디테일 <b>조율 가능</b></PricingDetail>
    </PricingSlot>
    <PricingSlot   buttonText='신청하기' title='프로모션 상품' priceText='별도문의'>
        <PricingDetail> <b>추가물량</b> 및 할인혜택</PricingDetail>
        <PricingDetail> 컨텐츠 <b>커스터마이징</b> </PricingDetail>
        <PricingDetail> 마케팅전략 <b>컨설팅</b> 제공</PricingDetail>
        <PricingDetail> 프랜차이즈 맞춤형 상품</PricingDetail>
      <PricingDetail> 자세한 사항은 문의바람</PricingDetail>

    </PricingSlot>
</PricingTable>
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </Layout>
  );
};

// Step 3: Export your component
export default AboutPage;
