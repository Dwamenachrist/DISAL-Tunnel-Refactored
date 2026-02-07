![[FRP 3.m4a]]

**Speaker 1:** Good afternoon, how are you doing?

**Speaker 2:** Yeah, I'm doing well.

**Speaker 1:** Can you use a white background? Or is it not possible?

**Speaker 2:** Yeah, because I find difficult watching black screens.

**Speaker 1:** Uh-huh, good. Okay. So take me through what is here and then...

**Speaker 2:** Mhm.

**Speaker 1:** Mhm.

**Speaker 2:** I... Hold on... Can we start again? When a student do what?

**Speaker 2:** Mhm.

**Speaker 2:** Mhm.

**Speaker 1:** So the dashboard be at... who... who designed the dashboard? Who designed it?

**Speaker 2:** Exactly. The dashboard, who designed it?

**Speaker 2:** I didn't get it. Who?

**Speaker 1:** Yeah, who designed it?

**Speaker 2:** Oh, you are breaking.

**Speaker 1:** Okay. Go ahead.

**Speaker 2:** [Silence/Background noise]

**Speaker 1:** Okay.

**Speaker 2:** Yeah.

**Speaker 1:** Okay. So let me come in here. It looks like our DNS is having a challenge. So it is most likely we will not be doing the domain name again. For example, the dot... alphatechlab.com will not work anymore. So rather, we will use the TCP approach as compared to the HTTP approach. So with the TCP approach, we will create our own, like... It will be the same IP for every student, but different ports. So the port will represent a given student.

**Speaker 2:** Mhm.

**Speaker 1:** Uh-huh. A port will be a student. So I show an example in a way, a port will be a student. So we can always manage that thing through the admin part.

**Speaker 2:** Mhm.

**Speaker 1:** Yeah. Anyway, go ahead. But don't change... Just keep it this... don't change. Keep it because maybe I'll resolve it before you graduate. Then we just use the same domain names.

**Speaker 2:** Yeah. Mhm. Okay.

**Speaker 1:** Mhm.

**Speaker 2:** Mhm.

**Speaker 1:** Yeah. But there is one more key... there is one key thing you didn't add over there. It's a very key thing. The admin... Where will the admin create the system for the student to come and use?

**Speaker 2:** Where would the admin create the... the system for the... yeah. When... Or where? Where will the admin create the access for the student to come and use?

**Speaker 2:** Yeah. Where will the admin create the system for the student to come and use? The admin must do something before the student can deploy, oh.

**Speaker 2:** Can you hear me?

**Speaker 1:** Hold on, oh. I'm coming. Can I start again? When a student do what?

**Speaker 1:** I'm coming. A student will have to deploy their system onto our system, right? That thing will not... It's not a vacuum. It's a space that needs to be created.

**Speaker 2:** Right. It's a space that needs to be created.

**Speaker 1:** So that credential will be given to the student.

**Speaker 2:** That credential.

**Speaker 1:** So I have to go to the system and create for the student his link to deploy his system. Are you okay?

**Speaker 2:** So after the deployment, you are supposed to give access to that student. To tell the student that, okay, to access the application, you must go to this and this and this. Where is that part done?

**Speaker 2:** Mhm.

**Speaker 1:** Don't for... Hold on, oh. I'm coming. I understand that the purpose of the student will only upload... or create a project and upload, right? When he is done uploading, he will deploy. When he is done deploying, which part of the application will create the access for students to view their results on the web?

**Speaker 2:** You don't get it?

**Speaker 2:** Okay.

**Speaker 1:** Mhm.

**Speaker 1:** So that public thing, who looks... who creates it? Which part of the system creates it? That... that so-called public thing, where is it created?

**Speaker 2:** I'm listening.

**Speaker 1:** I'm listening.

**Speaker 1:** Who... who creates that thing? That IP address, who will create it before they can use it?

**Speaker 2:** That's the... That... The IP that the person must use to access their portal, right? Which part of your application will create it?

**Speaker 2:** How? Student cannot create that thing. It is done by the admin. The admin must be the one to create that access for the student to come and then deploy their thing onto it. Don't forget that this IP must be pre-created for the student because they will need to use the IP for their routing.

