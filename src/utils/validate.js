export const checkValidData = (email, password, fullName = "") => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return "Please enter a valid email address.";
    }
    if (!password || password.length < 6) {
      return "Password must be at least 6 characters long.";
    }
    if (fullName && fullName.trim() === "") {
      return "Full name cannot be empty.";
    }
    return null; // Validation passed
  };
