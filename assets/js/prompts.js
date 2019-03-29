var world = [
    {
        image: "./assets/images/ep.jpg",
        number: "1",
        prompt: "The weekend arrives and you finally have some time away from work. You've decided to spend some time at the local park for some fun low-stress activities.<br><br>   Suddenly you hear loud gunshots and screams. You can see both the assailant and the victims. From where you are, you are mostly obscured from the shooter's sight.<br><br>   The shooter's ride drives off without them. In a fit, they shout threats at the fleeing crowd, seemingly in a rage. They start to walk toward some people fleeing into the trees...",
        name: "Park Shooting",
        period: "Mid Life",
        fire: {
            critSuccess: "X",
            success: "(19+)<br>You pick up a flat stone by your feet, roughly half a pound in weight. You take aim and hurl it as if skipping across a pond. Beyond any expectations, it ricochets off the sidewalk and into the side of the shooter's head, knocking them unconscious. You disarm them, restrain them, and call for police.<br>",
            failure: "(10-18)<br>You gather up your rage and step out from behind your cover, shouting. The shooter spots you immediately and fires. You take the shot in your hip and collapse. Shock sets in and you fall unconscious, only to be revived at the hospital with grim news. Even with phisical rehabilitation, your chances of running again are slim to none.<br>",
            critFail: "(1-9)<br>You charge the shooter. Less than fifty feet seperate you. Hoping to throw them off balance and hold them accountable for their actions, your vision tunnels. You fail to notice the driver has returned. They plow over the curb and two other park goers, careening invariably in your direction. It is too late to escape...<br>(GAME OVER)<br>",
            failure: "X<br>",
            critFail: "X"
        },
        water: {
            critSuccess: "X<br>",
            success: "(10+)<br>You call paramedics and the police from behind your cover. Then slip from one hiding place to the next, getting closer and closer to the fallen victims while the shooter is preocupied. You tear their clothes to tourniquet their open wounds and do your best to assure them that everything will be alright. You insist that they do not make any movement or noise until the ambulance arrives. Then, you slip back to your hiding place to where you wait to give a statement.<br>",
            failure: "(1-9)<br>You attempt to slip from one hiding place to hiding place but in doing, attract all of the dogs who's leads were dropped in the commotion. You can't attempt to help the fallen victims without giving yourself away. But you will survive if you stay here.<br>",
            critFail: "X"
        },
        air: {
            critSuccess: "X<br>",
            success: "(12+)<br>Life has been rough up until this point. You're working a dead end job, your car barely runs, food is expensive, and even on your day off, the world seems to fall apart. You sneak back to your vehicle with the intent to flee but remember that it sounds like a drive by every time you pump the gas. With this in mind, you drive around the car park, sounding as many of the gunshot-like sounds as you can. The shooter flees the park and thus abandons their persuit of the innocent park-goers. You relate this to the arriving police officers.<br>",
            failure: "(1-11)<br>Life has been rough up until this point. You're working a dead end job, your car barely runs, food is expensive, and even on your day off, the world seems to fall apart. You sneak back to your vehicle with the intent to flee. It starts right up and runs quietly. You take this as a sign and leave the park. You are in tact but live with the fact that you had a chance to help but chose to abandon the other people in the park...<br>",
            critFail: "X"
        },
        earth: {
            critSuccess: "X<br>",
            success: "(8+)<br>You wait patiently for the shooter to be out of sight, looking for any incriminating evidence to link them to the crime. You notice the driver pull back into the parking lot and are able to copy the license plate into your phone. You take a photo of the vehicle and provide this information to the police upon their arrival.<br>",
            failure: "(1-7)<br>You attempt to gather information on the scene. You see the driver pull back into the parking lot and take a photo of them. As you do, it becomes abundantly apparent that the flash on your phone is on. The vehicle charges toward you. A passenger gets out with a baseball bat and uses it to smash your phone from your hand, then knocks you unconscious. You wake up in the hospital with the other victims with a horrendous headache and a swollen hand, but not critically injured.<br>(LOSE EXP)<br>",
            critFail: "X"
        }
    },
    {
        image: "",
        number: "2",
        prompt: "After a long and wonderful night with your friends, you are walking home. While enjoying the cool breeze, you decide to check social media on your phone. You are thinking about how you miss your friends from high school and wonder how they are doing. But before you can open the app, they screen turns dark and your phone light fades away. Your battery is dead.<br><br>   Rather than get upset, you decide its for the best - as you enjoy the gentle night downtown. It's late, so there aren't many people or cars. It is snowing gently and you note what a nice night it is. You take a deep breath and just enjoy the walk.<br><br>   Just as you turn the corner, you spot the person you always had a crush on in highschool. They look beautiful in the soft glow of the streetlight, scrolling through their phone as the get ready to call a lyft.<br><br>But as you walk up - their phone dies. It's obvious because they do that cute thing you remember them doing from your math class when you sat next to each other.<br><br>   Then they spot you - and it's as if the heavens have blessed you with an amazing opportunity.<br><br>   Soon enough, you are both laughing and walking back to your place. Fate has conspired to bring you together and it feels like it for both of you.<br><br>   But just as everything seems perfect, a man in a dark brown trench coat appears and brandishes a knife.<br><br>   'GIMME YOUR WALLETS!' He commands in a violent and hushed tone!<br><br>   Your fated love looks to you to see what you'll do.",
        name: "A Night With Friends",
        period: "",
        fire: {
            critSuccess: "X<br>",
            success: "(15+)<br>The first emotion to boil up within you is not fear - but anger. Everything was going perfectly until this person decided to interrupt your night. Visions of everyone you love flashes before you: Your family, your crush, your friends - and without a second thought, you lash out and strike the man with the knife. You are so quick and so brutal, that the robber is out cold. Your love gasps, gives you a hug, and you both call the police. Your high school crush will warm your bed for years to come, and you’ll hear her recall the heroic tale of your single punch until the day of your death.<br>(EXTRA EXP)<br>",
            failure: "(9-14)<br>The first emotion to boil up within you is not fear - but anger. Everything was going perfectly until this person decided to interrupt your night. Visions of everyone you love flashes before you: Your family, your crush, your friends - and without a second thought, you lash out and strike the man with the knife. You are so quick and so brutal, that the robber is out cold. Your love gasps backs away from you. Clearly this rush to violence is something she has seen before. She turns and runs despite your calling out to her. You wait for the police and another chance at love.<br>",
            critFail: "(1-8)<br>The first emotion to boil up within you is not fear - but anger. Everything was going perfectly until this person decided to interrupt your night. Visions of everyone you love flashes before you: Your family, your crush, your friends - and without a second thought, you lash out and strike the man with the knife. Your strike glances his chin, and suddenly a hot burning sensation rifles through your lower body. Then again, then again, as you hear the sound of thick blood dropping onto the ground. You’ve been stabbed three times, and the final thing you see before you die is the shocked face of your highschool crush.<br>(GAME OVER)"
        },
        water: {
            critSuccess: "X<br>",
            success: "(10+)<br>You hold your hands up and soften your tone very quickly. Look, you tell him, you don’t want any trouble. You tell him that you know the world is a cruel, unfair place, and that you’re happy to give him all the money in your wallet. You wish you could help more. The robber appears to soften just as much as you, and as you reach out to hand your wallet to him, he hesitates. There is a long silence, when the sound of police sirens ring out behind you. Though they are unrelated, the robber snaps to and turns tail. You’re safe, and so is your love.<br>",
            failure: "(1-9)<br>You hand over your wallet without a second thought, and encourage your love to do the same. You say there’s no way in hell sixty bucks and some plastic are worth your life. The robber rifles through the wallet and takes the cash - dropping them both before he runs off. “You’ll just cancel the credit cards anyway.” He mutters, disappearing into the darkness. You’re both safe, but your crush isn’t impressed. You end up sleeping alone in your bed tonight.<br>",
            critFail: "X"
        },
        air: {
            critSuccess: "(8+)<br>You step in front of your crush, shielding them from the assailant. “Calm Down”. You say, honest and humble, but full of strength and will. The spirit of air is speaking through you effortlessly. The man with the knife is taken aback. “What’s going on?” you ask, piercing through his rough appearance with the love of a revered buddhist monk. After some prodding and some silence, the robber is spilling his guts: His child has cancer and he just got fired - he has no idea how to make ends meet. You encourage him to get help - and even give him the business card of a friend who does pro-bono family therapy. The man is strangely hopeful after hearing your encouragement and receiving the love of a total stranger. He throws his knife in the bushes and swears never to commit another crime in his life - then runs off.<br>A full year later, you get an unmarked package in the mail with two-thousand dollars and a picture of a young child in a hospital bed - he is smiling and holding a sign that says 'Cancer Free'.<br>(EXTRA EXP)<br>",
            success: "(4-7)<br>You step in front of your crush, shielding them from the assailant. “Calm Down”. You say, honest and humble, but full of strength and will. The spirit of air is speaking through you effortlessly. The man with the knife is taken aback. “What’s going on?” you ask, piercing through his rough appearance with the love of a revered buddhist monk. After some prodding and some silence, the robber is spilling his guts: His child has cancer and he just got fired - he has no idea how to make ends meet. You encourage him to get help - and even give him the business card of a friend who does pro-bono family therapy. The man is strangely hopeful after hearing your encouragement and receiving the love of a total stranger. He throws his knife in the bushes and swears never to commit another crime in his life - then runs off.<br>",
            failure: "(1-3)<br>You step in front of your crush, shielding them from the assailant. “Calm Down”. You say, honest and humble, but your words are a bit slurred. The spirit of air attempts to speak through you, but you are too altered from the substances of the party. The robber brushes your words off and give you both a good shove - proving he means business. Without another word, you both give up your wallets and walk away defeated. You end up taking your crush to her house - but you do not go in with her. In fact, you never see each other again.<br>",
            critFail: "X"
        },
        earth: {
            critSuccess: "X<br>",
            success: "(12+)<br>You stand straight up and are endowed with the spirit of the earth - as you shout with a booming voice - “You can’t scare us! I’m a trained martial artist in the form of “jeet kun do” and I have no problem fighting you.” You are not a martial artist - but you sure seem like one in that moment. The assailant drops their knife and runs - leaving you and your love to laugh all the way home.<br>",
            failure: "(5-11)<br>You attempt to scare the robber off with a quick word or two, but before you can get your words out, they lunge toward you, knocking you down as they grapple for your wallet. As soon as they’ve got it, they stand up, give you a stern kick, and turn toward your new potential lover. They hand it over as quick as they can, and your newly found criminal acquaintance runs off.<br>",
            critFail: "(1-4)<br>You stand up straight and tell the robber that you’re a martial artist, trained in the art of brazilian ju jitsu. Low and behold, so are they, and they haven’t had a good fight in a while. As you advance toward them in a bluff, they trip you and bring you to the ground - driving their knife deep into your right thigh. They pat you down, steal your wallet, and run away - leaving you to bleed and moan. Without any working phones, it takes your highschool crush too long to get an ambulance, and you die on the cold park sidewalk.<br>(GAME OVER)"
        }
    },
    {
        image: "",
        number: "3",
        prompt: "You’re at home binging your favorite new netflix series when your phone rings - and it’s that job you applied for that you really wanted. They say that the person they were interested in didn’t show up to the interview today, so they’re calling you up. The thing is, you need to be there in an hour.<br><br>   You thank them, tell them you’ll be there soon, and hang up. You nearly trip over yourself getting into the shower and putting on some nice clothes on. On the way over there, you’re wondering who wouldn’t show up to such a kickass career opportunity. Since this is your first interview ever, you aren’t exactly sure how to act or what the process will be like.<br><br>   As if instantly, you realize you’re already in the waiting area, as the secretary calls you in. “Mrs. Williams will see you now”  she chants in that kind way only a good secretary can.<br><br>   You walk in, and on the other side of the desk is Mrs. Williams - a strong and independent asian woman who is making eye contact with you from the moment you arrive. Before you can even sit down, she is asking you questions. You’re responding with what feels like stock answers when she cuts you off - “Cut the bullshit” she snaps. “Why should I bring someone so young onto my team? What makes you special?” You respond…",
        name: "Your First Interview",
        period: "",
        fire: {
            critSuccess: "(7+)<br>Passion boils up within you - you’ve been waiting for this moment. You drop the hard story of your childhood on her, keeping it short enough to make your point but detailed enough for her to gasp a few times. You make the point clear - there is no one who could be more invested in this cause then you. To your surprise, she is smiling. She has the exact same story, and the exact same reasoning for getting into this industry. Before you know it, she’s taken you under her wing and is paying you incredibly well right out of the gate. Well played.<br>(EXTRA EXP + TITLE: WEALTHY CEO)<br>",
            success: "X<br>",
            failure: "(1-6)<br>Passion boils up within you - you’ve been waiting for this moment. You drop the hard story of your childhood on her, keeping it short enough to make your point but detailed enough for her to gasp a few times. You make the point clear - there is no one who could be more invested in this cause then you. To your surprise, she is frowning. “Your emotions mean nothing to me” she spits coldly, looking down at her nose at you. “I have the same story, but I never used it as an excuse to get a job. Get out.” You leave feeling like you made the wrong move, and never hear from them again.<br>",
            critFail: "X"
        },
        water: {
            critSuccess: "X<br>",
            success: "(10+)<br>You hold your hands up and soften your tone. “Nothing” you say, shrugging and smiling. “Nothing makes me special yet- but I am a blank canvas, and eager to learn from a master like yourself.” Short and sweet seems to do it for her, and she cracks a sly smile and nods. “I believe you. And i’m looking for someone who I can mold into my predecessor - let’s give you a shot”. You get the job and eventually live out your dream career as a CEO.<br>",
            failure: "(1-9)<br>You open your mouth and what feels like gibberish comes out. It’s hard to draw out your passion and showcase it in that moment. She looks unimpressed, but nods slowly. “Sure.” is all she says. You leave feeling like you played that wrong, and never hear back from that company again.<br>",
            critFail: "X"
        },
        air: {
            critSuccess: "(12+)<br>You look deep into her eyes, and take a deep breath before giving your response. As you tell her how deeply you care for this industry, you take every non-verbal queue perfectly. By the time you’re done, you can tell exactly what it is that she wants to hear, and you give it to her perfectly.<br>You can tell she’s impressed, and you can tell that she knows she’s been read.<br>“Well done.” She scoffs. “You’re going to do well here.”<br>(EXTRA EXP)<br>",
            success: "X<br>",
            failure: "(1-11)<br>You launch into an impassioned speech about meaning and philosophy, trying to tug at her deepest heart strings. But the harder you trying, the more difficult she becomes to read. At some point, you make your final pitch - and it doesn’t land well. She doesn’t say anything for a while, and then shrugs. “We’ll give you a call if we’re interested” she says coldly. You never hear from them again.<br>",
            critFail: "X"
        },
        earth: {
            critSuccess: "X<br>",
            success: "(10+)<br>You sit up straight and look her dead in the eye without saying a word. You’re confident, bold, and courageous - but you don’t say any of those things. You just look at her, endowed with the strength of the earth spirit. It must be a full minute before she breaks the silence, staying with your eye contact until the very end. Then, very suddenly, she breaks out into an uncharacteristic laughter. “I like it!” She exclaims. “You’re hired!”<br>",
            failure: "(1-9)<br>You sit up straight and look her dead in the eye without saying a word for a while. You’re confident, bold, and courageous - and that’s what you tell her. She looks unimpressed, but nods slowly. “Sure.” is all she says. You leave feeling like you played that wrong, and never hear back from that company again.<br>",
            critFail: "X"
        }
    },
    {
        image: "",
        number: "4",
        prompt: "It’s the moment you’ve been waiting for since you started your career as an artist - and you couldn’t be more nervous. After applying for a contest for original creators like yourself, you’ve made it past every round and into the finals. It’s time to meet with the boss himself.<br><br>His name is Mike Davis, and he’s a stout older man with tan skin. He’s been taking artists from nothing to something for more than forty years - and his very aura emanates success. He’s got a folder in his hands, and he hands each of the other finalists a different piece of paper.<br><br>Congratulations on making it here!” He exclaims, surprisingly upbeat despite his hardened appearance. “Just getting here means you’re worthy of doing something truly great - but many great artists die before their work finds success in this world. And I intend on working with people who can get results in just a few years!”<br><br>He turns and looks at each of the finalists carefully - it’s almost as if you’re on a TV show.<br><br>“So in this final round, we’re not going to test you on your creative merits - but on your business sense. In your folder, you’ll find a random business plan. You’ve got ten minutes to read through it, then you’ll make an elevator pitch about a product you’ve just learned about. Show me what you’ve got.”",
        name: "Closing The Deal",
        period: "",
        fire: {
            critSuccess: "(8+) You skip over most of the details and go right to the juiciest part of the business plan - the financials. You memorize all of the most impressive statistics, potentials for profit, and the trending of the market. You absolutely nail it, proving that you’re so much more than a creative. You do so well that not only do you take first place, but Mike Davis brings you on to his company as a creative consultant. Turns out, you were born to do this.<br><br>By the end of your life, you’re known as the “Maverick of Creative Consulting”, carving out your own reality TV show, magazine, and book series.<br>(EXTRA EXP + TITLE: MAVREICK OF CREATIVE CONSULTING)<br>",
            success: "X<br>",
            failure: "(1-7)<br>You skip over most of the details and go right to the juiciest part of the business plan - the financials. You memorize all of the most impressive statistics, potentials for profit, and the trending of the market. The problem is, you’re not the best at math. You stumble over explaining some of the finer details, and anyone with half of a business mind can tell that you’re mostly making things up. You take home a consolation prize and the bitter taste of mediocrity - but give up on your creative passions.<br>",
            critFail: "X"
        },
        water: {
            critSuccess: "(13+)<br>You buzz through the packet and snag a few important details - but focus most of your time on the man himself- Mike Davis. You read him as an impassioned but surprisingly soft man, so you decide to highlight the backstory and market relevance of the business you’re pitching. It works wonders, nearly bringing him to tears. You take first place, securing half a million dollars in funding and become a canonized artist in your field for decades to come.<br>(EXTRA EXP)<br>",
            success: "X<br>",
            failure: "(1-12)<br>You open your mouth and what feels like gibberish comes out. It’s hard to draw out your passion and showcase it in that moment. She looks unimpressed, but nods slowly. “Sure.” is all she says. You leave feeling like you played that wrong, and never hear back from that company again.<br>",
            critFail: "X"
        },
        air: {
            critSuccess: "X<br>",
            success: "X<br>",
            failure: "(1-20)<br>You barely read the packet, figuring that all of these business pitches sound the same anyway. You’ve seen shark tank a few times. You launch into an impassioned speech about meaning and philosophy, and get a little too meta. After about thirty seconds, you lose your train of thought and stumble into an awkward ending. Needless to say, this was the absolute wrong call - as the Air Spirit is so unfamiliar with worldly issues like this one.<br>",
            critFail: "X"
        },
        earth: {
            critSuccess: "X<br>",
            success: " (13+)<br>You take your ten minutes to memorize the most important stats and buzz words in your profile and get a general grasp of what makes this plan the most profitable and sustainable. You use terms like “scalable” and ‘return on investment”, which you have a very general grasp of. It works just fine, convincing the investor that you’re plenty versed in business to be worth the upfront cash. You take second place, giving you just enough to start a successful career.<br>",
            failure: "(1-12)<br>You take your ten minutes to memorize the most important stats and buzz words in your profile and get a general grasp of what makes this plan the most profitable and sustainable. You use terms like “scalable” and ‘return on investment”, without a great idea of what they mean - and it doesn’t work out well for you. After you finish your pitch, Mr. Davis scolds you in front of everyone - telling them about how you should never pretend to be an expert in something you’re not. You don’t even place, and leave the competition having done nothing but waste your time.<br>",
            critFail: "X"
        }
    },
    {
        image: "",
        number: "5",
        prompt: "After a heated debate about homelessness in the city of Denver, you and a friend decide that the best thing to do is to give back. Sticking to your guns, you suggest the local homeless shelter as a place to volunteer.<br><br>Your friend is acting like the saint they pretend to be during the whole ordeal - you start by helping to cook the food, then serve the food, then clean up the kitchen. But while washing dishes, you hear a commotion in the main area.<br><br>“What do you mean we’re late?!” You hear a man scream. “What am I supposed to feed my daughter?!”<br><br>You and your friend rush around the corner to see if you can help. Some obviously overwhelmed staff are trying to quiet the man down, but his anger quickly turns into a desperate cry for help. He’s late because someone stole his bag when he wasn’t looking, which means he can’t afford to eat anything that isn’t food at the shelter.<br><br>Your friend looks at you, and tells you that this isn’t your problem.  What do you do?",
        name: "Volunteering For A Shelter",
        period: "",
        fire: {
            critSuccess: "(15+)<br>Passion boils up within you as the fire spirit takes over your body - you struggled to eat your entire childhood, and it triggers you. Before you know it, you’re screaming at the staff about being incompetent and heartless - and none of them take it well. The staff starts ushering you out as you take out your phone and record what’s going down - mostly the image of the young girl crying as she asks for food. Already frustrated, the staff is mean and the video makes the shelter look terrible.<br><br>Lacking the resources to do anything about it, you put up a go fund me for the family and it goes absolutely viral - as does your video. Not only do they never have to worry about food again, but they’re back on their feet within a few months and you have a solid new friend.<br>(EXTRA EXP)<br>",
            success: "X<br>",
            failure: "X<br>",
            critFail: "(1-14)<br>Passion boils up within you as the fire spirit takes over your body - you struggled to eat your entire childhood, and it triggers you. Before you know it, you’re screaming at the staff about being incompetent and heartless - and none of them take it well. You’re asked not to return ever again, and although you get the family fed, the shelter ends up getting shut down for good.<br>(LOSE EXP)<br>"
        },
        water: {
            critSuccess: "(5+)<br>You run out, as your heart grows soft and strong through the blessing of the water spirit. You do what you do best and calm everyone down. In a few minutes, you’re all sitting in a circle drinking tea, trying to figure out how to best change the policy so that people who arrive late still have something to eat. Just when the daughter cries about still being hungry, a delivery driver arrives with the food you ordered fresh for them. After some discussion you find out the policy is due to strict city ordinance, and your heart tells you it’s time to change that.<br><br>With surprising ease, you gather enough signatures for a petition and make all the needed changes. And before you know it, you’ve got an energized base of supporters who love you - so you make a run for mayor. Not only do you win, but you live a remarkable life as a top notch politician, becoming known for your fight for those less fortunate than you. You become known as the best mayor in your city’s history - and they call you the “Mayor of the People”.<br>(EXTRA EXP + TITLE: MAYOR OF THE PEOPLE)<br>",
            success: "X<br>",
            failure: "(1-4)<br>You run out, as your heart grows soft and strong through the blessing of the water spirit. You do what you do best - calming everyone down. In a few minutes, you’re all sitting in a circle drinking tea, trying to figure out how to best change the policy so that people who arrive late still have something to eat. Just then, the daughter cries about still being hungry, sending the father into a rage. You offer some of the food that you set aside earlier, but as your friend goes to grab it, he spills both plates. They storm off, leaving you with a stone in the pit of your stomach. The shelter asks you never to come back and volunteer again<br>",
            critFail: "X"
        },
        air: {
            critSuccess: "X<br>",
            success: "(10+)<br>You rush out into the main hall as your whole being is taken over by the spirit of the air. You appeal to the reason that the staff and volunteers got into this work - they know the world is unfair and that the system is rigged to make it hard for certain people. What’s bending the rules going to hurt for the sake of feeding this family?<br><br>They cave pretty quickly, and you get only a curt nod from the gentleman as he feeds his daughter. You may not get much recognition for it, but you’re feeling high on your altruism for months to come.<br>",
            failure: "(1-9)<br>You rush out into the main hall as your being is taken over by the spirit of the air. You appeal to the reason that the staff and volunteers got into this work - they know the world is unfair and that the system is rigged to make it hard for certain people. But you’re preaching to the wrong crowd, as they start lashing out at you immediately. After a lengthy speech and some bickering, you turn around to ask the man if he’d be willing to let you buy him some food - but him and his daughter are already gone.<br><br>You were so caught up in trying to convince others that you forgot to do actually do anything about the situation - and now it’s too late. You spend the next few weeks regretting your spiritual hubris.<br>",
            critFail: "X"
        },
        earth: {
            critSuccess: "X<br>",
            success: "(10+)<br>You go to join them out in the main hall to see what the problem is. You take a neutral stance and hear what the issue is on both sides. The man just wants to feed his daughter, but the shelter has a strict food policy instituted by the city - and they’ve already been caught violating it before. So you offer a simple compromise - you give him the food you set aside for you and your friend just a few minutes earlier.<br><br>Not only do you feel better, but you earn some friends on the street and in the shelter. Life is trending in a loving and supportive direction.<br>",
            failure: "(1-9) - You go to join them out in the main hall to see what the problem is. You take a very neutral stance and hear what the issue is on both sides. The man just wants to feed his daughter, but the shelter has a strict food policy instituted by the city - and they’ve already been caught violating it before. If they get caught again, they’ll get shut down.<br><br>You side with the shelter, telling the man that he’ll have to find another shelter that serves food. He storms off, but you’re left with a stone in your stomach - you feel terrible for the next week, unable to shake the look in his daughter’s hungry eyes.<br>",
            critFail: "X"
        }
    },
    {
        image: "",
        number: "6",
        prompt: "It’s your fifth speaking engagement in seven days, and the crowd is loving you. Your business had really started to pick up steam last year, so now everyone is asking you to come and speak at their special event. Plus, you wrote a new book and your publisher has been sending you around to all these events. It doesn’t pay much, but folks seem to be eating it up. It’s not uncommon for you to sign a book or a t-shirt every now and then, but one particular fan is getting hungry for your attention.<br><br>You don’t know their name - but you definitely recognize them. You’ve seen them first in line at a lot of these conferences, and they’re always staring you down in an weird and aggressively attached manner.<br><br>And now here they are, asking for their third book signing. This time it’s not even your book, its this fan’s favorite book and they’re spouting on and on about how you’re going to be just like this author one day. You do the normal nodding and smiling, sign the book and head on your way.<br><br>After the event, you head back to your hotel to pack up. It takes until dark, but you’re ready to go to the airport and head home. As the elevator dings for the ground floor, the door opens to your raving fan. They’re immediately talking about how crazy the coincidence is, but something else seems to be afoot.<br><br>They follow you all the way to your car, and you do your best to tell them that it’s time to go, but they simply won’t leave you alone. It’s clear at this point they aren’t going to let you go without hearing their pitch. So they lay it on you.<br><br>“Take me with you and i’ll be your greatest apprentice!” They say, though they have no experience in the field and their social skills are severely lacking. You absolutely cannot have them working with, under, or anywhere near you. You gently tell them there isn’t space for that at this time. You open the car door, but they reach out and slam it shut. What element drives your response?",
        name: "A Little Too Close",
        period: "",
        fire: {
            critSuccess: "(12+)<br>A fire boils up within you - you’ve felt this weirdo stalking you for too long and it ends here. You open your phone and start livestreaming to the internet at large, and just absolutely destroy him. You tear into his lack of manners, his apparent greed, and even his privilege - you’re ranting for nearly ten minutes before you realize he’s broken down and is sobbing. You turn the camera to yourself and announce that you have no pity for his sadness, and talk about how we need to fail sometimes to learn a hard lesson. You then call him to action and change his ways as you stand him back up. He’s done crying now but still looks ashamed. You give a few final words of wisdom before departing, softening your tone and moving in the direction of inspiration. He seems surprisingly hopefully, which you tell him is important.<br><br>The video goes viral and you reap years of success from the situation -selling books and getting well paid gigs for decades to come.<br>(ADD AN EXTRA EXPERIENCE POINT + TITLE: THE CONFERENCE SAGE)<br>",
            success: "X<br>",
            failure: "X<br>",
            critFail: "(1-11) A fire boils up within you - you’ve felt this weirdo stalking you for too long and it ends here. You open your phone and start livestreaming to the internet at large, and just absolutely destroy him. You tear into his lack of manners, his apparent greed, and even his privilege - you’re ranting for nearly ten minutes before you realize he’s broken down and is sobbing.<br><br>You storm off without giving it a second thought - but the internet always remembers. He turns into a viral meme of all the most brutal sorts, which lives on for decades.<br><br>One day, several years from that moment, you run into a stranger who asks you if you remember him. You say you do, but that you don’t regret what you did. It turns out the stranger is your stalker’s brother, and your stalker eventually killed themselves from the shame of what happened.<br><br>You apologize - that isn’t what you intended. The brother says he doesn’t care - takes out a gun - and shoots you until you’re dead. (GAME OVER -YOU’RE DEAD.)<br>"
        },
        water: {
            critSuccess: "(8+)<br>You freeze and look up at them with an open heart. Gently, you talk to them about how you don’t think they way they are acting is healthy. You talk about the dangers of attachment, comparison, and making the people you look up to into demigods.<br><br>Later that night, the fan posts a video post parking lot encounter. The fan is reckoning what the change they have to make and how you’ve inspired them to become a more intentional person. It goes viral and is great for both of you. Well done!<br>(EXTRA EXP + TITLE: THE CONFERENCE SAGE)<br>",
            success: "X<br>",
            failure: "(1-7)<br>You try to talk them down gently, but it just doesn’t work. They keep speaking over you until you just give up and let them rant. It wastes nearly an hour of your time until they realize you just aren’t into being nice anymore. You get in the car and drive off without saying another word, but it ruins your night and you barely get enough sleep for the important duties of tomorrow.<br>(NO OUTCOME)<br>",
            critFail: "X"
        },
        air: {
            critSuccess: "X<br>",
            success: "(10+)<br>During the conference, you inspired plenty of folks - and one of them noticed the strange encounter at the elevator. Before anything contentious can happen, they rush in and cut him off - letting you escape. They shoot you a wink as you drive off. You’re lucky, but your good work has already started to pay off - and it will continue to do so for quite some time.<br>",
            failure: "(1-9) You try to dig into the trauma behind why this individual is so deeply attached to you. First it’s all about their big brother, then it’s about their mom, then their bully from middle school. Without thinking about it, you tell them that maybe they should think about going to therapy. They stop dead in their tracks and look at you with a dark and strange gaze. They didn’t like that at all.  They turn tail and leave for the night - but it isn’t the last you see of them.<br><br>Next month, you spot them at another conference, but they aren’t paying you any mind. It’s strange, you’re so used to them staring you down. You’re rolling your suitcase out to the car when you hear the screeching of tires, and turn to see him barreling toward you in a beat up volkswagen. The last thing you see are the headlights of his car, as he runs you down in spite.<br>(GAME OVER)<br>",
            critFail: "X"
        },
        earth: {
            critSuccess: "X<br>",
            success: "(10+)<br>You turn toward them quickly and look them dead in the eye.<br>“That’s not okay!” You nearly shout, like a stern parent reprimanding his child. “If you want to be successful in this world, you need to learn restraint!”<br>Your fan cowers for a moment, then regains their composure. They apologize, and say they don’t know what came over them. You keep your stern attitude and dig into them a little more, being honest about how overbearing they’ve been. About how that’s done nothing but turn you off from working with them in any way. You tell them it’s time to get help, as you get into the car and drive off. You never hear from them again, and you’re all the better for it. It’s even part of your next book.<br>",
            failure: "X<br>",
            critFail: "(1-9)<br>You immediately shout them down and tell them how inappropriate it is for them to be encroaching in your space in such a way. They start crying, obviously caught off guard and mentally unstable. They take out their phone and start filming you, when you blow up on them further. You smack the phone out of their hand and tell them to grow up.<br>The video goes viral and only shows the negative side of what happened - you get terrible PR and it damages your brand pretty bad.<br>(LOSE EXP)"
        }
    },
    {
        image: "",
        number: "7",
        prompt: "It’s been a week since you met your partner’s new parents -and they were nothing like you expected. While your partner is a soft, socially conscious person - they are not. Rural conservatives from the deep south, they’re more concerned with the border wall than the poverty line. You try not to get into politics with either of them, as it always leads to a pretty sticky situation.<br><br>Since you and your partner are getting serious, you’ve been setting up monthly dinners with the in-laws. They’re incredible cooks and you look forward to the food every time - but that’s pretty much it. In particular, your partner’s father seems to enjoy making things awkward for the both of you. This time, he’s making jokes about gun control and asks you your stance on the matter.<br><br></br>In the heart of keeping things neutral, you say that you think it's a complicated subject and that nothing is black and white. And just when your partner and him are about to get into it, you interject with a surprising question - “Do you hunt?” you blurt out, noting the pair of antlers on his back wall.<br><br>He smiles a broad smile that you haven’t seen before, as he nods. You tell him that you’ve actually been hunting once before - though you didn’t find or shoot anything. He aims to change that.<br><br></br>To your partner’s horror, you’re soon dressed in a hunter’s camouflage and donning a deadly weapon with their father-in-law. Which elemental will you draw upon to get through this evening?",
        name: "Hunting with your Father-In-Law",
        period: "",
        fire: {
            critSuccess: "(8+)<br>It takes some courage, but you decide that this is good for the both of you, and you’re doing your best to have a positive attitude about the whole thing. It’s quieter than you thought it would be, but you have a short conversation during your hunt about how important being connected to nature is. You’re caught off guard with how sacred your father-in-law treats the land, his hunting nest, and the animals he is searching for.<br><br>When the time finally comes and you spot an animal, you’re already engaged in the magic of the hunt. The fire spirit takes control of your arms and guides your bullet to a clean and quick kill. Your hunting partner is impressed, as he didn’t even see the animal, and it was a good distance away. He’ll tell the story of your kill for generations to come.<br><br>(EXTRA EXP + TITLE: MASTER OF THE HUNT)<br>",
            success: "X<br>",
            failure: "(1-7)<br>It takes some courage, but you decide that this is good for the both of you, and you’re doing your best to have a positive attitude about the whole thing. It’s quieter than you thought it would be, but you have a short conversation during your hunt about how important being connected to nature is. You’re caught off guard with how sacred your father-in-law treats the land and his hunt.<br><br>You’re more excited about this than you thought you’d be - which turns out to be a terrible curse. When you finally spot a deer walking within range, you pull up your gun to shoot. He barely notices until you fire, but you miss your mark and scare off the deer. Your father-in-law is quietly disappointed, which never changes for the rest of your life.<br>",
            critFail: "<br>"
        },
        water: {
            critSuccess: "(15+)<br>You’re been laying in wait for several hours now, mostly in the quiet beauty of nature, before a deer wanders into range. He taps you on the shoulder and points at it, suggesting that you should take the shot. You do as he taught you, squeezing the rifle in tight to your shoulder and pulling the trigger. You weren’t even really aiming at the creature, but it catches the creature in the hip and it staggers to the ground.<br><br>You both hurry up to it, and quickly note that it’s writhing in pain and confusion. The intensity of death’s presence courses through your body, but the spirit of the water helps you to control it. Your father in law hands you a large knife, and you end it without a second thought. You skin and clean the animal right there, feeling strangely grateful for the creature.<br>The experience brings you and your father-in-law much closer, making both you and your partner’s lives much easier. While you never go hunting with him again, you enjoy many natural outings together and things are smooth and lovely.<br>(EXTRA EXP + TITLE: LUCKY SHOT)<br>",
            success: "X<br>",
            failure: "X<br>",
            critFail: "(1-14)<br>You’re been laying in wait for several hours now, mostly in the quiet beauty of nature, before a deer wanders into range. He taps you on the shoulder and points at it, suggesting that you should take the shot. You do as he taught you, squeezing the rifle in tight to your shoulder and pulling the trigger. You weren’t even really aiming at the creature, but it catches the creature in the hip and it staggers awkwardly to the ground.<br><br>You both hurry up to it, and quickly note that it’s writhing in pain and confusion. The intensity of death’s presence courses through your body, and the spirit of water is not strong enough to keep it from clouding your judgement. Your father in law gets ready to pull out a knife, but you panic. Putting your gun to the creature’s skull, you pull the trigger to end it’s misery - but you don’t notice the hard rock it’s laying on. You aren’t sure if the bullet ricocheted off of the animal or the rock, just that a sharp pain is coursing through your mid section. The rest of your short life is cloudy and muddled, as you never even make it to the hospital.<br><br></br>(GAME OVER)"
        },
        air: {
            critSuccess: "X<br>",
            success: "<br>",
            failure: "(1-9)<br>You try to dig into the trauma behind why this individual is so deeply attached to you. First it’s all about their big brother, then it’s about their mom, then their bully from middle school. Without thinking about it, you tell them that maybe they should think about going to therapy. They stop dead in their tracks and look at you with a dark and strange gaze. They didn’t like that at all.  They turn tail and leave for the night - but it isn’t the last you see of them.<br><br>Next month, you spot them at another conference, but they aren’t paying you any mind. It’s strange, you’re so used to them staring you down. You’re rolling your suitcase out to the car when you hear the screeching of tires, and turn to see him barreling toward you in a beat up volkswagen. The last thing you see are the headlights of his car, as he runs you down in spite.<br>",
            critFail: "X"
        },
        earth: {
            critSuccess: "X<br>",
            success: "(10+)<br>You keep pretty quiet on the actual hunt - making sure your gun has the safety on multiple times. He’s taking the lead, and brings you to his favorite crows nest. Sitting in the quiet natural environment together, you can feel his aura begin to soften. You let the spirit of earth ground you in the beauty of your surroundings, and it only takes one comment about how much you love it for him to decide he likes you. While you don’t exchange many words, you become much closer amidst the trees. Nothing walks by today, but you both go home with a lot more than you came with.<br>It’s hard to describe to your partner, but their father is much kinder and starts inviting you both on hikes and other natural outings. It’s the beginning of a lovely past time, which brings you all closer together. He’s no longer making strange jokes or making you feel uncomfortable - and while your partner doesn’t quite understand what you did, they’re incredibly grateful<br>",
            failure: " (1-9)<br>You keep pretty quiet on the actual hunt - making sure your gun has the safety on multiple times. He’s taking the lead, and brings you to his favorite crows nest. Sitting in the quiet natural environment together, you can feel his aura begin to soften. You want to talk about how beautiful it is, but he keeps shushing you. After some awkward silence, you speak up to try and connect - but just then a deer walks by. You spook it with your sudden <br>",
            critFail: "X"
        }
    },
    {
        image: "",
        number: "8",
        prompt: "Haven’t you always been a rather fearless human? Challenges have given you a reason to go further, walls that were in your way were always a reason to climb higher, and when your friends told you ghost stories around the campfire you always laughed in their faces at the ridiculousness of it all. Who could believe in ghosts anyway?<br><br>That is why it’s rather upsetting that as you’re driving home from a night out at the bars - your eye catches something peculiar. In preparation for a lane change you give your mirror a quick look and suddenly see a figure sitting in the backseat.  Your heart skips a beat and time seems to slow down. You do a double-take and realize that…. it’s you? A mirage perhaps? A doppelganger? You’re not quite sure, but as time speeds back up, a street lamp illuminates the back of your car to reveal that there was nothing there at all. Just an empty seat.<br><br>You let out a quick nervous chuckle. There obviously had been nothing there. You’re just drunk and probably seeing things.  There’s no way that whatever you just saw, or rather didn’t see, was even real! You roll your eyes and continue down the freeway, eventually reaching home with little incident.<br><br>You head upstairs and enter your poorly lit apartment.  That damn kitchen light flickers like it always does, and the Blue Line rumbles past your living room window, causing your own floorboards to shudder from the heavy vibrations. Getting into your usual routine, you stride down the hallway and start getting ready for bed.<br><br>You enter the bathroom to brush your teeth and the temperature seems to drop, sending goosebumps up your arms.  That’s odd. It’s the dead of summer and your bathroom feels like a freezer. Did your AC unit really pump out that much cold air? You have little time to contemplate this mystery, however, as your gaze moves towards the mirror.<br><br>From your well kept hair to that drop-dead smile, that thing in the mirror certainly looks like you. But you can tell that something is wrong as it moves its arm and gives a short, intimidating wave. You are most certainly not waving. The figure in the mirror responds to your gawking attitude by giving you an all-knowing smirk, as if it knows more about you than you know about yourself.  A deep, unsettling feeling fills the pit in your stomach. Now, you know what Jon Snow must’ve felt like.<br><br>In a flash, your doppelganger reaches for the mirror-image of your razor blade and puts it up to its own neck - your neck.",
        name: "The Shifting Mirror",
        period: "",
        fire: {
            critSuccess: "(recommended hardest)<br>You’re hardly hesitate as you attempt to swing with your leg at your mirror and instead are met by the hand of your doppelganger which eerily slips out of the shimmering reflection.  You’re in shock as the rest of its body slowly takes shape in the real world, it’s all-knowing smile still shimmering.  It lets go of your limb and assumes a combative stance - the very kung fu stance you learned as a black belt student.  It gives you a curt nod and summons you forward with its index finger, urging you to attack again.<br><br>You assume a different pose opposite your opponent and take a deep breath, not falling  for your doppelganger’s taunt. Instead, you urge it to attack you by making the same motion.  The doppelganger charges, but despite looking just like you, it doesn’t appear to be able to keep up with your honed skills.  In time you manage to grab onto its hair, and sink your fingers into its scalp. With a resounding heave you shove the creature back into the mirror where it will remain, trapped for all eternity - never to bother you and yo’ ghostbustin’ skills again.<br><br>(EXTRA EXP + TITLE: GHOSTBUSTER)<br>",
            success: "X<br>",
            failure: "(XXX)<br>“What the hell is going on!?” You scream and burst into action as a fire lights your every muscle.  You give a roundhouse kick to your own mirror, causing it to shatter into a thousand pieces.  As your rage settles, you feel a warmth surround you as the temperature in the room seems to return to normal.  You have a slight cut from the initial kick, but nothing too serious.<br><br>As you’re cleaning up the shattered glass, you receive a text from your friend, “DUUUUDE - that shit we did. Man, I’m totalling wiggin’ out on it.” You don’t bother responding as you’re more irritated about the broken mirror.  You open your trash can lid and toss out the shattered remains of that whole experience into the garbage, stating out loud, “Ghosts aren’t fucking  real.”<br>",
            critFail: "(XXX)<br>A fire burns into you lithe form. You attempt to swing your leg at your mirror and instead are met by the hand of your doppelganger, eerily slipping out of the shimmering reflection.  You’re in shock as the rest of its body slowly takes shape in the real world, it’s all-knowing smile still shimmering.  It lets go of your limb and assumes a combative stance - the very kung fu stance you learned as a black belt student.  It gives you a curt nod and summons you forward with its index finger, urging you to attack again. With a howl you attack, but are instantaneously overmatched as it mirrors your technique, blow for blow. It takes time, but you slowly tire. Eventually it scores a hit that you are unable to come back from and the world slowly turns to darkness."
        },
        water: {
            critSuccess: "(recommended harder)<br>A surge of emotion flows through your bloodstream. You simply take three of your fingers and lightly press them against the mirror, attempting to touch the figures face. Instead of feeling the cold glass of your mirror, you feel the soft and gentle skin of your doppelganger’s temples. It’s like touching your own face.<br><br>A long moment passes and a calmness fills the air. You sense that this spirit simply needed a friend - that when they were alive they had needed someone like you in their life.  A feeling passes through you and it suddenly feels like your fingers aren’t touching the dopplegangers face, but your face instead - as if you’re feeling your own forehead by touching the mirror.  With a wide grin you give the faintest of laughs, as the creature turns suddenly into mist, pouring through your fingers to slowly become apart of you.<br><br>‘Maybe ghosts are real after all…’ You can’t help but think to yourself.<br>(EXTRA EXP + TITLE SPEAKER FOR THE DEAD)<br>",
            success: "X<br>",
            failure: "(XXX)<br>You glance into your doppelgangers eyes, into your own eyes. “Please don’t do that…” You warily respond, unsure of exactly what is happening. Your mirrored self looks confused and lost in thought, as if it’s unsure of what to do. You tentatively extend your hands towards the mirror and approach it, in an attempt to dissuade this hostile behavior.<br><br>Your doppelganger looks from the razor to you, and then back to the razor before suddenly fleeing and disappearing from the edges of the mirror. You rush towards it and press your face against the glass in an attempt to see where they went, however you’re unable to see them at all.<br><br>While you’re happy that you survived whatever just occurred, you can’t help but feel that you missed something… something larger than yourself.<br>",
            critFail: "X"
        },
        air: {
            critSuccess: "X<br>",
            success: "(recommended medium)<br>Instead of focusing on what’s in front of you you choose to look inwards. A soothing breeze courses through your body as you close your eyes and attempt to see the big picture.  You were at a bar… you had something to drink… is that all you had? No, there was something else.  Your friends had given you something, though you can’t entirely remember exactly what it was. You turn away from the mirror, rubbing your heavy eyes, and crash into the featherly bliss of your bed.<br>",
            failure: "(XXX)<br>‘God - what is happening!?’, you ask yourself as you attempt to look inwards. You close your eyes and rub them, only succeeding in agitating them more. A breeze brushes along your skin, and you think. ‘that darn AC really must have been on all day.’ You open your eyes, assuming that your doppelganger would disappear. Instead  you now find yourself trapped inside a mirrored cage.  It takes you a second for you to realize that you have somehow moved into an entirely new dimension, switching places with the doppelganger.  It is now taking on your everyday life as you can but watch through this strange oracular portal.  Eventually you manage to break out, but who knows how long it took you to figure that out.<br>",
            critFail: "X"
        },
        earth: {
            critSuccess: "(recommended easiest)<br>You feel a rush of your earth spirit fill every pour in your body, as you give the doppelganger that same all-knowing grin.  Crossing your arms over your chest you stand your ground defiantly, which confuses your opponent in the mirror.  Your doppelganger no longer seems as sure of itself, and you can tell that it’s starting to get anxious. A moment passes and its gaze shifts from the razor to you, and then back to the razor.  It yells out a silent howl and stabs itself in the neck. You don’t feel a thing, but it most certainly does, as its hand wobbles on the sink to stabilize, only to stumble and crash its head into the porcelain.  You no longer see its face from your angle, but you do see it’s blood squirting into the air, as it’s hand slides off the sink, never to be seen again.<br><br>‘Fuck you Jon Snow,’ you growl triumphantly, before heading off to into a peaceful sleep to help cure your inevitable hangover.  Ghosts still ain’t real.<br>",
            success: "(XXX)<br>You put on your best defiant smirk as you cross your arms over your chest, “Ghosts ain’t real, honey.” You tell the creature in front of you, snapping your fingers in a zigzag pattern to give your statement a lil’ pizzazz. Your doppelganger doesn’t really know what to make of your attitude. It pokes the razor at its neck and you also feel a slight poking.  For the rest of your life you seem to have this constant itch there that never seems to go away.<br>",
            failure: "X<br>",
            critFail: "(XXX)<br>You give the creature in the mirror a firm smile as you cross your arms defiantly, as if daring it to try. Your doppelganger gives off a silent hysterical laughter as it stabs itself in the neck. You feel a sudden jolt of pain as something pierces the side of your own neck - it’s your freakin’ razor!  You don’t have much time as your arm attempts to stall your fall, but your weight crumples beneath you and dizziness washes over you. You hit your head with a thud and crash onto the floor as blood splatters the shower curtains.<br><br>You see one last image before everything fades to blackness: your doppelganger pulling itself through the mirror and sarcastically smirking down at you, “Ghosts are real, silly.” It’s hysterical laughter now echoing in the chill air.<br>"
        }
    },
    {
        image: "",
        number: "9",
        prompt: "",
        name: "",
        period: "",
        fire: {
            critSuccess: "X<br>",
            success: "X<br>",
            failure: "X<br>",
            critFail: "X<br>"
        },
        water: {
            critSuccess: "X<br>",
            success: "X<br>",
            failure: "X<br>",
            critFail: "X"
        },
        air: {
            critSuccess: "X<br>",
            success: "X<br>",
            failure: "X<br>",
            critFail: "X"
        },
        earth: {
            critSuccess: "X<br>",
            success: "X",
            failure: "X<br>",
            critFail: "X"
        }
    },
    {
        image: "",
        number: "10",
        prompt: "",
        name: "",
        period: "",
        fire: {
            critSuccess: "X<br>",
            success: "X<br>",
            failure: "X<br>",
            critFail: "X<br>"
        },
        water: {
            critSuccess: "X<br>",
            success: "X<br>",
            failure: "X<br>",
            critFail: "X"
        },
        air: {
            critSuccess: "X<br>",
            success: "X<br>",
            failure: "X<br>",
            critFail: "X"
        },
        earth: {
            critSuccess: "X<br>",
            success: "X",
            failure: "X<br>",
            critFail: "X"
        }
    },
    // {
    //     image: "",
    //     number: "",
    //     prompt: "",
    //     name: "",
    //     period: "",
    //     fire: {
    //         critSuccess: "X<br>",
    //         success: "X<br>",
    //         failure: "X<br>",
    //         critFail: "X<br>"
    //     },
    //     water: {
    //         critSuccess: "X<br>",
    //         success: "X<br>",
    //         failure: "X<br>",
    //         critFail: "X"
    //     },
    //     air: {
    //         critSuccess: "X<br>",
    //         success: "X<br>",
    //         failure: "X<br>",
    //         critFail: "X"
    //     },
    //     earth: {
    //         critSuccess: "X<br>",
    //         success: "X",
    //         failure: "X<br>",
    //         critFail: "X"
    //     }
    // }
];

