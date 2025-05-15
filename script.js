function togglePassword() {
  const passwordInput = document.getElementById('masterPassword');
  const toggleButton = document.getElementById('togglePassword');
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggleButton.textContent = 'Hide password';
  } else {
    passwordInput.type = 'password';
    toggleButton.textContent = 'Show password';
  }
}

const charset = {
  lower: 'abcdefghijklmnopqrstuvwxyz',
  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: '!@#$%^&*()-_=+[]{};:,.<>?'
};

function showInvalid(inputId, message) {
  const input = document.getElementById(inputId);
  const feedback = document.getElementById(inputId + 'Feedback');
  input.classList.add('is-invalid');
  feedback.textContent = message;
}

function clearInvalid() {
  document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
}

function validateForm(site, salt, master, length, selectedOptions) {
  clearInvalid();

  if (!site || site.length > 50 || !/^[a-zA-Z0-9]+(?: [a-zA-Z0-9]+)*$/.test(site)) {
    showInvalid('siteName', 'Site name must be 1–50 characters, alphanumeric with single spaces between characters (no symbols or double spaces).');
    return false;
  }

  if (salt && (salt.length > 50)) {
    showInvalid('salt', 'Salt cannot exceed 50 characters.');
    return false;
  }

  const passwordValid = master.length >= 10 && master.length <= 50 &&
    /[a-z]/.test(master) &&
    /[A-Z]/.test(master) &&
    /[0-9]/.test(master) &&
    /[^a-zA-Z0-9]/.test(master);

  if (!passwordValid) {
    showInvalid('masterPassword', 'Master password must be 10–50 characters and include uppercase, lowercase, number, and special character.');
    return false;
  }

  if (selectedOptions.length === 0) {
    document.getElementById('optionsFeedback').textContent = 'Select at least one character type.';
    return false;
  }

  if (length < selectedOptions.length * 2) {
    showInvalid('length', `Length must be at least ${selectedOptions.length * 2} to include 2 of each selected type.`);
    return false;
  }

  return true;
}

async function generatePassword() {

  const site = document.getElementById('siteName').value.trim().toLowerCase();
  const salt = document.getElementById('salt').value.trim();
  const master = document.getElementById('masterPassword').value.trim();
  const length = parseInt(document.getElementById('length').value);
  const useLower = document.getElementById('lowercase').checked;
  const useUpper = document.getElementById('uppercase').checked;
  const useNumber = document.getElementById('numbers').checked;
  const useSymbol = document.getElementById('symbols').checked;

  const selectedTypes = [];
  if (useLower) selectedTypes.push('lower');
  if (useUpper) selectedTypes.push('upper');
  if (useNumber) selectedTypes.push('number');
  if (useSymbol) selectedTypes.push('symbol');

  if (!validateForm(site, salt, master, length, selectedTypes)) return;

  const input = site + "|" + (salt || '') + "|" + master;
  const hashBuffer = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(input));
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  let pointer = 0;

  let passwordChars = [];

  // 2 characters of each selected type
  selectedTypes.forEach(type => {
    for (let i = 0; i < 2; i++) {
      passwordChars.push(charset[type][hashArray[pointer++ % hashArray.length] % charset[type].length]);
    }
  });

  let allChars = selectedTypes.map(t => charset[t]).join('');
  for (let i = passwordChars.length; i < length; i++) {
    passwordChars.push(allChars[hashArray[pointer++ % hashArray.length] % allChars.length]);
  }

  // Shuffle the array
  for (let i = passwordChars.length - 1; i > 0; i--) {
    const j = hashArray[pointer++ % hashArray.length] % (i + 1);
    [passwordChars[i], passwordChars[j]] = [passwordChars[j], passwordChars[i]];
  }

  const generated = passwordChars.join('');
  const output = document.querySelector('#password');
  output.value = generated;
}

document.getElementById('copy').addEventListener('click', () => {
  const password = document.querySelector('#password').value;
  if (!password) return;

  navigator.clipboard.writeText(password).then(() => {
    const copyBtn = document.getElementById('copy');
    copyBtn.classList.remove('btn-secondary');
    copyBtn.classList.add('btn-success');
    copyBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-check" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
      <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
      <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
    </svg>
    `
    setTimeout(() => {
      copyBtn.classList.remove('btn-success');
      copyBtn.classList.add('btn-secondary');
      copyBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
          class="bi bi-clipboard" viewBox="0 0 16 16">
          <path
              d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
          <path
              d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
      </svg>
      `
    }, 1500);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('generate').addEventListener('click', generatePassword);
})
