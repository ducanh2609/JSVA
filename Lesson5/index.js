

// let: biến khai báo cục bộ - không có hoisting (gọi ra trước khi khai báo biến) - không thể khai báo lại - có thể gán lại
// console.log(a) //hoisting -> not defined
// let a = 10 // gán
// // let a = 11 // khai báo lại
// a = 11 // gán lại

// var: biến khai báo global - có hoisting - có thể khai báo lại - có thể gán lại
// console.log(b)
// b = 10 // khi k có từ khóa khai báo biến, js tự nhận định nó là 1 biến var
// var b = 20
// var b = 30
// b = 40

// const: biến khai báo cục bộ - k có hoisting - không thể khai báo lại - không thể gán lại
// console.log(c)
// const c = 12
// const c = 13
// c = 14

// Các kiểu dữ liệu:
// + Kiểu dữ liệu nguyên thủy:
// - string: "", '', ``
// - number: 0,1,2
// - boolean: true, false
// - undefined
// - null
// + Kiểu dữ liệu phức tạp:
// - object: {}
// - array: []
// - function: () => {}


// typeof <biến> -> kiểu biến mà <biến> được khái báo theo dạng string
// typeof (<biến>)

// const abc = []
// console.log(typeof (abc)) // => string

// Tính toán: + , - , x , / => sử dụng với kiểu dữ liệu là number || string kí tự chữ số, còn các kiểu khác trả ra NaN
// const a = undefined
// const b = NaN
// console.log(b)
// console.log(a + b) // => a10

// Toán tử logic: &&, ||, !, !! => trả ra kiểu dữ liệu boolean
// console.log(true && false) // => false
// console.log((4 < 5) && (5 < 3)) // => false

// console.log(true || false) // => true
// console.log((4 < 2) || (5 < 3)) // => false

// console.log(!true) // => false
// console.log(!(4 < 2)) // => true

// console.log(!!true) // => true
// console.log(!!(4 < 2)) // => false

// // Lưu ý:
// // !1 = false
// // !0 = true
// console.log(!0)
// // +true = 1
// // +false = 0
// console.log(+false)

// Toán tủ so sánh: > , >=, <, <=, ==, >=, <=, ===, != , !==
// const a = 5
// const b = '5'
// console.log(a > b)
// console.log(a === b)
// console.log(a !== b)
// + == :  ss chỉ giá trị
// + ==== : ss cả gtri và kiểu dữ liệu

// const x1 = +prompt('Nhập tọa độ x1')
// const x2 = +prompt('Nhập tọa độ x2')
// const y1 = +prompt('Nhập tọa độ y1')
// const y2 = +prompt('Nhập tọa độ y1')
// const dis = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))
// console.log('dis', dis)
// alert(`distance is: ${dis.toFixed(1)}`)

// const x = +prompt('Nhập tọa độ x')
// const y = +prompt('Nhập tọa độ y')
// const z = +prompt('Nhập tọa độ z')
// const max = Math.max(x, y, z)
// alert(`x is max: ${max === x}`)

// const str1 = prompt('Nhập chuỗi 1')
// const str2 = prompt('Nhập chuỗi 2')
// alert(`str1 giống str2: ${str1 === str2}`)


// const num = +prompt('Nhập số:')
// alert(`số bạn nhập là số dương: ${num >= 0}`)

// const year = +prompt('Nhập năm:')
// const checkYear = (year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))
// alert(`năm bạn nhập là năm nhuận: ${checkYear}`)

// const h1 = +prompt('Nhập giờ 1')
// const m1 = +prompt('Nhập phút 1')
// const h2 = +prompt('Nhập giờ 2')
// const m2 = +prompt('Nhập phút 2')
// const checkHour = (h1 > h2) || ((h1 === h2) && (m1 > m2))
// alert(`thời gian 1 lơn hơn thời gian 2: ${checkHour}`)

