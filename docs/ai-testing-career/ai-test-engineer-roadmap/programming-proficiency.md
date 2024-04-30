---
sidebar_position: 6
---

# 🛣️ Programming Proficiency

## AI Development Frameworks
* **Apache MXNet:** A versatile open-source deep learning framework known for its speed and flexibility. It supports multiple languages and allows for efficient model building across research and production environments. 
  
* **CNTK (Microsoft Cognitive Toolkit):** An open-source deep learning framework from Microsoft, strong in commercial settings. It excels at building intelligent applications and scales well for large datasets. 
  
* **IBM Watson Studio:** A cloud-based platform offering a one-stop shop for data science tasks, including machine learning. It integrates well with IBM Cloud services and provides a user-friendly interface for building and deploying models.
  
* **TensorFlow:** A popular open-source deep learning framework by Google, with a large community and extensive resources. It's a powerful choice for a wide range of deep learning projects.
  
* **Keras:** A user-friendly API that simplifies building and training deep learning models. It often sits on top of frameworks like TensorFlow, making deep learning more approachable for beginners.  
  
* **PyTorch:** A powerful open-source deep learning library known for its flexibility and dynamic computation graph. It's popular in research for its ease of experimentation and debugging complex neural networks.
  
* **scikit-learn:** A powerful Python library focused on traditional machine learning algorithms. It offers a wide range of well-documented functions for tasks like classification, regression, and clustering, making it a great choice for beginners or quick prototyping.

## Python
Python is a dominant language in the field of Artificial Intelligence (AI) due to several factors:
* **Easy to Learn:** Python's clear syntax and gentle learning curve make it beginner-friendly.
* **Extensive Libraries:** Python boasts a vast collection of specialized libraries specifically designed for data manipulation, analysis, and machine learning. These libraries, like NumPy, pandas, Scikit-learn, and TensorFlow, offer pre-built functions and tools, saving you time and effort when working with data.
* **Focus on Prototyping:** Python's readability allows for rapid prototyping of ML models and data analysis pipelines. You can experiment and iterate quickly without getting bogged down in complex syntax.
* **Optimized Performance:** Libraries leverage C/C++ for efficient computations.
* **Open-Source Community:** The vibrant open-source community surrounding Python provides ample resources, tutorials, and forums. You can easily find help and learn from others' experiences.

### The Essential Foundations
Learning basic Python will give you a solid foundational understanding of the language, which is essential for using packages and libraries effectively. Here's what you need to learn:
1. **Variables:** Think of these as named containers for storing data.
   * Learn how to assign values using the `=` sign (e.g.,  `name = "Alice"`).

2. **Data Types:** The different kinds of data you'll work with:
   * **Numbers:**  (integers like 10, floating-point numbers like 3.14).
   * **Strings:** Text enclosed in quotes (e.g., "Hello, world!").
   * **Booleans:** True or False values.
   * **Lists:** Ordered collections of items (e.g., `[1, 2, 3, "apple"]`).
   * **Dictionaries:**  Store data in key-value pairs (e.g., `{"name": "Bob", "age": 30}`). 

3. **Operators:** Symbols that let you perform actions on data.
   * **Arithmetic**
   * **Comparison** 
   * **Logical**

4. **Conditional Statements:** Controlling the flow of your code.
   * `if`, `elif`, and `else` statements for making decisions.

5. **Loops:** Repeating sections of code.
   * **`for` loops:** Iterating over items in a sequence (like a list).
   * **`while` loops:** Repeating code as long as a condition is true. 

6. **Functions:** Reusable blocks of code that perform a specific task.
   * Defining functions using the `def` keyword.
   * Passing arguments to functions.
   * Returning values from functions.
7. **Modules and Packages:** How to reuse code and leverage libraries created by others.
    * Importing built-in modules (like `math`, `random`)
    * Using external libraries through tools like `pip`.
