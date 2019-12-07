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