import { Navbar } from 'components/Navbar'

import styles from './styles.module.scss'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => (
  <div className={styles.container}>
    <header className={styles.header}>
      <strong>LV</strong>

      <Navbar />
    </header>
    <main className={styles.content}>{children}</main>
  </div>
)
