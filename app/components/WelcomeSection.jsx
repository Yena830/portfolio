"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Black_Ops_One } from "@next/font/google";
import Image from "next/image";

const blackOpsOne = Black_Ops_One({
  subsets: ["latin"],
  weight: ["400"],
});

const WelcomeSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const particles = [];
    const particleCount = 60;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.size = Math.random() * 3 + 1;
        this.opacity = Math.random() * 0.3 + 0.1;
        this.pulse = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulse += 0.02;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        const pulseSize = this.size + Math.sin(this.pulse) * 0.5;
        ctx.beginPath();
        ctx.arc(this.x, this.y, pulseSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      }
    }

    const initParticles = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // 绘制连接线
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.08 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const scrollToHero = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      const offsetTop = heroSection.offsetTop - 80; // 添加80px的偏移量
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 月亮背景图片 */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/moon.webp"
          alt="Moon Background"
          fill
          className="object-cover"
          priority
        />
        {/* 轻微遮罩保持背景清晰 */}
        <div className="absolute inset-0 bg-black/25" />
      </div>
      
      {/* 动态背景画布 */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-1"
        style={{ background: 'transparent' }}
      />
      
      {/* 轻微渐变遮罩保持背景清晰 */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#171516]/20 via-[#242122]/10 to-[#171516]/20 z-10" />
      
      {/* 主要内容 */}
      <div className="relative z-20 w-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8 w-full flex flex-col items-center"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white ${blackOpsOne.className} mb-6 text-center`}
          >
            <span className="text-transparent bg-clip-text bg-[#FFFFFF]">
            Hello, I'm Yueyue
            </span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center space-y-4"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-pink-100 font-light tracking-wide">
              Software Developer & AI Enthusiast
            </h2>
            
            
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mb-12 w-full flex justify-center"
        >
        </motion.div>

      </div>

      {/* 简洁的向下箭头 */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="cursor-pointer"
          onClick={scrollToHero}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-white group hover:text-pink-300 transition-colors duration-300"
          >
            <svg 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M7 10L12 15L17 10" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* 底部渐变遮罩 */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#171516] to-transparent z-10" />
    </section>
  );
};

export default WelcomeSection;
