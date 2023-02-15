import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter()

  useEffect(()=>{
      setTimeout(()=>{
        router.push('/')
      }, 3000)
  }, [])
  return (  
    <div className="flex h-screen">
      <div  className="ml-[100px] mt-[100px]">
      <h1 className="text-8xl font-extrabold mb-10">Ooops...</h1>
      <h2 className="text-2xl mb-3">That page cannot be found 404</h2>
      <p>Go back to the home page <Link href="/" className="underline font-semibold">Home</Link></p>
    </div>
    </div>
  );
}
 
export default NotFound;