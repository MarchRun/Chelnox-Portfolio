"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";

export default function Contact() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus("success");
                setFormData({ fullName: "", email: "", message: "" });
            } else {
                setSubmitStatus("error");
            }
        } catch {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    const { ref: titleRef, isInView: titleInView } = useInView(0.3);
    const { ref: formRef, isInView: formInView } = useInView(0.2);

    return (
        <section id="contact" className="relative py-20 overflow-hidden bg-gray-50 dark:bg-gray-900">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                    ref={titleRef as React.RefObject<HTMLHeadingElement>}
                    className={`text-3xl md:text-4xl font-bold text-center text-orange-500 dark:text-sky-400 mb-12 transition-all duration-700 ${titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    Contact Me
                </h2>

                {/* Contact Form - Full Width */}
                <div
                    ref={formRef as React.RefObject<HTMLDivElement>}
                    className={`max-w-4xl mx-auto transition-all duration-700 delay-100 ${formInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <div className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-orange-200 dark:border-sky-400/30 shadow-lg p-8">
                        <h3 className="text-2xl font-bold text-orange-500 dark:text-sky-400 text-center mb-6">
                            Send Me A Message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm text-orange-600 dark:text-sky-300 mb-2 font-medium">
                                        Full Name :
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border-2 border-orange-300 dark:border-sky-400/50 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-gray-900 dark:focus:border-white outline-none transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-orange-600 dark:text-sky-300 mb-2 font-medium">
                                        Email :
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border-2 border-orange-300 dark:border-sky-400/50 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-gray-900 dark:focus:border-white outline-none transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm text-orange-600 dark:text-sky-300 mb-2 font-medium">
                                    Message :
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-xl border-2 border-orange-300 dark:border-sky-400/50 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-gray-900 dark:focus:border-white outline-none transition-colors resize-none"
                                />
                            </div>

                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="px-8 py-3 bg-orange-500 dark:bg-sky-500 text-white rounded-xl font-semibold hover:bg-gray-900 dark:hover:bg-white dark:hover:text-gray-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </button>
                            </div>

                            {submitStatus === "success" && (
                                <p className="text-center text-green-600 dark:text-green-400">
                                    Message sent successfully!
                                </p>
                            )}
                            {submitStatus === "error" && (
                                <p className="text-center text-red-600 dark:text-red-400">
                                    Failed to send message. Please try again.
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
