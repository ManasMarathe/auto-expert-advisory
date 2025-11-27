import BaseLayout from "@/components/BaseLayout";
import Hero from "@/components/Hero";
import WhoAreWe from "@/components/WhoAreWe";

export default function Home() {
  return (
    <div className="mx-auto">
      <BaseLayout>
        <Hero />
        <WhoAreWe />
      </BaseLayout>
    </div>
  );
}
