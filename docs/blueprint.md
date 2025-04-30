# **App Name**: HateCheck

## Core Features:

- Content Display: Display the project description, results, and graphs from the original notebook in a clear, single-page layout.
- Navigation: Implement a 'Back to Top' button for easy navigation on the single-page site.
- Attribution & Source: Include a link to the GitHub repository (https://github.com/aatifahmad123/twitter_hate_speech_detection) and the project creator's name (Aatif Ahmad).

## Style Guidelines:

- Primary color: A clean, light gray (#F5F5F5) for the background to provide a professional feel.
- Secondary color: A darker shade of gray (#333333) for text to ensure readability.
- Accent: A muted blue (#4285F4) as a primary accent color for links, buttons, and interactive elements.
- Use a single-page layout with clear sections for each part of the project (Motivation, Dataset, Preprocessing, Models, Results, etc.).
- Incorporate the old Twitter logo (bird icon) subtly in the header or footer to pay homage to the project's origin.
- Subtle scrolling animations when navigating to different sections of the single-page layout.

## Original User Request:
Hate Speech Detection on Twitter

Source code for the project is available at: https://github.com/aatifahmad123/twitter_hate_speech_detection/blob/main/Hate_Speech_Detection_on_Twitter.ipynb

    Motivation: People on twitter are free to tweet anything which is great as a social media platform encouraging freedom of speech but the platform has been notorious too for the fact that tweets are often based on hate and offensive language. This project was an attempt to identify tweets that have the element of hate and offence in them so that they can be turned down automatically to keep a vibrant, decent social media environment.

    Dataset: The dataset was collected from https://www.kaggle.com/datasets/mrmorj/hate-speech-and-offensive-language-dataset. It has 24,783 samples and 7 columns. The list of columnns is ['Unnamed: 0', 'count', 'hate_speech', 'offensive_language', 'neither', 'class', 'tweet'].

2.1. Overview of the dataset:

Unnamed: 0 	count 	hate_speech 	offensive_language 	neither 	class 	tweet
0 	0 	3 	0 	0 	3 	2 	!!! RT @mayasolovely: As a woman you shouldn't...
1 	1 	3 	0 	3 	0 	1 	!!!!! RT @mleew17: boy dats cold...tyga dwn ba...
2 	2 	3 	0 	3 	0 	1 	!!!!!!! RT @UrKindOfBrand Dawg!!!! RT @80sbaby...
3 	3 	3 	0 	2 	1 	1 	!!!!!!!!! RT @C_G_Anderson: @viva_based she lo...
4 	4 	6 	0 	6 	0 	1 	!!!!!!!!!!!!! RT @ShenikaRoberts: The shit you...

2.2. Description of Columns:

a. Unnamed: 0 - This is merely an index.
b. count: number of CrowdFlower users who coded each tweet (min is 3, sometimes more users coded a tweet when no conclusion was made)
c. hate_speech: number of CF users who judged the tweet to be hate speech
d. offensive_language: number of CF users who judged the tweet to be offensive
e. neither: number of CF users who judged the tweet to be neither offensive nor non-offensive
f. class: class label for majority of CF users. 0 - hate speech 1 - offensive language 2 - neither
g. tweet: text tweet

There are no missing values luckily (making job easier!).

2.3. Distribution of classes:

The dataset has the following distribution of classes

Class Name  Class Count  Class Percentage
Hate Speech  19190   77.43
Offensive Language  4163   16.80
Neither   1430  5.77

This reflects that the dataset is highly imabalanced in favor of Hate Speech Class Label.

    Data Preprocessing

The following steps were performed for data preprocessing:

3.1. Text Cleaning

a. Lowercasing: Convert all characters to lowercase to ensure uniformity
b. Remove URLs: Remove any URLs (e.g., http://example.com, https://t.co/abc) using regex r'http\S+|www\S+|https\S+'.
c. Remove User Mentions: Remove Twitter handles (e.g., @username) using regex r'@\w+'
d. Remove Hashtag Symbols: Remove the # symbol but keep the word using regex r'#'.
e. Remove Numbers: Remove all digits using regex r'\d+'.
f. Remove Punctuation and Special Characters: Remove all non-alphanumeric characters except spaces using regex r'[^\w\s]'.
g. Remove Extra Whitespace: Replace multiple spaces with a single space and trim leading/trailing spaces using regex r'\s+' and strip().

3.2. Stopword Removal and Stemming

a. Stopword Removal: Removes common English stopwords (e.g., "the", "is", "and") that carry little semantic meaning.Tokens that appeared in NLTK’s English stopword list were removed.

b. Stemming: Reduces words to their root form to normalize variations of the same word. NLTK’s Porter Stemmer was applied to each token.

Now the dataset looks like (columns not needed were also removed):

class 	tweet 	cleaned_tweet
0 	2 	!!! RT @mayasolovely: As a woman you shouldn't... 	rt woman shouldnt complain clean hous amp man ...
1 	1 	!!!!! RT @mleew17: boy dats cold...tyga dwn ba... 	rt boy dat coldtyga dwn bad cuffin dat hoe st ...
2 	1 	!!!!!!! RT @UrKindOfBrand Dawg!!!! RT @80sbaby... 	rt dawg rt ever fuck bitch start cri confus shit
3 	1 	!!!!!!!!! RT @C_G_Anderson: @viva_based she lo... 	rt look like tranni
4 	1 	!!!!!!!!!!!!! RT @ShenikaRoberts: The shit you... 	rt shit hear might true might faker bitch told ya
... 	... 	... 	...
24778 	1 	you's a muthaf***in lie “@LifeAsKing: @2... 	you muthafin lie right tl trash mine bibl scri...
24779 	2 	you've gone and broke the wrong heart baby, an... 	youv gone broke wrong heart babi drove redneck...
24780 	1 	young buck wanna eat!!.. dat nigguh like I ain... 	young buck wanna eat dat nigguh like aint fuck...
24781 	1 	youu got wild bitches tellin you lies 	youu got wild bitch tellin lie
24782 	2 	~~Ruffled | Ntac Eileen Dahlia - Beautiful col... 	ruffl ntac eileen dahlia beauti color combin p...

Train-Test split (80-20) was performed resulting into the following training and testing data:

Training Data Shape: (19826,) (19826,)
Testing Data Shape: (4957,) (4957,)

3.3. Vectorization and Oversampling

a. Vectorization: Converts preprocessed text into numerical features for training. CountVectorizer with max_features=5000 was used to create a bag-of-words representation.

After vectorization, the splits become:

Training Data Vectorized Shape: (19826, 5000) (19826,)
Testing Data Vectorized Shape: (4957, 5000) (4957,)

b. Oversampling: Balances the class distribution in the training data to address the imbalance in the dataset. This was applied after train test split becuase it has to be applied only on training data, not on testing data.

Result of oversampling:

Before Oversampling:
class
1    15352
2     3330
0     1144
Name: count, dtype: int64
After Oversampling:
class
1    15352
2    15352
0    15352

*Only on training data.

    Training and Evaluating Machine Learning Models

4.1. We trained the following machine learning models on the preprocessed dataset:

a. Logistic Regression
b. Multinomial Naive Bayes
c. SVC with linear kernel
d. Voting Classifier ([logistic regression, naive bayes, svm] with soft voting)
e. Xgboost

4.2. Summary of evaluation metrics:

             Model  Accuracy  Precision    Recall  F1 Score

0  Logistic Regression  0.854953   0.891478  0.854953  0.868858
1          Naive Bayes  0.839621   0.882689  0.839621  0.856968
2                  SVM  0.846480   0.885353  0.846480  0.862244
3      Voting Ensemble  0.868671   0.895199  0.868671  0.879248
4              XGBoost  0.858987   0.902750  0.858987  0.874029

Here, it is safe to conclude that Voting Classifier performs best among the machine learning models.

    Comparison of performance of Machine Learning Models

Make a graph out of the evaluation metrics

    Preparing Dataset, Training and Evaluating Deep Learning Models

6.1. Data Preprocessing

a. Oversampling: Used RandomOverSampler to balance classes in X_train (text) and y_train (labels), creating X_train_resampled_text and y_train_resampled.

b. Tokenization: Split tweets into words, build a vocabulary (vocab) from training data, and assign indices (special tokens: <pad>=0, <unk>=1).

c. GloVe Embeddings: Loaded 100-dimensional GloVe vectors (glove.6B.100d.txt) into an embedding_matrix for words in vocab.

d. PyTorch Dataset: Created TweetDataset to convert tweets to padded index sequences (max length=50) and labels.

e. DataLoaders: Created train_loader (batch_size=32, shuffle=True) and test_loader (batch_size=32) for batch processing.

6.2. The following models were used for training:

a. LSTM: Bidirectional LSTM (hidden_dim=128, 1 layer), embedding layer (GloVe, frozen), dropout (0.3), linear layer (256→3 classes).
b. GRU: Same as LSTM but uses GRU as the units.
c. CNN: Embedding layer (GloVe, frozen), three 1D convolutional layers (filter sizes=[2,3,4], 100 filters each), ReLU, max-pooling, dropout (0.3), linear layer (300→3 classes).

6.3. Summary of Evaluation Metrics
Evaluation Metrics for All Models (Sorted by F1 Score): ------------------------------------------------------------ Model Accuracy Precision Recall F1 Score CNN 0.8545 0.8582 0.8545 0.8560 GRU 0.8570 0.8543 0.8570 0.8550 LSTM 0.8564 0.8530 0.8564 0.8545 ------------------------------------------------------------

    Comparison of Performance of Deep Learning Models

Make a graph out of the evaluation metrics

    Inference

The deep learning models (LSTM, GRU, CNN) achieved F1 scores of 0.8545–0.8560, underperforming the machine learning models (e.g., Voting Ensemble F1=0.8792, XGBoost F1=0.8740). This could be attributed to the dataset size being insufficient for deep learning models, which typically require large datasets to learn complex patterns effectively. Additionally, the models’ architectures, with bidirectional layers and high-dimensional embeddings, may be too complex relative to the dataset, potentially leading to overfitting. Other factors, such as the use of frozen GloVe embeddings, limited training epochs, and preprocessing optimized for machine learning, may have further constrained the deep learning models’ ability to surpass machine learning performance.

8.1. Saving the Classifier, Vectorizer, Stop Words and Stemmer

Finally proceeding with the Voting Classifier, preprocessing is performed again and the classier including the vectorizer, stemmer and stop words are saved in .pkl format.

8.2. Final Inference

The saved entities are loaded, test samples are preprocessed similarly and passed through the classifier to see the results. Demo results for three test samples are shown below:
Inference Results: ---------------------------------------- Tweet: I hate this community, they are all terrible people Prediction: Hate Speech ---------------------------------------- Tweet: This is just a bunch of nonsense words Prediction: Offensive Language ---------------------------------------- Tweet: You are an amazing person, keep shining! Prediction: Neither ----------------------------------------

This is the complete description of my project. I want to make a static website out of this. So make one for me using any framework of your choice. SOme sections require you to make graphs (they have been clearly stated). use any package/library for that. I want it to be very professional looking. I would love to see poppins font being used. Plus, some cool color shade used throughout. Old twitter's logo would be a great addition (becuase now it has been changed to x.com). WOuld love to see my name: Aatif Ahmad there. I just want a single page thing plus an option to always go to the top. Would love to see links to the github page: https://github.com/aatifahmad123/twitter_hate_speech_detection. Try not to miss anything from the draft, any addition would be okay. Go ahead
  