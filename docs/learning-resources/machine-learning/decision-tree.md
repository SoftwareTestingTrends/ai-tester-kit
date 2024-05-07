---
sidebar_position: 3
---

# 🎓 Decision Tree
A Decision Tree is a popular machine learning algorithm used for both classification and regression tasks. Here's an overview of what a Decision Tree is and how it works:

1. **Definition:**
   - A Decision Tree is a flowchart-like tree structure where each internal node represents a decision based on a feature (attribute), each branch represents the outcome of the decision, and each leaf node represents a class label (in classification) or a numerical value (in regression).
   - The goal of a Decision Tree is to split the data into subsets based on the values of input features, making decisions at each node to maximize information gain or minimize impurity (for classification) or variance (for regression).

2. **How it Works:**
- **Splitting:** The Decision Tree algorithm starts at the root node, selects the best feature to split the data, and creates branches based on the possible values of that feature.
- **Recursive Splitting:** This process continues recursively for each subset of data created by the splits, selecting the best features to split on until a stopping criterion is met (e.g., maximum tree depth, minimum number of samples per leaf).
- **Leaf Nodes:** Once the tree is fully grown, each leaf node represents a class label (in classification) or a numerical value (in regression) based on the majority class or average value of the training samples in that leaf.

**Example:**  
Let's use a simple example to explain how a Decision Tree works, along with a diagram to visualize it.

**Example: Predicting Play Tennis**

Suppose we want to build a Decision Tree to predict whether to play tennis based on weather conditions (Outlook, Temperature, Humidity, and Wind). Here's a small dataset:

| Day  | Outlook   | Temperature | Humidity | Wind   | Play Tennis |
|------|-----------|-------------|----------|--------|-------------|
| D1   | Sunny     | Hot         | High     | Weak   | No          |
| D2   | Sunny     | Hot         | High     | Strong | No          |
| D3   | Overcast  | Hot         | High     | Weak   | Yes         |
| D4   | Rain      | Mild        | High     | Weak   | Yes         |
| D5   | Rain      | Cool        | Normal   | Weak   | Yes         |
| D6   | Rain      | Cool        | Normal   | Strong | No          |
| D7   | Overcast  | Cool        | Normal   | Strong | Yes         |
| D8   | Sunny     | Mild        | High     | Weak   | No          |
| D9   | Sunny     | Cool        | Normal   | Weak   | Yes         |
| D10  | Rain      | Mild        | Normal   | Weak   | Yes         |
| D11  | Sunny     | Mild        | Normal   | Strong | Yes         |
| D12  | Overcast  | Mild        | High     | Strong | Yes         |
| D13  | Overcast  | Hot         | Normal   | Weak   | Yes         |
| D14  | Rain      | Mild        | High     | Strong | No          |

Let's build a Decision Tree step by step:

1. **Root Node Selection:**
   - We start at the root node with all data points.
   - We select the feature that best splits the data, often based on information gain or `Gini impurity`. Let's say we start with the Outlook feature.
  
> Gini impurity is a measure used in decision tree algorithms, especially in binary classification tasks, to evaluate how pure or impure a node is. It quantifies the likelihood of an incorrect classification of a randomly chosen element in the dataset if it were labeled randomly according to the distribution of labels in the node.  

2. **Splitting at the Root Node (Outlook):**
   - We create branches based on the Outlook feature: Sunny, Overcast, and Rain.
   - Each branch represents a subset of data with corresponding weather conditions.

3. **Further Splitting:**
   - We continue splitting each subset based on other features (Temperature, Humidity, Wind) to create more branches and eventually reach leaf nodes with class labels (Yes or No for Play Tennis).

```
                Outlook
              /    |     \
             /     |      \
            /      |       \
          Sunny Overcast  Rain
            |      |        
           Temp   Temp       
         /  |  \             
        /   |   \           
       Hot Mild Cool   
        |                
      Humidity         
        /\
       /  \ 
    High  Normal
     |
    Wind
     /\
    /  \
  Weak Strong
    |    |
    No   No

```

**Advantages of Decision Trees:**
 - Easy to understand and interpret, especially for non-technical users, due to their visual representation.
 - Can handle both numerical and categorical data without requiring extensive data preprocessing (e.g., one-hot encoding).
 - Robust to outliers and missing values.
 - Non-parametric, meaning they don't make strong assumptions about the distribution of the data.

**Challenges of Decision Trees:**
 - Prone to overfitting, especially with complex trees that capture noise in the data.
 - Can create biased trees if certain features dominate the splits.
 - Not suitable for capturing linear relationships in the data (unlike linear models).

