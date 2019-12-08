<template>
    <div>
        <h4>Предметы</h4>
        <SubjectTable />
        <button class="btn btn-small" id="crateBtn" @click="create">Create</button>
    </div>
</template>

<script>
    import SubjectTable from '@/components/SubjectTable'

    export default {
        name: "Subjects",
        components: {
            SubjectTable
        },
        methods: {
            create(){
                this.$router.push(`/subjects/-1`);
            }
        }
    }
</script>

<style scoped>
    #crateBtn {
        margin-top: 1vh;
    }
</style>