# Build Your Dream Team of AI Agents with CrewAI

Imagine a group of intelligent robots working together seamlessly like a crew. CrewAI makes that possible! It helps AI agents understand each other, share goals, and work as a team. This is perfect for building things like smart assistants, customer service robots, or even research teams that can all learn and adapt together.

Today, we'll build a Career councelling team using crewAI. This app helps recent graduates navigate the job search process by analyzing their skills, identifying suitable career paths, and providing personalized job recommendations. By default, CrewAI uses the OpenAI API when querying the model. You can also use a local model through Ollama or LM Studio.

Before we start writing any code, let's first understand some basic concepts...

## What are AI Agents?
AI agents, also known as intelligent agents, are software programs that operate autonomously and are programmed to:

- Perform tasks  
  AI agents can handle various tasks, like searching for information, analyzing data, or managing schedules.
- Make decisions  
  They can make decisions based on the information they have and the goals they are given.
- Communicate with other agents   
  AI agents can talk to each other, share information and work together to complete tasks.

To help them do their job, AI agents are equipped with some tools they can use whenever needed to get the best results.

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <img src={require('./image-13.png').default} alt="AI Agent" style={{ width: '500px', height: 'auto' }} />
</div>

### Agent's key attributes

Now, let's explore the key attributes of an AI agent to understand what makes them effective team members:

**Role:** Think of the role as the agent's job title. It defines the specific function of the agent within the team, determining what tasks it excels at and what it's best suited for.

**Goal:** The goal is the agent's main objective. This is what guides its decision-making process, directing its actions and choices. For instance, the goal could be to "find the most relevant information" or "analyze data for trends."

**Backstory:** The backstory provides contextual information about the agent's role and goal. This helps in understanding how the agent fits into the team and how it interacts with others. 

## Key elements of AI agents
Now, we'll break down the key elements of AI agents to help you understand how they work and what makes them effective. Let's dive in!

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <img src={require('./components-ai-agents.jpeg').default} alt="AI Agent" style={{ width: '600px', height: 'auto', marginBottom: '20px' }} />
</div>

- Role-playing: Think of AI agents like actors in a play. Each agent is assigned a specialized role, like a detective, a researcher, or a coder, which allows them to focus on specific tasks. 
- Focus: To get the best performance, tasks, goals, and tools are divided and assigned to multiple AI agents. This means that each agent can concentrate on a particular part of the job, making the overall process more efficient.
- Tools: A tool is like a special skill or function that an agent can use to get things done. These tools come from the CrewAI Toolkit and LangChain Tools and give agents various capabilities, such as searching the web, executing code, or processing data. It's like giving each actor the props they need to perform their role perfectly.

- Cooperation: AI agents work together in different ways—they can perform tasks one after another (sequential), at the same time (in parallel), or in a structured order (hierarchically). This teamwork helps complete complex tasks more effectively.
  
- Guardrails: Just like guardrails on a road, these ensure that the AI agents stay on track. They handle errors, prevent the agents from getting stuck in endless loops, and avoid any false information or hallucinations.

- Memory: AI agents have different types of memory:
  - Short-term memory: This helps them remember what they are currently working on.
  - Long-term memory: This allows them to store information for future use.
  - Shared memory: This enables them to share information with other agents, facilitating better cooperation.

By understanding these key components, you can see how AI agents are designed to work efficiently and effectively, just like a well-coordinated team.

### Process:
In CrewAI, processes manage how tasks are done by agents, similar to how project managers organize work in human teams. These processes make sure tasks are shared and completed efficiently, following a set plan.

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <img src={require('./image-15.png').default} alt="AI Agent" style={{ width: '500px', height: 'auto' }} />
</div>

image credit: crew.ai

