"use client";
import Spline from "@splinetool/react-spline";

export default function Spline3d() {
  return (
    <div className="w-full h-full relative">
      <Spline
        scene="https://prod.spline.design/JdYlzOjXULDWSwqw/scene.splinecode"
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
