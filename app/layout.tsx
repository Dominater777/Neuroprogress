import "./globals.css"

export const metadata = {
  title: "NeuroProgress",
  description: "Interactive neuroscience progression visualization"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}