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


    // // TEXT + CAPTCHA + SUBMIT CONTAINER
    const submitContainer = document.createElement("div")
    submitContainer.className = "submitContainer"

    // TEXT AREA MESSAGE
    const messageContainer = document.createElement('div');
    messageContainer.className = "messageContainer";
    
    const messageTitle = document.createElement('h3');
    messageTitle.textContent = "How can I help you?";
    messageContainer.appendChild(messageTitle);

    const messageDiv = document.createElement('div');
    messageDiv.className = "messageDiv";
    messageDiv.innerHTML = '<label class="labelDisplay" for="message" id="messageLabel">Your message*</label><br>' +
                           '<textarea id="message" name="message" rows="4" required></textarea><br>';
    messageContainer.appendChild(messageDiv);
    submitContainer.appendChild(messageContainer);

    // reCAPTCHA
    const recaptchaContainer = document.createElement('div');
    recaptchaContainer.className = "recaptchaContainer";
    
    const recaptchaTitle = document.createElement('h3');
    recaptchaTitle.textContent = "Please, tick the box to submit*";
    recaptchaContainer.appendChild(recaptchaTitle);
    
    const recaptchaDiv = document.createElement('div');
    recaptchaDiv.className= "recaptchaDiv";
    recaptchaDiv.innerHTML = '<label><input type="checkbox" name="recaptcha" required>I’m not a robot' +
    '<img src="icons/reCAPTCHA-logo.png" alt="reCAPTCHA Logo" class="recaptchaLogo"></label><br>';
    recaptchaContainer.appendChild(recaptchaDiv);
    submitContainer.appendChild(recaptchaContainer);

    // SUBMIT
    const submitButton = document.createElement('button');
    submitButton.className = "submitButton"
    submitButton.type = 'button';
    const envelopeIcon = document.createElement("img")
    envelopeIcon.src = "icons/Contact_Mail.svg"; envelopeIcon.alt = "mail icon"
    submitButton.innerHTML = "Submit";
    submitButton.insertBefore(envelopeIcon, submitButton.firstChild);
    submitButton.addEventListener('click', validateForm);
    submitContainer.appendChild(submitButton);
    form.appendChild(submitContainer);

    // ADD FORM
    document.getElementById('contactSectionId').appendChild(form);
    handleLabelDisplay('name', 'nameLabel');
    handleLabelDisplay('email', 'emailLabel');
    handleLabelDisplay('phone', 'phoneLabel');
    handleLabelDisplay('message', 'messageLabel');



    // SOCIAL NETWORK
    const socialContainer = document.createElement("div")
    socialContainer.className = "socialContainer"

    const socialTitleContainer = document.createElement("div")
    socialTitleContainer.className = "socialTitleContainer"
    const socialMediaTitle = document.createElement("h3")
    socialMediaTitle.textContent = "You can also find me on social networks"
    const socialMediaSubtitle = document.createElement("h4")
    socialMediaSubtitle.textContent = "Let's discuss your projects, ideas, and desires"
    socialTitleContainer.appendChild(socialMediaTitle)
    socialTitleContainer.appendChild(socialMediaSubtitle)
    socialContainer.appendChild(socialTitleContainer)

    const socialMediaDiv = document.createElement('div');
    socialMediaDiv.className = "socialMediaDiv"

    socialMediaDiv.innerHTML = '<div><a href="https://www.linkedin.com/in/guillaume-estrade/" target="_blank">' +
                               '<img class="socialIcon" src="icons/Social_Linkedin.svg" alt="LinkedIn"></a>' +
                               '<div class="QRCode" id="linkedinQRCode"></div></div>' +

                               '<div><a href="https://github.com/GuillaumeSimplon" target="_blank">' +
                               '<img class="socialIcon" src="icons/Skills_Github.svg"></a>' +
                               '<div class="QRCode" id="githubQRCode"></div></div>' +

                               '<div><a href="https://www.instagram.com/guiomino/" target="_blank">' +
                               '<img class="socialIcon" src="icons/Social_Instagram.svg" alt="Instagram"></a>' +
                               '<div class="QRCode" id="instagramQRCode"></div></div>' +

                               '<div><a href="https://www.guiomino.com/" target="_blank">' +
                               '<img class="socialIcon" src="icons/Skills_Wordpress.svg" alt="Novus"></a>' +
                               '<div class="QRCode" id="novusQRCode"></div></div>';
    
    socialContainer.appendChild(socialMediaDiv)
    contactSection.appendChild(socialContainer)

    // QR CODES
    new QRCode(document.getElementById("linkedinQRCode"), "https://www.linkedin.com/in/guillaume-estrade/");
    new QRCode(document.getElementById("githubQRCode"), "https://github.com/GuillaumeSimplon");
    new QRCode(document.getElementById("instagramQRCode"), "https://www.instagram.com/guiomino/");
    new QRCode(document.getElementById("novusQRCode"), "https://www.guiomino.com/");


    // VALIDATE FORM FUNCTION
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
        if (name.trim() === '' || !/^[a-zA-Z\s'-]{1,45}$/.test(name)) {
        showModal('Invalid Name', 'Please enter a valid name (up to 45 characters, only letters, spaces, apostrophes, and hyphens are allowed)');
        return;
        }

        if (email.trim() === '' || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/.test(email)) {
          showModal('Invalid Email', 'Please enter a valid email address. The email should follow the format example@example.com');
          return;
        }

        if (phone !== '' && !/^[0-9]{10}$|^[0-9]{3}[-.][0-9]{3}[-.][0-9]{4}$/.test(phone)) {
          showModal('Invalid Phone', 'Please enter a valid phone number with 10 digits (e.g., 0123456789) or in the format xx-xx-xx-xx-xx.');
          return;
        }

        if (contactReasons.length === 0) {
          showModal('Choose a Reason', 'Please select at least one reason for contact');
          return;
        }

        if (message.trim() === '' || !/^[a-zA-Z0-9.,;:!? ]+$/.test(message) || message.length > 500) {
          showModal('Invalid Input', 'Please provide a message containing only letters, numbers, and basic punctuation, with a maximum length of 500 characters.');
          return;
        }

        if (!recaptchaChecked) {
          showModal('Submission Error', 'Please complete the reCAPTCHA ✔️ verification to proceed.');
          return;
        }

      submissionAttempts++;
      if (submissionAttempts > maxSubmissionAttempts) {
        alert('You have exceeded the maximum number of submission attempts. Please try again later.');
        return;
      }


    submitButton.disabled = true;
    submitButton.classList.add('processing');
    document.body.classList.add('processingCursor');
    setTimeout(() => {
        submitButton.disabled = false;
        submitButton.classList.remove('processing');
        document.body.classList.remove('processingCursor');
        form.reset();
        
        showModal("✉️" + ' Email initiation successful!', 'Thanks ' + name + '. Please check your outbox in your email client to confirm the actual sending of the email.');
    }, 1500);

    submissionAttempts = 0;

    setTimeout(() => {
        const mailtoLink = `mailto:estrade.guillaume.simplon@gmail.com?subject=From ${name}, to the attention of Guillaume via the portfolio contact form&body=Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0AMessage: ${message}%0D%0AReasons: ${Array.from(contactReasons).map(reason => reason.value).join(', ')}`;

        window.location.href = mailtoLink;
    }, 3000);
}