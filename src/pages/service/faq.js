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
    <Layout pageTitle="서비스 FAQ">
      <h2>블로그서비스 FAQ</h2>
      <p>
        저희 서비스에 대해 궁금하세요? 자주 궁금해하시는 점을 모아봤습니다. 만약
        여기서도 궁금한 점이 해소되지 않는다면 별도문의해주세요.
      </p>

      <Grid>
        <Col xxl="4" md="6" sm="12">
          <div>
            <h3>비용 및 결제방식</h3>
          </div>
        </Col>
        <Col xxl="8" md="6" sm="12">
          <div className="marginbottom">
            <div className="details">
              <details>
                <summary className="buttontypetextSmall">
                  &nbsp;모든마케팅이 제공하는 서비스 목록 및 견적이 궁금합니다.
                </summary>
                <p className="subdetails">
                  모든마케팅은 유례 없는 파격적인 단가에 고퀄리티 포스팅으로
                  상위노출이 가능합니다. 아래 각 서비스 페이지를 참고
                  부탁드립니다.
                </p>
              </details>
            </div>
            <div className="details">
              <details>
                <summary className="buttontypetextSmall">
                  &nbsp;결제 방식이 궁금합니다.
                </summary>
                <p className="subdetails">
                  월단위로 결제가 이루어지며 선불제입니다. 결제방식은
                  CMS(자동이체서비스)로 진행됩니다. 월분납이 아닌 일시불로
                  카드나 직접 계좌 입금을 원하시는 경우 별도 문의 부탁드립니다.
                </p>
              </details>
            </div>
          </div>
        </Col>
        <Col xxl="4" md="6" sm="12">
          <div>
            <h3>권한의 범위</h3>
          </div>
        </Col>
        <Col xxl="8" md="6" sm="12">
          <div className="marginbottom">
            <div className="details">
              <details>
                <summary className="buttontypetextSmall">
                  &nbsp; 서비스 신청시, 해당 지역에 다른 신청자가 들어올 수
                  없나요?
                </summary>
                <p className="subdetails">
                  네. 독점 권한이 있는 서비스 신청시, 클라이언트에게 할당된
                  지역에 다른 신청자는 받지 않습니다. (일부 실속형 서비스 제외)
                </p>
              </details>
            </div>
            <div className="details">
              <details>
                <summary className="buttontypetextSmall">
                  &nbsp;제가 할당받은 권역 외에 다른 지역 키워드도 다뤄주실 수
                  있나요?
                </summary>
                <p className="subdetails">
                  타 권역에 동일업종의 다른 클라이언트가 없을 경우 진행이
                  가능하시며, 이 경우 추가 비용이 발생됩니다. 권역 하나를 추가로
                  더 사용한다고 이해하시면 됩니다.
                </p>
              </details>
            </div>
            <div className="details">
              <details>
                <summary className="buttontypetextSmall">
                  &nbsp;제 업장이 두 지역의 경계선 상에 있습니다. (예를 들면
                  용산구와 서대문구 경계선에 위치) 이 경우 두 지역을 함께 진행할
                  수 있을까요?
                </summary>
                <p className="subdetails">
                  먼저, 해당 두 지역에 클라이언트가 없어야 신청이 가능합니다.
                  이렇게 진행하실 경우 비용이 추가되오니 이 경우 별도 문의
                  부탁드립니다.
                </p>
              </details>
            </div>
            <div className="details">
              <details>
                <summary className="buttontypetextSmall">
                  &nbsp;일반한의원 서비스를 신청했지만 저의 경우 한의원에서
                  입원실도 운영하고 있는데요. 기본으로 제공되는 교통사고, 자보
                  키워드 외에 '입원실' 키워드도 함께 돌려주실 수 있나요?
                </summary>
                <p className="subdetails">
                  저희 정책상 일반한의원 서비스는 폭탄블로그 일반형과 실속형에
                  관계 없이 '입원실' 관련 키워드를 다뤄드리지 않습니다. 보통
                  원장님 권역에 저희 입원실 서비스를 이용중인 클라이언트가
                  있거나, 입원실 서비스를 신청할 예정인 분들이 계시기에 그런 점
                  양해 부탁드립니다. 이를 사전에 인지하시고, 꼭 이에 동의하실
                  경우에만 계약을 진행해 주실 것을 당부드립니다. 만약 일반한의원
                  서비스와 입원실 서비스를 함께 진행하고 싶으실 경우,
                  '고급형(입원실 서비스 + 일반한의원 폭탄블로그 일반형 or
                  실속형) 서비스'를 선택해 주시면 됩니다. 고급형 서비스를
                  선택주실 경우 추가 할인 혜택이 적용되오니 별도 문의
                  부탁드립니다.
                </p>
              </details>
            </div>
            <div className="details">
              <details>
                <summary className="buttontypetextSmall">
                  &nbsp;입원실한의원 서비스를 신청하려 합니다. 제가 있는
                  권역에서는 저희 입원실한의원 외에 교통사고, 자보 키워드를
                  다루는 일반한의원 클라이언트가 없었으면 하는데요. 이부분이
                  가능하실까요?
                </summary>
                <p className="subdetails">
                  저희 서비스의 특징상, 입원실 한의원 서비스와 일반한의원
                  서비스는 키워드가 거의 대부분 겹치지 않습니다. 다만, 교통사고,
                  자보 등의 키워드에서 입원실 한의원과 일반 한의원이 겹치는
                  부분이 발생하는데요. 이를 방지하기 위해 현재 정책적으로
                  서비스별 구분이 되어 있습니다. <br></br>
                  <br></br>입원실 서비스 : 교통사고, 자보 등의 키워드에 더해,
                  '입원실' 유관 키워드가 포스팅 제목에 필수로 포함되어 송출됨.{" "}
                  <br></br>
                  <br></br>일반한의원 서비스 : 교통사고, 자보 등의 키워드 외에,
                  '입원실' 유관 키워드는 포함되지 않게 송출됨.
                  <br></br>
                  <br></br>정리하면, 같은 지역 내에 교통사고와 자보 등의 키워드
                  공유는 정책상 허용되지만, 입원실 서비스는 반드시 '입원실'
                  키워드가 포함되게 해 명확한 구분을 짓고 있습니다. 그렇기에
                  원장님 권역에 일반한의원 클라이언트가 들어올 수 있다는 것을
                  사전에 인지하시고, 꼭 이에 동의하실 경우에만 계약을 진행해
                  주실 것을 당부드립니다. 이미 계약이 체결된 이후 관련 의견을
                  전달 주신다고 하더라도 저희 정책상 이 부분은 도와드리기 어려운
                  점 양해 부탁드립니다. 만약 입원실 서비스와 일반한의원 서비스를
                  함께 진행하고 싶으실 경우, '고급형(입원실 서비스 + 일반한의원
                  폭탄블로그 일반형 or 실속형) 서비스'를 선택해 주시면 됩니다.
                  고급형 서비스를 선택 주실 경우 추가 할인 혜택이 적용되오니
                  별도 문의 부탁드립니다.
                </p>
              </details>
            </div>{" "}
          </div>
        </Col>

        <Col xxl="4" md="6" sm="12">
          <div>
            <h3>중도해지 및 계약종료</h3>
          </div>
        </Col>
        <Col xxl="8" md="6" sm="12">
          <div className="marginbottom">
            <div className="details">
              <details>
                <summary className="buttontypetextSmall">
                  &nbsp;계약 기간 중에 계약 해지를 할 경우 환불 관련 어떻게 처리
                  되는지 궁금합니다.
                </summary>
                <p className="subdetails">
                  계약 해지는 월단위로 가능합니다. 예를 들어 계약 해지 의사를
                  말씀주신 시기가 3개월차라면, 3개월이 끝나는 시점까지 마케팅
                  서비스가 정상적으로 제공된 뒤 계약이 종료됩니다. 그렇기 때문에
                  CMS나 직접 입금하는 방식으로 월분납으로 진행하시는 경우 환불
                  금액이 발생하지 않습니다. 신용카드로 일시불로 결제했으나 6개월
                  할부 등의 방식으로 사실상 분납을 하신 경우에는 관련해 별도
                  처리를 해드립니다. 6개월 일시불 전액 계좌 입금을 하신 경우,
                  서비스가 진행된 해당 월까지의 비용을 제한 차액금을 환불드리며,
                  일시불 전액 입금으로 인해 할인 혜택을 받으셨을 경우 이를
                  적용하지 않은 기존 서비스 비용에서 환불 정산을 하게 됩니다.
                </p>
              </details>
            </div>
            <div className="details">
              <details>
                <summary className="buttontypetextSmall">
                  &nbsp;계약 기간 중에 계약 해지를 할 경우 혜택 물량은 어떻게
                  처리 되는지 궁금합니다.
                </summary>
                <p className="subdetails">
                  계약 당시 구두 또는 서면으로 계약서에 정의된 마케팅 의무 물량
                  외에 '혜택 물량'을 약속드리는 경우가 있습니다. 전체 계약
                  기간의 50%가 지나기 전에 계약 해지 의사를 말씀주셨을 경우,
                  계약서에 명시된 의무 물량이 아닌 혜택 물량은 프로모션
                  포스팅으로 내용이 임의 변경되며, 전체 계약기간의 50%가 지난
                  경우에는 변경되지 않습니다. 단, 계약서에 명시된 의무 물량은
                  언제 계약 해지가 되더라도 이와 관계없이 포스팅 내용이 변경되지
                  않습니다.
                </p>
              </details>
            </div>
            <div className="details">
              <details>
                <summary className="buttontypetextSmall">
                  &nbsp;계약기간이 끝난 뒤, 계약기간 중에 발행했던 포스팅은
                  어떻게 처리되나요?
                </summary>
                <p className="subdetails">
                  계약기간 중에 발행했던 포스팅을 계약 종료 후에 내리는 등의
                  행위를 하지 않습니다. 타 대행사의 보장형 서비스가 계약 종료시
                  포스팅을 내리는 것과는 차별화되는 모든 마케팅만의 장점입니다.
                </p>
              </details>
            </div>
          </div>
        </Col>
        <Col xxl="4" md="6" sm="12">
          <div>
            <h3>마케팅전략</h3>
          </div>
        </Col>
        <Col xxl="8" md="6" sm="12">
          <div className="marginbottom">
            <div className="details">
              <details>
                <summary className="buttontypetextSmall">
                  &nbsp;롱테일 마케팅에 대한 설명 부탁드립니다.
                </summary>
                <p className="subdetails">
                  롱테일 마케팅은 지역 세부키워드 리스트와 질환(또는
                  치료서비스)키워드의 조합으로 물량공세를 해 지역 내에 빈틈이
                  없게끔 작업하는 방식입니다. 롱테일 키워드는 업종별로 수천개를
                  보유 중이며, 중요도에 따라 우선순위를 매겨 포스팅을
                  진행합니다. 각 권역에서의 키워드별 경쟁상황까지를 폭넓게
                  파악해야 제대로 효과를 낼 수가 있으며, 권역별 마케팅 지형도에
                  대한 파악을 저희가 함께 해드리고 있습니다.
                </p>
              </details>
            </div>
            <div className="details">
              <details>
                <summary className="buttontypetextSmall">
                  &nbsp;환자들이 정말로 '지역 세부 키워드+질환 세부 키워드'
                  조합으로 검색을 많이 할까요? '질환 키워드' 단독 검색량이 더
                  많지 않나요?
                </summary>
                <p className="subdetails">
                  '질환 키워드' 단독 검색량이 많은 것은 맞습니다. 예를 들어,
                  '연남동 요통' 보다는 '요통' 단독 검색량이 당연히 더 많을
                  것입니다. 하지만 '요통' 키워드는 검색 수요가 많은 일종의
                  메인키워드에 해당하며, 그렇기에 이 수요를 확보하기 위해 많은
                  공급자들이 네이버 상단을 잡으려 노력을 합니다. 그 과정에서
                  마케팅 회사들이 보유한 소위 노출도가 가장 높은 최블(씨랭)들이
                  끊임없이 투입됩니다. 그 결과 해당 키워드는 격전지화 되는
                  것입니다. 격전지화가 된다면 당연히 상위노출 난이도가 높아질
                  것이고, 난이도가 높아진다는 것은 결국 마케팅 비용이 증가한다는
                  것을 뜻합니다. 현재 지역 키워드 조합이 없이 질환
                  메인키워드만으로 작업하는 것은 그래서 비용이 매우 많이 듭니다.
                  이것이 기존 마케팅 방식의 광고 효율이 계속 떨어지고 있다는
                  의미인 것입니다. 이는 '지역 메인 키워드+질환 메인 키워드' 또한
                  마찬가지입니다. '강남 다이어트' 등의 키워드 또한 이미 최블들이
                  너무 많이 투입되어서 상단에 비집고 들어가기도 어려우며, 비집고
                  들어간다 한들 노출유지비용이 상당히 많이 들어가게 되어서
                  결과적으로 광고 효율이 떨어지게 됩니다. 더바른 마케팅의 롱테일
                  전략은, 비교적 경쟁이 덜해 상위노출 가능성이 제법 높으면서도
                  검색 수요가 어느정도 있는 롱테일 키워드만 집중 공략합니다.
                  무수한 경우의 수로 이루어진 '지역 세부 키워드+질환 세부
                  키워드' 조합을 전부 다루며 압도적 물량을 살포해 결과적으로
                  상당수의 물량을 상위노출 시키게 됩니다. 이러한 적절한 수준의
                  트래픽을 계속 확보해나가며, 결과적으로 메인키워드 하나에서
                  확보하는 트래픽을 넘어서는 트래픽 총량을 만들어나가는 것이
                  저희 방식이라 이해하시면 됩니다. 또한, 타 대행사의 노출보장형
                  서비스는 보장기간이 지나 재연장을 하지 않을 경우, 해당
                  포스팅을 내리는 것이 당연합니다만, 저희 롱테일 마케팅
                  방식에서는 계약이 종료되더라도 작업 물량을 내리지 않습니다.
                  그러니 저희 작업물이 계속 살아있다면 계약기간 종료 후에도 광고
                  효과가 발생할 수 있는 것이 장점입니다.
                </p>
              </details>
            </div>
            <div className="details">
              <details>
                <summary className="buttontypetextSmall">
                  &nbsp;내원전환으로 이어지는 마케팅 효과를 기대할 수 있는
                  평균적인 시점은 언제부터일까요?
                </summary>
                <p className="subdetails">
                  롱테일 전략을 중점으로 진행하고 있습니다. 이는 유입량이 매우
                  적은 키워드부터, 적절히 애매한 유입량의 키워드들까지, 총 검색
                  키워드 중 비주류에 해당하는 80%를 장악하는 전략입니다.
                  폭탄블로그 일반형의 경우 6개월간 720건, 폭탄블로그 입원실
                  서비스의 경우 6개월 간 960건의 세부키워드 물량을 송출해, 지역
                  내에서 어떤 세부 키워드를 검색해도 내 한의원이 다 걸리게끔
                  그물망을 펼쳐 놓게 됩니다. 그 결과 지역 내 대세를 만들게 되는
                  것입니다. 다만 초기에 인지도가 없던 상황에서 이를 쌓아 나가기
                  위해서는 최소 시간이 필요하며, 폭탄블로그 일반형 서비스와
                  입원실 서비스의 경우 최소 2개월간은 기틀을 다지는 시기라고
                  보시는 것이 좋습니다.(폭탄블로그 실속형 서비스는 1~1.5개월
                  정도로 생각하시면 됩니다.) 최소 물량 누적이 된 뒤부터는
                  마케팅효과가 기하급수적으로 발생해 내원전환율이 높아지게
                  됩니다. 그래서 일반적으로 6개월 텀으로 마케팅 플랜을 제시해
                  드리는 것이기도 합니다. 결과적으로 매우 약한 키워드부터 적절한
                  키워드까지를 저희가 압도적 물량으로 충분히 골고루
                  다뤄드리기에, 안심하시고 키워드를 빠르게 장악해 나가는 흐름을
                  지켜보시면 됩니다.
                </p>
              </details>
            </div>
            <div className="details">
              <details>
                <summary className="buttontypetextSmall">
                  &nbsp; 작업 포스팅에 플레이스 링크 첨부가 가능할까요?
                </summary>
                <p className="subdetails">
                  플레이스 순위 상승을 목적으로 블로그 리뷰 건수를 높이는 것은
                  일반적으로는 도움이 됩니다. 하지만 저희의 경우 압도적인 물량
                  살포를 하기에, 물량에 플레이스를 첨부할 경우 네이버가
                  어뷰징이라 판단할 가능성이 매우 높아집니다. 어뷰징으로
                  판단되어 플레이스가 저품질이 될 경우 보통 최하단으로 순위가
                  떨어지며, 다시 플레이스 순위를 높이는 것은 매우 어려운
                  작업입니다. 플레이스 순위 상승은 저희 서비스의 주목적이 아닐
                  뿐더러, 말씀드린대로 리스크가 크기에 링크 첨부를 해드리지 않고
                  있는 점 참고 부탁드립니다.
                </p>
              </details>
            </div>{" "}
          </div>
        </Col>

        <Col xxl="4" md="6" sm="12">
          <div>
            <h3>기타 문의</h3>
          </div>
        </Col>
        <Col xxl="8" md="6" sm="12">
          <div className="marginbottom">
            <div className="details">
              <details>
                <summary className="buttontypetextSmall">
                  &nbsp;계약일과 실제 제가 원하는 작업착수일이 1개월 이상 차이가
                  날 경우 어떻게 계약하나요?
                </summary>
                <p className="subdetails">
                  계약서에 원하시는 작업착수일을 기입 한 뒤 계약을 진행합니다.
                  이 경우 전체 마케팅 비용의 10%를 계약체결일에 계약금으로 먼저
                  입금주셔야 합니다. 이후 1개월차 월비용에서 계약금을 제한
                  마케팅 서비스 비용을 납입해 주시면 됩니다. 실제로 1개월 이상
                  기다려 드렸으나 단순 변심으로 최종 계약을 하지 않으셔서,
                  동지역 후순위로 신청주신 분에 피해가 발생한 선례가 있었기
                  때문에, 일종의 노쇼 방지 의미로 계약금을 받고 있습니다. 단순
                  변심에 의한 계약 취소의 경우 계약금은 반환되지 않습니다.
                </p>
              </details>
            </div>
            <div className="details">
              <details>
                <summary className="buttontypetextSmall">
                  &nbsp;특화 한의원을 운영중입니다. 모든마케팅의 템플릿 기반
                  포스팅 말고, 특화 키워드별로 전문적인 원고 작성을 개별로
                  해주실 수 있나요?
                </summary>
                <p className="subdetails">
                  특화한의원처럼 특정카테고리의 키워드만을 포스팅하기를 원하시는
                  경우에도 진행이 가능합니다. 상세한 내용은 별도문의
                  부탁드립니다.
                </p>
              </details>
            </div>{" "}
            <div className="details">
              <details>
                <summary className="buttontypetextSmall">
                  &nbsp;인테리어가 아직 안되었거나 기타 경영상의 이유로 초반
                  1개월차에 들어갈 계약 의무 물량보다 물량을 적게 쓰는 쪽으로
                  조절을 요청할 경우 가능한가요?
                </summary>
                <p className="subdetails">
                  초반 1개월에 한해 가능합니다. 예를 들어 의무 물량 월 160건 중
                  초반 1개월에 80건만 쓰고, 2개월차에 1개월차 80건 + 2개월차
                  160건 = 240건을 쓰는 방식으로 진행해 드릴 수 있습니다. 다만
                  물량을 더 많이 쓰는 쪽으로 조절하는 것은 불가능합니다. 이외에,
                  물량 조절과 상관없이 월 마케팅 비용은 동일하니 참고하시기를
                  바랍니다.
                </p>
              </details>
            </div>{" "}
            <div className="details">
              <details>
                <summary className="buttontypetextSmall">
                  &nbsp;오프라인 미팅이나 전화 보고, 카톡 단톡방 등을 통한
                  보고를 받고 싶은데 가능한가요?
                </summary>
                <p className="subdetails">
                  보다 많은 원장님께 가성비 높은 서비스를 제공하기 위해, CS의
                  경우 비대면 응대를 원칙으로 하고 있습니다. 리포팅의 경우 자사
                  인트라넷에서 직접 작업물 현황과 노출현황 통계를 열람하실 수
                  있게 계정을 할당해 드리고 있습니다.
                </p>
              </details>
            </div>
          </div>
        </Col>

        <Col xxl="4" md="6" sm="12">
          <div>
            <h3>계약후 실무관련 FAQ</h3>
          </div>
        </Col>
        <Col xxl="8" md="6" sm="12">
          <div className="marginbottom">
            <p> 마케팅 집행 중에 자주 발생하는 궁금증을 추려보았습니다.</p>
            <div className="details"></div>
            <div className="details">
              <details>
                <summary className="buttontypetextSmall">
                  &nbsp;포스팅 중에 랜딩 이미지에 반영된 내용을 요청할 경우
                  변경이 가능한가요?
                </summary>
                <p className="subdetails">
                  네 변경 가능합니다. 템플릿 안에서 사진이나 워딩 등의 간단한
                  변경을 요청하신 경우 무료로 진행해 드리고 있습니다.
                </p>
              </details>
            </div>
            <div className="details">
              <details>
                <summary className="buttontypetextSmall">
                  &nbsp; 기존에 가지고 있던 한의원 홍보이미지를 활용해서
                  포스팅이 가능한가요? 가능하다면 비용이 어떻게 될까요?
                </summary>
                <p className="subdetails">
                  네, 가능합니다. 이미 만들어진 홍보이미지를 저희 랜딩이미지에
                  단순 붙여넣기 정도 작업하는 수준은 무료로 진행해 드리고
                  있습니다. 다만, 한의원 홍보이미지에 타 마케팅 업체(네트워크
                  포함)의 상호가 들어간 경우 해당 이미지를 적용해드리지 못하오니
                  참고 부탁드립니다.
                </p>
              </details>
            </div>
            <div className="details">
              <details>
                <summary className="buttontypetextSmall">
                  &nbsp; 기본으로 제공하는 랜딩이미지 템플릿을 사용하지 않고, 제
                  한의원에 최적화된 랜딩이미지 제작을 원합니다. 가능할까요?
                  그리고 추가 비용은 어떻게 될까요?
                </summary>
                <p className="subdetails">
                  네, 가능합니다. 이 경우 커스터마이징 비용 52만원(VAT 미포함)이
                  추가 발생합니다.
                </p>
              </details>
            </div>
            <div className="details">
              <details>
                <summary className="buttontypetextSmall">
                  &nbsp; 작업물량 현황 등 업무진행상황을 어떻게 알 수 있을까요?
                </summary>
                <p className="subdetails">
                  랜딩 이미지 제작 후 초안 공유시 내부 인트라넷 계정을 생성,
                  공유해 드립니다. 이후 랜딩 이미지 수정안과 작업물량 현황 등을
                  해당 인트라넷에서 열람하실 수 있습니다. 작업 물량 체크
                  관련해서는 아래와 같은 기능을 인트라넷에서 제공 중입니다.
                  <br></br>
                  <br></br>
                  통계탭 : 작업 물량 제목과 포스팅 링크, 송출일 등의 정보를 제공
                  (엑셀 파일로도 다운 가능) <br></br>
                  <br></br> 모니터링탭 : 작업 키워드별 상위노출 등수 및 전체
                  상위노출 점수 합산해 제공
                </p>
              </details>
            </div>
            <div className="details">
              <details>
                <summary className="buttontypetextSmall">
                  &nbsp; 가이드로 제시된 키워드 리스트보다 좀 더 세분화한 질환
                  키워드나 지역 키워드로 작업 요청드릴 수 있을까요?
                </summary>
                <p className="subdetails">
                  네, 가능합니다. 이 경우 원하시는 세부 질환, 지역 키워드
                  리스트를 정리해서 보내주시면 됩니다. 계약 완료 후 이 부분 말씀
                  주시면 관련 안내 친절히 도와드리겠습니다.
                </p>
              </details>
            </div>
            <div className="details">
              <details>
                <summary className="buttontypetextSmall">
                  &nbsp; 포스팅 시안 완료 후 물량 송출 테스트 기간은
                  어느정도인가요?
                </summary>
                <p className="subdetails">
                  테스트라고는 하지만 작업 자체는 실진행입니다. 평균적으로 7일간
                  송출 테스트를 합니다. 이후 노출 상태의 문제가 있는지를 살펴본
                  뒤, 작업물량을 체크하실 수 있게 인트라넷에서 통계탭을 오픈해
                  드립니다. 계정이 안정적으로 노출이 되는 것이 확인 된
                  이후부터는 특별한 테스트 없이 동일 방식으로 진행이 됩니다.
                  테스트 기간동안 네이버 로직 변경 등의 이유로 계정이 말썽이 날
                  경우 그 기간만큼 연장을 해드리니 걱정하지 않으셔도 됩니다.
                </p>
              </details>
            </div>
            <div className="details">
              <details>
                <summary className="buttontypetextSmall">
                  &nbsp; 작업 물량 통계 데이터를 보니, 포스팅 누락 또는 계정
                  블라인드가 되는 물량들이 있습니다.
                </summary>
                <p className="subdetails">
                  네이버 검색 로직 환경상 일정 부분의 비공개 전환은 100% 해결할
                  수는 없는 문제입니다. 대신 이를 보완하기 위해, 비공개 블라인드
                  전환이 되더라도 누락 물량을 가뿐히 상회할 만큼의 혜택 물량을
                  재차 송출해 드리고 있습니다. 또한 저희 물량이 블라인드 처리가
                  된다는 것은 타 대행사의 물량들도 동일하게 네이버 로직에 의해
                  죽어나간다는 것을 의미합니다. 그렇기에 결국 물량으로 승부보는
                  것이 상대적으로 우위에 설 수 밖에 없는 전략입니다.
                  모든마케팅은 압도적 물량 서비스를 제공해 드리고 있으니
                  안심하셔도 됩니다.
                </p>
              </details>
            </div>
            <div className="details">
              <details>
                <summary className="buttontypetextSmall">
                  &nbsp; 디자인 시안 컨펌을 확인할 수 있는 인트라넷 주소에
                  이미지가 보이지않거나 혹은 유료템플렛으로 변경된 이미지가
                  보이지 않을 때에는 어떻게 하나요?
                </summary>
                <p className="subdetails">
                  아래의 순서대로 해주시면 이미지가 보이게 됩니다! <br></br>
                  <br></br>1. 내 PC에서 Google 크롬 브라우져를 켭니다. <br></br>
                  <br></br>2. 디자인 모드에서 게시해도 작업사항이 반영이 되지
                  않는 메뉴(페이지)에 접속합니다. <br></br>
                  <br></br>3. 크롬 브라우저 오른쪽 상단 더보기 아이콘을
                  클릭합니다. <br></br>
                  <br></br>4. 혹은 아래의 단축키를 사용해서 열어볼 수 있습니다.
                  Windows: F12 Mac: Command + Option+I <br></br>
                  <br></br>5. 그 이후 오른쪽에 개발자도구가 나타나면 크롬
                  브라우저 왼쪽 상단에 새로고침 아이콘에 마우스포인터를
                  올립니다. <br></br>
                  <br></br>6. 마우스 오른쪽 버튼을 클릭합니다. <br></br>
                  <br></br>7. 아래 그림처럼 새로고침메뉴가 나타나면 캐시 비우기
                  및 강력 새로고침을 클릭합니다. <br></br>
                  <br></br>8. 그리고 나서 캐시비우기 및 강력 새로고침 과정을
                  누르신 후에 완료가 되시면 페이지 내에 콘텐츠가 최근 콘텐츠로
                  변경되는지 체크해주시면 됩니다.
                </p>
              </details>
            </div>
          </div>
        </Col>
      </Grid>

      <div className="Blank"></div>
      <div className="Blank"></div>
    </Layout>
  );
};

// Step 3: Export your component
export default AboutPage;
