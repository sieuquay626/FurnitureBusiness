-Đồ án tốt nghiệp
(kinh doanh đồ nội thất)

-Tính năng
[]Hệ thống +[X]Kết nối thành công với MongoDB (mongosse) +[X]Xây dựng model User +[X]Xây dựng model Product +[X]Xây dựng xử lý lỗi và bắt 404 +[X]Xây dựng api đăng ký +[X]Xây dựng function tạo và kiểm tra token
[]Đối với khách:
+[]Xây dựng recomment system
++Recomment rating(thường sẽ dc dùng vs new Customer chưa mua sản phẩm hay add các sản phẩm và badge):Content-based systems
++Recomment smilar bought item(thường dc sử dụng cho các Customer đã có lịch sử mua hàng ở website)

+[]Xem tra cứu thông tin sản phẩm
+[]Đăng ký thành viên
+[]Đăng nhập
+[]Reset password bằng cách gửi verify code qua email
+[]Thêm sản phẩm vào giỏ hàng
+[]Có box chat để khách giải đáp thắc mắc khách hàng
[]Đối với người đăng nhập:
+[]Có tất cả tính năng của khách
+[]Profile
+[]Hỗ trợ thanh toán Online
[]Đối với người đăng nhập có quyền Admin(trang web nội bộ)
+[]Quản lý nhân viên,chi nhánh,kho,sản phẩm,nhà sản xuất,người dùng
+[]Xuất báo cáo

-Client :React
-Server :Express
-CSDL :MongoDB
-Module set up:
+concurrently:Gọi nhiều câu lệnh cùng 1 lúc
+helmet:tăng bảo mật = việc thay đổi HTTP headers
+cors

-Xử lý(API) sử dụng express

+Supplier
++[X]List nhà sản xuất
++[X]Thông tin của 1 nhà sản xuất
++[X]Thêm nhà sản xuất
++[X]Chỉnh sửa thông tin nhà sản xuất
++[X]Xóa nhà sản xuất (bắt phải sản phẩm trước khi xóa nhà sản xuất)

+Category
++[X]List thể loại sản phẩm
++[X]Chỉnh sửa thông tin của thể loại
++[X]Thêm thể loại mới
++[X]Xóa thể loại(tự động xóa thể loại trong sản phẩm )

+User
++[X]Xuất danh sách account (SuperAdmin)
++Đăng nhập
++[X]Đăng ký
++Đăng Xuất
++[X]Cập nhật thông tin user
++ChangePassword(Gửi verify code qua emial sử dụng nodemailer và shortid)
++[X]Tài khoản superAdmin tạo các tài khoản admin(SuperAdmin)
++Khóa tài khoản(SuperAdmin)
++[X]Xóa tài khoản(SuperAdmin)

+Product
++Xuất ra list các sản phẩm
++Xem thông tin của 1 sản phẩm(thêm sản phẩm vào supplier,category)
++Thêm sản phẩm(Admin)
++Cập nhật sản phẩm (Admin)
++Xóa sản phẩm(Admin)

+Order
++Lits hóa đơn
++Thông tin của 1 hóa đơn
++Thêm hóa đơn khi khách hàng thanh toán online trong giỏ hàng
++Cập nhật lại hóa đơn
++Xóa hóa đơn

- function ở phía server dự đoán -[X]Kết nối CSDL -[X]Taọ tài khoản superAdmin nếu CSDL chưa có -[X]Tạo jwt (jsonwebtoken,passport,passport-jwt) -[X]So sánh kết quả pasword đã hash và passport đăng nhập(bcyptjs)
  -Clear Token
  -Xuất pdf

-middleware +[X]404 Not found
+403 Forbidden (admin,superadmin)
+Check token

-model
++Rating
++Comment
++Product
++User
++Supplier
++Category
++Order

-Hệ thống recomment
+Dựa trên 1 user khác có tính liên quan
+Nếu clik vào chi tiết sản phẩm hệ thống sẽ gợi ý

-Giao diện yêu cầu
+Website_Ecommerce sử dụng temple shopo + bootstrap
*Cấu trúc thư mục
++Components
++Container
+++Header
++Footer
++Utils(axios)
++Features
++Constant
*Yêu cầu chức năng:
++Sử dụng React-Intl để thay đổi ngôn ngữ en,vn

+Admin sử dụng template velonic + ant
*Yêu cầu giao diện
++Sử dụng filepond để hiển thị hình ảnh upload
*Cấu trúc thư mục
++Components
++Container
++Utils(axios)
++Features
++Constant
\*Yêu cầu chức năng:
++Sắp xếp theo column

---------Website_Ecommerce sử dụng reactstrap

---------Admin gồm có menu gồm:Quản lý User,Quản lý sản phẩm,Quản lý nhà sản xuất,Quản lý hóa đơn
-DB
+Product(title,dimension,Category,Supplier)
+User
+Supplier
+Order(title,Product)
+Category
+Reviews
+Cart(Lưu bên phía client)

--Bổ sung
+Thêm bot gợi ý sản phẩm
+Clien và Admin SPA
+Xử lý RealTime
+Recomment System
