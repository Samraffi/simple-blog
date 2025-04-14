import * as Yup from 'yup';

export const contactValidationSchema = Yup.object({
  firstName: Yup.string()
    .required('First name is required')
    .min(2, 'Minimum 2 characters'),
  lastName: Yup.string()
    .required('Last name is required')
    .min(2, 'Minimum 2 characters'),
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email format'),
  phone: Yup.string()
    .matches(/^\+?[1-9]\d{10,14}$/, 'Invalid phone format'),
  subject: Yup.string()
    .oneOf(['general', 'uiux', 'brand'], 'Please select a topic')
    .required('Topic is required'),
  message: Yup.string()
    .required('Message is required')
    .min(10, 'Minimum 10 characters')
});

export const validationSchema = Yup.object({
  title: Yup.string()
    .required('Recipe title is required')
    .min(3, 'Title must be at least 3 characters')
    .max(100, 'Title must not exceed 100 characters'),
  content: Yup.string()
    .required('Recipe description is required')
    .min(50, 'Description must be at least 50 characters')
    .max(2000, 'Description must not exceed 2000 characters'),
  imageUrl: Yup.string()
    .url('Please enter a valid image URL'),
  ingredients: Yup.array()
    .of(Yup.string())
    .min(1, 'Add at least one ingredient'),
  steps: Yup.array()
    .of(Yup.string())
    .min(1, 'Add at least one cooking step'),
  cookTime: Yup.string()
    .required('Cooking time is required')
    .matches(/^\d+\s+min$/, 'Time should be in format "30 min"'),
  category: Yup.string()
    .required('Please select a recipe category')
});

export const searchValidationSchema = Yup.object({
  searchQuery: Yup.string().trim()
});
