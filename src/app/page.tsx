import { Button } from "@/components/ui/button";
import { Component } from "./chart";
export default function Home() {
  return (
    <div>
      <h1 className="text-4xl">Hello World</h1>
      <Button>Click me</Button>
      <Component />
    </div>
  );
}
