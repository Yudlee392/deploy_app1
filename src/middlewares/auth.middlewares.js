import { checkSchema } from 'express-validator'

export const registerValidator = checkSchema({
  userId: {
    in: ['body'],
    isInt: true,
    optional: true // Assuming UserID is optional for login
  },
  userName: {
    in: ['body'],
    isString: true,
    isLength: {
      options: { min: 3, max: 255 }, // Adjust min and max length as needed
      errorMessage: 'Username must be between 3 and 255 characters long'
    }
  },
  password: {
    in: ['body'],
    isString: true,
    isLength: {
      options: { min: 6 },
      errorMessage: 'Password must be at least 6 characters long'
    },
    isStrongPassword: {
      errorMessage:
        'Password must be at least 6 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character'
    }
  },
  confirmPassword: {
    in: ['body'],
    isString: true,
    custom: {
      options: (value, { req }) => value === req.body.password,
      errorMessage: 'Passwords do not match'
    }
  },
  role: {
    in: ['body'],
    isIn: {
      options: [['Student', 'MarketingCoordinator', 'UniversityManager', 'Administrator', 'Guest']],
      errorMessage: 'Invalid role'
    }
  }
})

export const loginValidator = checkSchema({
  userName: {
    in: ['body'],
    isString: true,
    isLength: {
      options: { min: 3, max: 255 }, // Adjust min and max length as needed
      errorMessage: 'Username must be between 3 and 255 characters long'
    }
  },
  password: {
    in: ['body'],
    isStrongPassword: {
      errorMessage:
        'Password must be at least 6 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character'
    },
    isString: true
  }
})
