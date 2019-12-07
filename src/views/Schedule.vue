<template>
    <div>
        <h4>Расписание</h4>
        <ScheduleTable />
        <button class="btn btn-small" id="crateBtn" @click="create">Create</button>
    </div>
</template>

<script>
    import ScheduleTable from '@/components/ScheduleTable'

    export default {
        name: "Schedule",
        components: {
            ScheduleTable
        },
        methods: {
            create(){
                console.log("creating")
            }
        }
    }
</script>

<style scoped>
    #crateBtn {
        margin-top: 1vh;
    }
</style>