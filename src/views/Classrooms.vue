<template>
    <div>
        <h4>Аудитории</h4>
        <ClassroomTable />
        <button class="btn btn-small" id="crateBtn" @click="create">Create</button>
    </div>
</template>

<script>
    import ClassroomTable from '@/components/ClassroomTable'

    export default {
        name: "Classrooms",
        components: {
            ClassroomTable
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