var one = [
    {
        number: "1",
        prompt: "You got 4 job offers at the same time///your tinder says you have 4 matches...",
        name: "FLIP CUP",
        type: "FFA",
    },{
        number: "2",
        prompt: "You just got a text from you ex, they tell you they want to get together for some tea and catch up, they just got a promotion and are moving in with a new partner. You  are split on how you should reply...",
        name: "PONG",
        type: "FFA",
    },{
        number: "3",
        prompt: "You snuck your high school crush into your room, your parents knock on your door - “open up” you are torn on how to react.",
        name: "ALPHABET",
        type: "FFA",
    },{
        number: "4",
        prompt: "You have a free day - you can’t decide whether play video games, take a day of self care, hit up your friends, or exercise...",
        name: "ELEMENTAL CARD GAME",
        type: "FFA",
    },{
        number: "5",
        prompt: "You are torn between going out with your friends and a night of self care...",
        name: "RIDDLES",
        type: "2V2",
    },{
        number: "6",
        prompt: "You found a wallet, you are torn between taking it or turning it in...",
        name: "MATHEMATICAL",
        type: "2V2",
    },{
        number: "7",
        prompt: "Your friend just got into a fight at a bar, you torn on whether you help them or let them learn their lesson on their own",
        name: "ROCK, PAPER, SCISSORS",
        type: "2V2",
    },{
        number: "8",
        prompt: "You're meeting a new person you like. You are torn between being who you are are who you think they would like / is it time to put on your mask or not? ",
        name: "CHARADES",
        type: "2V2",
    },{
        number: "9",
        prompt: "There is an addictive part of you, which it’s time to face...",
        name: "PONG",
        type: "3V1",
    },{
        number: "10",
        prompt: "There is a part of you that is not being honest...",
        name: "HUNGRY HIPPOS",
        type: "3V1",
    },{
        number: "11",
        prompt: "You're having financial problems and it’s time to get your finances together, which element needs to reigned in?",
        name: "SIMON",
        type: "3V1",
    },{
        number: "12",
        prompt: "College exams are upon us, your friends has offered to give you the answers... you are torn on what to do",
        name: "TRIVIA",
        type: "3V1",
    },
];

