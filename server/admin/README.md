-Cấu trúc app

- app: Nơi quản lý các thành phần như Route, các module được sử dụng ở bất kỳ đâu bên trong website (header, menu, footer, ...).

- assets: Thư mục lưu trữ các resource của project (hình ảnh, font, ...).

- components: Quản lý các thành phần có thể được tái sử dụng nhiều lần cho các chức năng khác nhau (Button, TextInput, ...).

- features: Có tác dụng quản lý các chức năng của website (auth, user, cart, ....).

- localStorage: Thư việc hỗ trợ sử dụng local storage của website. Xem thêm về Local Storage.

- store: Nơi khai báo và quản lý các trạng thái của website.

- index.js: Nơi khai báo cấu hình website với root HTML tương ứng.

-REDUX

- pages (website) hoặc views (mobile): Nơi hiển thị nội dung cho người dùng nhìn thấy. Khi người dùng tương tác trên các button, ... Các hành động này sẽ được xử lý ở services.

- services: Nơi nhận vào các hành động từ pages hoặc views, sau đó xử lý logic và gọi các actions bằng hàm dispatch.

- actions: Giống như một lớp model, nhận vào data và loại hành động từ services thông qua hàm dispatch, sau đó trả về loại hành động và data cho reducer.

- reducer: Sẽ nhận vào các loại hành động & data từ actions, tùy theo các loại hành động tương ứng, dữ liệu sẽ được cập nhật và global state.

- global state: Nơi chứa toàn bộ các trạng thái của ứng dụng hoặc website. Khi global state thay đổi (được cập nhật lại nhờ reducer) thì UI (nơi hiển thị cho người dùng) sẽ được cập nhật lại.

- actionTypes: Nơi để khai báo, quản lý các constants của Redux.

--Trang Admin các component dự đoán
++Login
++Forget Password
++Loading Page
++Not Found
++DashBoard(Chart)
++Quản lý User (thêm ,sửa ,list)
++Product(thêm,sửa,xóa)
++Profile của User đang đăng nhập
++Category(thêm,sửa,list)
++Order(sửa ,list)
++Supplier(thếm,sửa,xóa)
++Popup khi xóa 1 thứ gì đó
