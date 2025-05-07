export default function About() {
    return (
      <div className="small_container">
        <a href="/" className="noline">
          <h2>About Me</h2>
        </a>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/activities">Activities</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
  
        <section className="about_container">
          <div className="container1">
            <h3>Profile</h3>
            <hr />
            <p>안녕하세용 13기 아기사자 임기주입니당</p>
            <p>소속 과는 건설환경공학과 24학번 입니당</p>
            <p>프론트엔드 개발에 관심이 많습니다!!!!</p>
            <p>아직 많이 부족하지만 멋쟁이 사자 활동을 통해 열심히 배워서 빠르게 성장해보겠습니드아!!!</p>
          </div>
  
          <div className="container2">
            <h3>Like</h3>
            <hr />
            <p>가나디 좋아합니당 못생겨서 귀여워용</p>
            <img src="/ganadi04.png" width="250" alt="가나디" />
          </div>
        </section>
      </div>
    );
  }
  