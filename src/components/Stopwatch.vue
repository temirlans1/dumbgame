<template>
    <span class="time">{{ time }}
    </span>
</template>

<script>
export default {
    name: 'Stopwatch',
    data() {
        return {
            milliseconds: 0,
            seconds: 0,
            minutes: 0,
            hours: 0,
            started: null,
            running: false
        }
    },
    methods: {
        run() {
            this.milliseconds ++;
            if(this.milliseconds == 100){
                this.seconds ++;
                this.milliseconds = 0;
            }
            if(this.seconds == 60){
                this.minutes ++;
                this.seconds = 0;
            }
            if(this.minutes == 60){
                this.hours ++;
                this.minutes = 0;
            }
        },
        start() {
            this.started = setInterval(this.run, 10);	
            this.running = true;
        },
        stop() {
            this.running = false;
            this.timeStopped = new Date();
            clearInterval(this.started);
        },
        saveData() {
            localStorage.setItem("milsec", this.milliseconds);
            localStorage.setItem("seconds", this.seconds);
            localStorage.setItem("minutes", this.minutes);
            localStorage.setItem("hours", this.hours);
        },
        setData() {
            this.milliseconds = parseInt(localStorage.milsec);
            this.seconds = parseInt(localStorage.seconds);
            this.minutes = parseInt(localStorage.minutes);
            this.hours = parseInt(localStorage.hours);
        },
        getTime() {
            var t='';
            if(this.hours > 0){
                if(this.hours < 10)t+='0';
                t += this.hours;
                t += 'h:';
            }
            if(this.hours > 0 || this.minutes > 0){
                if(this.minutes < 10)t+='0';
                t += this.minutes;
                t += 'm:';
            }
            if(this.seconds < 10)t+='0';
            t += this.seconds;
            t += 's.';
            t += this.milliseconds;
            t += 'ms ';
            return t;
        }
    },
    computed: {
        time(){
            var t='';
            if(this.hours < 10)t+='0';
            t+=this.hours;
            t+=":";
            if(this.minutes < 10)t+='0';
            t+=this.minutes;
            t+=":";
            if(this.seconds < 10)t+='0';
            t+=this.seconds;
            t+=".";
            t+=this.milliseconds;
            return t;
        }
    }
}

</script>
<style>

@media screen and (min-width: 320px) {
    .time {
        font-size: 15px;
        margin-top: 0.3vh;
    }
}
@media screen and (min-width: 640px) {
    .time {
        font-size: 30px;
        margin-top: 0.6vh;
    }
}
@media screen and (min-width: 1000px) {
    .time {
        font-size: 40px;
        margin-top: 1.6vh;
    }
} 
.time {
    position: absolute;
    color: #ffa500;
    padding: 5px 7px 5px 7px;
}

</style>