import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption } from "@/components/ui/table";

const cleanedDataSample = [
  { class: 2, tweet: "!!! RT @mayasolovely: As a woman you shouldn't...", cleaned_tweet: "rt woman shouldnt complain clean hous amp man ..." },
  { class: 1, tweet: "!!!!! RT @mleew17: boy dats cold...tyga dwn ba...", cleaned_tweet: "rt boy dat coldtyga dwn bad cuffin dat hoe st ..." },
  { class: 1, tweet: "!!!!!!! RT @UrKindOfBrand Dawg!!!! RT @80sbaby...", cleaned_tweet: "rt dawg rt ever fuck bitch start cri confus shit" },
  { class: 1, tweet: "!!!!!!!!! RT @C_G_Anderson: @viva_based she lo...", cleaned_tweet: "rt look like tranni" },
  { class: 1, tweet: "!!!!!!!!!!!!! RT @ShenikaRoberts: The shit you...", cleaned_tweet: "rt shit hear might true might faker bitch told ya" },
];

const oversamplingData = [
    { class: 'Offensive Language (1)', before: 15352, after: 15352 },
    { class: 'Neither (2)', before: 3330, after: 15352 },
    { class: 'Hate Speech (0)', before: 1144, after: 15352 },
];


export default function PreprocessingSection() {
  return (
    <section id="preprocessing" className="section-card scroll-mt-20">
      <CardHeader>
        <CardTitle className="section-title">3. Data Preprocessing</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Several steps were performed to prepare the text data for modeling:</p>

        <h3 className="subsection-title">3.1. Text Cleaning</h3>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Lowercasing:</strong> Converted all text to lowercase.</li>
          <li><strong>Remove URLs:</strong> Removed web addresses (<code>http</code>, <code>https</code>, <code>www</code>).</li>
          <li><strong>Remove User Mentions:</strong> Removed Twitter handles (<code>@username</code>).</li>
          <li><strong>Remove Hashtag Symbols:</strong> Removed the <code>#</code> symbol, keeping the word.</li>
          <li><strong>Remove Numbers:</strong> Removed all digits.</li>
          <li><strong>Remove Punctuation/Special Characters:</strong> Removed non-alphanumeric characters (except spaces).</li>
          <li><strong>Remove Extra Whitespace:</strong> Normalized multiple spaces to single spaces and trimmed ends.</li>
        </ul>

        <h3 className="subsection-title">3.2. Stopword Removal and Stemming</h3>
         <ul className="list-disc space-y-2 pl-6">
            <li><strong>Stopword Removal:</strong> Removed common English words (e.g., "the", "is") using NLTK's list.</li>
            <li><strong>Stemming:</strong> Reduced words to their root form (e.g., "running" to "run") using NLTK's Porter Stemmer.</li>
         </ul>

        <p className="mt-4">After cleaning and removing unnecessary columns, the dataset looks like this:</p>
         <div className="mt-4 overflow-x-auto rounded-md border">
           <Table>
            <TableCaption>Sample data after cleaning and preprocessing.</TableCaption>
             <TableHeader>
               <TableRow>
                 <TableHead>class</TableHead>
                 <TableHead>tweet</TableHead>
                 <TableHead>cleaned_tweet</TableHead>
               </TableRow>
             </TableHeader>
             <TableBody>
               {cleanedDataSample.map((row, index) => (
                 <TableRow key={index}>
                   <TableCell>{row.class}</TableCell>
                   <TableCell className="max-w-[200px] truncate">{row.tweet}</TableCell>
                   <TableCell className="max-w-[250px] truncate">{row.cleaned_tweet}</TableCell>
                 </TableRow>
               ))}
             </TableBody>
           </Table>
        </div>

         <p className="mt-6">An 80-20 train-test split resulted in:</p>
         <ul className="list-disc space-y-1 pl-6">
             <li>Training Data Shape: (19,826 samples)</li>
             <li>Testing Data Shape: (4,957 samples)</li>
         </ul>

        <h3 className="subsection-title">3.3. Vectorization and Oversampling</h3>
         <ul className="list-disc space-y-2 pl-6">
             <li>
               <strong>Vectorization:</strong> Converted cleaned text into numerical features using <code>CountVectorizer</code> (bag-of-words) with a maximum of 5,000 features.
               <ul className="list-circle ml-6 mt-1 space-y-1">
                    <li>Training Data Vectorized Shape: (19,826, 5000)</li>
                    <li>Testing Data Vectorized Shape: (4,957, 5000)</li>
               </ul>
             </li>
              <li>
                <strong>Oversampling (Training Data Only):</strong> Addressed class imbalance by oversampling the minority classes (Hate Speech and Neither) in the training set using <code>RandomOverSampler</code> to match the majority class (Offensive Language).
             </li>
         </ul>
         <p className="mt-4">Class distribution in the training data before and after oversampling:</p>
           <div className="mt-2 overflow-x-auto rounded-md border">
             <Table>
                <TableCaption>Class counts before and after oversampling on the training data.</TableCaption>
                 <TableHeader>
                   <TableRow>
                      <TableHead>Class</TableHead>
                      <TableHead>Count Before Oversampling</TableHead>
                      <TableHead>Count After Oversampling</TableHead>
                   </TableRow>
                 </TableHeader>
                 <TableBody>
                    {oversamplingData.map((row) => (
                        <TableRow key={row.class}>
                           <TableCell>{row.class}</TableCell>
                           <TableCell>{row.before.toLocaleString()}</TableCell>
                           <TableCell>{row.after.toLocaleString()}</TableCell>
                        </TableRow>
                    ))}
                 </TableBody>
             </Table>
           </div>
      </CardContent>
    </section>
  );
}
