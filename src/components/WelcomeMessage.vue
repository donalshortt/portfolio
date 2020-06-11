<template lang="pug">
    div#welcome_message
        div#welcome_text_container
</template>

<script>

    export default {
        name: "WelcomeMessage",
        mounted() {
            welcomeDisplay(50)
        }
    }

    //bless this mess
    function welcomeDisplay(speed) {
        const welcomeMsg = ["HEY I'M DONAL", "I'M A STUDENT DEVELOPER.", "BORN IN IRELAND,", "LIVING IN", "AMSTERDAM,", "AVAILABLE TO", "YOU :)"]
        let count1 = 0;

        (function loop() {
            if (count1 < welcomeMsg.length) {
                let count2 = 0;
                let msgLine = document.createElement("p");
                let currentLine = document.getElementById("welcome_text_container").appendChild(msgLine);

                (function printDelay() {
                    if (count2 < welcomeMsg[count1].length) {
                        currentLine.innerHTML += welcomeMsg[count1].charAt(count2);
                        count2++;
                        setTimeout(printDelay, speed);
                    } else if ((count1 + 1) === welcomeMsg.length) {
                        setTimeout(highlightAndReveal(), (speed * welcomeMsg[count1 - 1]))
                    } else {
                        if (count1 === 0) {
                            count1++;
                            setTimeout(loop, 1000)
                        } else {
                            count1++;
                            setTimeout(loop, (speed * welcomeMsg[count1 - 1]))
                        }
                    }
                })();
            }
        })();
    }

    function highlightAndReveal() {
        makeTargetable();
        highlight(0);
        setTimeout(reveal, 300);
    }

    function makeTargetable() {
        let target = document.getElementById("welcome_text_container").lastChild;
        let targetText = target.innerHTML.split('');
        let count = 0;

        // make each element targetable
        for (let i = 0; i < targetText.length; i++) {
            if (targetText[i] === " ") { continue; }
            targetText[i] = "<span id='" + count + "'>" + targetText[i] + "</span>"
            count++;
        }

        targetText = targetText.join("");
        target.innerHTML = targetText;
    }

    function highlight(count) {
        let target = document.getElementById(count);
        if (target === null) { return; }
        target.style.color = "#ff4dff";
        setTimeout(unHighlight, 100, target);
        setTimeout(highlight, 100, count + 1);
    }

    function unHighlight(target) { target.style.color = "white"; }

    function reveal() {
        let target = document.getElementById("welcome_message")
        target.style.backgroundColor = "rgba(0,0,0,0)"
    }
</script>

<style scoped>
    #welcome_message {
        position: fixed;
        color: #f1f1f1;
        min-width: 100%;
        min-height: 100%;
        align-items: center;
        justify-content: center;
        display: flex;
        background: #333333;
        transition: background-color 1s;
    }

    #welcome_text_container {
        text-align: center;
        vertical-align: center;
        font-size: 2em;
    }

    p {
        color: black;
    }
</style>