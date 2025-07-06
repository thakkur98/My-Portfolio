import { useEffect, useState } from "react";
import Head from "next/head";
import styled, { keyframes } from "styled-components";
import MainDashboard from "@/MainDashboard";
import { Geist, Geist_Mono } from "next/font/google";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Spinner Animation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Loader Styles
const LoaderWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: #f5f6fa;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = styled.div`
  border: 6px solid #e0e0e0;
  border-top: 6px solid #4f46e5;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite;
`;

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Mohit Bisht | Portfolio</title>
      </Head>
      {isLoading ? (
        <LoaderWrapper>
          <Spinner />
        </LoaderWrapper>
      ) : (
        <MainDashboard />
      )}
    </>
  );
}
