# 🔐 Dedicated Password Generator

A secure, client-side password generator that creates consistent, strong passwords using SHA-256 hashing. No data is stored on servers - everything happens in your browser.

## ✨ Features

- **🔒 Secure**: Uses SHA-256 hashing algorithm for password generation
- **🎯 Consistent**: Same inputs always generate the same password
- **📱 Responsive**: Works on desktop and mobile devices
- **🎨 Modern UI**: Clean Bootstrap-based theme interface
- **📋 Clipboard**: One-click copy to clipboard with visual feedback
- **⚙️ Customizable**: Flexible password options and settings
- **💾 Persistent**: Settings saved locally for convenience
- **🔐 Privacy-First**: No data sent to servers, works completely offline

## 🚀 Quick Start

1. Clone the repository:
```bash
git clone https://github.com/PritamUmaiya/password.git
cd password
```

2. Open `index.html` in your web browser

3. Start generating secure passwords!

## 📋 How It Works

The password generator combines three inputs using SHA-256 hashing:

1. **Website Name** - The service you're creating a password for
2. **Master Password** - Your personal master password
3. **Phrase** - An additional phrase for extra security

**Formula**: `SHA-256(website + masterpassword + phrase) → Secure Password`

### Input Requirements

| Field | Requirements |
|-------|-------------|
| **Website Name** | Letters, numbers, and spaces only (case insensitive) |
| **Master Password** | 8-50 characters, must include uppercase, lowercase, numbers, and symbols. No spaces allowed |
| **Phrase** | Letters, numbers, and spaces only (case insensitive) |

## ⚙️ Password Settings

Customize your generated passwords with these options:

- **✅ Uppercase Letters** (A-Z) - *Default: Enabled*
- **✅ Lowercase Letters** (a-z) - *Default: Enabled*  
- **✅ Numbers** (0-9) - *Default: Enabled*
- **❌ Symbols** (!@#$%^&*...) - *Default: Disabled*
- **📏 Length** (4-50 characters) - *Default: 8*

Settings are automatically saved and restored when you revisit the site.

## 🔧 Technical Details

### Security Features
- **Client-side only**: No data transmitted to servers
- **SHA-256 hashing**: Cryptographically secure hash function
- **Deterministic generation**: Same inputs = same password every time
- **Character set enforcement**: Guarantees at least one character from each selected type
- **No storage of sensitive data**: Only settings preferences are saved locally

## 📱 Usage Examples

### Example 1: Basic Usage
- **Website**: `Gmail`
- **Master Password**: `MySecure123!`
- **Phrase**: `work email`
- **Settings**: Default (8 chars, uppercase, lowercase, numbers)
- **Result**: `k7Nm2pQx` (example)

### Example 2: High Security
- **Website**: `Banking Site`
- **Master Password**: `MySecure123!`
- **Phrase**: `financial secure`
- **Settings**: 16 chars, all character types enabled
- **Result**: `k7N@m2pQ#x9Zt$Vw` (example)

## 🛡️ Security Best Practices

1. **Use a strong master password** - This is your most important credential
2. **Keep your master password secret** - Never share it with anyone
3. **Use unique phrases** - Different phrases for different types of accounts
4. **Remember your inputs** - You'll need the exact same inputs to regenerate passwords
5. **Backup your master password** - Store it securely offline


## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Important Notes

- **This tool generates the same password for the same inputs** - This is by design for consistency
- **Remember your inputs** - You need the exact same website name, master password, and phrase to regenerate a password
- **Case sensitivity** - Website names and phrases are converted to lowercase, but master passwords are case-sensitive
- **No password recovery** - If you forget your inputs, you cannot recover the generated password

---

**⭐ If you find this tool useful, please consider giving it a star on GitHub!**
