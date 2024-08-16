// Import necessary modules
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Define the TransitionLink component
const TransitionLink = ({ children, href, ...props }) => {
    const router = useRouter()

    // Handle link click for page transition
    const handleTransition = async (e) => {
        e.preventDefault();
        const body = document.querySelector("body");

        body?.classList.add("page-transition");

        await sleep(1000);
        router.push(href);
        await sleep(1000);

        body?.classList.remove("page-transition");
    };

    return (
        <Link {...props} href={href} onClick={handleTransition}>
            {children}
        </Link>
    );
};

// Utility function for sleep
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export default TransitionLink;