import Card from "@/components/Card"; // Corrected the import path
import Button from "@/components/Button"; // Add the Button component import

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      
      {/* Render multiple Card components */}
      <Card />
      <Card />
      <Card />
      
      {/* Render multiple Button components with different props */}
      <Button title="Small Button" size="small" shape="rounded-sm" />
      <Button title="Medium Button" size="medium" shape="rounded-md" />
      <Button title="Large Button" size="large" shape="rounded-full" />
    </div>
  );
};

export default Landing;
