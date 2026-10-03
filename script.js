const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");


// =========================
// YES BUTTON !!
// =========================

yesButton.addEventListener("click", function() {

    document.querySelector(".content").classList.add("fade-out");


    setTimeout(function() {

        document.body.innerHTML = `

            <div class="book-page is-open">

                <img src="photos/bow (1).png" class="bow bow1">
                <img src="photos/bow (2).png" class="bow bow2">

                <img 
                    src="photos/text.png" 
                    alt="Text"
                    class="book-text"
                >



                <div class="memory memory-1">

                    <img 
                        class="memory-photo"
                        src="photos/other/us%20(1).png"
                        alt="Memory"
                    >

                    <div class="memory-description">

                        <h3>
                            A recent pic we took ( つ•̀ω•́)つ
                        </h3>

                        <p>
                            Last day of exams when we went to the music room together :3
                        </p>

                    </div>

                </div>



                <div class="memory memory-2">

                    <img 
                        class="memory-photo"
                        src="photos/other/us%20(2).png"
                        alt="Memory"
                    >

                    <div class="memory-description">

                        <h3>
                            Another recent pic we took !!
                        </h3>

                        <p>
                            I genuinely have no idea when or where we took this hehe ...
                        </p>

                    </div>

                </div>



                <div class="memory memory-3">

                    <img 
                        class="memory-photo"
                        src="photos/other/us%20(3).png"
                        alt="Memory"
                    >

                    <div class="memory-description">

                        <h3>
                            Us with Mellie !!
                        </h3>

                        <p>
                            We played Volleyball during this day ⸜(｡˃ ᵕ ˂ )⸝♡
                        </p>

                    </div>

                </div>



                <div class="memory memory-4">

                    <img 
                        class="memory-photo"
                        src="photos/other/us%20(4).png"
                        alt="Memory"
                    >

                    <div class="memory-description">

                        <h3>
                            The birthday boy ♡
                        </h3>

                        <p>
                            My love, my everything, my world, my baby!
                        </p>

                    </div>

                </div>



                <div class="memory memory-5">

                    <img 
                        class="memory-photo"
                        src="photos/other/us%20(5).png"
                        alt="Memory"
                    >

                    <div class="memory-description">

                        <h3>
                            KTV on my birthday ٩(ˊᗜˋ )و
                        </h3>

                        <p>
                            I lav this photo so mushiiee we look so cute
                        </p>

                    </div>

                </div>



                <div class="memory memory-6">

                    <img 
                        class="memory-photo"
                        src="photos/other/us%20(6).png"
                        alt="Memory"
                    >

                    <div class="memory-description">

                        <h3>
                            Buwan ng Wika !
                        </h3>

                        <p>
                            You're so clingy hehe it makes me nervous (⸝⸝⸝-﹏-⸝⸝⸝)
                        </p>

                    </div>

                </div>



                <div class="memory memory-7">

                    <img 
                        class="memory-photo"
                        src="photos/other/us%20(7).png"
                        alt="Memory"
                    >

                    <div class="memory-description">

                        <h3>
                            Our first date !! ♡
                        </h3>

                        <p>
                            We studied for our exams together in Gongcha ~ (꒪▿꒪)
                        </p>

                    </div>

                </div>


                <!-- CATS =￣v￣= -->

                <img 
                    class="book-cat cat-four"
                    src="photos/cat 4.png"
                    alt="Pixelated cat"
                >

                <img 
                    class="book-cat cat-five"
                    src="photos/cat 5.png"
                    alt="Pixelated cat"
                >


                <!-- HEARTS -->

                <div class="cat-heart heart-1">
                    ♥
                    <div class="heart-reason">
                        You always make me smile even when I'm sad !
                    </div>
                </div>

                <div class="cat-heart heart-2">
                    ♡
                    <div class="heart-reason">
                        How you help me get closer to God :3
                    </div>
                </div>

                <div class="cat-heart heart-3">
                    ♥
                    <div class="heart-reason">
                        I love your stupid cute little dimple 
                    </div>
                </div>

                <div class="cat-heart heart-4">
                    ♥
                    <div class="heart-reason">
                        You make me feel appreciated (/≧▽≦)/
                    </div>
                </div>

                <div class="cat-heart heart-5">
                    ♡
                    <div class="heart-reason">
                        I love all the memories we've made together (P.S we WILL make more.)
                    </div>
                </div>

                <div class="cat-heart heart-6">
                    ♡
                    <div class="heart-reason">
                        How you care a lot about our relationship ( •̀ ω •́ )✧
                    </div>
                </div>

                <div class="cat-heart heart-7">
                    ♥
                    <div class="heart-reason">
                        You always make me feel loved ♡
                    </div>
                </div>

                <div class="cat-heart heart-8">
                    ♥
                    <div class="heart-reason">
                        You make me laugh so much > . < !!
                    </div>
                </div>

                <div class="cat-heart heart-9">
                    ♡
                    <div class="heart-reason">
                        How strong you are (physically, mentally, emotionally, spiritually, etc.)
                    </div>
                </div>

                <div class="cat-heart heart-10">
                    ♡
                    <div class="heart-reason">
                        How I don't even need a reason to love you, I just do
                    </div>
                </div>


                <!-- =========================
                     BOOK
                ========================== -->

                <div class="book">


                    <!-- PAGES 1–2 -->

                    <div class="spread active">

                        <div class="page left-page">

                            <h1>
                                To my one and only love &lt;3
                            </h1>

                            <p>
                                Happy Birthday!! :3
                            </p>

                            <div class="cat-art">
                                ∧,,,∧ <br>
                                (  ̳• · • ̳) <br>
                                /    づ♡
                            </div>

                            <p>
                                I wanted to make something
                                a little special for you,
                                so I made this little website
                                hehe ... :3
                            </p>

                        </div>


                        <div class="page right-page">

                            <h1>
                                ο(=•ω＜=)ρ☆
                            </h1>

                            <p>
                                This page is for all the things
                                I want to tell you,
                                and everything else !!
                            </p>

                            <p>
                                This can serve as a reminder
                                that I'll always love you
                                no matter what happens
                                between us :D
                            </p>

                            <p>
                                So buckle up,
                                because it's about to get long
                                (o゜▽゜)o☆
                            </p>

                        </div>

                    </div>


                    <!-- PAGES 3–4 -->

                    <div class="spread">

                        <div class="page left-page">

                            <h1>
                                (/≧▽≦)/
                            </h1>

                            <p>
                                Loving you is the best decision I have ever made and you are genuinely 
                                the best thing that has ever happened to me and it will continue to stay 
                                that way until I die. I have so much love for you in my heart that I can 
                                barely say it's mine anymore because it's so full of you. <br>
                                ⸜(｡˃ ᵕ ˂ )⸝♡
                            </p>

                        </div>


                        <div class="page right-page">

                            <h1>
                                (⸝⸝⸝>﹏<⸝⸝⸝)
                            </h1>

                            <p>
                                When someone asks me  
                                <i>"Who do you even love? "</i>  
                                I only think about you, and you only. 

                                When someone asks me  
                                "What/Who makes you happy? " 
                                my mind only has one answer, and it's you; 

                                I think that really speaks for itself. 
                                (づ￣ ³￣)づ
                            </p>

                        </div>

                    </div>


                    <!-- PAGES 5–6 -->

                    <div class="spread">

                        <div class="page left-page">

                            <h1>
                                q(≧▽≦q)
                            </h1>

                            <p>
                                I love it when I see something in duos or comes in pairs 
                                and I immediately think 
                                <i>"Hey, that's us in another universe!"</i>
                            </p>

                            <p>
                                I love it when random objects like a volleyball remind me 
                                of you. They make me think 
                                <i>
                                    "I'm not so alone anymore, my heart feels so safe with my baby!"
                                </i>
                            </p>

                            <p>
                                You really do make me the happiest girl in the world 
                                (≧∇≦)/
                            </p>

                        </div>


                        <div class="page right-page">

                            <h1>
                                ( ◕ᗜ◕ )
                            </h1>

                            <p>
                                I really love you, I do. I would do anything for my baby.

                                I would hold you in my arms when you're upset, 
                                wash your hair for you if you didn't have the energy, 
                                and help you when you need it.
                            </p>

                            <p>
                                I would buy or make your favourite things to cheer you up 
                                when you have a bad day.
                            </p>

                        </div>

                    </div>


                    <!-- PAGES 7–8 -->

                    <div class="spread">

                        <div class="page left-page">

                            <h1>
                                ദ്ദി˶˃ ᵕ ˂ )✧
                            </h1>

                            <p>
                                I really would do anything for you— 
                                that's how special you are to me, 
                                and it will continue that way no matter what happens.
                            </p>

                            <p>
                                You mean so much to me, and I hope you never forget 
                                just how loved and appreciated you are.
                                (つ≧▽≦)つ
                            </p>

                        </div>


                        <div class="page right-page">

                            <h1>
                                ꉂꉂ(ᵔᗜᵔ◍)
                            </h1>

                            <p>
                                And because today is your special day, 
                                I hope you remember that you deserve to be celebrated— 
                                not just because it's your birthday, 
                                but because you're someone worth celebrating every day.
                                <br>
                                ≽^•⩊•^≼
                            </p>

                        </div>

                    </div>


                    <!-- PAGES 9–10 -->

                    <div class="spread">

                        <div class="page left-page">

                            <h1>
                                o(≧▽≦)o
                            </h1>

                            <p>
                                I pray this year gives you happiness 
                                and more things to be proud of.
                            </p>

                            <p>
                                I hope this new year of your life brings you 
                                lots of wonderful memories, 
                                fun adventures, 
                                and moments that make you smile.
                            </p>

                            <p>
                                Always remember how many people care about you 
                                and how special you are.
                            </p>

                        </div>


                        <div class="page right-page">

                            <h1>
                                ( •̀ ω •́ )✧
                            </h1>

                            <p>
                                Enjoy your special day today and most importantly, 
                                enjoy being you.
                            </p>

                            <p>
                                I hope this little website can serve as a reminder 
                                of all the love and memories we've shared.
                            </p>

                            <p>
                                Happiest birthday, my love ♡
                            </p>

                            <div class="cat-art">
                                ∧,,,∧ <br>
                                (  ̳• · • ̳) <br>
                                /    づ♡
                            </div>

                        </div>

                    </div>


                </div>
                <!-- END BOOK -->

                <!-- MUSIC -->
                <div id="spotifyPlayer">
                    <iframe
                        data-testid="embed-iframe"
                        style="border-radius:12px"
                        src="https://open.spotify.com/embed/track/5mtTAScDytxMMqZj14NmlN?utm_source=generator&si=f58afe5e8f424910"
                        width="300"
                        height="150"
                        frameBorder="0"
                        allowfullscreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy">
                    </iframe>
                </div>


            </div>
            <!-- END BOOK PAGE -->

        `;


        // =================================
        // BOOK PAGE NAVIGATION OR SMTH IDK
        // =================================

        const spreads = document.querySelectorAll(".spread");
        const book = document.querySelector(".book");

        let currentSpread = 0;


        book.addEventListener("click", function(event) {

            // Only allow clicking on the actual pages
            const page = event.target.closest(".page");

            if (!page) return;


            const bookRect = book.getBoundingClientRect();

            const clickX =
                event.clientX - bookRect.left;


            // =========================
            // LEFT SIDE :P
            // =========================

            if (clickX < bookRect.width / 2) {

                if (currentSpread > 0) {

                    spreads[currentSpread]
                        .classList.remove("active");

                    currentSpread--;

                    spreads[currentSpread]
                        .classList.add("active");

                }

            }


            // =========================
            // RIGHT SIDE :3
            // =========================

            else {

                if (currentSpread < spreads.length - 1) {

                    spreads[currentSpread]
                        .classList.remove("active");

                    currentSpread++;

                    spreads[currentSpread]
                        .classList.add("active");

                }

            }

        });


    }, 600);

});


// =========================
// NO BUTTON !!
// =========================

noButton.addEventListener("mouseover", function() {

    const x = Math.random() * 300 - 150;
    const y = Math.random() * 200 - 100;

    noButton.style.transform =
        `translate(${x}px, ${y}px)`;

});


noButton.addEventListener("click", function() {

    document.body.innerHTML = `

        <div class="sad-page">

            <div class="sad-box">

                <img 
                    src="photos/cat 1.png"
                    alt="Sad cat"
                    class="sad-cat"
                >

                <h1>
                    :( You made me sad ...
                </h1>

                <h2>
                    (refresh the page to restart)
                </h2>

            </div>
            <!-- END BOOK -->

            </div>
            <!-- END BOOK PAGE -->
        </div>

    `;

});
