// Step 1: Import React
import * as React from "react";
import Layout from "../../components/layout";
import { Link } from "gatsby";
import { Grid, Row, Col, Cell } from "react-styled-grid-layout";
import Photo from "../../images/profile_removebg.png";
import { GiSprout } from "react-icons/gi";
import { StaticImage } from "gatsby-plugin-image";
import TypeIt from "typeit-react";
import { AiOutlineUnorderedList, AiOutlineComment } from "react-icons/ai";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Example from "../../components/barchart";
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';

const SuperStrong = ({ children }) => {
  return (
    <strong style={{ fontSize: "45px", fontFamily: "Pretendard Thin" }}>
      {children}
    </strong>
  );
};

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="무료체험 어떠셨나요?">
      <h2> 🎉  무료체험 어떠셨나요?</h2>
      <p>
        무료 체험을 통해 요청하신 키워드에 대한 포스팅 테스트가 완료되었습니다.
        담당자를 통해 포스팅 내역과 노출 현황에 대한 개략적인 내용을 보고
        받으셨을 거에요. 이 페이지에서는 유료서비스 전환을 할 경우에 무료체험과
        어떤 부분이 달라지는지 설명해드리겠습니다.
      </p>
      <div className="divmargin">
        <h2> 🌈  다양해진 키워드 스펙트럼</h2>

        <p>
          <ul>
            <li>무료체험 : 3지역 x 3키워드 조합으로 최대 9개 키워드</li>
            <li>유료서비스 : 권역내 유효키워드 전체(1,000개 이상)</li>
          </ul>
          유료서비스는 클라이언트에게 할당된 권역의 <b>모든 검색수요</b>를
          장악합니다.
          <ul>
            <li>
              각 키워드는 중요도에 따라 등급이 설정되어 이에 따라 키워드 선택의
              빈도가 <b>확률적으로 결정</b>됩니다.
            </li>
            <li>
              중요하게 관리되어야 하는 <b>메인키워드는 높은 등급</b>으로 더 자주
              포스팅됩니다.(예. 한의원, 치과, 임플란트 등)
            </li>
            <li>
              그 외에도 수천개 키워드를 조합해 해당 지역내 키워드 검색을 통한
              롱테일 수요를 모두 담아내게 됩니다.
            </li>
            <li>
              압도적인 물량으로 해당 <b>권역 내의 검색키워드를 장악</b>함으로써
              잠재고객의 트래픽을 한데 끌어모아 경쟁업체들이 주요 키워드에만
              매몰될 수 밖에 없는 현실 속에서 지역내 1등병원으로 자리잡도록
              돕습니다.
            </li>
          </ul>
          롱테일키워드에 대해서는 아래 글을 참고해주세요.
          <br></br>
        </p>

        <div>
          <Link to="/blog/longtail-marketing" target="_blank">
            <button className="button">&nbsp;&nbsp;롱테일마케팅 </button>
          </Link>
        </div>
      </div>
      <div className="divmargin">
        <h2> 👍  비교를 불허하는 압도적인 물량 </h2>
        <p>
          <ul>
            <li>
              폭탄블로그 일반형의 월간 약속물량은 <b>120건</b>입니다.
            </li>{" "}
            <li>
              이 정도도 타 업체대비 적지 않은 숫자이지만 저희 입장에서는
              불확실한 마케팅 환경에서의 돌발상황에 대처하기 위해{" "}
              <b>보수적으로 책정된 수치</b>입니다.
            </li>
            <li>
              실제 유료고객들의 월간 집행 물량은 <b>이 숫자를 훨씬 상회</b>
              합니다.
            </li>
            <li>
              이를 감안하면 비슷한 퍼포먼스를 내는 업체를 찾기 힘드실 것이라
              자부합니다.
            </li>
          </ul>
        </p>
      </div>
      <div className="divmargin">
        <h2> 📈  편의성을 높인 리포트 시스템 </h2>
        <p>
          마케팅 집행 현황을 <b>인트라넷을 통해 확인</b>하실수 있습니다.{" "}
          <br></br>
          <ul>
            <li>
              매일 발행되는 포스팅 상황을 <b>실시간으로 확인</b> 가능합니다.
            </li>{" "}
            <li>
              마케팅 보고를 위한 자료가 필요하다면{" "}
              <b>엑셀파일 형태로 다운로드</b>가 가능합니다.
            </li>
            <li>
              특별히 중요하게 관리해야 하는{" "}
              <b>주요키워드는 주2회 노출 상황을 체크</b>하고 인트라넷에서 조회할
              수 있습니다.
            </li>
            <li>
              인트라넷에 자주 접속하기 어려운 클라이언트 분들을 위해 주간 단위로
              주요 마케팅 상황에 대한 <b>리포트가 문자로 발송</b>됩니다.
            </li>
          </ul>
        </p>
      </div>
      <div className="divmargin">
        <h2> 🚀  포스팅 방식의 변경 </h2>
        <p>
          모든마케팅의 유료서비스에서는 두 종류의 계정을 활용해 포스팅을
          진행합니다.
          <ul>
            <li>자체 보유 블로그계정 </li>
            <li>클라이언트가 제공한 블로그계정</li>{" "}
          </ul>
          즉, 클라이언트가 블로그계정을 많이 제공할수록 더 많은 포스팅이
          가능합니다. 블로그계정은 가급적이면 새로 생성하셔서 주시는게 좋습니다.
          이 사항은 마케팅 오퍼레이팅 차원에서 매우 중요한 내용이라 따로 별도의
          문서로 안내해드리고 있습니다. 관련해서는 아래 문서를 꼭 참고해주세요.
        </p>
        <div>
          <Link to="/service/how-to-make-id" target="_blank">
            <button className="button">&nbsp;&nbsp;계정생성 매뉴얼</button>
          </Link>
        </div>
      </div>
      <div className="divmargin">
        <h2> 🔧  컨텐츠 이미지 변경 및 커스터마이징 </h2>
        <p>
          <ul>
            <li>
              무료체험 과정에서 포스팅에 활용된 시안은 기본 컨텐츠 템플릿으로
              진행되었습니다.
            </li>
            <li>
              유료서비스에서는 디자이너가 제작한 새로운 컨텐츠 이미지를 활용하여
              <b>퀄리티가 향상</b>됩니다.
            </li>
            <li>
              클라이언트가 기존에 제작해 사용하고 있던 마케팅 시안이 있다면 이를
              재활용할 수도 있습니다.
            </li>
            <li>
              그 외 완전히 새로이 맞춤형 컨텐츠를 제작해 커스터마이징하는 방식도
              가능합니다(추가비용 발생).
            </li>
          </ul>
        </p>
      </div>
      <div className="divmargin">
<h2> 💰  서비스비용 안내 </h2>

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
</div>
      <div className="Blank"></div>

      <div className="divmargin">
        <div>
          <h3>더 궁금한 점이 있다면?</h3>

          <p>
            먼저 FAQ 페이지에서 해당 내용을 찾아보세요. 그래도 궁금증이 해소되지
            않는다면 문의하기 메뉴를 활용해주세요.
          </p>

          <div>
            <Link to="/service/faq" target="_blank">
              <button className="button">&nbsp;&nbsp;자주 묻는 질문 </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="Blank"></div>

      <div className="Blank"></div>
      <div className="Blank"></div>
    </Layout>
  );
};

// Step 3: Export your component
export default AboutPage;
