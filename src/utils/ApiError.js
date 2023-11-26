// Define a custom error class named ApiError that extends the built-in Error class
class ApiError extends Error {
  // Constructor function for creating instances of the ApiError class
  constructor(
    // Accepts parameters: statusCode - HTTP status code, message - error message (default: "Something went wrong"),
    // errors - an array to store additional error details, stack - error stack trace (default: "")
    statusCode,
    message = "Something went wrong",
    errors = [],
    stack = ""
  ) {
    // Call the constructor of the parent class (Error) with the provided message
    super(message);

    // Assign values to instance properties
    this.statusCode = statusCode; // HTTP status code associated with the error
    this.errors = errors; // Array to store additional error details
    this.data = null; // Placeholder for additional data (not used in the provided code)
    this.message = message; // Error message
    this.success = false; // Indicates that the associated operation was not successful

    // Check if a stack trace is provided; if not, capture the stack trace for this instance
    if (stack) {
      this.stack = stack;
    } else {
      // Capture the stack trace for this instance if not provided explicitly
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

// Export the ApiError class for use in other modules
export { ApiError };