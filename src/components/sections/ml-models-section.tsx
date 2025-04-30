import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption } from "@/components/ui/table";

const mlModelResults = [
  { model: "Logistic Regression", accuracy: 0.8550, precision: 0.8915, recall: 0.8550, f1: 0.8689 },
  { model: "Naive Bayes", accuracy: 0.8396, precision: 0.8827, recall: 0.8396, f1: 0.8570 },
  { model: "SVM", accuracy: 0.8465, precision: 0.8854, recall: 0.8465, f1: 0.8622 },
  { model: "Voting Ensemble", accuracy: 0.8687, precision: 0.8952, recall: 0.8687, f1: 0.8792 },
  { model: "XGBoost", accuracy: 0.8590, precision: 0.9028, recall: 0.8590, f1: 0.8740 },
];

// Sort by F1 score descending for display
const sortedMlResults = [...mlModelResults].sort((a, b) => b.f1 - a.f1);


export default function MLModelsSection() {
  return (
    <section id="ml-models" className="section-card scroll-mt-20">
      <CardHeader>
        <CardTitle className="section-title">4. Training and Evaluating Machine Learning Models</CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="subsection-title">4.1. Models Trained</h3>
        <p>The following machine learning models were trained on the preprocessed and oversampled training data:</p>
        <ul className="list-disc space-y-1 pl-6 mt-2">
          <li>Logistic Regression</li>
          <li>Multinomial Naive Bayes</li>
          <li>Support Vector Classifier (SVC) with a linear kernel</li>
          <li>Voting Classifier (soft voting ensemble of Logistic Regression, Naive Bayes, and SVM)</li>
          <li>XGBoost</li>
        </ul>

        <h3 className="subsection-title">4.2. Summary of Evaluation Metrics</h3>
        <p>The models were evaluated on the held-out test set. The performance metrics are summarized below:</p>
         <div className="mt-4 overflow-x-auto rounded-md border">
           <Table>
            <TableCaption>Evaluation metrics for Machine Learning models on the test set.</TableCaption>
             <TableHeader>
               <TableRow>
                 <TableHead>Model</TableHead>
                 <TableHead>Accuracy</TableHead>
                 <TableHead>Precision (Weighted)</TableHead>
                 <TableHead>Recall (Weighted)</TableHead>
                 <TableHead>F1 Score (Weighted)</TableHead>
               </TableRow>
             </TableHeader>
             <TableBody>
               {sortedMlResults.map((row) => (
                 <TableRow key={row.model}>
                   <TableCell className="font-medium">{row.model}</TableCell>
                   <TableCell>{row.accuracy.toFixed(4)}</TableCell>
                   <TableCell>{row.precision.toFixed(4)}</TableCell>
                   <TableCell>{row.recall.toFixed(4)}</TableCell>
                   <TableCell>{row.f1.toFixed(4)}</TableCell>
                 </TableRow>
               ))}
             </TableBody>
           </Table>
         </div>
        <p className="mt-4">
          Based on the F1 Score, the <strong>Voting Classifier</strong> performed the best among the machine learning models evaluated.
        </p>
      </CardContent>
    </section>
  );
}