8. **Setting up virtual environments:**
    * Understand why they are important (isolating project dependencies)
    * Using `venv` to create virtual environments
    * Using [The Anaconda](https://www.anaconda.com/download) and setting up conda environments
    * Activating and deactivating environments

**Recommended Resources**

* [Scrimba: Free Course - Learn Python](https://scrimba.com/learn/python)
* [Automate the Boring Stuff with Python](https://automatetheboringstuff.com/)

### Leveling Up
1. **Manipulating Excel Sheets**
* `openpyxl` package
2. **Data Manipulation**
* Pandas is an essential toolbox for efficiently organizing and analyzing your data.
* Similar to how you organize data in spreadsheets like Excel or databases like SQL, Pandas enables effective structuring of your data.
* With Pandas, you gain access to a comprehensive set of analytical tools that streamline data cleaning, manipulation, and summarization. These tools also facilitate the calculation of crucial metrics, providing valuable insights from your data.
3. **Data Visualization**
* **Matplotlib and Seaborn:** These libraries create clear and informative charts and graphs (static visualizations) to help you understand your data.
* **Plotly:** Plotly allows you to build interactive charts and dashboards. You can zoom, click, and explore these visualizations in more detail.
4. **Machine Learning With Python** 
* **Scikit-learn:** This is a popular library for building, training, and evaluating machine learning models. It offers a wide range of algorithms for various tasks. 
* **Statsmodels:** This library provides tools for statistical analysis and model building. It's particularly useful for tasks involving classical statistical methods. 
* **TensorFlow:** This is a powerful framework widely used for developing deep learning models. It allows you to design and train complex neural networks for tasks like image recognition or natural language processing.  

### Practice Time
Use Python to build a data pipeline that processes, analyzes, and delivers insights from transactional data. The pipeline will:

* **Handle missing data:** This could involve filling in missing fields with appropriate values based on the data type (e.g., mean for numeric, mode for categorical).
* **Reshape and aggregate data:** This might involve summarizing the data by a specific dimension (e.g., daily sales figures) or calculating relevant metrics.
* **Calculate KPIs (Key Performance Indicators):** You can define specific metrics to assess performance based on your project's goals.
* **Generate insights:** Analyze the processed data to uncover trends or patterns and communicate meaningful findings.
* **Export results:** The data can be exported to a format suitable for sharing with stakeholders, such as an Excel spreadsheet.

This approach can be applied to various projects that involve transactional data, allowing you to gain valuable insights and inform decision-making. 

----------------

## Learning JavaScript

### Fundamentals

1. **Variables:** How to store data. Think of them as boxes to put your information in.
   * Understand `let`, `const`, and the older `var` for declaring variables.

2. **Data Types:** The different "flavors" of data you'll work with.
   * **Primitives:** Numbers, strings (text), booleans (true/false), null, undefined.
   * **Objects:** Collections of key-value pairs to store complex data.

3. **Operators:** Symbols that let you do stuff with your data.
   * **Arithmetic**
   * **Comparison** 
   * **Logical**

4. **Conditional Statements:**  Control the flow of your code based on decisions.
   * `if`, `else if`, `else`.

5. **Loops:** Automate repetitive tasks.
   * `for` loop (traditional counter-based loop).
   * `while` loop (keeps going until a condition is no longer true).

6. **Functions:** Reusable blocks of code that do specific tasks.
   * How to define a function using the `function` keyword.
   * Passing values into functions (parameters).
   * Returning values from functions. 

7. **The DOM (Document Object Model):** How your JavaScript code interacts with HTML elements on a webpage.
   * Selecting elements (e.g., `getElementById`, `querySelector`).
   * Modifying elements (changing text, styles, etc.).

8. **Events:** Things that happen on the webpage that you can respond to.
   * Understanding common events like 'click', 'mouseover', 'submit'.
   * How to add event listeners to elements.

9. **Asynchronous Programming:** Promises, async/await, essential for handling AI request/response cycles.

10. **Node.js:**  If you want to create server-side components for your AI projects or potentially run generative models locally.

11. **Frontend Frameworks (Optional but Highly Recommended):** Pick one to streamline your work:
    * React: Component-based, excellent for dynamic AI interfaces.
    * Vue.js: Approachable, great for smaller projects or prototypes.
    * Svelte: Newer, highly performant option.

**Recommended Resources**

* [Scrimba: Free Course - Learn JavaScript](https://scrimba.com/learn/learnjavascript)
* [Scrimba: Free Course - Introduction to ES6+](https://scrimba.com/learn/introtoes6)
* [The Odin Project: Full Stack JavaScript](https://www.theodinproject.com/paths/full-stack-javascript)
* [Mozilla Developer Network (MDN): JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

-----

## Editing Tools
Here's an improved and completed breakdown of the three tools:

**Jupyter Notebooks:**

* **Free to use and open-source:** You don't need to pay anything and the code is freely available for modification.
* **Industry standard for data exploration and analysis:** Widely used by data scientists for its interactive nature and ease of combining code, text, and visualizations.
* **Focuses on readability and explanation:** Great for showcasing your thought process and sharing analysis with others. 
* **Can be resource-intensive for large datasets:** Running complex computations on your local machine might be slow.

**VS Code:**

* **Versatile code editor:** Not just for Python, but supports various programming languages with extensions.
* **Lightweight and customizable:** Offers a clean interface and allows for extensive customization through plugins.
* **Integrates with Jupyter Notebooks:** Enables editing and debugging notebooks directly within VS Code for a smoother workflow. 
* **Requires setting up your own Python environment:** You need to install Python and relevant libraries separately.

**Google Colab:**

* **Free cloud-based Jupyter Notebook environment:** No software installation required, runs entirely in your web browser.
* **Offers free access to powerful hardware (GPUs):** Ideal for running computationally expensive tasks on large datasets without straining your local machine.
* **Easy collaboration:** Share notebooks with others for real-time editing and co-working.
* **Limited storage and potential downtime:**  Files are stored on Google's servers and occasional outages could disrupt work.

In summary, Jupyter Notebooks are the standard for data analysis with Python, VS Code provides a powerful and customizable editing experience, and Google Colab offers a free, cloud-based environment with access to powerful hardware. The best choice depends on your specific needs and project requirements. 

-----

## Developing Your Own AI Product

**Example Generative AI Projects**

* **AI-Powered Chatbot:** Practice text generation, asynchronous handling of input and responses, and UI for conversation flow.
* **Creative Text Generator:** Experiment with prompts, fine-tuning, and different generative models to create poetry, stories, etc.
* **Image Manipulation with AI:** Build an interface to send prompts to an image generation AI, displaying results, and allowing for user modifications.
* **Code Assistant:** Explore building a tool using a code-generation AI to assist with writing JavaScript functions.

**Advanced Concepts**
* **Data Pre-processing:** Learn techniques to prepare data suitable as input for your generative models to get the best results. 
* **Model Fine-Tuning (If Supported):**  Some AI tools allow fine-tuning their models on your data for even more tailored output.

**Recommended Resources**
* [Scrimba: Free Course - Prompt Engineering for Web Developers](https://scrimba.com/learn/promptengineering)
* [Scrimba: Free Course - Intro to AI Engineering](https://scrimba.com/learn/introtoaiengineering)
* [Scrimba: Free Course - Learn to code with AI](https://scrimba.com/learn/aicoding)
* [Scrimba: Free Course - Learn OpenAI's Assistants API](https://scrimba.com/learn/openaiassistants)
* [Scrimba: Free Course - The Official LangChain.js Course](https://scrimba.com/learn/langchain)


