/* signup form popup */
function createaccount() {
  var signup = document.getElementById("signup");
  signup.style.display = "flex";
}

/* signup form close */
function closesignupform() {
  var signup = document.getElementById("signup");
  signup.style.display = "none";
}

/* post form open */
function postformopen() {
  var postform = document.querySelector(".post-form");
  postform.style.display = "flex";
}

/* post form close */
function postformclose() {
  var postform = document.querySelector(".post-form");
  postform.style.display = "none";
}

/* category form open */
function categoryformopen() {
  var categoryform = document.querySelector(".category");
  categoryform.style.display = "flex";
}

/* category form close */
function categoryformclose() {
  var categoryform = document.querySelector(".category");
  categoryform.style.display = "none";
}

/* updateform open */
function updateformopen(button) {
  var updateform = document.querySelector(".update-form");
  updateform.style.display = "flex";
  document.querySelector(".updatedform").action =
    "/updatearticle/" + button.getAttribute("data-slug") + "/";
  document.querySelector(".update-title").value =
    button.getAttribute("data-title");
  var baseURL = "/media/";
  document.querySelector(".custom-image-size").src =
    baseURL + button.getAttribute("data-image");
  document.querySelector(".update-category").value =
    button.getAttribute("data-id");

  var $updateddescription = $(".update-description");
  if (!$updateddescription.summernote) {
    $updateddescription.summernote({
      placeholder: "Enter description here...",
      toolbar: [
        ["style", ["bold", "italic", "underline", "clear"]],
        ["font", ["strikethrough", "superscript", "subscript"]],
        ["para", ["ul", "ol"]],
        ["insert", ["link", "picture"]],
        ["view", ["fullscreen", "codeview"]],
      ],
    });
  }
  var descriptionupdatedContent = button.getAttribute("data-description");
  $updateddescription.summernote("code", descriptionupdatedContent);
}

/* deletepopup open */
function deletepopupopen(slug) {
  var deletepopup = document.querySelector(".delete-popup");
  deletepopup.style.display = "flex";
  document.querySelector(".deleteForm").action = "/deletepost/" + slug + "/";
}

/* updateform close */
function updateformclose() {
  var updateform = document.querySelector(".update-form");
  updateform.style.display = "none";
}

/* deletepopup close */
function deletepopupclose() {
  var deletepopup = document.querySelector(".delete-popup");
  deletepopup.style.display = "none";
}

/* post headlines form open */

function postheadlineformopen() {
  var headlineform = document.querySelector(".post-headlines");
  headlineform.style.display = "flex";
}

/* post headlines form close */

function postheadlineformclose() {
  var headlineform = document.querySelector(".post-headlines");
  headlineform.style.display = "none";
}

/* delete headline popup open */

function deleteheadlineopen(slug) {
  var deleteheadline = document.querySelector(".delete-headline");
  deleteheadline.style.display = "flex";
  document.querySelector(".deleteheadline").action =
    "/deleteheadline/" + slug + "/";
}

/* delete headline popup close */

function deleteheadlineclose() {
  var deleteheadline = document.querySelector(".delete-headline");
  deleteheadline.style.display = "none";
}

/* headline updateform open */
function headlineupdateopen(button) {
  var updateheadline = document.querySelector(".update-headline");
  updateheadline.style.display = "flex";

  document.querySelector(".updateformheadline").action =
    "/updateheadline/" + button.getAttribute("data-slug") + "/";
  document.querySelector(".update-headlinetitle").value =
    button.getAttribute("data-title");

  var baseURL = "/media/";
  document.querySelector(".custom-image-headlinesize").src =
    baseURL + button.getAttribute("data-image");

  var $updateeditor = $(".update-headlinedescription");
  if (!$updateeditor.summernote) {
    $updateeditor.summernote({
      placeholder: "Enter description here...",
      toolbar: [
        ["style", ["bold", "italic", "underline", "clear"]],
        ["font", ["strikethrough", "superscript", "subscript"]],
        ["para", ["ul", "ol"]],
        ["insert", ["link", "picture"]],
        ["view", ["fullscreen", "codeview"]],
      ],
    });
  }
  var descriptionContent = button.getAttribute("data-description");
  $updateeditor.summernote("code", descriptionContent);
}

