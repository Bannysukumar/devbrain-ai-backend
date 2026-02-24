import React from 'react';

interface SectionWrapperProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
}

export function SectionWrapper({
  id,
  title,
  children,
  className = '',
  titleClassName = ''
}: SectionWrapperProps) {
  return (
    <section id={id} className={`py-20 px-4 md:px-8 lg:px-16 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-center ${titleClassName}`}
        >
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
