import "./About.css";

function About() {
  return (
    <div className="grid-about">
      <img className="about-img me" src="../image/about-02.png" />
      <div className="content-about">
        <h1>ABOUT ME</h1>
        <p>เป็นนักศึกษาที่จบด้านการทำเกม</p>
        <p>โดยใช้ Unity และภาษา C#</p>
        <p>แต่เกิดเปลี่ยนใจอยากหันมาทำงานด้าน FRONTEND</p>
        <p>ก่อนเรียนจบจึงหันมาศึกษา</p>
        <p>Html, Css, JavaScript, React อย่างจริงจัง</p>
        <p>และตอนนี้กำลังมองหางานด้าน FRONTEND</p>
      </div>
      <img className="about-img" src="../image/about-01.png" />
      <div className="content-about">
        <h1>EDUCADE</h1>
        <p>2561-2564</p>
        <p>มหาวิทยาลัยหอการค้าไทย</p>
        <p>คณะวิทยาศาสตร์ สาขาแอนิเมชั่น</p>
        <p>GPAX : 3.6</p>
      </div>
      <img className="about-img" src="../image/about-03.png" />
      <div className="content-about">
        <h1>SKILL</h1>
        <p>Html</p>
        <p>JavaScript</p>
        <p>Css</p>
        <p>React</p>
        <p>C#</p>
      </div>
    </div>
  );
}

export default About;