var another = [
    {
        number: "1",
        prompt: "Stung by bees, only one epi pen left. - Last spot on the lifeboat - last parshute - Future death race - ",
        name: "DEATH-DODGE BALL",
    },
    {
        number: "2",
        prompt: "You just got a text from you ex, they tell you they want to get together for some tea and catch up, they just got a promotion and are moving in with a new partner. You  are split on how you should reply...",
        name: "DEATH-PONG WAR",
    },
    {
        number: "3",
        prompt: "You found a wallet, you are torn between taking it or turning it in...",
        name: "DEATH-MATHEMATICAL",
    },
    {
        number: "4",
        prompt: "",
        name: "DEATH-NINJA",
    },
    {
        number: "5",
        prompt: "You are both architects pitching competing ideas for a grant, only one presentation will be funded.",
        name: "PICTIONARY",
    },
    {
        number: "6",
        prompt: "Both people lost in the wilderness for weeks, you come upon a camp with only enough food water for one person.<br><br>Hunting accident, both hunting and both fire at same time.",
        name: "ELEMENTAL ROCK, PAPER, SCISSORS",
    },
    {
        number: "7",
        prompt: "New boss, girlfriends parents, person you woke up next to.",
        name: "NAME GAME",
    },
    {
        number: "8",
        prompt: "",
        name: "CATEGORIES",
    }
];