**Speaker 2:** Mhm?

**Speaker 2:** Can you hear me?

**Speaker 1:** Uh-huh. Don't forget that whatever they are going to do, they have to create a port for themselves. They have to deploy onto... They have to open a port and deploy. If they are doing, for example, React or Node, and I'm also doing Node, we all have to create our own access... our own port to access our application, right?

**Speaker 2:** So you have to intelligently find a way to get that port information and bind it to your IP and make it exposed to the student.

**Speaker 2:** Mhm?

**Speaker 1:** Otherwise, they cannot... they can deploy but they can't access the application outside the data center. Only people who are in the center can access it. And that's not a good thing. It should be accessed by anybody outside the data house... warehouse... or data center.

**Speaker 2:** Aha. So the student creates all his application, tested it locally, everything is working perfectly. When he is done, he will need to deploy it. And how will he deploy it? There are two ways of doing the deployment. Either you give them access to the SSH to log in, deploy all their stuff... When you are done... When they are done, they will only supply us their ports. Their ports. And you now bind the port and give access. Finish.

**Speaker 2:** But if the application... That's why they have to learn how to write things in Python environment as compared to working in a Docker.

**Speaker 1:** Are you okay? Otherwise, they will all be forced to create Dockers for us. And that is much heavier for us. But if they are building everything in the Python environment, or they are creating their own environment for use, then we are kind of safe.

**Speaker 2:** Does it make sense?

**Speaker 1:** Uh-huh. So we can weigh... we can weigh all the differences and see if they having their own Dockers is the best deal, or if they have an environment is the best deal. So we can make it more dynamic where they will choose... More dynamic where they will choose if they want to go for Docker or an environment. If they want a Docker, we provision it for it. If they want Python environment, we also provision it for it. So it all depends on us.

**Speaker 2:** And for me, I wish it to be more dynamic. So when they are done, whatever they will do... whatever they will do, all we need is their script, then you deploy at your end. And then you bind the port. So all the port information, they will provide their port. Maybe they need a port... a port for database, a port for whatever they have. But they can only expose their web application. They can't expose their DB.

**Speaker 2:** This things require some knowledge of networking small to be able to appreciate all the things I'm saying. But it's not difficult.

**Speaker 1:** Aha. Because the IP will remain the same. It will not change. What will change is the port. And the port will be binded to the student. Right? So you bind to the student. And I'll give you... Do you have the IP address already to the server?

**Speaker 2:** Okay. So that's what... I'll share the directory to the... the TOML file or the INI file, and then you look at the structure.

**Speaker 1:** Aha. So that's what really you are doing. So you are only going to be appending onto the TOML file. Like the TOML file. And then you just re-run... you shut down the service and re-run it. That's all. Shut down, re-run. Shut down, re-run. Anytime you are adding on a new service, you shut down, you re-run. Shut down, re-run. Then you continue from there.

**Speaker 2:** So students have to be equipped in their knowledge on how to write the structures. How to write their SH file or their Bash file. Because the Bash file is what will be used for the deployment. So they first upload everything. Once they upload, then they execute their Bash file.

**Speaker 1:** Are you okay?

**Speaker 2:** Of course. Of course. The things you need... the name of the Bash file, the things you need, and how it should be organized.

**Speaker 1:** Exactly. And that documentation will form part of your final year project anyway. As a... as a write-up. So don't see it as just do it and leaving it behind. No. It's a... It's a whole write-up that will fuse into your main work.

**Speaker 2:** Mhm. So see that as a project, so it's not like it's isolated, oh. If you see them in isolation, then you be in trouble. It's a whole... Like... See it as your final year project. That is what it is.

**Speaker 1:** So whilst you are deploying, whilst you are like... you... how to deploy, then you write something about it. How to manage... system management is over there. System architecture is over there. System design is over there. How... how do you design this whole thing?

**Speaker 2:** So don't treat it as a Daisa project because this is serving as your final year project. Even though it's for Daisa. Do you get it?

**Speaker 2:** I didn't get... It doesn't matter. Yeah, it doesn't...

