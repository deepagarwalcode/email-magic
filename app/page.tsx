import ExpenseSection from "@/components/app/Expense/ExpenseSection";
import Hero from "@/components/app/Hero";
import LearnSection from "@/components/app/Learn/LearnSection";
import Logos from "@/components/app/Logos";
import Metrics from "@/components/app/Metrics/Metrics";
import Navbar from "@/components/app/Navbar";
import ProblemSection from "@/components/app/Problems/ProblemSection";
import TargetAudience from "@/components/app/TargetAudience";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <div>
        <Hero />
      </div>
      <Logos />
      <Metrics />
      <ProblemSection />

      {/* its also expensive with calculator  */}
      <ExpenseSection />

      {/* who is this for?  */}
      <TargetAudience />


      {/* what you will learn  */}
      <LearnSection />

      {/* module breakdown */}

      {/* podcast  */}

      {/* faq  */}

      {/* footer  */}
    </div>
  );
}
