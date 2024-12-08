// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        const password1 = document.getElementById('password1').value;
        const password2 = document.getElementById('password2').value;

        
        
        // Перевірка збігу паролів
        if (password1 !== password2) {
            console.log( password1, password2);
            event.preventDefault();
            event.stopPropagation();
            document.getElementById('password2').classList.remove('is-valid');
            document.getElementById('password2').classList.add('is-invalid');
        } else {
            document.getElementById('password2').classList.remove('is-invalid');
            document.getElementById('password2').classList.add('is-valid');
        }


        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()