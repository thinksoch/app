
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

function registerUser() {
    var formData = {
        firstName: document.getElementById('name').value,
        lastName: document.getElementById('surname').value,
        dob: document.getElementById('dateOfBirth').value,
        countryCode: document.getElementById('countryCode').value,
        mobileNumber: document.getElementById('mobileNo').value,
        email: document.getElementById('email').value,
        gender: document.getElementById('gender').value,
        age: document.getElementById('age').value,
        qualification: document.getElementById('qualification').value,
        country: document.getElementById('country').value,
        state: document.getElementById('state').value,
        district: document.getElementById('district').value,
        taluka: document.getElementById('taluka').value,
        pincode: document.getElementById('pincode').value,
        purpose: document.getElementById('purpose').value,
        password: document.getElementById('password').value,
        confirmPassword: document.getElementById('confirmPassword').value,
    };

    fetch('http://localhost:8080/api/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        // Handle success, if needed
        alert('Form submitted successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle errors here
        alert('Error while submitting form');
    });
}

/*
    function registerUser() {
        var formData = {
            name: document.getElementById('name').value,
            surname: document.getElementById('surname').value,
            dateOfBirth: document.getElementById('dateOfBirth').value,
            countryCode: document.getElementById('countryCode').value,
            mobileNo: document.getElementById('mobileNo').value,
            email: document.getElementById('email').value,
            gender: document.getElementById('gender').value,
            age: document.getElementById('age').value,
            qualification: document.getElementById('qualification').value,
            country: document.getElementById('country').value,
            state: document.getElementById('state').value,
            district: document.getElementById('district').value,
            taluka: document.getElementById('taluka').value,
            pincode: document.getElementById('pincode').value,
            purpose: document.getElementById('purpose').value,
            password: document.getElementById('password').value,
            confirmPassword: document.getElementById('confirmPassword').value,
        };

        fetch('https://localhost:8088/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Handle success, if needed
            alert('Form submitted successfully!');

        })
        .catch(error => {
            console.error('Error:', error);
            // Handle errors here
            alert('Error while submitting form');

        });
    }
*/
    // Login Page
    function login() {
        var phoneNumber = document.getElementById("phoneNumber").value;
        var password = document.getElementById("password").value;

        var formData = {
            phoneNumber: phoneNumber,
            password: password
        };

        // Make an AJAX request to your Spring Boot backend
      fetch('http://localhost:8088/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle the successful response from the backend
            console.log(data);
            alert('Form submitted successfully!');

        })
        .catch(error => {
            // Handle errors
            console.error('Error:', error.message);
            alert('Error while submitting form');

        });
    }



    /*
    .then(response => {
            console.log(response.data);
            // Handle success, e.g., show a success message
        })
        .catch(error => {
            console.error(error.response.data);
            // Handle error, e.g., show an error message
        });  */











/*
// script.js
document.getElementById("enquiryForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  // Convert FormData to JSON object
  const formDataJSON = {};
  formData.forEach((value, key) => {
      formDataJSON[key] = value;
  });

  // Send the data to the backend
  fetch('http://localhost:8081/api/enquiry/createEnquiry', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDataJSON),
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
  })
  .then(data => {
      console.log('Success:', data);
      // Handle success, e.g., show a success message to the user
      alert('Form submitted successfully!');
      // You can also redirect the user or perform other actions as needed
  })
  .catch((error) => {
      console.error('Error:', error);
      // Handle error, e.g., show an error message to the user
      alert('Error submitting the form. Please try again.');
  });
});
*/