<template>
    <div id="welcome_message">
        <div id="welcome_text_container">
        </div>
    </div>
</template>

<script>

    let self;
    export default {
        name: "WelcomeMessage",
        mounted() {
            self = this;
        },
        props: {
            welcomeMessage: Array,
            speed: Number,
        },
        methods: {
            // bless this mess
            welcomeDisplay: function (speed) {
                const welcomeMsg = this.$props.welcomeMessage;
                let count1 = 0;

                (function loop() {
                    if (count1 < welcomeMsg.length) {
                        let count2 = 0;
                        let msgLine = document.createElement("p");
                        let currentLine = document.getElementById("welcome_text_container").appendChild(msgLine);

                        (function printDelay() {
                            // print line char-by-char
                            if (count2 < welcomeMsg[count1].length) {
                                currentLine.innerHTML += welcomeMsg[count1].charAt(count2);
                                count2++;
                                setTimeout(printDelay, speed);
                            // when finished...
                            } else if ((count1 + 1) === welcomeMsg.length) {
                                setTimeout(self.highlightAndReveal, (speed * welcomeMsg[count1 - 1]))
                            } else {
                                // slight delay for first line
                                if (count1 === 0) {
                                    count1++;
                                    setTimeout(loop, 1000)
                                // print next line
                                } else {
                                    count1++;
                                    setTimeout(loop, (speed * welcomeMsg[count1 - 1]))
                                }
                            }
                        })();
                    }
                })();
            },

            highlightAndReveal: function () {
                this.makeTargetable();
                this.highlight(0);
                setTimeout(this.reveal, 300);
            },

            makeTargetable: function () {
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
            },

            highlight: function (count) {
                let target = document.getElementById(count);
                if (target === null) { return; }

                target.style.color = "#ff4dff";

                setTimeout(this.unHighlight, 100, target);
                setTimeout(this.highlight, 100, count + 1);
            },

            unHighlight: function (target) { target.style.color = "whitesmoke"; },

            reveal: function () {
                let target = document.getElementById("home")
                target.style.backgroundColor = "rgba(0,0,0,0)"
            }
        }
    }
</script>

<style scoped>
    #welcome_message {
        z-index: 100000;
        color: whitesmoke;
    }

    #welcome_text_container {
        text-align: center;
        vertical-align: center;
        font-size: 2em;
    }
</style>