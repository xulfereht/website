import * as React from "react";
import { Widget } from '@typeform/embed-react'
import { GiPlanetConquest } from "react-icons/gi";

const MyComponent = () => {
  return( 
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
  <Widget id="sS9ViGNy" style={{ width: '100%', height: '400px' }} className="my-form" />
</>
  );
}



export default MyComponent;