### Multi-Agent Collaboration
- Sequential
Agents work in a linear fashion, each completing their task before passing it to the next agent, ensuring a step-by-step progression.
- Hierarchical
Agents are organized in levels of authority, with higher-level agents coordinating and integrating the work of lower-level agents, providing a top-down management structure.
- Asynchronous
Agents work independently and simultaneously on their tasks, coordinating through communication to align their efforts towards a common goal.

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <img src={require('./image-14.png').default} alt="AI Agent" style={{ width: '500px', height: 'auto' }} />
</div>

## App: Grad Launchpad: Your AI-powered Job Search Companion

Now that we understand all the necessary concepts, let's start developing our career counselling team using CrewAI. This app helps recent graduates navigate the job search process by analyzing their skills, identifying suitable career paths, and providing personalized job recommendations.

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <img src={require('./app-career-counselling.jpeg').default} alt="AI Agent" style={{ width: '500px', height: 'auto', marginBottom: '30px' }} />
</div>

Our team will consist of four agents:

1. **Career Pathfinder**: This agent will guide new graduates in exploring suitable career paths based on their resume, skill set, interests, and job market trends (utilizes web scraping tools to access job postings and analyze trends).

2. **Job Search Strategist**: This agent will focus on finding job opportunities and developing effective job search strategies.

3. **Resume Strategist**: This agent will help in crafting and optimizing resumes to make them stand out to potential employers.

4. **Interview Preparer**: This agent will assist in preparing for job interviews, offering tips and practice sessions to build confidence.

We'll assign specific tasks to each of these agents to help us achieve our goal of providing the best career counselling services to new graduates. By working together, these agents will cover all aspects of the job search process, ensuring comprehensive support for our users.

### Installation
Let's walk through the steps to set up our environment and install the necessary tools for our CrewAI project.

1. **Create a virtual environment:** 
First, we need to create a virtual environment to keep our project dependencies organized. Open your terminal and run:

```sh
conda create -p venv python==3.10
``` 
This command will create a new Conda environment with a specific version of Python. Here is a step-by-step explanation of what happens when you run this command:

* conda create: This is the base command used to create a new Conda environment.
* -p venv: This flag specifies the path where the environment should be created. Instead of naming the environment (with -n), you are providing a directory path.
* python==3.10: This specifies the version of Python that should be installed in the new environment. In this case, Python 3.10.

After the successful run of the command, you'll notice a new folder named 'venv' created in your root directory.

2. **Activate the Virtual Environment:**
Next, activate the virtual environment you just created by running:

```sh
conda activate ./venv
```
3. **Install Dependencies:**
Finally, install the dependencies. You can do this in two ways: 

* **By installing specific packages directly**: 
```sh
pip install crewai==0.28.8 crewai_tools==0.1.6 langchain_community==0.0.29
```

* **Using a requirements.txt File:**
This file will list all the dependencies your project needs. You can create it using a text editor and add the required packages. 

```txt
crewai==0.28.8
crewai_tools==0.1.6
langchain_community==0.0.29

```
After you craete the file, install the dependencies using the below comand:
```sh
pip install -r requirements.txt
``` 

### Setting Up Your Crew
Now let's setup our crew. This process involves defining your agents, assigning them tasks, and then getting them to work together to achieve your goals. Here's how you can do it step by step:  

**1. Define Your Agents:**  
Start by defining the roles and goals of your agents. Each agent will have a backstory that defines his specific function within the team.

**2. Create Tasks for Your Agents:**  
Create and assign specific tasks to each agent based on their roles. These tasks will help them achieve their goals.

**3. Instantiate Your Crew:**   
Bring your agents together into a crew with a sequential process that outlines how they'll work together.
   
In addition to the sequential process, you can use the hierarchical process, which allows specifying a custom manager or automatically assigns a manager to the defined crew to properly coordinate the planning and execution of tasks through delegation and validation of results.

**4. Kick It Off:**  
Finally, kick off the crew to start performing the tasks you've assigned. Your agents will collaborate, leveraging their memory capabilities for a successful project outcome.

