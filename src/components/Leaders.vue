<template>
    <div id="level-header" class="centered noselect">
        <div @click="gotoMain">
        <i class="fas fa-home"></i></div>
        <div id="word-level">Leaderboard</div>
        <table>
            <thead>
                <tr>
                    <th style="width:10%; background-color: #faa500; border-top-left-radius: 10px;">#</th>
                    <th style="background-color: #faa500;">Name</th>
                    <th style="background-color: #faa500; border-top-right-radius: 10px;">Time</th>
                </tr>
            </thead>
            <tr v-for="(record, id) in records" :key="id">
                <th>{{id+1}}</th>
                <th>{{record.name}}</th>
                <th>{{record.time}}</th>
            </tr>
        </table>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Leaders',
    data() {
        return {
            records: []
        }
    },
    mounted() {
        axios
        .get('https://dumbgame-api.herokuapp.com/api/v1/resources/records/all/',
        {headers: {'Access-Control-Allow-Origin': '*'}})
        .then(response => {
            //var data = JSON.parse(response.data)
            for (var i = 0; i < response.data.length; i++) {
                if(i == 10)break;
                var record = {
                    'name': response.data[i].Player_Name,
                    'time': response.data[i].Player_Time
                }
                this.records.push(record)
            }
        })
        .catch(response => {
            this.records = response
        });
    },
    methods: {
        gotoMain() {
            this.$parent.gotoMain();
        },
        nextLvl() {
            document.getElementById("lvl-passed").classList.add("check-icon");
            document.getElementById("level-message").remove();
            setTimeout(this.$parent.increaseLevel, 2000);
        }
    },
    computed: {
        level() {
            return this.$parent.currentLevel
        }
    }
}

</script>
<style>
table, th, td {
    border-collapse: collapse;
}
th, td {
    padding: 10px;
    background-color: white;
}
@media screen and (min-width: 320px) {
    table {
        margin-top: 2vh;
        width: 80%;
        font-size: 20px;
        margin-left: auto;
        margin-right: auto;
    }
}
@media screen and (min-width: 640px) {
    table {
        margin-top: 2vh;
        width: 80%;
        font-size: 25px;
        margin-left: auto;
        margin-right: auto;
    }
}
@media screen and (min-width: 1000px) {
    table {
        margin-top: 2vh;
        width: 60%;
        font-size: 25px;
        margin-left: auto;
        margin-right: auto;
    }
} 

</style>