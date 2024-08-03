import Image from "next/image";
import { LoginComponent } from "./Helpers/ClientSideComponents";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    
    <div>
      <h1>Api&apos;s by Revtrance</h1> 

      <a href="/random-hindi-words"> Random Hindi words API</a>
      <LoginComponent/>


    </div>
      
    </main>
  );
}
