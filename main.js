const loginForm = document.querySelector(".login-form");

const validateInput = (inputObj) => {
  const { username, password } = inputObj;

  const usernameWithoutSpaces = username.trim();
  const passwordWithoutSpaces = password.trim();

  let valid = true;

  if (
    usernameWithoutSpaces === '' ||
    passwordWithoutSpaces === '' ||
    username.includes(' ') ||
    password.includes(' ')
  ) {
    valid = false;
  }

  if (usernameWithoutSpaces.length <= 3 || /^\d/.test(usernameWithoutSpaces)) {
    valid = false;
    if (usernameWithoutSpaces.length <= 3) {
      window.alert("ชื่อผู้ใช้ต้องมีความยาวมากกว่า 3 ตัวอักษร");
    } else {
      window.alert("ชื่อผู้ใช้ห้ามนำหน้าด้วยตัวเลข");
    }
  }

  if (passwordWithoutSpaces.length <= 4 || !/\d/.test(passwordWithoutSpaces) || !/[a-zA-Z]/.test(passwordWithoutSpaces)) {
    valid = false;
    if (passwordWithoutSpaces.length <= 4) {
      window.alert("รหัสผ่านต้องมีอย่างน้อย 5 ตัวอักษร");
    } else {
      window.alert("รหัสผ่านต้องประกอบด้วยตัวเลขและตัวอักษร");
    }
  }

  if (valid) {
    // แจ้ง "Login successful!" ผ่าน prompt
    window.setTimeout(() => {
      window.alert("เข้าสู่ระบบสำเร็จ!");
      window.location.href = "https://www.example.com";
    }, 100);
  } else {
    const inputs = document.querySelectorAll('.login-form input');
    inputs.forEach((input) => {
      input.style.borderColor = 'red';
    });
  }
};

const handleLogin = (e) => {
  e.preventDefault();
  let inputObj = {};

  for (let el of loginForm.elements) {
    if (el.id) {
      inputObj[el.id] = el.value;
    }
  }

  validateInput(inputObj);
};

loginForm.addEventListener("submit", handleLogin);