switch(window.location.pathname){
    case "/illfoominati3/ovs.html":
    case "/C:/Users/tobro/sideProjects/illfoominati3/ovs.html":
    case "/ovs.html":
    ovs();
    console.log("One Vs. Oneself");
    console.log(window.location.pathname);
    break;
    case "/illfoominati3/ovw.html":
    case "/C:/Users/tobro/sideProjects/illfoominati3/ovw.html":
    case "/ovw.html":
    ovw();
    console.log("One Vs. The World");
    console.log(window.location.pathname);
    break;
    case "/illfoominati3/ova.html":
    case "/C:/Users/tobro/sideProjects/illfoominati3/ova.html":
    case "/ova.html":
    ova();
    console.log("One Vs. Another")
    console.log(window.location.pathname);
    break;
    default: 
    console.log("Switch Default");
    console.log(window.location.pathname);
    break;
};


function ovw(){
    for (var i=0; i <world.length; i++){
        var pButton = "<div class='btn btn-primary prompts'>Prompt</div>";
        
        var eButton = "<div class='btn btn-success earth'>Earth</div>";
        
        var fButton = "<div class='btn btn-danger fire'>Fire</div>";
        
        var aButton = "<div class='btn btn-light air'>Air</div>";
        
        var wButton = "<div class='btn btn-primary water'>Water</div>";
        
        var reactions = "<div class='btn btn-primary reactions'>Reactions</div>";

    var pBody = "<div class='promptData hide'>"+world[i].prompt+"</div>"
    
    var fire = "<div class='fireData hide'>Critical Success: "+world[i].fire.critSuccess+"<br>Success: "+world[i].fire.success+"<br>Failure: "+world[i].fire.failure+"<br>Critical Failure: "+world[i].fire.critFail+"<div>";

    var earth = "<div class='earthData hide'>Critical Success: "+world[i].earth.critSuccess+"<br>Success: "+world[i].earth.success+"<br>Failure: "+world[i].earth.failure+"<br>Critical Failure: "+world[i].earth.critFail+"<div>";

    var air = "<div class='airData hide'>Critical Success: "+world[i].air.critSuccess+"<br>Success: "+world[i].air.success+"<br>Failure: "+world[i].air.failure+"<br>Critical Failure: "+world[i].air.critFail+"<div>";

    var water = "<div class='waterData hide'>Critical Success: "+world[i].water.critSuccess+"<br>Success: "+world[i].water.success+"<br>Failure: "+world[i].water.failure+"<br>Critical Failure: "+world[i].water.critFail+"<div>";

    var pImg = "<div><h3 class='card-title'><span class='number'>"+world[i].number+": </span>"+world[i].name+": "+world[i].period+"</h3><span></span></div>"

     var pCard = $("<div class='card advcard'>"+pImg+
     "<div class='card-body'><ul><li>"+pButton+pBody+"</li><li>"+fButton+fire+"</li><li>"+eButton+earth+"</li><li>"+aButton+air+"</li><li>"+wButton+water+"</li></ul></div></div>");

     $(".promptBox").append(pCard);
 };
 
$(".advcard").on("click", ".btn", function(){
    if ($(this).hasClass("prompts")){
        $(this).parent().children(".promptData").toggleClass("hide");
    }
    else if ($(this).hasClass("fire")){
        $(this).parent().children(".fireData").toggleClass("hide");
    }
    else if ($(this).hasClass("earth")){
        $(this).parent().children(".earthData").toggleClass("hide");
    }
    else if ($(this).hasClass("air")){
        $(this).parent().children(".airData").toggleClass("hide");
    }
    else if ($(this).hasClass("water")){
        $(this).parent().children(".waterData").toggleClass("hide");
    }
})
};