### Inputs
1. Resume: To tailor career advice for users, our app requires their resumes. Add a sample resume to the project's root folder.
2. LinkedIn URL, interest & career goals provided as input when kicking off the crew.

### Complete Code
Here's the code to set this up:

1. The `.env` file with API Keys for OpenAI & SerperAI:

```txt
<!-- .env file -->
OPENAI_API_KEY=YOUR_API_KEY
SERPER_API_KEY=YOUR_API_KEY
```

2. The `utils` file contains the methods to read the `.env` file:  

```py
# utils.py
# Add your utilities or helper functions to this file.

import os
from dotenv import load_dotenv, find_dotenv
                                                                                
def load_env():
    _ = load_dotenv(find_dotenv())

def get_openai_api_key():
    load_env()
    openai_api_key = os.getenv("OPENAI_API_KEY")
    return openai_api_key

def get_serper_api_key():
    load_env()
    openai_api_key = os.getenv("SERPER_API_KEY")
    return openai_api_key
```

3. The crew.py file with code to create agents, tasks and the crew:

We'll start by importing essential modules like Agent, Task, and Crew from the CrewAI library. Additionally, we'll utilize the Process module for handling processes within our Crew AI environment.

We'll also import utility functions to retrieve API keys from the 'utils' module. These keys are crucial for accessing services like OpenAI and SerperAPI, empowering our AI agents with advanced capabilities.

```py
# crew.py
from crewai import Agent, Task, Crew
from crewai.process import Process

import os
from utils import get_openai_api_key, get_serper_api_key
```
Next, we retrieve our OpenAI API key using the `get_openai_api_key()` function. This key grants us access to powerful AI models like GPT-4 Turbo, which we'll set as our OpenAI model for this project.

Next, we ensure seamless integration by setting environment variables. We assign our OpenAI model name as `gpt-4-turbo` to leverage its advanced capabilities. Additionally, we fetch our SerperAPI key using `get_serper_api_key()` to enable interactions with external services.

```py
openai_api_key = get_openai_api_key()
os.environ["OPENAI_MODEL_NAME"] = "gpt-4-turbo"
os.environ["SERPER_API_KEY"] = get_serper_api_key()
```
Next, we're setting up essential tools from CrewAI for our project.

Import the necessary tools: FileReadTool, ScrapeWebsiteTool, MDXSearchTool, and SerperDevTool.

* The SerperDevTool helps us perform advanced searches.
* The ScrapeWebsiteTool enables us to scrape data from websites.
* The FileReadTool reads the user’s resume file.
* The MDXSearchTool allows for semantic searches within the resume.

We then create instances of these tools for later use.

```py
from crewai_tools import FileReadTool, ScrapeWebsiteTool, MDXSearchTool, SerperDevTool

search_tool = SerperDevTool()
scrape_tool = ScrapeWebsiteTool()
read_resume = FileReadTool(file_path="./resume.md")
semantic_search_resume = MDXSearchTool(mdx="./resume.md")
```
Now, let's move on to the most exciting part: setting up the agents. Our first agent is the Career Pathfinder.

We create the Career Pathfinder agent with the following attributes:

* Role: Career Pathfinder
* Goal: Guide new graduates in exploring suitable career paths based on their resume, skill set, and interests. 

This agent uses tools like `scrape_tool`, `search_tool`, `read_resume`, and `semantic_search_resume`. We set verbose to `True` for detailed output.

```py
# Agent 1: Career Pathfinder
career_pathfinder = Agent(
    role="Career Pathfinder",
    goal="Guide new graduates in exploring suitable career paths based on their resume, skill set, and interests",
    tools=[scrape_tool, search_tool, read_resume, semantic_search_resume],
    verbose=True,
    backstory=(
        "As a Career Pathfinder, your extensive knowledge "
        "in career guidance, job market trends, and personal "
        "development makes you an invaluable resource for "
        "new graduates. You started your journey with a passion "
        "for helping individuals discover their potential "
        "and navigate the complexities of career planning. "
        "With a background in human resources and career "
        "coaching, you have honed the ability to analyze "
        "resumes, assess skill sets, and align personal "
        "interests with viable career paths. Utilizing "
        "advanced tools and personalized advice, you aim "
        "to empower graduates to make informed decisions "
        "and pursue fulfilling careers."
    ),
)
```
Next, we'll create our remaining 3 agents.

