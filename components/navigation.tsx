"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "../styles/navigation.module.css"

export default function Navigation(){
    const path = usePathname();
    const [count, setCount] = useState(0);
    return(
        <nav className={styles.nav}>
            {/* 해당 방식으로 하면 class name에 랜덤한 값 추가됨. 절대 중복 X  */}
            <ul>
                <li>
                    <Link href="/">Home</Link> {path === "/" ? "❤️" : ""}
                </li>
                <li>
                    <Link href="/about-us">About Us</Link> {path === "/about-us" ? "❤️" : ""}
                </li> 
            </ul>
        </nav>

    )


}
