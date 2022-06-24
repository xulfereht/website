import * as React from "react";
import { GiPlanetConquest } from "react-icons/gi";

const MyComponent = () => {
  return (
    <>
      <div>
        <h2 id="contact">
          <div className="icon">
            <GiPlanetConquest />
          </div>{" "}
          Contact Us.
        </h2>
        <div>
          <p>
            효율적인 커뮤니케이션을 위해 비대면 응대를 원칙으로 하고 있습니다.
            궁금한 점이 있으시다면 아래 내용을 남겨주세요. 최대한 빠르게 답변
            드리겠습니다.
          </p>
        </div>
      </div>
      <form method="post" action="#">
        <input type="text" name="name" id="name" placeholder="업체명" />
        <input type="email" name="email" id="email" placeholder="이메일" />
        <input type="text" name="phone" id="phone" placeholder="연락처" />

        <textarea
          name="message"
          id="message"
          rows="3"
          placeholder="저희가 도울 수 있도록 사업현황을 간략하게 설명해주세요. (업종, 비지니스구조, 매출현황, 마케팅실정 등)"
        />
        <button className = 'contactBtn' type="submit">문의하기</button>
      </form>
    </>
  );
};

export default MyComponent;