function ovs(){
    for (var i=0; i <one.length; i++){
        var pButton = "<div class='btn btn-primary prompts'>Prompt</div>";
        
        var eButton = "<div class='btn btn-success earth'>Earth</div>";
        
        var fButton = "<div class='btn btn-danger fire'>Fire</div>";
        
        var aButton = "<div class='btn btn-light air'>Air</div>";
        
        var wButton = "<div class='btn btn-primary water'>Water</div>";
        
        var reactions = "<div class='btn btn-primary reactions'>Reactions</div>";

    var pBody = "<div class='promptData hide'>"+one[i].prompt+"</div>"

    var pImg = "<div><h3 class='card-title'><span class='number'>"+one[i].number+": </span>"+one[i].name+": "+one[i].type+"</h3><span></span></div>"

     var pCard = $("<div class='card advcard'>"+pImg+
     "<div class='card-body'><ul><li>"+pButton+pBody+"</li></ul></div></div>");

     $(".promptBox").append(pCard);
 };
$(".advcard").on("click", ".btn", function(){
    if ($(this).hasClass("prompts")){
        $(this).parent().children(".promptData").toggleClass("hide");
    }
    else if ($(this).hasClass("fire")){
        $(this).parent().children(".fireData").toggleClass("hide");
    }
    else if ($(this).hasClass("earth")){
        $(this).parent().children(".earthData").toggleClass("hide");
    }
    else if ($(this).hasClass("air")){
        $(this).parent().children(".airData").toggleClass("hide");
    }
    else if ($(this).hasClass("water")){
        $(this).parent().children(".waterData").toggleClass("hide");
    }
})
};

