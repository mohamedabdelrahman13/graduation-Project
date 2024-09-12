// Function to handle file input change
function handleFileSelect(event) {
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function(event) {
        var imgElement = document.getElementById('profile-image');
        imgElement.src = event.target.result;
    };

    reader.readAsDataURL(file);
}

// Add event listener for file input change
document.getElementById('file-input').addEventListener('change', handleFileSelect, false);

// Function to edit profile information
function editProfile() {
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    

    if (profileName != null) {
        document.getElementById('profile-name').textContent = profileName;
    }
    if (email != "") {
        // يمكنك إضافة المزيد من العمليات هنا لتعديل البريد الإلكتروني في حالة الحاجة
    }
    if (phone != "") {
        // يمكنك إضافة المزيد من العمليات هنا لتعديل رقم الهاتف في حالة الحاجة
    }
}

// Function to trigger file input when camera icon is clicked
document.querySelector('.camera-icon').addEventListener('click', function() {
    document.getElementById('file-input').click();
});
