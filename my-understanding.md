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

========================================================

เพิ่ม useEffect ใน App.jsx เพื่อ fetch ข้อมูลสมาชิกตอนเว็บโหลดครั้งแรก
เพิ่ม state ใหม่คือ

- members เก็บข้อมูลสมาชิกจาก API
- isLoading เช็คว่ากำลังโหลดอยู่ไหม
- errorMessage เก็บข้อความ error ถ้า fetch ไม่สำเร็จ

เอา sampleMembers ออก แล้วใช้ข้อมูลจริงจาก API แทน

ส่ง members, isLoading, errorMessage ผ่าน props ไปที่ UserSection และ AdminSection

ปรับ MemberTable ให้แสดง 3 สถานะ:
Loading members...
error message ถ้า API มีปัญหา
ตารางข้อมูลสมาชิกถ้าโหลดสำเร็จ

========================================================

- เพิ่ม POST API สำหรับสร้าง member ใหม่
- เพิ่ม isSaving เพื่อบอกว่ากำลัง Save อยู่
- เพิ่ม createError เพื่อแสดง error ถ้า POST ไม่สำเร็จ
- เพิ่ม handleCreateMember ใน App.jsx สำหรับส่ง POST ไปที่ API
- เมื่อ API สร้างข้อมูลสำเร็จ จะเอา member ใหม่มาต่อท้าย members ทันที ทำให้ตารางอัปเดตโดยไม่ต้อง refresh
- เปลี่ยน input ใน Admin เป็น controlled form ด้วย useState
- เพิ่ม validation ถ้ากรอกไม่ครบ จะแสดง Please fill in all fields.

ในไฟล์ App.jsx ใช้ fetch(API_URL, { method: "POST", ... }) เพื่อสร้าง member
ใช้ setMembers((currentMembers) => [...currentMembers, createdMember]) เพื่อเพิ่มข้อมูลใหม่เข้า state เดิม

ในไฟล์ AdminSection.jsx ใช้ formData เก็บค่า input ทั้ง 3 ช่อง
handleChange อัพเดท state ตามช่องที่พิมพ์
handleSubmit กันหน้า refresh, ตรวจว่ากรอกครบ, แล้วเรียก onCreateMember

========================================================

ทำ DELETE API

- เพิ่ม deletingId เพื่อรู้ว่ากำลังลบ member คนไหนอยู่
- เพิ่ม deleteError เพื่อแสดง error ถ้าลบไม่สำเร็จ
- เพิ่ม handleDeleteMember(memberId) ใน App.jsx
- ส่ง onDeleteMember จาก App ไป AdminSection แล้วต่อไป MemberTable
- ปุ่ม Delete เรียก onDeleteMember(member.id)
- ถ้า DELETE สำเร็จ ใช้ filter ลบ member คนนั้นออกจาก state ตารางเลย
  ระหว่างลบ ปุ่มของแถวนั้นจะเปลี่ยนเป็น Deleting...

ใน App.jsx ใช้ URL แบบ ${API_URL}/${memberId} เพื่อยิง DELETE /members/:memberId
ใช้ filter เพื่อเก็บเฉพาะ member ที่ id ไม่ตรงกับตัวที่ลบ

ใน MemberTable.jsx ปุ่ม Delete ส่ง member.id กลับขึ้นไปให้ parent จัดการ API

========================================================

เปลี่ยนข้อมูลและเพิ่มรูปภาพในหน้า Owner