/* headline updateform close */
function headlineupdateclose() {
  var updateheadline = document.querySelector(".update-headline");
  updateheadline.style.display = "none";
}

/* context form open */
function opencontext(){
  var contextform=document.querySelector(".context");
  contextform.style.display="flex";
}

/* context form close */
function closecontext(){
  var contextform=document.querySelector(".context");
  contextform.style.display="none";
}

/* login form validation */
var formlogin = document.getElementById("form-login");

if (formlogin) {
  formlogin.addEventListener("submit", (e) => {
    e.preventDefault();
    var loginemail = document.getElementById("login-email");
    var loginpassword = document.getElementById("login-password");
    var loginemailerror = document.getElementById("loginemailerror");
    var loginpassworderror = document.getElementById("loginpassworderror");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (loginemail.value.trim() === "") {
      loginemailerror.innerHTML = "Enter Email";
      loginemail.style.border = "2px solid red";
    } else if (!emailRegex.test(loginemail.value)) {
      loginemailerror.innerHTML = "Enter Valid Email";
      loginemail.style.border = "2px solid red";
    } else {
      loginemailerror.innerHTML = "";
      loginemail.style.border = "2px solid green";
    }
    if (loginpassword.value.trim() === "") {
      loginpassworderror.innerHTML = "Enter Password";
      loginpassword.style.border = "2px solid red";
    } else if (loginpassword.value.length < 6) {
      loginpassworderror.innerHTML = "Password should be atleast 6 characters";
      loginpassword.style.border = "2px solid red";
    } else {
      loginpassworderror.innerHTML = "";
      loginpassword.style.border = "2px solid green";
    }
    if (loginemailerror.innerHTML || loginpassworderror.innerHTML) {
      return;
    }
    formlogin.submit();
  });
}

/* signup form validation */
var formsignup = document.getElementById("form-signup");

if (formsignup) {
  formsignup.addEventListener("submit", (e) => {
    e.preventDefault();
    var signupname = document.getElementById("signup-name");
    var signupemail = document.getElementById("signup-email");
    var signuppassword = document.getElementById("signup-password");
    var signupcnfpassword = document.getElementById("signup-cnfpassword");
    var signupnameerror = document.getElementById("signupnameerror");
    var signupemailerror = document.getElementById("signupemailerror");
    var signuppassworderror = document.getElementById("signuppassworderror");
    var signupcnfpassworderror = document.getElementById(
      "signupcnfpassworderror"
    );
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (signupname.value.trim() === "") {
      signupname.style.border = "2px solid red";
      signupnameerror.innerHTML = "Enter Full Name";
    } else if (signupname.value.length < 3) {
      signupname.style.border = "2px solid red";
      signupnameerror.innerHTML = "Name should be atleast 3 characters";
    } else {
      signupname.style.border = "2px solid green";
      signupnameerror.innerHTML = "";
    }

    if (signupemail.value.trim() === "") {
      signupemailerror.innerHTML = "Enter Email";
      signupemail.style.border = "2px solid red";
    } else if (!emailRegex.test(signupemail.value)) {
      signupemailerror.innerHTML = "Enter Valid Email";
      signupemail.style.border = "2px solid red";
    } else {
      signupemailerror.innerHTML = "";
      signupemail.style.border = "2px solid green";
    }
    if (signuppassword.value.trim() === "") {
      signuppassworderror.innerHTML = "Enter Password";
      signuppassword.style.border = "2px solid red";
    } else if (signuppassword.value.length < 6) {
      signuppassworderror.innerHTML = "Password should be atleast 6 characters";
      signuppassword.style.border = "2px solid red";
    } else {
      signuppassworderror.innerHTML = "";
      signuppassword.style.border = "2px solid green";
    }

    if (signupcnfpassword.value.trim() === "") {
      signupcnfpassword.style.border = "2px solid red";
      signupcnfpassworderror.innerHTML = "Enter Confirm Password";
    } else if (signupcnfpassword.value !== signuppassword.value) {
      signupcnfpassworderror.innerHTML = "Password not match";
      signupcnfpassword.style.border = "2px solid red";
    } else {
      signupcnfpassworderror.innerHTML = "";
      signupcnfpassword.style.border = "2px solid green";
    }
    if (
      signupemailerror.innerHTML ||
      signuppassworderror.innerHTML ||
      signupcnfpassworderror.innerHTML
    ) {
      return;
    }
    formsignup.submit();
  });
}

