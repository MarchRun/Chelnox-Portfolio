import { useEffect, useRef, useState } from "react";

export function useInView(threshold = 0.3, triggerOnce = false) {
    const ref = useRef<HTMLElement>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                } else if (!triggerOnce) {
                    // Reset animation when element leaves viewport
                    setIsInView(false);
                }
            },
            { threshold }
        );

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, [threshold, triggerOnce]);

    return { ref, isInView };
}
