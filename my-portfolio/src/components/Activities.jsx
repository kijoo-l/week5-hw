export default function Activities() {
    return (
      <div className="small_container">
        <a href="/" className="noline">
          <h2>Activities</h2>
        </a>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
  
        <section className="about_container">
          <div className="container1">
            <h3>코딩관련활동</h3>
            <hr />
            <p>사실 저는 코딩 활동은 전무합니다..</p>
            <p>하지만!!</p>
            <p>그래도 이야기를 해보자면</p>
            <p>작년 2학기때 동기들과 함께 파이썬으로 만든 간단한 게임이 있습니다!</p>
  
            <div className="video-container">
              <video controls width="300">
                <source src="/image01-play.mp4" type="video/mp4" />
                브라우저가 video 태그를 지원하지 않습니다.
              </video>
            </div>
  
            <p>바로 두근두근 공대생 송씨 시뮬레이션!! 입니당</p>
            <p>영상은 간단한 플레이 화면입니당</p>
            <p>앞으로 열심히 해서 더 많은 프로젝트를 만들어 보겠습니다!!</p>
          </div>
        </section>
      </div>
    );
  }
  