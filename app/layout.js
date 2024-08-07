import "@/app/globals.css";

export const metadata = {
  title: "Edie Lehmann Boddicker",
  description: "The official website of Los Angeles based vocal contractor and vocalist Edie Lehmann Boddicker",
  keywords: "edie lehmann boddicker, vocal contractor, edie lehmann, edie, vocal contractor los angeles"
};

// Components
import ScrollToTopButton from '@/components/ScrollToTopButton/ScrollToTopButton'
import UniversalNavbar from "@/components/NavBar/UniversalNavbar";
import { Suspense } from "react";
import LoadingPage from "./loading";

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