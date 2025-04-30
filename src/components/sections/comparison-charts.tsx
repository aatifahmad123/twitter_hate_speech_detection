'use client';

import * as React from 'react';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip
} from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"


const mlModelResults = [
  { model: "Logistic Regression", Accuracy: 0.8550, Precision: 0.8915, Recall: 0.8550, "F1 Score": 0.8689 },
  { model: "Naive Bayes", Accuracy: 0.8396, Precision: 0.8827, Recall: 0.8396, "F1 Score": 0.8570 },
  { model: "SVM", Accuracy: 0.8465, Precision: 0.8854, Recall: 0.8465, "F1 Score": 0.8622 },
  { model: "Voting Ensemble", Accuracy: 0.8687, Precision: 0.8952, Recall: 0.8687, "F1 Score": 0.8792 },
  { model: "XGBoost", Accuracy: 0.8590, Precision: 0.9028, Recall: 0.8590, "F1 Score": 0.8740 },
].sort((a, b) => b['F1 Score'] - a['F1 Score']); // Sort by F1 for better visualization

const dlModelResults = [
    { model: "CNN", Accuracy: 0.8545, Precision: 0.8582, Recall: 0.8545, "F1 Score": 0.8560 },
    { model: "GRU", Accuracy: 0.8570, Precision: 0.8543, Recall: 0.8570, "F1 Score": 0.8550 },
    { model: "LSTM", Accuracy: 0.8564, Precision: 0.8530, Recall: 0.8564, "F1 Score": 0.8545 },
].sort((a, b) => b['F1 Score'] - a['F1 Score']);


const chartConfig = {
  Accuracy: { label: "Accuracy", color: "hsl(var(--chart-1))" },
  Precision: { label: "Precision", color: "hsl(var(--chart-2))" },
  Recall: { label: "Recall", color: "hsl(var(--chart-3))" },
  "F1 Score": { label: "F1 Score", color: "hsl(var(--chart-4))" },
} satisfies ChartConfig


export default function ComparisonCharts() {
  return (
    <section id="comparison" className="section-card scroll-mt-20">
      <CardHeader>
        <CardTitle className="section-title">Model Performance Comparison</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        <div>
          <h3 className="subsection-title">Machine Learning Models Comparison</h3>
          <ChartContainer config={chartConfig} className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mlModelResults} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="model" tickLine={false} axisLine={false} tickMargin={8} />
                <YAxis tickLine={false} axisLine={false} tickMargin={8} domain={[0.8, 0.92]} tickFormatter={(value) => value.toFixed(2)} />
                 <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dot" />}
                 />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="Accuracy" fill="var(--color-Accuracy)" radius={4} />
                <Bar dataKey="Precision" fill="var(--color-Precision)" radius={4} />
                <Bar dataKey="Recall" fill="var(--color-Recall)" radius={4} />
                <Bar dataKey="F1 Score" fill="var(--color-F1 Score)" radius={4} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>

        <div>
          <h3 className="subsection-title">Deep Learning Models Comparison</h3>
           <ChartContainer config={chartConfig} className="h-[350px] w-full">
             <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dlModelResults} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                 <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="model" tickLine={false} axisLine={false} tickMargin={8}/>
                <YAxis tickLine={false} axisLine={false} tickMargin={8} domain={[0.84, 0.87]} tickFormatter={(value) => value.toFixed(3)} />
                 <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dot" />}
                 />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="Accuracy" fill="var(--color-Accuracy)" radius={4} />
                <Bar dataKey="Precision" fill="var(--color-Precision)" radius={4} />
                <Bar dataKey="Recall" fill="var(--color-Recall)" radius={4} />
                <Bar dataKey="F1 Score" fill="var(--color-F1 Score)" radius={4} />
               </BarChart>
             </ResponsiveContainer>
           </ChartContainer>
        </div>
      </CardContent>
    </section>
  );
}
