import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption } from "@/components/ui/table";

const datasetSample = [
  { index: 0, count: 3, hate_speech: 0, offensive_language: 0, neither: 3, class: 2, tweet: "!!! RT @mayasolovely: As a woman you shouldn't..." },
  { index: 1, count: 3, hate_speech: 0, offensive_language: 3, neither: 0, class: 1, tweet: "!!!!! RT @mleew17: boy dats cold...tyga dwn ba..." },
  { index: 2, count: 3, hate_speech: 0, offensive_language: 3, neither: 0, class: 1, tweet: "!!!!!!! RT @UrKindOfBrand Dawg!!!! RT @80sbaby..." },
  { index: 3, count: 3, hate_speech: 0, offensive_language: 2, neither: 1, class: 1, tweet: "!!!!!!!!! RT @C_G_Anderson: @viva_based she lo..." },
  { index: 4, count: 6, hate_speech: 0, offensive_language: 6, neither: 0, class: 1, tweet: "!!!!!!!!!!!!! RT @ShenikaRoberts: The shit you..." },
];

const classDistribution = [
    { name: "Offensive Language", count: 19190, percentage: 77.43 }, // Corrected based on notebook/user text (originally Hate Speech)
    { name: "Neither", count: 4163, percentage: 16.80 }, // Corrected (originally Offensive Language)
    { name: "Hate Speech", count: 1430, percentage: 5.77 }, // Corrected (originally Neither)
];

export default function DatasetSection() {
  return (
    <section id="dataset" className="section-card scroll-mt-20">
      <CardHeader>
        <CardTitle className="section-title">2. Dataset</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          The dataset was collected from{' '}
          <a href="https://www.kaggle.com/datasets/mrmorj/hate-speech-and-offensive-language-dataset" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">
            Kaggle
          </a>. It contains 24,783 samples and 7 columns.
        </p>

        <h3 className="subsection-title">2.1. Overview of the Dataset</h3>
        <div className="overflow-x-auto rounded-md border">
           <Table>
            <TableCaption>Sample rows from the dataset.</TableCaption>
             <TableHeader>
               <TableRow>
                 <TableHead>Unnamed: 0</TableHead>
                 <TableHead>count</TableHead>
                 <TableHead>hate_speech</TableHead>
                 <TableHead>offensive_language</TableHead>
                 <TableHead>neither</TableHead>
                 <TableHead>class</TableHead>
                 <TableHead>tweet</TableHead>
               </TableRow>
             </TableHeader>
             <TableBody>
               {datasetSample.map((row) => (
                 <TableRow key={row.index}>
                   <TableCell>{row.index}</TableCell>
                   <TableCell>{row.count}</TableCell>
                   <TableCell>{row.hate_speech}</TableCell>
                   <TableCell>{row.offensive_language}</TableCell>
                   <TableCell>{row.neither}</TableCell>
                   <TableCell>{row.class}</TableCell>
                   <TableCell className="min-w-[200px] max-w-[300px] truncate">{row.tweet}</TableCell>
                 </TableRow>
               ))}
             </TableBody>
           </Table>
        </div>


        <h3 className="subsection-title">2.2. Description of Columns</h3>
        <ul className="list-disc space-y-2 pl-6">
            <li><code>Unnamed: 0</code>: Index column.</li>
            <li><code>count</code>: Number of CrowdFlower users who coded the tweet.</li>
            <li><code>hate_speech</code>: Number of users classifying the tweet as hate speech.</li>
            <li><code>offensive_language</code>: Number of users classifying the tweet as offensive language.</li>
            <li><code>neither</code>: Number of users classifying the tweet as neither.</li>
            <li><code>class</code>: Majority class label (0: Hate Speech, 1: Offensive Language, 2: Neither).</li>
            <li><code>tweet</code>: The text content of the tweet.</li>
        </ul>
         <p className="mt-4">There are no missing values in the dataset.</p>


        <h3 className="subsection-title">2.3. Distribution of Classes</h3>
         <div className="overflow-x-auto rounded-md border">
            <Table>
             <TableCaption>Distribution of target classes in the dataset.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Class Name</TableHead>
                  <TableHead>Class Count</TableHead>
                  <TableHead>Class Percentage</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {classDistribution.map((cls) => (
                  <TableRow key={cls.name}>
                    <TableCell>{cls.name}</TableCell>
                    <TableCell>{cls.count.toLocaleString()}</TableCell>
                    <TableCell>{cls.percentage.toFixed(2)}%</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
         </div>
        <p className="mt-4 text-muted-foreground">
           The dataset is highly imbalanced, with the 'Offensive Language' class being the majority.
        </p>
      </CardContent>
    </section>
  );
}
