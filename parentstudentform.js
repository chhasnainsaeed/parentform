var currentStep = 0;
        var steps = document.getElementsByClassName('step');
        var progressBar = document.querySelector('.progres-bar');
        
        function showStep(stepIndex) {
          for (var i = 0; i < steps.length; i++) {
            if (i === stepIndex) {
              steps[i].classList.add('active');
            } else {
              steps[i].classList.remove('active');
            }
          }
          
          var progress = ((stepIndex + 1) / steps.length) * 100;
          progressBar.style.width = progress + '%';
        }
        
      function nextStep() {
    if (currentStep === 1) {
        var isValid = validateStep2();
        if (!isValid) {
          return; // Don't proceed to the next step if validation fails
        }
      } else if (currentStep === 2) {
        var isValid = validateStep3();
        if (!isValid) {
          return; // Don't proceed to the next step if validation fails
        }
      }
      
      else if (currentStep === 3) {
        var isValid = validateStep4();
        if (!isValid) {
          return; // Don't proceed to the next step if validation fails
        }
      }
      
        else if (currentStep === 4) {
        var isValid = validateStep5();
        if (!isValid) {
          return; // Don't proceed to the next step if validation fails
        }
      }
    
    else if (currentStep === 5) {
        var isValid = validateStep6();
        if (!isValid) {
          return; // Don't proceed to the next step if validation fails
        }
      }
      
      else if (currentStep === 6) {
        var isValid = validateStep7();
        if (!isValid) {
          return; // Don't proceed to the next step if validation fails
        }
      }
      
      else if (currentStep === 7) {
        var isValid = validateStep8();
        if (!isValid) {
          return; // Don't proceed to the next step if validation fails
        }
      }
      
    
      if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
      }
    }
        
        function previousStep() {
          if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
          }
        }
        
    showStep(currentStep);
    