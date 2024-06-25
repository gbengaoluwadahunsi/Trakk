
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
 
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      
        <Header/>
      
      <div className="">{children}</div>
      <Footer/>
    </div>
  );
}