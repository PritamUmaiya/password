# Password Generator

A simple, secure password generator web app that creates strong, site-specific passwords from your master password and site name.

## Features

- Generates passwords based on site name and master password
- Enforces strong passwords with options to include uppercase, lowercase, numbers, and symbols
- Ensures at least 2 characters from each selected character type
- Password length customizable (minimum 10 characters)
- Dark mode toggle
- Copy to clipboard functionality
- Responsive design for desktop and mobile

## How It Works

Enter your site name (e.g., `google` or `facebook2`) and your master password. The app uses SHA-256 hashing to generate a consistent, strong password that you can reproduce anytime without storing passwords anywhere.

## Usage

1. Enter the site name (lowercase, no `.com` or `https`)
2. Enter your master password (at least 10 chars with uppercase, lowercase, number, and symbol)
3. Adjust password length or character type options if needed
4. Click **Generate Password**
5. Copy your generated password to use on the site

## Security Note

- This tool uses client-side hashing and does not store or transmit your passwords.
- Keep your master password secret; knowing it is required to generate your passwords.
- The site is public but secure, as passwords cannot be reversed to reveal the master password.

## Hosting

This project can be hosted on GitHub Pages or any static site hosting.

## License

MIT License © Pritam Umaiya
