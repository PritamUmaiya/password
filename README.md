# Password Generator

A simple, secure password generator web app that creates strong, site-specific passwords from your master password and site name.

## Features

- Generates passwords based on site name and master password

- Optional salt input for extra personalization

- Enforces strong master passwords (uppercase, lowercase, number, symbol)

- Ensures at least 2 characters from each selected character type

- Password length customizable (minimum based on character types)

- Allows alphanumeric site names with single spaces

- Copy to clipboard functionality

- Responsive design for desktop and mobile

## How It Works

Enter your site name (e.g., Google, Facebook 2) and your master password. Optionally, include a custom salt. The app uses SHA-256 hashing to generate a consistent, strong password you can reproduce anytime without storing anything.

## Usage

- Enter the site name (alphanumeric, max 50 chars, single spaces allowed)

- Optionally, enter a salt (max 50 chars, case-sensitive)

- Enter your master password (10–50 chars, must include uppercase, lowercase, number, and symbol)

- Adjust password length or character type options if needed

- Click Generate Password

- Copy your generated password to use on the site

## Security Note

- All hashing is done client-side; no data is sent or saved.

- Your master password is never stored—only used to derive site-specific passwords.

- Consistent output ensures reproducibility across sessions.

## Hosting

This project can be hosted on GitHub Pages or any static site hosting.

## License

MIT License © Pritam Umaiya