**Speaker 1:** Mhm. So it's all about how you are organizing the whole flow to ensure that, okay, this is what really is going to happen. Aha. How to organize the whole application. So maybe we can have maybe one single folder on the main server. Every student project enters that folder. Or organized in the same space.

**Speaker 2:** Does it make sense?

**Speaker 1:** Aha. This is how to reason about the whole process. And the student will now be the one to now write their SSH... or their Bash script. And then you now deploy. So you can write your system to be more intelligent such that if... if their Bash script changes in terms of information or the timestamp... or it's updated automatically your system will just run. It will just trigger an event. Then it will just run. Or if the system sees a new Bash file joining to just trigger. But that's more dangerous because the first one may have a bug. Whatever bug you see, you trap it and then re-route it back to the student.

**Speaker 1:** Okay. So that's how to go about it here. Okay. So on share your screen. This is what I want anyway. So start developing the various interface.

**Speaker 2:** Aha. So develop... have your interface designed according to this structure. And then we will look at it again. So I'm going to share what you see there anyway. Mhm. Where is my file? Okay. Can you see my file?

**Speaker 1:** Aha. So this is something that comes with the... the FRP anyway. You don't have to redesign it. You just have to use the... these are... they have API calls behind it. Just call the APIs and display them into the admin console. So instead of you coming to this link, you don't go that route again. Because this is independent of your system. But this same info is reported on your main system. So how then do you do that? There's an API call, call the API and then it to give you all the FTP endpoints. Then you pull them into your work. This... I always check to be sure whether all my servers are alive or not. The ones that have deployed so far, if they are alive or not. So this SSH 2, for machine learning students. All the ones with 222 is for machine learning. All the ones with 111 is for web application development.

**Speaker 1:** So in your case for example, the one you have access to is this one. So I can see... so if you tell me that you cannot log in, I'll come and check this one. This SSH. And SSH is active. So if you say you can't log in, then it simply means you don't have internet. That's why you cannot log in. Because it's not down. If it's down, then this one will also be off. And if this is off, then it means all these guys will also be off. Because they are all coming from Daisa 1. We also have what we call the Daisa 3. We have Daisa 3 and 4 which I have shut down. Because no one is... no one is currently using it anyway. So we use them for prototyping among the internship students. And now no more internship. I hope you are aware we do internship. I hope you are aware of that.

**Speaker 2:** Were you part of it?

**Speaker 2:** Were you part of it?

**Speaker 1:** Exactly. Daisa... that's internship. Are you aware we do internship?

**Speaker 2:** No, no, no, no. The old one we had.

**Speaker 1:** Oh, okay. Aha. So every year we do internship. So the Daisa 3 is for internship. Where they will learn to deploy things by themselves. So for this one... they are all production so you cannot come and do testing over here. These are all production. So any small mistake you do, you end up pulling the system down. So this is for... this is for production. So Daisa 3 is meant for... okay... goes to the registry. Is meant for internship. And Daisa 4 is meant for industrial prototyping. So if we get a contract for example, and we want to prototype it for them to see whether it is working or not, we use the Daisa 4. So 3 and 4 are down because there is nothing ongoing at the moment. Aha. So if there is nothing there then why do we waste our time and data and internet and power running them? Doesn't make sense. Because I'm paying for all this from my own money. So doesn't make sense to be doing those things now.

**Speaker 1:** Okay. So Daisa 2 very soon will be active because of the master students who be doing their project work next two months. So for next two months going, Daisa 2 will be very active. It is meant for students who cannot use Colab. Because their work is so intensive. Aha. So Daisa 1, you will be adding more... you... this is where you will be adding more. So now SSH is for logging into the system itself which you have access to. This is for Daisa manager which we launched in December to manage all the members. This is where it is coming from. And as you can see I was saying that our DNS has shut down so I couldn't do the HTTPS which I will be doing today anyway. So this is the manager. And then this is for the... our LMS. So from October going, we will start hosting examination in Daisa now. So when people are done and want to feel like they have done something in Daisa, they will take the Daisa examination. Which can be equally make them ready for other examinations for certification. So that's the LMS.

