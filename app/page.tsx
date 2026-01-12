import BaseLayout from "@/components/BaseLayout";
import CoreServices from "@/components/CoreServices";
import Feedback from "@/components/Feedback";
import Hero from "@/components/Hero";
import KeyBenefits from "@/components/KeyBenefits";
import Membership from "@/components/Membership";
import WhoAreWe from "@/components/WhoAreWe";

export default function Home() {
  return (
    <div className="mx-auto">
      <BaseLayout>
        <Hero />
        <WhoAreWe />
        <CoreServices />
        <KeyBenefits />
        <Membership />
        <Feedback />
      </BaseLayout>
    </div>
  );
}
