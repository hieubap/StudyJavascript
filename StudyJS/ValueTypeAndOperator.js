// biến
// kiểu number integer float
var a = 1;
var b = -9.1;
var c = 10e9; // e9 = x 10 mũ 9
console.log("gia tri bien a = " + a);
console.log("gia tri bien b = " + b);
console.log("gia tri bien c = " + c);

// giá trị đặc biệt vô cùng
console.log("a / 0 = " + a/0);
console.log("b / 0 = " + b/0);

// các phép toán + - * / % như các ngôn ngữ khác


// với chuỗi có thể để trong 3 dấu `` "" ''
var s1 = `chuoi so 1`;
var s2 = "chuoi so 2";
var s3 = 'chuoi so 3';

// muốn in ra màn hình ta sử dụng console.log();
console.log("string s1 = " + s1);
console.log("string s2 = " + s2);
console.log("string s3 = " + s3);

// muốn đưa giá trị của biến vào trong string thì dùng ${ biến } nhưng phải dùng ``
var s4 = `gia tri cua bien a la ${a}`;
var s5 = 'gia tri cua bien a la ${a}';

console.log("string s4 = " + s4);
console.log("string s5 = " + s5);


// trong JS có typeof dùng để xác định kiểu giá trị
console.log("kieu gia trị bien a = " + typeof a);
console.log("kieu gia trị bien s1 = " + typeof s1);

// kiểu boolean
var d = true;
console.log("d = " + d);
console.log("3 < 2 = " + (3 < 2));

// so sánh chuỗi
console.log("hello < world = " + ("hello" < "world"));

// các phép toán logic
console.log("true && true = " + (true && true));
console.log("true && false = " + (true && false));
console.log("true || false = " + true || false);
console.log("false || false = " + false || false);

// câu điều kiện rút gọn
console.log("ket qua cau lenh: 3 < 1 ? 100 : 200 " + 3 < 1 ? 100 : 200);

// có 2 kiểu giá trị rỗng là null và undifined
/* vì trong js biến được khai báo với var nên là nếu không gán giá trị thì
hệ thống sẽ không biết biến đó thuộc kiểu gì và sẽ báo undefined
*/
var e;
console.log("gia tri cua e = " + e);

// chuyển đổi giữa các kiểu
console.log("8 * null = "+(8 * null));
console.log(`"5" - 1 = `+("5" - 1));
console.log('"5" + 1 = '+("5" + 1));
console.log('"five" * 2 = ' + ("five" * 2));
console.log('false == 0 = ' + (false == 0));



