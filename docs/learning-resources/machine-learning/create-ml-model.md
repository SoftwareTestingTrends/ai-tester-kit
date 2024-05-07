---
sidebar_position: 4
---

# 🎓 Build Your Own ML Model
Let's build our first model using the [Decision Tree](decision-tree.md) algorithm we covered in the last section. We'll import `DecisionTreeRegressor` from `scikit-learn` library. Note that when coding, this library is written as `sklearn`. 

Let's start by importing the necessary libraries like Pandas, NumPy, and scikit-learn:

## Import Libraries:

   ```python
   import pandas as pd
   from sklearn.model_selection import train_test_split
   from sklearn.tree import DecisionTreeRegressor
   from sklearn.metrics import mean_squared_error
   ```

**Explanation:**  
Let's explain each line of code:
1. `import pandas as pd`:
   - This line imports the Pandas library into your Python script or Jupyter Notebook and gives it the alias `pd`. Using an alias like `pd` is a common convention to make it easier to reference Pandas functions and objects throughout your code.

2. `from sklearn.model_selection import train_test_split`:
   - This line imports the `train_test_split` function from the `sklearn.model_selection` module. The `train_test_split` function is used to split your data into training and testing sets, which is essential for evaluating the performance of your machine learning model.

3. `from sklearn.tree import DecisionTreeRegressor`:
   - This line imports the `DecisionTreeRegressor` class from the `sklearn.tree` module. `DecisionTreeRegressor` is a type of regression model based on decision trees, which is suitable for predicting continuous numerical values (regression tasks).

4. `from sklearn.metrics import mean_squared_error`:
   - This line imports the `mean_squared_error` function from the `sklearn.metrics` module. `mean_squared_error` is a metric used to evaluate the performance of regression models by measuring the average squared difference between predicted and actual values. Lower MSE values indicate better model performance.


## Load and Prepare Data:
Load your dataset into a Pandas DataFrame and prepare it for training the model. Ensure your dataset has features (independent variables) and a target variable (dependent variable) that you want to predict.

   ```python
   # Load data into a DataFrame (replace 'path/to/your/data.csv' with your file path)
   df = pd.read_csv('path/to/your/data.csv')

   # Assuming 'X' contains features and 'y' contains the target variable
   X = df[['feature1', 'feature2', ...]]  # Specify your features
   y = df['target']  # Specify your target variable
   ```

## Split Data into Training and Testing Sets:
Split your data into training and testing sets to evaluate the model's performance.

   ```python
   X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
   ```
**Explanation:**    
This line of code is using the `train_test_split` function from the `sklearn.model_selection` module to split your data into training and testing sets. Let's break down what each part of the code does:

- `X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)`

1. **Variables Assigned:**
   - `X_train`: This variable will store the features (input data) for the training set.
   - `X_test`: This variable will store the features for the testing set.
   - `y_train`: This variable will store the target variable (output) for the training set.
   - `y_test`: This variable will store the target variable for the testing set.

2. **Arguments Passed to `train_test_split`:**
   - `X`: This is the input features data (typically a Pandas DataFrame or NumPy array).
   - `y`: This is the target variable data (typically a Pandas Series or NumPy array).
   - `test_size=0.2`: This argument specifies the proportion of the dataset that should be allocated to the testing set. In this case, it's set to 0.2, which means 20% of the data will be used for testing, and the remaining 80% will be used for training.
   - `random_state=42`: This argument sets the random seed for reproducibility. It ensures that the data is split in the same way every time the code is run, which is important for consistency in machine learning experiments.
  
3. **More About Random State:**
The random_state parameter affects the behavior of the function in the following ways:

   1. **Reproducibility:**
      - When you set a specific `random_state` value (e.g., `random_state=42`), it ensures that the data split or model training process is deterministic and reproducible. In other words, running the same code with the same `random_state` will produce the same results every time.
      - This is crucial for reproducible research and debugging, as it allows you to get consistent results across different runs of the code.

   2. **Randomness and Data Splitting:**
      - The `train_test_split` function randomly shuffles your data before splitting it into training and testing sets. The `random_state` parameter controls this shuffling process.
      - Changing the `random_state` value will result in a different random shuffling of the data. This can lead to different data splits, especially when the dataset size is small.

   3. **Model Initialization and Initialization Order:**
      - Some machine learning algorithms, like decision trees, initialize differently depending on the order of the data points. Setting `random_state` ensures that the initialization process is consistent across runs.
      - For instance, in decision trees, different orders of data points could result in different tree structures. By setting `random_state`, you ensure that the same data order is used each time, leading to consistent model initialization and behavior.

So, when you execute this line of code, it will split your input features (`X`) and target variable (`y`) into training and testing sets (`X_train`, `X_test`, `y_train`, `y_test`) based on the specified test size and random state. This is a fundamental step in machine learning to evaluate the performance of your models on unseen data.

## Create and Train the Decision Tree Regressor Model:
Create an instance of `DecisionTreeRegressor` and train it using the training data.

   ```python
   # Create Decision Tree Regressor model
   dt_regressor = DecisionTreeRegressor(random_state=42)

   # Train the model
   dt_regressor.fit(X_train, y_train)
   ```

## Make Predictions:
Use the trained model to make predictions on the testing data.

   ```python
   y_pred = dt_regressor.predict(X_test)
   ```
## Evaluate Model Performance:
Evaluate the performance of the model using metrics like Mean Squared Error (MSE) or others suitable for regression tasks.

   ```python
   mse = mean_squared_error(y_test, y_pred)
   print('Mean Squared Error:', mse)
   ```

Here's a complete example putting it all together:

```python
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeRegressor
from sklearn.metrics import mean_squared_error

# Load data into a DataFrame (replace 'path/to/your/data.csv' with your file path)
df = pd.read_csv('path/to/your/data.csv')

# Assuming 'X' contains features and 'y' contains the target variable
X = df[['feature1', 'feature2', ...]]  # Specify your features
y = df['target']  # Specify your target variable

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Create Decision Tree Regressor model
dt_regressor = DecisionTreeRegressor(random_state=42)

# Train the model
dt_regressor.fit(X_train, y_train)

# Make predictions
y_pred = dt_regressor.predict(X_test)

# Evaluate model performance
mse = mean_squared_error(y_test, y_pred)
print('Mean Squared Error:', mse)
```

Replace `'path/to/your/data.csv'` with the actual path to your dataset file, and specify the features and target variable accordingly. This example uses Mean Squared Error (MSE) as the evaluation metric; you can choose other metrics based on your specific regression task.
