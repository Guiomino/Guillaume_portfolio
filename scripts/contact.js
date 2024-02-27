const contactSection = document.querySelector(".contactSection");

// TITLE
const getIconContact = `icons/Contact.svg`;
const contactTitle = document.createElement("div");
contactTitle.className = "title";
const contactTitleContent = `
<img>
<h2></h2>
`;
contactTitle.innerHTML = contactTitleContent;
contactTitle.querySelector("img").src = `${getIconContact}`;
contactTitle.querySelector("h2").textContent = "Let's meet !";

contactSection.appendChild(contactTitle);

// TEASER
const teaser = document.createElement("h3");
teaser.className = "teaser";

function wrapWordWithSpan(word) {
  return `<span>${word}</span>`;
}
teaser.innerHTML = `If you have an ${wrapWordWithSpan("idea")} for a project, a ${wrapWordWithSpan("sketch")}, need to create a ${wrapWordWithSpan("logo")} or a ${wrapWordWithSpan("graphic charter")}, create a ${wrapWordWithSpan("showcase site")} that can serve as your business card, an ${wrapWordWithSpan("illustration")}, a ${wrapWordWithSpan("comic strip")}, then talk to me so that we can create your own visual identity.`;
contactSection.appendChild(teaser);



// CREATE FORM
    const form = document.createElement('form');
    form.id = 'contactForm';


    // HANDLE DISPLAY LABEL
    function handleLabelDisplay(inputId, labelId) {
      const inputElement = document.getElementById(inputId);
      const labelElement = document.getElementById(labelId);
    
      inputElement.addEventListener('focus', () => {
        labelElement.classList.add('filledInput');
      });
    
      inputElement.addEventListener('blur', () => {
        if (!inputElement.value) {
          labelElement.classList.remove('filledInput');
        }
      });
    
      // Déclencher l'événement blur pour masquer le label au chargement de la page
      inputElement.dispatchEvent(new Event('blur'));
    }
    
  
    // PERSONAL INFORMATIONS
    const personalInfoContainer = document.createElement('div');
    personalInfoContainer.className = "personalInfoContainer";
    
    const personalInfoTitle = document.createElement('h3');
    personalInfoTitle.textContent = "Your informations";
    personalInfoContainer.appendChild(personalInfoTitle);
    
    const personalInfoDiv = document.createElement('div');
    personalInfoDiv.className = "personalInfoDiv";
    personalInfoDiv.innerHTML =   '<label class="labelDisplay" for="name" id="nameLabel">Your name*</label>' +
                                  '<input type="text" id="name" name="name" autocomplete="name" required><br>' +
                                  '<label class="labelDisplay" for="email" id="emailLabel">Your email*</label>' +
                                  '<input type="email" id="email" name="email" autocomplete="email" required><br>' +
                                  '<label class="labelDisplay" for="phone" id="phoneLabel">Your phone number</label>' +
                                  '<input type="tel" id="phone" name="phone" autocomplete="tel"><br>';
    
    personalInfoContainer.appendChild(personalInfoDiv);
    form.appendChild(personalInfoContainer);
    

    // REASONS FOR CONTACT
    const contactReasonsContainer = document.createElement('div');
    contactReasonsContainer.className = "contactReasonsContainer";
    
    const contactReasonsTitle = document.createElement('h3');
    contactReasonsTitle.textContent = "Why are you contacting me ?";
    contactReasonsContainer.appendChild(contactReasonsTitle);

    const contactReasonsDiv = document.createElement('div');
    contactReasonsDiv.className = "contactReasonsDiv";
    contactReasonsDiv.innerHTML = '<label><input type="checkbox" name="reason" value="Web Design">Web Design</label>' +
                                  '<label><input type="checkbox" name="reason" value="Graphic Design">Graphic Design</label>' +
                                  '<label><input type="checkbox" name="reason" value="Illustration">Illustration</label>' +
                                  '<label><input type="checkbox" name="reason" value="Collaboration">Collaboration</label>' +
                                  '<label><input type="checkbox" name="reason" value="Creativity and consulting">Creativity and consulting</label>' +
                                  '<label><input type="checkbox" name="reason" value="Others">Others</label><br>';
    contactReasonsContainer.appendChild(contactReasonsDiv);
    form.appendChild(contactReasonsContainer);


    // TEXT AREA MESSAGE
    const messageDiv = document.createElement('div');
    messageDiv.innerHTML = '<label id="messageLabel">Your message*</label><br>' +
                           '<textarea id="message" name="message" rows="4" class="labelDisplay" required></textarea><br>';
    form.appendChild(messageDiv);

    // reCAPTCHA
    const recaptchaDiv = document.createElement('div');
    recaptchaDiv.innerHTML = '<label>Please, tick the box to submit*</label><br>' +
                             '<label><input type="checkbox" name="recaptcha" required>I’m not a robot</label><br>';
    form.appendChild(recaptchaDiv);

    // SUBMIT
    const submitButton = document.createElement('button');
    submitButton.type = 'button';
    submitButton.textContent = 'Submit';
    submitButton.addEventListener('click', validateForm);
    form.appendChild(submitButton);

    // SOCIAL NETWORK
    const socialMediaDiv = document.createElement('div');
    socialMediaDiv.innerHTML = 'You can also find me on social networks.<br>' +
                               'Let\'s discuss your projects, ideas, and desires.<br>' +
                               '<a href="https://www.linkedin.com/in/guillaume-estrade/" target="_blank">' +
                               '<img src="link_to_linkedin_icon" alt="LinkedIn"></a>' +
                               '<a href="https://github.com/GuillaumeSimplon" target="_blank">' +
                               '<img src="link_to_github_icon" alt="GitHub"></a>' +
                               '<br><br><div id="linkedinQRCode"></div>' +
                               '<div id="githubQRCode"></div>';

    // ADD FORM
    document.getElementById('contactSectionId').appendChild(form);
    document.getElementById('contactSectionId').appendChild(socialMediaDiv);
    handleLabelDisplay('name', 'nameLabel');
    handleLabelDisplay('email', 'emailLabel');
    handleLabelDisplay('phone', 'phoneLabel');

    // QR CODES
    new QRCode(document.getElementById("linkedinQRCode"), "https://www.linkedin.com/in/guillaume-estrade/");
    new QRCode(document.getElementById("githubQRCode"), "https://github.com/GuillaumeSimplon");

    form.appendChild(socialMediaDiv);

    // Fonction de validation du formulaire
    let submissionAttempts = 0;
    const maxSubmissionAttempts = 2;

    function validateForm() {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const message = document.getElementById('message').value;
      const recaptchaChecked = document.querySelector('input[name="recaptcha"]').checked;
      const contactReasons = document.querySelectorAll('input[name="reason"]:checked');



      // OPEN MODAL IF ERROR
      function showModal(title, message) {
        const modalContainer = document.querySelector('.modal_container');
        const modal = document.querySelector('.modal');
        const modalTitle = document.getElementById('modalTitle');
        const modalMessage = document.getElementById('modalMessage');
      
        modalTitle.textContent = title;
        modalMessage.textContent = message;
      
        modalContainer.classList.add('active');
      }

      // CLOSE MODAL
      function closeModal() {
        const modalContainer = document.querySelector('.modal_container');
        modalContainer.classList.remove('active');
      }
      const closeModalBtn = document.querySelector('.close_modal');
      closeModalBtn.addEventListener('click', closeModal);
      const overlay = document.querySelector('.overlay');
      overlay.addEventListener('click', closeModal);

      
      // FIELD VALIDATION
        if (name.trim() === '' || !/^[a-zA-Z\s'-]+$/.test(name)) {
          showModal('Invalid Name', 'Please enter a valid name');
          return;
        }
      
        if (email.trim() === '' || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/.test(email)) {
          showModal('Invalid Email', 'Please enter a valid email address');
          return;
        }
      
        if (phone !== '' && !/^[0-9]{10}$|^[0-9]{3}[-.][0-9]{3}[-.][0-9]{4}$/.test(phone)) {
          showModal('Invalid Phone', 'Please enter a valid phone number like 01 23 45 56 78 with numbers, or leave the field empty');
          return;
        }
      
        if (contactReasons.length === 0) {
          showModal('Invalid Input', 'Please select at least one reason for contact');
          return;
        }
      
        if (message.trim() === '' || !/^[a-zA-Z0-9.,;:!? ]+$/.test(message) || message.length > 500) {
          showModal('Invalid Input', 'Please enter a message without special characters and with a maximum of 500 characters');
          return;
        }
      
        if (!recaptchaChecked) {
          showModal('Invalid Input', 'Please tick the box to submit');
          return;
        }

      submissionAttempts++;
      if (submissionAttempts > maxSubmissionAttempts) {
        alert('You have exceeded the maximum number of submission attempts. Please try again later.');
        return;
      }

      submitButton.disabled = true;
            setTimeout(() => {
              submitButton.disabled = false;
            }, 5000);

            showModal("✅"+' Form submitted successfully !', 'Thanks ' + name);

            submissionAttempts = 0;
    }
  
    