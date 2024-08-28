export const usernameValidation = (username: string): string | null => {
    if (!username) {
      return "Username is required.";
    }
    if (username.length < 6) {
      return "Username must be at least 6 characters long.";
    }
    const regex = /^[a-zA-Z ]+$/;
    if (!regex.test(username)) {
      return "Username cannot contain symbols.";
    }
    return null; // No error
};

export const emailValidation = (email: string): string | null => {
    if (!email) {
      return "Email is required.";
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      return "Invalid email address.";
    }
    return null; // No error
};

export const passwordValidation = (password: string): string | null => {
    if (!password) {
      return "Password is required.";
    }
    if (password.length < 8) {
      return "Password must be at least 8 characters long.";
    }
    const regex = /^(?=.*[0-9]).{8,}$/;
    if (!regex.test(password)) {
      return "Password must contain at least one number.";
    }
    return null; // No error
};

export const confirmPasswordValidation = (password: string, confirmPassword: string): string | null => {
    if (!confirmPassword) {
      return "Please confirm your password.";
    }
    if (password !== confirmPassword) {
      return "Passwords do not match.";
    }
    return null; // No error
};
