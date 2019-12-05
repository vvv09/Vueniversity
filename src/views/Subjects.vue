<template>
    <div>
        <h4>Предметы</h4>
        <SubjectList />
    </div>
</template>

<script>
    import SubjectList from '@/components/SubjectList'

    export default {
        name: "Subjects",
        components: {
            SubjectList
        }
    }
</script>

<style scoped>

</style>