```py
# Agent 2: Job Search Strategist
job_search_strategist = Agent(
    role="Job Search Strategist",
    goal="Assist graduates in finding relevant job openings, navigating online job boards, and building a strong online presence"
    "to help them stand out in the job market",
    tools=[scrape_tool, search_tool, semantic_search_resume],
    verbose=True,
    backstory=(
        "As a Job Search Strategist, your expertise in job market dynamics "
        "and online job search techniques is unparalleled. Your journey started "
        "with a keen interest in digital tools and platforms that revolutionize "
        "the job hunting process. With a background in recruitment and career "
        "coaching, you have developed a knack for identifying the best job "
        "opportunities, optimizing online profiles, and streamlining the application "
        "process. Your mission is to empower graduates to navigate the complex "
        "landscape of online job boards and build a compelling online presence that "
        "stands out to potential employers."
    ),
)

# Agent 3: Resume Strategist
resume_strategist = Agent(
    role="Resume Strategist",
    goal="Help graduates create standout resumes that effectively highlight their skills, experiences, and qualifications to attract potential employers.",
    tools=[scrape_tool, search_tool, read_resume, semantic_search_resume],
    verbose=True,
    backstory=(
        "As a Resume Strategist, your expertise in crafting impactful resumes that catch the eye of recruiters is unmatched. "
        "Your journey began with a passion for storytelling and a keen understanding of the job market's evolving demands. "
        "With a background in human resources and professional writing, you have honed the ability to translate a graduate's "
        "experiences and skills into compelling resume content. Your mission is to empower graduates by providing them with "
        "the tools and knowledge to create resumes that stand out in the competitive job market."
    ),
)

# Agent 4: Interview Preparer
interview_preparer = Agent(
    role="Engineering Interview Preparer",
    goal="Prepare graduates for job interviews by providing tailored questions, answers, and talking points based on their resume and career aspirations.",
    tools=[read_resume, semantic_search_resume],
    verbose=True,
    backstory=(
        "As an Interview Preparer, your exceptional ability to equip graduates with the skills and confidence needed for successful interviews sets you apart. "
        "Your journey began with a fascination for effective communication and a desire to help individuals present their best selves. "
        "With a background in human resources, coaching, and behavioral psychology, you have developed a deep understanding of what employers seek during interviews. "
        "Your mission is to empower graduates by providing them with personalized interview preparation, ensuring they can articulate their experiences, skills, and aspirations compellingly."
    ),
)
```
Now, let's define the task for our agents:
```py
# Task for Career Pathfinder Agent:
career_pathfinder_task = Task(
    description=(
        "Analyze the graduate's resume, skill set, the LinkedIn ({linkedin_url}) URL, "
        "interest ({interest}) and career goals ({career_goals}) to "
        "explore potential career paths. Use tools to evaluate the "
        "graduate's qualifications, match them with suitable career "
        "options, and assess personal interests. Provide a comprehensive "
        "report detailing the most relevant career paths, including "
        "necessary qualifications, potential job titles, industry trends, "
        "and further skill development recommendations."
    ),
    expected_output=(
        "A detailed report outlining suitable career paths for the graduate, "
        "including relevant job titles, industry trends, and recommendations "
        "for further skill development."
    ),
    output_file="career_paths_report.md",
    agent=career_pathfinder,
)

# Task for Job Search Strategist Agent:
job_search_strategist_task = Task(
    description=(
        "Using the graduate's resume and career aspirations, assist them in finding "
        "relevant job openings. Navigate online job boards and use semantic search "
        "tools to identify job listings that match the graduate's skill set and interests. "
        "Additionally, provide guidance on building a strong online presence, including "
        "optimizing their LinkedIn profile and other professional networking sites."
    ),
    expected_output=(
        "A list of relevant job openings tailored to the graduate's skills and interests, "
        "along with actionable recommendations for building and optimizing their online presence."
    ),
    output_file="job_search_strategy.md",
    context=[career_pathfinder_task],
    agent=job_search_strategist,
)

# Task for Resume Strategist Agent:
resume_strategist_task = Task(
    description=(
        "Using the graduate's current resume, skills, and experiences, create a standout resume that effectively highlights "
        "their qualifications to attract potential employers. Employ tools to analyze and enhance resume content, ensuring it "
        "aligns with industry standards and job market demands. Tailor the resume to emphasize key strengths and achievements, "
        "making it compelling and visually appealing."
    ),
    expected_output=(
        "A polished and compelling resume that effectively highlights the graduate's skills, experiences, and qualifications, "
        "making them stand out to potential employers."
    ),
    output_file="standout_resume.md",
    agent=resume_strategist,
)

# Task for Interview Preparer Agent:
interview_preparer_task = Task(
    description=(
        "Using the graduate's resume and career aspirations, prepare them for job interviews by providing tailored questions, answers, "
        "and talking points. Analyze the resume to identify key experiences and skills to highlight during interviews. Generate questions "
        "that are likely to be asked based on the graduate's career field and aspirations, along with well-crafted answers and talking points "
        "to ensure the graduate presents their best self."
    ),
    expected_output=(
        "A comprehensive interview preparation document containing tailored interview questions, well-crafted answers, and key talking points "
        "based on the graduate's resume and career aspirations."
    ),
    context=[
        career_pathfinder_task,
        job_search_strategist_task,
        resume_strategist_task,
    ],
    output_file="interview_prep_guide.md",
    agent=interview_preparer,
)

```
Now is the time to instantiate the crew by bring the agents together as a crew under a sequential process. When setting up a crew, you have the option to enable and customize memory to align with the crew's objectives and the specific tasks it will handle. By default, the memory system is disabled, but you can activate it by setting memory=True in the crew configuration.
   
