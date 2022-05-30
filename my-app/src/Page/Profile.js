import "./Profile.css";

function Profile() {
  return (
    <div className="grid">
      <img className="jang-profile" src="../image/jang.jpg" />
      <div className="content">
        <p>นาย เจริญชาย แซ่จาง</p>
        <p>ชื่อเล่น ตี๋ เกิดวันที่ 15 กันยายน 1999</p>
        <p>จบจาก มหาวิทยาลัยหอการค้าไทย</p>
        <p>คณะวิทยาศาสตร์ สาขาแอนิเมชั่น</p>
        <p>เบอร์ติดต่อ 095-129-7055</p>
        <p>Email kkllooii009@gmail.com</p>
      </div>
    </div>
  );
}

export default Profile;
