import { Callout, Steps } from 'nextra-theme-docs';

## Chatbot settings

Here you can change the parameters to customize your chatbot and its behavior.

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/90e47b8b-d617-426e-8fa2-b93c26a477bc)


### General settings
Here, you can control the availability of the chatbot and its automatic behavior.

#### Disable the plugin temporarily

Selecting this option disables the AI bot, so you can speak to your customers without its presence.

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/e482bbf2-ef82-46bf-93b3-144e96e5127c)

#### Data source information
If you want the chatbot to include the most relevant links in its response, check the *Show source links in response* checkbox.
<Callout>
This checkbox is turned off by default.
</Callout>
This is how the response with links looks:

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/03342743-2538-42df-890e-7c4e8f291c65)


<Callout>Please note, we provide only the links but Crisp chatbox renders the first one based on the metatags that can be found on the webpage.</Callout>

We include 5 found links, the first one is marked as "Source", and others as "Additional sources". The titles are automatically translated into the user's language:

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/dfd9aa31-5ade-476f-aef8-5df7bd6291c0)

#### Chatbot default responses

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/3b6f590a-e17c-499d-830d-e604fb7e1c6d)


<Callout>Attention! These settings were moved to the project's.</Callout>

#### Chatbot automation
Use the *Turn the chatbot off when an agent joins the conversation* checkbox to provide the pausing of the chatbot as soon as an agent joins the conversation.

<Callout>
This checkbox is turned on by default.
</Callout>

All the paused sessions can be found on the *Paused sessions* tab, more information is below.

#### Waiting for Crisp Triggers
If you use the Crisp Trigger, you may want to ask the chatbot to wait for N seconds (4, by default) - in this case, if a trigger is fired and sends its message to the user's chatbox, the chatbot will not respond at all. It allows you to avoid sending duplicate messages.

### Widget settings
Here, you specify how your chatbot and its responses look:

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/831d2e64-801e-404c-9e8d-e149387cbfed)

#### Chatbot icon

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/a1401d5d-9943-48f5-ab64-e7d62623d04c)

  You may choose from 3 options:
  
  - the default Crisp userpic
  - a "cute" Enum robot userpic
  - your own URL to a userpic.
  
  Default Crisp userpic:
  
![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/5a903c4f-f974-45e6-96fd-aed450d30ac5)

  
  a cute robot:
  
![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/8f669673-8ed4-4646-b89a-7281b4362766)

  
  your own URL:
  
![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/e57db858-3b7d-44be-8a5d-91a24645ffbf)

#### Chatbot name
This name is shown as grey text beside the chatbot's icon. You may leave it empty or enter your chatbot/company name.

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/9c6306a6-ff8f-4572-b86f-ab247c503d01)
  
### Custom behavior
You can specify some additional actions that the bot will do if a specific event happens. Right now, you can send email(s) and set up a custom response when a user asks for human assistance.
Move to the "Custom behaviour" tab, you will see one empty event:

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/a2d10e12-1a70-4277-9a13-278c72df12ad)


Click the *Add an action* button and select one of the following options:

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/653b2e53-c6fd-4fb7-86fb-db3cdb4c23b8)

Click the *Add email button* and enter an email, then press the Return key. You can add multiple emails. When at least one email is added the green envelope icon is shown in the header, for your information:

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/3ef35636-240f-41af-9d0d-91ee5d2d1fe1)

To add a custom message, click the *Add an action* button again and then enter your custom message. This message works in the same way as that you specify for the project, but has a higher priority for the chatbot.

To remove an action, click the red cross button in the right corner of the action.

<Callout>Don't forget to save settings.</Callout>
### Paused sessions

![](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/6e0b35a3-6119-42b1-a7fd-6a32608238c8)

Here you will see data regarding any chat sessions in which AI has been deactivated due to an agent joining the conversation (if you have the setting toggled on).



Use the chat page button to jump into the active chat inside Crisp:

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/931a5c90-bdd4-4dab-b540-805dc8fc1e33)



Click "Run again" to reactive the AI in the paused session:

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/b6ab0205-79c9-45e3-a437-6dbd1b3f2380)


The AI will resume answering questions; however, if you join the conversation again, the AI chatbot will be deactivated again.

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/0eb4d116-c527-46bd-9fc8-c41d4b97f72e)

