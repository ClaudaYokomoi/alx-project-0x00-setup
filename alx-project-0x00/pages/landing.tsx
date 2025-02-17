import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button size="medium" shape="rounded-sm" styles="bg-blue-500 text-white p-2" />
<Button size="medium" shape="rounded-md" styles="bg-blue-500 text-white p-2" />
<Button size="medium" shape="rounded-full" styles="bg-blue-500 text-white p-2" />
<Button size="medium" shape="rounded-lg" styles="bg-blue-500 text-white p-2" />

    </div>
  );
};

export default Landing;
