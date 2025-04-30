# HateCheck: Twitter Hate Speech Detection

![Twitter](/assets/icons8-twitter-bird.gif)

![Python](https://img.shields.io/badge/Scikit--Learn%2C%20PyTorch-blue)
![Next.js](https://img.shields.io/badge/Next.js-lightgrey)

This project promotes a safer and more respectful online environment by detecting harmful content on social media platforms like Twitter.

**Live**: [twitter-hate-speech-detection.vercel.app](https://twitter-hate-speech-detection.vercel.app/)  
**Dataset Source**: [Kaggle - Hate Speech and Offensive Language Dataset](https://www.kaggle.com/datasets/fizzbuzz/hate-speech-offensive-language-dataset)

---

## Motivation

Twitter empowers free speech, but this freedom is sometimes misused to spread hate or offensive content. This project aims to detect such tweets using supervised learning techniques and modern NLP preprocessing, fostering healthier online conversations.

---

## Dataset

- **Total Samples**: 24,783 tweets
- **Columns**: `count`, `hate_speech`, `offensive_language`, `neither`, `class`, `tweet`
- **Class Distribution**:
  - Offensive Language (1): 77.43%
  - Neither (2): 16.80%
  - Hate Speech (0): 5.77%

---

## Preprocessing Steps

- Lowercasing
- Removal of URLs, mentions, hashtags, numbers, and punctuation
- Stopword removal using NLTK
- Stemming using PorterStemmer
- Tokenization and padding for deep learning
- Vectorization using `CountVectorizer` (for ML models)

---

## Handling Imbalance

Used `RandomOverSampler` from `imblearn` to balance the class distribution in the training set.

---

## Models Trained

### Machine Learning Models
| Model               | Accuracy | Precision | Recall | F1 Score |
|--------------------|----------|-----------|--------|----------|
| **Voting Ensemble**| 0.8687   | 0.8952    | 0.8687 | 0.8792   |
| XGBoost            | 0.8590   | 0.9028    | 0.8590 | 0.8740   |
| Logistic Regression| 0.8550   | 0.8915    | 0.8550 | 0.8689   |
| SVM                | 0.8465   | 0.8854    | 0.8465 | 0.8622   |
| Naive Bayes        | 0.8396   | 0.8827    | 0.8396 | 0.8570   |

### Deep Learning Models
| Model   | Accuracy | Precision | Recall | F1 Score |
|---------|----------|-----------|--------|----------|
| CNN     | 0.8545   | 0.8582    | 0.8545 | 0.8560   |
| GRU     | 0.8570   | 0.8543    | 0.8570 | 0.8550   |
| LSTM    | 0.8564   | 0.8530    | 0.8564 | 0.8545   |

---

## Final Model

The **Voting Ensemble** (Logistic Regression + Naive Bayes + SVM) was chosen for deployment due to its superior performance on the test set.

- Trained using `scikit-learn`
- Vectorization with `CountVectorizer`
- Exported using `joblib` for easy inference

---

## Example Predictions

```txt
Tweet: "I hate this community, they are all terrible people"
→ Prediction: Hate Speech (Class 0)

Tweet: "This is just a bunch of nonsense words"
→ Prediction: Offensive Language (Class 1)

Tweet: "You are an amazing person, keep shining!"
→ Prediction: Neither (Class 2)
```

---

## Frontend

- Built with **Next.js 15** and **Turbopack**
- Deployed on **Vercel**
- Static informational site showcasing the model’s performance and methodology

---

## How to Run Locally

```bash
git clone https://github.com/aatifahmad123/twitter_hate_speech_detection.git
cd twitter_hate_speech_detection
npm install
npm run dev
```

Visit [http://localhost:9002](http://localhost:9002) in your browser.

---

## Tech Stack

- Python (Scikit-Learn, PyTorch, NLTK)
- JavaScript (Next.js, Node.js)
- GloVe Embeddings (100d)
- Vercel for deployment

---

## Author

**Aatif Ahmad**  
[GitHub](https://github.com/aatifahmad123)