function ova(){
    for (var i=0; i <another.length; i++){
        var pButton = "<div class='btn btn-primary prompts'>Game</div>";

    var pBody = "<div class='promptData hide'>"+another[i].prompt+"</div>"

    var pImg = "<div><h3 class='card-title'><span class='number'>"+another[i].number+": </span>"+another[i].name+":</h3><span></span></div>"

     var pCard = $("<div class='card advcard'>"+pImg+
     "<div class='card-body'><ul><li>"+pButton+pBody+"</li></ul></div></div>");

     $(".promptBox").append(pCard);
 };
 

$(".advcard").on("click", ".btn", function(){
    if ($(this).hasClass("prompts")){
        $(this).parent().children(".promptData").toggleClass("hide");
    }
    else if ($(this).hasClass("fire")){
        $(this).parent().children(".fireData").toggleClass("hide");
    }
    else if ($(this).hasClass("earth")){
        $(this).parent().children(".earthData").toggleClass("hide");
    }
    else if ($(this).hasClass("air")){
        $(this).parent().children(".airData").toggleClass("hide");
    }
    else if ($(this).hasClass("water")){
        $(this).parent().children(".waterData").toggleClass("hide");
    }
})
};

// $(document).ready(function(){
//     console.log(window.location.pathname)
// });

{/* <img class='advimg' src='"+world[i].image+"'alt='advimg'></img> */}