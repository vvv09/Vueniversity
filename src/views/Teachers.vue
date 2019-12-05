<template>
    <div>
        <h4>Преподаватели</h4>
        <TeacherList />
    </div>
</template>

<script>
    import TeacherList from '@/components/TeacherList'

    export default {
        name: "Teacher",
        components: {
            TeacherList
        }
    }
</script>

<style scoped>

</style>