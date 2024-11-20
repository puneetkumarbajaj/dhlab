"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Linkedin, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AnimaSentioLab() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  return (
    <div className="flex flex-col min-h-screen scroll-smooth">
      <header className="bg-gray-100 py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center">
            <div className="text-2xl font-bold">AnimaSentio</div>
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
            <div
              className={`${
                isMenuOpen ? "block" : "hidden"
              } md:block absolute md:relative top-full left-0 right-0 bg-gray-100 md:bg-transparent p-4 md:p-0 mt-2 md:mt-0`}
            >
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                {["About", "Features", "Research", "Team"].map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="hover:underline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to AnimaSentio
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Revolutionizing Interactive Education with Virtual Experiences
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <Link href="#research">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Learn More
                </Button>
              </Link>
              <Link href="#demo">
                <Button size="lg" className="w-full sm:w-auto">
                  <Play className="mr-2 h-4 w-4" />
                  See a Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              What is AnimaSentio?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="mb-4">
                  AnimaSentio is an innovative research project focused on
                  transforming the way we learn through interactive, AI-driven
                  virtual human simulations. It integrates technologies like
                  computer vision and emotion-detection algorithms to create
                  digital human characters capable of engaging with users in
                  real-time.
                </p>
                <p className="mb-4">
                  Led by Professor Jeasy Sehgal at Georgia State University, it
                  focuses on bringing history to life by enabling interactions
                  with 3D models of historical figures powered by conversational
                  AI.
                </p>
                <p>
                  Example: Learning about the civil rights movement through
                  interaction with a digital Dr. Martin Luther King Jr., or
                  exploring ancient Egypt with a digital Cleopatra.
                </p>
              </div>
              <div className="bg-gray-200 p-6 rounded-lg mt-8 md:mt-0">
                <h3 className="text-xl font-semibold mb-4">Project Goals</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Create personalized educational experiences for museum
                    visitors
                  </li>
                  <li>
                    Develop digital humans that respond to emotions, facial
                    expressions, and voices
                  </li>
                  <li>
                    Enhance engagement and knowledge retention through immersive
                    interactions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Key Features
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Realistic Virtual Human Animations</CardTitle>
                </CardHeader>
                <CardContent>
                  Virtual humans with lifelike animations and emotions powered
                  by Unreal Engine 5 and NVIDIA ACE.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Emotion Detection</CardTitle>
                </CardHeader>
                <CardContent>
                  AI-powered emotion detection to tailor interactions based on
                  user mood and tone, enhancing immersion.
                </CardContent>
              </Card>
              <Card className="md:col-span-2 lg:col-span-1">
                <CardHeader>
                  <CardTitle>Conversational AI</CardTitle>
                </CardHeader>
                <CardContent>
                  Users can interact with virtual historical figures, ask
                  questions, and receive personalized responses.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Video Showcase Section */}
        <section id="demo" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              See AnimaSentio in Action
            </h2>
            <div
              className="relative"
              style={{ paddingBottom: "56.25%", height: 0 }}
            >
              <iframe
                src="https://www.youtube.com/embed/BiqYFI3RoUM"
                title="AnimaSentio - Digital Human Research - Prof Sardar Jeasy Sehgal"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Research & Technology Section */}
        <section id="research" className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              The Technology Behind AnimaSentio
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="mb-4">
                  The project integrates cutting-edge AI and computer vision
                  technologies. Virtual humans are powered by Unreal
                  Engine&apos;s animation tools, Convai, and NVIDIA platforms
                  like ACE and NIMs for real-time interactions.
                </p>
                <p className="mb-4">
                  These beings are able to see and hear users, processing speech
                  and facial expressions with AI models like NVIDIA NeMo and
                  Elevenlabs for natural conversation.
                </p>
                <p>
                  Privacy is a priority, with all data securely discarded after
                  processing.
                </p>
              </div>
              <div className="mt-8 md:mt-0">
                <h3 className="text-xl font-semibold mb-4">Research Phases</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    Developed emotional and empathic response systems using
                    Unreal Engine 5.
                  </li>
                  <li>
                    Integrated facial, head, and eye movements with computer
                    vision algorithms (using OpenCV) to adjust gaze and
                    expressions.
                  </li>
                  <li>
                    Automating animations based on real-time computer
                    vision—digital humans respond dynamically to user movement
                    and expressions.
                  </li>
                  <li>
                    Integrated AI-generated voiceovers for fluid conversations
                    with facial animation synchronization (powered by NVIDIA
                    ACE).
                  </li>
                  <li>
                    Use of GPT-based conversational AI to allow real-time
                    interactive dialogues with users.
                  </li>
                  <li>
                    Expansion into other sectors (e.g., healthcare, education)
                    and the development of new interactive learning experiences.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Photo Renders Showcase */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Project Renders
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <Image
                  key={i}
                  src={`/images/image${i}.png`}
                  alt={`Virtual Human Render ${i}`}
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md w-full h-auto"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section
          id="team"
          className="bg-gradient-to-b from-gray-100 to-white py-20"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-purple-600">
              Meet the Team
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Jeasy Sehgal",
                  role: "Principal Investigator",
                  affiliation:
                    "Professor of Practice at Creative Media Industries Institute, Georgia State University",
                  image: "/images/jeasy-avatar.jpg",
                  linkedin: "https://www.linkedin.com/in/jeasysehgal/",
                },
                {
                  name: "Puneet Bajaj",
                  role: "Research Assistant",
                  affiliation:
                    "Creative Media Industries Institute, Georgia State University",
                  image: "/images/puneet-avatar.png",
                  linkedin: "https://www.linkedin.com/in/puneetkumarbajaj/",
                },
                {
                  name: "Nicolas Salazar",
                  role: "Research Assistant",
                  affiliation: "Georgia State University",
                  image: "/images/nick.png",
                  linkedin: "https://www.linkedin.com/in/nicolassalazar-pro/",
                },
                {
                  name: "Elias Treadway",
                  role: "Research Assistant",
                  affiliation:
                    "Creative Media Industries Institute, Georgia State University",
                  image: "/images/elias.jpeg",
                  linkedin:
                    "https://www.linkedin.com/in/elias-treadway-41293b1b5/",
                },
                {
                  name: "Troy Brown",
                  role: "Research Assistant",
                  affiliation: "Georgia State University",
                  image:
                    "/images/troy.jpg",
                  linkedin: "https://www.linkedin.com/in/troy-brown-a58b23123/",
                },
                {
                  name: "Kevin Gallardo",
                  role: "Research Assistant",
                  affiliation: "Georgia State University",
                  image: "/images/kevin.jpg",
                  linkedin:
                    "https://www.linkedin.com/in/kevin-gallardo-1a079b1b6/",
                },
                {
                  name: "Vaishnavi Adepu",
                  role: "Research Assistant",
                  affiliation: "Georgia State University",
                  image: "/images/navi.jpg",
                  linkedin: "https://www.linkedin.com/in/vaishnavi-adepu444/",
                },
              ].map((member, index) => (
                <Card
                  key={index}
                  className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <CardHeader>
                    <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                      <Image
                        src={member.image}
                        alt={`Avatar of ${member.name}`}
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <CardTitle className="text-center text-purple-600">
                      {member.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-center">{member.role}</p>
                    <p className="text-sm text-gray-600 text-center mb-4">
                      {member.affiliation}
                    </p>
                    <div className="flex justify-center">
                      <Link
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center space-x-2"
                        >
                          <Linkedin className="w-4 h-4" />
                          <span>LinkedIn</span>
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Impact and Future Goals Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Impact and Future Goals
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="mb-4">
                  AnimaSentio aims to revolutionize education with personalized,
                  immersive learning experiences. The project seeks to enhance
                  user engagement and knowledge retention in museums with
                  AI-driven, real-time conversations.
                </p>
                <p>
                  Future plans include expanding the library of historical
                  figures, partnering with museums, and exploring applications
                  in healthcare, digital therapy, and customer service.
                </p>
              </div>
              <div className="mt-8 md:mt-0">
                <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                <p>
                  The goal is to make learning and customer interactions more
                  engaging and meaningful by extending virtual human
                  capabilities to new sectors.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">AnimaSentio</h3>
              <p className="text-sm">Revolutionizing Interactive Education</p>
            </div>
            <div className="flex space-x-4">
              <Link href="mailto:jsingh31@gsu.edu" className="hover:underline">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            © {new Date().getFullYear()} AnimaSentio Research Lab. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
