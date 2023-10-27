import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { VALIDATION } from 'src/data/validation';
import { useAppSelector, useAppDispatch } from 'src/redux/hooks';
import { Fields } from 'src/types/types';
import { splitCamelCase } from 'src/utils';
import {
  updateFormData,
  submitForm,
  resetForm,
  selectFormData,
  FormData,
} from './FormSlice';
import styles from './Form.module.css';

interface Props {
  fieldSet: Fields[];
}

const Form: FC<Props> = ({ fieldSet }) => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector(selectFormData);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, dirtyFields },
  } = useForm<FormData>({
    defaultValues: formData,
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<FormData> = data => {
    dispatch(updateFormData(data));
    dispatch(submitForm());
  };

  const handleReset = () => {
    dispatch(resetForm());
    reset();
  };

  return (
    <form
      data-testid='form'
      className={styles.formContainer}
      onSubmit={handleSubmit(onSubmit)}
      onReset={handleReset}
    >
      {fieldSet.map((field, idx) =>
        Array.isArray(field) ? (
          <div className={styles.columnContainer} key={`Row ${idx}`}>
            {field.map(fieldColumn => (
              <div className={styles.inputContainer} key={fieldColumn.id}>
                <label
                  htmlFor={fieldColumn.id}
                  className={fieldColumn.required ? styles.labelRequired : ''}
                >
                  {splitCamelCase(fieldColumn.id)}
                </label>
                <input
                  id={fieldColumn.id}
                  type={fieldColumn.type}
                  placeholder={fieldColumn.placeholder}
                  className={errors[fieldColumn.id] ? styles.inputError : ''}
                  autoComplete='on'
                  aria-invalid={errors[fieldColumn.id] ? 'true' : 'false'}
                  {...register(fieldColumn.id, {
                    required: fieldColumn.required,
                    validate:
                      dirtyFields[fieldColumn.id] === isDirty
                        ? VALIDATION[fieldColumn.id]
                        : {},
                  })}
                />
                {errors[fieldColumn.id] && (
                  <p
                    className={styles.error}
                    role='alert'
                    aria-live='assertive'
                  >
                    {errors[fieldColumn.id]?.message ||
                      `${splitCamelCase(fieldColumn.id)} is required`}
                  </p>
                )}
              </div>
            ))}
          </div>
        ) : field.type === 'select' ? (
          <div className={styles.inputContainer} key={field.id}>
            <label
              htmlFor={field.id}
              className={field.required ? styles.labelRequired : ''}
            >
              {splitCamelCase(field.id)}
            </label>
            <select
              id={field.id}
              className={errors[field.id] ? styles.inputError : ''}
              defaultValue=''
              {...register(field.id, {
                required: field.required,
              })}
            >
              <option value='' />
              {field.options?.map(option => (
                <option key={option}>{option}</option>
              ))}
            </select>
            {errors[field.id] && (
              <p className={styles.error} role='alert' aria-live='assertive'>
                {errors[field.id]?.message ||
                  `${splitCamelCase(field.id)} is required`}
              </p>
            )}
          </div>
        ) : (
          <div className={styles.inputContainer} key={field.id}>
            <label
              htmlFor={field.id}
              className={field.required ? styles.labelRequired : ''}
            >
              {splitCamelCase(field.id)}
            </label>
            {field.type === 'textarea' ? (
              <textarea
                id={field.id}
                className={errors[field.id] ? styles.inputError : ''}
                {...register(field.id, { required: field.required })}
              />
            ) : (
              <input
                id={field.id}
                type={field.type}
                placeholder={field.placeholder}
                className={errors[field.id] ? styles.inputError : ''}
                autoComplete='on'
                aria-invalid={errors[field.id] ? 'true' : 'false'}
                {...register(field.id, {
                  required: field.required,
                  validate:
                    dirtyFields[field.id] === isDirty
                      ? VALIDATION[field.id]
                      : {},
                })}
              />
            )}
            {errors[field.id] && (
              <p className={styles.error} role='alert' aria-live='assertive'>
                {errors[field.id]?.message ||
                  `${splitCamelCase(field.id)} is required`}
              </p>
            )}
          </div>
        )
      )}

      <p className={styles.instructions}>
        <span>*</span> Required
      </p>

      <div className={styles.buttonsContainer}>
        <input type='submit' className={styles.button} />
        <input type='reset' className={styles.button} />
      </div>
    </form>
  );
};

export default Form;
