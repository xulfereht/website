// Step 1: Import React
import * as React from "react";
import Layout from "../../components/layout";
import { Link } from "gatsby";

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
    <Layout pageTitle="무료체험신청">
      <h1> 🎉  무료체험 신청안내</h1>
      <p>
        모든마케팅이 제공하는{" "}
        <Link to="/service/blog">
          <b>블로그서비스</b>
        </Link>{" "}
        를 미리 체험해볼 수 있는 이벤트 안내입니다.
      </p>
      <p className="subtext">
        * 블로그서비스 상세내용은 해당 페이지를 참조해주세요.
      </p>
      <div className="divmargin">
        <div>
          <h2> 🤔  자격요건</h2>
        </div>
        <div>
          <ul>
            <li> 자기 사업체를 운영중인 분</li>
            <li> 혹은 마케팅 의사결정권한이 있는 담당자</li>
          </ul>
        </div>
      </div>
      <div className="divmargin">
        <div>
          <h2> 🏬  해당 업종</h2>
        </div>
        <div>
          <ul>
            <li>한의원</li>
            <li>치과</li>
            <li>성형외과</li>
            <li>정형외과</li>
            <li>한방병원</li>
            <li>동물병원</li>
            <li>변호사사무실</li>
          </ul>
          <p className="subtext">* 해당되지 않는 업종의 경우 별도문의 요망</p>
        </div>
      </div>
      <div className="divmargin">
        <div>
          <h2> 🌐  마케팅 사항</h2>
          <p>
            신청자가 원하는 키워드(최대 9개 키워드)로 해당 지역에 단기간에
            물량폭탄 투하 후 확인
          </p>
          <p className="subtext">
            유료 고객의 경우 훨씬 많은 키워드 스펙트럼을 더 많은 물량으로
            커버하지만 무료체험에서는 일부 키워드에 한해서 테스트하는
            목적임.
          </p>
        </div>
      </div>
      <div className="divmargin">
        <div>
          <h2> 🔖  신청방법</h2>
          <p>무료체험은 아래와 같이 진행됩니다.</p>
        </div>
        <div className="divmargin">
          <h2> Step 1. 보증금 5만원 입금</h2>
          <p>
            보증금제도는 우리의 마케팅철학과 맞지 않은 분들을 사전에 필터링하여
            불필요한 리소스 낭비를 줄이고 우리의 실질 클라이언트에게 보다 더
            집중하기 위한 최소한의 장치입니다. 보증금은 체험이 종료되면 다시
            되돌려드립니다.
          </p>
          <p>
            아래 계좌로 업체명 혹은 담당자 이름으로 입금 후 Step 2.로
            진행해주세요.
          </p>{" "}
          <center>
            <div className="noticeCard">
              {" "}
              <p className="notice">💳 기업은행 208-152337-010-15 안상완</p>
            </div>
          </center>
        </div>
        <div className="divmargin">
          <h2> Step 2. 데이터 입력</h2>
          <p>
            아래 폼에 들어가 내용을 입력해주세요. 업체 정보를 비롯해 마케팅
            진행에 필요한 사전 정보를 취합하는 과정입니다. 입력하신 데이터는
            체험용 마케팅 컨텐츠 제작에 사용되므로 정확하게 작성해주세요.
          </p>
          <div>
            <a href="https://form.typeform.com/to/dNDeXpze" target="_blank">
              <button className="button">&nbsp;&nbsp;데이터입력</button>
            </a>
          </div>
          <div className="divmargin">
            <p>
              마케팅 컨텐츠 제작에는 아래와 같은 이미지 파일도 필요합니다. 아래
              버튼을 클릭 후 채널톡 메신저를 통해 파일을 첨부해 보내주세요. 사진
              파일을 보내주시지 않으면 데이터입력 단계가 마무리 되지 않아 Step 3.
              으로 넘어가지 않으니 유의해주세요.
            </p>
            <div>
              <a href="https://3x4wy.channel.io" target="_blank">
                <button className="button">&nbsp;&nbsp;이미지 올리기</button>
              </a>
            </div>
            <div>
              <p>파일 첨부 방법 </p>
              <ul>
                <li> 이미지올리기 버튼 클릭</li>
                <li> 새 문의하기 버튼 클릭</li>
                <li> 상호명 사업자번호 입력</li>
                <li> 담당자 이름 연락처 입력 </li>
                <li> 우측하단 📎 클립 버튼 클릭 후 파일 업로드</li>
              </ul>
              <p>파일 목록 및 형식</p>
              <ul>
                <li>인테리어 사진 6장 (640x480, png)</li>
                <li>프로필 사진 1장 (정면 반신샷, 480x480, png)</li>
                <li>업무 중인 스틸컷 사진 1장(640x480, png)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="divmargin">
          <h2> Step 3. 담당자 배정 및 커뮤니케이션</h2>
          <p>
            보증금 입금 및 데이터입력이 확인되면 담당자가 배정되며 영업일 기준
            48시간 이내에 담당자가 연락을 드립니다. 동시에 입력데이터를 바탕으로
            광고소재 초안 작업이 시작됩니다. 이후 마케팅 컨텐츠 초안에 대한
            피드백 및 광고소재 컨펌이 진행됩니다. 시안 컨펌이 완료된 다음 날부터
            마케팅이 즉시 실행됩니다.
          </p>
        </div>
        <div className="divmargin">
          <h2> Step 4. 마케팅 실행 및 피드백</h2>
          <p>
            담당자를 통해 마케팅 실행에 대한 리포팅이 진행되고 이때 서비스가
            만족스럽다면 서비스 유료 이용을 결정하시면 됩니다. 체험을 그대로
            마무리하고 싶다면 체험단 진행과 관련된 간단한 설문을 통해 피드백을
            주시면 체험이 종료됩니다.
          </p>
        </div>
        <div className="divmargin">
          <h2> Step 5. 보증금 환급</h2>
          <p>
            피드백 설문이 확인되면 보증금 환급과 동시에 모든 절차는 완료됩니다.
            유료서비스 전환 없이 무료체험이 종료되면 무료체험 진행시 발행한
            포스팅은 임의변경 혹은 삭제될 수 있음을 미리 안내드립니다.
          </p>
        </div>
      </div>
      <div className="Blank"></div>
    </Layout>
  );
};

// Step 3: Export your component
export default AboutPage;
