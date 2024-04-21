"use strict";(self.webpackChunkai_tester_kit=self.webpackChunkai_tester_kit||[]).push([[6644],{1790:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=t(4848),s=t(8453);const o={sidebar_position:2},r="\ud83d\udee0\ufe0f What is OpenDevin?",l={id:"ai-tools/dev-tool-opendevin",title:"\ud83d\udee0\ufe0f What is OpenDevin?",description:"What is OpenDevin?",source:"@site/docs/ai-tools/dev-tool-opendevin.md",sourceDirName:"ai-tools",slug:"/ai-tools/dev-tool-opendevin",permalink:"/ai-tester-kit/docs/ai-tools/dev-tool-opendevin",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ai-tools/dev-tool-opendevin.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udee0\ufe0f Giskard AI",permalink:"/ai-tester-kit/docs/ai-tools/giskard-ai"},next:{title:"\ud83d\udee0\ufe0f More AI Tools",permalink:"/ai-tester-kit/docs/ai-tools/more-tools"}},a={},d=[{value:"What is OpenDevin?",id:"what-is-opendevin",level:2},{value:"How to Setup OpenDevin?",id:"how-to-setup-opendevin",level:2},{value:"User Interface:",id:"user-interface",level:2},{value:"Working With OpenDevin",id:"working-with-opendevin",level:2},{value:"Using different LLM Models:",id:"using-different-llm-models",level:2},{value:"Resources:",id:"resources",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\ufe0f-what-is-opendevin",children:"\ud83d\udee0\ufe0f What is OpenDevin?"}),"\n",(0,i.jsx)(n.h2,{id:"what-is-opendevin",children:"What is OpenDevin?"}),"\n",(0,i.jsx)(n.p,{children:"The OpenDevin is a free, open-source tool that lets users assign tasks to an AI software engineer and see real-time progress as the AI completes it using available tools."}),"\n",(0,i.jsx)(n.h2,{id:"how-to-setup-opendevin",children:"How to Setup OpenDevin?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Step 1: Pull the latest sandbox image:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"docker pull ghcr.io/opendevin/sandbox\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Step 2: Clone the github repository by running the following command:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"git clone https://github.com/OpenDevin/OpenDevin.git\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Step 3: Navigate to the folder containing the repository by running:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cd opendevin\n"})}),"\n",(0,i.jsx)(n.p,{children:"Step 4: Copy config.toml.template to config.toml. Add an OpenAI API key to the config.toml"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'LLM_API_KEY="sk-..."\n'})}),"\n",(0,i.jsx)(n.p,{children:"Step 5: Start the backend"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"python -m pip install pipenv\npython -m pipenv install -v\npython -m pipenv shell\nuvicorn opendevin.server.listen:app --port 3000\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Step 6: Start the frontend"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Open a new terminal & execute the below commands:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"cd frontend\nnpm install\nnpm start\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You'll see OpenDevin user interface running on ",(0,i.jsx)(n.a,{href:"http://localhost:3001/",children:"http://localhost:3001/"})," where you can interact with the tool."]}),"\n",(0,i.jsx)(n.h2,{id:"user-interface",children:"User Interface:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Left Side:"})," Task input area. Here you tell the AI what to do."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Right side:"})," Terminal, planner, code editor, and browser. The AI uses these to work on your task."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"working-with-opendevin",children:"Working With OpenDevin"}),"\n",(0,i.jsx)(n.p,{children:'Type in a natural language task in the left side panel (e.g., "create a Python program to print first 50 numbers") & watch it work. You can observe the progress in the right side panels (terminal, code editor, etc.)'}),"\n",(0,i.jsx)(n.h2,{id:"using-different-llm-models",children:"Using different LLM Models:"}),"\n",(0,i.jsx)(n.p,{children:"OpenDevin use LiteLLM, so you can run it with any foundation model, including OpenAI, Claude, and Gemini. LiteLLM has a full list of providers.\nTo change the model, set the LLM_MODEL and LLM_API_KEY in config.toml."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Important Notes:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Alpha Version:"})," May not be perfect, especially for complex tasks."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Model Matters:"})," The quality of the output depends on the AI model being used."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"resources",children:"Resources:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=3-q5GzRNEe0",children:"OpenDevin: Create any Application with Open Source AI Engineer"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=dKD4a_sv69o",children:"OpenDevin Tutorial (Open-Source Devin) - Build Entire Apps From a Single Prompt"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(6540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);