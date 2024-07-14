import Navigation from "../../components/navigation"



export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        {children}
        &copy; Next JS is Great!
    </div>
  )
}
