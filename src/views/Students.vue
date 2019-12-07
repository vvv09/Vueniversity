<template>
    <div>
        <h4>Студенты</h4>
        <StudentTable />
        <button class="btn btn-small" id="crateBtn" @click="create">Create</button>
    </div>
</template>

<script>
    import StudentTable from '@/components/StudentTable'

    export default {
        name: "Students",
        components: {
            StudentTable
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