/* post form validation */
var formpost = document.getElementById("form-post");

if (formpost) {
  formpost.addEventListener("submit", (e) => {
    e.preventDefault();
    var posttitle = document.getElementById("post-title");
    var postdescription = document.getElementById("post-description");
    var imageupload = document.getElementById("inputGroupFile02");
    var posttitleerror = document.getElementById("posttitleerror");
    var postdescriptionerror = document.getElementById("postdescriptionerror");
    var postfileerror = document.getElementById("postfileerror");
    var category = document.getElementById("category");
    var categoryerror = document.getElementById("categoryerror");
    var postcheck = document.getElementById("checkmark-post");
    var postcheckerror = document.getElementById("checkmarkerror");

    if (posttitle.value.trim() === "") {
      posttitle.style.border = "2px solid red";
      posttitleerror.innerHTML = "Title cannot be empty";
    } else if (posttitle.value.length < 5) {
      posttitle.style.border = "2px solid red";
      posttitleerror.innerHTML = "Title should be atleast 5 characters";
    } else {
      posttitle.style.border = "2px solid green";
      posttitleerror.innerHTML = "";
    }
    if (postdescription.value.trim() === "") {
      postdescription.style.border = "2px solid red";
      postdescriptionerror.innerHTML = "Description Cannot be Empty";
    } else if (postdescription.value.length < 5) {
      postdescription.style.border = "2px solid red";
      postdescriptionerror.innerHTML = "Title should be atleast 5 characters";
    } else {
      postdescription.style.border = "2px solid green";
      postdescriptionerror.innerHTML = "";
    }
    if (imageupload.files.length === 0) {
      postfileerror.innerHTML = "Please select an image file";
      imageupload.style.border = "2px solid red";
    } else {
      var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
      if (!allowedExtensions.exec(imageupload.value)) {
        postfileerror.innerHTML =
          "Invalid file type. Allowed types: .jpg, .jpeg, .png";
        imageupload.value = "";
        imageupload.style.border = "2px solid red";
        return false;
      } else {
        postfileerror.innerHTML = "";
        imageupload.style.border = "2px solid green";
      }
    }

    if (category.value.trim() === "Select News Category") {
      category.style.border = "2px solid red";
      categoryerror.innerHTML = "Select news category";
    } else {
      category.style.border = "2px solid green";
      categoryerror.innerHTML = "";
    }
    if (!postcheck.checked) {
      postcheck.style.border = "2px solid red";
      postcheckerror.innerHTML = "Please Check Mark";
    } else {
      postcheck.style.border = "2px solid green";
      postcheckerror.innerHTML = "";
    }
    if (
      posttitleerror.innerHTML ||
      postdescriptionerror.innerHTML ||
      postfileerror.innerHTML ||
      categoryerror.innerHTML ||
      postcheckerror.innerHTML
    ) {
      return;
    }
    formpost.submit();
  });
}

/* reset password validation */

var resetform = document.getElementById("form-reset");

