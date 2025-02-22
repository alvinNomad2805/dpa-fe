import "./utils/global.css"
import {Poppins} from 'next/font/google'

const poppins_init = Poppins({
  subsets:['latin'],
  weight:['100','300','700'],
  variable:'--font-poppins'
})

export const metadata = {
  title: 'DPA UII Application',
  description: 'Aplikasi Bimbingan Akademik Jurusan Teknik Elektro FTI UII',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={poppins_init.variable}>{children}</body>
    </html>
  )
}
