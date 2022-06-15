import * as React from "react";
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';


const MyComponent = () => {
    return <PricingTable  highlightColor='#0336ff'>
    
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
<PricingSlot  buttonText='신청하기' title='특화형' priceText='175만원/월'>
        <PricingDetail> 최소 <b>160 건</b> 월별 포스팅</PricingDetail>
        <PricingDetail> 1개 카테고리 <b>지정</b></PricingDetail>
        <PricingDetail> 실시간 <b>리포트</b> 제공</PricingDetail>
        <PricingDetail> 카테고리한정 독점권</PricingDetail>
        <PricingDetail> 일부 디테일 <b>조율 가능</b></PricingDetail>
    </PricingSlot>
    <PricingSlot   buttonText='신청하기' title='기타 상품' priceText='별도문의'>
        <PricingDetail> 컨텐츠 <b>커스터마이징</b> </PricingDetail>
        <PricingDetail> 마케팅전략 <b>컨설팅</b> 제공</PricingDetail>
        <PricingDetail> <b>맞춤형상품</b> 설계</PricingDetail>
        <PricingDetail> <b>프랜차이즈</b> 일괄계약 등</PricingDetail>
      <PricingDetail> 자세한 사항은 문의바람</PricingDetail>

    </PricingSlot>
</PricingTable> 

}



export default MyComponent;