if (resetform) {
  resetform.addEventListener("submit", (e) => {
    e.preventDefault();
    var resetemail = document.getElementById("reset-email");
    var resetpassword = document.getElementById("reset-password");
    var resetcnfpassword = document.getElementById("reset-cnfpassword");
    var resetemailerror = document.getElementById("resetemailerror");
    var resetpassworderror = document.getElementById("resetpassworderror");
    var resetcnfpassworderror = document.getElementById(
      "resetcnfpassworderror"
    );
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (resetemail.value.trim() === "") {
      resetemailerror.innerHTML = "Enter Email";
      resetemail.style.border = "2px solid red";
    } else if (!emailRegex.test(resetemail.value)) {
      resetemailerror.innerHTML = "Enter Valid Email";
      resetemail.style.border = "2px solid red";
    } else {
      resetemailerror.innerHTML = "";
      resetemail.style.border = "2px solid green";
    }
    if (resetpassword.value.trim() === "") {
      resetpassworderror.innerHTML = "Enter Password";
      resetpassword.style.border = "2px solid red";
    } else if (resetpassword.value.length < 6) {
      resetpassworderror.innerHTML = "Password should be atleast 6 characters";
      resetpassword.style.border = "2px solid red";
    } else {
      resetpassworderror.innerHTML = "";
      resetpassword.style.border = "2px solid green";
    }

    if (resetcnfpassword.value.trim() === "") {
      resetcnfpassword.style.border = "2px solid red";
      resetcnfpassworderror.innerHTML = "Enter Confirm Password";
    } else if (resetcnfpassword.value !== resetpassword.value) {
      resetcnfpassworderror.innerHTML = "Password not match";
      resetcnfpassword.style.border = "2px solid red";
    } else {
      resetcnfpassworderror.innerHTML = "";
      resetcnfpassword.style.border = "2px solid green";
    }
    if (
      resetemailerror.innerHTML ||
      resetpassworderror.innerHTML ||
      resetcnfpassworderror.innerHTML
    ) {
      return;
    }
    resetform.submit();
  });
}

/* alerts */
setTimeout(() => {
  var messages = document.querySelector(".messages");
  messages.innerHTML = "";
}, 5000);

/* add category form validation */
var categoryform = document.querySelector(".category-form");

if (categoryform) {
  categoryform.addEventListener("submit", (e) => {
    e.preventDefault();
    var categoryname = document.getElementById("category-name");
    var categoryerror = document.getElementById("category-error");
    if (categoryname.value.trim() === "") {
      categoryname.style.border = "2px solid red";
      categoryerror.innerHTML = "Enter Category";
    } else {
      categoryname.style.border = "2px solid green";
      categoryerror.innerHTML = "";
    }
    if (categoryerror.innerHTML) {
      return;
    }
    categoryform.submit();
  });
}

/* updateform validation */
var updatepost = document.querySelector(".updatedform");

