const CryptoJS = require('crypto-js');

// Include the CryptoJS library
// You should load this file in your HTML before any scripts that need these functions

// Function to hash a password with SHA-256
function hashPassword(password, salt = '') {
    return CryptoJS.SHA256(salt + password).toString();
}

// Function to generate hashed passwords
function generateHashedPasswords() {
    // Hardcoded passwords
    const rawPasswords = {
        visualizer: 'viewer',
        admin: 'bastion',
        user: 'user'
    };

    // salt for cryptographic shit
    const salt = 'haze'; 

    // Generate hash
    const hashedPasswords = {
        visualizer: hashPassword(rawPasswords.visualizer, salt),
        admin: hashPassword(rawPasswords.admin, salt),
        user: hashPassword(rawPasswords.user, salt)
    };

    console.log('Generated hashed passwords:', hashedPasswords);
    

    
    return hashedPasswords;
}

let hashedPasswords = generateHashedPasswords();
console.log("Visualizer hash:", hashedPasswords.visualizer);
console.log("Admin hash:", hashedPasswords.admin);
console.log("User hash:", hashedPasswords.user);