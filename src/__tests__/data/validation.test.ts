import { VALIDATION } from 'src/data/validation';
import { FormData } from 'src/features/Form/FormSlice';
import { mockData } from 'src/utils/test-utils';

describe('Validation Functions', () => {
  test('should validate the VALIDATION object for each field', () => {
    Object.keys(VALIDATION).forEach(method => {
      expect(
        VALIDATION[method as keyof FormData](
          mockData.formData[method as keyof FormData]
        )
      ).toBeTruthy();
    });
  });

  test('should not validate the VALIDATION object for each field with invalid values', () => {
    const testValues: FormData = {
      firstName: '!@',
      lastName: '$#$#',
      email: 'invalid_email',
      address: 'Invalid Address',
      city: '123',
      state: '@',
      zipCode: '123',
      phone: 'InvalidPhone',
      jobTitle: '',
      reason: '',
    };

    Object.keys(VALIDATION).forEach(method => {
      expect(
        VALIDATION[method as keyof FormData](
          testValues[method as keyof FormData]
        )
      ).toContain('Enter a valid');
    });
  });
});
