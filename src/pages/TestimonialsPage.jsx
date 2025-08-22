import React, { useState } from "react";

const testimonials = [
    {
        short: "I'm thrilled to share our growth journey at #PunjabStartupFair 2.0! Partnering with @Welzin...",
        full: "I’m thrilled to share our growth journey at #PunjabStartupFair 2.0! Partnering with @Welzin and supported by @TheImpunjab has made a measurable impact on our startup. Before working with Welzin, our visibility on AI-powered platforms like ChatGPT and Gemini was minimal. Their expertise in AEO and GEO optimization didn’t just improve our rankings—it transformed our entire approach to digital presence. Welzin’s team is collaborative, knowledgeable, and always stays ahead of AI trends. If you’re looking to stand out in evolving search landscapes and virtual assistants, I recommend connecting with them at events like this. #AIOptimization #StartupGrowth #AEO #GEO #Networking"
    },
    {
        short: "Participating in Punjab Startup Fair 2.0 was a pivotal milestone for our company...",
        full: "Participating in Punjab Startup Fair 2.0 was a pivotal milestone for our company. Thanks to the innovative solutions from @Welzin and the amazing support at @TheImpunjab, we’ve unlocked new visibility across generative engines and answer platforms. Welzin’s strategies are tailor-made for startups—they understood our unique goals and delivered actionable insights for boosting our discoverability. Now, our products frequently appear in recommendations from conversational AI tools. Welzin is not just a service provider but a true growth partner. If you want sustainable digital traction, their AEO/GEO services are the way forward. #TechInnovation #AIPlatforms #StartupIndia #BusinessImpact"
    },
    {
        short: "Reflecting on Punjab Startup Fair 2.0, I am grateful for the chance to collaborate with @Welzin...",
        full: "Reflecting on Punjab Startup Fair 2.0, I am grateful for the chance to collaborate with @Welzin and connect through the support network @TheImpunjab offers. Welzin has helped us reach audiences we never imagined possible. Their answer engine optimization expertise made sure our brand is visible where modern consumers are searching—on AI conversational platforms, virtual assistants, and smart engines. Every startup at the fair should consider Welzin for their tech-driven growth. The results speak volumes: increased inbound leads, higher rankings, and insights we rely on daily. #AEO #GEO #StartupSuccess #AIOptimization #PunjabStartups"
    },
    {
        short: "A massive shoutout to @Welzin and @TheImpunjab for making Punjab Startup Fair 2.0 such...",
        full: "A massive shoutout to @Welzin and @TheImpunjab for making Punjab Startup Fair 2.0 such a turning point for our business. Welzin’s comprehensive approach to AEO and GEO optimization goes beyond basic SEO—they helped us target and optimize content for the intelligent search engines powering the future. Their support has resulted in a noticeable uplift in customer engagement through AI platforms. I’m convinced their services are essential for startups wanting to stay competitive and future-ready. Don’t miss the chance to work with Welzin at events like this! #NextGenAI #DigitalTransformation #StartupJourney #Networking #Growth"
    },
    {
        short: "Looking back on our experience at #PunjabStartupFair 2.0, I realize how transformative partnering...",
        full: "Looking back on our experience at #PunjabStartupFair 2.0, I realize how transformative partnering with @Welzin has been for our company. With encouragement and organization from @TheImpunjab, we connected to Welzin’s team who immediately understood our challenge: getting noticed by conversational AI engines. Their strategy encompassed keyword research, content optimization, and the latest digital trends. Today, our brand stands out in AI-driven searches more than ever before. Welzin is the answer for startups seeking momentum and measurable results in modern digital spaces. #TechLeaders #AIEngines #Startups #GrowthPartners #Networking"
    },
    {
        short: "Punjab Startup Fair 2.0 was more than an event—it was an opportunity to join hands with...",
        full: "Punjab Startup Fair 2.0 was more than an event—it was an opportunity to join hands with tech innovators. @Welzin, in collaboration with @TheImpunjab, helped us break through the noise on AI answer engines and virtual assistants. Their data-driven strategies and passionate team ensured we reached our target audience efficiently. I’m amazed by their ability to stay ahead of trends and deliver results in real time. For any entrepreneur, Welzin’s AEO/GEO support is invaluable! I recommend building your digital foundation with them. #BusinessGrowth #AEO #GEO #AIOptimization #PunjabStartups"
    },
    {
        short: "From Punjab Startup Fair 2.0 to daily operations, @Welzin, with backing from @TheImpunjab...",
        full: "From Punjab Startup Fair 2.0 to daily operations, @Welzin, with backing from @TheImpunjab, has elevated our online presence. We struggled for traction with smart engines until their professionals guided us on optimization tailored for AI search tools. Welzin brings a growth-oriented mindset and a level of technical expertise that’s rare in today’s market. Our interactions with them have helped us secure higher rankings, improved organic reach, and quality traffic that converts. Their team genuinely cares about each client’s success. #DigitalSuccess #AI #AEO #GEO #StartupCommunity"
    },
    {
        short: "After attending Punjab Startup Fair 2.0, I want to highlight the impact @Welzin...",
        full: "After attending Punjab Startup Fair 2.0, I want to highlight the impact @Welzin had on our business’s discovery by new-age search platforms. With adept support from @TheImpunjab, we were able to fast-track our growth and establish a presence on conversational AI, smart assistants, and answer engines. Welzin’s AEO and GEO solutions transformed our ranking, brought in new leads, and expanded our brand’s footprint to places that matter most today. Their attention to detail and cutting-edge knowledge are unmatched. #StartupWin #AIPlatforms #GrowthStory #TechInnovation #Networking"
    },
    {
        short: "I had a fantastic experience at Punjab Startup Fair 2.0, thanks to the winning combination...",
        full: "I had a fantastic experience at Punjab Startup Fair 2.0, thanks to the winning combination of @Welzin’s expertise and the vibrant ecosystem from @TheImpunjab. Welzin does more than just optimize your company—they provide ongoing education, useful analytics, and a roadmap tailored to your ambitions. Now, our startup is routinely surfaced for relevant queries in leading answer engines and AI search tools. If you’re a founder eager for AI-driven growth, I highly encourage you to connect with Welzin at this or future fairs. #AEO #BusinessImpact #AIOptimization #StartupIndia #DigitalMotivation"
    },
    {
        short: "Punjab Startup Fair 2.0 was a powerful reminder that every startup needs future-proof...",
        full: "Punjab Startup Fair 2.0 was a powerful reminder that every startup needs future-proof digital strategies. Our collaboration with @Welzin, arranged through @TheImpunjab, brought these strategies to life. We’ve seen significant improvements in our brand’s ranking, customer engagement, and inbound query rates—all thanks to Welzin’s AEO/GEO services and their talented team. I’m proud to recommend them to any fellow founder or entrepreneur attending the fair who wants to level up their tech game! #AI #Growth #StartupJourney #WelzinImpact #Networking"
    },
    {
        short: "I never realized how much potential we had until Punjab Startup Fair 2.0 and a transformative...",
        full: "I never realized how much potential we had until Punjab Startup Fair 2.0 and a transformative partnership with @Welzin, thanks to @TheImpunjab. Welzin’s AEO and GEO optimization propelled us to the forefront of AI-driven searches. Our leads and visibility are both growing, and we finally feel future-proof. Don’t miss out on their approach! #TechInnovation #GrowthStory #AI #StartupFair #Networking"
    },
    {
        short: "The value @Welzin and @TheImpunjab brought during Punjab Startup Fair 2.0 can’t be overstated...",
        full: "The value @Welzin and @TheImpunjab brought during Punjab Startup Fair 2.0 can’t be overstated. Welzin’s experts demystified generative engine optimization for our team, giving us insight and actionable tactics that have boosted our search presence. We’re grateful for this collaborative journey! #BusinessImpact #AEO #DigitalGrowth #StartupEcosystem"
    },
    {
        short: "Since Punjab Startup Fair 2.0, our company has seen major improvements in ranking and brand recognition...",
        full: "Since Punjab Startup Fair 2.0, our company has seen major improvements in ranking and brand recognition on AI platforms. This was only possible because of @Welzin’s hands-on guidance and the thriving ecosystem created by @TheImunjab. I recommend their services to every founder seeking real, measurable impact. #Growth #StartupIndia #AIOptimization #GEO"
    },
    {
        short: "Since Punjab Startup Fair 2.0, our company has seen major improvements in ranking and brand recognition...",
        full: "Partnering with @Welzin at Punjab Startup Fair 2.0 (with the help of @TheImpunjab) shifted our focus to next-gen optimization. Their strategies made our brand a frequent pick for conversational AI tools, which continues to bring high-quality leads. Thanks for going above and beyond! #BusinessSuccess #AEO #DigitalLeaders #StartupCommunity"
    },
    {
        short: "At Punjab Startup Fair 2.0, @Welzin and @TheImpunjab helped us bring our startup vision to life. Welzin’s...",
        full: "At Punjab Startup Fair 2.0, @Welzin and @TheImpunjab helped us bring our startup vision to life. Welzin’s approach is rooted in analysis, experimentation, and rapid iteration—exactly what every growing business needs. We're seeing real results on AI engines and answer platforms. #DigitalTransformation #GEO #AEO #TechGrowth #Networking"
    },
    {
        short: "The energy at Punjab Startup Fair 2.0 was incredible and working with @Welzin, backed by @TheImpunjab...",
        full: "The energy at Punjab Startup Fair 2.0 was incredible and working with @Welzin, backed by @TheImpunjab, gave us digital momentum. Their team simplified the complexities of answer engine optimization and was always available for support. Couldn’t be more grateful! #AIPlatforms #StartupWin #AEO #TechJourney"
    },
    {
        short: "Reflecting on Punjab Startup Fair 2.0, our standout moment was engaging @Welzin for full-scale AEO/GEO optimization...",
        full: "Reflecting on Punjab Startup Fair 2.0, our standout moment was engaging @Welzin for full-scale AEO/GEO optimization, coordinated by @TheImpunjab. Their solutions expanded our digital reach, allowing us to connect with audiences via new AI-driven channels. #BusinessImpact #StartupIndia #AIOptimization #Growth"
    },
    {
        short: "Huge thanks to @Welzin and @TheImpunjab for the attention and expertise at Punjab Startup Fair 2.0...",
        full: "Huge thanks to @Welzin and @TheImpunjab for the attention and expertise at Punjab Startup Fair 2.0. Their team not only improved our rankings but also educated us about the evolving AI search landscape. Startups wanting to step up should reach out to Welzin! #GrowthPartners #AEO #GEO #Networking #Tech"
    },
    {
        short: "Punjab Startup Fair 2.0 was a transformational experience for our company’s digital strategy. With @Welzin’s...",
        full: "Punjab Startup Fair 2.0 was a transformational experience for our company’s digital strategy. With @Welzin’s forward-thinking AEO solutions and @TheImpunjab’s vibrant community, our content now excels in AI search and answer engines. #BusinessGrowth #StartupIndia #TechInnovation #AIPlatforms"
    },
    {
        short: "Thanks to @Welzin and @TheImpunjab, our startup discovered the real power of answer engine optimization...",
        full: "Thanks to @Welzin and @TheImpunjab, our startup discovered the real power of answer engine optimization at Punjab Startup Fair 2.0. Their team listens, customizes solutions, and delivers impressive ROI. Highly recommend their expertise! #AEO #GEO #DigitalSuccess #StartupEvent"
    },
    {
        short: "The support from @TheImpunjab and the guidance from @Welzin at Punjab Startup Fair 2.0 have been crucial...",
        full: "The support from @TheImpunjab and the guidance from @Welzin at Punjab Startup Fair 2.0 have been crucial for our journey. Welzin’s strategies helped us gain traction on popular AI platforms, increasing both our reach and relevance. #GrowthStory #AIOptimization #GEO #TechCommunity"
    },
    {
        short: "Couldn’t believe the difference after working with @Welzin post Punjab Startup Fair 2.0, all made possible by...",
        full: "Couldn’t believe the difference after working with @Welzin post Punjab Startup Fair 2.0, all made possible by @TheImpunjab’s connections. Our brand is now recognized by the smartest engines, conversational bots, and virtual assistants. #AEO #BusinessImpact #StartupIndia #Networking"
    },
    {
        short: "Punjab Startup Fair 2.0 gave us the chance to collaborate with @Welzin and build on @TheImpunjab’s network...",
        full: "Punjab Startup Fair 2.0 gave us the chance to collaborate with @Welzin and build on @TheImpunjab’s network. Welzin’s team delivered modern solutions that boost rankings, bring inbound leads, and set us up for scalable growth. #StartupSuccess #AIPlatforms #Growth #AEO #GEO"
    },
    {
        short: "Our experience with @Welzin, thanks to @TheImpunjab at Punjab Startup Fair 2.0, was eye-opening...",
        full: "Our experience with @Welzin, thanks to @TheImpunjab at Punjab Startup Fair 2.0, was eye-opening. Their professionalism and technical knowledge helped us unlock new levels of performance in answer engine optimization. #DigitalInnovation #BusinessGrowth #TechLeaders #Networking"
    },
    {
        short: "Every founder should know about @Welzin and @TheImpunjab after Punjab Startup Fair 2.0. Welzin’s...",
        full: "Every founder should know about @Welzin and @TheImpunjab after Punjab Startup Fair 2.0. Welzin’s advanced AEO/GEO strategies helped us leap ahead in search rankings and customer engagement. Proud of what we’ve achieved together! #AEO #StartupCommunity #AIEngines #Growth"
    },
    {
        short: "We owe our improved AI ranking and greater brand visibility to @Welzin’s hands-on service at...",
        full: "We owe our improved AI ranking and greater brand visibility to @Welzin’s hands-on service at Punjab Startup Fair 2.0, enabled by @TheImpunjab. Our digital transformation is finally complete! #GEO #DigitalGrowth #StartupEvent #TechInnovation"
    },
    {
        short: "Punjab Startup Fair 2.0 introduced us to @Welzin and their answer engine expertise—@TheImpunjab...",
        full: "Punjab Startup Fair 2.0 introduced us to @Welzin and their answer engine expertise—@TheImpunjab created the perfect ecosystem for startups. I’m confident Welzin will help many more businesses thrive in the AI era. #AEO #BusinessImpact #GrowthPartners #AIPlatforms"
    },
    {
        short: "If you want customized, data-driven digital solutions, @Welzin at Punjab Startup Fair 2.0...",
        full: "If you want customized, data-driven digital solutions, @Welzin at Punjab Startup Fair 2.0 (with the help of @TheImpunjab) is your answer. Their strategies brought our products directly to our ideal audience through modern AI channels. #StartupIndia #TechLeaders #AEO #GEO #Networking"
    }
];