**Speaker 1:** So from here going, this is where you now start coming in. So now we have extra ports left. So assuming that someone wants to do a project work. All you will do is you replace... you just say Daisa 1... Daisa 1 underscore the student ID will now be here. So you pick the student ID, you come and create Daisa 1 underscore the name of the ID. Then you now spin off a port. I'm going to create a new port range for this. So the moment I see the port range I know that okay it is meant for our student only. So if we have for example 10 undergrad, I'll spin off 10 ports. Maybe I'll call it 9000 port... port 9000. So on port 9000 for example, 9001 will represent first student. 9002 second student. So when they finish their project work, we just shut down all those ports. So I'll give you a port range so that we don't end up confusing with our 6000 ports. Because 6000 is for managing the data center.

**Speaker 1:** Okay. So this is what you will be doing. So you add onto this one. Daisa 1 underscore... Daisa 1... The number 1 represent a given server cluster. So 2 second cluster, 3 third cluster, 4 fourth cluster. You are hoping to add 2 more by end of 2026 or midway 2027. To add two more then we can now stop and then focus on industry. Okay. So... and now people are trying to learn from us now so we need to also open up to host more people. As compared to those days where we are very... we are very closed. If you are not very close to us, we don't admit you into our system. Okay. It was also because we couldn't manage all the people at the time anyway.

**Speaker 1:** So... you now spin off Daisa 1 and then underscore student ID then a port 9000 range you assign. So once you assign, then whatever the student will do, he will just call the IP colon 9001. Then they will have access to the application. That's all. That's all. So we need to ensure that no student have access to the main SSH. But rather through... you can't have more than one SSH on the same machine unfortunately. Okay. So you need to try and find a way to ensure that students can only deploy their work onto our server through your portal, not through the terminal. And then their deploy... deploy.ssh will be the one to deploy their server for them. If there is an error, give the error back to them to fix their deployment... to fix their deployer. And re-run it again.

**Speaker 1:** And every student in this year apart from you will have to deploy their system onto Daisa before they can graduate. And you guys are not part of it because you have access to the SSH directly. So whichever way it will work for you. Aha. But all the rest who are doing anything... anything web will deploy. They do now learn from it how the industry really looks like. It's a pure industry practice. And no industry will even teach you anyway unless you are part of their core members. Because no one will expose their systems to you. But because we are doing research that's why we are exposing them anyway.

**Speaker 1:** Good. So go and think through it. You can access... I'll share the link with you where you can access my T... the TOML file. I'll show you where to access it. And then you just try to create just one for your team. I mean for yourself. Maybe Daisa 1 then one of your ID will be used. Then you just try to see if you can spin off a port. I'm yet to create the port anyway. So I'll just give you something... I'll give you the link then go and spin off and see if you can spin off. If you spin off and it works, then it means that okay you can spin off for other students to also come and use. Then be tracking the port so that one single port isn't given to two students. Because it will crash. It will crash. And a student can also demand for more than one port. They must be unique. Aha. That's why I prefer increment. 6001, 6002, 6003, 6004. So I know the next number is 6005. I don't end up mixing them. Aha. And it's for students so once the year has ended, we assume everyone has also ended. We just squash everything. Aha. We just squash everything. And then also block their account from logging in so you can't deploy again. Does it make sense now?

**Speaker 1:** Aha. This is how to think about the process. So I'll give you one to go and spin off if it works. Then you ask yourself what happens if you don't have to add it manually. Because it shouldn't be manual. But you first learn the manual way how to add manually onto the file and how to also automate the addition. If you know Python, it's a very simple thing to do. You just run a Python script to just push all the data into it, create your own system, do an exec on it and then run your shell as a service. That's all. I say they are simple because there are things I do for some years now so to me they are nothing. But for you, you have to learn and get used to it for the future. Anyway. Yeah. So that's it. So start developing the interface and then I'll send you the things to start spinning off and see if it will spin.

**Speaker 2:** Okay.

**Speaker 1:** Any question for me?

**Speaker 2:** No question.

**Speaker 1:** You are welcome. Okay. Yeah. So see you guys when you are available again.

**Speaker 2:** Yeah. Same with you guys. Yeah. Bye.