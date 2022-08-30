// Local dependencies
import styles from '../styles/components/Button.module.scss';

export default function Button({label, style, disabled, onClick, type}) {
    return (
        <button 
        className={styles.button}
        disabled={disabled}
        style={style}
        type={type || 'text'}
        onClick={onClick}
        >
            {label}
        </button>
    )
}