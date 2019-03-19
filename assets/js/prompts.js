var world = [
    {
        image: "./assets/images/ep.jpg",
        number: "1",
        prompt: "The weekend arrives and you finally have some time away from work. You've decided to spend some time at the local park for some fun low-stress activities.<br><br>   Suddenly you hear loud gunshots and screams. You can see both the assailant and the victims. From where you are, you are mostly obscured from the shooter's sight.<br><br>   The shooter's ride drives off without them. In a fit, they shout threats at the fleeing crowd, seemingly in a rage. They start to walk toward some people fleeing into the trees...",
        name: "Park Shooting",
        period: "Mid Life",
        fire: {
            critSuccess: "X",
            success: "19+<br>You pick up a flat stone by your feet, roughly half a pound in weight. You take aim and hurl it as if skipping across a pond. Beyond any expectations, it ricochets off the sidewalk and into the side of the shooter's head, knocking them unconscious. You disarm them, restrain them, and call for police.<br>",
            failure: "10-18<br>You gather up your rage and step out from behind your cover, shouting. The shooter spots you immediately and fires. You take the shot in your hip and collapse. Shock sets in and you fall unconscious, only to be revived at the hospital with grim news. Even with phisical rehabilitation, your chances of running again are slim to none.<br>",
            critFail: "1-9<br>You charge the shooter. Less than fifty feet seperate you. Hoping to throw them off balance and hold them accountable for their actions, your vision tunnels. You fail to notice the driver has returned. They plow over the curb and two other park goers, careening invariably in your direction. It is too late to escape..."
        },
        water: {
            critSuccess: "X<br>",
            success: "10+<br>You call paramedics and the police from behind your cover. Then slip from one hiding place to the next, getting closer and closer to the fallen victims while the shooter is preocupied. You tear their clothes to tourniquet their open wounds and do your best to assure them that everything will be alright. You insist that they do not make any movement or noise until the ambulance arrives. Then, you slip back to your hiding place to where you wait to give a statement.<br>",
            failure: "1-9<br>You attempt to slip from one hiding place to hiding place but in doing, attract all of the dogs who's leads were dropped in the commotion. You can't attempt to help the fallen victims without giving yourself away. But you will survive if you stay here.<br>",
            critFail: "X"
        },
        air: {
            critSuccess: "X<br>",
            success: "12+<br>Life has been rough up until this point. You're working a dead end job, your car barely runs, food is expensive, and even on your day off, the world seems to fall apart. You sneak back to your vehicle with the intent to flee but remember that it sounds like a drive by every time you pump the gas. With this in mind, you drive around the car park, sounding as many of the gunshot-like sounds as you can. The shooter flees the park and thus abandons their persuit of the innocent park-goers. You relate this to the arriving police officers.<br>",
            failure: "1-12<br>Life has been rough up until this point. You're working a dead end job, your car barely runs, food is expensive, and even on your day off, the world seems to fall apart. You sneak back to your vehicle with the intent to flee. It starts right up and runs quietly. You take this as a sign and leave the park. You are in tact but live with the fact that you had a chance to help but chose to abandon the other people in the park...<br>",
            critFail: "X"
        },
        earth: {
            critSuccess: "X<br>",
            success: "8+<br>You wait patiently for the shooter to be out of sight, looking for any incriminating evidence to link them to the crime. You notice the driver pull back into the parking lot and are able to copy the license plate into your phone. You take a photo of the vehicle and provide this information to the police upon their arrival.<br>",
            failure: "1-8<br>You attempt to gather information on the scene. You see the driver pull back into the parking lot and take a photo of them. As you do, it becomes abundantly apparent that the flash on your phone is on. The vehicle charges toward you. A passenger gets out with a baseball bat and uses it to smash your phone from your hand, then knocks you unconscious. You wake up in the hospital with the other victims with a horrendous headache and a swollen hand, but not critically injured.<br>",
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
            failure: "X<br>",
            critFail: "(1-15)<br>The first emotion to boil up within you is not fear - but anger. Everything was going perfectly until this person decided to interrupt your night. Visions of everyone you love flashes before you: Your family, your crush, your friends - and without a second thought, you lash out and strike the man with the knife. Your strike glances his chin, and suddenly a hot burning sensation rifles through your lower body. Then again, then again, as you hear the sound of thick blood dropping onto the ground. You’ve been stabbed three times, and the final thing you see before you die is the shocked face of your highschool crush.<br>(GAME OVER)"
        },
        water: {
            critSuccess: "X<br>",
            success: "(10+)<br>You hold your hands up and soften your tone very quickly. Look, you tell him, you don’t want any trouble. You tell him that you know the world is a cruel, unfair place, and that you’re happy to give him all the money in your wallet. You wish you could help more. The robber appears to soften just as much as you, and as you reach out to hand your wallet to him, he hesitates. There is a long silence, when the sound of police sirens ring out behind you. Though they are unrelated, the robber snaps to and turns tail. You’re safe, and so is your love.<br>",
            failure: "(1-9)<br>You hand over your wallet without a second thought, and encourage your love to do the same. You say there’s no way in hell sixty bucks and some plastic are worth your life. The robber rifles through the wallet and takes the cash - dropping them both before he runs off. “You’ll just cancel the credit cards anyway.” He mutters, disappearing into the darkness. You’re both safe, but your crush isn’t impressed. You end up sleeping alone in your bed tonight.<br>",
            critFail: "X"
        },
        air: {
            critSuccess: "(8+)<br>You step in front of your crush, shielding them from the assailant. “Calm Down”. You say, honest and humble, but full of strength and will. The spirit of air is speaking through you effortlessly. The man with the knife is taken aback. “What’s going on?” you ask, piercing through his rough appearance with the love of a revered buddhist monk. After some prodding and some silence, the robber is spilling his guts: His child has cancer and he just got fired - he has no idea how to make ends meet. You encourage him to get help - and even give him the business card of a friend who does pro-bono family therapy. The man is strangely hopeful after hearing your encouragement and receiving the love of a total stranger. He throws his knife in the bushes and swears never to commit another crime in his life - then runs off.<br>A full year later, you get an unmarked package in the mail with two-thousand dollars and a picture of a young child in a hospital bed - he is smiling and holding a sign that says 'Cancer Free'.<br>(EXTRA EXP)<br>",
            success: "(4-8)<br>You step in front of your crush, shielding them from the assailant. “Calm Down”. You say, honest and humble, but full of strength and will. The spirit of air is speaking through you effortlessly. The man with the knife is taken aback. “What’s going on?” you ask, piercing through his rough appearance with the love of a revered buddhist monk. After some prodding and some silence, the robber is spilling his guts: His child has cancer and he just got fired - he has no idea how to make ends meet. You encourage him to get help - and even give him the business card of a friend who does pro-bono family therapy. The man is strangely hopeful after hearing your encouragement and receiving the love of a total stranger. He throws his knife in the bushes and swears never to commit another crime in his life - then runs off.<br>",
            failure: "(1-3)<br>You step in front of your crush, shielding them from the assailant. “Calm Down”. You say, honest and humble, but your words are a bit slurred. The spirit of air attempts to speak through you, but you are too altered from the substances of the party. The robber brushes your words off and give you both a good shove - proving he means business. Without another word, you both give up your wallets and walk away defeated. You end up taking your crush to her house - but you do not go in with her. In fact, you never see each other again.<br>",
            critFail: "X"
        },
        earth: {
            critSuccess: "X<br>",
            success: "(12+)<br>You stand straight up and are endowed with the spirit of the earth - as you shout with a booming voice - “You can’t scare us! I’m a trained martial artist in the form of “jeet kun do” and I have no problem fighting you.” You are not a martial artist - but you sure seem like one in that moment. The assailant drops their knife and runs - leaving you and your love to laugh all the way home.<br>",
            failure: "(4-12)<br>You attempt to scare the robber off with a quick word or two, but before you can get your words out, they lunge toward you, knocking you down as they grapple for your wallet. As soon as they’ve got it, they stand up, give you a stern kick, and turn toward your new potential lover. They hand it over as quick as they can, and your newly found criminal acquaintance runs off.<br>",
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
            critSuccess: "(7+)<br>Passion boils up within you - you’ve been waiting for this moment. You drop the hard story of your childhood on her, keeping it short enough to make your point but detailed enough for her to gasp a few times. You make the point clear - there is no one who could be more invested in this cause then you. To your surprise, she is smiling. She has the exact same story, and the exact same reasoning for getting into this industry. Before you know it, she’s taken you under her wing and is paying you incredibly well right out of the gate. Well played.<br>(EXTRA EXP)<br>",
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
            critSuccess: "(10+)<br>Passion boils up within you - you’ve been waiting for this moment. You drop the hard story of your childhood on her, keeping it short enough to make your point but detailed enough for her to gasp a few times. You make the point clear - there is no one who could be more invested in this cause then you. To your surprise, she is smiling. She has the exact same story, and the exact same reasoning for getting into this industry. Before you know it, she’s taken you under her wing and is paying you incredibly well right out of the gate.<br>(EXTRA EXP)<br>",
            success: "X<br>",
            failure: "(1-9)<br>Passion boils up within you - you’ve been waiting for this moment. You drop the hard story of your childhood on her, keeping it short enough to make your point but detailed enough for her to gasp a few times. You make the point clear - there is no one who could be more invested in this cause then you. To your surprise, she is frowning. “Your emotions mean nothing to me” she spits coldly, looking down at her nose at you. “I have the same story, but I never used it as an excuse to get a job. Get out.” You leave feeling like you made the wrong move, and never hear from them again.<br>",
            critFail: "X"
        },
        water: {
            critSuccess: "X<br>",
            success: "(13+)<br>You hold your hands up and soften your tone. “Nothing” you say, shrugging and smiling. “Nothing makes me special yet- but I am a blank canvas, and eager to learn from a master like yourself.” Short and sweet seems to do it for her, and she cracks a sly smile and nods. “I believe you. And i’m looking for someone who I can mold into my predecessor - let’s give you a shot”. You get the job and eventually live out your dream career as a CEO.<br>",
            failure: "(1-12)<br>You open your mouth and what feels like gibberish comes out. It’s hard to draw out your passion and showcase it in that moment. She looks unimpressed, but nods slowly. “Sure.” is all she says. You leave feeling like you played that wrong, and never hear back from that company again.<br>",
            critFail: "X"
        },
        air: {
            critSuccess: "(12+) You look deep into her eyes, and take a deep breath before giving your response. As you tell her how deeply you care for this industry, you take every non-verbal queue perfectly. By the time you’re done, you can tell exactly what it is that she wants to hear, and you give it to her perfectly.<br><br>You can tell she’s impressed, and you can tell that she knows she’s been read.<br><br>“Well done.” She scoffs. “You’re going to do well here.”<br>(EXTRA EXP)<br>",
            success: "X<br>",
            failure: "(1-11)<br>You launch into an impassioned speech about meaning and philosophy, trying to tug at her deepest heart strings. But the harder you trying, the more difficult she becomes to read. At some point, you make your final pitch - and it doesn’t land well. She doesn’t say anything for a while, and then shrugs. “We’ll give you a call if we’re interested” she says coldly. You never hear from them again.<br>",
            critFail: "X"
        },
        earth: {
            critSuccess: "X<br>",
            success: "(10+)<br>You sit up straight and look her dead in the eye without saying a word for a while. You’re confident, bold, and courageous - but you don’t say any of those things. You just look at her, endowed with the strength of the earth spirit. It must be a full minute before she breaks the silence, staying with your eye contact until the very end. Then, very suddenly, she breaks out into an uncharacteristic laughter. “I like it!” She exclaims. “You’re hired!”<br>",
            failure: "(1-9)<br>You sit up straight and look her dead in the eye without saying a word for a while. You’re confident, bold, and courageous - and that’s what you tell her. She looks unimpressed, but nods slowly. “Sure.” is all she says. You leave feeling like you played that wrong, and never hear back from that company again.<br>",
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
            critSuccess: "(10+)<br>Passion boils up within you - you’ve been waiting for this moment. You drop the hard story of your childhood on her, keeping it short enough to make your point but detailed enough for her to gasp a few times. You make the point clear - there is no one who could be more invested in this cause then you. To your surprise, she is smiling. She has the exact same story, and the exact same reasoning for getting into this industry. Before you know it, she’s taken you under her wing and is paying you incredibly well right out of the gate. (EXTRA EXP)<br>",
            success: "X<br>",
            failure: "(1-9)<br>Passion boils up within you - you’ve been waiting for this moment. You drop the hard story of your childhood on her, keeping it short enough to make your point but detailed enough for her to gasp a few times. You make the point clear - there is no one who could be more invested in this cause then you. To your surprise, she is frowning. “Your emotions mean nothing to me” she spits coldly, looking down at her nose at you. “I have the same story, but I never used it as an excuse to get a job. Get out.” You leave feeling like you made the wrong move, and never hear from them again.<br>",
            critFail: "X<br>"
        },
        water: {
            critSuccess: "X<br>",
            success: "(13+)<br>You hold your hands up and soften your tone. “Nothing” you say, shrugging and smiling. “Nothing makes me special yet- but I am a blank canvas, and eager to learn from a master like yourself.” Short and sweet seems to do it for her, and she cracks a sly smile and nods. “I believe you. And i’m looking for someone who I can mold into my predecessor - let’s give you a shot”. You get the job and eventually live out your dream career as a CEO.<br>",
            failure: "(1-12)<br>You open your mouth and what feels like gibberish comes out. It’s hard to draw out your passion and showcase it in that moment. She looks unimpressed, but nods slowly. “Sure.” is all she says. You leave feeling like you played that wrong, and never hear back from that company again.<br>",
            critFail: "X"
        },
        air: {
            critSuccess: "(12+)<br>You look deep into her eyes, and take a deep breath before giving your response. As you tell her how deeply you care for this industry, you take every non-verbal queue perfectly. By the time you’re done, you can tell exactly what it is that she wants to hear, and you give it to her perfectly.<br><br>You can tell she’s impressed, and you can tell that she knows she’s been read.<br><br>“Well done.” She scoffs. “You’re going to do well here.”<br>(EXTRA EXP)<br>",
            success: "X<br>",
            failure: "(1-11)<br>You launch into an impassioned speech about meaning and philosophy, trying to tug at her deepest heart strings. But the harder you trying, the more difficult she becomes to read. At some point, you make your final pitch - and it doesn’t land well. She doesn’t say anything for a while, and then shrugs. “We’ll give you a call if we’re interested” she says coldly. You never hear from them again.<br>",
            critFail: "X"
        },
        earth: {
            critSuccess: "X<br>",
            success: "(10+)<br>You sit up straight and look her dead in the eye without saying a word for a while. You’re confident, bold, and courageous - but you don’t say any of those things. You just look at her, endowed with the strength of the earth spirit. It must be a full minute before she breaks the silence, staying with your eye contact until the very end. Then, very suddenly, she breaks out into an uncharacteristic laughter. “I like it!” She exclaims. “You’re hired!”<br>",
            failure: "(1-9)<br>You sit up straight and look her dead in the eye without saying a word for a while. You’re confident, bold, and courageous - and that’s what you tell her. She looks unimpressed, but nods slowly. “Sure.” is all she says. You leave feeling like you played that wrong, and never hear back from that company again.<br>",
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
            critSuccess: "(10+)<br>Passion boils up within you - you’ve been waiting for this moment. You drop the hard story of your childhood on her, keeping it short enough to make your point but detailed enough for her to gasp a few times. You make the point clear - there is no one who could be more invested in this cause then you. To your surprise, she is smiling. She has the exact same story, and the exact same reasoning for getting into this industry. Before you know it, she’s taken you under her wing and is paying you incredibly well right out of the gate.<br>(EXTRA EXP)<br>",
            success: "X<br>",
            failure: "(1-9)<br>Passion boils up within you - you’ve been waiting for this moment. You drop the hard story of your childhood on her, keeping it short enough to make your point but detailed enough for her to gasp a few times. You make the point clear - there is no one who could be more invested in this cause then you. To your surprise, she is frowning. “Your emotions mean nothing to me” she spits coldly, looking down at her nose at you. “I have the same story, but I never used it as an excuse to get a job. Get out.” You leave feeling like you made the wrong move, and never hear from them again.<br>",
            critFail: "X<br>"
        },
        water: {
            critSuccess: " (8+)<br>You freeze and look up at them with an open heart. Gently, you talk to them about how you don’t think they way they are acting is healthy. You talk about the dangers of attachment, comparison, and making the people you look up to into demigods.<br><br>Later that night, the fan posts a video post parking lot encounter. The fan is reckoning what the change they have to make and how you’ve inspired them to become a more intentional person. It goes viral and is great for both of you. Well done!<br>(EXTRA EXP)<br>",
            success: "X<br>",
            failure: "(1-7)<br>You try to talk them down gently, but it just doesn’t work. They keep speaking over you until you just give up and let them rant. It wastes nearly an hour of your time until they realize you just aren’t into being nice anymore.<br>",
            critFail: ""
        },
        air: {
            critSuccess: "(12+) You look deep into her eyes, and take a deep breath before giving your response. As you tell her how deeply you care for this industry, you take every non-verbal queue perfectly. By the time you’re done, you can tell exactly what it is that she wants to hear, and you give it to her perfectly.<br><br>You can tell she’s impressed, and you can tell that she knows she’s been read.<br><br>“Well done.” She scoffs. “You’re going to do well here.”<br>(EXTRA EXP)<br>",
            success: "X<br>",
            failure: "(1-11)<br>You launch into an impassioned speech about meaning and philosophy, trying to tug at her deepest heart strings. But the harder you trying, the more difficult she becomes to read. At some point, you make your final pitch - and it doesn’t land well. She doesn’t say anything for a while, and then shrugs. “We’ll give you a call if we’re interested” she says coldly. You never hear from them again.<br>",
            critFail: "X"
        },
        earth: {
            critSuccess: "X<br>",
            success: "<br>",
            failure: "<br>",
            critFail: ""
        }
    }
];

