<template>
    <div>
        <h4>Преподаватели</h4>
        <TeacherList />
        <button class="btn btn-small" id="crateBtn" @click="create">Create</button>
    </div>
</template>

<script>
    import TeacherList from '@/components/TeacherTable'

    export default {
        name: "Teacher",
        components: {
            TeacherList
        },
        methods: {
            create(){
                this.$router.push(`/teachers/-1`);
            }
        }
    }
</script>

<style scoped>
    #crateBtn {
        margin-top: 1vh;
    }
</style>