import { ContactFormValues } from '../../types/contact';

export const useContactForm = () => {
  const handleSubmit = async (values: ContactFormValues) => {
    try {
      // В будущем здесь будет API запрос
      console.log('Отправка формы:', values);
    } catch (error) {
      console.error('Failed to send message:', error);
      throw error;
    }
  };

  const initialValues: ContactFormValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: 'general',
    message: ''
  };

  return { handleSubmit, initialValues };
};
