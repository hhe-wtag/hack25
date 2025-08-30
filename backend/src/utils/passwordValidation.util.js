import ApiError from './apiError.util.js';
import HTTP_STATUS from './httpStatus.util.js';

export function validatePassword(password) {
  if (!password) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'Password is required');
  }
  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password)) {
    throw new ApiError(
      HTTP_STATUS.BAD_REQUEST,
      'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number'
    );
  }
}
