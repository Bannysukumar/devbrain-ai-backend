# ÉCLAT 2K26 - Animation Guide

## Overview
The ÉCLAT 2K26 website features comprehensive scroll and click animations using Framer Motion, creating a premium, interactive user experience.

## Global Animations (globals.css)

### Scroll-Triggered Animations
- **slideDown**: Elements fade in and slide down on entrance
- **slideUp**: Elements fade in and slide up on entrance
- **glowPulse**: Cyan glow pulse effect on elements
- **glowPulsePink**: Pink glow pulse effect
- **glowPulsePurple**: Purple glow pulse effect
- **float**: Floating animation for icons/elements
- **gradientFlow**: Animated gradient background flow

### CSS Classes
- `.glass` / `.glass-dark`: Glassmorphism with backdrop blur
- `.button-glow`: Cyan glow on button hover
- `.button-glow-pink`: Pink glow on button hover
- `.button-glow-purple`: Purple glow on button hover
- `.neon-text-*`: Neon text effects with drop shadows

## Component-Level Animations

### Hero Component
- **Title animation**: Staggered fade-in of title and subtitle
- **Gradient orbs**: Floating animated background elements
- **CTA buttons**: Scale and lift on hover with glow effect
- **Stats cards**: Hover elevation with smooth transitions
- **Scroll indicator**: Continuous bouncing animation

### Navbar Component
- **Links**: Smooth underline animation on hover
- **Active state**: Gradient transition between filter states
- **Sticky effect**: Smooth glass effect appearance on scroll

### Events Component
- **Tab buttons**: Scale and glow on hover, slide animation on click
- **Event cards**: Gradient border effect on hover, lift animation
- **Grid animation**: Staggered entrance when filter changes

### About Component
- **Highlight cards**: Gradient border effects, icon rotation on hover
- **Icon scaling**: 1.15x scale with 5-degree rotation on hover
- **Card lift**: -8px Y-axis translation on hover

### FamilyWall Component
- **Filter buttons**: Staggered entrance animation, scale on hover
- **People cards**: Individual scale and lift animations
- **Image zoom**: 1.08x scale on hover with smooth transition

### Gallery Component
- **Filter buttons**: Scale and glow animations
- **Gallery items**: Gradient borders, scale transforms on hover
- **Image overlay**: Smooth opacity and scale transitions

### Messages Component
- **Message cards**: Staggered entrance with -8px lift on hover
- **Quote mark**: Scale and opacity animation on hover
- **Author avatar**: Scale on hover
- **CTA button**: Scale and lift with tap feedback

### Contact Component
- **Contact cards**: Gradient border effects, icon rotation
- **Map placeholder**: Floating icon animation
- **Form cards**: Gradient borders, button animations
- **CTA buttons**: Full scale and lift effects

### Credits Component
- **Section titles**: Neon glow text shadow animation
- **Person cards**: Staggered scale entrance with hover effects
- **Heart emoji**: Pulsing scale animation
- **Closing message**: Scale and fade entrance

### Modal Component
- **Backdrop**: Smooth fade in/out
- **Modal body**: Spring animation with scale and Y translation
- **Close button**: Rotate on hover with tap scaling
- **Content**: Delayed fade-in for better sequencing

## Interaction Patterns

### On Scroll (whileInView)
- Elements animate into view when they appear in viewport
- `margin: '-100px'` triggers animations before fully visible
- `once: true` ensures animations run only on first scroll
- Creates cascading effect with staggered children

### On Hover (whileHover)
- Buttons scale up 1.05-1.08x
- Cards lift up 4-8px
- Icons rotate or scale
- Gradient borders fade in
- Glow effects activate

### On Click (whileTap)
- Buttons scale down to 0.95x for tactile feedback
- Forms and inputs show click response
- Modals use spring animations for natural feel

### On Filter Change
- Grid re-animates with new filtered items
- Staggered entrance for smooth transitions
- Previous items fade out

## Performance Optimizations
- Animations use `transition={{ once: true }}` to prevent re-triggers
- GPU-accelerated transforms (`scale`, `y`, `opacity`)
- Viewport margin prevents unnecessary animations outside view
- Stagger children with small delays (0.04-0.1s) for visual rhythm

## Browser Support
- Modern browsers with Framer Motion support
- Graceful degradation for older browsers
- Mobile-optimized with reduced animation complexity

## Animation Timing Values
- Fast transitions: 0.2-0.3s
- Standard transitions: 0.4-0.6s
- Slow transitions: 0.8s
- Stagger delays: 0.04-0.1s between children
- Spring damping: 25, stiffness: 300 (bouncy feel)

## Future Enhancement Ideas
- Page transition animations
- Scroll-linked animations (progress bars)
- Parallax effects on hero section
- Animated counters for statistics
- Morphing shapes and SVG animations