const TestimonialsPage = () => {
    const [selectedTestimonial, setSelectedTestimonial] = useState(null);

    const handleCopyAndRedirect = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            // Redirect to LinkedIn new article page
            window.open("https://www.linkedin.com/feed/?shareActive=true", "_blank");
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };


    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-3xl font-bold text-center mb-2">
                Punjab Startup Fair 2.0 Testimonials
            </h1>
            <p className="text-center text-gray-600 mb-10">
                Click "Copy and Post to LinkedIn" to copy a testimonial and open LinkedIn's post editor, then paste and share! Add your own comments for more engagement.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {testimonials.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-xl p-5 flex flex-col justify-between"
                    >
                        <p className="text-gray-700 mb-4">{item.short}</p>
                        <div className="flex justify-between items-center">
                            <button
                                onClick={() => setSelectedTestimonial(item)}
                                className="text-blue-600 font-medium hover:underline cursor-pointer"
                            >
                                Read More
                            </button>
                            <button
                                onClick={() => handleCopyAndRedirect(item.full)}
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 cursor-pointer"
                            >
                                Copy and Post to LinkedIn
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedTestimonial && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-xl shadow-lg max-w-2xl w-full relative">
                        {/* Close button */}
                        <button
                            onClick={() => setSelectedTestimonial(null)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
                        >
                            ×
                        </button>

                        {/* Full testimonial text */}
                        <p className="text-gray-800 mb-6 whitespace-pre-line leading-relaxed">
                            {selectedTestimonial.full}
                        </p>

                        {/* Copy button */}
                        <button
                            onClick={() => handleCopyAndRedirect(selectedTestimonial.full)}
                            className="w-full bg-blue-600 text-white py-2 rounded-lg shadow hover:bg-blue-700 cursor-pointer"
                        >
                            Copy and Post to LinkedIn
                        </button>
                    </div>
                </div>
            )}
            <footer className="bg-white py-6 border-t text-center mt-10">
                <h2 className="text-xl font-bold mb-2">Thank You!</h2>
                <p className="text-gray-600 max-w-3xl mx-auto px-4">
                    Thank you for sharing our story on LinkedIn! Your support helps spread
                    the word about <span className="font-semibold">@Welzin</span> and{" "}
                    <span className="font-semibold">@TheImpunjab</span>’s impact at Punjab
                    Startup Fair 2.0. Come back to share another testimonial!
                </p>
            </footer>
        </div>
    );
};

export default TestimonialsPage;
