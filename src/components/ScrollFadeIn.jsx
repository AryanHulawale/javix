import { useEffect, useRef, useState } from "react";

export const ScrollFadeIn = ({ children, delay = 0, as: Tag = "div", className = "", ...rest }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => setVisible(true), delay);
            obs.unobserve(node);
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref} className={`fade-up ${visible ? "in-view" : ""} ${className}`} {...rest}>
      {children}
    </Tag>
  );
};

export default ScrollFadeIn;