import "@/app/globals.css";

export const metadata = {
  title: "Edie Lehmann Boddicker",
  description: "",
};

// Components
import ScrollToTopButton from '@/components/ScrollToTopButton/ScrollToTopButton'
import UniversalNavbar from "@/components/NavBar/UniversalNavbar";

function RootLayout({children}) {

  return (
    <html lang="en">
      <body className='App font-zilla text-black'>

        <UniversalNavbar />
        <div className="pt-[80px] mobileLandscape:pt-0 sm:pt-[150px]">
          {children}
        </div>
        <ScrollToTopButton/>

      </body>
    </html>
  )
}


export default RootLayout