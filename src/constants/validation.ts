import * as Yup from 'yup';

export const contactValidationSchema = Yup.object({
  firstName: Yup.string()
    .required('Имя обязательно')
    .min(2, 'Минимум 2 символа'),
  lastName: Yup.string()
    .required('Фамилия обязательна')
    .min(2, 'Минимум 2 символа'),
  email: Yup.string()
    .required('Email обязателен')
    .email('Неверный формат email'),
  phone: Yup.string()
    .matches(/^\+?[1-9]\d{10,14}$/, 'Неверный формат телефона'),
  subject: Yup.string()
    .oneOf(['general', 'uiux', 'brand'], 'Выберите тему')
    .required('Тема обязательна'),
  message: Yup.string()
    .required('Сообщение обязательно')
    .min(10, 'Минимум 10 символов')
});

export const validationSchema = Yup.object({
  title: Yup.string()
    .required('Название рецепта обязательно')
    .min(3, 'Название должно содержать минимум 3 символа')
    .max(100, 'Название не должно превышать 100 символов'),
  content: Yup.string()
    .required('Описание рецепта обязательно')
    .min(50, 'Описание должно содержать минимум 50 символов')
    .max(2000, 'Описание не должно превышать 2000 символов'),
  imageUrl: Yup.string()
    .url('Введите корректный URL изображения'),
  ingredients: Yup.array()
    .of(Yup.string())
    .min(1, 'Добавьте хотя бы один ингредиент'),
  steps: Yup.array()
    .of(Yup.string())
    .min(1, 'Добавьте хотя бы один шаг приготовления'),
  cookTime: Yup.string()
    .required('Время приготовления обязательно')
    .matches(/^\d+\s+мин$/, 'Время должно быть указано в формате "30 мин"'),
  category: Yup.string()
    .required('Выберите категорию рецепта')
});

export const searchValidationSchema = Yup.object({
  searchQuery: Yup.string().trim()
});
