import styles from './Login.module.css'
import { Users, MessageSquareMore } from 'lucide-react'
import InputField from '../../components/InputField/InputField'
import GoogleIcon from '../../assets/google_icon.svg'

export default function Login() {
  return (
    <div className={styles.login_container}>
      <div className={styles.logo_section}>
        <div className={styles.logo_icon}>
          <MessageSquareMore />
        </div>
        <h1 className={styles.main_title}>TalkBox</h1>
        <p className={styles.main_subtitle}>대화가 시작되는 곳</p>
      </div>

      <div className={styles.login_card}>
        <h2 className={styles.login_card_title}>환영합니다!</h2>
        <p className={styles.login_card_subtitle}>
          친구들과의 즐거운 대화를 시작해보세요
        </p>

        <button className={styles.google_login_button}>
          <img src={GoogleIcon} alt="Google" className={styles.google_icon} />
          구글로 빠르게 시작하기
        </button>

        <div className={styles.divider}>
          <span>또는</span>
        </div>

        <InputField label="이메일" type="email" placeholder="your@email.com" />

        <InputField
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력하세요"
        />

        <a href="#" className={styles.forgot_password}>
          비밀번호를 잊으셨나요?
        </a>

        <button className={styles.login_button}>
          <Users />
          <span className={styles.login_button_icon}></span>
          대화방 입장하기
        </button>

        <p className={styles.signup_text}>
          아직 TalkBox가 처음이신가요?{' '}
          <a href="/signup" className={styles.signup_link}>
            지금 가입하기
          </a>
        </p>
      </div>
    </div>
  )
}
