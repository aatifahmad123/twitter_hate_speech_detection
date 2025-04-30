import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";


const inferenceExamples = [
    { tweet: "I hate this community, they are all terrible people", prediction: "Hate Speech (Class 0)"},
    { tweet: "This is just a bunch of nonsense words", prediction: "Offensive Language (Class 1)"},
    { tweet: "You are an amazing person, keep shining!", prediction: "Neither (Class 2)"},
];

export default function InferenceSection() {
  return (
    <section id="inference" className="section-card scroll-mt-20">
      <CardHeader>
        <CardTitle className="section-title">6. Inference and Conclusion</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          Comparing the results, the machine learning models, particularly the Voting Ensemble (F1 = 0.8792) and XGBoost (F1 = 0.8740), outperformed the deep learning models (LSTM, GRU, CNN with F1 scores around 0.85-0.86).
        </p>
         <p className="mt-4">
            Possible reasons for this include:
         </p>
          <ul className="list-disc space-y-1 pl-6 mt-2">
            <li><strong>Dataset Size:</strong> Deep learning models typically thrive on very large datasets, and this dataset (approx. 25k samples) might be relatively small for them to learn complex patterns effectively without overfitting.</li>
            <li><strong>Model Complexity:</strong> The DL architectures might have been overly complex for the given data.</li>
             <li><strong>Preprocessing:</strong> The text preprocessing pipeline was primarily designed and optimized based on traditional ML techniques.</li>
             <li><strong>Embeddings:</strong> Using frozen GloVe embeddings might have limited the DL models' ability to adapt to the specific nuances of the dataset's language compared to embeddings trained from scratch (which would require more data/time).</li>
             <li><strong>Training Configuration:</strong> Factors like the number of training epochs or learning rate might not have been optimal for the DL models.</li>
          </ul>

        <h3 className="subsection-title">6.1. Saving the Best Model</h3>
        <p>
          Given its superior performance, the <strong>Voting Classifier</strong> was chosen as the final model. The preprocessing steps (vectorizer using <code>CountVectorizer</code>, NLTK stopwords, Porter stemmer) were reapplied to the entire dataset intended for this model, and the trained classifier along with these preprocessing components were saved as <code>.pkl</code> files for easy loading and inference.
        </p>

        <h3 className="subsection-title">6.2. Final Inference Demo</h3>
        <p>
           The saved model and preprocessing tools were loaded to make predictions on new, unseen examples. The examples were preprocessed using the same pipeline before being fed to the classifier.
        </p>

        <Alert className="mt-6">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Demo Inference Results:</AlertTitle>
          <AlertDescription>
            <ul className="mt-2 space-y-3">
                {inferenceExamples.map((ex, index) => (
                    <li key={index} className="border-l-2 border-primary pl-3">
                        <p><strong>Tweet:</strong> "{ex.tweet}"</p>
                        <p><strong>Prediction:</strong> <span className="font-semibold">{ex.prediction}</span></p>
                    </li>
                ))}
            </ul>
          </AlertDescription>
        </Alert>
      </CardContent>
    </section>
  );
}