if (updatepost) {
  updatepost.addEventListener("submit", (e) => {
    e.preventDefault();
    var updatetitle = document.querySelector(".update-title");
    var updatedescription = document.querySelector(".update-description");
    var updatetitleerror = document.getElementById("updatetitleerror");
    var updatedescriptionerror = document.getElementById(
      "updatedescriptionerror"
    );
    var updatefileerror = document.getElementById("updatefileerror");
    var updatecategory = document.querySelector(".update-category");
    var updatedimage = document.querySelector(".updatedimage");
    var updatecategoryerror = document.getElementById("updatecategoryerror");
    var checkmarkupdated = document.querySelector(".checkmark-updated");
    var checkmarkerrorupdated = document.getElementById(
      "checkmarkerrorupdated"
    );

    if (updatetitle.value.trim() === "") {
      updatetitle.style.border = "2px solid red";
      updatetitleerror.innerHTML = "Title cannot be empty";
    } else if (updatetitle.value.length < 5) {
      updatetitle.style.border = "2px solid red";
      updatetitleerror.innerHTML = "Title should be atleast 5 characters";
    } else {
      updatetitle.style.border = "2px solid green";
      updatetitleerror.innerHTML = "";
    }
    if (updatedescription.value.trim() === "") {
      updatedescription.style.border = "2px solid red";
      updatedescriptionerror.innerHTML = "Description Cannot be Empty";
    } else if (updatedescription.value.length < 5) {
      updatedescription.style.border = "2px solid red";
      updatedescriptionerror.innerHTML = "Title should be atleast 5 characters";
    } else {
      updatedescription.style.border = "2px solid green";
      updatedescriptionerror.innerHTML = "";
    }
    if (updatecategory.value.trim() === "Select News Category") {
      updatecategory.style.border = "2px solid red";
      updatecategoryerror.innerHTML = "Select news category";
    } else {
      updatecategory.style.border = "2px solid green";
      updatecategoryerror.innerHTML = "";
    }
    if (!checkmarkupdated.checked) {
      checkmarkupdated.style.border = "2px solid red";
      checkmarkerrorupdated.innerHTML = "Please Check Mark";
    } else {
      checkmarkupdated.style.border = "2px solid green";
      checkmarkerrorupdated.innerHTML = "";
    }
    if (updatedimage.files.length > 0) {
      var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
      if (!allowedExtensions.exec(updatedimage.value)) {
        updatefileerror.innerHTML =
          "Invalid file type. Allowed types: .jpg, .jpeg, .png";
        updatedimage.value = "";
        updatedimage.style.border = "2px solid red";
        return false;
      } else {
        updatefileerror.innerHTML = "";
        updatedimage.style.border = "2px solid green";
      }
    }

    if (
      updatetitleerror.innerHTML ||
      updatedescriptionerror.innerHTML ||
      updatefileerror.innerHTML ||
      updatecategoryerror.innerHTML ||
      checkmarkerrorupdated.innerHTML
    ) {
      return;
    }
    updatepost.submit();
  });
}

/* headlines post form validation */

var headlineform = document.querySelector(".headline-form");

if (headlineform) {
  headlineform.addEventListener("submit", (e) => {
    e.preventDefault();
    var headlinetitle = document.querySelector(".headline-title");
    var headlinedescription = document.querySelector(".headline-description");
    var headlineimage = document.querySelector(".headlineimage");
    var headlinetitleerror = document.getElementById("headlinetitleerror");
    var headlinedescriptionerror = document.getElementById(
      "headlinedescriptionerror"
    );
    var headlinefileerror = document.getElementById("headlinefileerror");
    var headlinecheckmark = document.querySelector(".headline-checkmark");
    var headlinecheckmarkerror = document.getElementById(
      "headlinecheckmarkerror"
    );

    if (headlinetitle.value.trim() === "") {
      headlinetitle.style.border = "2px solid red";
      headlinetitleerror.innerHTML = "Title cannot be empty";
    } else if (headlinetitle.value.length < 5) {
      headlinetitle.style.border = "2px solid red";
      headlinetitleerror.innerHTML = "Title should be atleast 5 characters";
    } else {
      headlinetitle.style.border = "2px solid green";
      headlinetitleerror.innerHTML = "";
    }
    if (headlinedescription.value.trim() === "") {
      headlinedescription.style.border = "2px solid red";
      headlinedescriptionerror.innerHTML = "Description Cannot be Empty";
    } else if (headlinedescription.value.length < 5) {
      headlinedescription.style.border = "2px solid red";
      headlinedescriptionerror.innerHTML =
        "Title should be atleast 5 characters";
    } else {
      headlinedescription.style.border = "2px solid green";
      headlinedescriptionerror.innerHTML = "";
    }
    if (headlineimage.files.length === 0) {
      headlinefileerror.innerHTML = "Please select an image file";
      headlineimage.style.border = "2px solid red";
    } else {
      var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
      if (!allowedExtensions.exec(headlineimage.value)) {
        headlinefileerror.innerHTML =
          "Invalid file type. Allowed types: .jpg, .jpeg, .png";
        headlineimage.value = "";
        headlineimage.style.border = "2px solid red";
        return false;
      } else {
        headlinefileerror.innerHTML = "";
        headlineimage.style.border = "2px solid green";
      }
    }
    if (!headlinecheckmark.checked) {
      headlinecheckmark.style.border = "2px solid red";
      headlinecheckmarkerror.innerHTML = "Please Check Mark";
    } else {
      headlinecheckmark.style.border = "2px solid green";
      headlinecheckmarkerror.innerHTML = "";
    }
    if (
      headlinetitleerror.innerHTML ||
      headlinedescriptionerror.innerHTML ||
      headlinefileerror.innerHTML ||
      headlinecheckmarkerror.innerHTML
    ) {
      return;
    }
    headlineform.submit();
  });
}

