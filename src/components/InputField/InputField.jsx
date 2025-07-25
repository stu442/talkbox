import styles from './InputField.module.css'

export default function InputField({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  className,
  ...props
}) {
  return (
    <div className={`${styles.input_group} ${className || ''}`}>
      <label className={styles.input_label}>{label}</label>
      <input
        type={type}
        className={styles.input_field}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  )
}