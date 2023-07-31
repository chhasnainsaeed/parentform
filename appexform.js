
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
    
    
    
    // Get the relevant radio options and select fields
    const radioOption1 = document.getElementById('radioOption1');
    const radioOption2 = document.getElementById('radioOption2');
    const radioOption3 = document.getElementById('radioOption3');
    const selectField1 = document.getElementById('selectField1');
    const selectField2 = document.getElementById('selectField2');
    const selectField3 = document.getElementById('selectField3');
    
    const selectContainer1 = document.getElementById('selectContainer1');
    const selectContainer2 = document.getElementById('selectContainer2');
    const selectContainer3 = document.getElementById('selectContainer3');
    const selectContainer4 = document.getElementById('selectContainer4');
    const selectContainer5 = document.getElementById('selectContainer5');
    const additionalDiv1 = document.getElementById('additionalDiv1');
    const additionalDiv2 = document.getElementById('additionalDiv2');
    const additionalDiv3 = document.getElementById('additionalDiv3');
    
    // Add event listeners to the radio options
    radioOption1.addEventListener('change', function() {
      if (radioOption1.checked) {
        selectContainer1.style.display = 'block';
        selectContainer2.style.display = 'none';
        selectContainer3.style.display = 'none';
        selectContainer4.style.display = 'none';
        selectContainer5.style.display = 'none';
         additionalDiv1.style.display = 'block';
        additionalDiv2.style.display = 'none';
        additionalDiv3.style.display = 'none';
        selectField2.value = '';
        selectField3.value = '';
      }
    });
    
    radioOption2.addEventListener('change', function() {
      if (radioOption2.checked) {
        selectContainer1.style.display = 'none';
        selectContainer2.style.display = 'block';
        selectContainer3.style.display = 'none';
        selectContainer4.style.display = 'none';
        selectContainer5.style.display = 'none';
        additionalDiv1.style.display = 'block';
       additionalDiv2.style.display = 'none';
        additionalDiv3.style.display = 'none';
        selectField1.value = '';
        selectField3.value = '';
      }
    });
    
    radioOption3.addEventListener('change', function() {
      if (radioOption3.checked) {
        selectContainer1.style.display = 'none';
        selectContainer2.style.display = 'none';
        selectContainer3.style.display = 'block';
        selectContainer4.style.display = 'none';
        selectContainer5.style.display = 'none';
        additionalDiv1.style.display = 'none';
       additionalDiv2.style.display = 'none';
        additionalDiv3.style.display = 'none';
        selectField1.value = '';
        selectField2.value = '';
      
      }
    });
    
    
    // Add event listeners to the select fields
    selectField3.addEventListener('change', function() {
      if (selectField3.value === 'VCE') {
        selectContainer4.style.display = 'block';
         additionalDiv2.style.display = 'block';
        
    
      } else {
        selectContainer4.style.display = 'none';
        additionalDiv2.style.display = 'none';
      }
    });
    
    selectField3.addEventListener('change', function() {
      if (selectField3.value === 'IB') {
          selectContainer5.style.display = 'block';
        additionalDiv3.style.display = 'block';
        
      } else {
        selectContainer5.style.display = 'none';
        additionalDiv3.style.display = 'none';
      }
    });
    
   
    
    const othersRadios = document.querySelectorAll('input[name="Hoping-to-get-out-of-tutoring"]');
    const othertextAreaContainer1 = document.getElementById('othertextAreaContainer1');
    
    for (const radio of othersRadios) {
      radio.addEventListener('change', function() {
        if (this.value === 'Others') {
          othertextAreaContainer1.classList.remove('hiddendiv');
        } else {
          othertextAreaContainer1.classList.add('hiddendiv');
        }
      });
    }
    
    const howhear = document.querySelectorAll('input[name="How-did-you-hear-about-us"]');
    const textAreaContainertwo = document.getElementById('textAreaContainertwo');
    const textAreaContainerreferral = document.getElementById('textAreaContainerreferral');
    
    
    for (const radio of howhear) {
      radio.addEventListener('change', function() {
        if (this.value === 'Referral') {
          textAreaContainerreferral.classList.remove('hiddendiv');
        } else {
          textAreaContainerreferral.classList.add('hiddendiv');
        }
      });
    }
    
    
    for (const radio of howhear) {
      radio.addEventListener('change', function() {
        if (this.value === 'Other') {
          textAreaContainertwo.classList.remove('hiddendiv');
        } else {
          textAreaContainertwo.classList.add('hiddendiv');
        }
      });
    }
    
    
 

    const Myself = document.getElementById('Myself');
    const Mychild = document.getElementById('Mychild');
    const parentnamediv = document.getElementById('parent-name-div');
    const parentmobilediv = document.getElementById('parent-mobile-div');
    const parentemaildiv = document.getElementById('parent-email-div');
    const studentnamediv = document.getElementById('student-name-div');
    const onboardingdiv = document.getElementById('onboarding-div');
    
    
    Myself.addEventListener('change', function() {
      if (Myself.checked) {
         parentnamediv.style.display = 'block';
         parentmobilediv.style.display = 'block';
         parentemaildiv.style.display = 'block';
         studentnamediv.style.display = 'none'; 
         onboardingdiv.style.display = 'block'; 
        }
        
     });
     
        Mychild.addEventListener('change', function() {
      if (Mychild.checked) {
      
         parentnamediv.style.display = 'none';
         parentmobilediv.style.display = 'none';
         parentemaildiv.style.display = 'none';
         studentnamediv.style.display = 'block'; 
         onboardingdiv.style.display = 'none'; 
        
        }
       
    });
    
      function validateStep2() {
      // Reset error message
      var errorMessage = document.getElementById('step2ErrorMessage');
      errorMessage.style.display = 'none';
    
      // Check if either radio option is selected
      var Myself = document.getElementById('Myself');
      var Mychild = document.getElementById('Mychild');
      if (!Myself.checked && !Mychild.checked) {
        errorMessage.style.display = 'block';
        return false; // Validation failed
      }
    
      return true; // Validation succeeded
    }
    
    function validateStep3() {
      
      // Reset error message
      var errorMessage = document.getElementById('step3ErrorMessage');
      errorMessage.style.display = 'none';
    
      // Check if at least one radio option is selected in Step 2
      if (!radioOption1.checked && !radioOption2.checked && !radioOption3.checked) {
        errorMessage.style.display = 'block';
        return false; // Validation failed
      }
    
      // Check if the corresponding select field is empty for the checked radio option
      if (
        (radioOption1.checked && selectField1.value === '') ||
        (radioOption2.checked && selectField2.value === '') ||
        (radioOption3.checked && selectField3.value === '') ||
        (selectField3.value === 'IB' && selectField5.value === '') ||
          (selectField3.value === 'VCE' && selectField4.value === '')  
     ) {
        errorMessage.style.display = 'block';
        return false; // Validation failed
      }
      
      return true; // Validation succeeded
    }
    
    function validateStep4() {
      // Reset error message
      var errorMessage = document.getElementById('step4ErrorMessage');
      errorMessage.style.display = 'none';
    
      // Get the displayed additional div
      var additionalDiv1 = document.getElementById('additionalDiv1');
      var additionalDiv2 = document.getElementById('additionalDiv2');
      var additionalDiv3 = document.getElementById('additionalDiv3');
    
      var checkboxes = [];
    
      // Check which additional div is displayed
      if (additionalDiv1.style.display === 'block') {
        checkboxes = additionalDiv1.querySelectorAll('input[type="checkbox"]');
      } else if (additionalDiv2.style.display === 'block') {
        checkboxes = additionalDiv2.querySelectorAll('input[type="checkbox"]');
      } else if (additionalDiv3.style.display === 'block') {
        checkboxes = additionalDiv3.querySelectorAll('input[type="checkbox"]');
      }
    
      // Check if at least one checkbox option is selected
      var isChecked = Array.from(checkboxes).some(function (checkbox) {
        return checkbox.checked;
      });
    
      if (!isChecked) {
        errorMessage.style.display = 'block';
        return false; // Validation failed
      }
    
      return true; // Validation succeeded
    }
    
    function validateStep5() {
      // Reset error message
      var errorMessage = document.getElementById('step5ErrorMessage');
      errorMessage.style.display = 'none';
    
      // Check if either radio option is selected
      var inPerson = document.getElementById('In-Person');
      var Online = document.getElementById('Online');
      var Flexible = document.getElementById('Flexible');
      if (!inPerson.checked && !Online.checked && !Flexible.checked) {
        errorMessage.style.display = 'block';
        return false; // Validation failed
      }
    
      return true; // Validation succeeded
    }
    
    
    function validateStep6() {
      // Reset error messages
      var emailError = document.getElementById('emailError');
      var emailFormatError = document.getElementById('emailFormatError');
      var phoneError = document.getElementById('phoneError');
      var optionselection = document.getElementById('optionselection');
      var textErrorname = document.getElementById('textErrorname');
      var textErrorhigh = document.getElementById('textErrorhigh');
      var textErrorsubrub = document.getElementById('textErrorsubrub');
      var texterrorpemail = document.getElementById('texterrorpemail');
      var texterrorpname = document.getElementById('texterrorpname');
      var texterrorpmobile = document.getElementById('texterrorpmobile');
      var texterrorstname = document.getElementById('texterrorstname');
      const parentnamediv = document.getElementById('parent-name-div');
        const parentmobilediv = document.getElementById('parent-mobile-div');
        const parentemaildiv = document.getElementById('parent-email-div');
        const studentnamediv = document.getElementById('student-name-div');
    
      emailError.style.display = 'none';
      emailFormatError.style.display = 'none';
      phoneError.style.display = 'none';
      textErrorname.style.display = 'none';
      optionselection.style.display = 'none';
      textErrorhigh.style.display = 'none';
      textErrorsubrub.style.display = 'none';
      texterrorpemail.style.display = 'none';
      texterrorpname.style.display = 'none';
      texterrorpmobile.style.display = 'none';
      texterrorstname.style.display = 'none';
    
    
     // Validate text input fields
     var textFieldname = document.getElementById('Name');
    var textValue = textFieldname.value.trim();
    if (textValue === '') {
      // Display error message for empty field
      textErrorname.style.display = 'block';
      return false; // Validation failed
    } 
    
    
      // Validate email field
      var emailField = document.getElementById('email');
      var emailValue = emailField.value.trim();
      if (emailValue === '') {
        emailError.style.display = 'block';
        return false; // Validation failed
      } else {
        // Validate email format using regular expression
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailValue)) {
          emailFormatError.style.display = 'block';
          return false; // Validation failed
        }
      }
    
      // Validate phone field
      var phoneField = document.getElementById('phone');
      var phoneValue = phoneField.value.trim();
      if (phoneValue === '') {
        phoneError.style.display = 'block';
        return false; // Validation failed
      } 
    
    
    
    var textFieldpname = document.getElementById('Parent-name-2');
    var isHiddenpnamedivVisible = parentnamediv.style.display === 'block'; // Check if the hidden div is visible
    
    if (isHiddenpnamedivVisible) {
      var textpnamedValue = textFieldpname.value.trim();
    
      if (textpnamedValue === '') {
        texterrorpname.style.display = 'block'; // Show the error message
        return false; // Validation failed
      } 
    }
    
    var textFieldpmobile = document.getElementById('Parent-mobile-2');
    var isHiddenpmobiledivVisible = parentmobilediv.style.display === 'block'; // Check if the hidden div is visible
    
    if (isHiddenpmobiledivVisible) {
      var textpmobileValue = textFieldpmobile.value.trim();
    
      if (textpmobileValue === '') {
        texterrorpmobile.style.display = 'block'; // Show the error message
        return false; // Validation failed
      } 
    }
    
    var emailFieldpemail = document.getElementById('Parent-eamil');
    var isHiddenpemaildivVisible = parentemaildiv.style.display === 'block'; // Check if the hidden div is visible
    
    if (isHiddenpemaildivVisible) {
      var textpemailValue = emailFieldpemail.value.trim();
    
      if (textpemailValue === '') {
        texterrorpemail.style.display = 'block'; // Show the error message
        return false; // Validation failed
      } 
    }
    
    
    var textFieldstudentname = document.getElementById('Student-name-2');
    var isHiddenstudentnamedivVisible = studentnamediv.style.display === 'block'; // Check if the hidden div is visible
    
    if (isHiddenstudentnamedivVisible) {
      var textFieldValue = textFieldstudentname.value.trim();
    
      if (textFieldValue === '') {
        texterrorstname.style.display = 'block'; // Show the error message
        return false; // Validation failed
      } 
    }
    var onboardYes = document.getElementById('onboarding-yes');
      var onboardno = document.getElementById('onboarding-no');
        var onboardingdiv = document.getElementById('onboarding-div');
    var isHiddenonboarddivVisible = onboardingdiv.style.display === 'block'; // Check if the hidden div is visible
    
    if (isHiddenonboarddivVisible) {
      
      
      if (!onboardYes.checked && !onboardno.checked) {
        optionselection.style.display = 'block';
        return false; // Validation failed
      }
    }
    // Validate text input fields
     var textFieldhighschool = document.getElementById('High-School');
    var textValue = textFieldhighschool.value.trim();
    if (textValue === '') {
      // Display error message for empty field
      textErrorhigh.style.display = 'block';
      return false; // Validation failed
    } 
    
    // Validate text input fields
     var textFieldsubrub = document.getElementById('Suburb');
    var textValue = textFieldsubrub.value.trim();
    if (textValue === '') {
      // Display error message for empty field
      textErrorsubrub.style.display = 'block';
      return false; // Validation failed
    } 
    
    
    // Rest of the validation logic...
     
     
    
      return true; // Validation succeeded
    }
      
    
      
    function validateStep7() {
      // Reset error messages
      var Errorhowdidyou = document.getElementById('Errorhowdidyou');
      var ErrorOthertextfield = document.getElementById('ErrorOthertextfield');
      const othertextAreaContainer1 = document.getElementById('othertextAreaContainer1');
    
      Errorhowdidyou.style.display = 'none';
      ErrorOthertextfield.style.display = 'none';
    
      var radioButtons = document.querySelectorAll('input[name="Hoping-to-get-out-of-tutoring"]');
      var isRadioChecked = false;
    
      for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
          isRadioChecked = true;
          break;
        }
      }
    
      if (!isRadioChecked) {
        Errorhowdidyou.style.display = 'block';
        return false; // Validation failed
      }
    
      var textareaother = document.getElementById('Hoping-to-get-out-of-tutoring-other');
      var isHiddentextareaotherVisible = !othertextAreaContainer1.classList.contains('hiddendiv'); // Check if the hidden class is present
    
      if (isHiddentextareaotherVisible) {
        var textareaValue = textareaother.value.trim();
    
        if (textareaValue === '') {
          ErrorOthertextfield.style.display = 'block'; // Show the error message
          return false; // Validation failed
        }
      }
    
      // Rest of the validation logic...
    
      return true; // Validation succeeded
    }
    
    
      function validateStep8() {
      // Reset error messages
          var Errorhowdidyou2 = document.getElementById('Errorhowdidyou2');
          var Errorefreltextfield = document.getElementById('Errorefreltextfield');
        var Errorother2textfield = document.getElementById('Errorother2textfield');
          const textAreaContainerreferral = document.getElementById('textAreaContainerreferral');
        const textAreaContainertwo = document.getElementById('textAreaContainertwo');
      
    
      Errorhowdidyou2.style.display = 'none';
      ErrorOthertextfield.style.display = 'none';
      Errorother2textfield.style.display = 'none';
     
    
    
    var textareaother2 = document.getElementById('How-did-you-hear-about-us-other');
    var isHiddentextareaother2Visible = !textAreaContainertwo.classList.contains('hiddendiv'); // Check if the hidden class is present
    if (isHiddentextareaother2Visible) {
      var textareaValue = textareaother2.value.trim();
    
      if (textareaValue === '') {
        Errorother2textfield.style.display = 'block'; // Show the error message
        return false; // Validation failed
      } 
    }
        
        var textareareffrel = document.getElementById('How-did-you-hear-about-us-Referral');
    var isHiddentextarearefferalVisible = !textAreaContainerreferral.classList.contains('hiddendiv'); // Check if the hidden div is visible
    
    if (isHiddentextarearefferalVisible) {
      var textareaValue = textareareffrel.value.trim();
    
      if (textareaValue === '') {
        Errorefreltextfield.style.display = 'block'; // Show the error message
        return false; // Validation failed
      } 
    }
    
      var radioButtons = document.querySelectorAll('input[name="How-did-you-hear-about-us"]');
      var isRadioChecked = false;
    
      for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
          isRadioChecked = true;
          break;
        }
      }
    
      if (!isRadioChecked) {
        Errorhowdidyou2.style.display = 'block';
        return false; // Validation failed
      }
    
      return true; // Validation succeeded
    }

    
    
     

<script scr="https://cdn.jsdelivr.net/gh/chhasnainsaeed/appex/appexform.js"></script>
