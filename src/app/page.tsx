import MotivationSection from '@/components/sections/motivation-section';
import DatasetSection from '@/components/sections/dataset-section';
import PreprocessingSection from '@/components/sections/preprocessing-section';
import MLModelsSection from '@/components/sections/ml-models-section';
import DLModelsSection from '@/components/sections/dl-models-section';
import InferenceSection from '@/components/sections/inference-section';
import ComparisonCharts from '@/components/sections/comparison-charts';

export default function Home() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <MotivationSection />
      <DatasetSection />
      <PreprocessingSection />
      <MLModelsSection />
      <DLModelsSection />
      <ComparisonCharts />
      <InferenceSection />
    </div>
  );
}
