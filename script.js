//your code here
// script.js
(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        var form = document.querySelector('.needs-validation');

        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }// script.js
(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        
        var form = document.getElementById('job-application-form');

        
        form.addEventListener('submit', function (event) {
            
            if (!form.checkValidity()) {
                event.preventDefault(); 
                event.stopPropagation(); 
            }

           
            form.classList.add('was-validated');
        }, false);
    });
})();
            form.classList.add('was-validated');
        }, false);
    });
})();
