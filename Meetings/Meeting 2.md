Here is the verbatim raw transcript of the audio file:

**Student:** Yeah Prof, this is em from our last meeting we said we wanted a place to host the application and test it when students come to us so...

**Lecturer:** Hold on, hold on, hold on. To host what?

**Student:** To host the application.

**Lecturer:** What application reference?

**Student:** Yeah in case maybe they build their project or something and then they want to em make their localhost public.

**Lecturer:** Mmhmm.

**Student:** Yes so this is em an SSH em expose localhost ports.

**Lecturer:** But who did the setup for them?

**Student:** We will create the account for them sir.

**Lecturer:** So how do you create it? You hand...

**Student:** We've not gotten into much details of that. We were focused on the em students and then the admin side.

**Lecturer:** Okay what's admin going to be doing?

**Student:** So... we will first create an account for the student and...

**Lecturer:** Mmhmm.

**Student:** Yeah we first create an account for the student. And then we will hand over those account the students the logins the SSH key and then the private key. Then...

**Lecturer:** Hold on oh. I want to understand the thought process right? Okay. Someone comes to DASSA and he wants to host his application for final year project. Then you create an account for the person right?

**Student:** Yes.

**Lecturer:** If you create, what is the person going to be doing? What's the person doing? If... say please come again with your question. If the person comes to us...

**Student:** Yes.

**Lecturer:** ...and he wants to he wants an account... mm?

**Student:** Yes.

**Lecturer:** What do you do? After creating the account... what account would that be?

**Student:** Em an account where... the student account where we will hand over the SSH key to the user.

**Lecturer:** You say... hold on oh. Student account. What is that account meant for? Okay. So how does that... how does that account look like? How does the account look like? Please yes you can hear you. Uh-huh you can hear me sure. Can you hear me? Can you hear me? Can you hear me? Christian am I breaking at your end? Christian am I breaking at your end too?

**Christian:** Please no you are not breaking. I can hear you clearly.

**Lecturer:** Yeah so Inshira you are the problem oh. Anyway. So we need to think through this carefully what you want people to be doing right? You now understand exactly what the FRP look like. But you have not thought through carefully how you intend to present the content to the people right? You must understand what they intend to deploy right? If the person says I want to deploy maybe an AI system there's going to be maybe a system just to do AI stuff on it they don't need you to do that. Do you get it?

**Student:** Yeah I get it.

**Lecturer:** They don't need you. The account I will give to you is the same account they also have. Even though I'm thinking through how to even make it specific so that every student who will come on board will be given their own account to log in and get things done instead of having a generic one so that if someone is misbehaving we can tell. That initial plan I had and then they mess it up so I have to stop.

Okay so someone comes to DASSA and for now the whole idea is deployment how to deploy. Now the access to the main server is the same the same port. The same port will be used. What is really the case is how to be able to expose the deployment online. That's the real deal. Initially you are responsible for the SSH and all those stuff but I'm already done with that part. So you don't need SSH again. You have to just monitor the SSH if it's up or if it's down. That's all over here. Do you get it?

**Student:** Yes please.

**Lecturer:** Uh-huh. And that... that work is not a hard thing because the APIs are already there for the FRP to stream active TCPs. Are you okay? Now since it's a project work for final year we don't have to let them know that ah I have done that part already. Then it becomes like oh you didn't do much work which we want to avoid that kind of conversation. So your responsibility really is to expose the server to web addresses. So the person comes and says I want to host my application at your end. All you need is to understand if it's going to be machine learning project or is going to be web application.

If it is web then you just give out the local machine to the person which I already have anyway. If it's going to be about machine learning it's a machine for that as well for doing that. Okay so if that's the case the argument is for you to be able to ideally if you ask me ideally if you ask me it would be nicer if you create an account for everyone here. And the person needs not know needs not know how to do SSH. So technically your job will be to create an account which is going to be a login for this application not for the server.

That's why I asked Inshira user name for what? To access what? And get what done? So you rather have to create an interface here to log in. When I log in don't tell me the SSH you want to do in there. Don't tell me. Instead when the person comes on board you should be able to write a script for the person and the person will deploy his things into the application.

Most often it will be an environment. So if you want to make this thing like very real for yourself because I have done most of the part already unfortunately so this what you can do if you want to get this work going. The service are already running which I've done already. Create an account for the user he creates the account. I want to deploy maybe something something I want to deploy it. How can I deploy it? For now let's focus on only web applications not machine learning stuff just web. The person must be able to expose their system onto the web. The IP will not change what will change is the DNS. Then you ask the person his preferred DNS name or web name. Then he will say maybe 'Nyankontong'. Then you now say 'https://www.google.com/url?sa=E&source=gmail&q=nyankontong.apatechlab.com'. That becomes the link the person will use to access their application.

So behind the scenes you've only built for them a subdomain. This is how to think about the process a subdomain. And then your script will go and create the account behind the scene. Now they are done they can access https://www.google.com/url?sa=E&source=gmail&q=nyankontong.apatechlab.com. That's the domain we'll be using. How will they push their work? They will have to push their work through your portal. No SSH. So that they can manage the application over here. Is it making sense?

**Student:** Yes please.

**Lecturer:** Uh-huh. So when I come here it will be like a Git account kind of.

