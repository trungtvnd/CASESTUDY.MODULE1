let student_list = [['K14.1', 'Trần Việt Trung', '20/01/1992', 'Nam', 'trungtv@gmail.com', 'K14', 'Ngân hàng', 'NHTMD', '0383147758'],
    ['K14.2', 'Trần Van Thanh', '10/03/1992', 'Nam', 'thanhtv@gmail.com', 'K14', 'Ngân hàng', 'NHTMD', '0382347758'],
    ['K14.3', 'Nguyen Thi Hong Thom', '22/10/1993', 'Nu', 'thomnth@gmail.com', 'K14', 'Ngân hàng', 'NHTMD', '059716970'],
    ['K14.4', 'Hoang Hoa Tham', '22/10/1993', 'Nam', 'thainth@gmail.com', 'K15', 'Ngân hàng', 'NHTMA', '059242342'],
    ['K14.5', 'Le Van Vui', '25/03/1994', 'Nam', 'vuilv@gmail.com', 'K16', 'Tai Chinh', 'TCA', '05987916521'],
    ['K14.6', 'Tran Ngoc Trang', '22/12/1994', 'Nam', 'trangtn@gmail.com', 'K15', 'Ngân hàng', 'NHTMB', '059897744']]


// let editname
// let editbirth
// let editemail
// let edityear
// let editdp
// let editclassstudent
// let editgender
// let editPhone

localStorage.setItem('students', 'Nguyen van a')

function display() {

    let table = "<table id='table'>"
    table += "<tr>" + "<td>" + "<b>" + "STT" + "</b>" + "</td>" + "<td>" + "<b>" + "Code Student" + "</b>" + "</td>" + "<td id='fullname1'>" + "<b>" + "Full name" + "</b>" + "</td>" +
        "<td>" + "<b>" + "Date of Birth" + "</b>" + "</td>" + "<td>" + "<b>" + "Gender" + "</b>" + "</td>" + "<td id='mail'>" + "<b>" + "Email" + "</b>" + "</td>" +
        "<td>" + "<b>" + "Acedemy Year" + "</b>" + "</td>" + "<td>" + "<b>" + "Department" + "</b>" + "</td>" + "<td>" + "<b>" + "Class student" + "</b>" + "</td>" +
        "<td>" + "<b>" + "Phone Number" + "</b>" + "</td>" + "<td colspan='3' style='color: red'>" + "Total sts:  " + student_list.length + "   " + "</td>" + "</tr>"
    for (let i = 0; i < student_list.length; i++) {
        table += "<tr>"
        table += "<td>" + (i + 1) + "</td>" + "<td>" + student_list[i][0] + "</td>" + "<td>" + student_list[i][1] + "</td>"
            + "<td>" + student_list[i][2] + "</td>" + "<td>" + student_list[i][3] + "</td>" + "<td>" + student_list[i][4] + "</td>"
            + "<td>" + student_list[i][5] + "</td>" + "<td>" + student_list[i][6] + "</td>" + "<td>" + student_list[i][7] + "</td>"
            + "<td>" + student_list[i][8] + "</td>" + "<td>" + "<button id='edit' value='edit' onclick='edit(" + i + ")'>" + "edit " + "</button>" + "</td>"
            + "<td>" + "<button id='delete' value='delete' onclick='deleteProduct(" + i + ")'>" + "delete" + "</button>" + "</td>"
        table += "</tr>"

    }
    table += "</table>"
    document.getElementById('student').innerHTML = table
}

function add() {
    let index = document.getElementById('indexchange').value
    let code = document.getElementById('id').value
    let fullname = document.getElementById('fullname').value
    let birth = document.getElementById('birth').value
    let email = document.getElementById('email').value
    let year = document.getElementById('year').value
    let dp = document.getElementById('dp').value
    let classStudent = document.getElementById('class').value
    let phone = document.getElementById('phone').value
    let gender = ''
    if (document.getElementById('male').checked) {
        gender = document.getElementById('male').value
    } else if (document.getElementById('female').checked) {
        gender = document.getElementById('female').value
    }


    if (fullname === '' || birth === '' || year === '' || gender === '') {
        document.getElementById('error').innerHTML = 'Không được để trống thông tin'

    } else {
        document.getElementById('error').innerHTML = ''
        checkTrung()
        let list = [code, fullname, birth, gender, email, year, dp, classStudent, phone]
        if (index !== '') {
            student_list[index] = list
            display()
            return
        }
        student_list.push(list)
        document.getElementById('id').value = ""
        document.getElementById('fullname').value = ""
        document.getElementById('birth').value = ""
        document.getElementById('email').value = ""
        document.getElementById('year').value = ""
        document.getElementById('dp').value = ""
        document.getElementById('class').value = ""
        document.getElementById('phone').value = ""
        display()
    }
}


function deleteProduct(index) {
    // document.getElementById('test').style.display = 'block'
    student_list.splice(index, 1)
    display()
}


function edit(index) {
    let edit = student_list[index]
    console.log(edit)
    document.getElementById('indexchange').value = index

    document.getElementById('id').value = edit[0]
    document.getElementById('fullname').value = edit[1]
    document.getElementById('birth').value = edit[2]
    document.getElementById('email').value = edit[4]
    document.getElementById('year').value = edit[5]
    document.getElementById('dp').value = edit[6]
    document.getElementById('class').value = edit[7]
    document.getElementById('male').value = edit[3]
    document.getElementById('female').value = edit[3]
    document.getElementById('phone').value = edit[8]
    display()
}

function checkTrung() {
    for (let i = 0; i < student_list.length; i++) {
        let inputCode = document.getElementById('id').value
        if (inputCode === student_list[i][0]) {
            alert('Không được trùng mã sinh viên')
        }
    }
}

function view(){

}


