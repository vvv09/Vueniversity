<template>
    <div>
        <h4>Группы</h4>
        <GroupTable />
        <button class="btn btn-small" id="crateBtn" @click="create">Create</button>
    </div>
</template>

<script>
    import GroupTable from '@/components/GroupTable'

    export default {
        name: "Groups",
        components: {
            GroupTable
        },
        methods: {
            create(){
                this.$router.push(`/groups/-1`);
            }
        }
    }
</script>

<style scoped>
    #crateBtn {
        margin-top: 1vh;
    }
</style>