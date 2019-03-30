var world = [
    {
        image: "./assets/images/ep.jpg",
        number: "1",
        prompt: "The weekend arrives and you finally have some time away from work. You've decided to spend some time at the local park for some fun low-stress activities.<br><br>   Suddenly you hear loud gunshots and screams. You can see both the assailant and the victims. From where you are, you are mostly obscured from the shooter's sight.<br><br>   The shooter's ride drives off without them. In a fit, they shout threats at the fleeing crowd, seemingly in a rage. They start to walk toward some people fleeing into the trees...",
        name: "Park Shooting",
        period: "Mid Life",
        fire: {
            critSuccess: "(19+)<br>You pick up a flat stone by your feet, roughly half a pound in weight. You take aim and hurl it as if skipping across a pond. Beyond any expectations, it ricochets off the sidewalk and into the side of the shooter's head, knocking them unconscious. You disarm them, restrain them, and call for police.<br>",
            success: "X<br>",
            failure: "(1-18)<br>You gather up your rage and step out from behind your cover, shouting. The shooter spots you immediately and fires. You take the shot in your hip and collapse. Shock sets in and you fall unconscious, only to be revived at the hospital with grim news. Even with phisical rehabilitation, your chances of running again are slim to none.<br>",
            critFail: "(1-9)<br>You charge the shooter. Less than fifty feet seperate you. Hoping to throw them off balance and hold them accountable for their actions, your vision tunnels. You fail to notice the driver has returned. They plow over the curb and two other park goers, careening invariably in your direction. It is too late to escape...<br>(GAME OVER)<br>",
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
            critFail: "X<br>"
        },
        water: {
            critSuccess: "(15+)<br>You’re been laying in wait for several hours now, mostly in the quiet beauty of nature, before a deer wanders into range. He taps you on the shoulder and points at it, suggesting that you should take the shot. You do as he taught you, squeezing the rifle in tight to your shoulder and pulling the trigger. You weren’t even really aiming at the creature, but it catches the creature in the hip and it staggers to the ground.<br><br>You both hurry up to it, and quickly note that it’s writhing in pain and confusion. The intensity of death’s presence courses through your body, but the spirit of the water helps you to control it. Your father in law hands you a large knife, and you end it without a second thought. You skin and clean the animal right there, feeling strangely grateful for the creature.<br>The experience brings you and your father-in-law much closer, making both you and your partner’s lives much easier. While you never go hunting with him again, you enjoy many natural outings together and things are smooth and lovely.<br>(EXTRA EXP + TITLE: LUCKY SHOT)<br>",
            success: "X<br>",
            failure: "X<br>",
            critFail: "(1-14)<br>You’re been laying in wait for several hours now, mostly in the quiet beauty of nature, before a deer wanders into range. He taps you on the shoulder and points at it, suggesting that you should take the shot. You do as he taught you, squeezing the rifle in tight to your shoulder and pulling the trigger. You weren’t even really aiming at the creature, but it catches the creature in the hip and it staggers awkwardly to the ground.<br><br>You both hurry up to it, and quickly note that it’s writhing in pain and confusion. The intensity of death’s presence courses through your body, and the spirit of water is not strong enough to keep it from clouding your judgement. Your father in law gets ready to pull out a knife, but you panic. Putting your gun to the creature’s skull, you pull the trigger to end it’s misery - but you don’t notice the hard rock it’s laying on. You aren’t sure if the bullet ricocheted off of the animal or the rock, just that a sharp pain is coursing through your mid section. The rest of your short life is cloudy and muddled, as you never even make it to the hospital.<br><br></br>(GAME OVER)"
        },
        air: {
            critSuccess: "(10+)<br>As the hunt starts, you notice a strange and wonderful zen aura coming from your Father in law. Even though you’re holding guns and are about to kill something, there is a peace which permeates through the whole forest. After four hours and no animals in sight, you decide to head back to camp and have some lunch. You never actually go back out hunting again because the conversation is so good! You’re both lovers of nature and it’s a strong point for that relationship for the rest of your life.<Br>(EXTRA EXP + TITLE: BEFRIENDER OF THE FATHER IN LAW)<br>",
            success: "X<br>",
            failure: "(1-9)<br>As the hunt starts, you notice a strange and wonderful zen aura coming from your Father in law. Even though you’re holding guns and are about to kill something, there is a peace which permeates through the whole forest. After four hours and no animals in sight, you decide to head back to camp and have some lunch. You keep bringing up how peaceful he seems, and it absolutely triggers him. Whatever you were sense before completely disappears, and it ruins the whole camping trip.<br>",
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
            critSuccess: "(18+)<br>You’re hardly hesitate as you attempt to swing with your leg at your mirror and instead are met by the hand of your doppelganger which eerily slips out of the shimmering reflection.  You’re in shock as the rest of its body slowly takes shape in the real world, it’s all-knowing smile still shimmering.  It lets go of your limb and assumes a combative stance - the very kung fu stance you learned as a black belt student.  It gives you a curt nod and summons you forward with its index finger, urging you to attack again.<br><br>You assume a different pose opposite your opponent and take a deep breath, not falling  for your doppelganger’s taunt. Instead, you urge it to attack you by making the same motion.  The doppelganger charges, but despite looking just like you, it doesn’t appear to be able to keep up with your honed skills.  In time you manage to grab onto its hair, and sink your fingers into its scalp. With a resounding heave you shove the creature back into the mirror where it will remain, trapped for all eternity - never to bother you and yo’ ghostbustin’ skills again.<br><br>(EXTRA EXP + TITLE: GHOSTBUSTER)<br>",
            success: "X<br>",
            failure: "(11-17)<br>“What the hell is going on!?” You scream and burst into action as a fire lights your every muscle.  You give a roundhouse kick to your own mirror, causing it to shatter into a thousand pieces.  As your rage settles, you feel a warmth surround you as the temperature in the room seems to return to normal.  You have a slight cut from the initial kick, but nothing too serious.<br><br>As you’re cleaning up the shattered glass, you receive a text from your friend, “DUUUUDE - that shit we did. Man, I’m totalling wiggin’ out on it.” You don’t bother responding as you’re more irritated about the broken mirror.  You open your trash can lid and toss out the shattered remains of that whole experience into the garbage, stating out loud, “Ghosts aren’t fucking  real.”<br>",
            critFail: "(1-10)<br>A fire burns into you lithe form. You attempt to swing your leg at your mirror and instead are met by the hand of your doppelganger, eerily slipping out of the shimmering reflection.  You’re in shock as the rest of its body slowly takes shape in the real world, it’s all-knowing smile still shimmering.  It lets go of your limb and assumes a combative stance - the very kung fu stance you learned as a black belt student.  It gives you a curt nod and summons you forward with its index finger, urging you to attack again. With a howl you attack, but are instantaneously overmatched as it mirrors your technique, blow for blow. It takes time, but you slowly tire. Eventually it scores a hit that you are unable to come back from and the world slowly turns to darkness."
        },
        water: {
            critSuccess: "(15+)<br>A surge of emotion flows through your bloodstream. You simply take three of your fingers and lightly press them against the mirror, attempting to touch the figures face. Instead of feeling the cold glass of your mirror, you feel the soft and gentle skin of your doppelganger’s temples. It’s like touching your own face.<br><br>A long moment passes and a calmness fills the air. You sense that this spirit simply needed a friend - that when they were alive they had needed someone like you in their life.  A feeling passes through you and it suddenly feels like your fingers aren’t touching the dopplegangers face, but your face instead - as if you’re feeling your own forehead by touching the mirror.  With a wide grin you give the faintest of laughs, as the creature turns suddenly into mist, pouring through your fingers to slowly become apart of you.<br><br>‘Maybe ghosts are real after all…’ You can’t help but think to yourself.<br>(EXTRA EXP + TITLE SPEAKER FOR THE DEAD)<br>",
            success: "X<br>",
            failure: "(1-15)<br>You glance into your doppelgangers eyes, into your own eyes. “Please don’t do that…” You warily respond, unsure of exactly what is happening. Your mirrored self looks confused and lost in thought, as if it’s unsure of what to do. You tentatively extend your hands towards the mirror and approach it, in an attempt to dissuade this hostile behavior.<br><br>Your doppelganger looks from the razor to you, and then back to the razor before suddenly fleeing and disappearing from the edges of the mirror. You rush towards it and press your face against the glass in an attempt to see where they went, however you’re unable to see them at all.<br><br>While you’re happy that you survived whatever just occurred, you can’t help but feel that you missed something… something larger than yourself.<br>",
            critFail: "X"
        },
        air: {
            critSuccess: "X<br>",
            success: "(11+)<br>Instead of focusing on what’s in front of you you choose to look inwards. A soothing breeze courses through your body as you close your eyes and attempt to see the big picture.  You were at a bar… you had something to drink… is that all you had? No, there was something else.  Your friends had given you something, though you can’t entirely remember exactly what it was. You turn away from the mirror, rubbing your heavy eyes, and crash into the featherly bliss of your bed.<br>",
            failure: "(1-10)<br>‘God - what is happening!?’, you ask yourself as you attempt to look inwards. You close your eyes and rub them, only succeeding in agitating them more. A breeze brushes along your skin, and you think. ‘that darn AC really must have been on all day.’ You open your eyes, assuming that your doppelganger would disappear. Instead  you now find yourself trapped inside a mirrored cage.  It takes you a second for you to realize that you have somehow moved into an entirely new dimension, switching places with the doppelganger.  It is now taking on your everyday life as you can but watch through this strange oracular portal.  Eventually you manage to break out, but who knows how long it took you to figure that out.<br>(GAME OVER)<br>",
            critFail: "X"
        },
        earth: {
            critSuccess: "(12+)<br>You feel a rush of your earth spirit fill every pour in your body, as you give the doppelganger that same all-knowing grin.  Crossing your arms over your chest you stand your ground defiantly, which confuses your opponent in the mirror.  Your doppelganger no longer seems as sure of itself, and you can tell that it’s starting to get anxious. A moment passes and its gaze shifts from the razor to you, and then back to the razor.  It yells out a silent howl and stabs itself in the neck. You don’t feel a thing, but it most certainly does, as its hand wobbles on the sink to stabilize, only to stumble and crash its head into the porcelain.  You no longer see its face from your angle, but you do see it’s blood squirting into the air, as it’s hand slides off the sink, never to be seen again.<br><br>‘Fuck you Jon Snow,’ you growl triumphantly, before heading off to into a peaceful sleep to help cure your inevitable hangover.  Ghosts still ain’t real.<br>",
            success: "(6-11)<br>You put on your best defiant smirk as you cross your arms over your chest, “Ghosts ain’t real, honey.” You tell the creature in front of you, snapping your fingers in a zigzag pattern to give your statement a lil’ pizzazz. Your doppelganger doesn’t really know what to make of your attitude. It pokes the razor at its neck and you also feel a slight poking.  For the rest of your life you seem to have this constant itch there that never seems to go away.<br>",
            failure: "X<br>",
            critFail: "(1-5)<br>You give the creature in the mirror a firm smile as you cross your arms defiantly, as if daring it to try. Your doppelganger gives off a silent hysterical laughter as it stabs itself in the neck. You feel a sudden jolt of pain as something pierces the side of your own neck - it’s your freakin’ razor!  You don’t have much time as your arm attempts to stall your fall, but your weight crumples beneath you and dizziness washes over you. You hit your head with a thud and crash onto the floor as blood splatters the shower curtains.<br><br>You see one last image before everything fades to blackness: your doppelganger pulling itself through the mirror and sarcastically smirking down at you, “Ghosts are real, silly.” It’s hysterical laughter now echoing in the chill air.<br>"
        }
    },
    {
        image: "",
        number: "9",
        prompt: "Tires screech. Broken bits of glass fly through the air. You strain and crane your neck to look over to the passenger seat and see a bloody pool forming down your lover’s shirt. Rain water pours in around you. Click. You awaken in a twist of sweaty bed sheets. Fear clings to your fingertips. Shake it off. Another dream. Slide out of bed. Hunger strikes.<br><br>You haven’t made food in days. You look around your ransacked apartment. Bits of paper strewn about. Dirty forks in the sink. “Does any of your recycling actually ever get recycled?” Your daughter asked the last time she came over. It now seems like less of an investigation of the integrity of the recycling contract we make with utility companies and more a matter of your contribution to the field of public health. The latter is probably how she meant it.<br><br>You open the fridge and peer all the way to the back finding mostly condiments and sticky soy sauce splash residue. Don’t put the bottles on their sides. You hear this reminder, almost whispered in your ear. As you hold the fridge door open, you feel a hand land directly on yours. You start and turn around on your heel! Standing there directly in front of you is your lover. It cannot be. They perished in the crash.",
        name: "Ghost of a Lover",
        period: "",
        fire: {
            critSuccess: "X<br>",
            success: "(6+)<br>'You've come back to haunt me, even now? If it weren't for you fighting with me over... what was it, cheese?! Maybe then you'd still be alive and I'd still have my kid!'<br><br>In a rage of frustration, you storm away from the appiration. You slip on the spilled mustard from the week before, reach for something to catch yourself, lucky for you, you left the fridge open and were able to grab the door handle.<br><br>You decide it's time to get your act together and begin to clean, starting with the floor.<br>",
            failure: "X<br>",
            critFail: "(1-5)<br>'You've come back to haunt me, even now? If it weren't for you fighting with me over... what was it, cheese?! Maybe then you'd still be alive and I'd still have my kid!'<br><br>In a rage of frustration, you storm away from the appiration. You slip on the spilled mustard from the week before, reach for something to catch yourself, loosely snag a kitchen knife handle and fall. The knife falls with you. The blade, such as a razor's edge, didn't even hurt...<br>(GAME OVER)<br>"
        },
        water: {
            critSuccess: "(17+)<br>Tears well up in your tired eyes. 'I'm sorry!' you blubber. I knew we weren't doing well. I knew we should have split before that night... It was just easier not to fight. We should have fought! Maybe then you'd still be alive. Maybe not with me, but alive.<br><br>'NO!', you exclaim. 'No, I won't let us both go!' You brace yourself for the inevitable tears and fight your loathing, your will to let it all go, and abandon this life all together. You defy your very nature. You've always taken the path of least resistance but no more!<br><br>You contact a grief counselor the following morning and go to your regular appointments. Life can go on, you learn, even after tragedy.<br>(EXTRA EXP + TITLE: THE DEFIANT)<br>",
            success: "X<br>",
            failure: "X<br>",
            critFail: "(1-16)<br>Tears well up in your tired eyes. 'I'm sorry!' you blubber. I knew we weren't doing well. I knew we should have split before that night... It was just easier not to fight. We should have fought! Maybe then you'd still be alive. Maybe not with me, but alive.<br><br>You crumple to the floor of your kitchen in a sobbing heap, leaning into the still-open refridgerator.<br><br>Your daughter comes to visit the following Monday like she always does. It is unfortunate that she is the one who finds you...<br><br>The path of least resistance is not often the same for everyone you affect.<br>(GAME OVER)<br>"
        },
        air: {
            critSuccess: "X<br>",
            success: "(8+)<br>You reach out your hand to them and they pull back. You can see the sadness in their eyes and begin to apologize but they stop you. You hear their sweet voice once again. 'I am safe', they say. 'This is not your burden to bear, my assailant was brought to justice. You deserve none of this pain. Miss me, mourn for me, but do not tourture yourself for me. Instead, live for me!'<br><br>Then, as suddenly as they appeared, they vanish.<br><br>You resolve to do just that, live.<br>",
            failure: "(1-8)<br>Suddenly, they vanish and you are alone in the kitchen illuminated by the cool, emotionless, refridgerator light. Another hallicination brought on by guilt and mourning...<br>You shudder and shamble back to bed.<br>",
            critFail: "X"
        },
        earth: {
            critSuccess: "(12+)You immediately dismiss the perceived apparition as nonsense. Ghosts aren't real, and their death wasn't your fault. The shooter was brought to justice. You obviously need more sleep, better nutrition, and some sun. You set an alarm and write yourself a note to call your daughter the next day. It's time to move forward, other people need you.<br><br>After meeting with your daughter, she agrees to help you clean up your place. It turns into an 80's style musical cleaning montage complete with clean floor sock-sliding. Your relationship with her flourishes again.<br>",
            success: "X",
            failure: "(1-11)<br>Your dead pan face wrinkles in agony as your even keel nature breaks. You confess that you were drunk that night and that you were too sturborn to admit it. You yell into nothingness that it's all your fault!<br><br>Your suspicious upstairs neighbor hears this and calls the police.<br>",
            critFail: "X"
        }
    },
    {
        image: "",
        number: "10",
        prompt: "You’re off work and on the way to pick your partner up from their house. The two of you are heading to dinner at your parents. This is also the first time your parents are meeting your partner! You get to your parents house and you find them outside drinking and grilling in the backyard. Your mom squeals with excitement and greets your partner. She tells you to stay outside and keep your dad company while she gives your partner a tour of the house. You catch up with your dad for a bit when you hear a scream inside. You rush in to see what the commotion is all about and find your partner holding a lit candle high in the air with your mom dancing in her nightgown. They tell you they’re raising spirits. Just then your dad falls into the grill. You grab the amulet. Chant. CHANT! They’re all snails. Salt is your only option. But you grab pepper. Everyone sneezes uncontrollably until they cough. Somebody forgot their allergy medicine, Kevin. You die a horrible death. Maybe...you’re just looking for love. In all the wrong places.<br><br>You wake up.",
        name: "Nonsensical Dream",
        period: "",
        fire: {
            critSuccess: "X<br>",
            success: "(13+)You are covered in cold sweat. You didn't tell your partner how strange your folks can be! You call them up immediately and let them know about all of your parent's odd quirks. Together you can be a cohesive unit and be prepared for this weekend's dinner.<br>(EXTRA EXP)",
            failure: "<br>",
            critFail: "(1-12)<br>Filled with rage at your rediculous parents. Always making a scene... You call up your mother and tell her that you won't be coming to dinner because her and your father are just going to make fools out of themselves and ruin any chance you have to make a life with your partner... Who overhears you from the other room. They are more than a little disappointed. 'You have some things to sort out with your family right now. It's probably not the best time for us to date.' are the last words you hear from them before they leave."
        },
        water: {
            critSuccess: "(15+)<br>You decide that this dream must have been some sort of sign. You decide to confront your mother, bringing up her views on religion and your father's health. You gain much greater understanding of your own family and learn that your father has a secret depression. He is burning himself from the inside due to his inability to talk to someone about it.<br><br>Over time, you and your father open up to eachother more and you are able to help him out of his depression and back into healthy habits.<br>",
            success: "(10-14)<br>Your dream must have been an amalgamation of symbolism, you think. You talk with your partner about what they think it might mean.<br><br>You settle on the idea that it must mean that chaos will ensue if you were to bring them to meet the family just yet. You postpone until another time.<br>",
            failure: "(1-9)<br>You ponder what your dream might have meant but keep it to yourself. The following weekend, you and your partner go to see your parents after all. Your mother takes to them immediately and with so much excitement your father peels off to the garage to drink heavily.<br><br>When he comes back, your mother smells it on him and, teary-eyed, accuses him of trying to off himself and leave her alone in life. The tension is so thick that in the aftermath, your partner decides they don't want to be part of your family after all...<br>",
            critFail: "X"
        },
        air: {
            critSuccess: "X<br>",
            success: "(10+)<br>You slowly open your eyes and to near blinding white light. Coming to terms with your surroundings, a deep muffled voice welcomes you to consciousness. The operation was a success! Your new kidney from your sister has been accepted by your body and you're going to live after all.<br>",
            failure: "(5-9)<br>A fog slowly creeps back from your vision, enticing you into consciousness. You're keenly aware that your dream was the product of the pharmaceutical cocktail dripping into your arm. Your sister, who would have been your kidney donor, left the hospital early in panic, seeing you shake in fitful sleep. You'll only live another six months without the kidney and you can't afford the surgery again...<br>",
            critFail: "(1-4)<br>You are shunted into consciousness, jerking violently as you do. You try to shake off the drowsiness but it sticks to you like a fog. Moments later you pass out again, this time from blood loss. Your final image is of your kidney transplant surgeon staring frantically down at you, a torn kidney in his hand still. Acknowledgement of what just transpired hits you only as the world goes black.<br>(GAME OVER)"
        },
        earth: {
            critSuccess: "X<br>",
            success: "(11+)<br>Realizing that part of remaining grounded is being aware of all of your senses, even the subconscious, you resolve to call your mother. You tell her that you've had a horrifying dream and to keep dad away from anything with fire, ESPECIALY the grill. When you arrive the following weekend to have dinner, Your father made the same burgers he always does, except that he did them over the stove. Apparently the propane tank for his grill was faulty and had to be returned.<br>",
            failure: "(1-10)<br>You resolve to forget the lucid dream and dismiss it as just that; a dream. Your life exists here in reality. 'Stay grounded' you tell yourself.<br><br>When the weekend comes and you do make it to your parent's house, you learn that your father had burned his left arm to the shoulder due to a propane leak on the grill and your mother had taken to pagan and shamanistic rituals to bring his health back. She's gone nearly fanatic with it. Your partner and you both decide that it might be best if you return another time.<br>",
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
        prompt: "Its been a year since you last had a job, so you've been to dozens of interviews and nothing has come back. Then, when you've nearly given up, 4 job offers appear in the same evening! Which will you choose…? Battle it out in a game of flip cup!",
        name: "FLIP CUP",
        type: "FFA",
    },{
        number: "2",
        prompt: "You just got a text from your ex, and they tell you that they want to get together for some tea and catch up - they also just got a promotion and are moving in with a new partner. You’re split on how you should reply - which element takes the lead? Find out in a game of War Pong!",
        name: "PONG",
        type: "FFA",
    },{
        number: "3",
        prompt: "Its your senior year, and you’ve snuck your high school crush into your room. Everything is going smoothly when your our parents knock on your door - “open up!” They say! You're completely torn on how to react! Which element wins? Find out in a game of Alphabet!",
        name: "ALPHABET",
        type: "FFA",
    },{
        number: "4",
        prompt: "you have a free day - you can’t decide whether play video games, take a day of self care, hit up your friends, or exercise - which element takes the lead? Find out in an elemental card game!",
        name: "ELEMENTAL CARD GAME",
        type: "FFA",
    },{
        number: "5",
        prompt: "One of your friends is sad from a breakup and is asking if you'd go out with them. The problem is that you're super tired. You are torn between going out with your friend and a night of self care. Will you choose to take care of yourself, or your friend?",
        name: "RIDDLES",
        type: "2V2",
    },{
        number: "6",
        prompt: "You found a wallet, you are torn between taking it or turning it in. Which side takes the lead, selfless or selfish?",
        name: "MATHEMATICAL",
        type: "2V2",
    },{
        number: "7",
        prompt: "Ugh. Its been a long night and even though you’re out at a bar, everyone is bored and drinking too much. Of course, one of your friends is about to get into a fight with a stranger over something stupid. You are you torn on whether to help them or let them learn their lesson on their own. Which wins?",
        type: "2V2",
    },{
        number: "8",
        prompt: "You're meeting a new person and you really like them - you are torn between being who you really are who you think they would like. Is it time to put on your mask or not?",
        name: "CHARADES",
        type: "2V2",
    },{
        number: "9",
        prompt: "There is an addictive part of you which it’s time to face. Will the addiction win, or can the majority of your elements remove that toxic part of you?",
        name: "PONG",
        type: "3V1",
    },{
        number: "10",
        prompt: "You've got a triathlon coming up, but feels like certain parts of your being isn’t pulling it’s weight. Play hungry hungry hippos to find out which element of your being is truly hungry for success.",
        name: "HUNGRY HIPPOS",
        type: "3V1",
    },{
        number: "11",
        prompt: "You're having financial problems and aren't sure where you're overspending! It must be somewhere. You barely paid rent past month, so It’s time to get your money situation together - find out which element isn't keeping track in a game of Simon!",
        name: "SIMON",
        type: "3V1",
    },{
        number: "12",
        prompt: "College exams are here, and you've been given a unique and questionable opportunity - the chance to cheat. Does the part of you that so greedily craves success win against the rest of your being? Play a game of trivia to find out!",
        name: "TRIVIA",
        type: "3V1",
    },
];

var another = [
    {
        number: "1",
        prompt: "Individually, you’ve decided that it’s time to shake life up a bit - and both of your partners suggest skydiving lessons. Neither of you have been skydiving before, but figure it might be a great rush. You’re getting to know each other casually, talking over the headset about how strange the whole experience is. You’re both starting to like each other when a loud explosion shakes the hull.<br><br>“Our engine is blown out!” You hear the pilot yell, as both him and the instructor grab their packs early.<Br><br>“We have no choice, everyone needs to jump now!” The instructor screams. “Get those packs on and follow me!”<br><br>But they both jump first, leaving the two of you to look at each other. You turn around to the rack of remaining parachutes when it hits both of you - there is only one left. Play a game of dodgeball to decide who gets off the plane with the parachute!<br><br>((CUE SOUND: A DEATH MATCH IS ABOUT TO BEGIN))<br><br><p><span class='titleF'>DEATH GAME! </span></p><audio controls class='pad titleF'><source src='https://cdn.fbsbx.com/v/t59.3654-21/53238544_656295544840323_3697924570787872768_n.mp3/dEATH-MATCH-REAL-REAL.mp3?_nc_cat=102&_nc_ht=cdn.fbsbx.com&oh=5e5508a8f8fb8e2257dc874fa7c2a2dc&oe=5CA1FD2A&dl=1&fbclid=IwAR3UplkQKqTCEyIcOuXywaOzYFE6HAreki1dwHKjO8ZMHl54ZIcJA6E-V1Y' /></audio>",
        name: "DEATH-DODGE BALL"
    },
    {
        number: "2",
        prompt: "Somehow you’ve found yourself enrolled by the army, and now you find yourself in a ditch. You’ve been crawling around for weeks, and after some enemy fire, realize you’ve been separated from your entire force. It isn’t clear what side won or lost, but you know it’s time to get inside. You crawl to the nearest structure, which is just barely standing. You clear the room and set your things down to take a breath, and walk to the sink to see if it’s working. That’s when the door on the other side of the room opens - it’s an enemy soldier! Play a game of Pong War to see who survives!<br><br>((CUE SOUND: A DEATH MATCH IS ABOUT TO BEGIN))<br><br><p><span class='titleF'>DEATH GAME! </span></p><audio controls class='pad titleF'><source src='https://cdn.fbsbx.com/v/t59.3654-21/53238544_656295544840323_3697924570787872768_n.mp3/dEATH-MATCH-REAL-REAL.mp3?_nc_cat=102&_nc_ht=cdn.fbsbx.com&oh=5e5508a8f8fb8e2257dc874fa7c2a2dc&oe=5CA1FD2A&dl=1&fbclid=IwAR3UplkQKqTCEyIcOuXywaOzYFE6HAreki1dwHKjO8ZMHl54ZIcJA6E-V1Y' /></audio>",
        name: "DEATH-PONG WAR",
    },
    {
        number: "3",
        prompt: "This life, you’re the financial advisor to a brutal dictator. It’s been a surprisingly boring life in which you’ve never had any competition, until today… when a captured CPA sits down in front of you. The dictator walks in, and makes it very clear that he’s only planning on keeping one of you. He pulls out his pistol and tells you both that whoever can find a way to fund his new missile system will stay alive. You’ll solve a math problem in your head to find out who lives!<br><br>((CUE SOUND: A DEATH MATCH IS ABOUT TO BEGIN))<br><br><p><span class='titleF'>DEATH GAME! </span></p><audio controls class='pad titleF'><source src='https://cdn.fbsbx.com/v/t59.3654-21/53238544_656295544840323_3697924570787872768_n.mp3/dEATH-MATCH-REAL-REAL.mp3?_nc_cat=102&_nc_ht=cdn.fbsbx.com&oh=5e5508a8f8fb8e2257dc874fa7c2a2dc&oe=5CA1FD2A&dl=1&fbclid=IwAR3UplkQKqTCEyIcOuXywaOzYFE6HAreki1dwHKjO8ZMHl54ZIcJA6E-V1Y' /></audio>",
        name: "DEATH-MATHEMATICAL",
    },
    {
        number: "4",
        prompt: "You’re enrolled in a marital arts school to learn deadly art of brazillain ju jitsu - and it’s time for you to put your skills to the test in your first sparring match! It’s to prove you’re ready to move onto the next set of skills and a new belt, so you better win! Fight another human to seize victory and prove you’re ready for the next belt!",
        name: "NINJA",
    },
    {
        number: "5",
        prompt: "You are both architects pitching competing ideas for a grant, who have both been called back. Its just between the two of you, and it’s time for you to show off your stuff- but the thing is, you have to make your pitch in just one minute. Whoever wins this gets the money, so it’s time to battle it out! To represent this epic bout, you’ll compete in a game of Pictionary!",
        name: "PICTIONARY",
    },
    {
        number: "6",
        prompt: "You’ve both decided to go on a camping trip with a bunch of friends, though neither of you really know each other. It’s deep in the mountains, far enough away from civilization that you can all breathe some fresh air. But it one freak snowstorm later, everyone is cold, thirsty, and starving. All of your cars are stuck, which means you need to get out on foot and find the roads. At first you think someone may come to find you, so you all stay in your cars and try to hold out. But a few days later, that’s clearly not going to happen. The group decides to split up to look for food and clean water. You end up being a pair, and decide to follow and old, abandoned road. You follow it and see a shabby, broken down gas station, and both rush inside - frantically tearing through the store for anything that might be left. Lucky, you both find some bottles of water, but there doesn’t seem to be any food.<br><br>That’s when you see it - a single can of tuna. You’re both starving, but decide that it’s smarter to let one person gather their strength and eat the whole thing. Then maybe they can find help. You can think of no fairer way than rock paper scissors to decide who eats, and who stays hungry.",
        name: "ELEMENTAL ROCK, PAPER, SCISSORS",
    },
    {
        number: "7",
        prompt: "After a long night of clubbing, you both awake drowsily, turning over at different times to see another human being next to you. You both quickly close your eyes again, since you’re rather embarrassed. Neither of you remember much of what happened the night before, and you’re racking your brains just trying to remember the other person’s name… What was it? Didn’t your best friend introduce you?<br><br>An alarm clock goes off, and you both reach for the phone to silence it. Now’s the time. What is this person’s name??<br><br>You’ll be playing the Name Game to represent this scenario!!!",
        name: "NAME GAME",
    },
    {
        number: "8",
        prompt: "It’s been a long and grueling job interview for the both of you, and surprisingly, you’ve both been called back into the office. The company is a marketing firm, and they want to see how many clever names you can come up with for their new product. You’ll go back and forth thinking of those names until one of you can’t say one… And whoever is left standing wins the job!<br><br>You’ll recreate this situation by playing the game Categories! ",
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
    case "/illfoominati3/riddles.html":
    case "/C:/Users/tobro/sideProjects/illfoominati3/riddles.html":
    case "/riddles.html":
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

$(".riddle").on("click", function(){
    var riddles = [
        {
            riddle: "It is greater than God and more evil than the devil. The poor have it, the rich need it and if you eat it you’ll die. What is it?",
            number: "1",
            answer: "Nothing."
        },
        {
            riddle: "It walks on four legs in the morning, two legs at noon and three legs in the evening. What is it?",
            number: "2",
            answer: "Man"
        },
        {
            riddle: "I am the beginning of the end, and the end of time and space. I am essential to creation, and I surround every place. What am I?",
            number: "3",
            answer: "The letter e. End, timE, spacE, Every placE"
        },
        {
            riddle: "What always runs but never walks, often murmurs, never talks, has a bed but never sleeps, has a mouth but never eats?",
            number: "4",
            answer: "A river."
        },
        {
            riddle: "I never was, am always to be. No one ever saw me, nor ever will. And yet I am the confidence of all, To live and breath on this terrestrial ball. What am I?",
            number: "5",
            answer: "Tomorrow or the future."
        },
        {
            riddle: "At night they come without being fetched.<br>By day they are lost without being stolen.<br>What are they?",
            number: "6",
            answer: "The stars."
        },
        {
            riddle: "What is in seasons, seconds, centuries and minutes but not in decades, years or days?",
            number: "7",
            answer: "The letter ‘n’."
        },
        {
            riddle: "The one who makes it, sells it. The one who buys it, never uses it. The one that uses it never knows that he’s using it. What is it?",
            number: "8",
            answer: "A coffin"
        },
        {
            riddle: "The more you have of it, the less you see. What is it?",
            number: "9",
            answer: "Darkness"
        },
        {
            riddle: "What has a head, a tail, is brown, and has no legs?",
            number: "10",
            answer: "A penny."
        },
        {
            riddle: "What English word has three consecutive double letters?",
            number: "11",
            answer: "Bookkeeper."
        },
        {
            riddle: "What’s black when you get it, red when you use it, and white when you’re all through with it?",
            number: "12",
            answer: "Charcoal"
        },
        {
            riddle: "You throw away the outside and cook the inside. Then you eat the outside and throw away the inside. What did you eat?",
            number: "13",
            answer: "An ear of corn."
        },
        {
            riddle: "I am always hungry,<br>I must always be fed,<br>The finger I touch,<br>Will soon turn red",
            number: "14",
            answer: "Fire"
        },
        {
            riddle: "Ripped from my mother’s womb,<br>Beaten and burned,<br>I become a blood thirsty killer.<br>What am I?",
            number: "15",
            answer: "Iron ore"
        },
        {
            riddle: "I know a word of letters three. Add two, and fewer there will be!",
            number: "16",
            answer: "Few"
        },
        {
            riddle: "I give you a group of three. One is sitting down, and will never get up. The second eats as much as is given to him, yet is always hungry. The third goes away and never returns.",
            number: "17",
            answer: "Stove, fire, smoke"
        },
        {
            riddle: "I have four legs but no tail. Usually I am heard only at night. What am I?",
            number: "18",
            answer: "A frog"
        },
        {
            riddle: "Half-way up the hill, I see thee at last, lying beneath me with thy sounds and sights — A city in the twilight, dim and vast, with smoking roofs, soft bells, and gleaming lights.",
            number: "19",
            answer: "The past. (Longfellow)"
        },
        {
            riddle: "When young, I am sweet in the sun.<br>When middle-aged, I make you gay.<br>When old, I am valued more than ever.",
            number: "20",
            answer: "Wine"
        },
        {
            riddle: "All about, but cannot be seen,<br>Can be captured, cannot be held,<br>No throat, but can be heard.",
            number: "21",
            answer: "Wind"
        },
        {
            riddle: "If you break me<br>I do not stop working,<br>If you touch me<br>I may be snared,<br>If you lose me<br>Nothing will matter.",
            number: "22",
            answer: "Your heart"
        },
        {
            riddle: "Until I am measured I am not known,<br>Yet how you miss me when I have flown.",
            number: "23",
            answer: "Time"
        },
        {
            riddle: "I drive men mad<br>For love of me,<br>Easily beaten,<br>Never free.",
            number: "24",
            answer: "Gold"
        },
        {
            riddle: "When set loose<br>I fly away,<br>Never so cursed<br>As when I go astray.",
            number: "25",
            answer: "A fart"
        },
        {
            riddle: "Lighter than what I am made of,<br>More of me is hidden Than is seen.",
            number: "26",
            answer: "Iceberg"
        },
        {
            riddle: "Each morning I appear to lie at your feet,<br>All day I will follow no matter how fast you run,<br>Yet I nearly perish in the midday sun.",
            number: "27",
            answer: "Shadow"
        },
        {
            riddle: "My life can be measured in hours,<br>I serve by being devoured.<br>Thin, I am quick<br>Fat, I am slow<br>Wind is my foe.",
            number: "28",
            answer: "A candle"
        },
        {
            riddle: "I am seen in the water if seen in the sky,<br>I am in the rainbow, a jay’s feather,and lapis lazuli.",
            number: "29",
            answer: "Blue"
        },
        {
            riddle: "Glittering points that downward thrust,<br>Sparkling spears that never rust.",
            number: "30",
            answer: "Icicle"
        },
        {
            riddle: "You heard me before, yet you hear me again,<br>Then I die, ’till you call me again.",
            number: "31",
            answer: "An echo"
        },
        {
            riddle: "Three lives have I.<br>Gentle enough to soothe the skin,<br>Light enough to caress the sky,<br>Hard enough to crack rocks.",
            number: "32",
            answer: "Water"
        },
        {
            riddle: "At the sound of me, men may dream or stamp their feet,<br>At the sound of me, women may laugh or sometimes weep.",
            number: "33",
            answer: "Music"
        },
        {
            riddle: "What does man love more than life<br>Fear more than death or mortal strife<br>What the poor have, the rich require,<br>and what contented men desire,<br>What the miser spends and the spendthrift saves<br>And all men carry to their graves?",
            number: "34",
            answer: "Nothing"
        },
        {
            riddle: "I build up castles.<br>I tear down mountains.<br>I make some men blind,<br>I help others to see.<br>What am I?",
            number: "35",
            answer: "Sand"
        },
        {
            riddle: "Two in a corner,<br>1 in a room,<br>0 in a house,<br>but 1 in a shelter.<br>What am I?",
            number: "36",
            answer: "The letter r."
        },
        {
            riddle: "Five hundred begins it, five hundred ends it,<br>Five in the middle is seen;<br>First of all figures, the first of all letters,<br>Take up their stations between.<br>Join all together, and then you will bring<br>Before you the name of an eminent king.",
            number: "37",
            answer: "DAVID (Roman numerals)"
        },
        {
            riddle: "It cannot be seen, it weighs nothing, but when put into a barrel, it makes it lighter. What is it?",
            number: "38",
            answer: "A hole"
        },
        {
            riddle: "How far will a blind dog walk into a forest?",
            number: "39",
            answer: "Halfway. After he gets halfway, he’s walking out of the forest."
        },
        {
            riddle: "What happens when you throw a yellow rock into a purple stream?",
            number: "40",
            answer: "It makes a splash."
        },
        {
            riddle: "What starts with a T, ends with a T, and has T in it?",
            number: "41",
            answer: "A teapot"
        },
        {
            riddle: "As I went over London Bridge I met my sister Jenny,<br>I broke her neck and drank her blood and left her standing empty.",
            number: "42",
            answer: "A bottle of gin"
        },
        {
            riddle: "Whoever makes it, tells it not.<br>Whoever takes it, knows it not.<br>Whoever knows it, wants it not",
            number: "43",
            answer: "Counterfeit money"
        },
        {
            riddle: "I am, in truth, a yellow fork from tables in the sky,<br>By inadvertent fingers dropped the awful cutlery.<br>Of mansions never quite disclosed and never quite concealed<br>The apparatus of the dark to ignorance revealed.",
            number: "44",
            answer: "Lightning"
        },
        {
            riddle: "You saw me where I never was and where I could not be. And yet within that very place, my face you often see. What am I?",
            number: "45",
            answer: "A reflection"
        },
        {
            riddle: "Say my name and I disappear. What am I?",
            number: "46",
            answer: "Silence"
        },
        {
            riddle: "What is it that after you take away the whole, some still remains?",
            number: "47",
            answer: "Wholesome"
        },
        {
            riddle: "A box without hinges, lock or key, yet golden treasure lies within. What is it?",
            number: "48",
            answer: "An egg"
        },
        {
            riddle: "Forward I’m heavy, but backwards I’m not. What am I?",
            number: "49",
            answer: "Ton"
        },
        {
            riddle: "Why doesn’t a mountain covered with snow catch cold?",
            number: "50",
            answer: "Because it has a snowcap"
        },
        {
            riddle: "I can be long, or I can be short.<br>I can be grown, and I can be bought.<br>I can be painted, or left bare.<br>I can be round, or square.<br>What am I?",
            number: "51",
            answer: "A fingernail"
        },
        {
            riddle: "One by one we fall from heaven down into the depths of past,<br>And our world is ever upturned so that yet some time we’ll last.",
            number: "52",
            answer: "Sands in an hourglass"
        },
        {
            riddle: "I drift forever with the current down these long canals they’ve made,<br>Tame, yet wild, I run elusive Multitasking to your aid.<br>Before I came, the world was darker, colder, sometimes, rougher, true<br>But though I might make living easy, I’m good at killing people too.",
            number: "53",
            answer: "Electricity (or lightning)"
        },
        {
            riddle: "Reaching stiffly for the sky,<br>I bare my fingers when it’s cold<br>In warmth I wear an emerald glove<br>And in between I dress in gold",
            number: "54",
            answer: "A deciduous tree"
        },
        {
            riddle: "Kings and queens may cling to power and the jester’s got his call,<br>But, as you may all discover, the common one outranks them all.",
            number: "55",
            answer: "An ace (in a deck of cards)"
        },
        {
            riddle: "Every dawn begins with me<br>At dusk I’ll be the first you see<br>And daybreak couldn’t come without<br>What midday centers all about<br>Daises grow from me, I’m told<br>And when I come, I end all cold<br>But in the sun I won’t be found<br>Yet still, each day I’ll be around.",
            number: "56",
            answer: "The letter d."
        },
        {
            riddle: "Kings and lords and christians raised them<br>Since they stand for higher powers<br>Yet few of them would stand, I’m certain,<br>If women ruled this world of ours.",
            number: "57",
            answer: "A tower."
        },
        {
            riddle: "Soft and fragile is my skin, I get my growth in mud<br>I’m dangerous as much as pretty, for if not careful, I draw blood.",
            number: "58",
            answer: "A thorn"
        },
        {
            riddle: "Three brothers share a family sport: A non-stop marathon<br>The oldest one is fat and short And trudges slowly on<br>The middle brother’s tall and slim And keeps a steady pace<br>The youngest runs just like the wind, a speeding through the race<br>“He’s young in years, we let him run,” the other brothers say<br>“‘Cause though he’s surely number one, he’s second, in a way.”",
            number: "59",
            answer: "The hands on a clock (hour, minute, second).1"
        },
        {
            riddle: "It’s true I bring serenity,<br>And hang around the stars<br>But yet I live in misery;<br>You’ll find me behind bars<br>With thieves and villains I consort<br>In prison I’ll be found<br>But I would never go to court,<br>Unless there’s more than one",
            number: "60",
            answer: "The letter s"
        },
        {
            riddle: "I am a box that holds keys without locks, yet they can unlock your soul. What am I?",
            number: "61",
            answer: "A piano."
        },
        {
            riddle: "There once was a strange man who loved wordplay, he had a very important and successful business that would take insect shipments from all across the world and distribute them to zoos across the US.",
            number: "62",
            answer: "ImportANT"
        },
        {
            riddle: "There is one word that stands the test of time and holds fast to the center of everything. Though everyone will try at least once in their life to move around this word, but in fact, unknowingly, they use it every moment of the day. Young or old, awake or in sleep, human or animal, this word stands fast. It belongs to everyone, to all living things, but no one can master it. The word is?",
            number: "63",
            answer: "Gravity"
        },
        {
            riddle: "My days are in the summer<br>When you’ll eat me when I’m hot<br>In fact I’ll even eat myself<br>Where battles tough are fought<br>But when you find me in a fight<br>‘Twill be high in the sky<br>And if you catch me napping<br>I suggest you let me lie<br>When you’re bad come to my house<br>From Ma get thoughts profound<br>Am I big or am I small?<br>Some say I’m just a pound.",
            number: "64",
            answer: "Dog. Dog days, hot dog, dog pound, dog fight."
        },
        {
            riddle: "My first is twice in apple but not once in tart. My second is in liver but not in heart. My third is in giant and also in ghost. Whole I’m best when I am roast. What am I?",
            number: "65",
            answer: "A pig."
        },
        {
            riddle: "What gets wetter as it dries?",
            number: "66",
            answer: "A towel"
        },
        {
            riddle: "This is a most unusual paragraph. How quickly can you find out what is so unusual about it? It looks so ordinary you’d think nothing was wrong with it – and in fact, nothing is wrong with it. It is unusual though. Why? Study it, think about it, and you may find out. Try to do it without coaching. If you work at it for a bit it will dawn on you. So jump to it and try your skill at figuring it out. Good luck – don’t blow your cool!",
            number: "67",
            answer: "The most common letter in the English language, the letter e, is not found in the entire paragraph"
        },
        {
            riddle: "When you went into the woods you got me.<br>You hated me yet you wanted to find me.<br>You went home with me cause you couldn’t find me<br>What was it?",
            number: "68",
            answer: "A splinter"
        },
        {
            riddle: "An iron horse with a flaxen tail.<br>The faster the horse runs,<br>the shorter his tail becomes.<br>What is it?",
            number: "69",
            answer: "A needle and thread."
        },
        {
            riddle: "You have to travel far before you turn it over. What is it?",
            number: "70",
            answer: "An odometer"
        },
        {
            riddle: "A mile from end to end, yet as close to as a friend. A precious commodity, freely given. Seen on the dead and on the living. Found on the rich, poor, short and tall, but shared among children most of all. What is it?",
            number: "71",
            answer: "A smile."
        },
        {
            riddle: "I’m full of holes, yet I’m full of water. What am I?",
            number: "72",
            answer: "A sponge"
        },
        {
            riddle: "Four of us are in your field<br>But our differences keep us at yield<br>First, a one that is no fool<br>Though he resembles a gardener’s tool<br>Next, one difficult to split in two<br>And a girl once had one as big as her shoe<br>Then, to the mind, one’s a lovely bonder<br>And truancy makes it grow fonder<br>Last, a stem connecting dots of three<br>Knowing all this, what are we?",
            number: "73",
            answer: "(((The four suits in a deck of standard playing cards.))) The Spade is a gardener’s tool. The Diamond is the hardest gem to break. “Little Girl and Queen” is a Mother Goose rhyme, in which the Queen gave the girl a large diamond for picking the Queen some roses.The Heart bonds with the mind to form love. Absence makes the heart grow fonder.The Club, or Clover, is three dots connected around a stem."
        },
        {
            riddle: "I am a word of meanings three.<br>Three ways of spelling me there be.<br>The first is an odour, a smell if you will.<br>The second some money, but not in a bill.<br>The third is past tense, a method of passing things on or around.<br>Can you tell me now, what these words are, that have the same sound?",
            number: "74",
            answer: "Scent, cent, sent"
        },
        {
            riddle: "It’s red, blue, purple and green, no one can reach it, not even the queen. What is it?",
            number: "75",
            answer: "A rainbow."
        },
        {
            riddle: "What question can you never honestly answer yes to?",
            number: "76",
            answer: "Are you asleep? (or dead)"
        },
        {
            riddle: "What has a neck and no head, two arms but no hands?",
            number: "77",
            answer: "A shirt (or sweater, jacket etc)"
        },
        {
            riddle: "I live in water<br>If you cut my head I’m at your door,<br>If you cut my tail I’m fruit,<br>If you cut both I’m on your head<br>What am I?",
            number: "78",
            answer: "A pearl. They’re found underwater. Removing the head (p) leaves Earl, a guy who could be at your door. Removing the tail (l) leaves pear, a fruit and if you cut both off you’re left with ear, which is with you because it’s attached to your head"
        },
        {
            riddle: "Feed me and I live, give me drink and I die. What am I?",
            number: "79",
            answer: "Fire."
        },
        {
            riddle: "What begins and has no end? What is the ending of all that begins?",
            number: "80",
            answer: "Death"
        },
        {
            riddle: "A man went to the hardware store to buy items for his house.<br>1 would cost $.25<br>12 would cost $.50<br>122 would cost $.75<br>When he left the store he had spent $.75, what did he buy?",
            number: "81",
            answer: "House numbers"
        },
        {
            riddle: "What makes a loud noise when changing its jacket, becomes larger but weighs less?",
            number: "82",
            answer: "Popcorn"
        },
        {
            riddle: "The more you take, the more you leave behind.",
            number: "83",
            answer: "Footsteps"
        },
        {
            riddle: "I am a word of 5 letters and people eat me. If you remove the first letter I become a form of energy. Remove the first two and I’m needed to live. Scramble the last 3 and you can drink me. What am I?",
            number: "84",
            answer: "Wheat, heat, eat, tea"
        },
        {
            riddle: "Before any changes I’m a garlic or spice. My first is altered and I’m a hand-warming device. My second is changed and I’m trees in full bloom. The next letter change makes a deathly old tomb. Change the fourth to make a fruit of the vine. Change the last for a chart plotted with lines. What was I? What did I become? What did I turn out to be?",
            number: "85",
            answer: "Clove, glove, grove, grave, grape, graph"
        },
        {
            riddle: "A woman shoots her husband, then holds him under water for five minutes. Finally, she hangs him. Five minutes later they enjoy a wonderful dinner together. How can this be?",
            number: "86",
            answer: "She took a photo of him and developed it in the dark room."
        },
        {
            riddle: "Remove six letters from this sequence to reveal a familiar English word.<br><br>BSAINXLEATNTEARS",
            number: "87",
            answer: "BANANAS (removed SIX LETTERS)"
        },
        {
            riddle: "Alive without breath,<Br>As cold as death,<br>Clad in mail never clinking,<br>Never thirsty, ever drinking",
            number: "88",
            answer: "A fish"
        },
        {
            riddle: "With thieves I consort,<br>With the vilest, in short,<br>I’m quite at ease in depravity;<br>Yet all divines use me,<br>And savants can’t lose me,<br>For I am the center of gravity.",
            number: "89",
            answer: "The letter V"
        },
        {
            riddle: "Until I am measured<br>I am not known,<br>Yet how you miss me<br>When I have flown.",
            number: "90",
            answer: "Time"
        },
        {
            riddle: "I never was, am always to be,<br>No one ever saw me, nor ever will<br>And yet I am the confidence of all<br>To live and breathe on this terrestrial ball.",
            number: "91",
            answer: "Tomorrow"
        },
        {
            riddle: "Alive without breath,<br>As cold as death,<br>Never thirsty, Ever drinking,<br>Clad in mail, Never clinking,<br>Drowns on dry land,<br>Thinks an island, Is a mountain,<br>Thinks a fountain, Is a puff of air.",
            number: "92",
            answer: "A fish"
        },
        {
            riddle: "This thing all things devours:<br>Birds, beasts, trees, flowers;<br>Gnaws iron, bites steel;<br>Grinds hard stones to meal;<br>Slays king, ruins town,<br>And beats high mountain down.",
            number: "93",
            answer: "Time"
        },
        {
            riddle: "The cost of making only the maker knows,<br>Valueless if bought, but sometimes traded.<br>A poor man may give one as easily as a king.<br>When one is broken pain and deceit are assured.",
            number: "94",
            answer: "Promise"
        },
        {
            riddle: "Who makes it, has no need of it.<br>Who buys it, has no use for it.<br>Who uses it can neither see nor feel it.",
            number: "95",
            answer: "A coffin"
        },
        {
            riddle: "I build up castles. I tear down mountains.<br>I make some men blind,<br>I help others to see.<br>What am I?",
            number: "96",
            answer: "Sand"
        },
        {
            riddle: "Glittering points that downward thrust,<br>Sparkling spears that never rust.",
            number: "97",
            answer: "Icicle"
        },
        {
            riddle: "Die without me, Never thank me.<br>Walk right through me, never feel me.<br>Always watching, never speaking.<br>Always lurking, never seen.",
            number: "98",
            answer: "Air"
        },
        {
            riddle: "Pregnant every time you see her, yet she never will give birth.",
            number: "99",
            answer: "Full Moon"
        },
        {
            riddle: "I go around in circles,<br>But always straight ahead<br>Never complain,<br>No matter where I am led.",
            number: "100",
            answer: "Wheel"
        }
    ];
        var random = Math.floor(Math.random(1) * 100);
        for (var i=0; i<riddles.length; i++){

            var pImg = "<div><h3 class='card-title'><span class='number'>"+riddles[i].number+": </span></div>"
    
            var riddleCard = $("<div class='card advcard'>"+pImg+
            "<div class='card-body'><ul><li>RIDDLE: "+riddles[i].riddle+"</li><img class='divider' src='assets/images/divider.png' alt='divider'><li>ANSWER: "+riddles[i].answer+"</li></ul></div></div>");
    
            if (parseInt(riddles[i].number)===random){
                $(".promptBox").html(riddleCard);
            }
        }
    });

riddles = function(){
    var random = Math.floor(Math.random(1) * 100);

    for (i=0; i<riddles.length; i++){

        var pImg = "<div><h3 class='card-title'><span class='number'>"+one[i].number+": </span></div>"

        var riddleCard = $("<div class='card advcard'>"+pImg+
        "<div class='card-body'><ul><li>"+riddles[i].riddle+"</li><li>"+riddles[i].answer+"</li></ul></div></div>");

        if (parseInt(riddles[i].number)===random){
            $(".promptBox").prepend(riddleCard);
        }
    }
}

// $(document).ready(function(){
//     console.log(window.location.pathname)
// });

{/* <img class='advimg' src='"+world[i].image+"'alt='advimg'></img> */}