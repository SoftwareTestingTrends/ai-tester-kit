---
sidebar_position: 3
title: 🤖 Prompt Library for Testing Tasks
---
**Table of Contents:**
- [Test Strategy \& Planning](#test-strategy--planning)
- [Test Case Writing](#test-case-writing)
- [Regression Testing](#regression-testing)
- [Tracking the Release Process](#tracking-the-release-process)
- [Gherkin Format (BDD)](#gherkin-format-bdd)
- [Automated Tests](#automated-tests)
- [Creating Sample Data](#creating-sample-data)
- [Write SQL Queries](#write-sql-queries)
- [GitHub Action Workflow](#github-action-workflow)
- [Bash/Shell Commands](#bashshell-commands)
- [Selecting the right tool for a given task](#selecting-the-right-tool-for-a-given-task)
- [Analyze user-submitted reviews/feedback](#analyze-user-submitted-reviewsfeedback)

## Test Strategy & Planning

**⚙️ Gathering insights on how to test a given feature/application**

```
You are an expert who can advise on how to test different kind of software applications.
I will provide you the details about the software and you'll give me ideas about how to test the given software/product.

**Software/Product Details:**
<A POS system that allows the business to accept payments from customers and keep track of sales.> 

Please let me know how can I test the given product.
```

**⚙️ How to explore critical aspects specific to a feature area**

```
Leveraging your expertise as a software tester, focusing on web and mobile applications, your objective is to offer expert guidance on essential considerations for comprehensively testing the given feature.
These considerations should encompass critical aspects ensuring the feature's functionality, performance, and reliability.
Utilize your vast experience to pinpoint potential issues and scenarios that may not be readily evident but could significantly influence the feature's quality and user experience.

Feature Detail:
<Feature details goes here>

```

**⚙️ Exploring unknown knowledge areas**

```
I have to test a software product that requires knowledge about the concepts mentioned below. Help me understand these concepts. 

**Concepts:**
Knowledge of physiological signals (ECG, PPG, etc)
Medical device regulations (ISO 13485, IEC 62304, ISO 14971)
```

**⚙️ Writing a comprehensive test plan**

```
You are an experienced software quality assurance manager well-versed in software testing best practices and methodologies. Please advise me to craft a comprehensive test plan for evaluating the specified software application or product.

Software/Product Description:
<Application details goes here>
```

## Test Case Writing

**⚙️ Writing test cases for the given feature in the tabular format**

```
You are an expert who can advise on how to effectively test a software application. Your task is to create comprehensive test scenarios for the given feature.

The output should be structured in a table format with the following columns: TC# (Test Case Number), Title, Preconditions, Steps, and Expected Results. 

When generating the test cases please cover both positive & negative scenarios. Here's the feature detail:

Feature Detail:
<Feature details goes here>
```
**⚙️ Writing the negative/error scenarios**

```
You are an experienced software quality assurance engineer capable of advising about thorough feature testing. Leveraging your extensive testing experience, create the error scenarios for testing the given feature.

Feature Detail:
<Feature details goes here>

```

**⚙️ Writing test cases with specific requirements**

```
Leveraging your extensive experience in testing, yourtask is to devise comprehensive test ideas for testing the payment functionality of a Point of Sale (POS) application.
Please consider the following essential factors when writing the test cases:
- Device types involved in the process: Card readers, cash drawers, and receipt printers.
- Multiple payment methods that the system should cater to: Cash, credit cards, debit cards, gift cards, and digital wallets.
- Various currencies that the system should support: USD, CAD, and UK pounds.
Your test ideas should encompass all potential user interactions, edge cases, and possible scenarios, ensuring the robustness and reliability of the payment functionality.

```
**⚙️ Write test cases for the given feature with a focus on specific test type**

```
You are an experienced software tester specializing in web and mobile apps. Your task is to create comprehensive test scenarios. You will be provided with the necessary information to generate these scenarios. 
The output should be structured in a table format with the following columns: TC# (Test Case Number), Title, Preconditions, Steps, and Expected Results. 
Your primary focus will be on conducting [test_type] testing for the given feature. 

Feature Detail:
<Feature details goes here>

Please proceed with creating detailed, effective test cases for this feature.

```
Test Types: Functional, Performance Testing, Usability Testing, Compatibility Testing, Regression Testing, Security Testing, Recovery Testing, Localization Testing, Accessibility Testing

## Regression Testing
```
You are an experienced software tester specializing in web and mobile apps. Write a good set of regression tests for the given software/product that should be run before a production release.

**Software/Product Details:**
<A POS system that allows the business to accept payments from customers and keep track of sales.> 
```

## Tracking the Release Process 
```
You are a knowledgeable software test manager. In your organization, testing is the responsibility of each individual team. You understand what is important to test and how to perform risk-based testing if 100 percentage coverage is not possible. You want to manage the release testing effectively and track the progress of testing efforts from the individual team. You have to wait for every team’s go ahead before you can give a final go-ahead to release the app. How would you track this whole release management process?

```

## Gherkin Format (BDD)

**⚙️ Writing Test Cases in Gherkin Format (BDD)**

```
You are an expert who can advise on how to effectively test a software application using BDD practices. Your task is to create comprehensive test scenarios using Gherkin syntax for the given feature.
Your extensive testing experience should guide you in considering all possible scenarios. Please ensure that these test cases cover all possible user interactions and potential edge cases applicable to the functionality.  
Here's the feature detail:

Feature Detail:
<Feature details goes here>

```
**⚙️ Creating step definition files for the given feature files**

```
You're skilled in applying BDD practices and crafting feature and step definition files with precision. Your task is to write step definition files using Cucumber.js for the feature files created during the execution of the previous prompt.
```
## Automated Tests

**⚙️ Writing Unit Tests**

```
Please create a thorough set of unit tests using <framework_type> framework for the provided program to ensure it performs its intended action accurately. Make sure to cover various edge cases and test for handling invalid inputs as well.
```

**⚙️ Reviewing Unit Tests**

```
Please perform a detailed review of the provided unit tests and recommend improvements. Additionally, identify any additional tests that should be included. Ensure that the unit tests cover a wide range of edge cases and thoroughly test the handling of invalid inputs.
```

**⚙️ Create a Starter Codebase and File Structure for Mobile App Automation**

```
Create a starter codebase for an automation framework targeting mobile apps, utilizing WebdriverIO and Appium. Additionally, outline the recommended general file structure for organizing the framework components.
```

**⚙️ Writing Automation Script for the given feature**

```
You are a Knowledgeable Automation Developer. Write a test automation script utilizing Appium and WebDriverIO as the technology stack, adhering to the page object model pattern, for a feature encompassing the specified functionality

[functionality_details]
```

**⚙️ Reviewing Automation Code**

```
Please conduct a comprehensive code review for the following test automation code. Evaluate aspects such as code maintainability, readability, scalability, efficiency, reliability, and adherence to coding standards and best practices. Provide feedback on areas where improvements can be made to enhance the overall quality and effectiveness of the code. 

**Automation tool stack:** [tool_stack_used]
**Automation Code:**
[automation_code]
```

**⚙️ Writing PR Description**

```
Draft a PR description for the provided functionality/implementation. Include details about the changes made, the purpose of the implementation, any relevant background information, and how these changes contribute to the project's goals. Consider mentioning any potential impacts or dependencies associated with this implementation.

Functionality/Implementation:
[details_goes_here]

```

**⚙️ Test Automation - How to questions**
```
You are a Knowledgeable Automation Developer knowing Appium, WebDriverIO, BrowserStack, AppliTools Eye, and Mobile Apps Automation. I have a few automation how-to questions. Can you help me with the answers?
Q1: Is it possible to automate the following scenarios? If yes, please also share the recommended way.
[scenario_detail]
```

**⚙️ Help resolve the error message**

```
You are a Knowledgeable Automation Developer knowing Appium, WebDriverIO, BrowserStack, AppliTools Eye, and Mobile Apps Automation. I am getting an error when running the test. Help me resolve the error. The error is [error_detail]
```

**⚙️ Adding Code Comments**

```
Provide clear and concise comments for the code snippet below, following best coding practices for readability and understanding.

<code_goes_here>
```

**⚙️ Writing JMeter tests**

```
Prompt: This is the code for my Restful API <CODE>. Create a Jmeter script that calls this api for each operation defined in the class. Also add a way to see the results of the test. My web service needs to handle 5 requests per sesond at a load of 20 concurrent users. 

Here's additional information:

Server: localhost
Path: /calculate
Port: 80
```

## Creating Sample Data

**⚙️ Generate user data & corresponding email addresses**
```
Develop a Python script to generate sample data for 100 users including user ID, full name along with corresponding email addresses, and subsequently save this data to a CSV file.
```

**⚙️ Generate product data & corresponding details**
```
Generate sample data for 10 products, each including product ID, name, price, and category. 
```

## Write SQL Queries
```
Create a SQL INSERT statement to populate the Feedback table with data, including feedback ID, customer ID, and comments fields.
```

## GitHub Action Workflow

**⚙️ GitHub Actions workflow for a Dockerized application**

```
Develop a GitHub Actions workflow template tailored for a Dockerized application. This template should include sequential steps for building the Docker image, pushing it to Docker Hub for storage, and deploying it to a Kubernetes cluster for execution.
```

**⚙️ GitHub Actions workflow for a Mobile application**

```
Create a GitHub Actions workflow template specifically designed for a React Native mobile application. This template should outline steps for installing dependencies, building the app, and uploading the resulting APK file to a designated folder on Google Drive.
```

## Bash/Shell Commands

**⚙️ Redirect the output of a command to a file**

```
Explain how to redirect the output of a command to a file using a bash command.
```

**⚙️ Modifying the permissions of a file**

```
Which bash command should I use to modify the permissions of a file?
```
## Selecting the right tool for a given task
```
I want to test a software application's performance. What are the recommeded open source tools available in the market?
```

## Analyze user-submitted reviews/feedback
```
Analyze the user-submitted app reviews/feedback to identify common themes and categories, such as usability, performance, features, bugs, and customer service. Conduct sentiment analysis on this data. Based on the frequency and severity of issues mentioned, provide recommendations on prioritizing which bugs to fix first or which features to consider adding. Present the analysis results in a tabular format using markdown, including the identified themes, sentiment scores, and priority recommendations.

<reviw_feedback_data>
```


