---
sidebar_position: 1
title: ⚙️ Prompt Library for Testing Tasks
---

# Prompt Library for Testing Tasks

Empower your testing with a curated library of prompts to think outside the box and craft comprehensive testing strategies. 

### ⚙️ Gathering insights on how to test a given feature/application
```
You are an expert who can advise on how to test different kind of software applications.
I will provide you the details about the software and you'll give me ideas about how to test the given software/product.

**Software/Product Details:**
<A POS system that allows the business to accept payments from customers and keep track of sales.> 

Please let me know how can I test the given product.
```
### ⚙️ How to explore critical aspects specific to a feature area
```
Leveraging your expertise as a software tester, focusing on web and mobile applications, your objective is to offer expert guidance on essential considerations for comprehensively testing the given feature.
These considerations should encompass critical aspects ensuring the feature's functionality, performance, and reliability.
Utilize your vast experience to pinpoint potential issues and scenarios that may not be readily evident but could significantly influence the feature's quality and user experience.

Feature Detail:
<Feature details goes here>

```

### ⚙️ Exploring unknown knowledge areas
```
I have to test a software product that requires knowledge about the concepts mentioned below. Help me understand these concepts. 

**Concepts:**
Knowledge of physiological signals (ECG, PPG, etc)
Medical device regulations (ISO 13485, IEC 62304, ISO 14971)
```

### ⚙️ Writing a comprehensive test plan
```
You are an experienced software quality assurance manager well-versed in software testing best practices and methodologies. Please advise me to craft a comprehensive test plan for evaluating the specified software application or product.

Software/Product Description:
<Application details goes here>
```

### ⚙️ Writing test cases for the given feature in the tabular format
```
You are an expert who can advise on how to effectively test a software application. Your task is to create comprehensive test scenarios for the given feature.

The output should be structured in a table format with the following columns: TC# (Test Case Number), Title, Preconditions, Steps, and Expected Results. 

When generating the test cases please cover both positive & negative scenarios. Here's the feature detail:

Feature Detail:
<Feature details goes here>
```
### ⚙️ Writing the negative/error scenarios
```
You are an experienced software quality assurance engineer capable of advising about thorough feature testing. Leveraging your extensive testing experience, create the error scenarios for testing the given feature.

Feature Detail:
<Feature details goes here>

```

### ⚙️ Writing test cases with specific requirements
```
Leveraging your extensive experience in testing, yourtask is to devise comprehensive test ideas for testing the payment functionality of a Point of Sale (POS) application.
Please consider the following essential factors when writing the test cases:
- Device types involved in the process: Card readers, cash drawers, and receipt printers.
- Multiple payment methods that the system should cater to: Cash, credit cards, debit cards, gift cards, and digital wallets.
- Various currencies that the system should support: USD, CAD, and UK pounds.
Your test ideas should encompass all potential user interactions, edge cases, and possible scenarios, ensuring the robustness and reliability of the payment functionality.

```
### ⚙️ Write test cases for the given feature with a focus on specific test type

```
You are an experienced software tester specializing in web and mobile apps. Your task is to create comprehensive test scenarios. You will be provided with the necessary information to generate these scenarios. 
The output should be structured in a table format with the following columns: TC# (Test Case Number), Title, Preconditions, Steps, and Expected Results. 
Your primary focus will be on conducting [test_type] testing for the given feature. 

Feature Detail:
<Feature details goes here>

Please proceed with creating detailed, effective test cases for this feature.

```
Test Types: Functional, Performance Testing, Usability Testing, Compatibility Testing, Regression Testing, Security Testing, Recovery Testing, Localization Testing, Accessibility Testing

### ⚙️ Regression Testing
```
You are an experienced software tester specializing in web and mobile apps. Write a good set of regression tests for the given software/product that should be run before a production release.

**Software/Product Details:**
<A POS system that allows the business to accept payments from customers and keep track of sales.> 
```

### ⚙️ Tracking the Release Process 
```
You are a knowledgeable software test manager. In your organization, testing is the responsibility of each individual team. You understand what is important to test and how to perform risk-based testing if 100 percentage coverage is not possible. You want to manage the release testing effectively and track the progress of testing efforts from the individual team. You have to wait for every team’s go ahead before you can give a final go-ahead to release the app. How would you track this whole release management process?

```

### ⚙️ Writing Test Cases in Gherkin Format (BDD)
```
You are an expert who can advise on how to effectively test a software application using BDD practices. Your task is to create comprehensive test scenarios using Gherkin syntax for the given feature.
Your extensive testing experience should guide you in considering all possible scenarios. Please ensure that these test cases cover all possible user interactions and potential edge cases applicable to the functionality.  
Here's the feature detail:

Feature Detail:
<Feature details goes here>

```
### ⚙️ Creating step definition files for the given feature files
```
You're skilled in applying BDD practices and crafting feature and step definition files with precision. Your task is to write step definition files using Cucumber.js for the feature files created during the execution of the previous prompt.
```

### ⚙️ Writing Automation Script for the given feature
```
You are a Knowledgeable Automation Developer. Write a test automation script utilizing Appium and WebDriverIO as the technology stack, adhering to the page object model pattern, for a feature encompassing the specified functionality

[functionality_details]
```

### ⚙️ Test Automation - How to questions
You are a Knowledgeable Automation Developer knowing Appium, WebDriverIO, BrowserStack, AppliTools Eye, and Mobile Apps Automation. I have a few automation how-to questions. Can you help me with the answers?
Q1: Is it possible to automate the following scenarios? If yes, please also share the recommended way.
[scenario_detail]

### ⚙️ Help resolve the error message
```
You are a Knowledgeable Automation Developer knowing Appium, WebDriverIO, BrowserStack, AppliTools Eye, and Mobile Apps Automation. I am getting an error when running the test. Help me resolve the error. The error is [error_detail]
```

### ⚙️ Selecting the right tool for a given task
```
I want to test a software application's performance. What are the recommeded open source tools available in the market?
```

### ⚙️ Writing JMeter tests
```
Prompt: This is the code for my Restful API <CODE>. Create a Jmeter script that calls this api for each operation defined in the class. Also add a way to see the results of the test. My web service needs to handle 5 requests per sesond at a load of 20 concurrent users. 

Here's additional information:

Server: localhost
Path: /calculate
Port: 80
```