**Student:** Okay okay okay. So meaning they will push like literally all their work like their files...

**Lecturer:** Exactly exactly. And then they will now write a custom script for running the application. How will they install the application? They have to write a custom script in for example say it will be a Max server so they write their own script dot sh. Then they will now say on their system here they will click run or install. So you ask them for the installer then they will tell you this is where the installer can be found. All here. They will now say install. If they install everything will just install and then come up. Finish. Is it making sense?

**Student:** Yes please.

**Lecturer:** Uh-huh. That will be for them. The admins can now go and check whatever is going on. So you create an admin account where we will see all the various ports running and who owns it will be there at the admin level. The admin wants to know who is consuming more memory what port is or what resource is taking all our memory. The admin wants to know for example which group had the highest location or space or storage taken. So if I want to update my work all I'll do is I'll just come here and then update it and I'm gone.

So the argument will be that is it possible to get someone all users to have their own Git account. Don't forget as part of the DASSA application the is a Git account over there. Is it possible that when they update their Git you go and stream and bring it down. Is it possible? This is how to think about the process. Is it making sense? Is it making sense?

**Student:** Yes please it's making sense.

**Lecturer:** So the FRP technically is the main server which I'm done already unfortunately. So your job now is to just create a host to deploy a web. A host to deploy a web. It ends there. And I'll share the account details in the chat. Let me just share the account details. How to access how to access the server for web. We have three servers one for web one for machine learning one for CUDA. So let me just... this thing was shared recently I don't know who I gave it to. Was it Inshira? Okay I've seen it. Okay I've shared the credentials over there. This is how to access the server. The server meant for web application. So I've shared it over there. Okay so if you want to access the server that's how to access it. And that's where you'll deploy your application anyway. And people will now come and log in to that application and they will want to access the content over there. Are we okay?

**Student:** Prof please em sorry my network went off so I had to change networks.

**Lecturer:** No problem. All I'm saying is I have posted the access to the main server in the chat I mean the Telegram page. That's the account to access the server for web application. That's where you'll deploy your application anyway. If you deploy the application that's where we now begin to look at how to create I'll create one for you to host your application. When I'm done you now create the rest for yourself. Let me not even do it do it for yourself. Go there create an account and expose your application when you are done. I mean whatever you are designing now. Share your screen. Whatever you are designing now go and host it yourself. Let's see how you host it. Uh-huh. So I will come in there create an account in your portal. When I'm done you only give me nothing except my domain name finished. Then I'll now download my stuff in there.

And I'm saying that you could do it this way where they have their own personal Git account and then you go and pull the content to their system here. Since they'll be doing consistent updates to their GitHub account then you'll now be pulling it down to the CI CD pull it down to the server here and deploy it. But as you pull it down they should be able to see it over here in the main application to manage some of the files if they want to manage it. Is it making sense? Do you get the concept?

**Student:** Prof please come again my line was breaking so I didn't really get you.

**Lecturer:** Christian did you hear me?

**Christian:** Okay so Christian is the problem now. Anyway.

**Lecturer:** What I'm saying is students will have to log in to this application your application. When they log in or create an account technically you only give them their username. In fact we don't have to even stress ourselves really. Everyone in DASSA is going to have an account to the DASSA app by default. So whoever wants to deploy will only show interest then you now deploy directly onto the system for them and see okay I've given you an account now use the same application to create your credentials. So you come here which means that don't create sign up for anybody just create login finished. The beauty is that the second year students have designed an application that application have all the login credentials. Are we okay Christian? Can you hear me now?

**Christian:** Yes please I can hear you clearly now.

**Lecturer:** So just have login. The login will come from the other system of DASSA. When it comes here then they will now spin off a project. That's the best way rather. They will now spin off a project. When they spin off a project they will fill a form and spin it up. Avoid Docker. I'll wish you avoid Docker and rather do an environment. An environment. So depending on what they want to do they will choose how they want to deploy their system. Is it going to be maybe a MERN stack or an Apache stack or whatever stack it is. They are responsible in setting up all their installers. When they come here they will now say install from the application. Then you now take the information go to SSH and run all the code for them. If you encounter an error you trace back to them to fix it and reinstall. When it is done you now give them access to their interface. It ends there. Going forward if they want to update their files they should do it on Git and then it will be streamed to this application. It ends there. Does it make sense now? Do you get the concept?

**Student:** Prof please it makes sense.

**Lecturer:** So whatever I've said let's assume you didn't hear it well go and rewrite it as a flowchart using Draw.io. And come and tell me the process flow of what I've told you right now. And let me have another meeting with you again. All what I've discussed now go and create a process flow diagram using Draw.io. Or any UML application. Design it and come and tell me how you understood what I've said. What will be separate what will be the one? Yes yes yes... no no no together it's a teamwork. It's a teamwork you are not doing individual things over here.

**Student:** Okay Prof.

**Lecturer:** Yeah it's a teamwork yeah. Okay. Yeah so do it together the way you understand it together. Don't forget I don't do individual stuff so it's going to be a teamwork anyway. Yeah. And then let me know when you are ready and we'll take it from there again. Okay. Are we okay now?

**Student:** Yes Prof.

**Lecturer:** Okay you have a blessed evening and then let's cross over safely to next year. Happy New Year to you too.