var one = [
    {
        image: "",
        number: "",
        prompt: "",
        name: "",
        period: "",
        fire: {
            critSuccess: "X<br>",
            success: "<br>",
            failure: "<br>",
            critFail: "<br>"
        },
        water: {
            critSuccess: "X<br>",
            success: "<br>",
            failure: "<br>",
            critFail: ""
        },
        air: {
            critSuccess: "X<br>",
            success: "<br>",
            failure: "<br>",
            critFail: ""
        },
        earth: {
            critSuccess: "X<br>",
            success: "<br>",
            failure: "<br>",
            critFail: ""
        }
    }
];

var another = [
    {
        image: "",
        number: "",
        prompt: "",
        name: "",
        period: "",
        fire: {
            critSuccess: "X<br>",
            success: "<br>",
            failure: "<br>",
            critFail: "<br>"
        },
        water: {
            critSuccess: "X<br>",
            success: "<br>",
            failure: "<br>",
            critFail: ""
        },
        air: {
            critSuccess: "X<br>",
            success: "<br>",
            failure: "<br>",
            critFail: ""
        },
        earth: {
            critSuccess: "X<br>",
            success: "<br>",
            failure: "<br>",
            critFail: ""
        }
    }
];
switch(window.location.pathname){
    case "/ovs.html":
    ovs();
    console.log("One Vs. Oneself")
    break;
    case "/ovw.html":
    ovw();
    console.log("One Vs. The World")
    break;
    case "/ova.html":
    ova();
    console.log("One Vs. Another")
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
 console.log("One Vs. World");

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
    
    var fire = "<div class='fireData hide'>Critical Success: "+one[i].fire.critSuccess+"<br>Success: "+one[i].fire.success+"<br>Failure: "+one[i].fire.failure+"<br>Critical Failure: "+one[i].fire.critFail+"<div>";

    var earth = "<div class='earthData hide'>Critical Success: "+one[i].earth.critSuccess+"<br>Success: "+one[i].earth.success+"<br>Failure: "+one[i].earth.failure+"<br>Critical Failure: "+one[i].earth.critFail+"<div>";

    var air = "<div class='airData hide'>Critical Success: "+one[i].air.critSuccess+"<br>Success: "+one[i].air.success+"<br>Failure: "+one[i].air.failure+"<br>Critical Failure: "+one[i].air.critFail+"<div>";

    var water = "<div class='waterData hide'>Critical Success: "+one[i].water.critSuccess+"<br>Success: "+one[i].water.success+"<br>Failure: "+one[i].water.failure+"<br>Critical Failure: "+one[i].water.critFail+"<div>";

    var pImg = "<div><h3 class='card-title'><span class='number'>"+one[i].number+": </span>"+one[i].name+": "+one[i].period+"</h3><span></span></div>"

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

function ova(){
    for (var i=0; i <another.length; i++){
        var pButton = "<div class='btn btn-primary prompts'>Prompt</div>";
        
        var eButton = "<div class='btn btn-success earth'>Earth</div>";
        
        var fButton = "<div class='btn btn-danger fire'>Fire</div>";
        
        var aButton = "<div class='btn btn-light air'>Air</div>";
        
        var wButton = "<div class='btn btn-primary water'>Water</div>";
        
        var reactions = "<div class='btn btn-primary reactions'>Reactions</div>";

    var pBody = "<div class='promptData hide'>"+another[i].prompt+"</div>"
    
    var fire = "<div class='fireData hide'>Critical Success: "+another[i].fire.critSuccess+"<br>Success: "+another[i].fire.success+"<br>Failure: "+another[i].fire.failure+"<br>Critical Failure: "+another[i].fire.critFail+"<div>";

    var earth = "<div class='earthData hide'>Critical Success: "+another[i].earth.critSuccess+"<br>Success: "+another[i].earth.success+"<br>Failure: "+another[i].earth.failure+"<br>Critical Failure: "+another[i].earth.critFail+"<div>";

    var air = "<div class='airData hide'>Critical Success: "+another[i].air.critSuccess+"<br>Success: "+another[i].air.success+"<br>Failure: "+another[i].air.failure+"<br>Critical Failure: "+another[i].air.critFail+"<div>";

    var water = "<div class='waterData hide'>Critical Success: "+another[i].water.critSuccess+"<br>Success: "+another[i].water.success+"<br>Failure: "+another[i].water.failure+"<br>Critical Failure: "+another[i].water.critFail+"<div>";

    var pImg = "<div><h3 class='card-title'><span class='number'>"+another[i].number+": </span>"+another[i].name+": "+another[i].period+"</h3><span></span></div>"

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

// $(document).ready(function(){
//     console.log(window.location.pathname)
// });

{/* <img class='advimg' src='"+world[i].image+"'alt='advimg'></img> */}