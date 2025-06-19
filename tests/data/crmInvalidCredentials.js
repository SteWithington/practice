export const crmInvalidCredentials = [
  { username: ' ', password: ' ' }, //Blank Credentials
  { username: '', password: '' }, //Blank Credentials
  { username: 'invalidusername', password: '' }, //Invalid Username, Blank Password
  { username: 'automatedtest', password: '' }, //Valid Username, Blank Password
  { username: '', password: 'invalidpassword' }, //Blank Username, Invalid Password
  { username: '', password: 'kYf5WLm9' }, //Blank Username, Valid Password
  { username: 'invalidusername', password: 'invalidpassword' }, //Invalid Username, Invalid Password
  { username: 'automatedtest', password: 'invalidpassword' }, //Valid Username, Invalid Password
  { username: 'invalidusername', password: 'kYf5WLm9' }, //Invalid Username, Valid Password

  //Aditional Scenarios
  // { username: "' OR '1'='1", password: "' OR '1'='1" } , //SQL Injection Attempt
  // { username: "<script>alert(1)</script>", password: "password" }, //XSS Attempt
  { username: 'a'.repeat(500), password: 'b'.repeat(500) }, // Excessively long fields
  { username: ' automatedtest ', password: ' kYf5WLm9 ' }, // Valid creds with surrounding spaces
  { username: 'AutomatedTest', password: 'kYF5wlm9' }, // Mixed case version of valid creds - TBC
  { username: 'user!@#$', password: 'pass%^&*' }, // Random special characters
  { username: 'ユーザー', password: 'パスワード' }, // Japanese characters
  { username: '<b>admin</b>', password: '<i>pass</i>' }, // Test HTML tag input
  { username: 'some@one@example.com', password: 'password' }, // Test if email format is accepted when it shouldn't be
];