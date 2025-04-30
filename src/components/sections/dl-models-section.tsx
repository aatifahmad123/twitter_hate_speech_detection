import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption } from "@/components/ui/table";

const dlModelResults = [
    { model: "CNN", accuracy: 0.8545, precision: 0.8582, recall: 0.8545, f1: 0.8560 },
    { model: "GRU", accuracy: 0.8570, precision: 0.8543, recall: 0.8570, f1: 0.8550 },
    { model: "LSTM", accuracy: 0.8564, precision: 0.8530, recall: 0.8564, f1: 0.8545 },
];

// Sort by F1 score descending for display
const sortedDlResults = [...dlModelResults].sort((a, b) => b.f1 - a.f1);


export default function DLModelsSection() {
  return (
    <section id="dl-models" className="section-card scroll-mt-20">
      <CardHeader>
        <CardTitle className="section-title">5. Preparing Dataset, Training and Evaluating Deep Learning Models</CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="subsection-title">5.1. Data Preprocessing for Deep Learning</h3>
        <p>Specific preprocessing steps were taken for the deep learning models:</p>
        <ul className="list-disc space-y-2 pl-6 mt-2">
            <li><strong>Oversampling:</strong> Applied <code>RandomOverSampler</code> to the raw text training data (<code>X_train</code>) and labels (<code>y_train</code>) before tokenization.</li>
            <li><strong>Tokenization:</strong> Split tweets into words, built a vocabulary, and assigned numerical indices (including special tokens for padding <code>&lt;pad&gt;</code> and unknown words <code>&lt;unk&gt;</code>).</li>
            <li><strong>GloVe Embeddings:</strong> Loaded pre-trained 100-dimensional GloVe word vectors (<code>glove.6B.100d.txt</code>) to create an embedding matrix for words present in the vocabulary. Embeddings were kept frozen during training.</li>
            <li><strong>Padding:</strong> Created a PyTorch <code>Dataset</code> to convert tweets into sequences of indices, padded to a maximum length of 50.</li>
            <li><strong>DataLoaders:</strong> Used PyTorch <code>DataLoader</code> to create batches for training (batch size 32, shuffled) and testing (batch size 32).</li>
        </ul>

        <h3 className="subsection-title">5.2. Models Trained</h3>
         <p>The following deep learning architectures were implemented and trained:</p>
        <ul className="list-disc space-y-2 pl-6 mt-2">
          <li>
            <strong>LSTM:</strong> Bidirectional LSTM model with one layer (hidden dimension 128), using the frozen GloVe embedding layer, dropout (0.3), and a final linear layer (256 units -> 3 classes).
          </li>
           <li>
            <strong>GRU:</strong> Similar architecture to the LSTM model, but utilizing Gated Recurrent Units (GRUs) instead of LSTMs.
          </li>
           <li>
            <strong>CNN:</strong> A 1D Convolutional Neural Network using the frozen GloVe embedding layer, followed by three convolutional layers (filter sizes 2, 3, 4; 100 filters each) with ReLU activation and max-pooling, dropout (0.3), and a final linear layer (300 units -> 3 classes).
          </li>
        </ul>

        <h3 className="subsection-title">5.3. Summary of Evaluation Metrics</h3>
         <p>The deep learning models were evaluated on the test set:</p>
         <div className="mt-4 overflow-x-auto rounded-md border">
           <Table>
            <TableCaption>Evaluation metrics for Deep Learning models on the test set.</TableCaption>
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
               {sortedDlResults.map((row) => (
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
      </CardContent>
    </section>
  );
}
