---
sidebar_position: 2
---

# 🎓 Data Exploration using Pandas
Getting familiar with your data is a crucial step in any machine learning (ML) project. Pandas is a Python library widely used for data manipulation and analysis, especially in the context of data science and ML. Here's how to use Pandas to get familiar with your data for an ML project:

1. **Import Pandas and Load Your Data:**
   - Start by importing the Pandas library in your Python script or Jupyter Notebook:
     ```python
     import pandas as pd
     ```
   - Load your dataset into a Pandas DataFrame. You can read data from various sources like CSV files, Excel files, SQL databases, etc. For example:
     ```python
     # Load data from a CSV file
     df = pd.read_csv('path/to/your/data.csv')
     ```

2. **Explore the Data:**
   - Once your data is loaded, use Pandas to explore its structure, columns, and first few rows to get an initial understanding:
     ```python
     # Display the first few rows of the DataFrame
     print(df.head())
     
     # Display basic information about the DataFrame
     print(df.info())
     
     # Display summary statistics of numerical columns
     print(df.describe())
     
     # Check the column names
     print(df.columns)
     
     # Check the data types of columns
     print(df.dtypes)
     ```

3. **Handling Missing Values:**
   - Check for missing values in your data and decide on a strategy to handle them (e.g., imputation, dropping rows/columns). Pandas provides methods to deal with missing data effectively:
     ```python
     # Check for missing values in each column
     print(df.isnull().sum())
     
     # Handle missing values (e.g., fill with mean/median, drop rows/columns)
     # The inplace parameter can be set to True to modify the DataFrame in place without creating a new DataFrame. 

     df.fillna(df.mean(), inplace=True)  # Example: fill missing values with column mean
    
     # Drop rows with any missing values (think of na as "not available")
     df_cleaned = df.dropna()

     # Drop Columns with Missing Values:
     df_cleaned = df.dropna(axis=1)

     # Drop rows where all values are missing (all NaN)
     df_cleaned = df.dropna(how='all')

     # Drop rows with at least 2 NaN values
     df_cleaned = df.dropna(thresh=2)

     ```

4. **Data Visualization:**
   - Use Pandas along with other libraries like Matplotlib or Seaborn to create visualizations that help you understand your data better:
     ```python
     import matplotlib.pyplot as plt
     import seaborn as sns
     
     # Example: Create a histogram of a numerical column
     plt.hist(df['numeric_column'])
     plt.xlabel('Value')
     plt.ylabel('Frequency')
     plt.title('Histogram of Numeric Column')
     plt.show()
     
     # Example: Create a box plot to visualize distribution and outliers
     sns.boxplot(x='category_column', y='numeric_column', data=df)
     plt.xlabel('Category')
     plt.ylabel('Numeric Column')
     plt.title('Box Plot of Numeric Column by Category')
     plt.show()
     ```

5. **Feature Engineering:**
   - Use Pandas to create new features or transform existing ones based on domain knowledge or insights gained from data exploration:
     ```python
     # Example: Create a new feature based on existing columns
     df['new_feature'] = df['feature1'] + df['feature2']
     ```

6. **Correlation Analysis:**
   - Use Pandas to compute correlations between features, which can help identify relationships and potential predictors for your ML models:
     ```python
     # Compute pairwise correlations between numerical columns
     corr_matrix = df.corr()
     print(corr_matrix)
     ```

By following these steps with Pandas, you can gain a comprehensive understanding of your data, identify patterns, handle missing values, visualize relationships, engineer features, and prepare your data for training ML models effectively.