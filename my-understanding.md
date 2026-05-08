# MY UNDERSTANDING

ตอนแรกก็นั่งทำความเข้าใจโจทย์ก่อนค่ะ มองภาพว่า

- โจทย์ต้องการอะไร
- ต้องมีไฟล์/คอมโพเนนต์อะไรบ้าง
- เริ่มทำจากตรงไหนก่อน
- ควรทำทีละ step ยังไง
- state หลักคืออะไร
- user ต้องกด/กรอกอะไร
- output ต้องออกมายังไง

และตั้งเป้าแบบไม่กดดันตัวเองว่างานต้องสวย เอาแค่ใช้งานได้จริงก่อนจะไปเรื่องหน้าตา (ถ้ามีเวลาเหลือค่อยลองทำให้สวยขึ้น) โดยมีขั้นตอนประมาณนี้

1. ทำให้รันได้ก่อน
2. ทำให้โครงสร้างครบก่อน
3. ทำ logic หลักให้ทำงานก่อน
4. ทำให้ตรง requirement ก่อน
5. ตกแต่งหน้าตา ถ้ามีเวลาเหลือ

ขั้นตอนแรกสร้าง React project ในเครื่อง และเชื่อมกับ GitHub repo ที่สร้างไว้ ติดตั้งและตั้งค่า Tailwind CSS แล้วเริ่มแบ่ง component ต่างๆใน src/components/ ทำ navigation ด้วย useState รวมหน้าเว็บ และทำให้คลิกไปแต่ละหน้าได้แล้ว และ deploy vercel ไว้เลย กันลืมและล่กตอนใกล้เลิกเรียน (พวกนี้ทำเสร็จตอนก่อนเที่ยง)

========================================================

ตอนนี้ทำหน้า Home ให้มีหัวข้อและปุ่ม
เพิ่มตารางและรายละเอียดต่างๆในหน้า User Section กับ Admin Section มีฟอร์ม Create User Here และตารางพร้อมปุ่ม Delete

- หน้า Owner ใส่ชื่อ กรอบสำหรับใส่รูปและรายละเอียด ยังไม่ได้เชื่อมต่อ API
- App ส่งข้อมูลสมาชิกผ่าน props ชื่อ members ไปให้ UserSection และ AdminSection
- MemberTable.jsx (line 1) เป็น component ตารางกลาง ใช้ซ้ำได้ทั้ง User และ Admin
- ทำปุ่ม User Home Section และ Admin Home Section ในหน้า User/Admin ให้มี hover ขยับ และทำปุ่ม section ที่กำลังเลือกหน้านั้นอยู่ให้มีความแตกต่างกัน จะได้รู้ว่าอยู่หน้าไหน
- ส่วน navbar จะมีเส้นใต้บอกว่าอยู่หน้า Home หรือ Owner ด้วย

หลักการทำงาน คือ App.jsx ส่ง activeSection={homeSection} ไปให้ UserSection และ AdminSection
ใน UserSection/AdminSection มี class 2 แบบคือ normalButtonClass สำหรับปุ่มปกติ และ activeButtonClass สำหรับปุ่มที่ถูกเลือก
ใช้ ternary เช่น activeSection === 'user' ? activeButtonClass : normalButtonClass เพื่อเลือก style
