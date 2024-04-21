---
sidebar_position: 2
---

# 🛠️ What is OpenDevin?

## What is OpenDevin?
The OpenDevin is a free, open-source tool that lets users assign tasks to an AI software engineer and see real-time progress as the AI completes it using available tools.

## How to Setup OpenDevin?
* Step 1: Pull the latest sandbox image:
```
docker pull ghcr.io/opendevin/sandbox
```
* Step 2: Clone the github repository by running the following command:

```sh
git clone https://github.com/OpenDevin/OpenDevin.git
```
* Step 3: Navigate to the folder containing the repository by running:

```
cd opendevin
```

Step 4: Copy config.toml.template to config.toml. Add an OpenAI API key to the config.toml
```js
LLM_API_KEY="sk-..."
```

Step 5: Start the backend

```sh
python -m pip install pipenv
python -m pipenv install -v
python -m pipenv shell
uvicorn opendevin.server.listen:app --port 3000
```

* Step 6: Start the frontend  

Open a new terminal & execute the below commands:
```sh
cd frontend
npm install
npm start
```
You'll see OpenDevin user interface running on http://localhost:3001/ where you can interact with the tool.

## User Interface:
* **Left Side:** Task input area. Here you tell the AI what to do.
* **Right side:** Terminal, planner, code editor, and browser. The AI uses these to work on your task.

## Working With OpenDevin
Type in a natural language task in the left side panel (e.g., "create a Python program to print first 50 numbers") & watch it work. You can observe the progress in the right side panels (terminal, code editor, etc.)

## Using different LLM Models:
OpenDevin use LiteLLM, so you can run it with any foundation model, including OpenAI, Claude, and Gemini. LiteLLM has a full list of providers.
To change the model, set the LLM_MODEL and LLM_API_KEY in config.toml.

**Important Notes:**
* **Alpha Version:** May not be perfect, especially for complex tasks.
* **Model Matters:** The quality of the output depends on the AI model being used. 

## Resources:
* [OpenDevin: Create any Application with Open Source AI Engineer](https://www.youtube.com/watch?v=3-q5GzRNEe0)
* [OpenDevin Tutorial (Open-Source Devin) - Build Entire Apps From a Single Prompt](https://www.youtube.com/watch?v=dKD4a_sv69o)