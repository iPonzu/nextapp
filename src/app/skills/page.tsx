import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "My Skills",
}

export default function SkillsPage(){
    return(
        <main>
            <nav id="navbar2">    
                <header className="w-screen px-6 py-4">
                    <h3 className="font-sans absolute">Welcome to my skills, let me show you a little bit about myself</h3>
                </header>
                <div className="flex items-center justify-center h-screen">
                    <img 
                    src=""
                    alt=""
                    />
                </div>
            </nav>
        </main>
    )
}