import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ContactForm from "./components/email";

export default function Home() {
  return (
    <main className="h-full w-full bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section id="Hero" className="relative">
        {/* Background image for md and above */}
        <div
          className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/background.jpg')`,
            height: "100vh",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 h-screen flex flex-col w-full items-center justify-center text-white">
          <h1
            className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl text-gray-900 md:text-white text-center animate-fadeIn"
            style={{
              textShadow: "2px 4px 6px rgba(0,0,0,0.3)",
            }}
          >
            Welcome to AnimaSentio
          </h1>
          <p className="leading-7 text-gray-700 md:text-gray-300 text-center mt-4 mb-8 animate-fadeIn delay-100">
            Revolutionizing Interactive Education with Virtual Experiences
          </p>
          <div className="flex gap-8 md:gap-20">
            <Link href="#About" scroll={true}>
              <Button className="transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-blue-700">
                Learn More
              </Button>
            </Link>
            <Link href="https://youtu.be/gqgB3yxoU2g" target="_blank">
              <Button className="transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-purple-700">
                See a Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="About" className="py-20">
        <div className="container mx-auto px-8 md:px-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 animate-fadeIn">
            What is AnimaSentio?
          </h2>
          <p className="text-lg leading-7 text-gray-700 mb-6 animate-fadeIn delay-100">
            AnimaSentio is an innovative research project focused on
            transforming the way we learn through interactive, AI-driven virtual
            human simulations. By integrating advanced technologies like
            computer vision and emotion-detection algorithms, we are creating
            digital human characters capable of engaging with users in real-time, 
            providing a unique, natural way to learn.
          </p>
          <p className="text-lg leading-7 text-gray-700 mb-6 animate-fadeIn delay-200">
            Our project, led by Professor Jeasy Sehgal at Georgia State
            University, aims to bring history to life by allowing users to
            interact with 3D models of historical figures, all powered by
            conversational AI and realistic animations. Imagine learning about
            the civil rights movement by talking directly with a digital version
            of Dr. Martin Luther King Jr., or exploring ancient Egypt with a
            digital Cleopatra as your guide. This technology takes traditional
            education methods to a new level by fostering deeper engagement and
            knowledge retention.
          </p>
          <p className="text-lg leading-7 text-gray-700 animate-fadeIn delay-200">
            Our primary focus is creating meaningful educational experiences,
            particularly for museums, where visitors can interact with digital
            humans who respond to their emotions, facial expressions, and
            voices, creating a truly personalized learning journey.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="Features"
        className="bg-gradient-to-b from-pink-50 to-purple-50 py-20"
      >
        <div className="container mx-auto px-8 md:px-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 animate-fadeIn">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md transform transition duration-300 hover:scale-105 animate-fadeIn delay-100">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Realistic Virtual Human Animations
              </h3>
              <p className="text-gray-700">
                Virtual humans equipped with lifelike animations and emotions
                using Unreal Engine 5 and NVIDIA ACE.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md transform transition duration-300 hover:scale-105 animate-fadeIn delay-200">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Emotion Detection
              </h3>
              <p className="text-gray-700">
                AI-powered emotion detection to tailor interactions based on
                user mood and tone, enhancing immersion.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md transform transition duration-300 hover:scale-105 animate-fadeIn delay-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Conversational AI
              </h3>
              <p className="text-gray-700">
                Interact with virtual historical figures, ask questions, and
                experience personalized responses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Technology Section */}
      <section id="Research" className="py-20 bg-white">
        <div className="container mx-auto px-8 md:px-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 animate-fadeIn">
            The Technology Behind AnimaSentio
          </h2>
          <p className="text-lg leading-7 text-gray-700 mb-6 animate-fadeIn delay-100">
            At the heart of AnimaSentio lies cutting-edge AI and
            computer vision technologies. We integrate Unreal Engine’s advanced
            animation tools with Convai and NVIDIA platforms like ACE and NIMs to create
            digital humans capable of realistic human-like interactions.
          </p>
          <p className="text-lg leading-7 text-gray-700 mb-6 animate-fadeIn delay-200">
            These virtual beings see and hear users, processing their speech
            and facial expressions in real-time. Data collected from video,
            audio, and text is processed by AI models like NVIDIA NeMo and
            Elevenlabs for natural conversational responses.
          </p>
          <p className="text-lg leading-7 text-gray-700 animate-fadeIn delay-300">
            We prioritize privacy by ensuring no sensitive or personal data is
            stored. Our AI discourages sharing of confidential information, and
            all data is securely discarded before storage.
          </p>
        </div>
      </section>

      {/* Research Phases Section */}
      {/* Research Phases Section */}
      <section id="Phases" className="py-20">
        <div className="container mx-auto px-8 md:px-16">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12 animate-fadeIn">
            Research Phases
          </h2>
          <div className="space-y-8">
            {/* Phase 1 */}
            <div className="flex flex-col items-start gap-4 animate-fadeIn delay-100">
              <span className="text-2xl font-bold text-gray-800">Phase 1</span>
              <p className="text-gray-700">
                In this phase, we developed the emotional and empathic response
                system for our digital humans using Unreal Engine 5, enabling
                them to react to users emotions.
              </p>
            </div>

            {/* Phase 2 */}
            <div className="flex flex-col items-start gap-4 animate-fadeIn delay-200">
              <span className="text-2xl font-bold text-gray-800">Phase 2</span>
              <p className="text-gray-700">
                This phase integrates morph targets (facial, head, eye
                movements) with computer vision algorithms. OpenCV helps the
                digital human adjust its gaze and expressions based on user
                positioning.
              </p>
            </div>

            {/* Phase 3 */}
            <div className="flex flex-col items-start gap-4 animate-fadeIn delay-300">
              <span className="text-2xl font-bold text-gray-800">Phase 3</span>
              <p className="text-gray-700">
                We are working on automating animations triggered by real-time
                computer vision. When a user moves or changes expression, the
                digital human responds dynamically.
              </p>
            </div>

            {/* Phase 4 */}
            <div className="flex flex-col items-start gap-4 animate-fadeIn delay-400">
              <span className="text-2xl font-bold text-gray-800">Phase 4</span>
              <p className="text-gray-700">
                AI-generated voiceovers will be integrated for fluid
                conversations. By analyzing speech patterns, the system will
                generate appropriate, context-driven dialogue, while NVIDIA ACE
                will sync facial movements to speech.
              </p>
            </div>

            {/* Phase 5 */}
            <div className="flex flex-col items-start gap-4 animate-fadeIn delay-500">
              <span className="text-2xl font-bold text-gray-800">Phase 5</span>
              <p className="text-gray-700">
                By incorporating a conversational AI model like GPT, we aim to
                create real-time interactive dialogues, where users can ask the
                digital human questions and receive intelligent, context-aware
                responses.
              </p>
            </div>

            {/* Phase 6 */}
            <div className="flex flex-col items-start gap-4 animate-fadeIn delay-700">
              <span className="text-2xl font-bold text-gray-800">Phase 6</span>
              <p className="text-gray-700">
                Plans for future development include extending the scope of
                interactive learning and expanding digital human capabilities
                for use in different sectors, including healthcare and
                education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section
        id="Team"
        className="py-20 bg-gradient-to-b from-pink-50 to-purple-50"
      >
        <div className="container mx-auto px-8 md:px-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 animate-fadeIn">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="p-6 bg-white rounded-lg shadow-md transform transition duration-300 hover:scale-105 animate-fadeIn delay-100">
              <div className="flex flex-col items-center">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage
                    src="/images/jeasy-avatar.jpg"
                    alt="Jeasy Sehgal"
                  />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Jeasy Sehgal
                </h3>
                <p className="text-gray-500 mb-2">Principal Investigator</p>
                <p className="text-sm text-gray-700">
                  Professor of Practice at Creative Media Industries Institute,
                  Georgia State University
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="p-6 bg-white rounded-lg shadow-md transform transition duration-300 hover:scale-105 animate-fadeIn delay-200">
              <div className="flex flex-col items-center">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage
                    src="/images/puneet-avatar.png"
                    alt="Puneet Bajaj"
                  />
                  <AvatarFallback>PB</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Puneet Bajaj
                </h3>
                <p className="text-gray-500 mb-2">Research Assistant</p>
                <p className="text-sm text-gray-700">
                  Creative Media Industries Institute, Georgia State University
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="p-6 bg-white rounded-lg shadow-md transform transition duration-300 hover:scale-105 animate-fadeIn delay-300">
              <div className="flex flex-col items-center">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage
                    src="/images/nick.png"
                    alt="Nicolas Salazar"
                  />
                  <AvatarFallback>NS</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Nicolas Salazar
                </h3>
                <p className="text-gray-500 mb-2">Research Assistant</p>
                <p className="text-sm text-gray-700">
                  Georgia State University
                </p>
              </div>
            </div>
            {/* Team Member 4 */}
            <div className="p-6 bg-white rounded-lg shadow-md transform transition duration-300 hover:scale-105 animate-fadeIn delay-300">
              <div className="flex flex-col items-center">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage
                    src="/images/elias.jpeg"
                    alt="Elias Treadway"
                  />
                  <AvatarFallback>ET</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Elias Treadway
                </h3>
                <p className="text-gray-500 mb-2">Research Assistant</p>
                <p className="text-sm text-gray-700">
                  Creative Media Industries Institute, Georgia State University
                </p>
              </div>
            </div>
            {/* Team Member 5 */}
            <div className="p-6 bg-white rounded-lg shadow-md transform transition duration-300 hover:scale-105 animate-fadeIn delay-300">
              <div className="flex flex-col items-center">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage
                    src="/images/nicolas-avatar.jpg"
                    alt="Troy"
                  />
                  <AvatarFallback>T</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Troy
                </h3>
                <p className="text-gray-500 mb-2">Research Assistant</p>
                <p className="text-sm text-gray-700">
                  Georgia State University
                </p>
              </div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md transform transition duration-300 hover:scale-105 animate-fadeIn delay-300">
              <div className="flex flex-col items-center">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage
                    src="/images/Taylor.jpeg"
                    alt="Troy"
                  />
                  <AvatarFallback>TM</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Taylor Middleton
                </h3>
                <p className="text-gray-500 mb-2">Research Assistant</p>
                <p className="text-sm text-gray-700">
                  Georgia State University
                </p>
              </div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md transform transition duration-300 hover:scale-105 animate-fadeIn delay-300">
              <div className="flex flex-col items-center">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage
                    src="/images/kevin.jpg"
                    alt="Kevin Gallardo"
                  />
                  <AvatarFallback>T</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Kevin Gallardo
                </h3>
                <p className="text-gray-500 mb-2">Graduate Research Assistant</p>
                <p className="text-sm text-gray-700">
                CHAI center DoD center
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact and Future Goals Section */}
      <section id="Impact" className="py-20 bg-white">
        <div className="container mx-auto px-8 md:px-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 animate-fadeIn">
            Impact and Future Goals
          </h2>
          <p className="text-lg leading-7 text-gray-700 mb-6 animate-fadeIn delay-100">
            AnimaSentio is set to revolutionize how education is
            delivered by providing personalized, immersive learning experiences.
            We aim to enhance user engagement and knowledge retention,
            particularly in museum settings, with real-time AI-driven
            conversations.
          </p>
          <p className="text-lg leading-7 text-gray-700 mb-6 animate-fadeIn delay-200">
            Looking to the future, we plan to expand the library of digital
            historical figures, partner with museums, and explore additional
            applications in sectors such as healthcare, digital therapy, and
            customer service.
          </p>
          <p className="text-lg leading-7 text-gray-700 animate-fadeIn delay-300">
            We aim to push the boundaries of virtual human interaction, bringing
            this technology to new environments and sectors, making learning and
            customer interactions more engaging and meaningful.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <ContactForm />
    </main>
  );
}