/* update headline form validation */
var updateformheadline = document.querySelector(".updateformheadline");

if (updateformheadline) {
  updateformheadline.addEventListener("submit", (e) => {
    e.preventDefault();
    var updateheadlinetitle = document.querySelector(".update-headlinetitle");
    var updateheadlinedescription = document.querySelector(
      ".update-headlinedescription"
    );
    var updateheadlinetitleerror = document.getElementById(
      "updateheadlinetitleerror"
    );
    var updateheadlinedescriptionerror = document.getElementById(
      "updateheadlinedescriptionerror"
    );
    var updateheadlinefileerror = document.getElementById(
      "updateheadlinefileerror"
    );
    var headlineimage = document.querySelector(".headline-image");
    var checkmarkheadlineupdated = document.querySelector(
      ".checkmark-headlineupdated"
    );
    var headlinecheckmarkerrorupdated = document.getElementById(
      "headlinecheckmarkerrorupdated"
    );

    if (updateheadlinetitle.value.trim() === "") {
      updateheadlinetitle.style.border = "2px solid red";
      updateheadlinetitleerror.innerHTML = "Title cannot be empty";
    } else if (updateheadlinetitle.value.length < 5) {
      updateheadlinetitle.style.border = "2px solid red";
      updateheadlinetitleerror.innerHTML =
        "Title should be atleast 5 characters";
    } else {
      updateheadlinetitle.style.border = "2px solid green";
      updateheadlinetitleerror.innerHTML = "";
    }
    if (updateheadlinedescription.value.trim() === "") {
      updateheadlinedescription.style.border = "2px solid red";
      updateheadlinedescriptionerror.innerHTML = "Description Cannot be Empty";
    } else if (updateheadlinedescription.value.length < 5) {
      updateheadlinedescription.style.border = "2px solid red";
      updateheadlinedescriptionerror.innerHTML =
        "Title should be atleast 5 characters";
    } else {
      updateheadlinedescription.style.border = "2px solid green";
      updateheadlinedescriptionerror.innerHTML = "";
    }
    if (!checkmarkheadlineupdated.checked) {
      checkmarkheadlineupdated.style.border = "2px solid red";
      headlinecheckmarkerrorupdated.innerHTML = "Please Check Mark";
    } else {
      checkmarkheadlineupdated.style.border = "2px solid green";
      headlinecheckmarkerrorupdated.innerHTML = "";
    }
    if (headlineimage.files.length > 0) {
      var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
      if (!allowedExtensions.exec(headlineimage.value)) {
        updateheadlinefileerror.innerHTML =
          "Invalid file type. Allowed types: .jpg, .jpeg, .png";
        headlineimage.value = "";
        headlineimage.style.border = "2px solid red";
        return false;
      } else {
        updateheadlinefileerror.innerHTML = "";
        headlineimage.style.border = "2px solid green";
      }
    }

    if (
      updateheadlinetitleerror.innerHTML ||
      updateheadlinedescriptionerror.innerHTML ||
      updateheadlinefileerror.innerHTML ||
      headlinecheckmarkerrorupdated.innerHTML
    ) {
      return;
    }
    updateformheadline.submit();
  });
}

// Initialize Summernote instances
$(document).ready(function () {
  $(".update-description").summernote();

  $("#post-description").summernote();

  $(".headline-description").summernote();

  $(".update-headlinedescription").summernote();
});