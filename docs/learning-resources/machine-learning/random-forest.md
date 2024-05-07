---
sidebar_position: 7
---

# 🎓 Random Forest
Random Forests is an ensemble learning method that combines multiple decision trees to improve predictive performance and reduce overfitting. Each decision tree in the Random Forests is trained on a random subset of the training data and a random subset of features, adding randomness to the model and increasing diversity among the trees.

**Example: Predicting Diabetes**

Imagine you have a dataset with various health-related features and a target variable indicating whether a person has diabetes or not. Your goal is to build a predictive model using Random Forests to predict diabetes based on these features.

Here are some sample features in your dataset:
- Age
- BMI (Body Mass Index)
- Blood Pressure
- Glucose Level
- Insulin Level
- Family History of Diabetes
- Physical Activity Level

And the target variable:
- Diabetes (Yes/No)

**Building a Random Forest for Diabetes Prediction:**

1. **Data Preparation:**
- Split your dataset into training and testing sets (e.g., 80% training, 20% testing).
- Preprocess the data (handle missing values, scale features if necessary, encode categorical variables).

1. **Random Forest Training:**
- Random Forests build multiple decision trees based on bootstrapped samples of the training data (sampling with replacement).
- At each node of each decision tree, a random subset of features is considered for splitting, adding randomness and reducing correlation among trees.

1. **Making Predictions:**
- To predict whether a person has diabetes:
  - Each decision tree in the Random Forest makes an individual prediction (Yes/No).
  - For classification, the final prediction is determined by majority voting among the predictions of all decision trees.

Let's say you've built a Random Forest model using 100 decision trees, each trained on a random 70% subset of the training data and considering a random 5 out of 7 features at each node.

When you want to predict whether a new person (not in the training data) has diabetes:
- The Random Forest combines predictions from all 100 decision trees.
- If, for instance, 70 trees predict "Yes" (diabetes) and 30 trees predict "No," the majority vote would be "Yes," indicating the Random Forest predicts that the person has diabetes.

**Advantages of Random Forests:**
- Reduced overfitting compared to individual decision trees.
- Robust to noisy data and outliers.
- Can handle large datasets with many features effectively.
- Provides feature importance ranking based on how much each feature contributes to the model's predictions.

