
import "./utils/global.css"
import {Poppins} from 'next/font/google'

const poppins_init = Poppins({
  subsets:['latin'],
  weight:['100','300','700'],
  variable:'--font-poppins'
})

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <title>DPA UII Application</title>
        <meta name='description' content="Aplikasi Bimbingan Akademik Jurusan Teknik Elektro FTI UII"></meta>
      </head>
      <body className={poppins_init.variable}>{children}</body>
    </html>
  )
}