```py
career_counselling_crew = Crew(
    agents=[
        career_pathfinder,
        job_search_strategist,
        resume_strategist,
        interview_preparer,
    ],
    tasks=[
        career_pathfinder_task,
        job_search_strategist_task,
        resume_strategist_task,
        interview_preparer_task,
    ],
    process=Process.sequential,
    memory=True,
    verbose=True,
)
```
Finally, this is the time to kick off the crew to start performing the tasks you've assigned. During kick-off, we'll also provide other inputs such as linkedin url, interest and career goals.
```py
career_counselling_inputs = {
    "linkedin_url": "https://www.linkedin.com/in/john-doe/",
    "interest": "UX/UI Designing, Web Development, Data Analysis & Visualization",
    "career_goals": """As a UX/UI Designer: Strive to stay at the forefront of design trends and technologies, continually enhancing skills in Sketch, Adobe XD, Figma, and other design tools.
                       As a Web Developer: Pursue opportunities to build and maintain sophisticated web applications, focusing on creating clean, efficient, and maintainable code.
                       As a Spatial Data Analyst: Seek roles in industries such as urban planning, environmental science, and logistics, where geospatial data can drive impactful decisions.""",
}

result = career_counselling_crew.kickoff(inputs=career_counselling_inputs)

print(result)
```

Let's put our CrewAI app into action! We can run it using a simple Python command. 

```sh
python crew.py
```

Watch as the agents spring to life and utilize their designated tools. Once everything's finished, you'll see the output files generated by each agent. Pretty cool, right?

This is just the tip of the iceberg. You can build all sorts of fascinating AI applications using CrewAI's powerful agent-based automation.

Thanks for joining me on this journey! If you enjoyed the blog post, be sure to like and follow for more content like this. Keep learning and growing your AI skills!



